import QtQuick 2.12
import tech.strata.sgwidgets 1.0 as SGWidgets

Item {
    id: control

    width: (sizeByMask ? metrics.boundingRect.width: tagText.contentWidth) + 8
    height: (sizeByMask ? metrics.boundingRect.height : tagText.contentHeight) + 8

    property alias text: tagText.text
    property alias radius: tagBackground.radius
    property alias color: tagBackground.color

    property bool sizeByMask: false
    property alias mask: metrics.text

    TextMetrics {
        id: metrics
        font: tagText.font
    }

    Rectangle {
        id: tagBackground
        anchors.fill: parent
        radius: 2
        color: SGWidgets.SGColorsJS.TANGO_BUTTER1
    }

    SGWidgets.SGText {
        id: tagText
        anchors {
            verticalCenter: parent.verticalCenter
            left: parent.left
            leftMargin: 4
        }
    }
}