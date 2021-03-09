#include "HostControllerService.h"
#include "Client.h"
#include "ReplicatorCredentials.h"
#include "logging/LoggingQtCategories.h"
#include "JsonStrings.h"

#include <rapidjson/document.h>
#include <rapidjson/stringbuffer.h>
#include <rapidjson/writer.h>

#include <QJsonObject>
#include <QJsonDocument>
#include <QJsonArray>

#include <QStandardPaths>
#include <QFile>
#include <QDir>
#include <QDebug>
#include <QUuid>


HostControllerService::HostControllerService(QObject* parent)
    : QObject(parent),
      downloadManager_(&networkManager_),
      storageManager_(&downloadManager_),
      dispatcher_{std::make_shared<HCS_Dispatcher>()}
{
    //handlers for 'cmd'
    clientCmdHandler_.insert( { QByteArray("request_hcs_status"), std::bind(&HostControllerService::onCmdHCSStatus, this, std::placeholders::_1) });
    clientCmdHandler_.insert( { QByteArray("unregister"), std::bind(&HostControllerService::onCmdUnregisterClient, this, std::placeholders::_1) } );
    clientCmdHandler_.insert( { QByteArray("load_documents"), std::bind(&HostControllerService::onCmdLoadDocuments, this, std::placeholders::_1) } );

    hostCmdHandler_.insert( { QByteArray("download_files"), std::bind(&HostControllerService::onCmdHostDownloadFiles, this, std::placeholders::_1) });
    hostCmdHandler_.insert( { QByteArray("dynamic_platform_list"), std::bind(&HostControllerService::onCmdDynamicPlatformList, this, std::placeholders::_1) } );
    hostCmdHandler_.insert( { QByteArray("update_firmware"), std::bind(&HostControllerService::onCmdUpdateFirmware, this, std::placeholders::_1) } );
    hostCmdHandler_.insert( { QByteArray("program_controller"), std::bind(&HostControllerService::onCmdProgramController, this, std::placeholders::_1) } );
    hostCmdHandler_.insert( { QByteArray("download_view"), std::bind(&HostControllerService::onCmdDownloadControlView, this, std::placeholders::_1) });
    hostCmdHandler_.insert( { QByteArray("unregister"), std::bind(&HostControllerService::onCmdHostUnregister, this, std::placeholders::_1) });
    hostCmdHandler_.insert( { QByteArray("check_for_updates"), std::bind(&HostControllerService::onCmdGetUpdateInfo, this, std::placeholders::_1) });
}

HostControllerService::~HostControllerService()
{
    stop();
}

