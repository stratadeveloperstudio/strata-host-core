import QtQuick 2.12
import QtQuick.Layouts 1.12
import QtQuick.Controls 2.12
import QtQuick.Dialogs 1.3
import QtGraphicalEffects 1.12
import "../Components"

Popup {
    id: root
    width: maximized ? parent.width : 500
    height: maximized ? parent.height : 600
    visible: false
    onOpened: listView.positionViewAtBeginning()
    padding: 1
    x: (parent.width - width) / 2
    y: (parent.height - height) / 2

    closePolicy: Popup.CloseOnEscape
    modal: true

    signal submit()
    signal remove(string dbName)
    signal clear()

    property alias fileUrl: fileInputBox.userInput
    property alias popupStatus: statusBar
    property alias model: listModel
    property bool doubleClicked: false
    property bool maximized: false

    onClosed: fileInputBox.clear()

    Rectangle {
        id: container
        anchors.fill: parent
        color: "#222831"
        StatusBar {
            id: statusBar
            anchors.bottom: parent.bottom
            width: parent.width
        }
        ColumnLayout {
            width: parent.width
            height: parent.height - 120
            anchors.top: parent.top
            anchors.topMargin: 40

            Item {
                id: dbList
                Layout.preferredWidth: parent.width
                Layout.preferredHeight: parent.height - 200
                Layout.alignment: Qt.AlignHCenter
                visible: model.count > 0

                CustomButton {
                    id: clearAllBtn
                    text: "Clear All"
                    height: 25
                    width: 100
                    anchors{
                        top: parent.top
                        right: listView.right
                        rightMargin: 10
                    }
                    onClicked: root.clear()
                }

                ListView {
                    id: listView
                    model: listModel
                    delegate: listCard
                    clip: true
                    spacing: 5
                    height: parent.height - 25
                    width: parent.width - 50
                    anchors{
                        top: clearAllBtn.bottom
                        topMargin: 10
                        horizontalCenter: parent.horizontalCenter
                    }
                    ScrollBar.vertical: ScrollBar {
                        id: scrollBar
                        width: 10
                        policy: ScrollBar.AsNeeded
                    }
                }

                Component {
                    id: listCard
                    Rectangle {
                        id: cardBackground
                        width: parent.width - 10
                        height: 60
                        color: "white"
                        border.width: 2
                        border.color: mouse.containsMouse ? "#b55400": "transparent"
                        MouseArea {
                            id: mouse
                            anchors.fill: parent
                            hoverEnabled: true
                            onClicked: root.fileUrl = path
                            onDoubleClicked: {
                                root.fileUrl = path
                                root.doubleClicked = true
                            }
                            onReleased: {
                                if (root.doubleClicked) {
                                    root.doubleClicked = false;
                                    root.submit()
                                }
                            }
                        }
                        Image {
                            id: deleteIcon
                            width: 12
                            height: 12
                            opacity: 0.5
                            MouseArea {
                                anchors.fill: parent
                                hoverEnabled: true
                                onEntered: {
                                    deleteIcon.opacity = 1
                                    cardBackground.border.color = "#b55400"
                                }
                                onExited: deleteIcon.opacity = 0.5
                                onClicked: root.remove(name)
                            }
                            source: "../Images/cancelIcon.svg"
                            fillMode: Image.PreserveAspectFit
                            anchors {
                                right: parent.right
                                top: parent.top
                                margins: 5
                            }
                        }

                        GridLayout {
                            rows: 2
                            columns: 2
                            anchors.fill: parent
                            clip: true
                            Image {
                                Layout.preferredHeight: 50
                                Layout.preferredWidth: 50
                                Layout.rowSpan: 2
                                Layout.alignment: Qt.AlignCenter
                                source: "../Images/database.svg"
                                fillMode: Image.PreserveAspectFit
                            }
                            Text {
                                Layout.fillWidth: true
                                Layout.leftMargin: 10
                                Layout.rightMargin: 10
                                Layout.alignment: Qt.AlignVCenter
                                text: "Name: " + name
                                verticalAlignment: Text.AlignVCenter
                                elide: Text.ElideRight
                            }
                            Text {
                                Layout.fillWidth: true
                                Layout.leftMargin: 10
                                Layout.rightMargin: 10
                                Layout.alignment: Qt.AlignVCenter
                                text: "Path: " + path
                                verticalAlignment: Text.AlignVCenter
                                elide: Text.ElideRight
                            }
                        }
                    }
                }

                ListModel {
                    id: listModel
                }
            }

            UserInputBox {
                id: fileInputBox
                Layout.preferredWidth: 250
                Layout.alignment: Qt.AlignHCenter
                showButton: true
                showLabel: true
                label: "File Path"
                placeholderText: "Enter File Path e.g file:///Users/abc.xyz"
                path: "../Images/openFolder.svg"
                onClicked: fileDialog.visible = true
            }
            CustomButton {
                text: "Open"
                Layout.preferredWidth: 100
                Layout.preferredHeight: 40
                Layout.alignment: Qt.AlignHCenter
                Layout.topMargin: 15
                onClicked: root.submit()
                enabled: fileUrl.length !== 0
            }
        }

        FileDialog {
            id: fileDialog
            title: "Please select a database"
            folder: shortcuts.home
            onAccepted: {
                close()
                fileInputBox.userInput = fileUrl
            }
            onRejected: close()
        }

        Button {
            id: closeBtn
            height: 20
            width: 20
            anchors {
                top: parent.top
                right: parent.right
                topMargin: 20
                rightMargin: 20
            }

            background: Rectangle {
                height: parent.height + 6
                width: parent.width + 6
                radius: width/2
                anchors.centerIn: parent
                color: closeBtn.hovered ? "white" : "transparent"
                Image {
                    id: icon
                    height: closeBtn.height
                    width: closeBtn.width
                    anchors.centerIn: parent
                    fillMode: Image.PreserveAspectFit
                    source: "qrc:/qml/Images/close.svg"
                }
            }
            onClicked: root.close()
        }

        Button {
            id: maximizeBtn
            height: 20
            width: 20
            anchors {
                top: parent.top
                right: closeBtn.left
                topMargin: 20
                rightMargin: 10
            }

            background: Rectangle {
                height: parent.height + 6
                width: parent.width + 6
                radius: 3
                anchors.centerIn: parent
                color: maximizeBtn.hovered ? "white" : "transparent"
                Image {
                    height: maximizeBtn.height
                    width: maximizeBtn.width
                    anchors.centerIn: parent
                    fillMode: Image.PreserveAspectFit
                    source: "qrc:/qml/Images/maximize.svg"
                }
            }
            onClicked: maximized = !maximized
        }
    }

    DropShadow {
        anchors.fill: container
        source: container
        horizontalOffset: 7
        verticalOffset: 7
        spread: 0
        radius: 20
        samples: 41
        color: "#aa000000"
    }
}
