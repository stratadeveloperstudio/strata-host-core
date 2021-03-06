/*
 * Copyright (c) 2018-2021 onsemi.
 *
 * All rights reserved. This software and/or documentation is licensed by onsemi under
 * limited terms and conditions. The terms and conditions pertaining to the software and/or
 * documentation are available at http://www.onsemi.com/site/pdf/ONSEMI_T&C.pdf (“onsemi Standard
 * Terms and Conditions of Sale, Section 8 Software”).
 */
import QtQuick 2.12
import QtQuick.Controls 2.12
import QtQuick.Layouts 1.12
import QtGraphicalEffects 1.12

import tech.strata.sgwidgets 1.0
import tech.strata.commoncpp 1.0
import tech.strata.logger 1.0

ColumnLayout {
    id: firmwareColumn

    Component.onCompleted: {
        firmwareListModel = sdsModel.documentManager.getClassDocuments(platformStack.class_id).firmwareListModel
        firmwareSortFilterModel.sourceModel = firmwareListModel
        firmwareList.firmwareModel = firmwareSortFilterModel
    }

    property var firmwareListModel: null
    property int firmwareCount: firmwareListModel.count

    onFirmwareCountChanged: {
        checkForNewerVersion()
    }

    Connections {
        target: platformStack
        onConnectedChanged: {
            checkForNewerVersion()
        }
        onFirmware_versionChanged: {
            checkForNewerVersion()
        }

        onController_class_idChanged: {
            firmwareSortFilterModel.invalidate()
        }
    }

    function matchVersion() {
        for (let i = 0; i < firmwareListModel.count; i++) {
            if (SGVersionUtils.equalTo(firmwareListModel.version(i), platformStack.firmware_version)) {
                firmwareListModel.setInstalled(i, true)
            } else {
                firmwareListModel.setInstalled(i, false)
            }
        }
    }

    function checkForNewerVersion() {
        matchVersion()
        for (let i = 0; i < firmwareListModel.count; i++) {

            if (platformStack.is_assisted === true &&
                    (platformStack.controller_class_id.length === 0 ||
                     platformStack.controller_class_id !== firmwareListModel.controller_class_id(i))) {
                continue
            }

            if (SGVersionUtils.lessThan(platformStack.firmware_version, firmwareListModel.version(i))) {
                firmwareIsOutOfDate = true
            }
        }
    }

    SGText {
        text: "Firmware Settings:"
        Accessible.name: text
        Accessible.editable: false
        font.bold: true
        fontSizeMultiplier: 1.38
    }

    Rectangle {
        color: "#aaa"
        Layout.fillWidth: true
        Layout.preferredHeight: 1
    }

    RowLayout {
        id: disconnectedFirmware
        spacing: 10
        Layout.topMargin: 10
        visible: !platformStack.connected

        SGIcon {
            id: disconnectedIcon
            source: "qrc:/sgimages/disconnected.svg"
            Layout.preferredHeight: 30
            Layout.preferredWidth: 30
            iconColor: "#aaa"
        }

        SGText {
            text: "Connect this platform to manage its firmware"
            fontSizeMultiplier: 1.38
            color: deviceVersion.color
        }
    }

    RowLayout {
        id: errorResponse
        spacing: 10
        Layout.topMargin: 10
        visible: platformStack.connected && platformStack.firmware_version === ""

        SGIcon {
            id: errorIcon
            source: "qrc:/sgimages/exclamation-triangle.svg"
            Layout.preferredHeight: 30
            Layout.preferredWidth: 30
            iconColor: "#f53847"
        }

        SGText {
            text: "Error: Unable to determine platform firmware version"
            fontSizeMultiplier: 1.38
            color: deviceVersion.color
        }
    }

    ColumnLayout {
        id: connectedFirmwareColumn
        visible: platformStack.connected && platformStack.firmware_version !== ""
        Layout.topMargin: 10

        SGText {
            id: deviceVersion
            text: "Device firmware version:"
            fontSizeMultiplier: 1.38
            color: "#666"
        }

        SGText {
            text: platformStack.firmware_version
            font.bold: true
            fontSizeMultiplier: 1.38
        }
    }

    SGSortFilterProxyModel {
        id: firmwareSortFilterModel

        invokeCustomFilter: true
        sortEnabled: false

        function filterAcceptsRow(row) {
            console.log(row, firmwareListModel.controller_class_id(row), platformStack.controller_class_id)

            if (platformStack.connected === false) {
                return false //platform not connected, no firmware displayed
            }

            if (platformStack.is_assisted === false) {
                //embedded platform
                //display only newest (if debugFeaturesEnabled is false)
                return sdsModel.debugFeaturesEnabled === true || firmwareListModel.getLatestVersionIndex() === row
            }

            if (platformStack.controller_class_id.length == 0) {
                return false //unregistered assisted platform
            }

            if (firmwareListModel.controller_class_id(row) !== platformStack.controller_class_id) {
                return false //firmware for a different controller
            }
            if (sdsModel.debugFeaturesEnabled === false && firmwareListModel.getLatestVersionIndex(platformStack.controller_class_id) !== row) {
                //display only newest (if debugFeaturesEnabled is false)
                return false;
            }

            return true
        }
    }

    Connections {
        target: platformStack
        onConnectedChanged: {
            firmwareSortFilterModel.invalidate()
        }
    }

    Connections {
        target: sdsModel
        onDebugFeaturesEnabledChanged: {
            firmwareSortFilterModel.invalidate()
        }
    }

    FirmwareVersionList {
        id: firmwareList
    }
}
