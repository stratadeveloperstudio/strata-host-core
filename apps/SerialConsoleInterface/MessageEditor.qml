import QtQuick 2.12
import QtQuick.Controls 2.12
import tech.strata.sgwidgets 1.0 as SGWidgets
import tech.strata.commoncpp 1.0 as CommonCpp
import tech.strata.theme 1.0

FocusScope {
    id: control

    property alias text: edit.text
    property alias font: edit.font
    property alias length: edit.length
    property alias suggestionListModel: suggestionPopup.model
    property alias suggestionModelTextRole: suggestionPopup.textRole
    property bool tabAllowed: true
    property int tabSize: 4
    property alias cursorPosition: edit.cursorPosition

    readonly property var currentCoordinates: resolveCoordinates(edit.cursorPosition, edit.text)
    readonly property int currentLine: currentCoordinates.line
    readonly property int currentColumn: currentCoordinates.column

    function clear() {
        edit.clear()
    }

    Keys.onPressed: {
        if (event.key === Qt.Key_Up) {
            if (!suggestionPopup.opened) {
                suggestionPopup.open()
            }

            event.accepted = true
        }
    }

    // This is to match look and feel of other controls
    Control {
        id: dummyControl
    }

    Rectangle {
        id: bg
        anchors.fill: parent
        color: dummyControl.palette.base
    }

    TextMetrics {
        id: textMetrics
        font: edit.font
        text: "9".repeat(Math.max(edit.lineCount.toString().length, 2))
    }

    Flickable {
        id: leftPaneFlick
        height: flick.height
        width: leftPane.width

        contentWidth: leftPane.width
        contentHeight: leftPane.height
        contentY: flick.contentY
        interactive: false
        clip: true

        Item {
            id: leftPane
            anchors {
                left: parent.left
                top: parent.top
            }

            width: textMetrics.width + 14
            height: Math.max(flick.height, flick.contentHeight)

            Rectangle {
                anchors.fill: parent
                color: Qt.lighter(dummyControl.palette.mid, 1.2)
                opacity: 0.5
            }

            MouseArea {
                anchors.fill: parent
                onClicked: {
                    edit.forceActiveFocus()
                }
            }

            Column {
                width: parent.width
                y: edit.topPadding

                Repeater {
                    model: edit.lineCount

                    Item {
                        height: edit.cursorRectangle.height
                        width: leftPane.width

                        SGWidgets.SGText {
                            anchors {
                                right: parent.right
                                rightMargin: 6
                                verticalCenter: parent.verticalCenter
                            }

                            text: index + 1
                            font.family: "monospace"
                            color: {
                                if (index === currentLine) {
                                    return dummyControl.palette.text
                                }

                                 return Qt.lighter(dummyControl.palette.text, 3.0)
                            }
                        }
                    }
                }
            }
        }
    }

    SGWidgets.SGContextMenuEditActions {
        id: contextMenuPopup
        textEditor: edit
    }

    Flickable {
        id: flick
        anchors {
            top: parent.top
            bottom: parent.bottom
            left: leftPaneFlick.right
            right: parent.right
        }

        contentHeight: edit.height
        contentWidth: edit.x + edit.width
        clip: true
        interactive: true
        boundsBehavior: Flickable.StopAtBounds

        ScrollBar.vertical: ScrollBar {
            anchors {
                right: flick.right
                rightMargin: 1
            }

            policy: ScrollBar.AlwaysOn
            width: 8
            visible: flick.height < flick.contentHeight
             minimumSize: 0.1
        }

        ScrollBar.horizontal: ScrollBar {
            anchors {
                bottom: flick.bottom
                bottomMargin: 1
            }

            policy: ScrollBar.AlwaysOn
            height: 8
            visible: flick.width < flick.contentWidth
            minimumSize: 0.1
        }

        function ensureVisible(r) {
            if (contentX >= r.x - edit.leftPadding) {
                contentX = r.x - edit.leftPadding
            } else if (contentX + width <= r.x + r.width + edit.rightPadding) {
                contentX = r.x + r.width - width + edit.rightPadding
            } if (contentY >= r.y - edit.topPadding) {
                contentY = r.y - edit.topPadding
            } else if (contentY + height <= r.y + r.height + edit.bottomPadding) {
                contentY = r.y + r.height - height + edit.bottomPadding
            }
        }

        MouseArea {
            height: flick.height > flick.contentHeight ? flick.height : flick.contentHeight
            width: flick.width > flick.contentWidth ? flick.width : flick.contentWidth

            cursorShape: Qt.IBeamCursor
            acceptedButtons: Qt.LeftButton | Qt.RightButton

            onClicked: {
                edit.forceActiveFocus()
            }

            onReleased: {
                if (containsMouse && (mouse.button === Qt.RightButton)) {
                    contextMenuPopup.popup(null)
                }
            }
        }

        Rectangle {
            id: currentLineBg
            width: Math.max(flick.width, flick.contentWidth) - edit.leftPadding - edit.rightPadding + 1
            height: edit.cursorRectangle.height
            x: edit.leftPadding - 1
            y: edit.cursorRectangle.y

            visible: edit.text.length
            color: "black"
            opacity: 0.04
        }

        TextEdit {
            id: edit
            height: flick.height > (contentHeight + topPadding + bottomPadding) ?
                        flick.height : (contentHeight + topPadding + bottomPadding)
            width: (flick.width - x) > (contentWidth + leftPadding + rightPadding) ?
                       (flick.width - x) : (contentWidth + leftPadding + rightPadding)

            wrapMode: TextEdit.NoWrap
            padding: 4 + 4
            leftPadding: 4
            color: dummyControl.palette.text
            selectionColor: TangoTheme.palette.selectedText
            selectedTextColor: "white"
            font.family: "monospace"
            font.pixelSize: SGWidgets.SGSettings.fontPixelSize
            selectByMouse: true
            selectByKeyboard: true
            persistentSelection: true   // must deselect manually
            activeFocusOnTab: true
            textFormat: Text.PlainText
            focus: true

            Keys.forwardTo: suggestionPopup.contentItem
            Keys.priority: Keys.BeforeItem

            Keys.onPressed: {
                if (event.key === Qt.Key_Tab) {
                    if (tabAllowed) {
                        insert(cursorPosition," ".repeat(tabSize))
                    } else {
                        nextItemInFocusChain().forceActiveFocus(Qt.TabFocusReason)
                    }
                    event.accepted = true
                }
            }

            onCursorRectangleChanged: {
                flick.ensureVisible(cursorRectangle)
            }

            onActiveFocusChanged: {
                if ((activeFocus === false) && (contextMenuPopup.visible === false)) {
                    edit.deselect()
                }
            }

            Text {
                id: placeholderTextItem
                anchors {
                    top: parent.top
                    topMargin: edit.topPadding
                    left: parent.left
                    leftMargin: edit.leftPadding
                }

                visible: edit.text.length === 0
                color: dummyControl.palette.text
                opacity: edit.enabled ? 0.5 : 1
                font: edit.font
                elide: Text.ElideRight
                text: "Enter JSON Message..."
            }
        }
    }

    Rectangle {
        id: border
        anchors.fill: parent

        color: "transparent"
        border {
            width: control.activeFocus ? 2 : 1
            color: {
                if (control.activeFocus) {
                    return TangoTheme.palette.highlight
                }

                return dummyControl.palette.mid
            }
        }
    }

    SGWidgets.SGSuggestionPopup {
        id: suggestionPopup
        textEditor: control
        position: Item.Top
        emptyModelText: qsTr("No commands.")
        headerText: qsTr("Message history")
        maxHeight: 250
        closeOnDown: true
        delegateRemovable: true

        onDelegateSelected: {
            if (index < 0) {
                return
            }

            var item = suggestionListModel.get(index)

            if (item.isJsonValid) {
                edit.text = CommonCpp.SGJsonFormatter.prettifyJson(item.message)
            } else {
                edit.text = item.message
            }
        }

        onRemoveRequested: {
            suggestionListModel.removeAt(index)
        }

        delegate: Item {
            width: ListView.view.width
            height: textEdit.paintedHeight + 10

            Loader {
                id: suggestionListHighlighterLoader
                sourceComponent: model.isJsonValid ? suggestionListHighlighterComponent : null
            }

            Component {
                id: suggestionListHighlighterComponent
                CommonCpp.SGJsonSyntaxHighlighter {
                    textDocument: textEdit.textDocument
                }
            }

            Rectangle {
                anchors.fill: parent
                color: {
                    if (parent.ListView.isCurrentItem) {
                        return Qt.lighter(TangoTheme.palette.highlight, 1.7)
                    } else if (delegateMouseArea.containsMouse || removeBtn.hovered) {
                        return Qt.lighter(TangoTheme.palette.highlight, 1.9)
                    }

                    return "transparent"
                }
            }

            SGWidgets.SGTextEdit {
                id: textEdit
                anchors {
                    verticalCenter: parent.verticalCenter
                    left: parent.left
                    leftMargin: 4
                    right: removeBtn.left
                    rightMargin: 4
                }

                textFormat: Text.PlainText
                readOnly: true
                wrapMode: Text.WrapAnywhere
                text: model.message
            }

            MouseArea {
                id: delegateMouseArea
                anchors.fill: parent
                hoverEnabled: true
                onClicked: {
                    parent.ListView.view.currentIndex = index
                    suggestionPopup.delegateSelected(index)
                }
            }

            SGWidgets.SGIconButton {
                id: removeBtn
                anchors {
                    verticalCenter: parent.verticalCenter
                    right: parent.right
                    rightMargin: 2 + 8
                }

                iconSize: SGWidgets.SGSettings.fontPixelSize
                hintText: qsTr("Remove")
                visible: delegateMouseArea.containsMouse
                         || removeBtn.hovered
                         || parent.ListView.isCurrentItem

                iconColor: "white"
                icon.source: "qrc:/sgimages/times.svg"
                highlightImplicitColor: Theme.palette.error
                onClicked: {
                    suggestionPopup.removeRequested(index)
                }
            }
        }
    }

    function resolveCoordinates(position, text) {
        var line = 0;
        var column = 0;

        for (var i = 0; i < position; ++i) {
            if (text[i] === '\n') {
                ++line;
                column = 0;
            } else {
                ++column;
            }
        }

        return {
            "line": line,
            "column": column,
        }
    }
}