bool HostControllerService::initialize(const QString& config)
{
    if (parseConfig(config) == false) {
        return false;
    }

    dispatcher_->setMsgHandler(std::bind(&HostControllerService::handleMessage, this, std::placeholders::_1) );

    QString baseFolder{QStandardPaths::writableLocation(QStandardPaths::AppDataLocation)};
    if (config_.HasMember("stage")) {
        rapidjson::Value &devStage = config_["stage"];
        if (devStage.IsString()) {
            std::string stage(devStage.GetString(), devStage.GetStringLength());
            std::transform(stage.begin(), stage.end(), stage.begin(), ::toupper);
            qCInfo(logCategoryHcs, "Running in %s setup", qUtf8Printable(stage.data()));
            baseFolder += QString("/%1").arg(qUtf8Printable(stage.data()));
            QDir baseFolderDir{baseFolder};
            if (baseFolderDir.exists() == false) {
                qCDebug(logCategoryHcs) << "Creating base folder" << baseFolder << "-" << baseFolderDir.mkpath(baseFolder);
            }
        }
    }

    storageManager_.setBaseFolder(baseFolder);

    rapidjson::Value& db_cfg = config_["database"];

    if (db_.open(baseFolder.toStdString(), "strata_db") == false) {
        qCCritical(logCategoryHcs) << "Failed to open database.";
        return false;
    }

    // TODO: Will resolved in SCT-517
    //db_.addReplChannel("platform_list");

    connect(&storageManager_, &StorageManager::downloadPlatformFilePathChanged, this, &HostControllerService::sendDownloadPlatformFilePathChangedMessage);
    connect(&storageManager_, &StorageManager::downloadPlatformSingleFileProgress, this, &HostControllerService::sendDownloadPlatformSingleFileProgressMessage);
    connect(&storageManager_, &StorageManager::downloadPlatformSingleFileFinished, this, &HostControllerService::sendDownloadPlatformSingleFileFinishedMessage);
    connect(&storageManager_, &StorageManager::downloadPlatformFilesFinished, this, &HostControllerService::sendDownloadPlatformFilesFinishedMessage);
    connect(&storageManager_, &StorageManager::platformListResponseRequested, this, &HostControllerService::sendPlatformListMessage);
    connect(&storageManager_, &StorageManager::downloadPlatformDocumentsProgress, this, &HostControllerService::sendPlatformDocumentsProgressMessage);
    connect(&storageManager_, &StorageManager::platformDocumentsResponseRequested, this, &HostControllerService::sendPlatformDocumentsMessage);
    connect(&storageManager_, &StorageManager::downloadControlViewFinished, this, &HostControllerService::sendDownloadControlViewFinishedMessage);
    connect(&storageManager_, &StorageManager::downloadControlViewProgress, this, &HostControllerService::sendControlViewDownloadProgressMessage);
    connect(&storageManager_, &StorageManager::platformMetaData, this, &HostControllerService::sendPlatformMetaData);

    /* We dont want to call these StorageManager methods directly
     * as they should be executed in the main thread. Not in dispatcher's thread. */
    connect(this, &HostControllerService::platformListRequested, &storageManager_, &StorageManager::requestPlatformList, Qt::QueuedConnection);
    connect(this, &HostControllerService::platformDocumentsRequested, &storageManager_, &StorageManager::requestPlatformDocuments, Qt::QueuedConnection);
    connect(this, &HostControllerService::downloadPlatformFilesRequested, &storageManager_, &StorageManager::requestDownloadPlatformFiles, Qt::QueuedConnection);
    connect(this, &HostControllerService::cancelPlatformDocumentRequested, &storageManager_, &StorageManager::requestCancelAllDownloads, Qt::QueuedConnection);
    connect(this, &HostControllerService::downloadControlViewRequested, &storageManager_, &StorageManager::requestDownloadControlView, Qt::QueuedConnection);

    connect(this, &HostControllerService::firmwareUpdateRequested, &updateController_, &FirmwareUpdateController::updateFirmware, Qt::QueuedConnection);
    connect(this, &HostControllerService::programControllerRequested, &updateController_, &FirmwareUpdateController::programController, Qt::QueuedConnection);
    connect(this, &HostControllerService::setControllerFwClassIdRequested, &updateController_, &FirmwareUpdateController::setControllerFwClassId, Qt::QueuedConnection);

    connect(this, &HostControllerService::updateInfoRequested, &componentUpdateInfo_, &ComponentUpdateInfo::requestUpdateInfo, Qt::QueuedConnection);
    connect(&componentUpdateInfo_, &ComponentUpdateInfo::requestUpdateInfoFinished, this, &HostControllerService::sendUpdateInfoMessage);

    connect(&boardsController_, &BoardController::boardConnected, this, &HostControllerService::platformConnected);
    connect(&boardsController_, &BoardController::boardDisconnected, this, &HostControllerService::platformDisconnected);
    connect(&boardsController_, &BoardController::boardMessage, this, &HostControllerService::sendMessageToClients);

    connect(&updateController_, &FirmwareUpdateController::progressOfUpdate, this, &HostControllerService::handleUpdateProgress);

    QUrl baseUrl = QString::fromStdString(db_cfg["file_server"].GetString());

    qCInfo(logCategoryHcs) << "file_server url:" << baseUrl.toString();

    if (baseUrl.isValid() == false) {
        qCCritical(logCategoryHcs) << "Provided file_server url is not valid";
        return false;
    }

    if (baseUrl.scheme().isEmpty()) {
        qCCritical(logCategoryHcs) << "file_server url does not have scheme";
        return false;
    }

    storageManager_.setBaseUrl(baseUrl);
    storageManager_.setDatabase(&db_);

    db_.initReplicator(db_cfg["gateway_sync"].GetString(),
        std::string(ReplicatorCredentials::replicator_username).c_str(),
        std::string(ReplicatorCredentials::replicator_password).c_str());

    boardsController_.initialize();

    updateController_.initialize(&boardsController_, &downloadManager_);

    rapidjson::Value& hcs_cfg = config_["host_controller_service"];

    clients_.initialize(dispatcher_, hcs_cfg);
    return true;
}

void HostControllerService::start()
{
    if (dispatcherThread_.get_id() != std::thread::id()) {
        return;
    }

    dispatcherThread_ = std::thread(&HCS_Dispatcher::dispatch, dispatcher_.get());

    qCInfo(logCategoryHcs) << "Host controller service started.";
}

