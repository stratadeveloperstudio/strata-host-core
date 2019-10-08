import QtQuick 2.9
import QtQuick.Layouts 1.3
import QtQuick.Controls 2.3
import tech.strata.sgwidgets 0.9

import "qrc:/js/help_layout_manager.js" as Help

Rectangle {
    id: intensitycontrol

    SGAccordion {
        id: accordion
        anchors.fill: parent

        accordionItems: Column {
            SGAccordionItem {
                id: led1
                title: "<b>LED1 String</b>"
                open: true
                contents: IntensityControl_led1 {
                    height: text1.contentHeight + 300
                    width: parent.width

                    Text {
                        id: text1
                        anchors.fill: parent
                    }
                }
            }

            SGAccordionItem {
                id: led2
                title: "<b>LED2 String</b>"
                contents: IntensityControl_led2 {
                    height: text2.contentHeight + 300
                    width: parent.width

                    Text {
                        id: text2
                        anchors.fill: parent
                    }
                }
            }

            SGAccordionItem {
                id: led3
                title: "<b>LED3 String</b>"
                contents: IntensityControl_led3 {
                    height: text3.contentHeight + 300
                    width: parent.width

                    Text {
                        id: text3
                        anchors.fill: parent
                    }
                }
            }

            SGAccordionItem {
                id: led4
                title: "<b></b>"
                open: true
                contents: IntensityControl_switch {
                    height: text4.contentHeight +200
                    width: parent.width

                    Text {
                        id: text4
                        anchors.fill: parent
                    }
                }
            }
        }
    }

//    Component.onCompleted:  {
//        Help.registerTarget(text1, "Selcect LED string by tab.", 3, "Help2")
//    }
}
