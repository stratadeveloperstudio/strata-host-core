import QtQuick 2.12
import QtQuick.Layouts 1.12
import QtQml.Models 2.12
import QtQuick.Dialogs 1.2
import QtQuick.Controls 2.12

import tech.strata.sgwidgets 1.0
import tech.strata.commoncpp 1.0
import tech.strata.fonts 1.0

RowLayout {
    id: root

    property alias text: textField.text
    property alias useCase: useCaseSensitive.checked

    spacing: 0

    SGControlViewIconButton {
        id: contentButton
        source: "qrc:/sgimages/zoom.svg"
        Layout.fillHeight: true
        Layout.preferredWidth: 30
        onClicked: {
            if(menu.opened){
                menu.close()
            } else {
                menu.open()
            }
        }
    }

    Rectangle {
        id: searchFilter
        Layout.fillHeight: true
        Layout.preferredWidth:  300
        border.color: "#444"
        border.width: 0.5

        SGTextField {
            id: textField
            font.pixelSize: 14
            anchors.fill: searchFilter
            leftPadding: 5
            contextMenuEnabled: true
        }
    }

    Menu {
        id: menu
        width: root.width
        y: -menu.height

        MenuItem {
            SGCheckBox {
                id: useCaseSensitive
                text: "Case Sensitive"
            }
        }
    }
}
