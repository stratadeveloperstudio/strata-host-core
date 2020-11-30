#include "SGQrcTreeModel.h"
#include "SGUtilsCpp.h"
#include "logging/LoggingQtCategories.h"

#include <QDir>
#include <QDebug>
#include <QDirIterator>
#include <QThread>
#include <QStack>
#include <QQmlEngine>
#include <QUuid>
#include <QDateTime>
#include <QCryptographicHash>

/**************************************************************
 * Class SGQrcTreeModel
**************************************************************/

SGQrcTreeModel::SGQrcTreeModel(QObject *parent) : QAbstractItemModel(parent)
{
    QQmlEngine::setObjectOwnership(root_, QQmlEngine::CppOwnership);
    connect(this, &SGQrcTreeModel::urlChanged, this, &SGQrcTreeModel::createModel);
    fsWatcher_ = std::make_unique<QFileSystemWatcher>();

    connect(fsWatcher_.get(), &QFileSystemWatcher::directoryChanged, this, &SGQrcTreeModel::directoryStructureChanged);
    connect(fsWatcher_.get(), &QFileSystemWatcher::fileChanged, this, &SGQrcTreeModel::projectFilesModified);
    connect(this, &SGQrcTreeModel::finishedReadingQrc, this, &SGQrcTreeModel::startPopulating);
}

SGQrcTreeModel::~SGQrcTreeModel()
{
    clear(false);
    fsWatcher_.reset();
}

/***
 * BEGIN OVERRIDES
 ***/

QHash<int, QByteArray> SGQrcTreeModel::roleNames() const
{
    QHash<int, QByteArray> roles;
    roles[FilenameRole] = QByteArray("filename");
    roles[FilepathRole] = QByteArray("filepath");
    roles[FileTypeRole] = QByteArray("filetype");
    roles[InQrcRole] = QByteArray("inQrc");
    roles[IsDirRole] = QByteArray("isDir");
    roles[ChildrenRole] = QByteArray("childNodes");
    roles[ParentRole] = QByteArray("parentNode");
    roles[UniqueIdRole] = QByteArray("uid");
    roles[RowRole] = QByteArray("row");
    roles[EditingRole] = QByteArray("editing");
    return roles;
}

QVariant SGQrcTreeModel::data(const QModelIndex &index, int role) const
{
    if (!index.isValid()) {
        return QVariant();
    }

    SGQrcTreeNode *node = getNode(index);

    switch (role) {
    case FilenameRole:
        return QVariant(node->filename());
    case FilepathRole:
        return QVariant(node->filepath());
    case FileTypeRole:
        return QVariant(node->filetype());
    case InQrcRole:
        return QVariant(node->inQrc());
    case IsDirRole:
        return QVariant(node->isDir());
    case ParentRole:
        return QVariant::fromValue(node->parentNode());
    case UniqueIdRole:
        return QVariant(node->uid());
    case RowRole:
        return QVariant(node->row());
    case EditingRole:
        return QVariant(node->editing());
    }

    if (role == ChildrenRole) {
        QVariantList list;
        for (SGQrcTreeNode* child : node->children()) {
            list.append(QVariant::fromValue(child));
        }
        return list;
    }
    return QVariant();
}


bool SGQrcTreeModel::setData(const QModelIndex &index, const QVariant &value, int role)
{
    if (!index.isValid()) {
        return false;
    }

    SGQrcTreeNode *node = getNode(index);
    bool changed;

    switch (role) {
    case FilenameRole:
        changed = node->setFilename(value.toString());
        break;
    case FilepathRole:
        changed = node->setFilepath(value.toUrl());
        break;
    case FileTypeRole:
        changed = node->setFiletype(value.toString());
        break;
    case InQrcRole:
        changed = node->setInQrc(value.toBool());
        break;
    case IsDirRole:
        changed = node->setIsDir(value.toBool());
        break;
    case EditingRole:
        changed = node->setEditing(value.toBool());
        break;
    default:
        return false;
    }

    if (changed) {
        emit dataChanged(index, index, {role});
    }
    return true;
}

Qt::ItemFlags SGQrcTreeModel::flags(const QModelIndex &index) const
{
    if (!index.isValid()) {
        return Qt::NoItemFlags;
    }
    return Qt::ItemIsEditable | Qt::ItemIsEnabled | Qt::ItemIsSelectable;
}

