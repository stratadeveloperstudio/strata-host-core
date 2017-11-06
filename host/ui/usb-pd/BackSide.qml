import QtQuick 2.0
import QtQuick.Controls 2.0

Rectangle {
    border.color: "black"
    anchors { fill: parent }
    
//    Label {
//        x: 32 ; y: 128
//        width: 176;height: 64
//        text: "back"
//        opacity: 1
//        anchors { horizontalCenter: parent.horizontalCenter; verticalCenter: parent.verticalCenter }
//        font.pointSize: 72
//    }
    
    SwipeView {
        id: swipeView
        anchors{ fill: parent }
        currentIndex: tabBar.currentIndex
        PageBlockDiagram { id: pageBlockDiagram }
        PageSchematic { id: pageSchematic }
        PageLayout { id: pageAssembly }
        PageTestReport { id: pageTestReport }
        PageSystemContent {id: pageSystemContent}
        //PageAssociatedCollateral {id: pageAssociatedCollateral}
    }
    
    TabBar {
        id: tabBar
        width: parent.width - flipButton.width
        currentIndex: swipeView.currentIndex
        anchors { bottom: parent.bottom;}
        TabButton { text: "Block Diagram" }
        TabButton { text: "Schematic" }
        TabButton { text: "Assembly" }
        TabButton { text: "Test Report" }
        TabButton { text: "System Content" }
        //TabButton { text: "Related Material" }
    }
    
    Image {
        id: flipButton
        source:"backIcon.svg"
        anchors { bottom: parent.bottom; right: parent.right }
        height: 40;width:40
    }
    
    MouseArea {
        width: flipButton.width; height: flipButton.height
        anchors { bottom: parent.bottom; right: parent.right }
        visible: true
        onClicked: flipable.flipped = !flipable.flipped
    }
}
