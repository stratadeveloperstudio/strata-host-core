import QtQuick 2.12
import QtQuick.Layouts 1.3
import QtQuick.Controls 2.12

import tech.strata.sgwidgets 1.0
import tech.strata.commoncpp 1.0

import "ConsoleMessages"

Item {
    id: root
    width: parent.width
    height: parent.height

    property double fontMultiplier: 1.3
    property string searchText: ""

    onFontMultiplierChanged: {
        if(fontMultiplier >= 2.5){
            fontMultiplier = 2.5
        } else if(fontMultiplier <= 0.8){
            fontMultiplier = 0.8
        }
    }

    onSearchTextChanged: {
        consoleItems.invalidate()
    }

    ListView {
        id: consoleLogs
        anchors.fill: parent
        model: consoleItems
        clip: true
        spacing: 0

        function logAdded() {
            // if user is at end of list +/- 10px, scroll to end of list to focus on new logs
            if (contentY >= (contentHeight - height) - 10){
                positionViewAtEnd()
            }
        }

        ScrollBar.vertical: ScrollBar {
            active: true
        }

        delegate: ConsoleDelegate {
            id: consoleDelegate
        }
    }

    SGSortFilterProxyModel {
        id: consoleItems
        sourceModel: consoleModel
        sortEnabled: true
        invokeCustomFilter: true

        function filterAcceptsRow(row){
            var item = sourceModel.get(row)
            return containsFilterText(item)
        }

        function containsFilterText(item){
            if(searchText === ""){
                return true
            } else {
                var searchMsg = item.time  + ` [ ${item.type} ] ` + item.msg
                if(searchBox.useCase) {
                    if(searchMsg.includes(searchText)){
                        return true
                    } else {
                        return false
                    }
                }
                if(searchMsg.toLowerCase().includes(searchText.toLowerCase())){
                    return true
                } else {
                    return false
                }
            }
        }
    }

    ListModel {
        id: consoleModel
    }

    Connections {
        id: srcConnection
        target: logger
        onLogMsg: {
            if(controlViewCreatorRoot.visible){
                if(consoleModel.count > 0 && recompileRequested){
                    for (var i = 0; i < consoleModel.count; i++){
                        consoleModel.get(i).current = false
                    }
                }

                consoleModel.append({time: timestamp(), type: getMsgType(type), msg: msg, current: true})
                consoleLogs.logAdded()

                if(type === 1){
                    warningCount += 1
                }
                if(type === 2){
                    errorCount += 1
                }
            }
        }
    }

    function getMsgType(type){
        switch(type){
        case 0: return "debug"
        case 1: return "warning"
        case 2: return "error"
        case 4: return "info"
        }
    }


    function timestamp(){
        var date = new Date(Date.now())
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        let millisecs = date.getMilliseconds()


        if(hours < 10){
            hours = `0${hours}`
        }

        if(minutes < 10){
            minutes = `0${minutes}`
        }

        if(seconds < 10){
            seconds = `0${seconds}`
        }

        if(millisecs < 100){
            if(millisecs < 10){
                millisecs =`00${millisecs}`
            } else {
                millisecs = `0${millisecs}`
            }
        }

        return `${hours}:${minutes}:${seconds}.${millisecs}`
    }

    function clearLogs() {
        consoleItems.clear();
        consoleModel.clear();
        errorCount = 0
        warningCount = 0
    }
}