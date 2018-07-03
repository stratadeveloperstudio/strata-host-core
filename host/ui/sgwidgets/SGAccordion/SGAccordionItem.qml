import QtQuick 2.7
import QtQuick.Layouts 1.3

// SGAccordionItem is a clickable title bar that drops down an area that can be filled with items

// TODO - Faller 5/29/18: make title text and status icon responsive when title is long and accordion is narrow.

ColumnLayout {
    id: root
    spacing: 0
    Layout.fillWidth: true
    Layout.preferredHeight: titleBar.height + divider.height

    property alias body: body.sourceComponent

    property string title: "panel"
    property bool open: false
    property color dividerColor: accordionDividerColor
    property int dividerHeight: accordionDividerHeight
    property int openCloseTime: accordionOpenCloseTime
    property string statusIcon: accordionStatusIcon
    property color textColor: accordionTextColor
    property color bodyColor: accordionBodyColor
    property color headerOpenColorTop: accordionHeaderOpenColorTop
    property color headerOpenColorBottom: accordionHeaderOpenColorBottom
    property color headerClosedColorTop: accordionHeaderClosedColorTop
    property color headerClosedColorBottom: accordionHeaderClosedColorBottom

    onWidthChanged: {
        if (root.open) root.opener();
    }

    ParallelAnimation {
        id: closeContent
        NumberAnimation {
            target: container
            property: "implicitHeight";
            to: 0;
            duration: openCloseTime;
        }
        NumberAnimation {
            target: root
            property: "Layout.preferredHeight";
            to: titleBar.height + divider.height;
            duration: openCloseTime;
        }
    }

    ParallelAnimation {
        id: openContent
        NumberAnimation {
            target: container
            property: "implicitHeight";
            to: container.childrenRect.height;
            duration: openCloseTime;
        }
        NumberAnimation {
            target: root
            property: "Layout.preferredHeight";
            to: container.childrenRect.height + titleBar.height + divider.height;
            duration: openCloseTime;
        }
    }

    function opener() // opens instantly without animation
    {
        container.implicitHeight = container.childrenRect.height;
        root.Layout.preferredHeight = container.implicitHeight + titleBar.height+ divider.height;
    }

    function closer() // closes instantly without animation
    {
        container.implicitHeight = 0;
        root.Layout.preferredHeight = titleBar.height + divider.height;
    }

    Rectangle {
        id: titleBar
        Layout.fillWidth: true
        height: 30
        gradient:  Gradient {
            GradientStop { position: 0.0; color: root.open ? headerOpenColorTop : headerClosedColorTop }
            GradientStop { position: 1.0; color: root.open ? headerOpenColorBottom : headerClosedColorBottom }
        }

        Text {
            id: title
            anchors{
                fill: parent
                margins: 10
            }
            horizontalAlignment: Text.AlignLeft
            verticalAlignment: Text.AlignVCenter
            text: root.title
            color: root.textColor
        }

        Text {
            id: icon
            anchors{
                right: parent.right
                top: parent.top
                bottom: parent.bottom
                margins: 10
            }
            horizontalAlignment: Text.AlignRight
            verticalAlignment: Text.AlignVCenter
            text: statusIcon
            rotation: root.open ? 0 : "180"
            color: root.textColor
        }

        MouseArea {
            anchors { fill: parent }
            cursorShape: Qt.PointingHandCursor
            onClicked: {
                root.open = !root.open;
                root.open ? openContent.start() : closeContent.start();
            }
        }
    }

    // body of accordionItem
    Rectangle {
        id: container
        color: bodyColor
        Layout.fillWidth: true
        implicitHeight: root.open ? childrenRect.height : 0
        clip: true

        Component.onCompleted: {
            root.open ? root.opener() : root.closer(); // [Faller] size recalculated after body completed (textWrap doesn't calculate in order)
        }

        // Loads user defined widgets/content
        Loader {
            id: body
            width: root.width
        }
    }

    Rectangle {
        id: divider
        Layout.fillWidth: true
        color: dividerColor
        height: dividerHeight
    }
}
