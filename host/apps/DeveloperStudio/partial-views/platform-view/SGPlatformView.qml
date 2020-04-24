import QtQuick 2.12
import QtQuick.Layouts 1.12

import tech.strata.common 1.0

import "qrc:/js/navigation_control.js" as NavigationControl
import "qrc:/js/platform_selection.js" as PlatformSelection
import "qrc:/js/help_layout_manager.js" as Help

StackLayout {
    id: platformStack

    currentIndex: {
        switch (model.view) {
        case "collateral":
            return 1
        default: // case "control":
            return 0
        }
    }

    property alias controlContainer: controlContainer
    property alias collateralContainer: collateralContainer

    property bool connected: model.connected
    property bool controlLoaded: false

    onConnectedChanged: {
        loadControl()
    }

    Component.onCompleted: {
        loadControl()
    }

    Component.onDestruction: {
        if (controlLoaded) {
            NavigationControl.removeView(controlContainer)
        }
    }

    function loadControl () {
        if (model.connected && controlLoaded === false){
            Help.setClassId(model.class_id)
            let qml_control = NavigationControl.getQMLFile(model.class_id, "Control")
            NavigationControl.context.class_id = model.class_id
            let control = NavigationControl.createView(qml_control, controlContainer)
            delete NavigationControl.context.class_id
            if (control === null) {
                NavigationControl.createView(NavigationControl.screens.LOAD_ERROR, controlContainer)
            }
            controlLoaded = true
        }
    }

    Item {
        id: controlContainer
        Layout.fillHeight: true
        Layout.fillWidth: true
    }

    Item {
        id: collateralContainer
        Layout.fillHeight: true
        Layout.fillWidth: true

        ContentView {}
    }
}