void HostControllerService::stop()
{
    clients_.stop();        // first stop "clients controller" and then stop "dispatcher" (dispatcher receives data from clients controller)

    bool stop_dispatcher = (dispatcherThread_.get_id() != std::thread::id());
    if (stop_dispatcher) {
        dispatcher_->stop();
        dispatcherThread_.join();
    }

    db_.stop();             // db should be stopped last for it receives requests from dispatcher

    if (stop_dispatcher)    // log only once and at the very end
        qCInfo(logCategoryHcs) << "Host controller service stoped.";
}

void HostControllerService::onAboutToQuit()
{
    stop();
}

void HostControllerService::sendDownloadPlatformFilePathChangedMessage(
        const QByteArray &clientId,
        const QString &originalFilePath,
        const QString &effectiveFilePath)
{
    QJsonObject payload {
        { "original_filepath", originalFilePath },
        { "effective_filepath", effectiveFilePath }
    };

    QByteArray notification = createHcsNotification(hcsNotificationType::downloadPlatformFilepathChanged, payload, false);

    clients_.sendMessage(clientId, notification);
}

void HostControllerService::sendDownloadPlatformSingleFileProgressMessage(
        const QByteArray &clientId,
        const QString &filePath,
        qint64 bytesReceived,
        qint64 bytesTotal)
{
    QJsonObject payload {
        { "filepath", filePath },
        { "bytes_received", bytesReceived },
        { "bytes_total", bytesTotal }
    };

    QByteArray notification = createHcsNotification(hcsNotificationType::downloadPlatformSingleFileProgress, payload, false);

    clients_.sendMessage(clientId, notification);
}

void HostControllerService::sendDownloadPlatformSingleFileFinishedMessage(
        const QByteArray &clientId,
        const QString &filePath,
        const QString &errorString)
{
    QJsonObject payload {
        { "filepath", filePath },
        { "error_string", errorString }
    };

    QByteArray notification = createHcsNotification(hcsNotificationType::downloadPlatformSingleFileFinished, payload, false);

    clients_.sendMessage(clientId, notification);
}

void HostControllerService::sendDownloadPlatformFilesFinishedMessage(const QByteArray &clientId, const QString &errorString)
{
    QJsonObject payload;

    if (errorString.isEmpty() == false) {
        payload.insert("error_string", errorString);
    }

    QByteArray notification = createHcsNotification(hcsNotificationType::downloadPlatformSingleFileFinished, payload, false);

    clients_.sendMessage(clientId, notification);
}

void HostControllerService::sendPlatformListMessage(
        const QByteArray &clientId,
        const QJsonArray &platformList)
{
    QJsonObject payload {
        { "list", platformList }
    };

    QByteArray notification = createHcsNotification(hcsNotificationType::allPlatforms, payload, false);

    clients_.sendMessage(clientId, notification);
}

void HostControllerService::sendPlatformDocumentsProgressMessage(
        const QByteArray &clientId,
        const QString &classId,
        int filesCompleted,
        int filesTotal)
{
    QJsonDocument doc;
    QJsonObject message;
    QJsonObject payload;

    payload.insert("type", "document_progress");
    payload.insert("class_id", classId);
    payload.insert("files_completed", filesCompleted);
    payload.insert("files_total", filesTotal);

    message.insert("cloud::notification", payload);
    doc.setObject(message);

    clients_.sendMessage(clientId, doc.toJson(QJsonDocument::Compact));
}

void HostControllerService::sendControlViewDownloadProgressMessage(
        const QByteArray &clientId,
        const QString &partialUri,
        const QString &filePath,
        qint64 bytesReceived,
        qint64 bytesTotal)
{
    QJsonObject payload {
        { "url", partialUri },
        { "filepath", filePath },
        { "bytes_received", bytesReceived },
        { "bytes_total", bytesTotal }
    };

    QByteArray notification = createHcsNotification(hcsNotificationType::controlViewDownloadProgress, payload, false);

    clients_.sendMessage(clientId, notification);
}

void HostControllerService::sendPlatformMetaData(
        const QByteArray &clientId,
        const QString &classId,
        const QJsonArray &controlViewList,
        const QJsonArray &firmwareList,
        const QString &error)
{
    QJsonObject payload;

    payload.insert("class_id", classId);

    if (error.isEmpty()) {
        payload.insert("control_views", controlViewList);
        payload.insert("firmwares", firmwareList);
    } else {
        payload.insert("error", error);
    }

    QByteArray notification = createHcsNotification(hcsNotificationType::platformMetaData, payload, false);

    clients_.sendMessage(clientId, notification);
}

