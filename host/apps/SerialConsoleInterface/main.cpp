#include "BoardsController.h"

#include <QGuiApplication>
#include <QQmlApplicationEngine>
#include <QQmlContext>

int main(int argc, char *argv[])
{
    QCoreApplication::setAttribute(Qt::AA_EnableHighDpiScaling);
    QCoreApplication::setOrganizationName(QStringLiteral("On Semiconductor"));

    QGuiApplication app(argc, argv);

    qmlRegisterUncreatableType<BoardsController>("tech.spyglass.sci", 1, 0, "BoardsController", "can not instantiate BoardsController in qml");
    qmlRegisterSingletonType(QUrl("qrc:/fonts/Fonts.qml"), "fonts", 1, 0, "Fonts");

    QQmlApplicationEngine engine;
    engine.addImportPath("qrc:///");

    std::unique_ptr<BoardsController> boardsMgr = std::make_unique<BoardsController>();
    boardsMgr->initialize();
    engine.rootContext()->setContextProperty("boardsMgr", boardsMgr.get());

    engine.load(QUrl(QStringLiteral("qrc:/main.qml")));
    if (engine.rootObjects().isEmpty()) {
        return -1;
    }

    return app.exec();
}
