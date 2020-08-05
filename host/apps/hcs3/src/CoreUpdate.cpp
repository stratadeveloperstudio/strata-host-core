#include "logging/LoggingQtCategories.h"

#include "CoreUpdate.h"
#include "Database.h"

#include <QJsonDocument>
#include <QJsonObject>
#include <QDir>
#include <QFileInfo>
#include <QDomDocument>
#include <QCoreApplication>
#include <QProcess>

void CoreUpdate::setDatabase(Database* db) {
    db_ = db;
}

void CoreUpdate::handleVersionInfoResponse(const QByteArray &clientId, const QString &currentVersion, const QString &latestVersion, const QString &errorString) {
    emit versionInfoResponseRequested(clientId, currentVersion, latestVersion, errorString);
}

void CoreUpdate::handleUpdateApplicationResponse(const QByteArray &clientId, const QString &errorString) {
    emit updateApplicationResponseRequested(clientId, errorString);
}

QString CoreUpdate::getLatestVersion(const QByteArray &clientId) {
    // Retrieve latest version info from DB
    std::string latest_version_body;
    if (db_->getDocument("latest_version", latest_version_body) == false) {
        qCCritical(logCategoryHcs) << "latest_version document not found in Database";
        handleVersionInfoResponse(clientId, QString(), QString(), "latest_version document not found in Database");
        return "";
    }

    QJsonParseError parseError;
    QJsonDocument jsonDoc = QJsonDocument::fromJson(latest_version_body.c_str(), &parseError);
    if (parseError.error != QJsonParseError::NoError ) {
        qCCritical(logCategoryHcs) << "Parse error: " << parseError.errorString();
        handleVersionInfoResponse(clientId, QString(), QString(), "Parse error: " + parseError.errorString());
        return "";
    }

    QJsonObject jsonObj = jsonDoc.object();
    return jsonObj.value("latest_version").toString();
}

QString CoreUpdate::getCurrentVersion(const QByteArray &clientId) {
    // Retrieve current version info from 'components.xml' file
    const QDir applicationDir(QCoreApplication::applicationDirPath());
    const QString absPathComponentsXmlFile = applicationDir.filePath("components.xml");

    if (!QFileInfo::exists(absPathComponentsXmlFile) || !QFileInfo(absPathComponentsXmlFile).isFile()) {
        qCCritical(logCategoryHcs) << "File components.xml not found at " << absPathComponentsXmlFile;
        handleVersionInfoResponse(clientId, QString(), QString(), "File components.xml not found at " + absPathComponentsXmlFile);
        return "";
    }
    // Load 'components.xml' file
    QDomDocument doc("tempDoc");
    QFile file(absPathComponentsXmlFile);
    if (!file.open(QIODevice::ReadOnly)) {
        return "";
    }
    if (!doc.setContent(&file)) {
        file.close();
        return "";
    }
    file.close();

    QString currentVersion = findVersionFromComponentsXml(doc, "com.onsemi.strata.hcs");
    if (currentVersion.isEmpty()) {
        handleVersionInfoResponse(clientId, QString(), QString(), "Could not find current Strata Core version from components.xml file.");
    }
    return currentVersion;
}

// Returns empty QString if desired package is not found in XML element
QString CoreUpdate::findVersionFromComponentsXml(const QDomDocument &xmlDocument, const QString &packageName) {
    QString currentVersion = "";
    auto root = xmlDocument.documentElement();
    for (auto package = root.firstChild().toElement(); !package.isNull(); package = package.nextSibling().toElement()) {
        bool packageFound = false;
        if (package.tagName() == "Package") {
            for (auto current_element = package.firstChild().toElement(); !current_element.isNull(); current_element = current_element.nextSibling().toElement()) {
                if (current_element.tagName() == "Name") {
                    auto element_data = current_element.firstChild().toText().data();
                    if (element_data != packageName) {
                        continue;
                    }
                    packageFound = true;
                }

                if (packageFound && current_element.tagName() == "Version") {
                    currentVersion = current_element.firstChild().toText().data();
                    qCInfo(logCategoryHcs) << "Found " << packageName << " version from components.xml: " << currentVersion;
                    return currentVersion;
                }
            }
        }
    }
    qCCritical(logCategoryHcs) << "Could not find " << packageName << " version from components.xml file.";
    return currentVersion;
}

/*
    No-op if not on Windows
*/
#if !defined(Q_OS_WIN)
void CoreUpdate::requestVersionInfo(const QByteArray &clientId) {
    qCCritical(logCategoryHcs) << "CoreUpdate functionality is available only on Windows OS";
    handleVersionInfoResponse(clientId, QString(), QString(), "CoreUpdate functionality is available only on Windows OS");
}
#else
void CoreUpdate::requestVersionInfo(const QByteArray &clientId) {
    const QString currentVersion = getCurrentVersion(clientId);
    if (!currentVersion.isEmpty()) {
        const QString latestVersion = getLatestVersion(clientId);
        if (!latestVersion.isEmpty()) {
            handleVersionInfoResponse(clientId, currentVersion, latestVersion);
        }
    }
}
#endif

/*
    No-op if not on Windows
*/
#if !defined(Q_OS_WIN)
void CoreUpdate::requestUpdateApplication(const QByteArray &clientId) {
    qCCritical(logCategoryHcs) << "CoreUpdate functionality is available only on Windows OS";
    handleUpdateApplicationResponse(clientId, "CoreUpdate functionality is available only on Windows OS");
}
#else
void CoreUpdate::requestUpdateApplication(const QByteArray &clientId) {
    // Search for Strata Maintenance Tool in application directory, if found perform update
    const QDir applicationDir(QCoreApplication::applicationDirPath());
    const QString absPathMaintenanceTool = locateMaintenanceTool(clientId, applicationDir);
    if (!absPathMaintenanceTool.isEmpty()) {
        performCoreUpdate(absPathMaintenanceTool, applicationDir);
    }
}
#endif

QString CoreUpdate::locateMaintenanceTool(const QByteArray &clientId, const QDir &applicationDir) {
    const QString maintenanceToolFilename = "Strata Maintenance Tool.exe";
    const QString absPathMaintenanceTool = applicationDir.filePath(maintenanceToolFilename);

    if (!applicationDir.exists(maintenanceToolFilename)) {
        qCCritical(logCategoryHcs) << maintenanceToolFilename << "not found in" << applicationDir.absolutePath();
        handleUpdateApplicationResponse(clientId, maintenanceToolFilename + " not found in " + applicationDir.absolutePath());
        return QString();
    }

    return absPathMaintenanceTool;
}

void CoreUpdate::performCoreUpdate(const QString &absPathMaintenanceTool, const QDir &applicationDir) {
    // Launch Strata Maintenance Tool wizard
    QStringList arguments;
    arguments << "isSilent=true" << "forceUpdate=true" << "delayStart=3000";

    QProcess maintenanceToolProcess;
    maintenanceToolProcess.setProgram(absPathMaintenanceTool);
    maintenanceToolProcess.setArguments(arguments);
    maintenanceToolProcess.setWorkingDirectory(applicationDir.absolutePath());
    maintenanceToolProcess.startDetached();


}