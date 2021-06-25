import QtQuick 2.0
import QtQuick.Layouts 1.3
import QtQuick.Controls 2.12
import tech.strata.sgwidgets 1.0
import "../"
import "../general/"

SGStrataPopup {
    id: root
    modal: true
    visible: true
    headerText: "General Settings"
    closePolicy: Popup.CloseOnEscape
    focus: true
    width: 400
    x: container.width/2 - root.width/2
    y: mainWindow.height/2 - root.height/2

    onClosed: {
        parent.active = false
    }

    contentItem: ColumnLayout {
        id: column
        width: parent.width - 40

        SGText {
            text: "Platform View Settings"
            fontSizeMultiplier: 1.3
        }

        Rectangle {
            // divider
            Layout.fillWidth: true
            Layout.preferredHeight: 1
            color: "#666"
        }

        SGSettingsCheckbox {
            text: "Open/show platform tab when platform is connected"
            checked: userSettings.autoOpenView

            onCheckedChanged: {
                userSettings.autoOpenView = checked
                userSettings.saveSettings()
            }
        }

        SGSettingsCheckbox {
            text: "Close platform tab when platform is disconnected"
            checked: userSettings.closeOnDisconnect

            onCheckedChanged: {
                userSettings.closeOnDisconnect = checked
                userSettings.saveSettings()
            }
        }

            // to be uncommented in CS-880
//            SGText {
//                text: "Firmware Settings"
//                fontSizeMultiplier: 1.3
//            }

//            SGCheckBox {
//                id: firmwareUpdates
//                text: "Notify me when firmware and view updates are available"
//                checked: userSettings.notifyOnFirmwareUpdate
//                leftPadding: 0

//                onCheckedChanged: {
//                    userSettings.notifyOnFirmwareUpdate = checked
//                    userSettings.saveSettings()
//                }
//            }

//            SGCheckBox {
//                text: "Preload firmware versions"
//                leftPadding: 0
//                enabled: false
//            }
//        }

        SGText {
            text: "Notification Settings"
            fontSizeMultiplier: 1.3
        }

        Rectangle {
            // divider
            Layout.fillWidth: true
            Layout.preferredHeight: 1
            color: "#666"
        }

        SGSettingsCheckbox {
            text: "Notify me when a collateral document is updated"
            checked: userSettings.notifyOnCollateralDocumentUpdate

            onCheckedChanged: {
                userSettings.notifyOnCollateralDocumentUpdate = checked
                userSettings.saveSettings()
            }
        }

        SGSettingsCheckbox {
            text: "Notify me when a platform is connected/disconnected"
            checked: userSettings.notifyOnPlatformConnections

            onCheckedChanged: {
                userSettings.notifyOnPlatformConnections  = checked
                userSettings.saveSettings()
            }
        }
    }
}
