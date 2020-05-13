import QtQuick 2.12
import QtQuick.Controls 2.12
import QtGraphicalEffects 1.12

Slider {
    id: root
    padding: 0
    value: 0
    height: 28
    width: 300
    live: false
    signal userSet()

    property var rgbArray: hToRgb(value)
    property string color: "yellow"
    property int color_value: 0
    property real slider_start_color: 0
    property real slider_start_color2 : 1

    property int decimalPlacesFromStepSize: {
        return (Math.floor(root.stepSize) === root.stepSize) ?  0 :
               root.stepSize.toString().split(".")[1].length || 0
    }

    function userInput(value) {
        console.log(root.value, value)
        value = parseFloat(value).toFixed(root.decimalPlacesFromStepSize)
        if (root.value != value) { //@disable-check M126
            root.value = value
            userSet()

        }
        else if(root.value === root.to || root.value === root.from){
            console.log("1",root.value, value)
            root.value = value
            userSet()
        }
    }

    onPressedChanged: {
        if (!pressed) {
            if (value.toFixed(decimalPlacesFromStepSize) != root.value) {
                root.userInput(value.toFixed(decimalPlacesFromStepSize))
            }
        }
    }
    onValueChanged: {
        root.userInput(value)
    }
    background: Rectangle {
        y: 4
        x: 5
        width: root.width-10
        height: root.height-8
        radius: 5
        layer.enabled: true
        layer.effect: LinearGradient {
            start: Qt.point(0, 0)
            end: Qt.point(0, height)
            gradient: Gradient {
                GradientStop { position: 0.0; color: Qt.hsva(slider_start_color,slider_start_color2,1,1) }
                GradientStop { position: 1.0; color: Qt.hsva(0.0,1,0,1) }
            }
        }
    }

    //    handle: Item {
    //        id: handle
    //        x: root.leftPadding + root.visualPosition * (root.availableWidth - width)
    //        y: 0
    //        width: 12
    //        height: root.height

    //        Canvas {
    //            z:50
    //            visible: true
    //            implicitWidth: handle.width
    //            implicitHeight: handle.height
    //            contextType: "2d"

    //            onPaint: {
    //                var context = getContext("2d")
    //                context.reset();
    //                context.lineWidth = 1
    //                context.strokeStyle = "#888"
    //                context.fillStyle = "#eee";

    //                context.beginPath();
    //                context.moveTo(0, 0);
    //                context.lineTo(width, 0);
    //                context.lineTo(width, 7);
    //                context.lineTo(width/2, 12);
    //                context.lineTo(0, 7);
    //                context.lineTo(0, 0);

    //                context.moveTo(0, height);
    //                context.lineTo(width, height);
    //                context.lineTo(width, height-7);
    //                context.lineTo(width/2, height-12);
    //                context.lineTo(0, height-7);
    //                context.closePath();
    //                context.fill();
    //                context.stroke();
    //            }
    //        }
    //    }

//    onValueChanged: {
//        root.rgbArray = hToRgb(root.value)
//        if (rgbArray[0] !== '0') {
//            color = "red"
//            color_value = rgbArray[0]
//        } else if (rgbArray[1] !== '0') {
//            color = "green"
//            color_value = rgbArray[1]
//        } else {
//            color = "blue"
//            color_value = rgbArray[2]
//        }
//    }

    // Dumbed down version of hsvToRgb function to match simpler RGB gradient slider
    function hToRgb(h){
        var r, g, b;

        var i = Math.floor(h * 3);
        var f = h * 3 - i;
        var q = 1 - f;
        if (i < 3){
            switch(i % 3){
            case 0: r = q; g = 0; b = 0; break;
            case 1: r = 0; g = q; b = 0; break;
            case 2: r = 0; g = 0; b = q; break;
            }
        } else {
            r = 0; g = 0; b = 0;
        }

        return [(r * 255).toFixed(0), (g * 255).toFixed(0), (b * 255).toFixed(0)];
    }
}