int SGQrcTreeModel::rowCount(const QModelIndex &index) const
{
    if (index.column() > 0)
        return 0;

    SGQrcTreeNode *parent = getNode(index);
    return parent ? parent->childCount() : 0;
}

int SGQrcTreeModel::columnCount(const QModelIndex &parent) const
{
    Q_UNUSED(parent);
    return 1;
}

bool SGQrcTreeModel::removeRows(int row, int count, const QModelIndex &parent)
{
    SGQrcTreeNode *parentItem = getNode(parent);
    if (!parentItem)
        return false;

    if (row < 0 || row + count > parentItem->childCount()) {
        return false;
    }

    // Remove children first
    for (int i = 0; i < count; ++i) {
        if (parentItem->childNode(row + i)->isDir()) {
            SGQrcTreeNode *node = parentItem->childNode(row + i);
            QString path = SGUtilsCpp::urlToLocalFile(node->filepath());
            fsWatcher_->removePath(path);
            pathsInTree_.remove(node->filepath());
            removeRows(0, node->childCount(), index(row + i, 0, parent));
        }
    }

    beginRemoveRows(parent, row, row + count - 1);
    for (int i = 0; i < count; ++i) {
        if (parentItem->childNode(row + i)) {
            SGQrcTreeNode *node = parentItem->childNode(row + i);
            QString path = SGUtilsCpp::urlToLocalFile(node->filepath());
            uidMap_.remove(node->uid());
            pathsInTree_.remove(node->filepath());
            if (node->inQrc()) {
                removeFromQrc(index(row + i, 0, parent), false);
            }
            fsWatcher_->removePath(path);
        }
    }
    const bool success = parentItem->removeChildren(row, count);
    endRemoveRows();

    return success;
}

QModelIndex SGQrcTreeModel::index(int row, int column, const QModelIndex &parent) const
{
    if (!hasIndex(row, column, parent)) {
        return QModelIndex();
    }

    SGQrcTreeNode *parentNode = getNode(parent);
    if (!parentNode) {
        return QModelIndex();
    }

    SGQrcTreeNode *child = parentNode->childNode(row);

    if (child) {
        QModelIndex index = createIndex(row, column, child);
        return index;
    }

    return QModelIndex();
}

QModelIndex SGQrcTreeModel::parent(const QModelIndex &child) const
{
    if (!child.isValid()) {
        return QModelIndex();
    }

    SGQrcTreeNode *childNode = getNode(child);
    SGQrcTreeNode *parent = childNode ? childNode->parentNode() : nullptr;

    if (!parent || parent == root_) {
        return QModelIndex();
    }
    return createIndex(parent->row(), 0, parent);
}

bool SGQrcTreeModel::hasChildren(const QModelIndex &parent) const
{
    if (!parent.isValid()) {
        return false;
    }
    SGQrcTreeNode *node = getNode(parent);
    if (node) {
        return node->childCount() > 0;
    }
    return false;
}

/***
 * BEGIN CUSTOM FUNCTIONS
 ***/

SGQrcTreeNode* SGQrcTreeModel::root() const
{
    return root_;
}

QVector<SGQrcTreeNode*> SGQrcTreeModel::childNodes()
{
    return root_->children();
}

SGQrcTreeNode* SGQrcTreeModel::get(const QString &uid) const
{
    if (!uidMap_.contains(uid)) {
        return nullptr;
    }
    return uidMap_.find(uid).value();
}

SGQrcTreeNode* SGQrcTreeModel::getNode(const QModelIndex &index) const
{
    if (index.isValid()) {
        return static_cast<SGQrcTreeNode*>(index.internalPointer());
    }
    return root_;
}

SGQrcTreeNode* SGQrcTreeModel::getNodeByUrl(const QUrl &url) const
{
    for (SGQrcTreeNode* node : uidMap_) {
        if (node->filepath() == url) {
            return node;
        }
    }
    return nullptr;
}