void HostControllerService::sendPlatformDocumentsMessage(
        const QByteArray &clientId,
        const QString &classId,
        const QJsonArray &datasheetList,
        const QJsonArray &documentList,
        const QString &error)
{
    QJsonDocument doc;
    QJsonObject message;
    QJsonObject payload;

    payload.insert("type", "document");
    payload.insert("class_id", classId);

    if (error.isEmpty()) {
        payload.insert("datasheets", datasheetList);
        payload.insert("documents", documentList);
    } else {
        payload.insert("error", error);
    }

    message.insert("cloud::notification", payload);
    doc.setObject(message);

    clients_.sendMessage(clientId, doc.toJson(QJsonDocument::Compact));
}

void HostControllerService::sendDownloadControlViewFinishedMessage(
        const QByteArray &clientId,
        const QString &partialUri,
        const QString &filePath,
        const QString &errorString)
{
    QJsonObject payload {
        { "url", partialUri },
        { "filepath", filePath },
        { "error_string", errorString }
    };

    QByteArray notification = createHcsNotification(hcsNotificationType::downloadViewFinished, payload, false);

    clients_.sendMessage(clientId, notification);
}

bool HostControllerService::parseConfig(const QString& config)
{
    QString filePath;
    if (config.isEmpty()) {
        filePath  = QDir(QStandardPaths::writableLocation(QStandardPaths::AppConfigLocation)).filePath("hcs.config");
    }
    else {
        filePath = config;
    }

    QFile file(filePath);
    if (file.open(QIODevice::ReadOnly) == false) {
        qCCritical(logCategoryHcs) << "Unable to open config file:" << filePath;
        return false;
    }

    QByteArray data = file.readAll();
    file.close();

    rapidjson::Document configuration;
    if (configuration.Parse<rapidjson::kParseCommentsFlag>(data.data()).HasParseError()) {
        qCCritical(logCategoryHcs) << "Parse error on config file!";
        return false;
    }

    if ( ! configuration.HasMember("host_controller_service") ) {
        qCCritical(logCategoryHcs) << "ERROR: No Host Controller Configuration parameters.";
        return false;
    }

    config_ = std::move(configuration);
    return true;
}

void HostControllerService::handleMessage(const PlatformMessage& msg)
{
    switch (msg.msg_type)
    {
        case PlatformMessage::eMsgClientMessage:
            handleClientMsg(msg);
            break;
        default:
            assert(false);
            break;
    }
}

void HostControllerService::platformConnected(const int deviceId)
{
    Q_UNUSED(deviceId)

    //send update to all clients
    broadcastConnectedPlatformListMessage();
}

void HostControllerService::platformDisconnected(const int deviceId)
{
    Q_UNUSED(deviceId)

    //send update to all clients
    broadcastConnectedPlatformListMessage();
}

void HostControllerService::sendMessageToClients(const QString &platformId, const QString &message)
{
    Q_UNUSED(platformId)
    Client* client = getSenderClient();
    if (client != nullptr) {
        clients_.sendMessage(client->getClientId(), message);
    }
}

// clients handler...
void HostControllerService::onCmdHCSStatus(const rapidjson::Value* )
{
    Client* client = getSenderClient();
    Q_ASSERT(client);

    rapidjson::Document doc;
    doc.SetObject();
    doc.AddMember("hcs::notification", "hcs_active", doc.GetAllocator() );

    rapidjson::StringBuffer strbuf;
    rapidjson::Writer<rapidjson::StringBuffer> writer(strbuf);
    doc.Accept(writer);

    clients_.sendMessage(client->getClientId(), QByteArray(strbuf.GetString(), strbuf.GetSize()) );
}

void HostControllerService::onCmdDynamicPlatformList(const rapidjson::Value * )
{
    emit platformListRequested(getSenderClient()->getClientId());
}

void HostControllerService::onCmdUnregisterClient(const rapidjson::Value* )
{
    Client* client = getSenderClient();
    Q_ASSERT(client);

    qCWarning(logCategoryHcs) << "Deprecated command: \"cmd\":\"unregister\", use \"hcs::cmd\":\"unregister\" instead.";
    onCmdHostUnregister(nullptr);
}

void HostControllerService::onCmdLoadDocuments(const rapidjson::Value* payload)
{
    Client* client = getSenderClient();
    if (client == nullptr) {
        qCCritical(logCategoryHcs) << "sender client is missing";
        return;
    }

    if (!payload->HasMember("class_id")) {
        qCCritical(logCategoryHcs) << "class_id key is missing";
        return;
    }

    QString classId = QString::fromStdString((*payload)["class_id"].GetString());
    if (classId.isEmpty()) {
        qCCritical(logCategoryHcs) << "class_id is empty";
        return;
    }

    QByteArray clientId = client->getClientId();
    emit platformDocumentsRequested(clientId, classId);
}

