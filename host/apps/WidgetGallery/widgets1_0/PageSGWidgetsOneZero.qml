import QtQuick 2.12
import QtQuick.Controls 2.12
import tech.strata.sgwidgets 1.0 as SGWidgets

FocusScope {

    ListModel {
        id: widgetModel

        ListElement {
            name: "SGButton"
            page: "ExSGButton.qml"
        }

        ListElement {
            name: "SGButtonStrip"
            page: "ExSGButtonStrip.qml"
        }

        ListElement {
            name: "SGTextField"
            page: "ExSGTextField.qml"
        }

        ListElement {
            name: "Dialogs"
            page: "ExDialogs.qml"
        }
    }

    Component.onCompleted: {
        //select the first example by default
        buttonRepeater.itemAt(0).checked = true
        setPage(0)
    }

    Item {
        id: header
        height: headerText.contentHeight + 10
        anchors {
            left: parent.left
            right: parent.right
        }

        Item {
            id: goBackWrapper
            anchors {
                verticalCenter: parent.verticalCenter
                left: parent.left
            }

            width: sidePane.width
            height: parent.height

            Rectangle {
                anchors.fill: parent
                color: SGWidgets.SGColorsJS.STRATA_BLUE
            }

            SGWidgets.SGIconButton {
                id: goBackButtom
                anchors {
                    left: parent.left
                    leftMargin: 4
                    verticalCenter: parent.verticalCenter
                }

                icon.source: "qrc:/sgimages/chevron-left.svg"
                backgroundOnlyOnHovered: true
                iconColor: "white"
                highlightImplicitColor: SGWidgets.SGColorsJS.STRATA_GREEN

                onClicked: {
                    pop()
                }
            }

            SGWidgets.SGText {
                anchors {
                    left: goBackButtom.right
                    leftMargin: 10
                    verticalCenter: parent.verticalCenter
                }

                text: "SGWidgets 1.0"
                fontSizeMultiplier: 1.4
                color: "white"
            }
        }

        Item {
            anchors {
                left: goBackWrapper.right
                leftMargin: 1
                right: parent.right
            }

            height: parent.height

            Rectangle {
                anchors.fill: parent
                color: SGWidgets.SGColorsJS.STRATA_BLUE
            }

            SGWidgets.SGText {
                id: headerText
                anchors.centerIn: parent

                fontSizeMultiplier: 2.0
                color: "white"
            }
        }
    }

    FocusScope {
        id: sidePane
         width: flick.width
        anchors {
            top: header.bottom
            bottom: parent.bottom
            left: parent.left
        }

        ButtonGroup {
            id: group
        }

        Rectangle {
            anchors.fill: parent
            color: SGWidgets.SGColorsJS.STRATA_BLUE
        }

        Flickable {
            id: flick
            width: widgetList.width
            anchors {
                top: parent.top
                bottom: parent.bottom
                margins: 6
            }

            contentWidth: widgetList.width
            contentHeight: widgetList.height
            boundsBehavior: Flickable.StopAtBounds
            clip: true

            Column {
                id:  widgetList

                spacing: 4

                Repeater {
                    id: buttonRepeater
                    model: widgetModel

                    delegate: Item {
                        id: delegate

                        width: delegateButton.width + 12
                        height: delegateButton.height

                        property alias checked: delegateButton.checked

                        SGWidgets.SGButton {
                            id: delegateButton
                            anchors {
                                horizontalCenter: parent.horizontalCenter
                            }

                            text: model.name
                            fontSizeMultiplier: 1.5
                            checkable: true
                            ButtonGroup.group: group
                            minimumContentWidth: 180
                            color: SGWidgets.SGColorsJS.STRATA_GREEN

                            onClicked: {
                                setPage(index)
                            }
                        }
                    }
                }
            }
        }
    }

    Flickable {
        id: flickWrapper
        anchors {
            left: sidePane.right
            leftMargin: 10
            right: parent.right
            top: header.bottom
            topMargin: 10
            bottom: parent.bottom
            margins: 4
        }

        contentWidth: pageLoader.width
        contentHeight: pageLoader.height
        clip: true
        boundsBehavior: Flickable.StopAtBounds

        ScrollBar.vertical: ScrollBar {
            policy: ScrollBar.AlwaysOn
            visible: flickWrapper.height < flickWrapper.contentHeight
        }

        ScrollBar.horizontal: ScrollBar {
            policy: ScrollBar.AlwaysOn
            visible: flickWrapper.width < flickWrapper.contentWidth
        }

        Loader {
            id: pageLoader
        }
    }

    function setPage(index) {
        var item = widgetModel.get(index)
        headerText.text = item.name
        pageLoader.source =  item.page
    }

    function pop() {
        StackView.view.pop()
    }
}