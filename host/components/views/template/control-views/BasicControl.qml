import QtQuick 2.12
import QtQuick.Layouts 1.12

import tech.strata.sgwidgets 1.0
import tech.strata.sgwidgets 0.9 as Widget09
import "qrc:/js/help_layout_manager.js" as Help
import QtQuick.Controls 2.12

Item {
    id: root
    Layout.fillHeight: true
    Layout.fillWidth: true
    property real ratioCalc: root.width / 1200

    property alias firstCommand: firstCommand


    property var obj: {
        "value": "my_cmd_simple_periodic",
        "payload": {
            "adc_read": platformInterface.notifications.my_cmd_simple_periodic.adc_read,
            "io_read": platformInterface.notifications.my_cmd_simple_periodic.io_read,
            "random_float": platformInterface.notifications.my_cmd_simple_periodic.random_float,
            "toggle_bool": platformInterface.notifications.my_cmd_simple_periodic.toggle_bool
        }
    }

    property var test: platformInterface.my_cmd_simple_periodic.toggle_bool
    onTestChanged: {
        console.info(test)
    }



    property var run_count: -1

    property var my_cmd_simple_start_periodic_obj: {
        "value": "my_cmd_simple_periodic_update",
        "payload": {
            "run_state": enableSwitch.checked,
            "interval": infoBox.text,
            "run_count": run_count
        }
    }




    property var my_cmd_simple_obj: {
        "value": "my_cmd_simple",
        "payload": {
            "io": gpio.checked,
            "dac": dac.value.toFixed(1)
        }
    }



    //    property var obj1: {
    //        "value":"my_cmd_complex_periodic",
    //        "payload":{
    //            "bool_array":platformInterface.notifications.my_cmd_complex_periodic.bool_array,
    //            "bool_array_rval":platformInterface.notifications.my_cmd_complex_periodic.bool_array_rval,
    //            "bool_vector":platformInterface.notifications.my_cmd_complex_periodic.bool_vector,
    //            "float_array_3dec":platformInterface.notifications.my_cmd_complex_periodic.float_array_3dec,
    //            "float_array_rval_4dec":platformInterface.notifications.my_cmd_complex_periodic.float_array_rval_4dec,
    //            "float_vector_5dec":platformInterface.notifications.my_cmd_complex_periodic.float_vector_5dec,
    //            "int_array":platformInterface.notifications.my_cmd_complex_periodic.int_array,
    //            "int_array_rval":platformInterface.notifications.my_cmd_complex_periodic.int_array_rval,
    //            "int_vector":platformInterface.notifications.my_cmd_complex_periodic.int_vector,
    //            "single_bool":platformInterface.notifications.my_cmd_complex_periodic.single_bool,
    //            "single_bool_rval":platformInterface.notifications.my_cmd_complex_periodic.single_bool_rval,
    //            "single_float_1dec":platformInterface.notifications.my_cmd_complex_periodic.single_float_1dec,
    //            "single_float_rval_2dec":platformInterface.notifications.my_cmd_complex_periodic.single_float_rval_2dec,
    //            "single_int":platformInterface.notifications.my_cmd_complex_periodic.single_int,
    //            "single_int_rval":platformInterface.notifications.my_cmd_complex_periodic.single_int_rval,
    //            "single_string":platformInterface.notifications.my_cmd_complex_periodic.single_string,
    //            "string_array":platformInterface.notifications.my_cmd_complex_periodic.string_array,
    //            "string_array_rval":platformInterface.notifications.my_cmd_complex_periodic.string_array_rval,
    //            "string_literal":platformInterface.notifications.my_cmd_complex_periodic.string_literal,
    //            "string_vector":platformInterface.notifications.my_cmd_complex_periodic.string_vector
    //        }
    //    }

    ColumnLayout {
        width: parent.width
        height: parent.height/1.1
        anchors.centerIn: parent
        anchors.top:parent.top
        anchors.topMargin: 150
        anchors.left: parent.left
        anchors.leftMargin: 20
        anchors.right: parent.right
        anchors.rightMargin: 20
        spacing: 10



        function openFile(fileUrl) {
            var request = new XMLHttpRequest();
            request.open("GET", fileUrl, false);
            request.send(null);
            return request.responseText;
        }

        Item {
            Layout.preferredHeight: parent.height/4
            Layout.fillWidth: true
            Rectangle{
                id: headingCommandHandler
                width: parent.width
                height: parent.height/9
                Text {
                    id: powerControlHeading
                    text: "Simple Command Handler"
                    font.bold: true
                    font.pixelSize: ratioCalc * 20
                    color: "#696969"
                    anchors {
                        top: parent.top
                    }
                }
                Image {
                    id: name
                    source: "commandicon.png"
                    anchors {
                        top: parent.top
                        topMargin: -5
                        right: parent.right
                    }
                }

                Rectangle {
                    id: line1
                    height: 1.5
                    Layout.alignment: Qt.AlignCenter
                    width: parent.width
                    border.color: "lightgray"
                    radius: 2
                    anchors {
                        top: powerControlHeading.bottom
                        topMargin: 7
                    }
                }
            }
            RowLayout {
                anchors.top: headingCommandHandler.bottom
                anchors.topMargin: 5
                width: parent.width
                height: parent.height - headingCommandHandler.height

                Rectangle {
                    Layout.fillHeight: true
                    Layout.fillWidth: true
                    color: "transparent"
                    ColumnLayout {
                        anchors.fill: parent
                        Rectangle {
                            Layout.fillHeight: true
                            Layout.fillWidth: true
                            color: "transparent"
                            SGAlignedLabel {
                                id: gpioSwitchLabel
                                target: gpio
                                text: "IO Output"
                                font.bold: true
                                anchors.centerIn: parent
                                alignment: SGAlignedLabel.SideTopCenter

                                SGSwitch {
                                    id: gpio
                                    width: 50

                                    onToggled:  {
                                        platformInterface.commands.my_cmd_simple.update(gpio.checked,dac.value)
                                        firstCommand.text =  JSON.stringify(my_cmd_simple_obj,null,4)
                                    }
                                }
                            }
                        }
                        Rectangle {
                            Layout.fillHeight: true
                            Layout.fillWidth: true
                            SGAlignedLabel {
                                id: dacSwitchLabel
                                target: dac
                                text: "DAC Ouput"
                                font.bold: true
                                anchors.centerIn: parent
                                alignment: SGAlignedLabel.SideTopCenter

                                SGSlider {
                                    id: dac
                                    width: 200
                                    from: 0                          // Default: 0.0
                                    to: 1
                                    onUserSet: {
                                        platformInterface.commands.my_cmd_simple.update(gpio.checked,dac.value)
                                        firstCommand.text = JSON.stringify(my_cmd_simple_obj,null,4)

                                    }
                                }
                            }
                        }
                    }
                }
                Rectangle {
                    Layout.fillHeight: true
                    Layout.fillWidth: true
                    Layout.topMargin: 10
                    color: "light gray"
                    ScrollView {
                        id: frame3
                        clip: true
                        anchors.fill: parent
                        //other properties
                        ScrollBar.vertical.policy: ScrollBar.AsNeeded
                        SGText {
                            id: firstCommand
                            anchors.fill: parent
                            text: JSON.stringify(my_cmd_simple_obj,null,4)
                        }
                    }
                }
            } //end of row
        }



        Rectangle {
            Layout.fillHeight: true
            Layout.fillWidth: true
            Rectangle {
                id: periodicNotification
                width: parent.width
                height: parent.height/9
                Text {
                    id: periodicNotificationHeading
                    text: "Periodic Notification"
                    font.bold: true
                    font.pixelSize: ratioCalc * 20
                    color: "#696969"
                    anchors {
                        top: parent.top
                    }
                }
                Image {
                    id: name2
                    source: "notificationicon.png"
                    anchors {
                        top: parent.top
                        topMargin: -5
                        right: parent.right
                    }
                }

                Rectangle {
                    id: line2
                    height: 1.5
                    Layout.alignment: Qt.AlignCenter
                    width: parent.width
                    border.color: "lightgray"
                    radius: 2
                    anchors {
                        top: periodicNotificationHeading.bottom
                        topMargin: 7
                    }
                }
            }
            RowLayout {
                anchors.top: periodicNotification.bottom
                anchors.topMargin: 5
                width: parent.width
                height: parent.height - periodicNotification.height

                Item {
                    Layout.fillHeight: true
                    Layout.fillWidth: true

                    ColumnLayout{
                        anchors.fill: parent
                        Item  {
                            Layout.preferredHeight: parent.height/4
                            Layout.fillWidth: true

                            Item{
                                id: toggleSwitchContainer
                                width:parent.width/2
                                height: parent.height
                                SGAlignedLabel {
                                    id: toggleLEDLabel
                                    target: toggleLED
                                    alignment: SGAlignedLabel.SideTopCenter
                                    anchors {
                                        centerIn: parent
                                    }
                                    text: "Toggle"
                                    font.bold: true

                                    SGStatusLight {
                                        id: toggleLED
                                        width : 40
                                        status: {
                                            if(platformInterface.notifications.my_cmd_simple_periodic.toggle_bool === true)
                                                return SGStatusLight.Green
                                            else return SGStatusLight.Off
                                        }
                                        property var  test: platformInterface.notifications.my_cmd_simple_periodic.toggle_bool
                                        onTestChanged: {
                                            console.info(test)
                                        }

                                    }
                                }

                            }
                            Item{
                                id: inputSwitchConter
                                width:parent.width/2
                                height: parent.height
                                anchors.left: toggleSwitchContainer.right
                                SGAlignedLabel {
                                    id: inputLEDLabel
                                    target: inputLED
                                    alignment: SGAlignedLabel.SideTopCenter
                                    anchors {
                                        centerIn: parent
                                    }
                                    text: "IO Input"
                                    font.bold: true
                                    SGStatusLight {
                                        id: inputLED
                                        width : 40
                                        status: {
                                            if(platformInterface.notifications.my_cmd_simple_periodic.io_read === true)
                                                return SGStatusLight.Green
                                            else return SGStatusLight.Off
                                        }
                                        property var  test: platformInterface.notifications.my_cmd_simple_periodic.io_read
                                        onTestChanged: {
                                            console.info(test)
                                        }

                                    }
                                }
                            }
                        }
                        Item {
                            Layout.fillHeight: true
                            Layout.fillWidth: true
                            SGGraph{
                                id: timedGraphPoints
                                anchors.fill: parent
                                title: "Periodic Notification Graph"
                                yMin: 0
                                yMax: 1
                                xMin: 0
                                xMax: 5
                                xTitle: "X Axis"
                                yTitle: "Y Axis"
                                panXEnabled: false
                                panYEnabled: false
                                zoomXEnabled: false
                                zoomYEnabled: false
                                autoUpdate: false
                                xGrid: true
                                yGrid: true
                                Component.onCompleted: {
                                    let movingCurve = createCurve("movingCurve")
                                    movingCurve.color = "turquoise"
                                    movingCurve.autoUpdate = false
                                    let movingCurve2 = createCurve("movingCurve")
                                    movingCurve2.color = "green"
                                    movingCurve2.autoUpdate = false
                                }
                                Timer {
                                    id: graphTimerPoints
                                    interval: 60
                                    running: enableSwitch.checked
                                    repeat: true

                                    property real lastTime

                                    onRunningChanged: {
                                        if (running){
                                            timedGraphPoints.curve(0).clear()
                                            timedGraphPoints.curve(1).clear()
                                            lastTime = Date.now()
                                        }
                                    }

                                    onTriggered: {
                                        let currentTime = Date.now()
                                        let curve = timedGraphPoints.curve(0)
                                        curve.shiftPoints((currentTime - lastTime)/1000, 0)
                                        curve.append(0, platformInterface.notifications.my_cmd_simple_periodic.adc_read)

                                        let curve2 = timedGraphPoints.curve(1)
                                        curve2.shiftPoints((currentTime - lastTime)/1000, 0)
                                        curve2.append(0, platformInterface.notifications.my_cmd_simple_periodic.random_float)

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

                            }
                        }

                    }
                }
                Rectangle {
                    Layout.fillHeight: true
                    Layout.fillWidth: true
                    color: "light gray"
                    ScrollView {
                        id: frame2
                        clip: true
                        anchors.fill: parent
                        //other properties
                        ScrollBar.vertical.policy: ScrollBar.AsNeeded
                        SGText {
                            anchors.fill: parent
                            text: {
                                JSON.stringify(obj, null, 4)
                            }
                        }
                    }

                }

            } //end of row
        }
        Rectangle {
            Layout.preferredHeight: parent.height/4
            Layout.fillWidth: true
            Rectangle {
                id: configperiodicNotification
                width: parent.width
                height: parent.height/9
                Text {
                    id: configperiodicNotificationHeading
                    text: "Periodic Notification"
                    font.bold: true
                    font.pixelSize: ratioCalc * 20
                    color: "#696969"
                    anchors {
                        top: parent.top
                    }
                }
                Image {
                    id: name3
                    source: "commandicon.png"
                    anchors {
                        top: parent.top
                        topMargin: -5
                        right: parent.right
                    }
                }

                Rectangle {
                    id: line3
                    height: 1.5
                    Layout.alignment: Qt.AlignCenter
                    width: parent.width
                    border.color: "lightgray"
                    radius: 2
                    anchors {
                        top: configperiodicNotificationHeading.bottom
                        topMargin: 7
                    }
                }
            }
            RowLayout {
                anchors.top: configperiodicNotification.bottom
                anchors.topMargin: 5
                width: parent.width
                height: parent.height - configperiodicNotification.height

                Item {
                    Layout.fillHeight: true
                    Layout.fillWidth: true
                    ColumnLayout{
                        anchors.fill: parent


                        Item {
                            Layout.fillHeight: true
                            Layout.fillWidth: true

                            SGAlignedLabel {
                                id: enableLabel
                                target: enableSwitch
                                text: "run_state"
                                anchors {
                                    centerIn: parent
                                }
                                alignment: SGAlignedLabel.SideTopCenter

                                SGSwitch {
                                    id: enableSwitch
                                    width: 50
                                    onToggled: {
                                        platformInterface.commands.my_cmd_simple_periodic_update.update(checked,run_count,infoBox.text)
                                    }
                                }
                            }
                        }
                        Item {
                            Layout.fillHeight: true
                            Layout.fillWidth: true
                            RowLayout{
                                anchors.fill: parent
                                Item {
                                    Layout.fillHeight: true
                                    Layout.fillWidth: true
                                    SGAlignedLabel {
                                        id: runStateLabel
                                        target: runStateSwitch
                                        text: "Run Indefinately"
                                        anchors {
                                            horizontalCenter: parent.horizontalCenter
                                        }
                                        alignment: SGAlignedLabel.SideTopCenter

                                        SGSwitch {
                                            id: runStateSwitch
                                            width: 50
                                            onToggled: {
                                                if(checked) {
                                                    run_count = 1
                                                    platformInterface.commands.my_cmd_simple_periodic_update.update(enableSwitch.checked,run_count,infoBox.text)
                                                }
                                                else {
                                                    run_count = -1
                                                    platformInterface.commands.my_cmd_simple_periodic_update.update(enableSwitch.checked,run_count,infoBox.text)
                                                }
                                            }
                                        }
                                    }

                                }
                                Item {
                                    Layout.fillHeight: true
                                    Layout.fillWidth: true
                                    SGAlignedLabel {
                                        id: infoBoxLabel
                                        target: infoBox
                                        text: "infoBox"
                                        font.bold: true
                                        anchors.centerIn: parent
                                        alignment: SGAlignedLabel.SideTopCenter

                                        SGSubmitInfoBox {
                                            id: infoBox
                                            width: 55
                                            text: "2000"
                                            onEditingFinished:{
                                                platformInterface.commands.my_cmd_simple_periodic_update.update(enableSwitch.checked,run_count,text)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } // end of column
                }
                Rectangle {
                    Layout.fillHeight: true
                    Layout.fillWidth: true
                    color: "light gray"
                    ScrollView {
                        id: frame4
                        clip: true
                        anchors.fill: parent
                        //other properties
                        ScrollBar.vertical.policy: ScrollBar.AsNeeded
                        SGText {
                            anchors.fill: parent
                            text: {
                                JSON.stringify(my_cmd_simple_start_periodic_obj, null, 4)
                            }
                        }
                    }

                }

            }


        }

    }
    //        Rectangle {
    //            Layout.fillHeight: true
    //            Layout.fillWidth: true
    //            RowLayout {
    //                anchors.fill: parent
    //                spacing: 10
    //                Rectangle {
    //                    Layout.fillHeight: true
    //                    Layout.preferredWidth: parent.width/1.5
    //                    color: "transparent"
    //                    SGGraph{
    //                        id: timedGraphAxis
    //                        anchors.fill: parent
    //                        title: "Periodic Notification Graph"
    //                        yMin: 0
    //                        yMax: 1
    //                        xMin: 0
    //                        xMax: 5
    //                        xTitle: "X Axis"
    //                        yTitle: "Y Axis"
    //                        panXEnabled: false
    //                        panYEnabled: false
    //                        zoomXEnabled: false
    //                        zoomYEnabled: false
    //                        autoUpdate: false
    //                        xGrid: true
    //                        yGrid: true
    //                        Component.onCompleted: {
    //                            let movingCurve = createCurve("movingCurve")
    //                            movingCurve.color = "turquoise"
    //                            movingCurve.autoUpdate = false
    //                        }

    //                        Timer {
    //                            id: graphTimerAxis
    //                            interval: 60
    //                            running: false
    //                            repeat: true

    //                            property real startTime
    //                            property real lastTime

    //                            onRunningChanged: {
    //                                if (running){
    //                                    timedGraphAxis.curve(0).clear()
    //                                    startTime = Date.now()
    //                                    lastTime = startTime
    //                                    timedGraphAxis.xMin = -5
    //                                    timedGraphAxis.xMax = 0
    //                                }
    //                            }

    //                            onTriggered: {
    //                                let currentTime = Date.now()
    //                                timedGraphAxis.curve(0).append((currentTime - startTime)/1000, yourDataValueHere())
    //                                timedGraphAxis.shiftXAxis((currentTime - lastTime)/1000)
    //                                removeOutOfViewPoints()
    //                                timedGraphAxis.update()
    //                                lastTime = currentTime
    //                            }

    //                            function removeOutOfViewPoints() {
    //                                // recursively clean up points that have moved out of view
    //                                if (timedGraphAxis.curve(0).at(0).x < timedGraphAxis.xMin) {
    //                                    timedGraphAxis.curve(0).remove(0)
    //                                    removeOutOfViewPoints()
    //                                }
    //                            }
    //                        }
    //                    }
    //                }
    //                Rectangle {
    //                    Layout.fillHeight: true
    //                    Layout.fillWidth: true
    //                    Column {
    //                        anchors.centerIn: parent
    //                        spacing: 5
    //                        SGButton {
    //                            text: "Start/stop Periodic \n Handler"
    //                            onClicked: {
    //                                if(graphTimerAxis.running === true) {
    //                                    platformInterface.commands.my_cmd_simple_periodic_update.update(false,perodic_interval,-1)
    //                                }
    //                                else {
    //                                    platformInterface.commands.my_cmd_simple_periodic_update.update(true,perodic_interval,-1)
    //                                }
    //                                graphTimerAxis.running = !graphTimerAxis.running

    //                            }
    //                        }
    //                        SGButton {
    //                            text: "Update Periodic Handler \n Interval \n +1000"
    //                            onClicked: {
    //                                perodic_interval+=1000
    //                                platformInterface.commands.my_cmd_simple_periodic_update.update(true,perodic_interval,-1)
    //                            }
    //                        }
    //                    }
    //                }
    //            }
    //        }
    //        Rectangle {
    //            Layout.fillHeight: true
    //            Layout.fillWidth: true
    //            color: "light gray"
    //            ScrollView {
    //                id: frame2
    //                clip: true
    //                anchors.fill: parent
    //                //other properties
    //                ScrollBar.vertical.policy: ScrollBar.AsNeeded
    //                SGText {
    //                    anchors.fill: parent
    //                    text: {
    //                        if(graphTimerAxis.running === true)
    //                            "Send: \n" + JSON.stringify(my_cmd_simple_start_periodic_obj,null,4) +
    //                                    "\n Recevied: \n " + JSON.stringify(obj, null, 4)

    //                        else
    //                            "Send: \n" + JSON.stringify(my_cmd_simple_stop_periodic_obj,null,4) +
    //                                    "\n Recevied: \n " + JSON.stringify(obj, null, 4)
    //                    }
    //                }
    //            }
    //        }
    //        Rectangle {
    //            Layout.fillHeight: true
    //            Layout.fillWidth: true
    //            ColumnLayout {
    //                anchors.fill: parent
    //                RowLayout{
    //                    Layout.fillHeight: true
    //                    Layout.fillWidth: true
    //                    Rectangle{
    //                        Layout.fillHeight: true
    //                        Layout.fillWidth: true
    //                        SGAlignedLabel {
    //                            id: infoBoxLabel
    //                            target: infoBox
    //                            text: "infoBox"
    //                            font.bold: true
    //                            anchors.centerIn: parent
    //                            alignment: SGAlignedLabel.SideTopCenter

    //                            SGInfoBox {
    //                                id: infoBox
    //                                width: 55
    //                                text: platformInterface.notifications.my_cmd_complex_periodic.float_array_3dec.float_array_3dec_0
    //                            }
    //                        }

    //                    }
    //                    Rectangle{
    //                        Layout.fillHeight: true
    //                        Layout.fillWidth: true
    //                        SGAlignedLabel {
    //                            id: infoBox2Label
    //                            target: infoBox2
    //                            text: "infoBox2"
    //                            font.bold: true
    //                            anchors.centerIn: parent
    //                            alignment: SGAlignedLabel.SideTopCenter

    //                            SGInfoBox {
    //                                id: infoBox2
    //                                width: 55
    //                                text: platformInterface.notifications.my_cmd_complex_periodic.float_array_rval_4dec.float_array_rval_4dec_1
    //                            }
    //                        }
    //                    }

    //                    Rectangle{
    //                        Layout.fillHeight: true
    //                        Layout.fillWidth: true
    //                        SGAlignedLabel {
    //                            id: infoBox3Label
    //                            target: infoBox3
    //                            text: "infoBox3"
    //                            font.bold: true
    //                            anchors.centerIn: parent
    //                            alignment: SGAlignedLabel.SideTopCenter

    //                            SGInfoBox {
    //                                id: infoBox3
    //                                width: 55
    //                                text: platformInterface.notifications.my_cmd_complex_periodic.int_array_rval.int_array_rval_2
    //                            }
    //                        }
    //                    }
    //                }
    //                Rectangle{
    //                    Layout.fillHeight: true
    //                    Layout.fillWidth: true

    //                    /*
    //                      This version of SGStatusLogBox shows how it can be customized for delegates made up of selectable text.
    //                       This is more efficient for things like output logs (1000+ lines) than a single text component as listView caches out-of-view delegates.
    //                    */
    //                    SGStatusLogBoxSelectableText {
    //                        id: logBoxText
    //                        title: "Selectable Text Status Logs"
    //                        filterEnabled: false
    //                        height: parent.height
    //                        width: parent.width/1.5
    //                        anchors.centerIn: parent

    //                        Component.onCompleted: {
    //                            for (let i = 0; i < 10; i++){
    //                                logBoxText.append("Message " + i)
    //                            }
    //                        }
    //                    }
    //                }
    //            }

    //        }
    //        Rectangle {
    //            Layout.fillHeight: true
    //            Layout.fillWidth: true
    //            color: "light gray"
    //            ScrollView {
    //                id: frame
    //                clip: true
    //                anchors.fill: parent
    //                //other properties
    //                ScrollBar.vertical.policy: ScrollBar.AsNeeded

    //                SGText {
    //                    id: content
    //                    anchors.fill: parent
    //                    text: {
    //                        "Received:" + "\n" + JSON.stringify(obj1, null, 4)
    //                    }
    //                }
    //            }
    //        }
    //    }
}