void HostControllerService::onCmdHostUnregister(const rapidjson::Value* )
{
    Client* client = getSenderClient();
    Q_ASSERT(client);

    QByteArray clientId = client->getClientId();

    emit cancelPlatformDocumentRequested(clientId);

    // Remove the client from the mapping
    current_client_ = nullptr;
    clientList_.remove(client);
    qCInfo(logCategoryHcs).nospace().noquote() << "Client unregistered: 0x" << clientId.toHex();
}

void HostControllerService::onCmdHostDownloadFiles(const rapidjson::Value* payload)
{
    QByteArray clientId = getSenderClient()->getClientId();
    QStringList partialUriList;

    QString destinationDir = QString::fromStdString((*payload)["destination_dir"].GetString());
    if (destinationDir.isEmpty()) {
        qCWarning(logCategoryHcs) << "destinationDir attribute is empty";
        return;
    }

    const rapidjson::Value& files = (*payload)["files"];
    if (files.IsArray() == false) {
        qCWarning(logCategoryHcs) << "files attribute is not an array";
        return;
    }

    for (auto it = files.Begin(); it != files.End(); ++it) {
        partialUriList << QString::fromStdString((*it).GetString());
    }

    emit downloadPlatformFilesRequested(clientId, partialUriList, destinationDir);
}

void HostControllerService::onCmdUpdateFirmware(const rapidjson::Value *payload)
{
    Q_ASSERT(payload != nullptr);

    FirmwareUpdateController::UpdateFirmwareData updateData;

    updateData.clientId = getSenderClient()->getClientId();

    if (payload->HasMember("device_id") == false) {
        qCCritical(logCategoryHcs) << "cmd update_firmware - missing device_id attribute";
        return;
    }

    const rapidjson::Value& deviceIdValue = (*payload)["device_id"];
    if (deviceIdValue.IsInt() == false) {
        qCCritical(logCategoryHcs) << "cmd update_firmware - bad format of device_id attribute";
        return;
    }

    updateData.deviceId = deviceIdValue.GetInt();

    QString path;
    if (payload->HasMember("path")) {
        const rapidjson::Value& pathValue = (*payload)["path"];
        path = QString::fromUtf8(pathValue.GetString(), pathValue.GetStringLength());
    }

    if (path.isEmpty()) {
        QString errorString("Path attribute is missing or empty");
        qCWarning(logCategoryHcs).noquote() << "cmd update_firmware -" << errorString;

        QJsonObject payloadBody {
            { "error_string", errorString },
            { "device_id", updateData.deviceId }
        };
        QByteArray notification = createHcsNotification(hcsNotificationType::programController, payloadBody, true);
        clients_.sendMessage(updateData.clientId, notification);

        return;
    }

    updateData.firmwareUrl = storageManager_.getBaseUrl().resolved(QUrl(path));

    if (payload->HasMember("md5")) {
        const rapidjson::Value& md5Value = (*payload)["md5"];
        updateData.firmwareMD5 = QString::fromUtf8(md5Value.GetString(), md5Value.GetStringLength());
    }

    if (updateData.firmwareMD5.isEmpty()) {
        // If 'md5' attribute is empty firmware will be downloaded, but checksum will not be verified.
        qCWarning(logCategoryHcs) << "cmd update_firmware - MD5 attribute is empty";
    }

    updateData.jobUuid = QUuid::createUuid().toString(QUuid::WithoutBraces);

    QJsonObject payloadBody {
        { "job_id", updateData.jobUuid },
        { "device_id", updateData.deviceId }
    };
    QByteArray notification = createHcsNotification(hcsNotificationType::updateFirmware, payloadBody, true);
    clients_.sendMessage(updateData.clientId, notification);

    emit firmwareUpdateRequested(updateData);
}