bool SGQrcTreeModel::insertChild(const QUrl &fileUrl, int position,  const bool inQrc, const QModelIndex &parent)
{
    SGQrcTreeNode *parentNode = getNode(parent);

    if (position > parentNode->childCount()) {
        return false;
    }
    if (position < 0) {
        position = parentNode->childCount();
    }

    // This handles the case where parentNode is the .qrc file.
    QString parentDir = parentNode->isDir() ? SGUtilsCpp::urlToLocalFile(parentNode->filepath()) : SGUtilsCpp::urlToLocalFile(projectDir_);
    QString filePath = SGUtilsCpp::urlToLocalFile(fileUrl);
    QFileInfo fileInfo(filePath);

    // If the file is not a child of the parent node, then we want to copy the file to the project's location
    if (! SGUtilsCpp::fileIsChildOfDir(filePath, parentDir)) {
        QFileInfo outputFileLocation(SGUtilsCpp::joinFilePath(parentDir, fileInfo.fileName()));
        QString ext = outputFileLocation.completeSuffix();
        QString filenameWithoutExt = outputFileLocation.baseName();

        for (int i = 1; ;i++) {
            if (!outputFileLocation.exists()) {
                break;
            }

            // Output file location is already taken, add "-{i}" to the end of the filename and try again
            outputFileLocation.setFile(SGUtilsCpp::joinFilePath(parentDir, filenameWithoutExt + "-" + QString::number(i) + "." + ext));
        }

        // Copy the file to the base directory under the new name
        QFile::copy(fileInfo.filePath(), outputFileLocation.filePath());
        fileInfo.setFile(outputFileLocation.filePath());
    }

    bool success = false;

    if (!pathsInTree_.contains(QUrl::fromLocalFile(fileInfo.filePath()))) {
        beginInsertRows(parent, position, position);
        QString uid = QUuid::createUuid().toString();
        SGQrcTreeNode *child = new SGQrcTreeNode(parentNode, fileInfo, fileInfo.isDir(), inQrc, uid);
        QQmlEngine::setObjectOwnership(child, QQmlEngine::CppOwnership);
        success = parentNode->insertChild(child, position);
        if (fileInfo.isDir()) {
            fsWatcher_->addPath(fileInfo.filePath());
        }
        uidMap_.insert(uid, child);
        pathsInTree_.insert(child->filepath());
        endInsertRows();
    }

    // Recursively add children
    if (fileInfo.isDir()) {
        QDirIterator subItr(fileInfo.filePath(), QDir::Dirs | QDir::Files | QDir::NoDotAndDotDot | QDir::NoSymLinks);

        while (subItr.hasNext()) {
            subItr.next();
            QFileInfo subFi(subItr.fileInfo());
            if (!pathsInTree_.contains(QUrl::fromLocalFile(subFi.filePath()))) {
                if (subFi.isDir()) {
                    fsWatcher_->addPath(fileInfo.filePath());
                }
                insertChild(QUrl::fromLocalFile(subFi.filePath()), -1, inQrc, index(position, 0, parent));
            }
        }
    } else if (inQrc) {
        addToQrc(index(position, 0, parent), false);
    }

    return success;
}

bool SGQrcTreeModel::insertChild(bool isDir, int position, const QModelIndex &parent)
{
    SGQrcTreeNode *parentNode = getNode(parent);

    if (position > parentNode->childCount()) {
        return false;
    }
    if (position < 0) {
        position = parentNode->childCount();
    }

    beginInsertRows(parent, position, position);
    QString uid = QUuid::createUuid().toString();
    SGQrcTreeNode *child = new SGQrcTreeNode(parentNode, isDir, uid);
    QQmlEngine::setObjectOwnership(child, QQmlEngine::CppOwnership);

    bool success = parentNode->insertChild(child, position);
    uidMap_.insert(uid, child);
    endInsertRows();
    return success;
}

QModelIndex SGQrcTreeModel::rootIndex() const
{
    return rootIndex_;
}

void SGQrcTreeModel::setRootIndex(const QModelIndex &index)
{
    rootIndex_ = index;
}

QUrl SGQrcTreeModel::url() const
{
    return url_;
}

void SGQrcTreeModel::setUrl(QUrl url)
{
    if (url_ != url) {
        url_ = url;
        QDir dir(QFileInfo(SGUtilsCpp::urlToLocalFile(url)).dir());
        projectDir_ = QUrl::fromLocalFile(dir.path());
        emit urlChanged();
        emit projectDirectoryChanged();
    }
}

