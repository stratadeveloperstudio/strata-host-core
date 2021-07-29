import QtQuick 2.12
import QtQuick.Controls 2.12
import QtQuick.Layouts 1.12

import tech.strata.sgwidgets 1.0
import tech.strata.theme 1.0

import "components/"

Item {
    id: root

    width: 0
    visible: debugMenuSource.toString() !== ""

    readonly property bool expanded: width > 0 && visible
    readonly property int minimumExpandWidth: 400

    property url debugMenuSource: editor.fileTreeModel.debugMenuSource
    property int expandWidth: minimumExpandWidth
    property alias mainContainer: mainContainer
    property real rectWidth: 400

    anchors.top: parent.top
    anchors.right: parent.right

    Rectangle {
        id: mainContainer
        width: Math.min(parent.width, rectWidth)
        height: parent.height
        anchors.right: parent.right
        color: "lightgrey"
        visible: width > 0
        clip: true

        Rectangle {
            id: topBar
            width: parent.width
            height: 30
            anchors.top: parent.top
            color: "#444"

            RowLayout {
                anchors.fill: parent

                Item {
                    Layout.fillWidth: true
                    Layout.fillHeight: true
                }

                SGControlViewIconButton {
                    id: openWindow
                    Layout.preferredHeight: 30
                    Layout.preferredWidth: 30
                    source:  "qrc:/sgimages/sign-in.svg"

                    onClicked:  {
                        debugMenuWindow = !debugMenuWindow
                        root.parent = newWindowDebugMenuLoader.item.consoleLogParent
                    }
                }

                SGControlViewIconButton {
                    Layout.preferredHeight: 30
                    Layout.preferredWidth: 30
                    source: "qrc:/sgimages/times.svg"
                    Layout.alignment: Qt.AlignRight

                    onClicked:  {
                        debugPanel.collapse()
                    }
                }
            }
        }

        Loader {
            anchors.top: topBar.bottom
            width: parent.width
            height: parent.height - topBar.height
            source: root.debugMenuSource
        }
    }

    Item {
        id: topWall
        y: 0
        width: 4
        height: parent.height + 5
        z:3

        Binding {
            target: topWall
            property: "x"
            value: root.width - mainContainer.width - topWall.width
            when: mouseArea.drag.active === false

        }
        onXChanged: {
            if(mouseArea.drag.active) {
                rectWidth = parent.width - x
            }
        }
    }

    MouseArea {
        id: mouseArea
        anchors.fill: topWall
        drag.target: topWall
        drag.minimumY: 0
        drag.maximumY: 0
        drag.minimumX: 0
        drag.maximumX: (parent.width - 30)
        cursorShape: Qt.SplitHCursor
    }

    NumberAnimation {
        id: collapseAnimation
        target: root
        property: "width"
        duration: 200
        easing.type: Easing.InOutQuad
        to: 0
    }

    NumberAnimation {
        id: expandAnimation
        target: root
        property: "width"
        duration: 200
        easing.type: Easing.InOutQuad
        to: root.expandWidth
    }

    function expand() {
        expandAnimation.start()
    }

    function collapse() {
        collapseAnimation.start()
    }
}
