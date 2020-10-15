import QtQuick 2.12
import QtQuick.Controls 2.12
import QtQuick.Layouts 1.12

Item {
    implicitHeight: divider.height + recompileNavButton.height
    implicitWidth: toolBarListView.width

    Rectangle {
        id: divider
        height: 1
        width: toolBarListView.width
        color: "lightgrey"
        anchors {
            top: parent.top
            left: parent.left
        }
    }

    BusyIndicator {
        id: buildingIndicator
        anchors.horizontalCenter: parent.horizontalCenter
        anchors.verticalCenter: parent.verticalCenter
        height: 30
        width: 30
        visible: toolBarListView.recompiling
        running: visible

        contentItem: Item {
            implicitWidth: 30
            implicitHeight: 30

            Item {
                id: item
                x: parent.width / 2 - 15
                y: parent.height / 2 - 15
                width: 30
                height: 30

                RotationAnimator {
                    target: item
                    running: buildingIndicator.visible && buildingIndicator.running
                    from: 0
                    to: 360
                    loops: Animation.Infinite
                    duration: 1250
                }

                Repeater {
                    id: repeater
                    model: 6

                    Rectangle {
                        x: item.width / 2 - width / 2
                        y: item.height / 2 - height / 2
                        implicitWidth: 6
                        implicitHeight: 6
                        radius: 5
                        color: "#33b13b"
                        transform: [
                            Translate {
                                y: -Math.min(item.width, item.height) * 0.5 + 3
                            },
                            Rotation {
                                angle: index / repeater.count * 360
                                origin.x: 3
                                origin.y: 3
                            }
                        ]
                    }
                }
            }
        }
    }

    SGSideNavItem {
        id: recompileNavButton

        width: parent.width
        height: 70
        anchors.top: divider.bottom

        iconText: "Build"
        iconSource: "qrc:/sgimages/bolt.svg"
        enabled: editor.treeModel.url.toString() !== "" && !toolBarListView.recompiling
        visible: !toolBarListView.recompiling
        color: "transparent"

        function onClicked() {
            toolBarListView.recompiling = true;
            recompileControlViewQrc();
        }

        Connections {
            target: sdsModel.resourceLoader

            onFinishedRecompiling: {
                if (filepath !== '') {
                    loadDebugView(filepath)
                } else {
                    NavigationControl.removeView(controlViewContainer)
                    let error_str = sdsModel.resourceLoader.getLastLoggedError()
                    sdsModel.resourceLoader.createViewObject(NavigationControl.screens.LOAD_ERROR, controlViewContainer, {"error_message": error_str});
                }

                toolBarListView.recompiling = false

                if (toolBarListView.currentIndex === toolBarListView.viewTab) {
                    viewStack.currentIndex = 4
                }
            }
        }
    }
}
