#ifndef SCIMODEL_H
#define SCIMODEL_H

#include <BoardManager.h>
#include "SciDatabaseConnector.h"
#include "SciPlatformModel.h"

#include <QObject>

class SciModel : public QObject
{
    Q_OBJECT
    Q_DISABLE_COPY(SciModel)

    Q_PROPERTY(spyglass::BoardManager* boardManager READ boardManager CONSTANT)
    Q_PROPERTY(SciDatabaseConnector* databaseConnector READ databaseConnector CONSTANT)
    Q_PROPERTY(SciPlatformModel* platformModel READ platformModel CONSTANT)

public:
    explicit SciModel(QObject *parent = nullptr);
    virtual ~SciModel();

    spyglass::BoardManager* boardManager();
    SciDatabaseConnector* databaseConnector();
    SciPlatformModel* platformModel();

private:
    spyglass::BoardManager boardManager_;
    SciDatabaseConnector db_;
    SciPlatformModel platformModel_;
};

#endif  // SCIMODEL_H
