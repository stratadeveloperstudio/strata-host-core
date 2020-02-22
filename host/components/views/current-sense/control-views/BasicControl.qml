import QtQuick 2.12
import QtQuick.Layouts 1.12
import QtQuick.Controls 2.12
import tech.strata.sgwidgets 1.0
import tech.strata.fonts 1.0
import "qrc:/js/help_layout_manager.js" as Help
Rectangle {
    id: root
    anchors.fill: parent
    property real ratioCalc: root.width / 1200
    property real initialAspectRatio: 1200/820

    MouseArea {
        id: containMouseArea
        anchors.fill: parent
        onClicked: {
            console.log("in mouse area")
            forceActiveFocus()
        }
    }

    property  var switch_enable_status_en_210: platformInterface.switch_enable_status_en_210
    onSwitch_enable_status_en_210Changed: {
        if(switch_enable_status_en_210 === "on") {
            enable3.checked = true
        }
        else enable3.checked = false
    }

    property  var switch_enable_status_en_211: platformInterface.switch_enable_status_en_211
    onSwitch_enable_status_en_211Changed: {
        if(switch_enable_status_en_211 === "on") {
            enable2.checked = true
        }
        else enable2.checked = false
    }

    property  var switch_enable_status_en_214: platformInterface.switch_enable_status_en_214
    onSwitch_enable_status_en_214Changed: {
        if(switch_enable_status_en_214 === "on") {
            enable4checked = true
        }
        else enable4.checked = false
    }

    property  var switch_enable_status_en_213: platformInterface.switch_enable_status_en_213
    onSwitch_enable_status_en_213Changed: {
        if(switch_enable_status_en_213 === "on") {
            enable5checked = true
        }
        else enable5.checked = false
    }


    property  var switch_enable_status_en_333: platformInterface.switch_enable_status_en_333
    onSwitch_enable_status_en_333Changed: {
        if(switch_enable_status_en_333 === "on") {
            enable1checked = true
        }
        else enable1.checked = false
    }


            ColumnLayout {
                // id: root
                anchors.fill: parent
                spacing: 5

                property var periodic_status: platformInterface.periodic_status
                onPeriodic_statusChanged: {
                    setting1Reading.text = periodic_status.ADC_333
                    setting2Reading.text = periodic_status.ADC_211
                    setting3Reading.text = periodic_status.ADC_210
                    setting4Reading.text = periodic_status.ADC_214
                    setting5Reading.text = periodic_status.ADC_213
                    vinReading.text = periodic_status.ADC_VIN

                }

                property var current_sense_interrupt: platformInterface.current_sense_interrupt.value
                onCurrent_sense_interruptChanged:  {
                    console.log(current_sense_interrupt)
                    if(current_sense_interrupt === "yes")
                    currentStatusLight.status = SGStatusLight.Red
                    else currentStatusLight.status = SGStatusLight.Off

                }

                property var voltage_sense_interrupt: platformInterface.voltage_sense_interrupt.value
                onVoltage_sense_interruptChanged: {
                    if(voltage_sense_interrupt === "yes")
                    voltageStatusLight.status = SGStatusLight.Red
                    else voltageStatusLight.status = SGStatusLight.Off

                }

                property var i_in_interrupt: platformInterface.i_in_interrupt.value
                onI_in_interruptChanged: {
                    if(i_in_interrupt === "yes")
                    loadCurrent.status = SGStatusLight.Red
                    else loadCurrent.status = SGStatusLight.Off
                }

                Text {
                    id: platformName
                    Layout.alignment: Qt.AlignHCenter
                    text: "Strata Enable Current Sense"
                    font.bold: true
                    font.pixelSize: ratioCalc * 25
                    topPadding: 7
                }


                Rectangle {
                    Layout.fillWidth: true
                    Layout.preferredHeight: parent.height - platformName.contentHeight - 40
                    Layout.alignment: Qt.AlignCenter


                    RowLayout {
                        anchors.fill:parent
                        Rectangle{
                            Layout.fillHeight: true
                            Layout.fillWidth: true
                            color: "transparent"
                            ColumnLayout {
                                anchors.fill: parent

                                Rectangle {
                                    Layout.fillHeight: true
                                    Layout.fillWidth: true
                                    Text {
                                        id: settings
                                        text: "Settings"
                                        font.bold: true
                                        font.pixelSize: ratioCalc * 20
                                        color: "#696969"
                                        anchors {
                                            left: parent.left
                                            leftMargin: 10
                                            top: parent.top
                                        }
                                    }

                                    Rectangle {
                                        id: line1
                                        height: 2
                                        Layout.alignment: Qt.AlignCenter
                                        width: parent.width
                                        border.color: "lightgray"
                                        radius: 2
                                        anchors {
                                            top: settings.bottom
                                            topMargin: 7
                                        }
                                    }

                                    ColumnLayout{
                                        anchors {
                                            top: line1.bottom
                                            topMargin: 10
                                            left: parent.left
                                            right: parent.right
                                            bottom: parent.bottom
                                        }
                                        Rectangle{
                                            Layout.fillHeight: true
                                            Layout.fillWidth: true
                                            RowLayout{
                                                anchors.fill:parent
                                                Rectangle{
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true
                                                    ColumnLayout {
                                                        anchors.fill: parent
                                                        Rectangle {
                                                            Layout.fillHeight: true
                                                            Layout.fillWidth: true
                                                            SGText {
                                                                anchors.bottom: parent.bottom
                                                                anchors.horizontalCenter: parent.horizontalCenter
                                                                // anchors.centerIn: parent
                                                                text: "NCS333 "
                                                                font.bold: true
                                                                fontSizeMultiplier: ratioCalc * 1.2
                                                            }
                                                        }

                                                        Rectangle {

                                                            Layout.fillHeight: true
                                                            Layout.fillWidth: true
                                                            SGText {
                                                                anchors.top:parent.top
                                                                anchors.horizontalCenter: parent.horizontalCenter
                                                                text: "100uA Max"
                                                                font.bold: true
                                                                fontSizeMultiplier: ratioCalc
                                                                color: "red"
                                                            }
                                                        }
                                                    }
                                                }

                                                Rectangle{
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true

                                                    SGSwitch {
                                                        id: enable1
                                                        //                                            height: 35 * ratioCalc
                                                        //                                            width: 95 * ratioCalc
                                                        checkedLabel: "On"
                                                        uncheckedLabel: "Off"
                                                        fontSizeMultiplier: ratioCalc
                                                        anchors.centerIn: parent

                                                        onToggled:  {
                                                            if(checked)
                                                            platformInterface.switch_enables.update("333_on")
                                                            else platformInterface.switch_enables.update("off")

                                                        }

                                                    }


                                                }

                                                Rectangle{
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true
                                                    SGInfoBox {
                                                        id: setting1Reading
                                                        fontSizeMultiplier: ratioCalc === 0 ? 1.0 : ratioCalc
                                                        width: (110 * ratioCalc)
                                                        unit: "<b>µA</b>"
                                                        boxColor: "lightgrey"
                                                        boxFont.family: Fonts.digitalseven
                                                        anchors.centerIn: parent
                                                        anchors.horizontalCenter: parent.horizontalCenter
                                                        anchors.horizontalCenterOffset: 5
                                                    }
                                                }

                                            }
                                        }
                                        Rectangle{
                                            Layout.fillHeight: true
                                            Layout.fillWidth: true
                                            RowLayout{
                                                anchors.fill:parent
                                                Rectangle{
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true

                                                    ColumnLayout {
                                                        anchors.fill: parent
                                                        Rectangle {
                                                            Layout.fillHeight: true
                                                            Layout.fillWidth: true
                                                            SGText {
                                                                anchors.bottom: parent.bottom
                                                                anchors.horizontalCenter: parent.horizontalCenter
                                                                text: "NCS211R"
                                                                font.bold: true
                                                                fontSizeMultiplier: ratioCalc * 1.2
                                                            }
                                                        }
                                                        Rectangle {
                                                            Layout.fillHeight: true
                                                            Layout.fillWidth: true
                                                            SGText {
                                                                anchors.top:parent.top
                                                                anchors.horizontalCenter: parent.horizontalCenter
                                                                text: "2mA Max"
                                                                font.bold: true
                                                                fontSizeMultiplier: ratioCalc
                                                                color: "red"
                                                            }
                                                        }

                                                    }
                                                }

                                                Rectangle{
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true

                                                    SGSwitch {
                                                        id: enable2
                                                        //                                            height: 35 * ratioCalc
                                                        //                                            width: 95 * ratioCalc
                                                        checkedLabel: "On"
                                                        uncheckedLabel: "Off"
                                                        fontSizeMultiplier: ratioCalc

                                                        anchors.centerIn: parent
                                                        onToggled:  {
                                                            if(checked)
                                                            platformInterface.switch_enables.update("211_on")
                                                            else platformInterface.switch_enables.update("off")
                                                        }

                                                    }

                                                }

                                                Rectangle{
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true
                                                    SGInfoBox {
                                                        id: setting2Reading
                                                        fontSizeMultiplier: ratioCalc === 0 ? 1.0 : ratioCalc
                                                        width: 110 * ratioCalc
                                                        unit: "<b>mA</b>"
                                                        boxColor: "lightgrey"
                                                        boxFont.family: Fonts.digitalseven
                                                        anchors.centerIn: parent
                                                        anchors.horizontalCenter: parent.horizontalCenter
                                                        anchors.horizontalCenterOffset: 5
                                                    }
                                                }

                                            }
                                        }
                                        Rectangle{
                                            Layout.fillHeight: true
                                            Layout.fillWidth: true
                                            RowLayout{
                                                anchors.fill:parent
                                                Rectangle{
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true

                                                    ColumnLayout {
                                                        anchors.fill: parent
                                                        Rectangle {
                                                            Layout.fillHeight: true
                                                            Layout.fillWidth: true
                                                            SGText {
                                                                anchors.bottom: parent.bottom
                                                                anchors.horizontalCenter: parent.horizontalCenter
                                                                text: "NCS210R"
                                                                font.bold: true
                                                                fontSizeMultiplier: ratioCalc * 1.2
                                                            }
                                                        }

                                                        Rectangle {
                                                            Layout.fillHeight: true
                                                            Layout.fillWidth: true
                                                            SGText {
                                                                anchors.top:parent.top
                                                                anchors.horizontalCenter: parent.horizontalCenter
                                                                text: "100mA Max"
                                                                font.bold: true
                                                                fontSizeMultiplier: ratioCalc
                                                                color: "red"
                                                            }

                                                        }

                                                    }
                                                }

                                                Rectangle{
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true

                                                    SGSwitch {
                                                        id: enable3
                                                        //                                            height: 35 * ratioCalc
                                                        //                                            width: 95 * ratioCalc
                                                        checkedLabel: "On"
                                                        uncheckedLabel: "Off"
                                                        fontSizeMultiplier: ratioCalc

                                                        anchors.centerIn: parent
                                                        onToggled:  {
                                                            if(checked)
                                                            platformInterface.switch_enables.update("210_on")
                                                            else platformInterface.switch_enables.update("off")
                                                        }

                                                    }
                                                }

                                                Rectangle{
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true
                                                    SGInfoBox {
                                                        id: setting3Reading
                                                        fontSizeMultiplier: ratioCalc === 0 ? 1.0 : ratioCalc
                                                        width: 110 * ratioCalc
                                                        unit: "<b>mA</b>"
                                                        boxColor: "lightgrey"
                                                        boxFont.family: Fonts.digitalseven
                                                        anchors.centerIn: parent
                                                        anchors.horizontalCenter: parent.horizontalCenter
                                                        anchors.horizontalCenterOffset: 5
                                                    }
                                                }

                                            }
                                        }
                                        Rectangle{
                                            Layout.fillHeight: true
                                            Layout.fillWidth: true
                                            RowLayout{
                                                anchors.fill:parent
                                                Rectangle{
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true

                                                    ColumnLayout {
                                                        anchors.fill: parent

                                                        Rectangle {
                                                            Layout.fillHeight: true
                                                            Layout.fillWidth: true
                                                            SGText {
                                                                anchors.bottom: parent.bottom
                                                                anchors.horizontalCenter: parent.horizontalCenter
                                                                text: "NCS214R"
                                                                font.bold: true
                                                                fontSizeMultiplier:ratioCalc * 1.2
                                                            }
                                                        }

                                                        Rectangle {
                                                            Layout.fillHeight: true
                                                            Layout.fillWidth: true
                                                            SGText {
                                                                anchors.top:parent.top
                                                                anchors.horizontalCenter: parent.horizontalCenter
                                                                text: "1A Max"
                                                                font.bold: true
                                                                fontSizeMultiplier: ratioCalc
                                                                color: "red"
                                                            }
                                                        }
                                                    }

                                                }

                                                Rectangle{
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true

                                                    SGSwitch {
                                                        id: enable4
                                                        //                                            height: 35 * ratioCalc
                                                        //                                            width: 95 * ratioCalc
                                                        checkedLabel: "On"
                                                        uncheckedLabel: "Off"
                                                        fontSizeMultiplier: ratioCalc

                                                        anchors.centerIn: parent

                                                        onCheckedChanged: {
                                                            if(checked)
                                                            platformInterface.switch_enables.update("214_on")
                                                            else  platformInterface.switch_enables.update("off")
                                                        }


                                                    }

                                                }

                                                Rectangle{
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true
                                                    SGInfoBox {
                                                        id: setting4Reading
                                                        fontSizeMultiplier: ratioCalc === 0 ? 1.0 : ratioCalc
                                                        width: 100 * ratioCalc
                                                        unit: "<b>A</b>"
                                                        boxColor: "lightgrey"
                                                        boxFont.family: Fonts.digitalseven
                                                        anchors.centerIn: parent
                                                    }
                                                }

                                            }
                                        }
                                        Rectangle{
                                            Layout.fillHeight: true
                                            Layout.fillWidth: true
                                            RowLayout{
                                                anchors.fill:parent
                                                ColumnLayout {
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true
                                                    Rectangle{
                                                        Layout.fillHeight: true
                                                        Layout.fillWidth: true
                                                        SGText {
                                                            anchors.bottom: parent.bottom
                                                            anchors.horizontalCenter: parent.horizontalCenter
                                                            text: "NCS213R"
                                                            fontSizeMultiplier: ratioCalc * 1.2
                                                            font.bold: true
                                                        }
                                                    }

                                                    Rectangle {
                                                        Layout.fillHeight: true
                                                        Layout.fillWidth: true
                                                        SGText {
                                                            anchors.top:parent.top
                                                            anchors.horizontalCenter: parent.horizontalCenter
                                                            text: "30A Max"
                                                            font.bold: true
                                                            fontSizeMultiplier: ratioCalc
                                                            color: "red"

                                                        }
                                                    }
                                                }

                                                Rectangle{
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true

                                                    SGSwitch {
                                                        id: enable5
                                                        //                                            height: 35 * ratioCalc
                                                        //                                            width: 95 * ratioCalc
                                                        checkedLabel: "On"
                                                        uncheckedLabel: "Off"
                                                        fontSizeMultiplier: ratioCalc

                                                        anchors.centerIn: parent

                                                        onCheckedChanged: {
                                                            if(checked)
                                                            platformInterface.switch_enables.update("213_on")
                                                            else platformInterface.switch_enables.update("off")
                                                        }

                                                    }


                                                }

                                                Rectangle{
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true
                                                    SGInfoBox {
                                                        id: setting5Reading
                                                        fontSizeMultiplier: ratioCalc === 0 ? 1.0 : ratioCalc
                                                        width: 100 * ratioCalc
                                                        unit: "<b>A</b>"
                                                        boxColor: "lightgrey"
                                                        boxFont.family: Fonts.digitalseven
                                                        anchors.centerIn: parent
                                                    }
                                                }
                                            }
                                        }

                                        Rectangle {
                                            Layout.fillHeight: true
                                            Layout.fillWidth: true

                                            RowLayout {
                                                anchors.fill: parent

                                                Rectangle {
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true
                                                }
                                                Rectangle {
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true

                                                    SGText {
                                                        id: vinText
                                                        text : "VIN"
                                                        fontSizeMultiplier:ratioCalc * 1.2
                                                        font.bold: true
                                                        anchors.centerIn: parent
                                                    }
                                                }
                                                Rectangle {
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true

                                                    SGInfoBox {
                                                        id: vinReading
                                                        fontSizeMultiplier: ratioCalc === 0 ? 1.0 : ratioCalc
                                                        width: 100 * ratioCalc
                                                        unit: "<b>V</b>"
                                                        boxColor: "lightgrey"
                                                        boxFont.family: Fonts.digitalseven
                                                        anchors.centerIn: parent
                                                    }
                                                }



                                            }


                                        }
                                        Rectangle {
                                            Layout.fillHeight: true
                                            Layout.fillWidth: true
                                            RowLayout {
                                                anchors.fill: parent
                                                Rectangle {
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true
                                                }
                                                Rectangle {
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true

                                                    SGButton {
                                                        text: "Recalibrate"
                                                        anchors.centerIn: parent
                                                        fontSizeMultiplier: ratioCalc
                                                        color: checked ? "#353637" : pressed ? "#cfcfcf": hovered ? "#eee" : "#e0e0e0"
                                                        hoverEnabled: true
                                                        height: parent.height/1.5
                                                        width: parent.width/1.5
                                                        onClicked: platformInterface.set_recalibrate.send()
                                                    }
                                                }
                                                Rectangle {
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true

                                                    SGButton {
                                                        text: "Reset"
                                                        anchors.centerIn: parent
                                                        fontSizeMultiplier: ratioCalc
                                                        color: checked ? "#353637" : pressed ? "#cfcfcf": hovered ? "#eee" : "#e0e0e0"
                                                        hoverEnabled: true
                                                        height: parent.height/1.5
                                                        width: parent.width/1.5
                                                        onClicked: platformInterface.reset_board.send()
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                                Rectangle {
                                    Layout.preferredHeight: parent.height/3
                                    Layout.fillWidth: true

                                    Text {
                                        id: modeSet
                                        text: "Manual Mode Set"
                                        font.bold: true
                                        font.pixelSize: ratioCalc * 20
                                        color: "#696969"
                                        anchors {
                                            left: parent.left
                                            leftMargin: 10
                                            top: parent.top
                                        }
                                    }

                                    Rectangle {
                                        id: line4
                                        height: 2
                                        Layout.alignment: Qt.AlignCenter
                                        width: parent.width
                                        border.color: "lightgray"
                                        radius: 2
                                        anchors {
                                            top: modeSet.bottom
                                            topMargin: 7
                                        }
                                    }

                                    RowLayout {
                                        anchors {
                                            top: line4.bottom
                                            topMargin: 10
                                            left: parent.left
                                            right: parent.right
                                            bottom: parent.bottom
                                        }

                                        Rectangle {
                                            Layout.fillHeight: true
                                            Layout.preferredWidth: parent.width/4

                                            SGAlignedLabel {
                                                id:  enableModeSetLabel
                                                target: enableModeSet
                                                text: "Enable"
                                                fontSizeMultiplier: ratioCalc * 1.2
                                                font.bold : true
                                                alignment: SGAlignedLabel.SideTopCenter
                                                anchors.centerIn: parent
                                                SGSwitch {
                                                    id: enableModeSet
                                                    checkedLabel: "Manual"
                                                    uncheckedLabel: "Auto"
                                                    fontSizeMultiplier: ratioCalc
                                                    onCheckedChanged: {
                                                        if(checked) {
                                                            maxInputCurrentContainer.enabled = true
                                                            maxInputCurrentContainer.opacity = 1.0
                                                            maxInputVoltageContainer.enabled = true
                                                            maxInputVoltageContainer.opacity = 1.0
                                                            platformInterface.set_mode.update("Manual")
                                                        }
                                                        else {
                                                            maxInputCurrentContainer.enabled = false
                                                            maxInputCurrentContainer.opacity = 0.5
                                                            maxInputVoltageContainer.enabled = false
                                                            maxInputVoltageContainer.opacity = 0.5
                                                            platformInterface.set_mode.update("Auto")
                                                        }
                                                    }
                                                }

                                            }
                                        }

                                        Rectangle {
                                            Layout.fillHeight: true
                                            Layout.fillWidth: true

                                            ColumnLayout{
                                                anchors.fill: parent
                                                Rectangle {
                                                    id: maxInputCurrentContainer
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true

                                                    SGAlignedLabel {
                                                        id:  maxInputCurrentLabel
                                                        target: maxInputCurrent
                                                        text: "Set Max Input Current"
                                                        fontSizeMultiplier: ratioCalc * 1.2
                                                        font.bold : true
                                                        alignment: SGAlignedLabel.SideTopLeft
                                                        anchors.centerIn: parent

                                                        SGSlider {
                                                            id: maxInputCurrent
                                                            width: maxInputCurrentContainer.width - 10
                                                            live: false
                                                            from: 0
                                                            to: 30
                                                            stepSize: 0.1
                                                            fromText.text: "0A"
                                                            toText.text: "30A"
                                                            value: 15
                                                            inputBoxWidth: 50 * ratioCalc
                                                            fontSizeMultiplier: ratioCalc * 0.9
                                                            inputBox.validator: DoubleValidator { }
                                                            onUserSet: {
                                                                var valueSet = parseInt(value)
                                                                if (valueSet > maxInputCurrent.to) {
                                                                    value = maxInputCurrent.to
                                                                }
                                                                if (valueSet < maxInputCurrent.from) {
                                                                    value = maxInputCurrent.from
                                                                }
                                                                platformInterface.set_i_in_dac.update(value)

                                                            }


                                                        }
                                                    }
                                                }
                                                Rectangle {
                                                    id: maxInputVoltageContainer
                                                    Layout.fillHeight: true
                                                    Layout.fillWidth: true
                                                    SGAlignedLabel {
                                                        id:  maxInputVoltageLabel
                                                        target: maxInputVoltage
                                                        text: "Set Max Input Voltage"
                                                        fontSizeMultiplier: ratioCalc * 1.2
                                                        font.bold : true
                                                        alignment: SGAlignedLabel.SideTopLeft
                                                        anchors.centerIn: parent

                                                        SGSlider {
                                                            id: maxInputVoltage
                                                            width: maxInputVoltageContainer.width - 10
                                                            live: false
                                                            from: 0
                                                            to: 26
                                                            stepSize: 0.1
                                                            fromText.text: "0V"
                                                            toText.text: "26V"
                                                            value: 15
                                                            inputBoxWidth: 50 * ratioCalc
                                                            fontSizeMultiplier: ratioCalc * 0.9
                                                            inputBox.validator: DoubleValidator { }



                                                            onUserSet:{
                                                                var valueSet = parseInt(value)
                                                                if (valueSet > maxInputVoltage.to) {
                                                                    value = maxInputVoltage.to
                                                                }
                                                                if (valueSet < maxInputVoltage.from) {
                                                                    value = maxInputVoltage.from

                                                                }


                                                                platformInterface.set_v_set.update(value.toString())

                                                            }


                                                        }
                                                    }
                                                }

                                            }
                                        }

                                    }
                                }
                            }
                        }

                        Rectangle{
                            Layout.fillHeight: true
                            Layout.fillWidth: true

                            ColumnLayout {
                                anchors.fill: parent

                                Rectangle {
                                    Layout.fillHeight: true
                                    Layout.fillWidth: true

                                    Text {
                                        id: onboardLoadControl
                                        text: "On-Board Load Controls"
                                        font.bold: true
                                        font.pixelSize: ratioCalc * 20
                                        color: "#696969"
                                        anchors.top: parent.top
                                    }

                                    Rectangle {
                                        id: line3
                                        height: 2
                                        Layout.alignment: Qt.AlignCenter
                                        width: parent.width
                                        border.color: "lightgray"
                                        radius: 2
                                        anchors {
                                            top: onboardLoadControl.bottom
                                            topMargin: 7
                                        }
                                    }

                                    ColumnLayout{
                                        anchors {
                                            top: line3.bottom
                                            topMargin: 10
                                            left: parent.left
                                            right: parent.right
                                            bottom: parent.bottom
                                        }

                                        RowLayout {
                                            Layout.fillHeight: true
                                            Layout.fillWidth: true
                                            Rectangle {
                                                Layout.fillHeight: true
                                                Layout.fillWidth: true

                                                SGAlignedLabel {
                                                    id: lowCurrentLabel
                                                    target: lowLoadEnable
                                                    text: "<b>" + qsTr("Low Current") + "</b>"
                                                    fontSizeMultiplier: ratioCalc * 1.2
                                                    alignment: SGAlignedLabel.SideTopCenter
                                                    anchors.centerIn: parent
                                                    SGSwitch {
                                                        id: lowLoadEnable
                                                        checkedLabel: "On"
                                                        uncheckedLabel: "Off"
                                                        fontSizeMultiplier: ratioCalc

                                                        onToggled:  {
                                                            if(checked)
                                                            platformInterface.load_enables.update("low_load_on")
                                                            else  platformInterface.load_enables.update("off")
                                                        }

                                                        property var load_enable_status_low_load: platformInterface.load_enable_status.low_load_en
                                                        onLoad_enable_status_low_loadChanged: {
                                                            if(load_enable_status_low_load === "on")
                                                            lowLoadEnable.checked = true
                                                            else lowLoadEnable.checked = false
                                                        }

                                                    }
                                                }
                                            }
                                            Rectangle {
                                                Layout.fillHeight: true
                                                Layout.fillWidth: true
                                                SGAlignedLabel {
                                                    id: midCurrentLabel
                                                    target: midCurrentEnable
                                                    text: "<b>" + qsTr("Mid Current") + "</b>"
                                                    fontSizeMultiplier: ratioCalc * 1.2
                                                    anchors.centerIn: parent
                                                    alignment: SGAlignedLabel.SideTopCenter
                                                    SGSwitch {
                                                        id: midCurrentEnable
                                                        //                                            height: 35 * ratioCalc
                                                        //                                            width: 95 * ratioCalc
                                                        checkedLabel: "On"
                                                        uncheckedLabel: "Off"
                                                        fontSizeMultiplier: ratioCalc

                                                        onToggled:  {
                                                            if(checked)
                                                            platformInterface.load_enables.update("mid_load_on")
                                                            else  platformInterface.load_enables.update("off")
                                                        }

                                                        property var load_enable_status_mid_load: platformInterface.load_enable_status.mid_load_en
                                                        onLoad_enable_status_mid_loadChanged: {
                                                            if(load_enable_status_mid_load === "on") {
                                                                midCurrentEnable.checked = true
                                                            }
                                                            else  midCurrentEnable.checked = false
                                                        }

                                                    }
                                                }
                                            }
                                            Rectangle {
                                                Layout.fillHeight: true
                                                Layout.fillWidth: true
                                                SGAlignedLabel {
                                                    id: highCurrentLabel
                                                    target: highCurrentEnable
                                                    text: "<b>" + qsTr("High Current") + "</b>"
                                                    fontSizeMultiplier: ratioCalc * 1.2
                                                    anchors.centerIn: parent
                                                    alignment: SGAlignedLabel.SideTopCenter
                                                    SGSwitch {
                                                        id: highCurrentEnable
                                                        //                                            height: 35 * ratioCalc
                                                        //                                            width: 95 * ratioCalc
                                                        checkedLabel: "On"
                                                        uncheckedLabel: "Off"
                                                        fontSizeMultiplier: ratioCalc

                                                        onToggled:  {
                                                            if(checked)
                                                            platformInterface.load_enables.update("high_load_on")
                                                            else  platformInterface.load_enables.update("off")
                                                        }

                                                        property var load_enable_status_high_load: platformInterface.load_enable_status.high_load_en
                                                        onLoad_enable_status_high_loadChanged: {
                                                            if(load_enable_status_high_load === "on") {
                                                                highCurrentEnable.checked = true
                                                            }
                                                            else  highCurrentEnable.checked = false
                                                        }
                                                    }
                                                }

                                            }
                                        }

                                        Rectangle{
                                            id: loadSettingContainer
                                            Layout.fillHeight: true
                                            Layout.fillWidth: true


                                            SGAlignedLabel {
                                                id:  loadSettingLabel
                                                target: loadSetting
                                                text: "Load Setting"
                                                fontSizeMultiplier: ratioCalc * 1.2
                                                font.bold : true
                                                alignment: SGAlignedLabel.SideTopLeft
                                                anchors.centerIn: parent

                                                SGSlider {
                                                    id: loadSetting
                                                    width: loadSettingContainer.width - loadSettingLabel.contentWidth - 60
                                                    live: false
                                                    from: 0
                                                    to: 1
                                                    stepSize: 0.1
                                                    fromText.text: "0"
                                                    toText.text: "1"
                                                    value: 0
                                                    inputBoxWidth: 50 * ratioCalc
                                                    fontSizeMultiplier: ratioCalc * 0.9
                                                    inputBox.validator: DoubleValidator { }
                                                    //                                        inputBox.validator: DoubleValidator {
                                                    //                                            top: loadSetting.to
                                                    //                                            bottom: loadSetting.from
                                                    //                                        }

                                                    property var load_enable_status: platformInterface.load_enable_status
                                                    onLoad_enable_statusChanged:  {
                                                        var min = load_enable_status.load_setting_min
                                                        var max = load_enable_status.load_setting_max
                                                        fromText.text = min
                                                        toText.text = max
                                                        stepSize = parseInt(load_enable_status.load_setting_step.slice(0,-2))
                                                        from = parseInt(min.slice(0,-2))
                                                        to = parseInt(max.slice(0,-2))
                                                    }



                                                    onUserSet: {
                                                        var valueSet = parseInt(value)
                                                        if (valueSet > loadSetting.to) {
                                                            value = loadSetting.to
                                                        }
                                                        if (valueSet < loadSetting.from) {
                                                            value = loadSetting.from

                                                        }

                                                        inputBox.text = value.toFixed(3)
                                                        platformInterface.set_load_dac.update(value.toFixed(3))
                                                    }


                                                }
                                            }
                                        }

                                    }
                                }


                                Rectangle {
                                    Layout.fillHeight: true
                                    Layout.fillWidth: true

                                    Text {
                                        id: interrupt
                                        text: "Interrupts"
                                        font.bold: true
                                        font.pixelSize: ratioCalc * 20
                                        color: "#696969"
                                        anchors.top: parent.top
                                    }

                                    Rectangle {
                                        id: line2
                                        height: 2
                                        Layout.alignment: Qt.AlignCenter
                                        width: parent.width
                                        border.color: "lightgray"
                                        radius: 2
                                        anchors {
                                            top: interrupt.bottom
                                            topMargin: 7
                                        }
                                    }

                                    ColumnLayout{
                                        anchors {
                                            top: line2.bottom
                                            topMargin: 10
                                            left: parent.left
                                            right: parent.right
                                            bottom: parent.bottom
                                        }

                                        RowLayout {
                                            Layout.fillHeight: true
                                            Layout.fillWidth: true
                                            Rectangle {
                                                Layout.fillHeight: true
                                                Layout.fillWidth: true
                                                SGAlignedLabel {
                                                    id:voltageStatusLabel
                                                    target: voltageStatusLight
                                                    alignment: SGAlignedLabel.SideTopCenter
                                                    anchors.centerIn: parent
                                                    fontSizeMultiplier: ratioCalc * 1.2
                                                    text: "Voltage Status"
                                                    font.bold: true

                                                    SGStatusLight {
                                                        id: voltageStatusLight
                                                    }
                                                }
                                            }

                                            Rectangle {
                                                Layout.fillHeight: true
                                                Layout.fillWidth: true

                                                SGAlignedLabel {
                                                    id: currentStatusLabel
                                                    target: currentStatusLight
                                                    alignment: SGAlignedLabel.SideTopCenter
                                                    anchors.centerIn: parent
                                                    fontSizeMultiplier: ratioCalc * 1.2
                                                    text: "Current Status"
                                                    font.bold: true

                                                    SGStatusLight {
                                                        id: currentStatusLight
                                                    }
                                                }
                                            }

                                            Rectangle {
                                                Layout.fillHeight: true
                                                Layout.fillWidth: true
                                                SGAlignedLabel {
                                                    id:loadCurrentStatusLabel
                                                    target: loadCurrent
                                                    alignment: SGAlignedLabel.SideTopCenter
                                                    anchors.centerIn: parent
                                                    fontSizeMultiplier: ratioCalc * 1.2
                                                    text: "Load Current"
                                                    font.bold: true

                                                    SGStatusLight {
                                                        id: loadCurrent
                                                    }
                                                }
                                            }
                                        }
                                        Rectangle{
                                            id: maxLoadContainer
                                            Layout.fillWidth: true
                                            Layout.fillHeight: true

                                            SGAlignedLabel {
                                                id: maxLoadLabel
                                                target: maxLoadCurrent
                                                font.bold: true
                                                alignment: SGAlignedLabel.SideLeftCenter
                                                fontSizeMultiplier: ratioCalc * 1.2
                                                text: "Max Load"
                                                anchors.centerIn: parent

                                                SGInfoBox {
                                                    id: maxLoadCurrent
                                                    width: 120 * ratioCalc
                                                    //height: 40 * ratioCalc
                                                    fontSizeMultiplier: ratioCalc === 0 ? 1.0 : ratioCalc
                                                    boxColor: "lightgrey"
                                                    boxFont.family: Fonts.digitalseven
                                                    unit: "<b>A</b>"

                                                }
                                            }
                                        }

                                        Rectangle {
                                            id: statusListContainer
                                            Layout.fillWidth: true
                                            Layout.fillHeight: true

                                            SGStatusLogBox{
                                                width: parent.width/1.5
                                                height: parent.height - 10
                                                title: "Status List"
                                                anchors.centerIn: parent
                                            }

                                        }
                                    }

                                }
                            }
                        }
                    } // end of RowLayout
                }
            }
    }
