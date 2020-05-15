#include "HostControllerService.h"

#include "HostControllerServiceVersion.h"
#include "HostControllerServiceTimestamp.h"

#include "logging/LoggingQtCategories.h"

#include <QtLoggerSetup.h>

#include <QCoreApplication>
#include <QCommandLineParser>
#include <QSettings>

#include <EvEventsMgr.h>    //for EvEventsMgrInstance (windows WSA)


int main(int argc, char *argv[])
{
    QSettings::setDefaultFormat(QSettings::IniFormat);
    QCoreApplication::setApplicationName(QStringLiteral("hcs"));
    QCoreApplication::setApplicationVersion(AppInfo::version.data());
    QCoreApplication::setOrganizationName(QStringLiteral("ON Semiconductor"));

    QCoreApplication app(argc, argv);

    QCommandLineParser parser;
    parser.setApplicationDescription("Strata Host Controller Service");
    parser.addOption({
        {QStringLiteral("f")},
         QObject::tr("Optional configuration <filename> (default: AppConfigLocation)."),
         QObject::tr("filename")
    });
    parser.addVersionOption();
    parser.addHelpOption();
    parser.process(app);

    const QtLoggerSetup loggerInitialization(app);
    qCInfo(logCategoryHcs) << QStringLiteral("================================================================================");
    qCInfo(logCategoryHcs) << QStringLiteral("%1 %2").arg(QCoreApplication::applicationName()).arg(QCoreApplication::applicationVersion());
    qCInfo(logCategoryHcs) << QStringLiteral("Build on %1 at %2").arg(Timestamp::buildTimestamp.data(), Timestamp::buildOnHost.data());
    qCInfo(logCategoryHcs) << QStringLiteral("--------------------------------------------------------------------------------");
    qCInfo(logCategoryHcs) << QStringLiteral("Powered by Qt %1 (based on Qt %2)").arg(QString(qVersion()), qUtf8Printable(QT_VERSION_STR));
    qCInfo(logCategoryHcs) << QStringLiteral("Running on %1").arg(QSysInfo::prettyProductName());
    qCInfo(logCategoryHcs) << QStringLiteral("[arch: %1; kernel: %2 (%3); locale: %4]").arg(QSysInfo::currentCpuArchitecture(), QSysInfo::kernelType(), QSysInfo::kernelVersion(), QLocale::system().name());
    qCInfo(logCategoryHcs) << QStringLiteral("================================================================================");

    spyglass::EvEventsMgrInstance instance;

    QScopedPointer<HostControllerService> hcs(new HostControllerService);

    const QString config{parser.value(QStringLiteral("f"))};
    if (hcs->initialize(config) == false) {
        return EXIT_FAILURE;
    }

    QObject::connect(&app, &QCoreApplication::aboutToQuit, hcs.get(), &HostControllerService::onAboutToQuit);

    hcs->start();

    return app.exec();
}

