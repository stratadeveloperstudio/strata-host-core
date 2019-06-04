import QtQuick 2.9
import QtQuick.Window 2.2

Window {
    visible: true
    width: 640
    height: 480
    title: qsTr("SGSubmitInfoBox Demo")

    SGSubmitInfoBox {
        id: applyInfoBox

        value: ""                  // Default string to be displayed in box
        infoBoxWidth: 80            // Must be set by user based on their needs

        // Optional configuration:
        label: "Voltage (volts):"       // Default: "" (if not entered, label will not appear)
        labelLeft: false                // Default: true (if false, label will be on top)
        infoBoxColor: "#eee"            // Default: "#eeeeee" (light gray)
        infoBoxBorderColor: "#999"      // Default: "#999999" (dark gray)
        infoBoxBorderWidth: 1           // Default: 1 (assign 0 for no border)
        textColor: "black"              // Default: "black" (colors label as well as text in box)
        invalidTextColor: "red"         // Default: "red" (colors box text when an optional validator determines it is invalid, see below)
        enabled: true                   // Default: true
        buttonText: "Apply"             // Default: "submit"
        showButton: true                // Default: false
        unit: "V"                       // Default: ""
        placeholderText: "0-10 volts"   // Default: ""
        leftJustify: false              // Default: false (justifies text in the input to the left)
//        overrideLabelWidth: 100       // Default: label contents width - this is useful for lining up lots of these vertically, set them all to the same value
        validator: DoubleValidator {    // Default: no input validator - you may assign your own configured DoubleValidator, IntValidator or RegExpValidator
            bottom: 0
            top: 10
        }

        // Useful Signals:
        onApplied: console.log("Applied string value is " + value)
    }

    Component.onCompleted: applyInfoBox.textInput.forceActiveFocus()
}
