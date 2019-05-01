import QtQuick 2.9
import QtQuick.Controls 2.2
import Fonts 1.0

Rectangle {
    id: root

    signal applied(string value)

    property string label: ""
    property bool labelLeft: true
    property string input: ""
    property real infoBoxWidth: 50
    property real infoBoxHeight: 50
    property color textColor: "#000"
    property color infoBoxColor: "#eee"
    property color infoBoxBorderColor: "#cccccc"
    property real infoBoxBorderWidth: 1
    property bool realNumberValidation: false
    property bool enabled: true
    property bool buttonVisible: true
    property string buttonText: "Submit"
    property int fontSize: 10
    property string unit: "RPM"

    implicitHeight: labelLeft ? inputButtonContainer.height : labelText.height + inputButtonContainer.height + inputButtonContainer.anchors.topMargin
    implicitWidth: labelLeft ? labelText.width + inputButtonContainer.width + inputButtonContainer.anchors.leftMargin + unitText.width :
                               Math.max(inputButtonContainer.width, labelText.width)
    color: "transparent"

    Text {
        id: labelText
        text: label
        font.bold: true
        width: contentWidth
        height: root.label === "" ? 0 : root.labelLeft ? infoContainer.height : contentHeight
        topPadding: root.label === "" ? 0 : root.labelLeft ? (Math.max(infoContainer.height, applyButton.height) - contentHeight) / 2 : 0
        bottomPadding: topPadding
        color: root.textColor
        opacity: root.enabled ? 1 : 0.5
        font.pixelSize: fontSize
        horizontalAlignment: Text.AlignHCenter

    }
    FontLoader {
        id: digital
        source: "fonts/digitalseven.ttf"
    }

    Rectangle {
        id: inputButtonContainer
        width: root.buttonVisible ? infoContainer.width + applyButton.width + applyButton.anchors.leftMargin : infoContainer.width
        height: root.buttonVisible ? Math.max(infoContainer.height, applyButton.height) : infoContainer.height
        color: "transparent"
        anchors {
            left: root.labelLeft ? labelText.right : labelText.left
            top: root.labelLeft ? labelText.top : labelText.bottom
            leftMargin: root.label === "" ? 0 : root.labelLeft ? 10 : 0
            topMargin: root.label === "" ? 0 : root.labelLeft ? 0 : 5
        }

        Rectangle {
            id: infoContainer
            width: root.infoBoxWidth
            height: infoBoxHeight
            color: root.infoBoxColor
            radius: 2
            border {
                color: root.infoBoxBorderColor
                width: root.infoBoxBorderWidth
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
                    right: infoContainer.right
                    verticalCenter: infoContainer.verticalCenter
                    left: infoContainer.left
                }

                text: input
                selectByMouse: true
                readOnly: false
                font {
                    pixelSize: 30
                    family: digital.name // Monospaced font for better text width uniformity
                }
                horizontalAlignment: TextInput.AlignRight
                validator: realNumberValidation ? realNumberValidator : null
                onAccepted: root.applied(infoText.text)
                enabled: root.enabled
                color: "green"//root.textColor
                opacity: root.enabled ? 1 : 0.5

                RegExpValidator {
                    id: realNumberValidator
                    regExp: /[-+]?([0-9]*\.[0-9]+|[0-9]+)/
                }
            }
        }
        Text {
            id: unitText
            text: "" + unit
            width: contentWidth + 20
            height: contentHeight
            font.pixelSize: 15
            color: "white"

            anchors {
                left : infoContainer.right
                leftMargin: 6
                verticalCenter: infoContainer.verticalCenter
            }
            font.bold: true
        }

        Button {
            id: applyButton
            visible: root.buttonVisible
            text: root.buttonText
            anchors {
                left: infoContainer.right
                leftMargin: 10
                verticalCenter: infoContainer.verticalCenter
            }
            onClicked: root.applied(infoText.text)
            enabled: root.enabled
        }
    }
}