QUrl SGQrcTreeModel::projectDirectory() const
{
    return projectDir_;
}

bool SGQrcTreeModel::addToQrc(const QModelIndex &index, bool save)
{
    if (!index.isValid()) {
        return false;
    }

    SGQrcTreeNode *node = getNode(index);
    if (!node || qrcItems_.contains(SGUtilsCpp::urlToLocalFile(node->filepath()))) {
        return false;
    }

    QString relativePath = QDir(SGUtilsCpp::urlToLocalFile(projectDir_)).relativeFilePath(SGUtilsCpp::urlToLocalFile(node->filepath()));
    QDomElement qresource = qrcDoc_.elementsByTagName("qresource").at(0).toElement();
    QDomElement newItem = qrcDoc_.createElement("file");
    QDomText text = qrcDoc_.createTextNode(relativePath);
    newItem.appendChild(text);
    qresource.appendChild(newItem);
    qrcItems_.insert(SGUtilsCpp::urlToLocalFile(node->filepath()));
    setData(index, true, InQrcRole);

    if (save) {
        startSave();
    }

    return true;
}

bool SGQrcTreeModel::removeFromQrc(const QModelIndex &index, bool save)
{
    if (!index.isValid()) {
        return false;
    }

    SGQrcTreeNode *node = getNode(index);
    if (!node || !qrcItems_.contains(SGUtilsCpp::urlToLocalFile(node->filepath()))) {
        return false;
    }

    QString relativePath = QDir(SGUtilsCpp::urlToLocalFile(projectDir_)).relativeFilePath(SGUtilsCpp::urlToLocalFile(node->filepath()));
    QDomNodeList files = qrcDoc_.elementsByTagName("file");

    for (int i = 0; i < files.count(); i++) {
        if (files.at(i).toElement().text() == relativePath) {
            files.at(i).parentNode().removeChild(files.at(i));
            qrcItems_.remove(SGUtilsCpp::urlToLocalFile(node->filepath()));
            setData(index, false, InQrcRole);
            break;
        }
    }

    if (save) {
        startSave();
    }

    return true;
}

bool SGQrcTreeModel::deleteFile(const int row, const QModelIndex &parent)
{
    SGQrcTreeNode *parentNode = getNode(parent);

    if (!parentNode || row < 0 || row >= parentNode->childCount()) {
        return false;
    }

    SGQrcTreeNode *child = parentNode->childNode(row);
    if (!child) {
        return false;
    }

    fsWatcher_->removePath(SGUtilsCpp::urlToLocalFile(child->filepath()));

    bool success = false;
    if (child->isDir()) {
        QDirIterator itr(SGUtilsCpp::urlToLocalFile(child->filepath()), QDir::NoDotAndDotDot | QDir::NoSymLinks | QDir::Files, QDirIterator::Subdirectories);
        while (itr.hasNext()) {
            itr.next();
            fsWatcher_->removePath(SGUtilsCpp::urlToLocalFile(child->filepath()));
        }
        success = QDir(SGUtilsCpp::urlToLocalFile(child->filepath())).removeRecursively();
    } else {
        success = SGUtilsCpp::removeFile(SGUtilsCpp::urlToLocalFile(child->filepath()));
    }

    if (success) {
        removeFromQrc(index(row, 0, parent));
        removeRows(row, 1, parent);
    }

    return success;
}

void SGQrcTreeModel::stopWatchingPath(const QString &path)
{
    fsWatcher_->removePath(path);
}

void SGQrcTreeModel::startWatchingPath(const QString &path)
{
    fsWatcher_->addPath(path);
}

bool SGQrcTreeModel::addPathToTree(const QUrl &path)
{
    if (pathsInTree_.contains(path)) {
        return false;
    }
    pathsInTree_.insert(path);
    return true;
}

/***
 * PRIVATE FUNCTIONS
 ***/
