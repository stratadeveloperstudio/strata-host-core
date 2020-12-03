#include "logging/LoggingQtCategories.h"

#include "ComponentUpdateInfo.h"
#include <QDir>
#include <QFileInfo>
#include <QDomDocument>
#include <QJsonObject>
#include <QProcess>
#include <QCoreApplication>

void ComponentUpdateInfo::requestUpdateInfo(const QByteArray &clientId) {
    QString updateMetadata;
    QString error = acquireUpdateMetadata(updateMetadata);
    if (error.isEmpty()) {
        if (updateMetadata.isEmpty()) {
            handleUpdateInfoResponse(clientId, QJsonArray(), QString());    // no updates available
            return;
        } else {
            QJsonArray updateInfo;
            error = acquireUpdateInfo(updateMetadata, updateInfo);
            if (error.isEmpty()) {
                handleUpdateInfoResponse(clientId, updateInfo, QString());
                return;
            }
        }
    }

    handleUpdateInfoResponse(clientId, QJsonArray(), error);
}

void ComponentUpdateInfo::handleUpdateInfoResponse(const QByteArray &clientId, QJsonArray componentList, const QString &errorString) {
    emit requestUpdateInfoFinished(clientId, componentList, errorString);
}

QString ComponentUpdateInfo::acquireUpdateInfo(const QString &updateMetadata, QJsonArray &updateInfo) {
    QMap<QString, QString> componentMap;
    QString error = getCurrentVersionOfComponents(componentMap);
    if (error.isEmpty()) {
        QString errorMsg;
        int errorColumn = 0;
        QDomDocument xmlDocument("MaintenanceToolOutput");
        if (!xmlDocument.setContent(updateMetadata, false, &errorMsg, &errorColumn)) {
            qCCritical(logCategoryHcs) << "Could not parse updateMetadata: " << errorMsg << ", errorColumn: " << errorColumn;
            return "Error parsing update metadata: " + errorMsg;
        }
        return parseUpdateMetadata(xmlDocument, componentMap, updateInfo);
    }

    return error;
}

QString ComponentUpdateInfo::getCurrentVersionOfComponents(QMap<QString, QString>& componentMap) {
    // Retrieve current version info from 'components.xml' file
    const QDir applicationDir(QCoreApplication::applicationDirPath());
    const QString absPathComponentsXmlFile = applicationDir.filePath("components.xml");

    if (!QFileInfo::exists(absPathComponentsXmlFile) || !QFileInfo(absPathComponentsXmlFile).isFile()) {
        qCCritical(logCategoryHcs) << "File components.xml not found at " << absPathComponentsXmlFile;
        return "File components.xml not found at " + absPathComponentsXmlFile;
    }
    // Load 'components.xml' file
    QFile file(absPathComponentsXmlFile);
    if (!file.open(QIODevice::ReadOnly)) {
        return "Unable to open " + absPathComponentsXmlFile;
    }

    QString errorMsg;
    int errorColumn = 0;
    QDomDocument xmlDocument("components");
    if (!xmlDocument.setContent(&file, false, &errorMsg, &errorColumn)) {
        file.close();
        qCCritical(logCategoryHcs) << "Could not parse components.xml: " << errorMsg << ", errorColumn: " << errorColumn;
        return "Error parsing components.xml: " + errorMsg;
    }
    file.close();

    QDomElement componentInfoRoot = xmlDocument.documentElement();
    QDomNode componentInfoNode = componentInfoRoot.firstChild();
    while(!componentInfoNode.isNull()) {
        QDomElement componentInfoElement = componentInfoNode.toElement(); // try to convert the node to an element.
        if (!componentInfoElement.isNull()) {
            if (componentInfoElement.tagName() == "Package") {
                QString packageName; bool packageNameFound = false;
                QString packageVersion; bool packageVersionFound = false;
                QDomNode packageInfoNode = componentInfoElement.firstChild();
                while(!packageInfoNode.isNull()) {
                    QDomElement packageInfoElement = packageInfoNode.toElement(); // try to convert the node to an element.
                    if (!packageInfoElement.isNull()) {
                        if ((packageInfoElement.tagName() == "Title") && (packageNameFound == false)) {
                            packageName = packageInfoElement.text();
                            if(!packageName.isEmpty())
                                packageNameFound = true;
                        } else if (packageInfoElement.tagName() == "Version" && (packageVersionFound == false)) {
                            packageVersion = packageInfoElement.text();
                            if(!packageVersion.isEmpty())
                                packageVersionFound = true;
                        }
                    }
                    packageInfoNode = packageInfoNode.nextSibling();
                }
                if((packageNameFound == true) && (packageVersionFound == true)) {
                    componentMap.insert(packageName, packageVersion);
                    qCInfo(logCategoryHcs) << "Found mandatory elements (Title / Version) in components.xml: " << packageName << ", " << packageVersion;
                } else {
                    qCWarning(logCategoryHcs) << "Missing mandatory elements (Title / Version) in components.xml";
                }
            }
        }
        componentInfoNode = componentInfoNode.nextSibling();
    }
    if(componentMap.isEmpty())
        return "No components loaded from components.xml";
    else
        return QString();
}

