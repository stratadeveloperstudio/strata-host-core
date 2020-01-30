import QtQuick 2.7
import QtQuick.Layouts 1.3
import QtQuick.Controls 2.3
import QtGraphicalEffects 1.0
import QtQuick.Controls.Styles 1.4
import QtQuick.Extras 1.4
import tech.strata.sgwidgets 1.0
import "qrc:/js/navigation_control.js" as NavigationControl
import "control-views"
import "qrc:/js/help_layout_manager.js" as Help
import tech.strata.fonts 1.0

Item {
    id: controlNavigation
    anchors {
        fill: parent
    }

    PlatformInterface {
        id: platformInterface
    }

    Component.onCompleted: {
        //helpIcon.visible = true
        // Help.registerTarget(navTabs, "Using these two tabs, you can switch between basic or advanced control.", 0,"basic15AHelp")
    }

    TabBar {
        id: navTabs
        anchors {
            top: controlNavigation.top
            left: controlNavigation.left
            right: controlNavigation.right
        }

//        TabButton {
//            id: basicButton
//            text: qsTr("Basic")
//            onClicked: {
//                basicControl.visible = true
//                advancedControl.visible = false
//            }
//        }

        //        TabButton {
        //            id: advancedButton
        //            text: qsTr("Advanced")
        //            onClicked: {
        //                basicControl.visible = false
        //                advancedControl.visible = true
        //            }
        //        }
    }

    StackLayout {
        id: controlContainer
        anchors {
            top: navTabs.bottom
            bottom: controlNavigation.bottom
            right: controlNavigation.right
            left: controlNavigation.left
        }
        currentIndex: navTabs.currentIndex

        BasicControl {
            id: basicControl
            visible: true
            Layout.preferredHeight: parent.height
            Layout.preferredWidth: parent.width
            Layout.margins: 10
        }

        //        Rectangle {
        //            width: parent.width
        //            height: parent.height
        //            color: "light gray"
        //            AdvancedControl {
        //                id: advancedControl
        //                visible: false
        //                width: parent.width
        //                height: parent.height
        //            }
        //        }
    }

    //    SGIcon {
    //        id: helpIcon
    //        anchors {
    //            right: parent.right
    //            rightMargin: 20
    //            top: parent.top
    //            topMargin: 50
    //        }
    //        source: "question-circle-solid.svg"
    //        iconColor: helpMouse.containsMouse ? "lightgrey" : "grey"
    //        height: 40
    //        width: 40
    //        visible: true

    //        MouseArea {
    //            id: helpMouse
    //            anchors {
    //                fill: helpIcon
    //            }
    //            onClicked: {
    //                if(basicControl.visible === true) {
    //                    Help.startHelpTour("basic15AHelp")
    //                }
    //                else if(advancedControl.visible === true) {
    //                    Help.startHelpTour("advance15AHelp")
    //                }
    //                else console.log("help not available")
    //            }
    //            hoverEnabled: true
    //        }
    //    }
}
