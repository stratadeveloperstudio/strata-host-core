import QtQuick 2.0
import QtQuick.Layouts 1.12
import QtQuick.Controls 2.12
import QtQuick.Window 2.12
import QtQuick.Dialogs 1.3
import Qt.labs.platform 1.0

Window {
    id: root
    width: 500
    height: 500
    visible: false
    flags: Qt.Tool
    signal submit()

    property alias folderPath: selectFolderField.text
    property alias filename: filenameField.text

    function clearFields(){
        folderPath = ""
        filename = ""
    }
    function validate(){
        if((selectFolderField.text.length !== 0) && (filenameField.text.length !== 0)){
            submit()
            statusBar.message = "Please enter the requested information"
        }
        else {
            //hightlight the background of selectfolderfield and filenameField
            if(selectFolderField.text.length == 0){
                folderFieldBackground.border.color = "red"
                folderFieldBackground.border.width = 2
                statusBar.message = "Invalid Input"
            }
            if(filenameField.text.length == 0){
                filenameFieldBackground.border.color = "red"
                filenameFieldBackground.border.width = 2
                statusBar.message = "Invalid Input"
            }
        }

    }

    Rectangle {
        anchors.fill: parent
        color: "#393e46"
        border {
            width: 2
            color: "#b55400"
        }
        StatusBar {
            id: statusBar
            anchors.top: parent.top
        }
        ColumnLayout {
            spacing: 1
            width: parent.width - 10
            height: parent.height / 2
            anchors {
                horizontalCenter: parent.horizontalCenter
                verticalCenter: parent.verticalCenter
            }
            Rectangle {
                Layout.preferredHeight: 80
                Layout.preferredWidth: parent.width
                Layout.alignment: Qt.AlignHCenter + Qt.AlignTop
                color: "transparent"
                Rectangle {
                    id: selectFolderContainer
                    height: parent.height / 2
                    width: parent.width / 2
                    color: "transparent"
                    anchors {
                        centerIn: parent
                    }
                    Label {
                        text: "Select Folder:"
                        color: "white"
                        anchors {
                            bottom: selectFolderContainer.top
                            left: selectFolderContainer.left
                        }
                    }
                    TextField {
                        id: selectFolderField
                        height: parent.height
                        width: parent.width - 40
                        placeholderText: "Enter Path"
                        onActiveFocusChanged: {
                            folderFieldBackground.border.color = activeFocus ? "#b55400" : "transparent"
                        }
                        background: Rectangle {
                            id: folderFieldBackground
                            color: "white"
                            border {
                                width: 2
                                color: "transparent"
                            }
                        }

                    }
                    Button  {
                        height: parent.height
                        width: 40
                        onPressed: {
                            folderDialog.visible = true
                        }
                        anchors {
                            left: selectFolderField.right
                            leftMargin: 0
                            verticalCenter: parent.verticalCenter
                        }
                        Image {
                            source: "Images/openFolderIcon.png"
                            width: parent.width / 1.5
                            height: parent.height / 1.5
                            anchors.centerIn: parent
                            fillMode: Image.PreserveAspectFit
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
                    id: filenameContainer
                    height: parent.height / 2
                    width: parent.width / 2
                    anchors {
                        centerIn: parent
                    }
                    Label {
                        text: "Database Name:"
                        color: "white"
                        anchors {
                            bottom: filenameContainer.top
                            left: filenameContainer.left
                        }
                    }
                    TextField {
                        id: filenameField
                        anchors.fill: parent
                        placeholderText: "Enter Database Name"
                        onActiveFocusChanged: {
                            filenameFieldBackground.border.color = activeFocus ? "#b55400" : "transparent"
                        }
                        background: Rectangle {
                            id: filenameFieldBackground
                            border {
                                width: 2
                                color: "transparent"
                            }
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
                    onClicked: {
                        validate()
                    }
                }
            }
        }
    }
    //place dialog box here
    FolderDialog {
        id: folderDialog
        onAccepted: {
            selectFolderField.text = folderDialog.folder
        }
    }

}