QString ComponentUpdateInfo::parseUpdateMetadata(const QDomDocument &xmlDocument, const QMap<QString, QString>& componentMap, QJsonArray &updateInfo) {

    QDomElement updateInfoRoot = xmlDocument.documentElement();
    QDomNode updateInfoNode = updateInfoRoot.firstChild();
    while(!updateInfoNode.isNull()) {
        QDomElement updateInfoElement = updateInfoNode.toElement(); // try to convert the node to an element.
        if (!updateInfoElement.isNull()) {
            if (updateInfoElement.tagName() == "update") {
                if (updateInfoElement.hasAttribute("name") && updateInfoElement.hasAttribute("version")) {
                    QString updateName = updateInfoElement.attribute("name");
                    QString updateVersion = updateInfoElement.attribute("version");
                    QJsonObject payload;
                    payload.insert("name", updateName);
                    payload.insert("latest_version", updateVersion);
                    if (componentMap.contains(updateName)) {
                        payload.insert("current_version", componentMap[updateName]);
                    } else {
                        qCWarning(logCategoryHcs) << "Missing component " << updateName << " in installed componentns: " << componentMap;
                        // this might be valid, it might be forcing installation of new component which was not installed
                        payload.insert("current_version", "N/A");
                    }
                    updateInfo.push_back(payload);
                    qCInfo(logCategoryHcs) << "Inserted Update Info: " << payload;
                } else {
                    qCWarning(logCategoryHcs) << "Missing mandatory attributes (name / version) in update metadata";
                }
            } else {
                qCWarning(logCategoryHcs) << "Unknown element in update metadata: " << updateInfoElement.tagName();
            }
        }
        updateInfoNode = updateInfoNode.nextSibling();
    }
    return QString();
}

QString ComponentUpdateInfo::acquireUpdateMetadata(QString &updateMetadata) {
    // Search for Strata Maintenance Tool in application directory, if found perform check for updates
    const QDir applicationDir(QCoreApplication::applicationDirPath());  // hcs is not an .app, so no need for special handling in case of MacOS
    QString absPathMaintenanceTool;
    QString error = locateMaintenanceTool(applicationDir, absPathMaintenanceTool);

    if (error.isEmpty()) {
        return launchMaintenanceTool(absPathMaintenanceTool, applicationDir, updateMetadata);
    }

    return error;
}

QString ComponentUpdateInfo::locateMaintenanceTool(const QDir &applicationDir, QString &absPathMaintenanceTool) {
#if defined(Q_OS_WIN)
    const QString maintenanceToolFilename = "Strata Maintenance Tool.exe";
#elif defined(Q_OS_MACOS)
    const QString maintenanceToolFilename = "Strata Maintenance Tool.app/Contents/MacOS/Strata Maintenance Tool";
#elif defined(Q_OS_LINUX)
    const QString maintenanceToolFilename = "Strata Maintenance Tool";
#endif
    absPathMaintenanceTool = applicationDir.filePath(maintenanceToolFilename);

    if (!applicationDir.exists(maintenanceToolFilename)) {
        qCCritical(logCategoryHcs) << maintenanceToolFilename << "not found in" << applicationDir.absolutePath();
        return QString("Strata Maintenance Tool not found.");
    }

    return QString();
}

QString ComponentUpdateInfo::launchMaintenanceTool(const QString &absPathMaintenanceTool, const QDir &applicationDir, QString &updateMetadata) {
    qCInfo(logCategoryHcs) << "Launching Strata Maintenance Tool";
    QStringList arguments;
    arguments << "--checkupdates";

    QProcess maintenanceToolProcess;
    maintenanceToolProcess.setProgram(absPathMaintenanceTool);
    maintenanceToolProcess.setArguments(arguments);
    maintenanceToolProcess.setWorkingDirectory(applicationDir.absolutePath());
    maintenanceToolProcess.start();

    // Wait until the update tool is finished
    maintenanceToolProcess.waitForFinished();

    if(maintenanceToolProcess.error() != QProcess::UnknownError) {
        return "Error checking for updates: " + QString::number(maintenanceToolProcess.error());
    }

    // Read the output
    QByteArray maintenanceToolOutput = maintenanceToolProcess.readAllStandardOutput();

    // No output means no updates available
    // Note that the exit code will also be 1, but we don't use that
    // Also note that we should parse the output instead of just checking if it is empty if we want specific update info
    if(maintenanceToolOutput.isEmpty()) {
        qCInfo(logCategoryHcs) << "No updates available";
        return QString();
    }

    QString updateData = maintenanceToolOutput;
    QString updatesBeginStr("<updates>");
    QString updatesEndStr("</updates>");
    int beginIdx = updateData.indexOf(updatesBeginStr);
    int endIdx = updateData.indexOf(updatesEndStr);

    if((beginIdx == -1) || (endIdx == -1) || (endIdx < beginIdx)) {
        qCCritical(logCategoryHcs) << "Error parsing maintenance tool output:" << updateData;
        return "Error parsing maintenance tool output";
    }

    // extract only desired part in case we acquire more information
    updateMetadata = updateData.mid(beginIdx, (endIdx - beginIdx) + updatesEndStr.size());
    qCInfo(logCategoryHcs) << "Updates available:" << updateMetadata;
    return QString();
}

