import QtQuick 2.9
import QtGraphicalEffects 1.0
import "qrc:/views/usb-hub/sgwidgets"
import "qrc:/views/usb-hub/views/basic-partial-views"

Item {
    id: root

    property bool debugLayout: false
    property real ratioCalc: root.width / 1200
    property int tabTransitionTime: 1000
    property int basicPortWidth: 160
    property int advancedPortWidth: 240
    property int advancedDeviceWidth: 240
    property int advancedThinPortWidth: 170
    property int advancedUSBAPortHeight: 240
    property int advancedAudioPortHeight: 150
    property int advancedDisplayPortPortHeight: 140
    property int advancedTopMargin: 20

    width: parent.width / parent.height > initialAspectRatio ? parent.height * initialAspectRatio : parent.width
    height: parent.width / parent.height < initialAspectRatio ? parent.width / initialAspectRatio : parent.height



    Rectangle{
        id:background
        anchors.fill:parent
        color:"#145A74"
    }

    PlugAnimation {
        id: upstreamAnimation
        anchors.horizontalCenter: upstreamDevice.horizontalCenter
        anchors.horizontalCenterOffset: 10
        anchors.bottom: upstreamDevice.verticalCenter
        anchors.bottomMargin: -20
    }

    PlugAnimation {
        id: port1Animation
        anchors.horizontalCenter: port1Device.horizontalCenter
        anchors.horizontalCenterOffset: 10
        anchors.bottom: port1Device.verticalCenter
        anchors.bottomMargin: -20
    }

    PlugAnimation {
        id: port2Animation
        anchors.horizontalCenter: port2Device.horizontalCenter
        anchors.horizontalCenterOffset: 10
        anchors.bottom: port2Device.verticalCenter
        anchors.bottomMargin: -20
    }

    PlugAnimation {
        id: port3Animation
        anchors.horizontalCenter: port3Device.horizontalCenter
        anchors.horizontalCenterOffset: 10
        anchors.bottom: port3Device.verticalCenter
        anchors.bottomMargin: -20
    }

    PlugAnimation {
        id: port4Animation
        anchors.horizontalCenter: port4Device.horizontalCenter
        anchors.horizontalCenterOffset: 10
        anchors.bottom: port4Device.verticalCenter
        anchors.bottomMargin: -10
    }

    PlugAnimation {
        id: displayPortAnimation
        anchors.horizontalCenter: videoIcon.horizontalCenter
        anchors.horizontalCenterOffset: 10
        anchors.bottom: videoIcon.verticalCenter
        anchors.bottomMargin: -20
    }

    PlugAnimation {
        id: audioAnimation
        anchors.horizontalCenter: audioIcon.horizontalCenter
        anchors.horizontalCenterOffset: 10
        anchors.bottom: audioIcon.verticalCenter
        anchors.bottomMargin: -20
    }

    function transitionToAdvancedView(){
        backgroundToAdvanced.start();
        //unanchor parts of the ports that will be rearranged
        port4.anchors.bottom = undefined;
        port4.anchors.left = undefined;
        audioPort.anchors.top = undefined;
        audioPort.anchors.bottom = undefined;
        audioPort.anchors.left = undefined;
        displayPort.anchors.top = undefined;
        displayPort.anchors.bottom = undefined;
        displayPort.anchors.left = undefined;

        portsToAdvanced.start();
        devicesToAdvanced.start();
        audioPort.transitionToAdvancedView();
        displayPort.transitionToAdvancedView();
        port4.transitionToAdvancedView();

    }

    ParallelAnimation{
        id: backgroundToAdvanced
        running: false

        PropertyAnimation{
            target:deviceBackground
            property: "anchors.topMargin"
            to:(root.height)/32
            duration: tabTransitionTime
        }

        PropertyAnimation{
            target:deviceBackground
            property: "height"
            to: (11*parent.height)/16
            duration: tabTransitionTime
        }
    }

    ParallelAnimation{
        //changing the background will expand the ports as well, since they're anchored together
        //we will have to alter size and position of the USB-A, Audio and DisplayPort ports here
        id:portsToAdvanced
        PropertyAnimation{
            target:upstreamPort
            property: "width"
            to: advancedPortWidth
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target:port1
            property: "width"
            to: advancedPortWidth
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target:port2
            property: "width"
            to: advancedPortWidth
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target:port3
            property: "width"
            to: advancedPortWidth
            duration: tabTransitionTime
        }
        PropertyAnimation{
            //usb-A port
            target:port4
            property: "width"
            to: advancedThinPortWidth
            duration: tabTransitionTime
        }

        PropertyAnimation{
            //usb-A port
            target:port4
            property: "height"
            to: advancedUSBAPortHeight
            duration: tabTransitionTime
        }
        PropertyAnimation{
            //usb-A port
            target:port4
            property: "x"
            to: deviceBackground.width - advancedThinPortWidth - 10
            duration: tabTransitionTime
        }

        PropertyAnimation{
            target:audioPort
            property: "width"
            to: advancedThinPortWidth
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target:audioPort
            property: "height"
            to: advancedAudioPortHeight
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target:audioPort
            property: "x"
            to: deviceBackground.width - advancedThinPortWidth -10
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target:audioPort
            property: "y"
            to: advancedUSBAPortHeight  + 10 + 10
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target:displayPort
            property: "width"
            to: advancedThinPortWidth
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target:displayPort
            property: "x"
            to: deviceBackground.width - advancedThinPortWidth -10
            duration: tabTransitionTime
        }

        PropertyAnimation{
            target:displayPort
            property: "y"
            to: advancedUSBAPortHeight + advancedAudioPortHeight + 10 + 10 + 10
            duration: tabTransitionTime
        }

        PropertyAnimation{
            target:displayPort
            property: "height"
            to: advancedDisplayPortPortHeight
            duration: tabTransitionTime
        }
    }

    //--------------------------------------------------------------------
    //  Device Animations
    //--------------------------------------------------------------------
    ParallelAnimation{
        id: devicesToAdvanced
        PropertyAnimation{
            target: upstreamDevice
            property: "width"
            to: advancedDeviceWidth
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target: port1Device
            property: "width"
            to: advancedDeviceWidth
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target: port2Device
            property: "width"
            to: advancedDeviceWidth
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target: port3Device
            property: "width"
            to: advancedDeviceWidth
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target: upstreamDevice
            property: "anchors.topMargin"
            to: advancedTopMargin
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target: port1Device
            property: "anchors.topMargin"
            to: advancedTopMargin
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target: port2Device
            property: "anchors.topMargin"
            to: advancedTopMargin
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target: port3Device
            property: "anchors.topMargin"
            to: advancedTopMargin
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target: port4Device
            property: "anchors.topMargin"
            to: advancedTopMargin
            duration: tabTransitionTime
        }

        PropertyAnimation{
            target: port4Device
            property: "opacity"
            to: 0
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target: videoIcon
            property: "opacity"
            to: 0
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target: audioIcon
            property: "opacity"
            to: 0
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target: upstreamAnimation
            property: "opacity"
            to: 0
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target: port1Animation
            property: "opacity"
            to: 0
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target: port2Animation
            property: "opacity"
            to: 0
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target: port3Animation
            property: "opacity"
            to: 0
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target: port4Animation
            property: "opacity"
            to: 0
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target: displayPortAnimation
            property: "opacity"
            to: 0
            duration: tabTransitionTime
        }
        PropertyAnimation{
            target: audioAnimation
            property: "opacity"
            to: 0
            duration: tabTransitionTime
        }

    }

    Rectangle{
        id:deviceBackground
        color:"darkgrey"
        radius:5
        height:(7*parent.height)/16
        anchors.left:root.left
        anchors.leftMargin: 12
        anchors.right: root.right
        anchors.rightMargin: 12
        anchors.top:root.top
        anchors.topMargin: (3*root.height)/32

        PortInfo{
            id:upstreamPort
            portName:"Upstream"
            portNumber:1
            portConnected: false
            anchors.left: deviceBackground.left
            anchors.leftMargin: 7
            anchors.top:deviceBackground.top
            anchors.topMargin: 10
            anchors.bottom: deviceBackground.bottom
            anchors.bottomMargin: 5
            width:basicPortWidth
        }

        PortInfo{
            id:port1
            portName:"Port 1"
            portNumber:2
            portConnected: false
            anchors.left: upstreamPort.right
            anchors.leftMargin: 7
            anchors.top:deviceBackground.top
            anchors.topMargin: 10
            anchors.bottom: deviceBackground.bottom
            anchors.bottomMargin: 5
            width:basicPortWidth
        }

        PortInfo{
            id:port2
            portName:"Port 2"
            portNumber:3
            portConnected: false
            anchors.left: port1.right
            anchors.leftMargin: 7
            anchors.top:deviceBackground.top
            anchors.topMargin: 10
            anchors.bottom: deviceBackground.bottom
            anchors.bottomMargin: 5
            width:basicPortWidth
        }

        PortInfo{
            id:port3
            portName:"Port 3"
            portNumber:4
            portConnected: false
            anchors.left: port2.right
            anchors.leftMargin: 7
            anchors.top:deviceBackground.top
            anchors.topMargin: 10
            anchors.bottom: deviceBackground.bottom
            anchors.bottomMargin: 5
            width:basicPortWidth
        }

        USBAPortInfo{
            id:port4
            portName:"Port 4"
            portSubtitle: "USB-A"
            portNumber:5
            portConnected: false
            isUSBAPort: true
            anchors.left: port3.right
            anchors.leftMargin: 7
            anchors.top:deviceBackground.top
            anchors.topMargin: 10
            anchors.bottom: deviceBackground.bottom
            anchors.bottomMargin: 5
            width:basicPortWidth
        }

        VideoPortInfo{
            id:displayPort
            portName:"DisplayPort"
            portConnected: false
            anchors.left: port4.right
            anchors.leftMargin: 7
            anchors.top:deviceBackground.top
            anchors.topMargin: 10
            anchors.bottom: deviceBackground.bottom
            anchors.bottomMargin: 5
            width:basicPortWidth
        }

        AudioPortInfo{
            id:audioPort
            portName:"Audio"
            portConnected: false
            anchors.left: displayPort.right
            anchors.leftMargin: 7
            anchors.top:deviceBackground.top
            anchors.topMargin: 10
            anchors.bottom: deviceBackground.bottom
            anchors.bottomMargin: 5
            width:basicPortWidth
        }
    }

    DeviceInfo{
        id:upstreamDevice
        anchors.top:deviceBackground.bottom
        anchors.topMargin: 95
        anchors.left:root.left
        anchors.leftMargin: 20
        height:145
        width:160

        MouseArea{
            anchors.fill: parent

            onClicked: {
                if (!upstreamAnimation.pluggedIn) {
                    upstreamAnimation.source = "images/cord.gif"
                    upstreamAnimation.currentFrame = 0
                    upstreamAnimation.playing = true
                    upstreamAnimation.pluggedIn = !upstreamAnimation.pluggedIn
                    upstreamPort.portConnected = true
                    upstreamDevice.connected = true
                } else {
                    upstreamAnimation.source = "images/cordReverse.gif"
                    upstreamAnimation.currentFrame = 0
                    upstreamAnimation.playing = true
                    upstreamAnimation.pluggedIn = !upstreamAnimation.pluggedIn
                    upstreamPort.portConnected = false
                    upstreamDevice.connected = false
                }
            }
        }

    }

    DeviceInfo{
        id:port1Device
        anchors.top:deviceBackground.bottom
        anchors.topMargin: 95
        anchors.left:upstreamDevice.right
        anchors.leftMargin: 7
        height:145
        width:160

        MouseArea{
            anchors.fill: parent

            onClicked: {
                if (!port1Animation.pluggedIn) {
                    port1Animation.source = "images/cord.gif"
                    port1Animation.currentFrame = 0
                    port1Animation.playing = true
                    port1Animation.pluggedIn = !port1Animation.pluggedIn
                    port1.portConnected = true
                    port1Device.connected = true
                } else {
                    port1Animation.source = "images/cordReverse.gif"
                    port1Animation.currentFrame = 0
                    port1Animation.playing = true
                    port1Animation.pluggedIn = !port1Animation.pluggedIn
                    port1.portConnected = false
                    port1Device.connected = false
                }
            }
        }


    }

    DeviceInfo{
        id:port2Device
        anchors.top:deviceBackground.bottom
        anchors.topMargin: 95
        anchors.left:port1Device.right
        anchors.leftMargin: 7
        height:145
        width:160

        MouseArea{
            anchors.fill: parent

            onClicked: {
                if (!port2Animation.pluggedIn) {
                    port2Animation.source = "images/cord.gif"
                    port2Animation.currentFrame = 0
                    port2Animation.playing = true
                    port2Animation.pluggedIn = !port2Animation.pluggedIn
                    port2.portConnected = true
                    port2Device.connected = true
                } else {
                    port2Animation.source = "images/cordReverse.gif"
                    port2Animation.currentFrame = 0
                    port2Animation.playing = true
                    port2Animation.pluggedIn = !port2Animation.pluggedIn
                    port2.portConnected = false
                    port2Device.connected = false
                }
            }
        }
    }

    DeviceInfo{
        id:port3Device
        anchors.top:deviceBackground.bottom
        anchors.topMargin: 95
        anchors.left:port2Device.right
        anchors.leftMargin: 7
        height:145
        width:160

        MouseArea{
            anchors.fill: parent

            onClicked: {
                if (!port3Animation.pluggedIn) {
                    port3Animation.source = "images/cord.gif"
                    port3Animation.currentFrame = 0
                    port3Animation.playing = true
                    port3Animation.pluggedIn = !port3Animation.pluggedIn
                    port3.portConnected = true
                    port3Device.connected = true
                } else {
                    port3Animation.source = "images/cordReverse.gif"
                    port3Animation.currentFrame = 0
                    port3Animation.playing = true
                    port3Animation.pluggedIn = !port3Animation.pluggedIn
                    port3.portConnected = false
                    port3Device.connected = false
                }
            }
        }
    }

    DeviceInfo{
        id:port4Device
        anchors.top:deviceBackground.bottom
        anchors.topMargin: 95
        anchors.left:port3Device.right
        anchors.leftMargin: 7
        height:145
        width:160

        MouseArea{
            anchors.fill: parent

            onClicked: {
                if (!port4Animation.pluggedIn) {
                    port4Animation.source = "images/usbACord.gif"
                    port4Animation.currentFrame = 0
                    port4Animation.playing = true
                    port4Animation.pluggedIn = !port4Animation.pluggedIn
                    port4.portConnected = true
                    port4Device.connected = true
                } else {
                    port4Animation.source = "images/usbACordReverse.gif"
                    port4Animation.currentFrame = 0
                    port4Animation.playing = true
                    port4Animation.pluggedIn = !port4Animation.pluggedIn
                    port4.portConnected = false
                    port4Device.connected = false
                }
            }
        }
    }

    Image{
        id:videoIcon
        source:"./images/videoIcon.png"
        anchors.verticalCenter: port4Device.verticalCenter
        anchors.left:port4Device.right
        anchors.leftMargin: 40
        fillMode:Image.PreserveAspectFit
        opacity: displayPort.portConnected ? 1 : .5

        MouseArea{
            anchors.fill: parent

            onClicked: {
                if (!displayPortAnimation.pluggedIn) {
                    displayPortAnimation.source = "images/cord.gif"
                    displayPortAnimation.currentFrame = 0
                    displayPortAnimation.playing = true
                    displayPortAnimation.pluggedIn = !displayPortAnimation.pluggedIn
                    displayPort.portConnected = true
                } else {
                    displayPortAnimation.source = "images/cordReverse.gif"
                    displayPortAnimation.currentFrame = 0
                    displayPortAnimation.playing = true
                    displayPortAnimation.pluggedIn = !displayPortAnimation.pluggedIn
                    displayPort.portConnected = false
                }
            }
        }
    }

    Image{
        id:audioIcon
        source:"./images/headphonesIcon.png"
        anchors.verticalCenter: port4Device.verticalCenter
        anchors.left:videoIcon.right
        anchors.leftMargin: 80
        fillMode:Image.PreserveAspectFit
        opacity: audioPort.portConnected ? 1 : .5

        MouseArea{
            anchors.fill: parent

            onClicked: {
                if (!audioAnimation.pluggedIn) {
                    audioAnimation.source = "images/cord.gif"
                    audioAnimation.currentFrame = 0
                    audioAnimation.playing = true
                    audioAnimation.pluggedIn = !audioAnimation.pluggedIn
                    audioPort.portConnected = true
                } else {
                    audioAnimation.source = "images/cordReverse.gif"
                    audioAnimation.currentFrame = 0
                    audioAnimation.playing = true
                    audioAnimation.pluggedIn = !audioAnimation.pluggedIn
                    audioPort.portConnected = false
                }
            }
        }
    }



    Image{
        source:"./images/FourPortWireframeBasicView.png"
        anchors.fill:root
        opacity: .2
        visible: false
    }

//    Text{
//        id:placeholderText
//        text: "hub basic view"
//        anchors.centerIn: root
//        font.pixelSize: 24
//    }



//    Image {
//        id: name
//        anchors {
//            fill: root
//        }
//        source: "images/basic-background.png"
//    }

 /*   GraphDrawer {
        id: graphDrawer
        z: 10
    }

    PlugAnimation {
        id: port1Animation
        x: 748 * ratioCalc
        y: 63 * ratioCalc
    }

    PlugAnimation {
        id: port2Animation
        x: 748 * ratioCalc
        y: 255 * ratioCalc
    }

    PlugAnimation {
        id: port3Animation
        x: 748 * ratioCalc
        y: 447 * ratioCalc
    }

    PlugAnimation {
        id: port4Animation
        x: 748 * ratioCalc
        y: 639 * ratioCalc
    }

    Item {
        id: inputColumn
        width: 310 * ratioCalc
        height: root.height
        anchors {
            left: root.left
            leftMargin: 80 * ratioCalc
        }

        Rectangle {
            id: combinedPortStats
            color: "#eee"
            anchors {
                top: inputColumn.top
                topMargin: 35 * ratioCalc
                left: inputColumn.left
                right: inputColumn.right
            }
            height: 300 * ratioCalc

            Rectangle{
                id:combinedStatsBackgroundRect
                color:"#ddd"
                anchors.top:combinedPortStats.top
                anchors.left:combinedPortStats.left
                anchors.right:combinedPortStats.right
                height:combinedPortStats.height/6

                Text{
                    id:combinedStatsText
                    text:"COMBINED PORT STATISTICS"
                    font.pixelSize: 17
                    color: "#bbb"
                    anchors.centerIn: combinedStatsBackgroundRect
                }
            }




            PortStatBox {

                property var inputVoltage:platformInterface.request_usb_power_notification.input_voltage;
                property real port1Voltage:0;
                property real port2Voltage:0;
                property real port3Voltage:0;
                property real port4Voltage:0;

                onInputVoltageChanged: {
                     if (platformInterface.request_usb_power_notification.port ===1)
                         port1Voltage = platformInterface.request_usb_power_notification.input_voltage;
                     else if (platformInterface.request_usb_power_notification.port ===2)
                         port2Voltage = platformInterface.request_usb_power_notification.input_voltage;
                     else if (platformInterface.request_usb_power_notification.port ===3)
                         port3Voltage = platformInterface.request_usb_power_notification.input_voltage;
                     else if (platformInterface.request_usb_power_notification.port ===4)
                         port4Voltage = platformInterface.request_usb_power_notification.input_voltage;
                }

                id:combinedInputVoltageBox
                label: "INPUT VOLTAGE"
                value: Math.round((port1Voltage + port2Voltage + port3Voltage + port4Voltage) *100)/100
                valueSize: 32
                icon: "../images/icon-voltage.svg"
                unit: "V"
                anchors.top: combinedStatsBackgroundRect.bottom
                anchors.topMargin: 20
                anchors.horizontalCenter: combinedPortStats.horizontalCenter
                height: combinedPortStats.height/5
                width: combinedPortStats.width/2
            }

            PortStatBox {

                property var inputVoltage: platformInterface.request_usb_power_notification.input_voltage;
                property var inputCurrent: platformInterface.request_usb_power_notification.input_current;
                property real inputPower: inputVoltage * inputCurrent;

                property real port1Power:0;
                property real port2Power:0;
                property real port3Power:0;
                property real port4Power:0;

                onInputPowerChanged: {
                    if (platformInterface.request_usb_power_notification.port ===1)
                        port1Power = inputPower;
                    else if (platformInterface.request_usb_power_notification.port ===2)
                        port2Power = inputPower;
                    else if (platformInterface.request_usb_power_notification.port ===3)
                        port3Power = inputPower;
                    else if (platformInterface.request_usb_power_notification.port ===4)
                        port4Power = inputPower;
                }

                id:combinedInputPowerBox
                label: "INPUT POWER"
                value: Math.round((port1Power + port2Power + port3Power + port4Power) *100)/100
                valueSize: 32
                icon: "../images/icon-voltage.svg"
                unit: "W"
                anchors.top: combinedInputVoltageBox.bottom
                anchors.topMargin: 20
                anchors.horizontalCenter: combinedPortStats.horizontalCenter
                height: combinedPortStats.height/5
                width: combinedPortStats.width/2
                //visible: combinedPortStats.inputPowerConnected
            }
        }

        Rectangle {
            id: inputConversionStats
            color: combinedPortStats.color
            anchors {
                top: combinedPortStats.bottom
                topMargin: 20 * ratioCalc
                left: inputColumn.left
                right: inputColumn.right
            }
            height: 428 * ratioCalc

            property bool inputPowerConnected: true

            Rectangle{
                id:topBackgroundRect
                color:"#ddd"
                anchors.top:inputConversionStats.top
                anchors.left:inputConversionStats.left
                anchors.right:inputConversionStats.right
                height:inputConversionStats.height/6
            }

            Text{
                id:powerConverterText
                text:"POWER CONVERTER"
                font.pixelSize: 17
                color: "#bbb"
                anchors.top: inputConversionStats.top
                anchors.topMargin:10
                anchors.horizontalCenter: inputConversionStats.horizontalCenter
            }

            Text{
                id:converterNameText
                text:"ON Semiconductor NCP4060A"
                visible: inputConversionStats.inputPowerConnected
                font.pixelSize: 20
                //color: "#bbb"
                anchors.top: powerConverterText.bottom
                anchors.horizontalCenter: inputConversionStats.horizontalCenter
            }

            PortStatBox {
                id:maxPowerBox
                label: "MAX CAPACITY"
                value: "200"
                icon: "../images/icon-max.svg"
                //portColor: root.portColor
                valueSize: 32
                unit: "W"
                anchors.top: topBackgroundRect.bottom
                anchors.topMargin: 20
                anchors.horizontalCenter: inputConversionStats.horizontalCenter
                height: inputConversionStats.height/8
                width: inputConversionStats.width/2
                visible: inputConversionStats.inputPowerConnected
            }

            PortStatBox {
                id:voltageOutBox
                label: "VOLTAGE OUTPUT"
                value: "100"
                icon: "../images/icon-voltage.svg"
                //portColor: root.portColor
                valueSize: 32
                unit: "V"
                anchors.top: maxPowerBox.bottom
                anchors.topMargin: 20
                anchors.horizontalCenter: inputConversionStats.horizontalCenter
                height: inputConversionStats.height/8
                width: inputConversionStats.width/2
                visible: inputConversionStats.inputPowerConnected
            }

            Image{
                id:powerConverterIcon
                source:"./images/powerconverter.png"
                opacity:.5
                fillMode:Image.PreserveAspectFit
                anchors.top:voltageOutBox.bottom
                anchors.topMargin:40
                anchors.bottom:inputConversionStats.bottom
                anchors.bottomMargin:40
                anchors.left:inputConversionStats.left
                anchors.right: inputConversionStats.right
            }



        }

        SGLayoutDebug {
            visible: debugLayout
        }
    }

    Item {
        id: portColumn
        width: 330 * ratioCalc
        height: root.height
        anchors {
            left: inputColumn.right
            leftMargin: 20 * ratioCalc
        }

        PortInfo {
            id: portInfo1
            height: 172 * ratioCalc
            anchors {
                top: portColumn.top
                topMargin: 35 * ratioCalc
                left: portColumn.left
                right: portColumn.right
            }
            portConnected: false
            portNumber: 1
            advertisedVoltage:{
                if (platformInterface.request_usb_power_notification.port === 1){
                    return platformInterface.request_usb_power_notification.negotiated_voltage
                }
                else{
                    return portInfo1.advertisedVoltage;
                }
            }
            maxPower:{
                if (platformInterface.request_usb_power_notification.port === 1){
                   return Math.round(platformInterface.request_usb_power_notification.maximum_power *100)/100
                }
                else{
                    return portInfo1.maxPower;
                }
            }
            inputPower:{
                if (platformInterface.request_usb_power_notification.port === 1){
                    return Math.round(platformInterface.request_usb_power_notification.input_voltage * platformInterface.request_usb_power_notification.input_current * 100)/100
                }
                else{
                    return portInfo1.inputPower;
                }
            }
            outputPower:{
                if (platformInterface.request_usb_power_notification.port === 1){
                    return Math.round(platformInterface.request_usb_power_notification.output_voltage * platformInterface.request_usb_power_notification.output_current * 100)/100
                }
                else{
                    return portInfo1.outputPower;
                }
            }
            outputVoltage:{
                if (platformInterface.request_usb_power_notification.port === 1){
                    return Math.round(platformInterface.request_usb_power_notification.output_voltage *100)/100
                }
                else{
                    return portInfo1.outputVoltage;
                }
            }
            portTemperature:{
                if (platformInterface.request_usb_power_notification.port === 1){
                    return Math.round(platformInterface.request_usb_power_notification.temperature*10)/10
                }
                else{
                    return portInfo1.portTemperature;
                }
            }
            efficency: {
                var theInputPower = platformInterface.request_usb_power_notification.input_voltage * platformInterface.request_usb_power_notification.input_current;
                var theOutputPower = platformInterface.request_usb_power_notification.output_voltage * platformInterface.request_usb_power_notification.output_current;

                if (platformInterface.request_usb_power_notification.port === 1){
                    if (theInputPower == 0){    //division by 0 would normally give "nan"
                        return "—"
                    }
                    else{
                        return "—"
                        //return Math.round((theOutputPower/theInputPower) * 100)/100
                    }
                }
                else{
                    return portInfo1.efficency;
                }
            }

            property var deviceConnected: platformInterface.usb_pd_port_connect.connection_state
            property var deviceDisconnected: platformInterface.usb_pd_port_disconnect.connection_state

             onDeviceConnectedChanged: {
//                 console.log("device connected message received in basicControl. Port=",platformInterface.usb_pd_port_connect.port_id,
//                             "state=",platformInterface.usb_pd_port_connect.connection_state);

                 if (platformInterface.usb_pd_port_connect.port_id === "USB_C_port_1"){
                     if (platformInterface.usb_pd_port_connect.connection_state === "connected"){
                         portInfo1.portConnected = true;
                     }
                 }
             }

             onDeviceDisconnectedChanged:{

                 if (platformInterface.usb_pd_port_disconnect.port_id === "USB_C_port_1"){
                     if (platformInterface.usb_pd_port_disconnect.connection_state === "disconnected"){
                         portInfo1.portConnected = false;
                     }
                 }
            }

            onShowGraph: {
                graphDrawer.portNumber = portNumber;
                graphDrawer.open();
            }
        }

        PortInfo {
            id: portInfo2
            height: portInfo1.height
            anchors {
                top: portInfo1.bottom
                topMargin: 20 * ratioCalc
                left: portColumn.left
                right: portColumn.right
            }
            portNumber: 2
            portConnected: false
            advertisedVoltage:{
                if (platformInterface.request_usb_power_notification.port === 2){
                    return platformInterface.request_usb_power_notification.negotiated_voltage
                }
                else{
                    return portInfo2.advertisedVoltage;
                }
            }
            maxPower:{
                if (platformInterface.request_usb_power_notification.port === 2){
                    return Math.round(platformInterface.request_usb_power_notification.maximum_power *100)/100
                }
                else{
                    return portInfo2.maxPower;
                }
            }
            inputPower:{
                if (platformInterface.request_usb_power_notification.port === 2){
                    return Math.round(platformInterface.request_usb_power_notification.input_voltage * platformInterface.request_usb_power_notification.input_current *100)/100
                }
                else{
                    return portInfo2.inputPower;
                }
            }
            outputPower:{
                if (platformInterface.request_usb_power_notification.port === 2){
                    return Math.round(platformInterface.request_usb_power_notification.output_voltage * platformInterface.request_usb_power_notification.output_current *100)/100
                }
                else{
                    return portInfo2.outputPower;
                }
            }
            outputVoltage:{
                if (platformInterface.request_usb_power_notification.port === 2){
                    return Math.round(platformInterface.request_usb_power_notification.output_voltage *100)/100
                }
                else{
                    return portInfo2.outputVoltage;
                }
            }
            portTemperature:{
                if (platformInterface.request_usb_power_notification.port === 2){
                    return Math.round(platformInterface.request_usb_power_notification.temperature*10)/10;
                }
                else{
                    return portInfo2.portTemperature;
                }
            }
            efficency: {
                var theInputPower = platformInterface.request_usb_power_notification.input_voltage * platformInterface.request_usb_power_notification.input_current;
                var theOutputPower = platformInterface.request_usb_power_notification.output_voltage * platformInterface.request_usb_power_notification.output_current

                if (platformInterface.request_usb_power_notification.port === 2){
                    if (theInputPower == 0){    //division by 0 would normally give "nan"
                        return "—"
                    }
                    else{
                        return "—"
                        //return Math.round((theOutputPower/theInputPower) *100)/100
                    }
                }
                else{
                    return portInfo2.efficency
                }
            }

            property var deviceConnected: platformInterface.usb_pd_port_connect.connection_state
            property var deviceDisconnected: platformInterface.usb_pd_port_disconnect.connection_state

             onDeviceConnectedChanged: {
//                 console.log("device connected message received in basicControl. Port=",platformInterface.usb_pd_port_connect.port_id,
//                             "state=",platformInterface.usb_pd_port_connect.connection_state);

                 if (platformInterface.usb_pd_port_connect.port_id === "USB_C_port_2"){
                     if (platformInterface.usb_pd_port_connect.connection_state === "connected"){
                         portInfo2.portConnected = true;
                     }
                 }
             }

             onDeviceDisconnectedChanged:{

                 if (platformInterface.usb_pd_port_disconnect.port_id === "USB_C_port_2"){
                     if (platformInterface.usb_pd_port_disconnect.connection_state === "disconnected"){
                         portInfo2.portConnected = false;
                     }
                 }
            }

            onShowGraph: {
                graphDrawer.portNumber = portNumber;
                graphDrawer.open();
            }
        }

        PortInfo {
            id: portInfo3
            height: portInfo1.height
            anchors {
                top: portInfo2.bottom
                topMargin: 20 * ratioCalc
                left: portColumn.left
                right: portColumn.right
            }
            portNumber: 3
            portConnected: false
            advertisedVoltage:{
                if (platformInterface.request_usb_power_notification.port === 3){
                    return platformInterface.request_usb_power_notification.negotiated_voltage
                }
                else{
                    return portInfo3.advertisedVoltage;
                }
                }
            maxPower:{
                if (platformInterface.request_usb_power_notification.port === 3){
                    return Math.round(platformInterface.request_usb_power_notification.maximum_power *100)/100
                }
                else{
                    return portInfo3.maxPower;
                }
            }
            inputPower:{
                if (platformInterface.request_usb_power_notification.port === 3){
                    return Math.round(platformInterface.request_usb_power_notification.input_voltage * platformInterface.request_usb_power_notification.input_current *100)/100
                }
                else{
                    return portInfo3.inputPower;
                }
            }
            outputPower:{
                if (platformInterface.request_usb_power_notification.port === 3){
                    return Math.round(platformInterface.request_usb_power_notification.output_voltage * platformInterface.request_usb_power_notification.output_current *100)/100
                }
                else{
                    return portInfo3.outputPower;
                }
            }
            outputVoltage:{
                if (platformInterface.request_usb_power_notification.port === 3){
                    return Math.round(platformInterface.request_usb_power_notification.output_voltage *100)/100
                }
                else{
                    return portInfo3.outputVoltage;
                }
            }
            portTemperature:{
                if (platformInterface.request_usb_power_notification.port === 3){
                    return Math.round(platformInterface.request_usb_power_notification.temperature*10)/10;
                }
                else{
                    return portInfo3.portTemperature;
                }
            }
            efficency: {
                var theInputPower = platformInterface.request_usb_power_notification.input_voltage * platformInterface.request_usb_power_notification.input_current;
                var theOutputPower = platformInterface.request_usb_power_notification.output_voltage * platformInterface.request_usb_power_notification.output_current

                if (platformInterface.request_usb_power_notification.port === 3){
                    if (theInputPower == 0){    //division by 0 would normally give "nan"
                        return "—"
                    }
                    else{
                        //return Math.round((theOutputPower/theInputPower) *100)/100
                        return "—"
                    }
                }
                else{
                  return portInfo3.efficency;
                    }
            }

            property var deviceConnected: platformInterface.usb_pd_port_connect.connection_state
            property var deviceDisconnected: platformInterface.usb_pd_port_disconnect.connection_state

             onDeviceConnectedChanged: {
//                 console.log("device connected message received in basicControl. Port=",platformInterface.usb_pd_port_connect.port_id,
//                             "state=",platformInterface.usb_pd_port_connect.connection_state);

                 if (platformInterface.usb_pd_port_connect.port_id === "USB_C_port_3"){
                     if (platformInterface.usb_pd_port_connect.connection_state === "connected"){
                         portInfo3.portConnected = true;
                     }
                 }
             }

             onDeviceDisconnectedChanged:{

                 if (platformInterface.usb_pd_port_disconnect.port_id === "USB_C_port_3"){
                     if (platformInterface.usb_pd_port_disconnect.connection_state === "disconnected"){
                         portInfo3.portConnected = false;
                     }
                 }
            }
            onShowGraph: {
                graphDrawer.portNumber = portNumber;
                graphDrawer.open();
            }
        }

        PortInfo {
            id: portInfo4
            height: portInfo1.height
            anchors {
                top: portInfo3.bottom
                topMargin: 20 * ratioCalc
                left: portColumn.left
                right: portColumn.right
            }
            portNumber: 4
            portConnected: false
            advertisedVoltage:{
                if (platformInterface.request_usb_power_notification.port === 4){
                    return platformInterface.request_usb_power_notification.negotiated_voltage;
                }
                else{
                   return portInfo4.advertisedVoltage;
                }
            }
            maxPower:{
                if (platformInterface.request_usb_power_notification.port === 4){
                    return Math.round(platformInterface.request_usb_power_notification.maximum_power *100)/100
                }
                else{
                    return portInfo4.maxPower;
                }
            }
            inputPower:{
                if (platformInterface.request_usb_power_notification.port === 4){
                    return Math.round(platformInterface.request_usb_power_notification.input_voltage * platformInterface.request_usb_power_notification.input_current *100)/100
                }
                else{
                   return portInfo4.inputPower;
                }
            }
            outputPower:{
                if (platformInterface.request_usb_power_notification.port === 4){
                    return Math.round(platformInterface.request_usb_power_notification.output_voltage * platformInterface.request_usb_power_notification.output_current *100)/100
                }
                else{
                   return portInfo4.outputPower;
                }
            }
            outputVoltage:{
                if (platformInterface.request_usb_power_notification.port === 4){
                    return Math.round(platformInterface.request_usb_power_notification.output_voltage *100)/100
                }
                else{
                   return portInfo4.outputVoltage;
                }
            }
            portTemperature:{
                if (platformInterface.request_usb_power_notification.port === 4){
                    return Math.round(platformInterface.request_usb_power_notification.temperature*10)/10;
                }
                else{
                   return portInfo4.portTemperature;
                }
            }
            efficency: {
                var theInputPower = platformInterface.request_usb_power_notification.input_voltage * platformInterface.request_usb_power_notification.input_current;
                var theOutputPower = platformInterface.request_usb_power_notification.output_voltage * platformInterface.request_usb_power_notification.output_current

                if (platformInterface.request_usb_power_notification.port === 4)
                    if (theInputPower == 0){    //division by 0 would normally give "nan"
                        return "—"
                    }
                    else{
                        //return Math.round((theOutputPower/theInputPower) *100)/100
                        return "—"
                    }
                else{
                    return portInfo4.efficency;
                }
            }

            property var deviceConnected: platformInterface.usb_pd_port_connect.connection_state
            property var deviceDisconnected: platformInterface.usb_pd_port_disconnect.connection_state

             onDeviceConnectedChanged: {
//                 console.log("device connected message received in basicControl. Port=",platformInterface.usb_pd_port_connect.port_id,
//                             "state=",platformInterface.usb_pd_port_connect.connection_state);

                 if (platformInterface.usb_pd_port_connect.port_id === "USB_C_port_4"){
                     if (platformInterface.usb_pd_port_connect.connection_state === "connected"){
                         portInfo4.portConnected = true;
                     }
                 }
             }

             onDeviceDisconnectedChanged:{

                 if (platformInterface.usb_pd_port_disconnect.port_id === "USB_C_port_4"){
                     if (platformInterface.usb_pd_port_disconnect.connection_state === "disconnected"){
                         portInfo4.portConnected = false;
                     }
                 }
            }

            onShowGraph: {
                graphDrawer.portNumber = portNumber;
                graphDrawer.open();
            }
        }

        SGLayoutDebug {
            visible: debugLayout
        }
    }

    Item {
        id: deviceColumn
        width: 280 * ratioCalc
        height: root.height
        anchors {
            left: portColumn.right
            leftMargin: 160 * ratioCalc
        }

        Column {
            anchors {
                top: deviceColumn.top
                topMargin: 35 * ratioCalc
                right: deviceColumn.right
            }

            width: parent.width - (100 * ratioCalc)
            spacing: 20 * ratioCalc

            DeviceInfo {
                height: portInfo1.height
                width: parent.width

                MouseArea {
                    anchors {
                        fill: parent
                    }

                    property var deviceConnected: platformInterface.usb_pd_port_connect.connection_state
                    property var deviceDisconnected: platformInterface.usb_pd_port_disconnect.connection_state

                     onDeviceConnectedChanged: {
                         //console.log("device connected message received in basicControl. Port=",platformInterface.usb_pd_port_connect.port_id,
                         //            "state=",platformInterface.usb_pd_port_connect.connection_state);

                         if (platformInterface.usb_pd_port_connect.port_id === "USB_C_port_1"){
                             if (platformInterface.usb_pd_port_connect.connection_state === "connected"){
                                 port1Animation.source = "images/cord.gif"
                                 port1Animation.currentFrame = 0
                                 port1Animation.playing = true
                                 port1Animation.pluggedIn = !port1Animation.pluggedIn
                             }
                         }
                     }

                     onDeviceDisconnectedChanged:{

                         if (platformInterface.usb_pd_port_disconnect.port_id === "USB_C_port_1"){
                             if (platformInterface.usb_pd_port_disconnect.connection_state === "disconnected"){
                                 port1Animation.source = "images/cordReverse.gif"
                                 port1Animation.currentFrame = 0
                                 port1Animation.playing = true
                                 port1Animation.pluggedIn = !port1Animation.pluggedIn
                             }
                         }
                    }

                    onClicked: {
                        if (!port1Animation.pluggedIn) {
                            port1Animation.source = "images/cord.gif"
                            port1Animation.currentFrame = 0
                            port1Animation.playing = true
                            port1Animation.pluggedIn = !port1Animation.pluggedIn
                        } else {
                            port1Animation.source = "images/cordReverse.gif"
                            port1Animation.currentFrame = 0
                            port1Animation.playing = true
                            port1Animation.pluggedIn = !port1Animation.pluggedIn
                        }
                    }
                }
            }

            DeviceInfo {
                height: portInfo1.height
                width: parent.width

                MouseArea {
                    anchors {
                        fill: parent
                    }

                    property var deviceConnected: platformInterface.usb_pd_port_connect.connection_state
                    property var deviceDisconnected: platformInterface.usb_pd_port_disconnect.connection_state

                     onDeviceConnectedChanged: {
                         //console.log("device connected message received in basicControl. Port=",platformInterface.usb_pd_port_connect.port_id,
                         //            "state=",platformInterface.usb_pd_port_connect.connection_state);

                         if (platformInterface.usb_pd_port_connect.port_id === "USB_C_port_2"){
                             if (platformInterface.usb_pd_port_connect.connection_state === "connected"){
                                 port2Animation.source = "images/cord.gif"
                                 port2Animation.currentFrame = 0
                                 port2Animation.playing = true
                                 port2Animation.pluggedIn = !port2Animation.pluggedIn
                             }
                         }
                     }

                     onDeviceDisconnectedChanged:{
                         //console.log("device disconnected message received in basicControl. Port=",platformInterface.usb_pd_port_disconnect.port_id,
                          //           "state=",platformInterface.usb_pd_port_disconnect.connection_state);

                         if (platformInterface.usb_pd_port_disconnect.port_id === "USB_C_port_2"){
                             if (platformInterface.usb_pd_port_disconnect.connection_state === "disconnected"){
                                 port2Animation.source = "images/cordReverse.gif"
                                 port2Animation.currentFrame = 0
                                 port2Animation.playing = true
                                 port2Animation.pluggedIn = !port2Animation.pluggedIn
                             }
                         }
                    }
                    onClicked: {
                        if (!port2Animation.pluggedIn) {
                            port2Animation.source = "images/cord.gif"
                            port2Animation.currentFrame = 0
                            port2Animation.playing = true
                            port2Animation.pluggedIn = !port2Animation.pluggedIn
                        } else {
                            port2Animation.source = "images/cordReverse.gif"
                            port2Animation.currentFrame = 0
                            port2Animation.playing = true
                            port2Animation.pluggedIn = !port2Animation.pluggedIn
                        }
                    }
                }
            }

            DeviceInfo {
                height: portInfo1.height
                width: parent.width

                MouseArea {
                    anchors {
                        fill: parent
                    }

                    property var deviceConnected: platformInterface.usb_pd_port_connect.connection_state
                    property var deviceDisconnected: platformInterface.usb_pd_port_disconnect.connection_state

                     onDeviceConnectedChanged: {
                         //console.log("device connected message received in basicControl. Port=",platformInterface.usb_pd_port_connect.port_id,
                         //            "state=",platformInterface.usb_pd_port_connect.connection_state);

                         if (platformInterface.usb_pd_port_connect.port_id === "USB_C_port_3"){
                             if (platformInterface.usb_pd_port_connect.connection_state === "connected"){
                                 port3Animation.source = "images/cord.gif"
                                 port3Animation.currentFrame = 0
                                 port3Animation.playing = true
                                 port3Animation.pluggedIn = !port3Animation.pluggedIn
                             }
                         }
                     }

                     onDeviceDisconnectedChanged:{
                         //console.log("device disconnected message received in basicControl. Port=",platformInterface.usb_pd_port_disconnect.port_id,
                          //           "state=",platformInterface.usb_pd_port_disconnect.connection_state);

                         if (platformInterface.usb_pd_port_disconnect.port_id === "USB_C_port_3"){
                             if (platformInterface.usb_pd_port_disconnect.connection_state === "disconnected"){
                                 port3Animation.source = "images/cordReverse.gif"
                                 port3Animation.currentFrame = 0
                                 port3Animation.playing = true
                                 port3Animation.pluggedIn = !port3Animation.pluggedIn
                             }
                         }
                    }
                    onClicked: {
                        if (!port3Animation.pluggedIn) {
                            port3Animation.source = "images/cord.gif"
                            port3Animation.currentFrame = 0
                            port3Animation.playing = true
                            port3Animation.pluggedIn = !port3Animation.pluggedIn
                        } else {
                            port3Animation.source = "images/cordReverse.gif"
                            port3Animation.currentFrame = 0
                            port3Animation.playing = true
                            port3Animation.pluggedIn = !port3Animation.pluggedIn
                        }
                    }
                }
            }

            DeviceInfo {
                height: portInfo1.height
                width: parent.width

                MouseArea {
                    anchors {
                        fill: parent
                    }

                    property var deviceConnected: platformInterface.usb_pd_port_connect.connection_state
                    property var deviceDisconnected: platformInterface.usb_pd_port_disconnect.connection_state

                     onDeviceConnectedChanged: {
                         //console.log("device connected message received in basicControl. Port=",platformInterface.usb_pd_port_connect.port_id,
                         //            "state=",platformInterface.usb_pd_port_connect.connection_state);

                         if (platformInterface.usb_pd_port_connect.port_id === "USB_C_port_4"){
                             if (platformInterface.usb_pd_port_connect.connection_state === "connected"){
                                 port4Animation.source = "images/cord.gif"
                                 port4Animation.currentFrame = 0
                                 port4Animation.playing = true
                                 port4Animation.pluggedIn = !port4Animation.pluggedIn
                             }
                         }
                     }

                     onDeviceDisconnectedChanged:{
                         //console.log("device disconnected message received in basicControl. Port=",platformInterface.usb_pd_port_disconnect.port_id,
                         //            "state=",platformInterface.usb_pd_port_disconnect.connection_state);

                         if (platformInterface.usb_pd_port_disconnect.port_id === "USB_C_port_4"){
                             if (platformInterface.usb_pd_port_disconnect.connection_state === "disconnected"){
                                 port4Animation.source = "images/cordReverse.gif"
                                 port4Animation.currentFrame = 0
                                 port4Animation.playing = true
                                 port4Animation.pluggedIn = !port4Animation.pluggedIn
                             }
                         }
                    }
                    onClicked: {
                        if (!port4Animation.pluggedIn) {
                            port4Animation.source = "images/cord.gif"
                            port4Animation.currentFrame = 0
                            port4Animation.playing = true
                            port4Animation.pluggedIn = !port4Animation.pluggedIn
                        } else {
                            port4Animation.source = "images/cordReverse.gif"
                            port4Animation.currentFrame = 0
                            port4Animation.playing = true
                            port4Animation.pluggedIn = !port4Animation.pluggedIn
                        }
                    }
                }
            }
        }

        SGLayoutDebug {
            visible: debugLayout
        }
    }
    */
}
