import QtQuick 2.12
import QtQuick.Controls 2.12
import QtGraphicalEffects 1.0

import "qrc:/js/core_platform_interface.js" as CorePlatformInterface

// This is an example debug menu that shows how you can test your UI by injecting
// spoofed notifications to simulate a connected platform board.
//
// It is for development and should be removed from finalized UI's.

Rectangle {
    id: root
    height: 200
    width: 200
    border {
        width: 1
        color: "#fff"
    }

    function makeRandomDeviceName(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    Item {
        anchors {
            fill: root
            margins: 1
        }
        clip: true

        Column {
            id:leftColumn
            width: parent.width/2

            Rectangle {
                id: header
                color: "#eee"
                width: parent.width
                height: 20

                Text {
                    text: "Debug"
                    anchors {
                        verticalCenter: header.verticalCenter
                        left: header.left
                        leftMargin: 15
                    }
                }

            }




            Button {
                id: leftButton1
                height: 20
                text: "volume"
                onClicked: {

                    CorePlatformInterface.data_source_handler('{
                                       "value":"volume",
                                       "payload": {
                                            "master":"'+ (Math.random()*84 - 42) +'"
                                            }
                                        }')

                }
            }

            Button {
                id: button1
                height: 20
                text: "EQ"
                onClicked: {

                    CorePlatformInterface.data_source_handler('{
                                       "value":"equalizer_level",
                                       "payload": {
                                                "band":1,
                                                "level":"'+ (Math.random()*36-18) +'"
                                            }
                                        }')
                    CorePlatformInterface.data_source_handler('{
                                       "value":"equalizer_level",
                                       "payload": {
                                                "band":2,
                                                "level":"'+ (Math.random()*36-18) +'"
                                            }
                                        }')
                    CorePlatformInterface.data_source_handler('{
                                       "value":"equalizer_level",
                                       "payload": {
                                                "band":3,
                                                "level":"'+ (Math.random()*36-18) +'"
                                            }
                                        }')
                    CorePlatformInterface.data_source_handler('{
                                       "value":"equalizer_level",
                                       "payload": {
                                                "band":4,
                                                "level":"'+ (Math.random()*36-18) +'"
                                            }
                                        }')
                    CorePlatformInterface.data_source_handler('{
                                       "value":"equalizer_level",
                                       "payload": {
                                                "band":5,
                                                "level":"'+ (Math.random()*36-18) +'"
                                            }
                                        }')
                    CorePlatformInterface.data_source_handler('{
                                       "value":"equalizer_level",
                                       "payload": {
                                                "band":6,
                                                "level":"'+ (Math.random()*36-18) +'"
                                            }
                                        }')
                    CorePlatformInterface.data_source_handler('{
                                       "value":"equalizer_level",
                                       "payload": {
                                                "band":7,
                                                "level":"'+ (Math.random()*36-18) +'"
                                            }
                                        }')
                    CorePlatformInterface.data_source_handler('{
                                       "value":"equalizer_level",
                                       "payload": {
                                                "band":8,
                                                "level":"'+ (Math.random()*36-18) +'"
                                            }
                                        }')
                    CorePlatformInterface.data_source_handler('{
                                       "value":"equalizer_level",
                                       "payload": {
                                                "band":9,
                                                "level":"'+ (Math.random()*36-18) +'"
                                            }
                                        }')
                    CorePlatformInterface.data_source_handler('{
                                       "value":"equalizer_level",
                                       "payload": {
                                                "band":10,
                                                "level":"'+ (Math.random()*36-18) +'"
                                            }
                                        }')
                }
            }

            Button {
                id: leftButton2
                height: 20
                text: "Telemetry"

                onClicked: {

                    CorePlatformInterface.data_source_handler('{
                        "value":"request_usb_power_notification",
                        "payload":{
                            "advertised_maximum_current": "'+ (Math.random() *10) +'",
                            "negotiated_current": "'+ (Math.random() *10) +'",
                            "negotiated_voltage":"'+ (Math.random() *10) +'",
                            "vbus_voltage":"'+ (Math.random() *10) +'"
                            }
                        }')

                    CorePlatformInterface.data_source_handler('{
                        "value":"request_usb_power_notification",
                        "payload":{
                            "ambient_temp":"'+ (Math.random() *100) +'",
                            "battery_temp":"'+ (Math.random() *100) +'",
                            "state_of_health":"'+ (Math.random() *100) +'",
                            "time_to_empty":"'+ (Math.random() *150) +'",
                            "time_to_full":"'+ (Math.random() *150) +'",
                            "rsoc":"'+ (Math.random() *100) +'",
                            "total_run_time":"'+ (Math.random() *500) +'",
                            "no_battery_indicator":true,
                            "battery_voltage":"'+ (Math.random() *5) +'",
                            "battery_current":"'+ (Math.random() *20)-10 +'",
                            "battery_power": "'+ (Math.random() *5) +'",
                        }
                        }')

                    CorePlatformInterface.data_source_handler('{
                        "value":"audio_power",
                        "payload":{
                            "audio_current":"'+ (Math.random() *5) +'",
                            "audio_voltage":"'+ (Math.random() *30) +'",
                            "audio_power":"'+ (Math.random() *20) +'"
                            }
                        }')
                }
            }




            property var bluetooth_pairing:{
                "value":"not paired",    //or "paired"
                "id":"device1"            // device identifier, if paired.
            }

            Button {
                id: button2
                height: 20
                text: "bluetooth"
                onClicked: {
                    var device1 = makeRandomDeviceName(5);
                    var device2 = makeRandomDeviceName(5);
                    var device3 = makeRandomDeviceName(5);
                    var device4 = makeRandomDeviceName(5);
                    var device5 = makeRandomDeviceName(5);
                    CorePlatformInterface.data_source_handler('{
                        "value":"bluetooth_devices",
                        "payload":{
                                    "count":5,
                                    "devices":["'+device1+'",
                                                "'+device2+'",
                                                "'+device3+'",
                                                "'+device4+'",
                                                "'+device5+'"]
                                   }
                                 }')
                    CorePlatformInterface.data_source_handler('{
                        "value":"bluetooth_pairing",
                        "payload":{
                                    "value":"paired",
                                    "id":"'+device3+'"
                                   }
                                 }')
                }
            }




            Button {
                id:button3
                height: 20
                text: "sourceCap"
                onClicked: {
                    CorePlatformInterface.data_source_handler('{
                        "value":"usb_pd_advertised_voltages_notification",
                        "payload":{
                                    "maximum_power":60,
                                    "number_of_settings": 7,
                                    "settings":[{"voltage":5,
                                                "maximum_current":'+ (Math.random() *10).toFixed(0) +'
                                                },
                                                {"voltage":7,
                                                "maximum_current":'+ (Math.random() *10).toFixed(0) +'
                                                },
                                                {"voltage":8,
                                                "maximum_current":'+ (Math.random() *10).toFixed(0) +'
                                                },
                                                {"voltage":9,
                                                "maximum_current":'+ (Math.random() *10).toFixed(0) +'
                                                },
                                                {"voltage":12,
                                                "maximum_current":'+ (Math.random() *10).toFixed(0) +'
                                                },
                                                {"voltage":15,
                                                "maximum_current":'+ (Math.random() *10).toFixed(0) +'
                                                },
                                                {"voltage":20,
                                                "maximum_current":'+ (Math.random() *10).toFixed(0) +'}]
                                   }
                                 }')
                }
            }

        }



        Column{
            id:rightColumn
            anchors.left:leftColumn.right
            width:parent.width/2

            Button {
                id:rightButton0
                height: 20
                text: ""
                onClicked: {
                }
            }

            Button {
                id:rightButton1
                height: 20
                text: "battery"

                property var hasBattery: true;

                onClicked: {
                    var theAmbientTemp = (Math.random() *100);
                    var theBatteryTemp = (Math.random() *100);
                    var theStateOfHealth = (Math.random() *100);
                    var theTimeToEmpty = (Math.random() *150);
                    var theTimeToFull = (Math.random() *150);
                    var theBatteryPercent = (Math.random() *100);
                    var theRunTime = (Math.random() *500);
                    var theBatteryVoltage = (Math.random() *5);
                    var theBatteryCurrent = (Math.random() *20)-10;
                    var theBatteryPower = (Math.random() *5);

                    let notification = {
                        "notification": {
                            "value":"battery_status_fre",
                            "payload":{
                                "no_battery_indicator":hasBattery,
                                "battery_voltage": theBatteryVoltage ,
                                "battery_current": theBatteryCurrent,
                                "battery_power": theBatteryPower
                            }
                        }
                    }

                    let wrapper = {
                        "device_id": CorePlatformInterface.device_id,
                        "message":JSON.stringify(notification)
                    }

                    CorePlatformInterface.data_source_handler(JSON.stringify(wrapper))

                    let notification2 = {
                        "notification": {
                            "value":"battery_status_inf",
                            "payload":{
                                "ambient_temp":theAmbientTemp,
                                "battery_temp":theBatteryTemp,
                                "state_of_health":theStateOfHealth,
                                "time_to_empty":theTimeToEmpty,
                                "time_to_full":theTimeToFull,
                                "rsoc":theBatteryPercent,
                                "total_run_time":theRunTime
                            }
                        }
                    }

                    let wrapper2 = {
                        "device_id": CorePlatformInterface.device_id,
                        "message":JSON.stringify(notification2)
                    }

                    CorePlatformInterface.data_source_handler(JSON.stringify(wrapper2))
                    console.log("sending battery status notification",JSON.stringify(wrapper2))

                    hasBattery = !hasBattery;
                }
            }

            Button {
                id:rightButton2
                height: 20
                text: "usb"

                property var connected: "disconnected";

                onClicked: {

                    CorePlatformInterface.data_source_handler('{
                        "value":"usb_pd_port_connect",
                        "payload":{
                            "port_id":1,
                            "connection_state":"'+connected+'"
                            }
                            }')

                    if (connected === "disconnected")
                        connected = "connected"
                    else
                        connected = "disconnected"
                }


            }

            Button {
                id:rightButton3
                height: 20
                text: "charger"

                property var theChargeMode: "fast";
                property var theAudioPowerMode: "vbus";
                property var theVbusOVP: 6.5
                property var theThermalTemp: 70

                onClicked: {

                    CorePlatformInterface.data_source_handler('{
                        "value":"thermal_protection_temp",
                        "payload":{
                            "value":'+ theThermalTemp +'
                            }
                        }')

                    var theFloatVoltage = (Math.random() *4);
                    var thePrechargeCurrent = Math.round((Math.random() *12))*50+200;
                    var theTerminationCurrent = Math.round((Math.random() *10))*50 +100;
                    var theIbusLimit = Math.round((Math.random() *58))*50+100;
                    var theFastChargeCurrent = Math.round((Math.random() *56))*50+200;

                    CorePlatformInterface.data_source_handler('{
                        "value":"charger_status",
                        "payload":{
                            "float_voltage":'+ theFloatVoltage +',
                            "charge_mode":"'+ theChargeMode +'",
                            "precharge_current":'+ thePrechargeCurrent +',
                            "termination_current":'+ theTerminationCurrent +',
                            "bus_current":'+ theIbusLimit +',
                            "fast_current":'+ theFastChargeCurrent +',
                            "vbus_ovp":'+ theVbusOVP +',
                            "audio_power_mode":"'+theAudioPowerMode+'"

                            }
                        }')

                    if (theChargeMode === "fast")
                        theChargeMode = "top off"
                    else
                        theChargeMode = "fast"

                    if (theAudioPowerMode === "vbus")
                        theAudioPowerMode = "battery"
                      else
                        theAudioPowerMode = "vbus"

                    if (theVbusOVP === 6.5)
                        theVbusOVP = 13.7
                      else
                        theVbusOVP = 6.5

                    if (theThermalTemp === 70)
                        theThermalTemp = 120
                      else
                        theThermalTemp = 70
                }
            }



            Button {
                id:rightButton4
                height: 20
                text: "LED+touch"

                property var theUpper: true;
                property var theLower: false;
                property var theTouch: true;


                onClicked: {

                    var theH = Math.round((Math.random() *359));
                    var theV = Math.round((Math.random() *100));


                    CorePlatformInterface.data_source_handler('{
                        "value":"led_state",
                        "payload":{
                            "lower_on":'+ theLower +',
                            "upper_on":'+ theUpper +',
                            "H":'+ theH +',
                            "V":'+ theV +'
                            }
                        }')


                    CorePlatformInterface.data_source_handler('{
                        "value":"touch_button_state",
                        "payload":{
                            "state":'+ theTouch +'
                            }
                        }')

                    theUpper = !theUpper;
                    theLower = !theLower;
                    theTouch = !theTouch;
                }
            }

            Button {
                id:rightButton5
                height: 20
                text: "SinkCaps"

                onClicked: {

                    var V1 = Math.round((Math.random() *20));
                    var A1 = Math.round((Math.random() *7.5));
                    var V2 = Math.round((Math.random() *20));
                    var A2 = Math.round((Math.random() *7.5));
                    var V3 = Math.round((Math.random() *20));
                    var A3 = Math.round((Math.random() *7.5));
                    var V4 = Math.round((Math.random() *20));
                    var A4 = Math.round((Math.random() *7.5));
                    var V5 = Math.round((Math.random() *20));
                    var A5 = Math.round((Math.random() *7.5));
                    var V6 = Math.round((Math.random() *20));
                    var A6 = Math.round((Math.random() *7.5));
                    var V7 = Math.round((Math.random() *20));
                    var A7 = Math.round((Math.random() *7.5));

                    CorePlatformInterface.data_source_handler('{
                        "value":"usb_pd_advertised_voltages_notification",
                        "payload":{
                            "port":0,
                            "maximum_power":72,
                            "number_of_settings":7,
                            "settings":[{"voltage":'+ V1 +',
                                        "maximum_current":'+ A1 +'},
                                        {"voltage":'+ V2 +',
                                        "maximum_current":'+ A2 +'},
                                        {"voltage":'+ V3 +',
                                        "maximum_current":'+ A3 +'},
                                        {"voltage":'+ V4 +',
                                        "maximum_current":'+ A4 +'},
                                        {"voltage":'+ V5 +',
                                        "maximum_current":'+ A5 +'},
                                        {"voltage":'+ V6 +',
                                        "maximum_current":'+ A6 +'},
                                        {"voltage":'+ V7 +',
                                        "maximum_current":'+ A7 +'}]
                            }
                        }')

                }
            }

        }
    }

    Rectangle {
        id: shadow
        anchors.fill: root
        visible: false
    }

    DropShadow {
        anchors.fill: shadow
        radius: 15.0
        samples: 30
        source: shadow
        z: -1
    }
}
