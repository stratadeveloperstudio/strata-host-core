import QtQuick 2.12
import QtQuick.Layouts 1.12
import QtQuick.Controls 2.3
import QtQuick.Window 2.0
import QtQuick.Dialogs 1.3
import QtWebEngine 1.8
import QtWebChannel 1.0

import tech.strata.sgwidgets 1.0
import tech.strata.fonts 1.0

Item {
    id: fileContainerRoot
    Layout.fillHeight: true
    Layout.fillWidth: true

    property int modelIndex: index
    property string file: model.filename
    property string fileText

    Component.onCompleted: {
        channel.registerObject("valueLink", channelObject)
    }

    Component.onDestruction: {
        saveFile(model.filename, fileText)
    }

    function openFile(fileUrl) {
        var request = new XMLHttpRequest();
        request.open("GET", fileUrl, false);
        request.send(null);
        return request.responseText;
    }

    function saveFile(fileUrl, text) {
        var request = new XMLHttpRequest();
        request.open("PUT", fileUrl, false);
        request.send(text);
        return request.status;
    }

    Connections{
        target: saveButton
        onClicked: saveFile(model.filepath,fileText)
    }

    WebChannel {
        id: channel
    }

    QtObject {
        id: channelObject
        objectName: "fileChannel"

        signal setValue(string value);

        function setHtml(value) {
            setValue(value)
        }

        function setFileText(value) {
            fileText = value;
        }
    }

    WebEngineView {
        id: webEngine

        webChannel: channel
        settings.localContentCanAccessRemoteUrls: false
        settings.localContentCanAccessFileUrls: true
        settings.localStorageEnabled: true

        settings.errorPageEnabled: false
        settings.javascriptCanOpenWindows: false
        settings.javascriptEnabled: true
        settings.javascriptCanAccessClipboard: true
        settings.pluginsEnabled: true

        anchors.fill: parent

        onLoadingChanged: {
            if (loadRequest.status === WebEngineLoadRequest.LoadSucceededStatus) {
                webEngine.runJavaScript("setContainerHeight(%1)".replace("%1", parent.height), function result(result) {
                    console.info(result)
                });
                fileText = openFile(model.filepath)
                channelObject.setHtml(fileText)
            }
        }

        url: "qrc:///partial-views/control-view-creator/editor.html"

    }
}

