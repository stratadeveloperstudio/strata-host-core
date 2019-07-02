import QtQuick 2.0
import QtQuick.Layouts 1.12
import QtQuick.Controls 2.12
import QtQuick.Window 2.12
import QtQuick.Dialogs 1.3

Popup {
    id: root
    width: 500
    height: 500
    visible: false
    padding: 0

    signal start()

    property alias url: urlField.text
    property alias username: usernameField.text
    property alias password: passwordField.text
    property string rep_type: "pull"

    function clearInput()
    {
        urlField.text = ""
        usernameField.text = ""
        passwordField.text = ""
    }

    function validate(){
        if(url.length !== 0){
            warningPopup.visible = true
        }
        else {
            urlFieldBackground.border.color = "red"
            urlFieldBackground.border.width = 2
            header.text = "Invalid Input"
        }
    }

    WarningPopup {
        id: warningPopup
        onAllow: {
            warningPopup.visible = false
            start()
        }
        onDeny: {
            warningPopup.visible = false
        }
    }

    Rectangle {
        anchors.fill: parent
        color: "#393e46"
        border {
            width: 2
            color: "#b55400"
        }

        ColumnLayout {
            spacing: 1
            width: parent.width - 10
            height: implicitHeight
            anchors.horizontalCenter: parent.horizontalCenter
            Rectangle {
                Layout.preferredHeight: 80
                Layout.preferredWidth: parent.width
                Layout.alignment: Qt.AlignHCenter + Qt.AlignTop
                color: "transparent"
                Label {
                    id: header
                    text: "Please enter the requested information"
                    anchors.centerIn: parent
                    color: "#eee"
                }
            }
            Rectangle {
                Layout.preferredHeight: 80
                Layout.preferredWidth: parent.width
                Layout.alignment: Qt.AlignHCenter + Qt.AlignTop
                color: "transparent"
                Rectangle {
                    id: urlContainer
                    height: parent.height / 2
                    width: parent.width / 2
                    anchors {
                        centerIn: parent
                    }
                    Label {
                        text: "URL:"
                        color: "#eee"
                        anchors {
                            bottom: urlContainer.top
                            left: urlContainer.left
                        }
                    }
                    TextField {
                        id: urlField
                        anchors.fill: parent
                        placeholderText: "Enter URL"
                        onActiveFocusChanged: {
                            urlFieldBackground.border.color = "transparent"
                            header.text = "Please enter the requested information"
                        }
                        Rectangle {
                            id: urlFieldBackground
                            width: parent.width
                            height: parent.height
                            color: "transparent"
                        }
                    }
                }
            }
            Rectangle {
                Layout.preferredHeight: 80
                Layout.preferredWidth: parent.width
                Layout.alignment: Qt.AlignHCenter + Qt.AlignTop
                color: "transparent"
                Rectangle {
                    id: usernameContainer
                    height: parent.height / 2
                    width: parent.width / 2
                    anchors {
                        centerIn: parent
                    }
                    Label {
                        text: "Username:"
                        color: "#eee"
                        anchors {
                            bottom: usernameContainer.top
                            left: usernameContainer.left
                        }
                    }
                    TextField {
                        id: usernameField
                        anchors.fill: parent
                        placeholderText: "Enter Username"
                    }
                }
            }
            Rectangle {
                Layout.preferredHeight: 80
                Layout.preferredWidth: parent.width
                Layout.alignment: Qt.AlignHCenter + Qt.AlignTop
                color: "transparent"
                Rectangle {
                    id: passwordContainer
                    height: parent.height / 2
                    width: parent.width / 2
                    anchors {
                        centerIn: parent
                    }
                    Label {
                        text: "Password:"
                        color: "#eee"
                        anchors {
                            bottom: passwordContainer.top
                            left: passwordContainer.left
                        }
                    }
                    TextField {
                        id: passwordField
                        anchors.fill: parent
                        placeholderText: "Enter Password"
                        echoMode: "Password"
                    }
                }

            }
            Rectangle {
                Layout.preferredHeight: 80
                Layout.preferredWidth: parent.width
                Layout.alignment: Qt.AlignHCenter + Qt.AlignTop
                color: "transparent"
                Rectangle {
                    id: selectorContainer
                    height: parent.height / 2
                    width: parent.width / 2
                    color: "transparent"
                    anchors {
                        centerIn: parent
                        verticalCenterOffset: -10
                    }
                    RowLayout {
                        anchors.fill: parent

                        RadioButton {
                            id: pushButton
                            text: qsTr("")
                            Layout.alignment: Qt.AlignLeft
                            onClicked: rep_type = "push"
                        }
                        RadioButton {
                            id: pushAndPullButton
                            checked: true
                            text: qsTr("")
                            Layout.alignment: Qt.AlignHCenter
                            onClicked: rep_type = "pushpull"
                        }
                        RadioButton {
                            id: pullButton
                            text: qsTr("")
                            Layout.alignment: Qt.AlignRight
                            onClicked: rep_type = "pull"
                        }
                    }
                    Label {
                        id: pushLabel
                        text: "Push"
                        color: "#eee"
                        anchors {
                            top: selectorContainer.bottom
                            left: selectorContainer.left
                            leftMargin: 10
                        }
                    }
                    Label {
                        id: pullLabel
                        text: "Pull"
                        color: "#eee"
                        anchors {
                            top: selectorContainer.bottom
                            right: selectorContainer.right
                            rightMargin: 12
                        }
                    }
                    Label {
                        id: pushAndPullLabel
                        text: "Push & Pull"
                        color: "#eee"
                        anchors {
                            top: selectorContainer.bottom
                            horizontalCenter: selectorContainer.horizontalCenter

                        }
                    }
                }

            }
            Rectangle {
                Layout.preferredHeight: 80
                Layout.preferredWidth: parent.width
                Layout.alignment: Qt.AlignHCenter + Qt.AlignTop
                color: "transparent"
                Button {
                    id: submitButton
                    height: parent.height / 2
                    width: parent.width / 4
                    text: "Submit"
                    anchors.centerIn: parent
                    onClicked: validate();
                }
            }
        }
    }
}
