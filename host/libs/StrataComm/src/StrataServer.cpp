#include "StrataServer.h"
#include "logging/LoggingQtCategories.h"

using namespace strata::strataComm;

StrataServer::StrataServer(QString address, QObject *parent) : 
    QObject(parent),
    dispatcher_(this),
    clientsController_(this),
    connector_(address, this)
{
    qCDebug(logCategoryStrataServer) << "StrataServer constructor";
}

StrataServer::~StrataServer() {
    qCDebug(logCategoryStrataServer) << "StrataServer Destructor";
}

void StrataServer::init() {
    qCDebug(logCategoryStrataServer) << "StrataServer Init";
    connector_.initilize();
    connect(&connector_, &ServerConnector::newMessageRecived, this, &StrataServer::newClientMessage);
    connect(this, &StrataServer::dispatchHandler, &dispatcher_, &Dispatcher::dispatchHandler);
}

// void StrataServer::start(){
//     qCDebug(logCategoryStrataServer) << "StrataServer start";

// }

// void StrataServer::notifyClient(){
//     qCDebug(logCategoryStrataServer) << "StrataServer notifyClient";

// }

void StrataServer::registerHandler(const QString &handlerName, StrataHandler handler) {
    qCDebug(logCategoryStrataServer) << "StrataServer registerHandler";
    dispatcher_.registerHandler(handlerName, handler);
}

// void StrataServer::unregisterHandler(){
//     qCDebug(logCategoryStrataServer) << "StrataServer unregisterHandler";

// }

void StrataServer::newClientMessage(const QByteArray &clientId, const QByteArray &message) {
    qCDebug(logCategoryStrataServer) << "StrataServer newClientMessage";
    qCDebug(logCategoryStrataServer) << "Client ID:" << clientId << "Message:" << message;

    
    QJsonParseError jsonParseError;
    QJsonDocument jsonDocument = QJsonDocument::fromJson(message, &jsonParseError);

    if (jsonParseError.error != QJsonParseError::NoError) {
        qCDebug(logCategoryStrataServer) << "invalid JSON message.";
        return;
    }
    QJsonObject jsonObject = jsonDocument.object();


    ClientMessage clientMessage;
    clientMessage.clientID = clientId;
    ApiVersion apiVersion;

    // check if registered client
    if (false == clientsController_.isRegisteredClient(clientId)) {
        qCDebug(logCategoryStrataServer) << "client not registered";

        // Figure out the client api version.
        if ((true == jsonObject.contains("jsonrpc"))) {
            if ((true == jsonObject.value("jsonrpc").isString()) && (jsonObject.value("jsonrpc") == "2.0")) {
                apiVersion = ApiVersion::v2;
                qCDebug(logCategoryStrataServer) << "API v2";
            } else {
                apiVersion = ApiVersion::none;
                qCCritical(logCategoryStrataServer) << "Unknown API.";
                return;
            }
        } else {
            qCDebug(logCategoryStrataServer) << "API v1";
            apiVersion = ApiVersion::v1;
        }

        // register the client.
        if (false == clientsController_.registerClient(Client(clientId, apiVersion))) {
            qCCritical(logCategoryStrataServer) << "Failed to register client";
            return;
        }

        qCInfo(logCategoryStrataServer) << "Client registered successfully";

    } else {
        // returning client. get the api from the client controller.
        apiVersion = clientsController_.getClientApiVersion(clientId);
    }

    if (apiVersion == ApiVersion::v2) {
        if (false == buildClientMessageApiV2(jsonObject, &clientMessage)) {
            return;
        }
    } else {
        if (false == buildClientMessageApiV1(jsonObject, &clientMessage)) {
            return;
        }
    }

    qCDebug(logCategoryStrataServer) << "------------------------------------------------------------";
    qCDebug(logCategoryStrataServer) << "parsed client message:";
    qCDebug(logCategoryStrataServer) << "Json message" << message;
    qCDebug(logCategoryStrataServer) << "handlerName" << clientMessage.handlerName ;
    qCDebug(logCategoryStrataServer) << "payload" << clientMessage.payload ;
    qCDebug(logCategoryStrataServer) << "messageID" << clientMessage.messageID ;
    qCDebug(logCategoryStrataServer) << "messageType" << clientMessage.messageType ;
    qCDebug(logCategoryStrataServer) << "clientID" << clientMessage.clientID ;
    qCDebug(logCategoryStrataServer) << "Api Version" << static_cast<int>(apiVersion);
    qCDebug(logCategoryStrataServer) << "------------------------------------------------------------";

    emit dispatchHandler(clientMessage);
}

