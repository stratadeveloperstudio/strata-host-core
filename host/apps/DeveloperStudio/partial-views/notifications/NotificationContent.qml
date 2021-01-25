import QtQuick 2.12
import QtQuick.Layouts 1.12
import QtQuick.Controls 2.12
import QtQml 2.12

import tech.strata.sgwidgets 1.0
import tech.strata.theme 1.0
import tech.strata.fonts 1.0
import tech.strata.notifications 1.0

RowLayout {
    id: row
    anchors {
        left: parent.left
        right: parent.right
        margins: 15
        verticalCenter: parent.verticalCenter
    }
    spacing: 10

    signal actionClicked()
    signal closeClicked()

    SGIcon {
        Layout.preferredWidth: 15
        Layout.preferredHeight: 15
        Layout.alignment: Qt.AlignVCenter
        verticalAlignment: Image.AlignVCenter
        visible: model.iconSource !== ""

        iconColor: {
            if (model.level === Notifications.Level.Info) {
                return Theme.palette.gray;
            } else if (model.level === Notifications.Level.Warning) {
                return Theme.palette.warning;
            } else if (model.level === Notifications.Level.Critical) {
                return Theme.palette.error;
            }
        }
        source: model.iconSource
    }

    ColumnLayout {
        id: columnLayout
        Layout.fillWidth: true
        spacing: 5

        RowLayout {
            Layout.fillHeight: model.description.length === 0
            Layout.fillWidth: true
            spacing: 5
            clip: true

            Text {
                id: title
                text: model.title
                font {
                    bold: true
                    pixelSize: 13
                }
                verticalAlignment: Text.AlignVCenter
                Layout.alignment: Qt.AlignVCenter
                Layout.fillHeight: true
                Layout.fillWidth: true
                wrapMode: Text.WordWrap
                elide: Text.ElideRight
            }

            Text {
                text: {
                    if (!datesAreOnSameDay(new Date(), model.date)) {
                        return model.date.toLocaleString(Qt.locale(), "MM/dd")
                    } else {
                        return model.date.toLocaleTimeString(Qt.locale(), Locale.ShortFormat)
                    }
                }
                font {
                    pixelSize: 11
                }
                Layout.alignment: Qt.AlignVCenter | Qt.AlignRight
                Layout.preferredWidth: 50
                Layout.fillHeight: true
                Layout.rightMargin: 5
                horizontalAlignment: Text.AlignRight
                verticalAlignment: Text.AlignVCenter

                function datesAreOnSameDay(d1, d2) {
                    return d1.getFullYear() === d2.getFullYear() &&
                            d1.getMonth() === d2.getMonth() &&
                            d1.getDate() === d2.getDate();
                }
            }

            SGIcon {
                Layout.preferredHeight: 17
                Layout.preferredWidth: 17
                Layout.alignment: Qt.AlignVCenter
                source: "qrc:/sgimages/times-circle.svg"
                iconColor: closeNotificationButton.containsMouse ? Theme.palette.darkGray : Theme.palette.lightGray

                Accessible.name: "Close notification"
                Accessible.role: Accessible.Button
                Accessible.onPressAction: {
                    closeNotificationButton.clicked()
                }

                MouseArea {
                    id: closeNotificationButton
                    anchors.fill: parent
                    hoverEnabled: true
                    cursorShape: containsMouse ? Qt.PointingHandCursor : Qt.ArrowCursor
                    onClicked: {
                        row.closeClicked()
                    }
                }
            }
        }

        Rectangle {
            color: Theme.palette.lightGray
            visible: description.visible
            Layout.fillWidth: true
            Layout.rightMargin: 10
            Layout.preferredHeight: 1
        }

        Text {
            id: description
            text: model.description
            visible: model.description.length > 0
            Layout.fillWidth: true
            wrapMode: Text.WordWrap
        }

        Rectangle {
            color: Theme.palette.lightGray
            visible: buttonFlow.visible
            Layout.fillWidth: true
            Layout.rightMargin: 10
            Layout.preferredHeight: 1
        }

        Flow {
            id: buttonFlow
            Layout.fillWidth: true
            visible: model.actions.count > 0
            spacing: 3

            Repeater {
                model: actions

                delegate: Rectangle {
                    id: button
                    implicitWidth: metrics.tightBoundingRect.width + 20
                    implicitHeight: metrics.tightBoundingRect.height + 20
                    color: "transparent"
                    border.color: actionMouseArea.containsMouse ? Qt.darker(Theme.palette.highlight) : Theme.palette.highlight
                    border.width: 1
                    radius: 4

                    Text {
                        id: actionText
                        height: parent.height
                        anchors.centerIn: parent
                        text: model.action.text
                        color: Theme.palette.highlight
                        horizontalAlignment: Text.AlignHCenter
                        verticalAlignment: Text.AlignVCenter
                    }

                    TextMetrics {
                        id: metrics
                        font: actionText.font
                        text: actionText.text
                    }

                    MouseArea {
                        id: actionMouseArea
                        anchors.fill: parent
                        hoverEnabled: true
                        cursorShape: Qt.PointingHandCursor
                        onClicked: {
                            model.action.trigger()
                            row.actionClicked()
                        }
                    }
                }
            }
        }
    }
}

