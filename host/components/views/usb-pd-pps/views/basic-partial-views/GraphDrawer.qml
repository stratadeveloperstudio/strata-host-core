
import QtQuick 2.12
//import QtQuick.Window 2.12
import QtQuick.Controls 2.12

//import QtQuick 2.9
//import QtQuick.Controls 2.2
import "qrc:/views/usb-pd-pps/sgwidgets"
import tech.strata.sgwidgets 1.0 as SGWidgets10

Drawer {
    id:root
    height:parent.height
    width:450
    dragMargin:0
    edge:Qt.RightEdge

    property real slideDuration: 2000
    property real menuWidth: 450
    property real hintWidth: 0 //20
    property alias state: menuContainer.state
    property int portNumber: 1
    property int graphHeight: 310

    onAboutToShow:{
        openAnimation.start()
    }

    onAboutToHide:{
        closeAnimation.start()
    }

        ParallelAnimation {
            id: openAnimation
            running:false
            NumberAnimation {
                target: menuContainer
                property: "x"
                duration: root.slideDuration
                from: menuContainer.x
                to: root.width - root.menuWidth
            }
            NumberAnimation {
                target: hintIcon
                property: "opacity"
                duration: root.slideDuration
                from: 1
                to: 0
            }
            NumberAnimation {
                target: modalArea
                property: "opacity"
                duration: root.slideDuration
                from: 0
                to: 0.2
            }

            onRunningChanged: {
                if (!running){
                    menuHover.visible = false
                    remainderHover.visible = true
                } else {
                    menuItems.visible = true
                }
            }
        }

        ParallelAnimation{
            id:closeAnimation
            running:false
            NumberAnimation {
                target: hintIcon
                property: "opacity"
                duration: root.slideDuration
                from: 0
                to: 1
            }
            NumberAnimation {
                target: modalArea
                property: "opacity"
                duration: root.slideDuration
                from: 0.2
                to: 0
            }
            onRunningChanged: {
                if (!running){
                    menuHover.visible = true
                    remainderHover.visible = false
                    menuItems.visible = false
                }
            }
        }

      Rectangle {
        id: menuContainer
        anchors.fill:parent
        x: root.width-hintWidth
        z: 3
        color: "#282a2b"

        MouseArea {
            // This blocks all mouseEvents from propagating through the menu to stuff below
            anchors { fill: parent }
            hoverEnabled: true
            preventStealing: true
            propagateComposedEvents: false
        }

        Column  {
            id: menuItems
            width: parent.width
            anchors { verticalCenter: menuContainer.verticalCenter }
            visible: false
        }

        Text {
            id: hintIcon
            text: "\ue811"
            color: "#ddd"
            font {
                pixelSize: 25
                family: sgicons.name
            }
            anchors {
                verticalCenter: menuContainer.verticalCenter
                left: menuContainer.left
            }
            Behavior on opacity { NumberAnimation { duration: root.slideDuration } }
        }

        MouseArea{
            id: menuHover
            anchors {
                fill:parent
            }
            hoverEnabled: true
            onEntered: {
                menuContainer.state = "open"
            }
        }




        SGWidgets10.SGGraph{
            id:voltageGraph
            anchors.left: menuContainer.left
            anchors.right:menuContainer.right
            anchors.top: menuContainer.top
            height: root.graphHeight

            property real stream: 0
            property real count: 0
            property real interval: 10 // 10 Hz?

            property var powerInfo: platformInterface.usb_power_notification.output_voltage
            onPowerInfoChanged:{
                //console.log("new power notification for port ",portNumber);
                if (platformInterface.usb_power_notification.port === portNumber){
                    //console.log("voltage=",platformInterface.usb_power_notification.output_voltage," count=",count);
                    count += interval;
                    stream = platformInterface.usb_power_notification.output_voltage
                }
            }

            Timer {
                id: graphTimerPoints
                interval: 60
                running: false
                repeat: true

                property real lastTime

                onRunningChanged: {
                    if (running){
                        timedGraphPoints.curve(0).clear()
                        lastTime = Date.now()
                    }
                }

                onTriggered: {
                    let currentTime = Date.now()
                    let curve = timedGraphPoints.curve(0)
                    curve.shiftPoints((currentTime - lastTime)/1000, 0)
                    curve.append(0, platformInterface.usb_power_notification.output_voltage)
                    removeOutOfViewPoints()
                    timedGraphPoints.update()
                    lastTime = currentTime
                }

                function removeOutOfViewPoints() {
                    // recursively clean up points that have moved out of view
                    if (timedGraphPoints.curve(0).at(0).x > timedGraphPoints.xMin) {
                        timedGraphPoints.curve(0).remove(0)
                        removeOutOfViewPoints()
                    }
                }
            }


            // Optional graph settings:
            title: "Port "+portNumber+ " Voltage" // Default: empty
            xTitle: "Seconds"           // Default: empty
            yTitle: "V"                 // Default: empty
            //textColor: "#ffffff"            // Default: #000000 (black) - Must use hex colors for this property
            //dataLineColor: "white"          // Default: #000000 (black)
            //axesColor: "#cccccc"            // Default: Qt.rgba(.2, .2, .2, 1) (dark gray)
            //gridLineColor: "#666666"        // Default: Qt.rgba(.8, .8, .8, 1) (light gray)
            //underDataColor: "transparent"   // Default: Qt.rgba(.5, .5, .5, .3) (transparent gray)
            backgroundColor: "black"        // Default: #ffffff (white)
            yMin: 0                    // Default: 0
            yMax: 25                   // Default: 10
            xMin: 0                    // Default: 0
            xMax: 5                    // Default: 10
            //showXGrids: false               // Default: false
            //showYGrids: true                // Default: false
            //xValueAxis.tickCount: 5
            panXEnabled: false
            panYEnabled: false
            zoomXEnabled: false
            zoomYEnabled: false
            autoUpdate: false
            foregroundColor: "white"

            Component.onCompleted: {
                let movingCurve = createCurve("movingCurve")
                movingCurve.color = "white"
                movingCurve.autoUpdate = false
            }
        }

        SGWidgets10.SGGraph{
            id:powerGraph
            anchors.left: menuContainer.left
            anchors.right:menuContainer.right
            anchors.top: voltageGraph.bottom
            height: root.graphHeight

            property real stream: 0
            property real count: 0
            property real interval: 10 // 10 Hz?

//            property var powerInfo: platformInterface.usb_power_notification.output_voltage
//            onPowerInfoChanged:{
//                //console.log("new power notification for port ",portNumber);
//                if (platformInterface.usb_power_notification.port === portNumber){
//                    //console.log("voltage=",platformInterface.usb_power_notification.output_voltage," count=",count);
//                    count += interval;
//                    stream = platformInterface.usb_power_notification.output_voltage *
//                            platformInterface.usb_power_notification.output_current;
//                }
//            }

            Timer {
                id: graphTimerPoints2
                interval: 60
                running: false
                repeat: true

                property real lastTime

                onRunningChanged: {
                    if (running){
                        timedGraphPoints.curve(0).clear()
                        lastTime = Date.now()
                    }
                }

                onTriggered: {
                    let currentTime = Date.now()
                    let curve = timedGraphPoints.curve(0)
                    curve.shiftPoints((currentTime - lastTime)/1000, 0)
                    curve.append(0, platformInterface.usb_power_notification.output_current)
                    removeOutOfViewPoints()
                    timedGraphPoints.update()
                    lastTime = currentTime
                }

                function removeOutOfViewPoints() {
                    // recursively clean up points that have moved out of view
                    if (timedGraphPoints.curve(0).at(0).x > timedGraphPoints.xMin) {
                        timedGraphPoints.curve(0).remove(0)
                        removeOutOfViewPoints()
                    }
                }
            }

            // Optional graph settings:
            title: "Port "+portNumber+ " Power" // Default: empty
            xTitle: "Seconds"           // Default: empty
            yTitle: "W"                 // Default: empty
            backgroundColor: "black"        // Default: #ffffff (white)
            yMin: 0                    // Default: 0
            yMax: 60                   // Default: 10
            xMin: 0                    // Default: 0
            xMax: 5                    // Default: 10
            panXEnabled: false
            panYEnabled: false
            zoomXEnabled: false
            zoomYEnabled: false
            autoUpdate: false
            foregroundColor: "white"

            Component.onCompleted: {
                let movingCurve = createCurve("movingCurve")
                movingCurve.color = "white"
                movingCurve.autoUpdate = false
            }
        }

        SGGraph{
            id:temperatureGraph
            anchors.left: menuContainer.left
            anchors.right:menuContainer.right
            anchors.top: powerGraph.bottom
            height: root.graphHeight

            property real stream: 0
            property real count: 0
            property real interval: 10 // 10 Hz?

            property var powerInfo: platformInterface.usb_power_notification
            onPowerInfoChanged:{
                //console.log("new power notification for port ",portNumber);
                if (platformInterface.usb_power_notification.port === portNumber){
                    //console.log("temp=",platformInterface.usb_power_notification.temperature);
                    count += interval;
                    stream = platformInterface.usb_power_notification.temperature;
                }
            }

            inputData: stream          // Set the graph's data source here

            // Optional graph settings:
            title: "Port "+portNumber+ " Temperature" // Default: empty
            xAxisTitle: "Seconds"           // Default: empty
            yAxisTitle: "°C"                 // Default: empty
            textColor: "#ffffff"            // Default: #000000 (black) - Must use hex colors for this property
            dataLineColor: "white"          // Default: #000000 (black)
            axesColor: "#cccccc"            // Default: Qt.rgba(.2, .2, .2, 1) (dark gray)
            gridLineColor: "#666666"        // Default: Qt.rgba(.8, .8, .8, 1) (light gray)
            underDataColor: "transparent"   // Default: Qt.rgba(.5, .5, .5, .3) (transparent gray)
            backgroundColor: "black"        // Default: #ffffff (white)
            minYValue: 0                    // Default: 0
            maxYValue: 100                   // Default: 10
            minXValue: 0                    // Default: 0
            maxXValue: 5                   // Default: 10
            showXGrids: false               // Default: false
            showYGrids: true                // Default: false
        }
    }

    MouseArea{
        id: remainderHover
        anchors {
            left: root.left
            top: root.top
            bottom: root.bottom
            right: menuContainer.left
        }
        //hoverEnabled: true
        visible: false
        onClicked: {
            menuContainer.state = "closed"
            //drawerMenuItems.closer()
        }
    }

    Rectangle {
        id: modalArea
        color: "#000"
        opacity: 0
        z: 1
        anchors {
            fill: remainderHover
        }
    }

    FontLoader {
        id: sgicons
        source: "../../sgwidgets/fonts/sgicons.ttf"
    }
}