bool StrataServer::buildClientMessage(const QByteArray &message, ClientMessage *clientMessage){
    qCDebug(logCategoryStrataServer) << "StrataServer buildClientMessage";
    
    QJsonParseError jsonParseError;
    QJsonDocument jsonDocument = QJsonDocument::fromJson(message, &jsonParseError);

    if (jsonParseError.error != QJsonParseError::NoError) {
        qCDebug(logCategoryStrataServer) << "invalid JSON message.";
        return false;
    }

    // Create the JsonObject
    QJsonObject jsonObject = jsonDocument.object();

    // Check if the json have "jsonrpc" or not?
    if ((true == jsonObject.contains("jsonrpc")) && (jsonObject.value("jsonrpc") == "2.0")) {
        qCDebug(logCategoryStrataServer) << "uses new api!";
        // Parse this format
        // {
        //     "jsonrpc": "2.0",
        //     "method":"register_client",
        //     "params": {
        //         "api_version": "1.0"
        //     },
        //     "id":1
        // }

        // populate the handlerName -> method
        if ((true == jsonObject.contains("method")) && (jsonObject.value("method").isString())) {
            clientMessage->handlerName = jsonObject.value("method").toString();
        } else {
            qCCritical(logCategoryStrataServer) << "Failed to process handler name.";
            return false;
        }

        // populate the payload --> param
        if ((true == jsonObject.contains("params")) && (true == jsonObject.value("params").isObject())) {
            clientMessage->payload = jsonObject.value("params").toObject();
        } else {
            qCCritical(logCategoryStrataServer) << "Failed to process message payload.";
            return false;
        }

        // populate messageID --> id
        if ((true == jsonObject.contains("id") && (true == jsonObject.value("id").isDouble()))) {
            clientMessage->messageID = jsonObject.value("id").toDouble();
        } else {
            qCCritical(logCategoryStrataServer) << "Failed to process message id.";
            return false;
        }

        // populate message type --> request.
        clientMessage->messageType = ClientMessage::MessageType::Command;

    } else {
        qCDebug(logCategoryStrataServer) << "uses old api.";

        // fill the handler name 
        if((true == jsonObject.contains("cmd")) && (true == jsonObject.value("cmd").isString())) {
            clientMessage->handlerName = jsonObject.value("cmd").toString();
        } else if ((true == jsonObject.contains("hcs::cmd")) && (true == jsonObject.value("hcs::cmd").isString())) {
            clientMessage->handlerName = jsonObject.value("hcs::cmd").toString();
        } else {
            qCCritical(logCategoryStrataServer) << "Failed to process handler name.";
            return false;
        }

        // populate the payload
        // documentation show messages with no payload is valid.
        if ((true == jsonObject.contains("payload")) && (jsonObject.value("payload").isObject())) {
            clientMessage->payload = jsonObject.value("payload").toObject();
        } else {
            qCCritical(logCategoryStrataServer) << "Failed to process message payload.";
            return false;
        }

        // no id here, and it is always request.
        clientMessage->messageID = -1;
        clientMessage->messageType = ClientMessage::MessageType::Command;
    }
    return true;
}

bool StrataServer::buildClientMessageApiV2(const QJsonObject &jsonObject, ClientMessage *clientMessage) {
    if ((true == jsonObject.contains("jsonrpc")) && (true == jsonObject.value("jsonrpc").isString())) {
        if (jsonObject.value("jsonrpc") == "2.0") {
            qCDebug(logCategoryStrataServer) << "valid API Identifier";
        } else {
            qCCritical(logCategoryStrataServer) << "Invalid or missing api version";
            return false;
        }
    } else {
            qCCritical(logCategoryStrataServer) << "Invalid or missing api identifier";
            return false;
    }

    // populate the handlerName -> method
    if ((true == jsonObject.contains("method")) && (jsonObject.value("method").isString())) {
        clientMessage->handlerName = jsonObject.value("method").toString();
    } else {
        qCCritical(logCategoryStrataServer) << "Failed to process handler name.";
        return false;
    }

    // populate the payload --> param
    if ((true == jsonObject.contains("params")) && (true == jsonObject.value("params").isObject())) {
        clientMessage->payload = jsonObject.value("params").toObject();
    } else {
        qCCritical(logCategoryStrataServer) << "Failed to process message payload.";
        return false;
    }

    // populate messageID --> id
    if ((true == jsonObject.contains("id") && (true == jsonObject.value("id").isDouble()))) {
        clientMessage->messageID = jsonObject.value("id").toDouble();
    } else {
        qCCritical(logCategoryStrataServer) << "Failed to process message id.";
        return false;
    }

    // populate message type --> request.
    clientMessage->messageType = ClientMessage::MessageType::Command;
    return true;
}

