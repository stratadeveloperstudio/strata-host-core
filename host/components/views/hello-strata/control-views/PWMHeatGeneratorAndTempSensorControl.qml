import QtQuick 2.12
import QtQuick.Layouts 1.12
import QtQuick.Controls 2.12

import "../sgwidgets"
import "qrc:/js/help_layout_manager.js" as Help

CustomControl {
    id: root
    title: qsTr("PWM Heat Generator and Temp Sensor")

    // UI state & notification
    property real duty: platformInterface.i2c_temp_ui_duty
    property var alert: platformInterface.i2c_temp_noti_alert
    property var tempValue: platformInterface.i2c_temp_noti_value

    Component.onCompleted: {
        if (hideHeader) {
            Help.registerTarget(pwmsliderLabel, "This sets the duty cycle of the PWM signal to the heat generator. Higher duty cycle will generate more heat.", 0, "helloStrata_TempSensor_Help")
            Help.registerTarget(alertLEDLabel, "This LED will turn on if the temperature read by the sensor is exceeding 80 degrees Celsius. There is a 5 degree hysteresis on OS/ALERT, falling below 75 degrees will toggle de-assert OS/ALERT.", 1, "helloStrata_TempSensor_Help")
        }
    }

    onDutyChanged: {
        pwmslider.value = duty
    }

    onAlertChanged: {
        alertLED.status = alert.value ? SGStatusLight.Red : SGStatusLight.Off
    }

    onTempValueChanged: {
        gauge.value = tempValue.value
    }

    contentItem: RowLayout {
        id: content
        anchors.fill: parent

        ColumnLayout {
            id: leftContent
            Layout.alignment: Qt.AlignCenter

            spacing: defaultPadding
            SGAlignedLabel {
                id: pwmsliderLabel
                target: pwmslider
                text:"<b>" + qsTr("PWM Positive Duty Cycle (%)") + "</b>"
                fontSizeMultiplier: factor
                SGSlider {
                    id: pwmslider
                    width: (content.parent.maximumWidth - 10 * factor) * 0.5

                    textColor: "black"
                    stepSize: 1
                    from: 0
                    to: 100
                    startLabel: "0"
                    endLabel: "100 %"
                    fontSizeMultiplier: factor
                    onUserSet: {
                        platformInterface.i2c_temp_ui_duty = value
                        platformInterface.i2c_temp_set_duty.update(value/100)
                    }
                }
            }

            SGAlignedLabel {
                id: alertLEDLabel
                Layout.alignment: Qt.AlignHCenter

                target: alertLED
                text: "<b>" + qsTr("OS/ALERT") + "</b>"
                fontSizeMultiplier: factor
                alignment: SGAlignedLabel.SideTopCenter
                SGStatusLight {
                    id: alertLED
                    width: 40 * factor
                }
            }
        }

        SGCircularGauge {
            id: gauge
            Layout.minimumHeight: 100
            Layout.minimumWidth: 100
            Layout.fillWidth: true
            Layout.preferredHeight: Math.min(width, content.height)
            Layout.alignment: Qt.AlignCenter

            unitText: "°C"
            unitTextFontSizeMultiplier: factor
            value: 30
            tickmarkStepSize: 10
            minimumValue: -55
            maximumValue: 125
        }
    }
}