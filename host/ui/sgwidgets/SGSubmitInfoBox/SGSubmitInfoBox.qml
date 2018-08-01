import QtQuick 2.9
import QtQuick.Controls 2.2

Rectangle {
    id: root

    signal applied(string value)

    property alias label: labelText.text
    property bool labelLeft: true
    property alias input: infoText.text
    property alias infoBoxWidth: infoContainer.width
    property color textColor: "#000"
    property color infoBoxColor: "#eee"
    property color infoBoxBorderColor: "#cccccc"
    property real infoBoxBorderWidth: 1
    property bool realNumberValidation: false
    property bool enabled: true
    property alias showButton: applyButton.visible
    property alias buttonText: applyButton.text
    property alias overrideLabelWidth: labelText.width
    property alias readOnly: infoText.readOnly
    property alias unit: unit.text

    implicitHeight: labelLeft ? inputButtonContainer.height : labelText.height + inputButtonContainer.height + inputButtonContainer.anchors.topMargin
    implicitWidth: labelLeft ? labelText.width + inputButtonContainer.width + inputButtonContainer.anchors.leftMargin :
                               Math.max(inputButtonContainer.width, labelText.width)
    color: "transparent"

    Text {
        id: labelText
        text: ""
        width: contentWidth
        height: root.label === "" ? 0 : root.labelLeft ? infoContainer.height : contentHeight
        topPadding: root.label === "" ? 0 : root.labelLeft ? (Math.max(infoContainer.height, applyButton.height) - contentHeight) / 2 : 0
        bottomPadding: topPadding
        color: root.textColor
        opacity: root.enabled ? 1 : 0.5
        horizontalAlignment: Text.AlignRight
    }

    Rectangle {
        id: inputButtonContainer
        width: root.showButton ? infoContainer.width + applyButton.width + applyButton.anchors.leftMargin : infoContainer.width
        height: root.showButton ? Math.max(infoContainer.height, applyButton.height) : infoContainer.height
        color: "transparent"
        anchors {
            left: root.labelLeft ? labelText.right : labelText.left
            top: root.labelLeft ? labelText.top : labelText.bottom
            leftMargin: root.label === "" ? 0 : root.labelLeft ? 10 : 0
            topMargin: root.label === "" ? 0 : root.labelLeft ? 0 : 5
        }

        Rectangle {
            id: infoContainer
            height: 30
            width: 50
            color: infoBoxColor
            radius: 2
            border {
                color: infoBoxBorderColor
                width: infoBoxBorderWidth
            }
            anchors {
                left: inputButtonContainer.left
                verticalCenter: inputButtonContainer.verticalCenter
            }
            clip: true

            TextInput {
                id: infoText
                padding: 10
                anchors {
                    right: parent.right
                    verticalCenter: parent.verticalCenter
                    left: parent.left
                }
                text: ""
                selectByMouse: true
                readOnly: false
                font {
                  family: "Courier" // Monospaced font for better text width uniformity
                  pixelSize: (Qt.platform.os === "osx") ? 12 : 10;
                }
                horizontalAlignment: TextInput.AlignRight
                validator: realNumberValidation ? realNumberValidator : null
                onAccepted: root.applied(infoText.text)
                enabled: root.enabled
                color: root.textColor
                opacity: root.enabled ? 1 : 0.5

                RegExpValidator {
                    id: realNumberValidator
                    regExp: /[-+]?([0-9]*\.[0-9]+|[0-9]+)/
                }
            }
        }

        Text {
            id: unit
            text: ""
            anchors {
                left: infoContainer.right
                leftMargin: text === "" ? 0 : 5
                verticalCenter: infoContainer.verticalCenter
            }
        }

        Button {
            id: applyButton
            visible: false
            text: "Submit"
            anchors {
                left: unit.right
                leftMargin: unit.text === "" ? 10 : 20
                verticalCenter: infoContainer.verticalCenter
            }
            onClicked: root.applied(infoText.text)
            enabled: root.enabled
            height: visible ? 40 : 0
        }
    }
}