void HostControllerService::onCmdProgramController(const rapidjson::Value *payload)
{
    Q_ASSERT(payload != nullptr);

    FirmwareUpdateController::ProgramControllerData programData;

    programData.clientId = getSenderClient()->getClientId();

    if (payload->HasMember("device_id") == false) {
        qCCritical(logCategoryHcs) << "cmd program_controller - missing device_id attribute";
        return;
    }

    const rapidjson::Value& deviceIdValue = (*payload)["device_id"];
    if (deviceIdValue.IsInt() == false) {
        qCCritical(logCategoryHcs) << "cmd program_controller - bad format of device_id attribute";
        return;
    }

    programData.deviceId = deviceIdValue.GetInt();

    QString errorString;

    do {
        strata::device::DevicePtr device = boardsController_.getDevice(programData.deviceId);
        if (device == nullptr) {
            errorString = "Device ID 0x" + QString::number(static_cast<uint>(programData.deviceId), 16) + " doesn't exist";
            break;
        }

        if (device->isControllerConnectedToPlatform() == false) {
            errorString = "Controller (dongle) is not connected to platform (board)";
            break;
        }

        programData.firmwareClassId = device->classId();
        QString controllerClassId = device->controllerClassId();
        if (programData.firmwareClassId.isEmpty() || controllerClassId.isEmpty()) {
            errorString = "Platform has no classId or controllerClassId";
            break;
        }

        QPair<QUrl,QString> firmware = storageManager_.getFirmwareUriMd5(programData.firmwareClassId, controllerClassId);
        if (firmware.first.isEmpty()) {
            errorString = "No compatible firmware for your combination of controller and platform";
            break;
        }
        programData.firmwareUrl = storageManager_.getBaseUrl().resolved(firmware.first);
        programData.firmwareMD5 = firmware.second;

        QString currentMD5;
        if (device->applicationVer().isEmpty() == false) {
            firmware = storageManager_.getFirmwareUriMd5(programData.firmwareClassId, controllerClassId, device->applicationVer());
            currentMD5 = firmware.second;
        } else {
            qCInfo(logCategoryHcs) << device << "Device has probably no firmware.";
        }
        if (currentMD5.isNull()) {
            qCWarning(logCategoryHcs) << device << "Cannot get MD5 of curent firmware from database.";
        }

        programData.jobUuid = QUuid::createUuid().toString(QUuid::WithoutBraces);

        QJsonObject payloadBody {
            { "job_id", programData.jobUuid },
            { "device_id", programData.deviceId }
        };
        QByteArray notification = createHcsNotification(hcsNotificationType::programController, payloadBody, true);
        clients_.sendMessage(programData.clientId, notification);

        if (currentMD5 != programData.firmwareMD5
                || programData.firmwareMD5.isEmpty()
                || currentMD5.isEmpty()) {
            emit programControllerRequested(programData);
        } else {
            emit setControllerFwClassIdRequested(programData);
        }

        return;

    } while (false);

    qCWarning(logCategoryHcs).noquote() << errorString;

    QJsonObject payloadBody {
        { "error_string", errorString },
        { "device_id", programData.deviceId }
    };
    QByteArray notification = createHcsNotification(hcsNotificationType::programController, payloadBody, true);
    clients_.sendMessage(programData.clientId, notification);
}

void HostControllerService::onCmdDownloadControlView(const rapidjson::Value* payload)
{
    QByteArray clientId = getSenderClient()->getClientId();

    QString partialUri = QString::fromStdString((*payload)["url"].GetString());
    if (partialUri.isEmpty()) {
        qCWarning(logCategoryHcs) << "url attribute is empty";
        return;
    }

    QString md5 = QString::fromStdString((*payload)["md5"].GetString());
    if (md5.isEmpty()) {
        qCWarning(logCategoryHcs) << "md5 attribute is empty";
        return;
    }

    QString class_id = QString::fromStdString((*payload)["class_id"].GetString());
    if (class_id.isEmpty()) {
        qCWarning(logCategoryHcs) << "class_id attribute is empty";
    }

    emit downloadControlViewRequested(clientId, partialUri, md5, class_id);
}

Client* HostControllerService::getClientById(const QByteArray& client_id)
{
    auto findIt = std::find_if(clientList_.begin(), clientList_.end(),
                               [&](Client* val) { return client_id == val->getClientId(); }  );

    return (findIt != clientList_.end()) ? *findIt : nullptr;
}

