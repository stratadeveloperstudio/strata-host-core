#include <QGuiApplication>
#include <QQmlApplicationEngine>
#include <QtWebView/QtWebView>
#include <QtWebEngine>
#include <QtWidgets/QApplication>
#include <QtQml/QQmlContext>
#include <QtQuick/QQuickView>
#include <QtQml/QQmlEngine>
#include <QtCore/QDir>
#include "QtDebug"
#include <QProcess>
#include <QSettings>
#include <QSysInfo>
#include <QSslSocket>

#include <PlatformInterface/core/CoreInterface.h>

#include "Version.h"
#include "StrataDeveloperStudioTimestamp.h"

#include <QtLoggerSetup.h>
#include <QtLogger.h>
#include "logging/LoggingQtCategories.h"

#include "SDSModel.h"
#include "DocumentManager.h"
#include "ResourceLoader.h"
#include "SGQrcTreeModel.h"
#include "SGQrcTreeNode.h"
#include "SGFileTabModel.h"
#include "SGNewControlView.h"
#include "HcsNode.h"
#include "RunGuard.h"

#include "AppUi.h"

#include "config/AppConfig.h"
#include "config/UrlConfig.h"


void addImportPaths(QQmlApplicationEngine *engine)
{
    QDir applicationDir(QCoreApplication::applicationDirPath());

#ifdef Q_OS_MACOS
    applicationDir.cdUp();
    applicationDir.cdUp();
    applicationDir.cdUp();
#endif

    bool status = applicationDir.cd("imports");
    if (status == false) {
        qCCritical(logCategoryStrataDevStudio) << "failed to find import path.";
    }

    engine->addImportPath(applicationDir.path());

    engine->addImportPath("qrc:///");
}

