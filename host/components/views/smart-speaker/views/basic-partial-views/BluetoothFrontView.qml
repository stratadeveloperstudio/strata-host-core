import QtQuick 2.10
import QtQuick.Controls 2.2
import tech.strata.sgwidgets 0.9

Rectangle {
    id: front
    width: 200
    height:200
    color:"dimgray"
    opacity:1
    radius: 10

    property string pairedDevice
    property var bluetoothPairing: platformInterface.bluetooth_pairing

    onBluetoothPairingChanged: {
        console.log("bluetooth pairing changed. New value:", platformInterface.bluetooth_pairing.id);
        if (platformInterface.bluetooth_pairing.value === "paired"){
            pairedDevice = platformInterface.bluetooth_pairing.id
            }
          else
            pairedDevice = "not connected"
    }



    Image {
        id: bluetoothIcon
        height:3*parent.height/4
        fillMode: Image.PreserveAspectFit
        //width:parent.height/4
        mipmap:true
        anchors.top:parent.top
        anchors.topMargin: 15
        anchors.horizontalCenter: parent.horizontalCenter
        source:"../images/icon-bluetooth.svg"

    }

    Text{
        id:connectedDeviceText
        text: front.pairedDevice
        color:"white"
        font.pixelSize: 24
        anchors.top:bluetoothIcon.bottom
        anchors.horizontalCenter: parent.horizontalCenter

        onTextChanged: {
            console.log("bluetooth text changed to",text)
        }
    }
}