void HostControllerService::handleClientMsg(const PlatformMessage& msg)
{
    QByteArray clientId = msg.from_client;

    //check the client's ID (dealer_id) is in list
    Client* client = getClientById(clientId);
    if (client == nullptr) {
        qCInfo(logCategoryHcs).nospace().noquote() << "new Client: 0x" << clientId.toHex();

        client = new Client(clientId);
        clientList_.push_back(client);
    }

    current_client_ = client;

    rapidjson::Document service_command;
    if (service_command.Parse(msg.message.constData(), msg.message.size()).HasParseError()) {
        qCWarning(logCategoryHcs).nospace().noquote() << "Client: 0x" << clientId.toHex() << " parse error!";
        return;
    }

    auto firstIt = service_command.MemberBegin();
    QByteArray msg_type(firstIt->name.GetString(), firstIt->name.GetStringLength());

    rapidjson::Value* payload = nullptr;
    if (service_command.HasMember("payload")) {
        payload = &(service_command["payload"]);
    }

    if (service_command.HasMember("device_id")) {
        if (service_command["device_id"].IsInt() == false) {
            qCCritical(logCategoryHcs) << "device_id is not integer";
            return;
        }

        boardsController_.sendMessage(service_command["device_id"].GetInt(), msg.message);
        return;
    }

    QByteArray cmd_name(firstIt->value.GetString(), firstIt->value.GetStringLength());
    qCInfo(logCategoryHcs).nospace().noquote() << "Client: 0x"
            << clientId.toHex() << ", Type: " << msg_type << ", cmd: " << cmd_name;

    if (msg_type == "hcs::cmd") {

        auto findIt = hostCmdHandler_.find(cmd_name);
        if (findIt == hostCmdHandler_.end()) {
            //TODO: error handling...
            qCWarning(logCategoryHcs).nospace().noquote() << "Unhandled command, Client: 0x"
                    << clientId.toHex() << ", Type: " << msg_type << ", cmd: " << cmd_name;
            return;
        }

        findIt->second(payload);
    }
    else if (msg_type == "cmd") {

        auto findIt = clientCmdHandler_.find(cmd_name);
        if (findIt == clientCmdHandler_.end()) {
            qCWarning(logCategoryHcs).nospace().noquote() << "Unhandled command, Client: 0x"
                    << clientId.toHex() << ", Type: " << msg_type << ", cmd: " << cmd_name;
            return;
        }

        findIt->second(payload);
    }
    else {
        qCWarning(logCategoryHcs).nospace().noquote() << "Unhandled command type, Client: 0x"
                << clientId.toHex() << ", Type: " << msg_type << ", cmd: " << cmd_name;
        return;
    }
}

bool HostControllerService::broadcastMessage(const QString& message)
{
    qCInfo(logCategoryHcs).noquote().nospace() << "broadcast msg: '" << message << "'";
    for(auto item : clientList_) {
        QByteArray clientId = item->getClientId();
        clients_.sendMessage(clientId, message);
    }

    return false;
}

void HostControllerService::handleUpdateProgress(int deviceId, QByteArray clientId, FirmwareUpdateController::UpdateProgress progress)
{
    Q_UNUSED(deviceId)

    QString jobType;
    switch (progress.operation) {
    case FirmwareUpdateController::UpdateOperation::Download :
        jobType = "download_progress";
        break;
    case FirmwareUpdateController::UpdateOperation::ClearFwClassId :
        jobType = "clear_fw_class_id";
        break;
    case FirmwareUpdateController::UpdateOperation::SetFwClassId :
        jobType = "set_fw_class_id";
        break;
    case FirmwareUpdateController::UpdateOperation::Prepare :
        jobType = "prepare";
        break;
    case FirmwareUpdateController::UpdateOperation::Backup :
        jobType = "backup_progress";
        break;
    case FirmwareUpdateController::UpdateOperation::Flash :
        jobType = "flash_progress";
        break;
    case FirmwareUpdateController::UpdateOperation::Restore :
        jobType = "restore_progress";
        break;
    case FirmwareUpdateController::UpdateOperation::Finished :
        jobType = "finished";
        // Do not send progress information in this job type.
        progress.complete = -1;
        progress.total = -1;
        break;
    }

    QString jobStatus;
    if (progress.operation == FirmwareUpdateController::UpdateOperation::Finished) {
        switch (progress.status) {
        case FirmwareUpdateController::UpdateStatus::Running :
        case FirmwareUpdateController::UpdateStatus::Success :
            jobStatus = "success";
            break;
        case FirmwareUpdateController::UpdateStatus::Unsuccess :
            jobStatus = "unsuccess";
            break;
        case FirmwareUpdateController::UpdateStatus::Failure :
            jobStatus = "failure";
            break;
        }
    } else {
        if (progress.status == FirmwareUpdateController::UpdateStatus::Running) {
            jobStatus = "running";
        } else {
            jobStatus = "failure";
        }
    }

    QJsonObject payload {
        { "job_id", progress.jobUuid },
        { "job_type", jobType },
        { "job_status", jobStatus }
    };
    if ((progress.complete >= 0) && (progress.total > 0)) {
        payload.insert("complete", progress.complete);
        payload.insert("total", progress.total);
    }
    if (progress.status == FirmwareUpdateController::UpdateStatus::Failure ||
            progress.status == FirmwareUpdateController::UpdateStatus::Unsuccess) {
        payload.insert("error_string", progress.error);
    }
    hcsNotificationType type = (progress.workWithController)
            ? hcsNotificationType::programControllerJob
            : hcsNotificationType::updateFirmwareJob;
    QByteArray notification = createHcsNotification(type, payload, true);

    // This notification must be sent before broadcasting new platforms list.
    // Message order is very important for Developer Studio.
    clients_.sendMessage(clientId, notification);

    if (progress.operation == FirmwareUpdateController::UpdateOperation::Finished &&
            progress.status == FirmwareUpdateController::UpdateStatus::Success) {
        // If firmware was updated broadcast new platforms list
        // to indicate the firmware version has changed.
        broadcastConnectedPlatformListMessage();
    }
}

