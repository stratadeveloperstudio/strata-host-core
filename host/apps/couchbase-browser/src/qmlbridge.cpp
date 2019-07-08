#include "qmlbridge.h"

QMLBridge::QMLBridge(QObject *parent) :
    QObject(parent)
{
}

void QMLBridge::init(QQmlApplicationEngine *engine, QQmlComponent *component)
{
    this->engine = engine;
    this->component = component;
    createNewWindow();
}

QString QMLBridge::setFilePath(int windowId, QString file_path)
{
    DatabaseInterface *db = new DatabaseInterface(windowId);
    allDatabases[windowId] = db;
    QObject::connect(&(*allDatabases[windowId]),&DatabaseInterface::newUpdate, this, &QMLBridge::newUpdateSignal);
    return allDatabases[windowId]->setFilePath(file_path);
}

QString QMLBridge::createNewDatabase(int windowId, bool createWindow, QString folder_path, QString dbName)
{
    QDir dir(folder_path);
    QString path = dir.path() + dir.separator() + "db" + dir.separator() + dbName + dir.separator() + "db.sqlite3";
    qDebug() << path << endl;
    if (createWindow) {
        createNewWindow();
        windowId = ids;
    }
    QString message = setFilePath(windowId,path);
    if (message.length() != 0) {
        delete allDatabases[windowId];
        allDatabases.erase(windowId);
        if (createWindow) {
            delete allWindows[ids];
            allWindows.erase(ids);
            ids--;
        }
    }
    else QQmlProperty::write(allWindows[windowId],"openedFile",true);
    return message;
}

QString QMLBridge::createNewDocument(int windowId, QString id, QString body)
{
    qDebug() << windowId << id << body << endl;
    return allDatabases[windowId]->createNewDoc(id, body);
}

QString QMLBridge::editDoc(int windowId, QString oldId, QString newId, QString body)
{
    return allDatabases[windowId]->editDoc(oldId, newId, body);
}

QString QMLBridge::deleteDoc(int windowId, QString id)
{
    return allDatabases[windowId]->deleteDoc(id);
}

void QMLBridge::closeFile(int windowId)
{
    delete allDatabases[windowId];
    allDatabases.erase(windowId);
    QQmlProperty::write(allWindows[windowId],"fileName","");
    QQmlProperty::write(allWindows[windowId],"allDocuments","{}");
}

QString QMLBridge::startReplicator(int windowId, QString url, QString username, QString password, QString type, std::vector<QString> channels)
{
    Spyglass::SGReplicatorConfiguration::ReplicatorType rep_type;
    qDebug() << type << endl;
    if (type == "pull") rep_type = Spyglass::SGReplicatorConfiguration::ReplicatorType::kPull;
    if (type == "push") rep_type = Spyglass::SGReplicatorConfiguration::ReplicatorType::kPush;
    if (type == "pushpull") rep_type = Spyglass::SGReplicatorConfiguration::ReplicatorType::kPushAndPull;
    for (unsigned long i = 0;i<channels.size();i++)
        qDebug()<<channels[i]<<" ";
    qDebug()<<endl;
    return allDatabases[windowId]->rep_init(url,username,password,rep_type,channels);
}

void QMLBridge::stopReplicator(int windowId)
{
    allDatabases[windowId]->rep_stop();
}

void QMLBridge::createNewWindow()
{
    ids++;
    engine->load(QUrl(QStringLiteral("qrc:/qml/main.qml")));
    allWindows[ids] = engine->rootObjects().last();
    QQmlProperty::write(allWindows[ids],"id",ids);
}

void QMLBridge::newUpdateSignal(int windowId)
{
    QQmlProperty::write(allWindows[windowId],"fileName",allDatabases[windowId]->getDBName());
    QQmlProperty::write(allWindows[windowId],"allDocuments",allDatabases[windowId]->getJSONResponse());
}