void SGQrcTreeModel::startPopulating(const QByteArray &fileText)
{
    beginResetModel();
    clear(false);

    fsWatcher_->addPath(SGUtilsCpp::urlToLocalFile(projectDir_));
    fsWatcher_->addPath(SGUtilsCpp::urlToLocalFile(url_));

    if (fileText.isNull()) {
        emit errorParsing("Could not open project .qrc file");
        root_ = nullptr;
    } else if (createQrcXmlDocument(fileText)) {
        QFileInfo rootFi(SGUtilsCpp::urlToLocalFile(url_));
        QString uid = QUuid::createUuid().toString();
        root_ = new SGQrcTreeNode(nullptr, rootFi, false, false, uid);
        uidMap_.insert(uid, root_);
        QQmlEngine::setObjectOwnership(root_, QQmlEngine::CppOwnership);

        recursiveDirSearch(root_, QDir(SGUtilsCpp::urlToLocalFile(projectDir_)), qrcItems_, 0);
    }

    endResetModel();
    emit rootChanged();
}

void SGQrcTreeModel::clear(bool emitSignals)
{
    if (emitSignals) {
        beginResetModel();
    }

    uidMap_.clear();
    qrcItems_.clear();
    if (fsWatcher_->files().count() > 0) {
        fsWatcher_->removePaths(fsWatcher_->files());
    }
    if (fsWatcher_->directories().count() > 0) {
        fsWatcher_->removePaths(fsWatcher_->directories());
    }
    if (!qrcDoc_.isNull()) {
        qrcDoc_.clear();
    }
    delete root_;

    if (emitSignals) {
        endResetModel();
    }
}

void SGQrcTreeModel::readQrcFile()
{
    QFile qrcFile(SGUtilsCpp::urlToLocalFile(url_));

    if (!qrcFile.open(QIODevice::ReadOnly | QIODevice::Text)) {
        qCCritical(logCategoryControlViewCreator) << "Failed to open qrc file";
        qrcFile.close();
        emit finishedReadingQrc(QByteArray());
    } else {
        QByteArray fileText = qrcFile.readAll();
        qrcFile.close();

        /*
         * We don't want fileText to be null here because null signifies that we
         * couldn't open the file.
         */
        if (fileText.isNull()) {
            fileText = "";
        }

        emit finishedReadingQrc(fileText);
    }
}

bool SGQrcTreeModel::createQrcXmlDocument(const QByteArray &fileText)
{
    QString errorMessage;
    int errorLine;
    int errorColumn;

    if (!qrcDoc_.setContent(fileText, &errorMessage, &errorLine, &errorColumn)) {
        qCCritical(logCategoryControlViewCreator) << "Failed to parse qrc file." << errorMessage << "-" << QString::number(errorLine) + ":" + QString::number(errorColumn);
        emit errorParsing("Invalid qrc file format.");
        return false;
    }

    if (qrcDoc_.elementsByTagName("qresource").count() == 0) {
        qCCritical(logCategoryControlViewCreator) << "qresource tag missing from qrc file";
        emit errorParsing("Missing qresource tag.");
        return false;
    }

    QDomNodeList files = qrcDoc_.elementsByTagName("file");
    for (int i = 0; i < files.count(); i++) {
        QDomElement element = files.at(i).toElement();
        QString absolutePath = SGUtilsCpp::joinFilePath(SGUtilsCpp::urlToLocalFile(projectDir_), element.text());
        qrcItems_.insert(absolutePath);
    }

    qDebug(logCategoryControlViewCreator) << "Successfully parsed qrc file";
    return true;
}

void SGQrcTreeModel::createModel()
{
    // Create a thread to write data to disk
    QThread *thread = QThread::create(std::bind(&SGQrcTreeModel::readQrcFile, this));
    thread->setObjectName("SGQrcTreeModel - FileIO Thread");
    // Delete the thread when it is finished saving
    connect(thread, &QThread::finished, thread, &QObject::deleteLater);
    thread->setParent(this);
    thread->start();
}