const char* HostControllerService::hcsNotificationTypeToString(hcsNotificationType notificationType)
{
    const char* type = "";

    switch (notificationType) {
    case hcsNotificationType::downloadPlatformFilepathChanged:
        type = "download_platform_filepath_changed";
        break;
    case hcsNotificationType::downloadPlatformSingleFileProgress:
        type = "download_platform_single_file_progress";
        break;
    case hcsNotificationType::downloadPlatformSingleFileFinished:
        type = "download_platform_single_file_finished";
        break;
    case hcsNotificationType::downloadPlatformFilesFinished:
        type = "download_platform_files_finished";
        break;
    case hcsNotificationType::allPlatforms:
        type = "all_platforms";
        break;
    case hcsNotificationType::platformMetaData:
        type = "platform_meta_data";
        break;
    case hcsNotificationType::controlViewDownloadProgress:
        type = "control_view_download_progress";
        break;
    case hcsNotificationType::downloadViewFinished:
        type = "download_view_finished";
        break;
    case hcsNotificationType::updatesAvailable:
        type = "updates_available";
        break;
    case hcsNotificationType::updateFirmware:
        type = "update_firmware";
        break;
   case hcsNotificationType::updateFirmwareJob:
        type = "update_firmware_job";
        break;
    case hcsNotificationType::programController:
        type = "program_controller";
        break;
    case hcsNotificationType::programControllerJob:
        type = "program_controller_job";
        break;
    }

    return type;
}

QByteArray HostControllerService::createHcsNotification(hcsNotificationType notificationType, const QJsonObject &payload, bool standalonePayload)
{
    const char* type = hcsNotificationTypeToString(notificationType);
    QJsonObject notificationBody {
        { "type", type }
        //, { "payload", payload }  // TODO uncomment this when all notifications will have standalone payload
    };

    // workaround for support of old notification style (without standalone paylod object)
    if (standalonePayload) {
        notificationBody.insert("payload", payload);
    } else {
        for (auto it = payload.constBegin(); it != payload.constEnd(); ++it) {
            notificationBody.insert(it.key(), it.value());
        }
    }

    QJsonObject message {
        { "hcs::notification", notificationBody }
    };

    QJsonDocument doc(message);

    return doc.toJson(QJsonDocument::Compact);
}

void HostControllerService::onCmdGetUpdateInfo(const rapidjson::Value * )
{
    emit updateInfoRequested(getSenderClient()->getClientId());
}

void HostControllerService::sendUpdateInfoMessage(const QByteArray &clientId, const QJsonArray &componentList, const QString &errorString)
{
    QJsonObject payload;
    if ((componentList.isEmpty() == false) || errorString.isEmpty()) {  // if list is empty, but no error is set, it means we have no updates available
        payload.insert("component_list", componentList);
    }
    if (errorString.isEmpty() == false) {
        payload.insert("error_string", errorString);
    }

    QByteArray notification = createHcsNotification(hcsNotificationType::updatesAvailable, payload, false);

    clients_.sendMessage(clientId, notification);
}

void HostControllerService::broadcastConnectedPlatformListMessage()
{
    QJsonArray connectedPlatformList = boardsController_.createPlatformsList();

    QJsonObject notification {
        { JSON_LIST, connectedPlatformList },
        { JSON_TYPE, JSON_CONNECTED_PLATFORMS }
    };

    QJsonObject message {
        { JSON_HCS_NOTIFICATION, notification }
    };

    QJsonDocument doc(message);

    broadcastMessage(doc.toJson(QJsonDocument::Compact));
}
