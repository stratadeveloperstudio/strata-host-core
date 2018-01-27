import QtQuick 2.0
import QtQuick.Controls 2.0

Button {
    id: middleButton
    property var tabName
    checkable: true
    width:100
    height:40

    background: Canvas{
        id:middleButtonCanvas
        anchors.fill:parent
        onPaint:{
            //console.log("repainting")
            var ctx = getContext("2d");
            var theFillColor = parent.checked ? "grey" :"lightgrey"
            var eighthWidth = parent.width/8
            var theLineWidth = 1
            var theLeft = 0
            var theTop = theLineWidth
            var theBottom = height - theLineWidth
            ctx.fillStyle = theFillColor
            ctx.beginPath();
            ctx.moveTo(theLeft, theTop)
            ctx.moveTo(width,theTop);
            ctx.lineTo(width,theBottom);
            ctx.lineTo(theLeft,theBottom);
            ctx.lineTo(theLeft,theTop);
            ctx.closePath();
            ctx.fill(); //fill the outline with grey
            ctx.stroke();   //stroke the outside with black
        }
    }

    onCheckedChanged: {
        middleButtonCanvas.requestPaint()
    }

    function createTab(inTabName, inParent){
        var component  = Qt.createComponent(inTabName);
        var object = component.createObject(inParent);
        return object
    }

    Component.onCompleted: {
        tabName = createTab(tabName,contentRectangle);
    }

}