void SGQrcTreeModel::recursiveDirSearch(SGQrcTreeNode* parentNode, QDir currentDir, QSet<QString> qrcItems, int depth)
{
    for (QFileInfo info : currentDir.entryInfoList(QDir::NoDotAndDotDot | QDir::NoSymLinks | QDir::Files | QDir::Dirs)) {
        QString uid = QUuid::createUuid().toString();
        if (info.isDir()) {
            SGQrcTreeNode *dirNode = new SGQrcTreeNode(parentNode, info, true, false, uid);
            QQmlEngine::setObjectOwnership(dirNode, QQmlEngine::CppOwnership);
            parentNode->insertChild(dirNode, parentNode->childCount());
            uidMap_.insert(uid, dirNode);
            pathsInTree_.insert(dirNode->filepath());
            fsWatcher_->addPath(info.filePath());
            recursiveDirSearch(dirNode, QDir(info.filePath()), qrcItems, depth + 1);
        } else {
            if (QUrl::fromLocalFile(info.filePath()) == url_) {
                continue;
            }
            SGQrcTreeNode *node = new SGQrcTreeNode(parentNode, info, false, qrcItems.contains(info.filePath()), uid);
            QQmlEngine::setObjectOwnership(node, QQmlEngine::CppOwnership);
            parentNode->insertChild(node, parentNode->childCount());
            uidMap_.insert(uid, node);
            pathsInTree_.insert(node->filepath());
        }
    }
}

QModelIndex SGQrcTreeModel::findNodeInTree(const QModelIndex &index, const QUrl &path)
{
    SGQrcTreeNode* node = getNode(index);
    if (node != nullptr) {
        if (node->filepath() == path) {
            return index;
        } else {
            for (int i = 0; i < node->children().size(); ++i) {
                QModelIndex childIndex = this->index(i, 0, index);
                QModelIndex foundIndex = findNodeInTree(childIndex, path);
                if (foundIndex.isValid()) {
                    return foundIndex;
                }
            }
            return QModelIndex();
        }
    } else {
        return QModelIndex();
    }
}

void SGQrcTreeModel::startSave()
{
    // Create a thread to write data to disk
    fsWatcher_->removePath(SGUtilsCpp::urlToLocalFile(url_));
    QThread *thread = QThread::create(std::bind(&SGQrcTreeModel::save, this));
    thread->setObjectName("SGQrcTreeModel - FileIO Thread");
    // Delete the thread when it is finished saving
    connect(thread, &QThread::finished, [=] {
        fsWatcher_->addPath(SGUtilsCpp::urlToLocalFile(url_));
        thread->deleteLater();
    });
    thread->setParent(this);
    thread->start();
}

void SGQrcTreeModel::save()
{
    QFile qrcFile(SGUtilsCpp::urlToLocalFile(url_));
    if (!qrcFile.open(QIODevice::Truncate | QIODevice::WriteOnly | QIODevice::Text)) {
       qCCritical(logCategoryControlViewCreator) << "Could not open" << url_;
       fsWatcher_->addPath(SGUtilsCpp::urlToLocalFile(url_));
       return;
    }

    // Write the change to disk
    QTextStream stream(&qrcFile);
    stream << qrcDoc_.toString(4);
    qrcFile.close();
    fsWatcher_->addPath(SGUtilsCpp::urlToLocalFile(url_));
}


/***
 * PUBLIC SLOTS
 ***/
void SGQrcTreeModel::childrenChanged(const QModelIndex &index, int role) {
    if (index.isValid()) {
        emit dataChanged(index, index, {role});
    } else {
        qCWarning(logCategoryControlViewCreator) << "Index is not valid";
    }
}


/***
 * PRIVATE SLOTS
 ***/
void SGQrcTreeModel::projectFilesModified(const QString &path)
{
    const QUrl url = QUrl::fromLocalFile(path);
    QHashIterator<QString, SGQrcTreeNode*> itr(uidMap_);
    SGQrcTreeNode *deletedNode = nullptr;

    while (itr.hasNext()) {
        SGQrcTreeNode *node = itr.next().value();

        if (node->filepath() == url) {
            // If the file still exists, then it has been modified, else it has been deleted or renamed
            if (QFileInfo::exists(path)) {
                if (node->filepath() == url_) {
                    // If we encounter a change to the project's .qrc file, then reparse the qrc
                    createModel();
                } else {
                    emit fileChanged(url);
                }
                return;
            } else {
                deletedNode = node;
                break;
            }
        }
    }

    if (deletedNode) {
        emit fileDeleted(deletedNode->uid());
    }
}

