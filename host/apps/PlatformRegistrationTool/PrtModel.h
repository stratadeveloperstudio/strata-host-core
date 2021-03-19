#pragma once

#include "Authenticator.h"
#include "RestClient.h"

#include <BoardManager.h>
#include <FlasherConnector.h>
#include <DownloadManager.h>

#include <QObject>
#include <QPointer>
#include <QNetworkAccessManager>


class PrtModel : public QObject
{
    Q_OBJECT
    Q_DISABLE_COPY(PrtModel)

    Q_PROPERTY(int deviceCount READ deviceCount NOTIFY deviceCountChanged)
    Q_PROPERTY(Authenticator* authenticator READ authenticator CONSTANT)
    Q_PROPERTY(RestClient* restClient READ restClient CONSTANT)
    Q_PROPERTY(QString bootloaderFilepath READ bootloaderFilepath NOTIFY bootloaderFilepathChanged)
    Q_PROPERTY(QString serverType READ serverType CONSTANT)
    Q_PROPERTY(bool debugBuild READ debugBuild CONSTANT)

public:
    explicit PrtModel(QObject *parent = nullptr);
    virtual ~PrtModel();

    int deviceCount() const;
    Authenticator* authenticator();
    RestClient* restClient();
    QString bootloaderFilepath();
    QString serverType() const;
    bool debugBuild() const;

    Q_INVOKABLE QString deviceFirmwareVersion() const;
    Q_INVOKABLE QString deviceFirmwareVerboseName() const;
    Q_INVOKABLE void downloadBinaries(
            QString bootloaderUrl,
            QString bootloaderMd5,
            QString firmwareUrl,
            QString firmwareMd5);

    Q_INVOKABLE void programDevice();
    Q_INVOKABLE void notifyServiceAboutRegistration(
            const QString &classId,
            const QString &platformId);

    Q_INVOKABLE void setPlatformId(
            const QString &classId,
            const QString &platformId,
            int boardCount);

    Q_INVOKABLE void setAssistedPlatformId();
    Q_INVOKABLE void startBootloader();
    Q_INVOKABLE void startApplication();

    Q_INVOKABLE void clearBinaries();

signals:
    void boardReady(QByteArray deviceId);
    void boardDisconnected(QByteArray deviceId);
    void deviceCountChanged();
    void bootloaderFilepathChanged();
    void downloadFirmwareFinished(QString errorString);
    void flasherOperationStateChanged(
            strata::FlasherConnector::Operation operation,
            strata::FlasherConnector::State state,
            QString errorString);

    void flasherProgress(int chunk, int total);
    void flasherFinished(strata::FlasherConnector::Result result);
    void notifyServiceFinished(int boardCount, QString errorString);
    void setPlatformIdFinished(QString errorString);
    void startBootloaderFinished(QString errorString);
    void startApplicationFinished(QString errorString);

private slots:
    void boardReadyHandler(const QByteArray& deviceId, bool recognized);
    void boardDisconnectedHandler(const QByteArray& deviceId);
    void flasherFinishedHandler(strata::FlasherConnector::Result result);
    void downloadFinishedHandler(QString groupId, QString errorString);

private:
    strata::BoardManager boardManager_;
    QList<strata::device::DevicePtr> platformList_;
    QPointer<strata::FlasherConnector> flasherConnector_;
    QNetworkAccessManager networkManager_;
    strata::DownloadManager downloadManager_;
    RestClient restClient_;
    Authenticator authenticator_;
    QUrl cloudServiceUrl_;
    QString serverType_;

    QString downloadJobId_;
    QPointer<QTemporaryFile> bootloaderFile_;
    QPointer<QTemporaryFile> firmwareFile_;

    bool fakeDownloadBinaries(
                const QString &bootloaderUrl,
                const QString &firmwareUrl);

    QString resolveConfigFilePath();
};
