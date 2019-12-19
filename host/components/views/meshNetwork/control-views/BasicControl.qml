import QtQuick 2.12
import QtQuick.Window 2.2
import QtGraphicalEffects 1.0
import QtQuick.Dialogs 1.3
import QtQuick.Controls 2.3
import QtQuick.Layouts 1.3


Rectangle {
    id: root
    visible: true
    //anchors.fill:parent


    property int objectWidth: 50
    property int objectHeight: 50
    property int nodeWidth: 32
    property int nodeHeight: 32
    property int highestZLevel: 1
    property int numberOfNodes: 8
    signal changeObjectSize(int objectSize);

    property real backgroundCircleRadius: root.width/4
    property int meshObjectCount:0
    property variant meshObjects
    property var dragTargets:[]


    Image{
        id:officeImage
        source:"../images/office.png"
        anchors.left:parent.left
        anchors.horizontalCenter: parent.horizontalCenter
        fillMode: Image.PreserveAspectFit
        height:parent.height
        mipmap:true
        opacity:1

        property var triggered: platformInterface.alarm_triggered
        onTriggeredChanged: {
            console.log("alarm triggered=",platformInterface.alarm_triggered.triggered)
            if (platformInterface.alarm_triggered.triggered === "true"){
                alarmTimer.start()
            }
            else{
                alarmTimer.stop()
                officeImage.source = "../images/office.png"
            }
        }

        Timer{
            //this should cause the images to alternate between the view with the
            //back door open, and the view with the back door open and the red light on
            id:alarmTimer
            interval:1000
            triggeredOnStart: true
            repeat:true

            property var redLightOn: true

            onTriggered:{
                if (redLightOn){
                    officeImage.source = "../images/office_doorOpen.png"
                }
                else{
                    officeImage.source = "../images/office_alarmOn.png"
                }
                redLightOn = !redLightOn;
            }

            onRunningChanged:{
                if (!running){
                    redLightOn = true;
                }
            }
        }

        Row{
            id:meshObjectRow
            anchors.horizontalCenter: parent.horizontalCenter
            anchors.top:parent.top
            anchors.topMargin: 50
            spacing: 20.0

            function clearPairings(){
                //console.log("clearing pairings")
                mesh1.pairingModel = ""
                mesh2.pairingModel = ""
                mesh3.pairingModel = ""
                mesh4.pairingModel = ""
                mesh5.pairingModel = ""
                mesh6.pairingModel = ""
                mesh7.pairingModel = ""
                mesh8.pairingModel = ""
            }

            property var meshArray: [provisioner,mesh1, mesh2,mesh3,mesh4,mesh5,mesh6,mesh7]
            property var initialNodeVisibilityColors: platformInterface.network_notification
            onInitialNodeVisibilityColorsChanged:{

                //iterate over the nodes in the notification
                console.log(platformInterface.network_notification.nodes.length)
                for (var alpha = 0;  alpha < platformInterface.network_notification.nodes.length  ; alpha++){
                    //for each node that is marked visible set the visibilty of the node appropriately
                    console.log("setting color for node",alpha);
                    if (platformInterface.network_notification.nodes[alpha].available === 0){
                        console.log("node", alpha ,"not available")
                        meshArray[alpha].opacity = 0.5
                        meshArray[alpha].enabled = false
                        meshArray[alpha].color = "lightgrey"

                    }
                    else {
                        meshArray[alpha].opacity = 1.0
                        meshArray[alpha].enabled = true
                        meshArray[alpha].color = platformInterface.network_notification.nodes[alpha].color
                    }

                    //seting the color based on notification colors.

                }
            }

            property var newNodeAdded: platformInterface.node_added
            onNewNodeAddedChanged: {
                var theNodeNumber = platformInterface.node_added.node_id
                console.log(theNodeNumber)
                meshArray[theNodeNumber].opacity = 1
                meshArray[theNodeNumber].color = platformInterface.node_added.color
            }

            property var nodeRemoved: platformInterface.node_removed
            onNodeRemovedChanged: {
                var theNodeNumber = platformInterface.node_removed.node_id
                meshArray[theNodeNumber].opacity = 0
            }

            MeshObject{ id: mesh7; objectName: "one"; pairingModel:"security"}
            MeshObject{ id: mesh6; objectName: "two"; pairingModel:"doorbell" }
            MeshObject{ id: mesh4; objectName: "three"; pairingModel:"alarm"}
            MeshObject{ id: mesh2; objectName: "four"; pairingModel:"switch" }
            ProvisionerObject{ id: provisioner }
            MeshObject{ id: mesh1; objectName: "five"; pairingModel:"temperature"}
            MeshObject{ id: mesh3; objectName: "six" ; pairingModel:"light"}
            MeshObject{ id: mesh5; objectName: "seven"; pairingModel:"voltage"}
        }
    }

    NodeConnector{
        id:nodeConnector
        anchors.left:dragTargetContainer.left
        anchors.right:dragTargetContainer.right
        anchors.top:dragTargetContainer.top
        height: dragTargetContainer.height
        visible:false

        dragObjects: dragTargets

        Connections{
            target: sensorRow
            onShowMesh:{
                nodeConnector.visible = true
            }
            onHideMesh:{
                nodeConnector.visible = false
            }
        }
    }


    Rectangle{
        id:dragTargetContainer
        anchors.fill:officeImage
        color:"transparent"
        property var targetPair:[]

        Component.onCompleted: {
            //add the dragTarget pairs to an array that can be used to draw lines between them
            //programatically
            targetPair =[target1, target2];
            dragTargets.push(targetPair);
            targetPair =[target1, target3];
            dragTargets.push(targetPair);
            targetPair =[target1, target4];
            dragTargets.push(targetPair);
            targetPair =[target2, target3];
            dragTargets.push(targetPair);
            targetPair =[target3, target4];
            dragTargets.push(targetPair);
            targetPair =[target3, target6];
            dragTargets.push(targetPair);
            targetPair =[target4, target5];
            dragTargets.push(targetPair);
            targetPair =[target5, target6];
            dragTargets.push(targetPair);
            targetPair =[target5, target8];
            dragTargets.push(targetPair);
            targetPair =[target6, target8];
            dragTargets.push(targetPair);
            targetPair =[target7, target8];
            dragTargets.push(targetPair);
        }

        function clearPairings(){
            target1.color = "transparent"
            target2.color = "transparent"
            target3.color = "transparent"
            target4.color = "transparent"
            //target5.color = "transparent" //this is the provisioner, which should always stay green
            target6.color = "transparent"
            target7.color = "transparent"
            target8.color = "transparent"
        }

        //TODO: prevent a node from being dragged to a node that's already linked without unlinking the first one
        //        Connections{
        //            target: DragTarget
        //                onClearTargetsOfColor:{
        //                    //color and name are passed in to this funciton by clearTargetsOfColor
        //                    var dragObjects = [target1, target2, target3, target4, target5, target6, target7, target8];
        //                    for (var i = 0; i< dragObjects.length; i++){        //iterate over the drag targets
        //                        var theObject = dragObjects[i];
        //                        if (theObject.objectName !== "name"){           //if the name doesn't match
        //                            if (theObject.color === inColor){             //check the object's color
        //                                console.log("changing color of",name,"to transparent");
        //                                theObject.color ="transparent"          //if the color is the same as the color passed
        //                            }                                           //then change it to transparent
        //                        }
        //                    }
        //                }
        //        }

        DragTarget{
            //security camera upper left
            id:target1
            objectName:"target1"
            anchors.left:parent.left
            anchors.leftMargin: parent.width * 0.05
            anchors.top:parent.top
            anchors.topMargin: parent.height * .35
            nodeType:"security"
            color:mesh7.color
        }

        DragTarget{
            //left of the back door
            id:target2
            objectName:"target2"
            anchors.left:parent.left
            anchors.leftMargin: parent.width * .19
            anchors.top:parent.top
            anchors.topMargin: parent.height * .62
            nodeType: "doorbell"
            color:mesh6.color
        }

        DragTarget{
            //on the back door
            id:target3
            objectName:"target3"
            anchors.left:parent.left
            anchors.leftMargin: parent.width * .26
            anchors.top:parent.top
            anchors.topMargin: parent.height * .57
            nodeType:"alarm"
            color:mesh4.color
        }
        DragTarget{
            //right of front door
            id:target4
            objectName:"target4"
            anchors.left:parent.left
            anchors.leftMargin: parent.width * .45
            anchors.top:parent.top
            anchors.topMargin: parent.height * .37
            nodeType:"switch"
            color:mesh2.color
        }
        DragTarget{
            //provisioning node
            id:target5
            objectName:"provisioner"
            anchors.left:parent.left
            anchors.leftMargin: parent.width * .65
            anchors.top:parent.top
            anchors.topMargin: parent.height * .37
            nodeType:"provisioner"
            color:"green"
            acceptsDrops: false
        }
        DragTarget{
            //robot arm
            id:target6
            objectName:"target6"
            anchors.left:parent.left
            anchors.leftMargin: parent.width * .63
            anchors.top:parent.top
            anchors.topMargin: parent.height * .53
            nodeType:"unknown"
            color:mesh1.color
        }

        DragTarget{
            //roof fan
            id:target7
            objectName:"target7"
            anchors.left:parent.left
            anchors.leftMargin: parent.width * .80
            anchors.top:parent.top
            anchors.topMargin: parent.height * .27
            nodeType:"remote"
            color:mesh5.color
        }
        DragTarget{
            //solar panel
            id:target8
            objectName:"target8"
            anchors.left:parent.left
            anchors.leftMargin: parent.width * .80
            anchors.top:parent.top
            anchors.topMargin: parent.height * .47
            nodeType:"voltage"
            color:mesh3.color
        }

    }


    SensorRow{
        id:sensorRow
        anchors.horizontalCenter: parent.horizontalCenter
        anchors.bottom:parent.bottom
        anchors.bottomMargin: 50
        height:50
    }

    onChangeObjectSize:{
        console.log("changing object size to",objectSize)
        mesh1.height = objectSize;
        mesh1.width = objectSize;
        mesh1.radius = objectSize/2

        mesh2.height = objectSize;
        mesh2.width = objectSize;
        mesh2.radius = objectSize/2

        mesh3.height = objectSize;
        mesh3.width = objectSize;
        mesh3.radius = objectSize/2

        mesh4.height = objectSize;
        mesh4.width = objectSize;
        mesh4.radius = objectSize/2

        mesh5.height = objectSize;
        mesh5.width = objectSize;
        mesh5.radius = objectSize/2

        mesh6.height = objectSize;
        mesh6.width = objectSize;
        mesh6.radius = objectSize/2

        mesh7.height = objectSize;
        mesh7.width = objectSize;
        mesh7.radius = objectSize/2

        mesh8.height = objectSize;
        mesh8.width = objectSize;
        mesh8.radius = objectSize/2

        provisioner.height = objectSize;
        provisioner.width = objectSize;
        provisioner.radius = objectSize/2

        target1.height = objectSize
        target1.width = objectSize
        target1.radius = objectSize/2

        target2.height = objectSize
        target2.width = objectSize
        target2.radius = objectSize/2


        target3.height = objectSize
        target3.width = objectSize
        target3.radius = objectSize/2

        target4.height = objectSize
        target4.width = objectSize
        target4.radius = objectSize/2

        target5.height = objectSize
        target5.width = objectSize
        target5.radius = objectSize/2

        target6.height = objectSize
        target6.width = objectSize
        target6.radius = objectSize/2

        target7.height = objectSize
        target7.width = objectSize
        target7.radius = objectSize/2

        target8.height = objectSize
        target8.width = objectSize
        target8.radius = objectSize/2

        //doesn't redraw well. What's the secret?
        nodeConnector.canvas.requestPaint();
    }


}