bool StrataServer::buildClientMessageApiV1(const QJsonObject &jsonObject, ClientMessage *clientMessage) {
    qCDebug(logCategoryStrataServer) << "uses old api :(";

    // fill the handler name 
    if((true == jsonObject.contains("cmd")) && (true == jsonObject.value("cmd").isString())) {
        clientMessage->handlerName = jsonObject.value("cmd").toString();
    } else if ((true == jsonObject.contains("hcs::cmd")) && (true == jsonObject.value("hcs::cmd").isString())) {
        clientMessage->handlerName = jsonObject.value("hcs::cmd").toString();
    } else {
        qCCritical(logCategoryStrataServer) << "Failed to process handler name.";
        return false;
    }

    // populate the payload
    // documentation show messages with no payload is valid.
    if ((true == jsonObject.contains("payload")) && (jsonObject.value("payload").isObject())) {
        clientMessage->payload = jsonObject.value("payload").toObject();
    } else {
        qCCritical(logCategoryStrataServer) << "Failed to process message payload.";
        return false;
    }

    // no id here, and it is always request.
    clientMessage->messageID = 0;
    clientMessage->messageType = ClientMessage::MessageType::Command;

    return true;
}

void StrataServer::notifyClient(const ClientMessage &clientMessage, const QJsonObject &jsonObject, ClientMessage::ResponseType responseType) {
    // determine the Api version of the client.
    // determine the type of the response.

    QByteArray serverMessage;

    switch (clientsController_.getClientApiVersion(clientMessage.clientID))
    {
    case ApiVersion::v1:
        qCDebug(logCategoryStrataServer) << "building message for API v1";
        serverMessage = buildServerMessageAPIv1(clientMessage, jsonObject, responseType);
        if(serverMessage == "") {
            return;
        }
        break;

    case ApiVersion::v2:
        qCDebug(logCategoryStrataServer) << "building message for API v2";
        serverMessage = buildServerMessageAPIv2(clientMessage, jsonObject, responseType);
        break;

    case ApiVersion::none:
        qCCritical(logCategoryStrataServer) << "unsupported API version.";
        return;
        break;
    }

    connector_.sendMessage(clientMessage.clientID, serverMessage);
}

void StrataServer::notifyAllClients() {

}

void StrataServer::registerNewClientHandler(const ClientMessage &clientMessage) {

}

void StrataServer::unregisterClientHandler(const ClientMessage &clientMessage) {

}

QByteArray StrataServer::buildServerMessageAPIv2(const ClientMessage &clientMessage, const QJsonObject &payload, ClientMessage::ResponseType responseType) {
    QJsonObject jsonObject{{"jsonrpc", "2.0"}};

    switch (responseType)
    {
    case strata::strataComm::ClientMessage::ResponseType::Notification:
        jsonObject.insert("method", clientMessage.handlerName);
        jsonObject.insert("params", payload);
        break;

    case strata::strataComm::ClientMessage::ResponseType::Response:
        jsonObject.insert("result", payload);
        jsonObject.insert("id", clientMessage.messageID);
        break;

    case strata::strataComm::ClientMessage::ResponseType::Error:
        jsonObject.insert("error", payload);
        jsonObject.insert("id", clientMessage.messageID);
        break;

    case strata::strataComm::ClientMessage::ResponseType::PlatformMessage:
        jsonObject.insert("method", "platform_notification");
        jsonObject.insert("params", payload);
        break;
    }

    QJsonDocument jsonDocument(jsonObject);
    QByteArray jsonByteArray = jsonDocument.toJson(QJsonDocument::JsonFormat::Compact);

    return jsonByteArray;
}

QByteArray StrataServer::buildServerMessageAPIv1(const ClientMessage &clientMessage, const QJsonObject &payload, ClientMessage::ResponseType responseType) {
    QJsonObject jsonObject;
    QString notificationType = "";

    switch (responseType)
    {
    case strata::strataComm::ClientMessage::ResponseType::Notification:
    case strata::strataComm::ClientMessage::ResponseType::Response:
        // determine the notification type
        // "load_documents" --> "cloud::notification"
        // "platform" message --> "notification"
        // all others       --> "hcs::notification"
        if(clientMessage.handlerName == "load_documents") {
            notificationType = "cloud::notification";
        } else {
            notificationType = "hcs::notification";
        }
        jsonObject.insert(notificationType, payload);
        break;

    case strata::strataComm::ClientMessage::ResponseType::Error:
        qDebug(logCategoryStrataServer) << "Error messages are not supported in API v1";
        return "";
        break;

    case strata::strataComm::ClientMessage::ResponseType::PlatformMessage:
        jsonObject.insert("notification", payload);
        break;
    }

    QJsonDocument jsonDocument(jsonObject);
    QByteArray jsonByteArray = jsonDocument.toJson(QJsonDocument::JsonFormat::Compact);

    return jsonByteArray;
}

// QString StrataServer::buidNotification(const ClientMessage &ClientMessage, const QJsonObject &payload){
//     qCDebug(logCategoryStrataServer) << "StrataServer buildNotification";
//     // build the notification based on the client api. We might not have a "client message" for a notification!
    
// }

// QString StrataServer::buildResponse(const ClientMessage &ClientMessage, const QJsonObject &payload){
//     qCDebug(logCategoryStrataServer) << "StrataServer buildResponse";

//     // Check the client's API and build the response based on that
//     // Add the payload to the thing

// }