int main(int argc, char *argv[])
{
#if defined(Q_OS_WIN)
    QCoreApplication::setAttribute(Qt::AA_EnableHighDpiScaling);
#endif

    // [Faller] HACK: Temporary fix for https://bugreports.qt.io/browse/QTBUG-70228
    // [Carik]: this will be obsoleted once CS-123 is merged
    const auto chromiumFlags = qgetenv("QTWEBENGINE_CHROMIUM_FLAGS");
    if (!chromiumFlags.contains("disable-web-security")) {
        qputenv("QTWEBENGINE_CHROMIUM_FLAGS", chromiumFlags + " --disable-web-security");
    }

    QSettings::setDefaultFormat(QSettings::IniFormat);
    QGuiApplication::setApplicationDisplayName(QStringLiteral("ON Semiconductor: Strata Developer Studio"));
    QGuiApplication::setApplicationVersion(AppInfo::version.data());
    QCoreApplication::setOrganizationName(QStringLiteral("ON Semiconductor"));

#if (QT_VERSION >= QT_VERSION_CHECK(5, 13, 0))
    QtWebEngine::initialize();
#endif

    QApplication app(argc, argv);
    app.setWindowIcon(QIcon(":/resources/icons/app/on-logo.png"));

    const strata::loggers::QtLoggerSetup loggerInitialization(app);

    QCommandLineParser parser;
    parser.setApplicationDescription(
        QStringLiteral("Strata Developer Studio\n\n"
                       "A cloud-connected development platform that provides a seamless,"
                       "personalized and secure environment for engineers to evaluate and design "
                       "with ON Semiconductor technologies."));
    parser.addOption({{QStringLiteral("f")},
                      QObject::tr("Optional configuration <filename>"),
                      QObject::tr("filename"),
                      QStringLiteral(":/assets/sds.config")});
    parser.addVersionOption();
    parser.addHelpOption();
    parser.process(app);

#if (QT_VERSION < QT_VERSION_CHECK(5, 13, 0))
    QtWebEngine::initialize();
#endif
    qCInfo(logCategoryStrataDevStudio) << QStringLiteral("================================================================================");
    qCInfo(logCategoryStrataDevStudio) << QStringLiteral("%1 %2").arg(QCoreApplication::applicationName()).arg(QCoreApplication::applicationVersion());
    qCInfo(logCategoryStrataDevStudio) << QStringLiteral("Build on %1 at %2").arg(Timestamp::buildTimestamp.data(), Timestamp::buildOnHost.data());
    qCInfo(logCategoryStrataDevStudio) << QStringLiteral("--------------------------------------------------------------------------------");
    qCInfo(logCategoryStrataDevStudio) << QStringLiteral("Powered by Qt %1 (based on Qt %2)").arg(QString(qVersion()), qUtf8Printable(QT_VERSION_STR));
    qCInfo(logCategoryStrataDevStudio) << QStringLiteral("Running on %1").arg(QSysInfo::prettyProductName());
    if (QSslSocket::supportsSsl()) {
        qCDebug(logCategoryStrataDevStudio) << QStringLiteral("Using SSL %1 (based on SSL %2)").arg(QSslSocket::sslLibraryVersionString()).arg(QSslSocket::sslLibraryBuildVersionString());
    } else {
        qCCritical(logCategoryStrataDevStudio) << QStringLiteral("No SSL support!!");
    }
    qCInfo(logCategoryStrataDevStudio) << QStringLiteral("[arch: %1; kernel: %2 (%3); locale: %4]").arg(QSysInfo::currentCpuArchitecture(), QSysInfo::kernelType(), QSysInfo::kernelVersion(), QLocale::system().name());
    qCInfo(logCategoryStrataDevStudio) << QStringLiteral("================================================================================");

    const QString configFilePath{parser.value(QStringLiteral("f"))};
    strata::sds::config::AppConfig cfg{configFilePath};
    if (cfg.parse() == false) {
        return EXIT_FAILURE;
    }

    RunGuard appGuard{QStringLiteral("tech.strata.sds:%1").arg(cfg.hcsDealerAddresss().port())};
    if (appGuard.tryToRun() == false) {
        qCCritical(logCategoryStrataDevStudio) << QStringLiteral("Another instance of Developer Studio is already running.");
        return EXIT_FAILURE;
    }

    qmlRegisterUncreatableType<ResourceLoader>("tech.strata.ResourceLoader", 1, 0, "ResourceLoader", "You can't instantiate ResourceLoader in QML");
    qmlRegisterUncreatableType<CoreInterface>("tech.strata.CoreInterface",1,0,"CoreInterface", QStringLiteral("You can't instantiate CoreInterface in QML"));
    qmlRegisterUncreatableType<DocumentManager>("tech.strata.DocumentManager", 1, 0, "DocumentManager", QStringLiteral("You can't instantiate DocumentManager in QML"));
    qmlRegisterUncreatableType<DownloadDocumentListModel>("tech.strata.DownloadDocumentListModel", 1, 0, "DownloadDocumentListModel", "You can't instantiate DownloadDocumentListModel in QML");
    qmlRegisterUncreatableType<DocumentListModel>("tech.strata.DocumentListModel", 1, 0, "DocumentListModel", "You can't instantiate DocumentListModel in QML");
    qmlRegisterUncreatableType<ClassDocuments>("tech.strata.ClassDocuments", 1, 0, "ClassDocuments", "You can't instantiate ClassDocuments in QML");
    qmlRegisterType<SGFileTabModel>("tech.strata.SGFileTabModel", 1, 0, "SGFileTabModel");
    qmlRegisterUncreatableType<SGQrcTreeNode, 1>("tech.strata.SGQrcTreeModel",1,0,"SGTreeNode", "You can't instantiate SGTreeNode in QML");
    qmlRegisterType<SGQrcTreeModel>("tech.strata.SGQrcTreeModel", 1, 0, "SGQrcTreeModel");
    qmlRegisterUncreatableType<SGNewControlView>("tech.strata.SGNewControlView",1,0,"SGNewControlView", "You can't instantiate SGNewControlView in QML");
    qmlRegisterUncreatableType<SDSModel>("tech.strata.SDSModel", 1, 0, "SDSModel", "You can't instantiate SDSModel in QML");
    qmlRegisterType<strata::sds::config::UrlConfig>("tech.strata.UrlConfig",1,0,"UrlConfig");

    std::unique_ptr<SDSModel> sdsModel{std::make_unique<SDSModel>(cfg.hcsDealerAddresss())};

    strata::sds::config::UrlConfig urlCfg{configFilePath};
    if (urlCfg.parse() == false) {
        return EXIT_FAILURE;
    }

    // [LC] QTBUG-85137 - doesn't reconnect on Linux; fixed in further 5.12/5.15 releases
    QObject::connect(&app, &QGuiApplication::lastWindowClosed,
                     sdsModel.get(), &SDSModel::shutdownService/*, Qt::QueuedConnection*/);

    QQmlApplicationEngine engine;
    QQmlFileSelector selector(&engine);

    addImportPaths(&engine);

    engine.rootContext()->setContextProperty ("logger", &strata::loggers::QtLogger::instance());
    engine.rootContext()->setContextProperty ("sdsModel", sdsModel.get());

    /* deprecated context property, use sdsModel.coreInterface instead */
    engine.rootContext()->setContextProperty ("coreInterface", sdsModel->coreInterface());

    AppUi ui(engine, QUrl(QStringLiteral("qrc:/ErrorDialog.qml")));
    QObject::connect(
        &ui, &AppUi::uiFails, &app, []() { QCoreApplication::exit(EXIT_FAILURE); },
        Qt::QueuedConnection);

    QObject::connect(&engine, &QQmlApplicationEngine::warnings,
                     [&sdsModel](const QList<QQmlError> &warnings) {
                         QStringList msg;
                         foreach (const QQmlError &error, warnings) {
                             msg << error.toString();
                         }
                         emit sdsModel->notifyQmlError(msg.join(QStringLiteral("\n")));
                     });

    // Starting services this build?
#ifdef START_SERVICES
    QObject::connect(
        &ui, &AppUi::uiLoaded, &app,
        [&sdsModel]() {
            bool started = sdsModel->startHcs();
            qCDebug(logCategoryHcs) << "hcs started =" << started;
        },
        Qt::QueuedConnection);
#endif
    ui.loadUrl(QUrl(QStringLiteral("qrc:/main.qml")));

    int appResult = app.exec();
    // LC: process remaining events i.e. submit remaining events (created by external close request)
    QCoreApplication::processEvents();

#ifdef START_SERVICES
    /* HCS has to be killed silently so qml is not updated as main event loop
     * is not running anymore */
    sdsModel->killHcsSilently = true;

    bool killed = sdsModel->killHcs();
    qCDebug(logCategoryHcs) << "hcs killed =" << killed;
#endif

    return appResult;
}