void SGQrcTreeModel::directoryStructureChanged(const QString &path)
{
    QHashIterator<QString, SGQrcTreeNode*> hashItr(uidMap_);
    QDirIterator dirItr(path, QDir::NoDotAndDotDot | QDir::NoSymLinks | QDir::Files | QDir::Dirs);
    SGQrcTreeNode *parentNode = nullptr;
    const QUrl dirUrl = QUrl::fromLocalFile(path);

    if (!parentNode && dirUrl == projectDir_) {
        parentNode = root_;
    } else {
        // Find the parentNode that `path` corresponds to
        while (hashItr.hasNext()) {
            SGQrcTreeNode *node = hashItr.next().value();
            if (node->filepath() == dirUrl) {
                parentNode = node;
                break;
            }
        }
    }

    if (parentNode) {
        QVector<SGQrcTreeNode*> nodesDeleted;

        for (SGQrcTreeNode *node : parentNode->children()) {
            if (!QFileInfo::exists(SGUtilsCpp::urlToLocalFile(node->filepath()))) {
                nodesDeleted.append(node);
                continue;
            }
        }

        for (int i = 0; i < nodesDeleted.count(); ++i) {
            SGQrcTreeNode *node = nodesDeleted.at(i);

            // The below code handles a bug in Qt's QFileSystemWatcher where files that are deleted on the filesystem before we call removePath() become impossible to remove afterwards
            // The workaround is to delete the File system watcher object and create a new one if a directory is deleted externally.
            if (node->isDir()) {
                QString deletedPath = SGUtilsCpp::urlToLocalFile(node->filepath());
                QStringList paths;

                for (QString p : fsWatcher_->directories()) {
                    if (p != deletedPath) {
                        paths.append(p);
                    }
                }

                paths.append(fsWatcher_->files());

                fsWatcher_.reset();
                fsWatcher_ = std::make_unique<QFileSystemWatcher>();
                connect(fsWatcher_.get(), &QFileSystemWatcher::directoryChanged, this, &SGQrcTreeModel::directoryStructureChanged);
                connect(fsWatcher_.get(), &QFileSystemWatcher::fileChanged, this, &SGQrcTreeModel::projectFilesModified);
                fsWatcher_->addPaths(paths);
            }

            QString uid = node->uid();
            handleExternalFileDeleted(uid);
            emit fileDeleted(uid);
        }
    }

    while (dirItr.hasNext()) {
        dirItr.next();

        QFileInfo fi(dirItr.fileInfo());
        QUrl parentUrl = QUrl::fromLocalFile(fi.dir().absolutePath());
        if (parentUrl == projectDir_) {
            parentUrl = url_;
        }
        QUrl fileUrl = QUrl::fromLocalFile(fi.filePath());

        if (fileUrl == root_->filepath()) {
            continue;
        }

        // If the paths in the tree does not contain the fileUrl
        if (!pathsInTree_.contains(fileUrl)) {
            // If we have reached this, then the current file is new. Let the projectFilesModified handle the modification of existing files.
            // We only want to watch for file modifications if the file is open
            if (fi.isDir()) {
                fsWatcher_->addPath(fi.filePath());
            }

            handleExternalFileAdded(fileUrl, parentUrl);
            emit fileAdded(fileUrl, parentUrl);
        }
    }
}

void SGQrcTreeModel::handleExternalFileAdded(const QUrl path, const QUrl parentPath)
{
    QModelIndex parentIndex = findNodeInTree(rootIndex_, parentPath);
    if (!parentIndex.isValid() && parentIndex != rootIndex_) {
        qCCritical(logCategoryControlViewCreator) << "Could not find path" << parentPath << "in tree";
        return;
    }

    insertChild(path, -1, false, parentIndex);
}

void SGQrcTreeModel::handleExternalFileDeleted(const QString uid)
{
    SGQrcTreeNode *node = uidMap_[uid];
    QModelIndex deletedIndex = findNodeInTree(rootIndex_, node->filepath());

    if (!deletedIndex.isValid()) {
        qCCritical(logCategoryControlViewCreator) << "Could not find path" << node->filepath() << "in tree";
        return;
    }

    removeFromQrc(deletedIndex);
    removeRows(node->row(), 1, parent(deletedIndex));
    startSave();
}


