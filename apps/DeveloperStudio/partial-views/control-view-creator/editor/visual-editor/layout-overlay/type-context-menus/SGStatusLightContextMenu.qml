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
import QtQuick.Dialogs 1.3

import tech.strata.sgwidgets 1.0
import ".."
import "../layout-popup-context"

ColumnLayout {
    spacing: 1

    ContextMenuButton {
        text: "Set status"
        onClicked: {
            menuLoader.setSource("qrc:/partial-views/control-view-creator/editor/visual-editor/layout-overlay/layout-popup-context/ComboBoxPopup.qml")
            menuLoader.active = true
            menuLoader.item.sourceProperty = "status"
            menuLoader.item.model = ["LayoutSGStatusLight.Yellow","LayoutSGStatusLight.Green", "LayoutSGStatusLight.Blue", "LayoutSGStatusLight.Orange", "LayoutSGStatusLight.Red", "LayoutSGStatusLight.Off"]
            menuLoader.item.open()
            menuLoader.item.label = "Select the color of the status light."
            contextMenu.close()
        }
    }
}
