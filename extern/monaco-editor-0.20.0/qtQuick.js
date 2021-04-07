/* 
    This File contains portions of snippets.json that exists in https://github.com/ThomasVogelpohl/vsc-qml-snippets/blob/master/snippets/snippets.json
    This File is the base for mapping the auto complete, For CVC purposes this files auto complete will be limited in the number of QtQuick Objects but 
    detailed in the properties

    If we need to add more QtQuick Objects the format will be
    {
        "body": "{\n //id:  \n}",
        "description": "",
        "prefix": "",
        "scope": "source.qml",
        "properties": [""]
    }
*/
const qtObjectKeyValues = {}
const qtIdPairs = {}
const qtObjectPropertyValues = {}
var isInitialized = false
var searchedIds = false
var flags = { sgwidgetsFlag: false, qtQuickFlag: false }
const suggestions = {}
const currentItems = {}
var editor = null

var bottomOfFile = null;
var topOfFile = null;
var fullRange = null;

var propRange = {};

var err_flag = false
var err_msg = ""

const ERROR_TYPES = {
    UUID_ERROR: "The uuid search failed to find and select specified widget",
    PARENT_ERROR: "This parent is not recognized, either it needs to be imported or defined",
    GENERIC_ERROR: "There is an error within the monaco editor that is causing a failure in suggestions"
}

const qtQuick = [
    {
        "body": "Axis",
        "description": "Axis",
        "prefix": "Axis",
        "scope": "source.qml",
        "properties": ["buttons: ", "inputs: ", "value: ", "velocity: "],
    },
    {
        "body": "Binding",
        "description": "Binding",
        "prefix": "Binding",
        "scope": "source.qml",
        "properties": ["delayed: ", "property: ", "target: ", "value: ", "when: "],
    },
    {
        "body": "BusyIndicator",
        "description": "BusyIndicator",
        "prefix": "BusyIndicator",
        "scope": "source.qml",
        "properties": [
            "running: ",
            "availableHeight: ",
            "availableWidth: ",
            "background: ",
            "bottomInset: ",
            "bottomPadding: ",
            "contentItem: ",
            "focusPolicy: ",
            "focusReason: ",
            "font: ",
            "horizontalPadding: ",
            "hoverEnabled: ",
            "hovered: ",
            "leftInset: ",
            "leftPadding: ",
            "locale: ",
            "mirrored: ",
            "padding: ",
            "palette: ",
            "rightInset: ",
            "rightPadding: ",
            "spacing: ",
            "topInset: ",
            "topPadding: ",
            "verticalPadding: ",
            "visualFocus: ",
            "wheelEnabled: ",
        ]
    },
    {
        "body": "BusyIndicatorStyle",
        "description": "BusyIndicatorStyle",
        "prefix": "BusyIndicatorStyle",
        "scope": "source.qml",
        "properties": ["control: ", "indicator: "]
    },
    {
        "body": "Button",
        "description": "Button",
        "prefix": "Button",
        "scope": "source.qml",
        "properties": [
            "flat: ",
            "highlighted: ",
            "checkable: ",
            "checked: ",
            "display: ",
            "down: ",
            "icon.color: ",
            "icon.height: ",
            "icon.name: ",
            "icon.source: ",
            "icon.width: ",
            "indicator: ",
            "pressX: ",
            "pressY: ",
            "pressed: ",
            "text: ",
            "canceled()",
            "clicked()",
            "doubleClicked()",
            "pressAndHold()",
            "pressed()",
            "released()",
            "toggled()",
            "availableHeight: ",
            "availableWidth: ",
            "background: ",
            "bottomInset: ",
            "bottomPadding: ",
            "contentItem: ",
            "focusPolicy: ",
            "focusReason: ",
            "font: ",
            "horizontalPadding: ",
            "hoverEnabled: ",
            "hovered: ",
            "leftInset: ",
            "leftPadding: ",
            "locale: ",
            "mirrored: ",
            "padding: ",
            "palette: ",
            "rightInset: ",
            "rightPadding: ",
            "spacing: ",
            "topInset: ",
            "topPadding: ",
            "verticalPadding: ",
            "visualFocus: ",
            "wheelEnabled: ",
        ]
    },
    {
        "body": "ButtonAxisInput",
        "description": "ButtonAxisInput",
        "prefix": "ButtonAxisInput",
        "scope": "source.qml",
        "properties": ["acceleration: ", "buttons: ", "deceleration: "]
    },
    {
        "body": "ButtonGroup",
        "description": "ButtonGroup",
        "prefix": "ButtonGroup",
        "scope": "source.qml",
        "properties": ["buttons: ", "checkState: ", "checkedButtons: ", "exclusive: ", "objectName: "]
    },
    {
        "body": "ButtonStyle",
        "description": "ButtonStyle",
        "prefix": "ButtonStyle",
        "scope": "source.qml",
        "properties": ["background: ", "control: ", "label: "]
    },
    {
        "body": "Canvas",
        "description": "Canvas",
        "prefix": "Canvas",
        "scope": "source.qml",
        "properties": [
            "available: ",
            "canvasSize: ",
            "context: ",
            "contextType: ",
            "renderStrategy: ",
            "renderTarget: ",
        ]
    },
    {
        "body": "CheckBox",
        "description": "CheckBox",
        "prefix": "CheckBox",
        "scope": "source.qml",
        "properties": [
            "checkState: ",
            "nextCheckState: ",
            "tristate: ",
            "action: ",
            "autoExclusive: ",
            "autoRepeat: ",
            "autoRepeatDelay: ",
            "autoRepeatInterval: ",
            "checkable: ",
            "checked: ",
            "display: ",
            "down: ",
            "icon.color: ",
            "icon.height: ",
            "icon.name: ",
            "icon.source: ",
            "icon.width: ",
            "implicitIndicatorHeight: ",
            "implicitIndicatorWidth: ",
            "indicator: ",
            "pressX: ",
            "pressY: ",
            "pressed: ",
            "text: ",
            "canceled()",
            "clicked()",
            "doubleClicked()",
            "pressAndHold()",
            "pressed()",
            "released()",
            "toggled()",
            "availableHeight: ",
            "availableWidth: ",
            "background: ",
            "bottomInset: ",
            "bottomPadding: ",
            "contentItem: ",
            "focusPolicy: ",
            "focusReason: ",
            "font: ",
            "horizontalPadding: ",
            "hoverEnabled: ",
            "hovered: ",
            "implicitBackgroundHeight: ",
            "implicitBackgroundWidth: ",
            "leftInset: ",
            "leftPadding: ",
            "locale: ",
            "mirrored: ",
            "padding: ",
            "palette: ",
            "rightInset: ",
            "rightPadding: ",
            "spacing: ",
            "topInset: ",
            "topPadding: ",
            "verticalPadding: ",
            "visualFocus: ",
            "wheelEnabled: ",
        ]
    },
    {
        "body": "CheckBoxStyle",
        "description": "CheckBoxStyle",
        "prefix": "CheckBoxStyle",
        "scope": "source.qml",
        "properties": ["background: ", "control: ", "indicator: ", "label: ", "spacing: "]
    },
    {
        "body": "CheckDelegate",
        "description": "CheckDelegate",
        "prefix": "CheckDelegate",
        "scope": "source.qml",
        "properties": [
            "checkState: ",
            "nextCheckState: ",
            "tristate: ",
            "action: ",
            "autoExclusive: ",
            "autoRepeat: ",
            "autoRepeatDelay: ",
            "autoRepeatInterval: ",
            "checkable: ",
            "checked: ",
            "display: ",
            "down: ",
            "icon.color: ",
            "icon.height: ",
            "icon.name: ",
            "icon.source: ",
            "icon.width: ",
            "implicitIndicatorHeight: ",
            "implicitIndicatorWidth: ",
            "indicator: ",
            "pressX: ",
            "pressY: ",
            "pressed: ",
            "text: ",
            "canceled()",
            "clicked()",
            "doubleClicked()",
            "pressAndHold()",
            "pressed()",
            "released()",
            "toggled()",
            "availableHeight: ",
            "availableWidth: ",
            "background: ",
            "bottomInset: ",
            "bottomPadding: ",
            "contentItem: ",
            "focusPolicy: ",
            "focusReason: ",
            "font: ",
            "horizontalPadding: ",
            "hoverEnabled: ",
            "hovered: ",
            "implicitBackgroundHeight: ",
            "implicitBackgroundWidth: ",
            "leftInset: ",
            "leftPadding: ",
            "locale: ",
            "mirrored: ",
            "padding: ",
            "palette: ",
            "rightInset: ",
            "rightPadding: ",
            "spacing: ",
            "topInset: ",
            "topPadding: ",
            "verticalPadding: ",
            "visualFocus: ",
            "wheelEnabled: ",
        ]
    },
    {
        "body": "Column",
        "description": "Column",
        "prefix": "Column",
        "scope": "source.qml",
        "properties": [
            "add: ",
            "bottomPadding: ",
            "leftPadding: ",
            "move: ",
            "padding: ",
            "populate: ",
            "rightPadding: ",
            "spacing: ",
            "topPadding: ",
            "forceLayout()",
            "positioningComplete()",
            "active: ",
        ]
    },
    {
        "body": "ColumnLayout",
        "description": "ColumnLayout",
        "prefix": "ColumnLayout",
        "scope": "source.qml",
        "properties": [
            "layoutDirection: ",
            "spacing: ",
        ]
    },
    {
        "body": "ComboBox",
        "description": "ComboBox",
        "prefix": "ComboBox",
        "scope": "source.qml",
        "properties": [
            "acceptableInput: ",
            "count: ",
            "currentIndex: ",
            "currentText: ",
            "displayText: ",
            "down: ",
            "editText: ",
            "editable: ",
            "flat: ",
            "highlightedIndex: ",
            "indicator: ",
            "inputMethodComposing: ",
            "inputMethodHints: ",
            "model: ",
            "popup: ",
            "pressed: ",
            "textRole: ",
            "validator: ",
            "availableHeight: ",
            "availableWidth: ",
            "background: ",
            "bottomInset: ",
            "bottomPadding: ",
            "contentItem: ",
            "focusPolicy: ",
            "focusReason: ",
            "font: ",
            "horizontalPadding: ",
            "hoverEnabled: ",
            "hovered: ",
            "implicitBackgroundHeight: ",
            "implicitBackgroundWidth: ",
            "leftInset: ",
            "leftPadding: ",
            "locale: ",
            "mirrored: ",
            "padding: ",
            "palette: ",
            "rightInset: ",
            "rightPadding: ",
            "spacing: ",
            "topInset: ",
            "topPadding: ",
            "verticalPadding: ",
            "visualFocus: ",
            "wheelEnabled: ",
        ]
    },
    {
        "body": "Component",
        "description": "Component",
        "prefix": "Component",
        "scope": "source.qml",
        "properties": ["progress: ", "status: ", "url: ", "onCompleted{}", "onDestruction{}"]
    },
    {
        "body": "Connections",
        "description": "Connections",
        "prefix": "Connections",
        "scope": "source.qml",
        "properties": ["enabled: ", "ignoreUnknownSignals: ", "target: "]
    },
    {
        "body": "Container",
        "description": "Container",
        "prefix": "Container",
        "scope": "source.qml",
        "properties": [
            "contentChildren: ",
            "contentData: ",
            "contentHeight: ",
            "contentModel: ",
            "contentWidth: ",
            "count: ",
            "currentIndex: ",
            "currentItem: ",
            "availableHeight: ",
            "availableWidth: ",
            "background: ",
            "bottomInset: ",
            "bottomPadding: ",
            "contentItem: ",
            "focusPolicy: ",
            "focusReason: ",
            "font: ",
            "horizontalPadding: ",
            "hoverEnabled: ",
            "hovered: ",
            "implicitBackgroundHeight: ",
            "implicitBackGroundWidth: ",
            "leftInset: ",
            "leftPadding: ",
            "locale: ",
            "mirrored: ",
            "padding: ",
            "palette: ",
            "rightInset: ",
            "rightPadding: ",
            "spacing: ",
            "topInset: ",
            "topPadding: ",
            "verticalPadding: ",
            "visualFocus: ",
            "wheelEnabled: ",
        ]
    },
    {
        "body": "Date",
        "description": "Date",
        "prefix": "Date",
        "scope": "source.qml",
        "properties": []
    },
    {
        "body": "DropShadow",
        "description": "DropShadow",
        "prefix": "DropShadow",
        "scope": "source.qml",
        "properties": [
            "cached: ",
            "horizontalPadding: ",
            "hoverEnabled: ",
            "hovered: ",
            "implicitBackgroundHeight: ",
            "implicitBackGroundWidth: ",
            "leftInset: ",
            "leftPadding: ",
            "locale: ",
            "mirrored: ",
            "padding: ",
            "palette: ",
            "rightInset: ",
            "rightPadding: ",
            "spacing: ",
            "topInset: ",
            "topPadding: ",
            "verticalPadding: ",
            "visualFocus: ",
            "wheelEnabled: ",
        ]
    },
    {
        "body": "Grid",
        "description": "Grid",
        "prefix": "Grid",
        "scope": "source.qml",
        "properties": [
            "columns: ",
            "effectiveHorizontalItemAlignment: ",
            "effectiveLayoutDirection: ",
            "flow: ",
            "horizontalItemAlignment: ",
            "layoutDirection: ",
            "leftPadding: ",
            "move: ",
            "padding: ",
            "populate: ",
            "rightPadding: ",
            "rowSpacing: ",
            "rows: ",
            "spacing: ",
            "topPadding: ",
            "verticalItemAlignment: ",
            "forceLayout()",
            "positioningComplete()",
            "active: ",
        ]
    },
    {
        "body": "GridLayout",
        "description": "GridLayout",
        "prefix": "GridLayout",
        "scope": "source.qml",
        "properties": [
            "columnSpacing: ",
            "columns: ",
            "flow: ",
            "layoutDirection: ",
            "rowSpacing: ",
            "rows: ",
        ]
    },
    {
        "body": "GridView",
        "description": "GridView",
        "prefix": "GridView",
        "scope": "source.qml",
        "properties": [
            "add: ",
            "addDisplaced: ",
            "cacheBuffer: ",
            "cellHeight: ",
            "cellWidth: ",
            "count: ",
            "currentIndex: ",
            "currentItem: ",
            "onDelayremove: ",
            "delegate: ",
        ]
    },
    {
        "body": "Icon",
        "description": "Icon",
        "prefix": "Icon",
        "scope": "source.qml",
        "properties": ["icon: ", "parameters: ", "plugin: "]
    },
    {
        "body": "Image",
        "description": "Image",
        "prefix": "Image",
        "scope": "source.qml",
        "properties": [
            "asynchronous: ",
            "autoTransform: ",
            "cache: ",
            "fillMode: ",
            "horizontalAlignment: ",
            "mipmap: ",
            "mirror: ",
            "paintedHeight: ",
            "paintedWidth: ",
            "progress: ",
            "smooth: ",
            "source: ",
            "sourceSize: ",
            "status: ",
            "verticalAlignment: ",
        ]
    },
    {
        "body": "Item",
        "description": "Item",
        "prefix": "Item",
        "scope": "source.qml",
        "properties": [],
    },
    {
        "body": "Label",
        "description": "Label",
        "prefix": "Label",
        "scope": "source.qml",
        "properties": [
            "background: ",
            "bottomInset: ",
            "implicitBackgroundHeight: ",
            "implicitBackgroundWidth: ",
            "leftInset: ",
            "palette: ",
            "rightInset: ",
            "topInset: ",
            "advance: ",
            "baseUrl: ",
            "bottomPadding: ",
            "clip: ",
            "color: ",
            "contentHeight: ",
            "contentWidth: ",
            "effectiveHorizontalAlignment: ",
            "elide: ",
            "fontInfo.bold: ",
            "fontInfo.family: ",
            "fontInfo.italic: ",
            "fontInfo.pixelSize: ",
            "fontInfo.pointSize: ",
            "fontInfo.styleName: ",
            "fontInfo.weight: ",
            "fontSizeMode: ",
            "horizontalAlignment: ",
            "hoveredLink: ",
            "leftPadding: ",
            "lineCount: ",
            "lineHeight: ",
            "lineHeightMode: ",
            "linkColor: ",
            "maximumLineCount: ",
            "minimumPixelSize: ",
            "minimumPointSize: ",
            "padding: ",
            "renderType: ",
            "rightPadding: ",
            "style: ",
            "styleColor: ",
            "text: ",
            "textFormat: ",
            "topPadding: ",
            "truncated: ",
            "verticalAlignment: ",
            "wrapMode: ",
            "forceLayout()",
            "lineLaidOut()",
            "linkActivated()",
            "linkAt()",
            "linkHovered()"
        ]
    },
    {
        "body": "Layout",
        "description": "Layout",
        "prefix": "Layout",
        "scope": "source.qml",
        "properties": ["preferredHeight: ", "preferredWidth: ", "minimumWidth: ", "maximumWidth: ", "minimumHeight", "maximumHeight: ", "alignment: ", "fillWidth: ", "fillHeight: "],
        "regex": /Layout.(\*)/
    },
    {
        "body": "ListElement",
        "description": "ListElement",
        "prefix": "ListElement",
        "scope": "source.qml",
        "properties": []
    },
    {
        "body": "ListModel",
        "description": "ListModel",
        "prefix": "ListModel",
        "scope": "source.qml",
        "properties": [
            "count: ",
            "dynamicRoles: ",
            "append(jsobjectdict)",
            "clear()",
            "insert(intindex,jsobjectdict)",
            "move(intfrom,intto,intn)",
            "remove(intindex,intcount=1)",
            "set(intindex,jsobjectdict)",
            "setProperty(intindex,stringproperty,variantvalue)",
            "sync()",
        ]
    },
    {
        "body": "ListView",
        "description": "ListView",
        "prefix": "ListView",
        "scope": "source.qml",
        "properties": [
            "add: ",
            "addDisplaced: ",
            "cacheBuffer: ",
            "count: ",
            "currentIndex: ",
            "currentItem: ",
            "currentSection: ",
            "onDelayremove: ",
            "delegate: ",
            "displaced: ",
            "displayMarginBeginning: ",
            "displayMarginEnd: ",
            "effectiveLayoutDirection: ",
            "footer: ",
            "footerItem: ",
            "footerPositioning: ",
            "header: ",
            "headerItem: ",
            "headerPositioning: ",
            "highlight: ",
            "highlightFollowsCurrentItem: ",
            "highlightItem: ",
            "highlightMoveDuration: ",
            "highlightMoveVelocity: ",
            "highlightRangeMode: ",
            "highlightResizeDuration: ",
            "highlightResizeVelocity: ",
            "onIsCurrentItem: ",
            "keyNavigationEnabled: ",
            "keyNavigationWraps: ",
            "layoutDirection: ",
            "model: ",
            "move: ",
            "moveDisplaced: ",
            "onNextSection: ",
            "orientation: ",
            "populate: ",
            "preferredHighlightBegin: ",
            "preferredHighlightEnd: ",
            "onPrevioussection: ",
            "remove: ",
            "removeDisplaced: ",
            "onSection: ",
            "snapMode: ",
            "spacing: ",
            "verticalLayoutDirection: ",
            "onView: ",
            "onAdd: ",
            "decrementCurrentIndex()",
            "forceLayout()",
            "incrementCurrentIndex()",
            "positionViewAtBeginning()",
            "positionViewAtEnd()",
            "positionViewAtIndex(intindex,PositionModemode)",
            "onRemove: ",
            "atXBeginning: ",
            "atXEnd: ",
            "atYBeginning: ",
            "atYEnd: ",
            "bottomMargin: ",
            "boundsBehavior: ",
            "boundsMovement: ",
            "contentHeight: ",
            "contentItem: ",
            "contentWidth: ",
            "contentX: ",
            "contentY: ",
            "dragging: ",
            "draggingHorizontally: ",
            "draggingVertically: ",
            "flickDeceleration: ",
            "flickableDirection: ",
            "flicking: ",
            "flickingHorizontally: ",
            "flickingVertically: ",
            "horizontalOvershoot: ",
            "horizontalVelocity: ",
            "interactive: ",
            "leftMargin: ",
            "maximumFlickVelocity: ",
            "moving: ",
            "movingHorizontally: ",
            "movingVertically: ",
            "originX: ",
            "originY: ",
            "pixelAligned: ",
            "pressDelay: ",
            "rebound: ",
            "rightMargin: ",
            "synchronousDrag: ",
            "topMargin: ",
            "verticalOvershoot: ",
            "verticalVelocity: ",
            "visibleArea.heightRatio: ",
            "visibleArea.widthRatio: ",
            "visibleArea.xPosition: ",
            "visibleArea.yPosition: ",
            "cancelFlick()",
            "flick(qrealxVelocity,qrealyVelocity)",
            "flickEnded()",
            "flickStarted()",
            "movementEnded()",
            "movementStarted()",
            "resizeContent(realwidth,realheight,QPointFcenter)",
            "returnToBounds()",
        ]
    },
    {
        "body": "Loader {\n \n}",
        "description": "Loader",
        "prefix": "Loader",
        "scope": "source.qml",
        "properties": [
            "active: ",
            "asynchronous: ",
            "item: ",
            "progress: ",
            "source: ",
            "sourceComponent: ",
            "status: ",
            "loaded()",
        ]
    },
    {
        "body": "Menu",
        "description": "Menu",
        "prefix": "Menu",
        "scope": "source.qml",
        "properties": [
            "cascade: ",
            "contentData: ",
            "contentModel: ",
            "count: ",
            "currentIndex: ",
            "delegate: ",
            "overlap: ",
            "title: ",
        ]
    },
    {
        "body": "MenuBar",
        "description": "MenuBar",
        "prefix": "MenuBar",
        "scope": "source.qml",
        "properties": [
            "contentHeight: ",
            "contentWidth: ",
            "delegate: ",
            "menus: ",
            "contentChildren: ",
            "contentData: ",
            "contentHeight: ",
            "contentModel: ",
            "contentWidth: ",
            "count: ",
            "currentIndex: ",
            "currentItem: ",
            "availableHeight: ",
            "availableWidth: ",
            "background: ",
            "bottomInset: ",
            "bottomPadding: ",
            "contentItem: ",
            "focusPolicy: ",
            "focusReason: ",
            "font: ",
            "horizontalPadding: ",
            "hoverEnabled: ",
            "hovered: ",
            "implicitBackgroundHeight: ",
            "implicitBackgroundWidth: ",
            "implicitContentHeight: ",
            "implicitContentWidth: ",
            "leftInset: ",
            "leftPadding: ",
            "locale: ",
            "mirrored: ",
            "padding: ",
            "palette: ",
            "rightInset: ",
            "rightPadding: ",
            "spacing: ",
            "topInset: ",
            "topPadding: ",
            "verticalPadding: ",
            "visualFocus: ",
            "wheelEnabled: ",
        ]
    },
    {
        "body": "MenuBarItem",
        "description": "MenuBarItem",
        "prefix": "MenuBarItem",
        "scope": "source.qml",
        "properties": [
            "highlighted: ",
            "menu: ",
            "menuBar: ",
            "action: ",
            "autoExclusive: ",
            "autoRepeat: ",
            "autoRepeatDelay: ",
            "autoRepeatInterval: ",
            "checkable: ",
            "checked: ",
            "display: ",
            "down: ",
            "icon.color: ",
            "icon.height: ",
            "icon.name: ",
            "icon.source: ",
            "icon.width: ",
            "implicitIndicatorHeight: ",
            "implicitIndicatorWidth: ",
            "indicator: ",
            "pressX: ",
            "pressY: ",
            "pressed: ",
            "text: ",
            "canceled()",
            "clicked()",
            "doubleClicked()",
            "pressAndHold()",
            "pressed()",
            "released()",
            "toggled()",
            "availableHeight: ",
            "availableWidth: ",
            "background: ",
            "bottomInset: ",
            "bottomPadding: ",
            "contentItem: ",
            "focusPolicy: ",
            "focusReason: ",
            "font: ",
            "horizontalPadding: ",
            "hoverEnabled: ",
            "hovered: ",
            "implicitBackgroundHeight: ",
            "implicitBackgroundWidth: ",
            "implicitContentHeight: ",
            "implicitContentWidth: ",
            "leftInset: ",
            "leftPadding: ",
            "locale: ",
            "mirrored: ",
            "padding: ",
            "palette: ",
            "rightInset: ",
            "rightPadding: ",
            "spacing: ",
            "topInset: ",
            "topPadding: ",
            "verticalPadding: ",
            "visualFocus: ",
            "wheelEnabled: ",
        ]
    },
    {
        "body": "MenuItem",
        "description": "MenuItem",
        "prefix": "MenuItem",
        "scope": "source.qml",
        "properties": [
            "arrow: ",
            "highlighted: ",
            "menu: ",
            "subMenu: ",
            "action: ",
            "autoExclusive: ",
            "autoRepeat: ",
            "autoRepeatDelay: ",
            "autoRepeatInterval: ",
            "checkable: ",
            "checked: ",
            "display: ",
            "down: ",
            "icon.color: ",
            "icon.height: ",
            "icon.name: ",
            "icon.source: ",
            "icon.width: ",
            "implicitIndicatorHeight: ",
            "implicitIndicatorWidth: ",
            "indicator: ",
            "pressX: ",
            "pressY: ",
            "pressed: ",
            "text: ",
            "canceled()",
            "clicked()",
            "doubleClicked()",
            "pressAndHold()",
            "pressed()",
            "released()",
            "toggled()",
            "availableHeight: ",
            "availableWidth: ",
            "background: ",
            "bottomInset: ",
            "bottomPadding: ",
            "contentItem: ",
            "focusPolicy: ",
            "focusReason: ",
            "font: ",
            "horizontalPadding: ",
            "hoverEnabled: ",
            "hovered: ",
            "implicitBackgroundHeight: ",
            "implicitBackgroundWidth: ",
            "implicitContentHeight: ",
            "implicitContentWidth: ",
            "leftInset: ",
            "leftPadding: ",
            "locale: ",
            "mirrored: ",
            "padding: ",
            "palette: ",
            "rightInset: ",
            "rightPadding: ",
            "spacing: ",
            "topInset: ",
            "topPadding: ",
            "verticalPadding: ",
            "visualFocus: ",
            "wheelEnabled:",
        ]
    },
    {
        "body": "MenuSeparator",
        "description": "MenuSeparator",
        "prefix": "MenuSeparator",
        "scope": "source.qml",
        "properties": [
            "availableHeight: ",
            "availableWidth: ",
            "background: ",
            "bottomInset: ",
            "bottomPadding: ",
            "contentItem: ",
            "focusPolicy: ",
            "focusReason: ",
            "font: ",
            "horizontalPadding: ",
            "hoverEnabled: ",
            "hovered: ",
            "implicitBackgroundHeight: ",
            "implicitBackgroundWidth: ",
            "implicitContentHeight: ",
            "implicitContentWidth: ",
            "leftInset: ",
            "leftPadding: ",
            "locale: ",
            "mirrored: ",
            "padding: ",
            "palette: ",
            "rightInset: ",
            "rightPadding: ",
            "spacing: ",
            "topInset: ",
            "topPadding: ",
            "verticalPadding: ",
            "visualFocus: ",
            "wheelEnabled: ",
        ]
    },
    {
        "body": "MouseArea",
        "description": "MouseArea",
        "prefix": "MouseArea",
        "scope": "source.qml",
        "properties": [
            "acceptedButtons: ",
            "containsMouse: ",
            "containsPress: ",
            "cursorShape: ",
            "drag.active: ",
            "drag.axis: ",
            "drag.filterChildren: ",
            "drag.maximumX: ",
            "drag.maximumY: ",
            "drag.minimumX: ",
            "drag.minimumY: ",
            "drag.target: ",
            "drag.threshold: ",
            "enabled: ",
            "hoverEnabled: ",
            "mouseX: ",
            "mouseY: ",
            "pressAndHoldInterval: ",
            "pressed: ",
            "pressedButtons: ",
            "preventStealing: ",
            "propagateComposedEvents: ",
            "scrollGestureEnabled: ",
            "canceled()",
            "clicked(MouseEventmouse)",
            "doubleClicked(MouseEventmouse)",
            "entered()",
            "exited()",
            "positionChanged(MouseEventmouse)",
            "pressAndHold(MouseEventmouse)",
            "pressed(MouseEventmouse)",
            "released(MouseEventmouse)",
            "wheel(WheelEventwheel)",
        ]
    },
    {
        "body": "Number",
        "description": "Number",
        "prefix": "Number",
        "scope": "source.qml",
        "properties": []
    },
    {
        "body": "Popup",
        "description": "Popup",
        "prefix": "Popup",
        "scope": "source.qml",
        "properties": []
    },
    {
        "body": "Qt",
        "description": "Qt",
        "prefix": "Qt",
        "scope": "source.qml",
        "properties": []
    },
    {
        "body": "QtObject",
        "description": "QtObject",
        "prefix": "QtObject",
        "scope": "source.qml",
        "properties": ["objectName: "]
    },
    {
        "body": "QtPositioning",
        "description": "QtPositioning",
        "prefix": "QtPositioning",
        "scope": "source.qml",
        "properties": []
    },
    {
        "body": "RadioButton",
        "description": "RadioButton",
        "prefix": "RadioButton",
        "scope": "source.qml",
        "properties": [
            "action: ",
            "autoExclusive: ",
            "autoRepeat: ",
            "autoRepeatDelay: ",
            "autoRepeatInterval: ",
            "checkable: ",
            "checked: ",
            "display: ",
            "down: ",
            "icon.color: ",
            "icon.height: ",
            "icon.name: ",
            "icon.source: ",
            "icon.width: ",
            "implicitIndicatorHeight: ",
            "implicitIndicatorWidth: ",
            "indicator: ",
            "pressX: ",
            "pressY: ",
            "pressed: ",
            "text: ",
            "canceled()",
            "clicked()",
            "doubleClicked()",
            "pressAndHold()",
            "pressed()",
            "released()",
            "toggled()",
            "availableHeight: ",
            "availableWidth: ",
            "background: ",
            "bottomInset: ",
            "bottomPadding: ",
            "contentItem: ",
            "focusPolicy: ",
            "focusReason: ",
            "font: ",
            "horizontalPadding: ",
            "hoverEnabled: ",
            "hovered: ",
            "implicitBackgroundHeight: ",
            "implicitBackgroundWidth: ",
            "implicitContentHeight: ",
            "implicitContentWidth: ",
            "leftInset: ",
            "leftPadding: ",
            "locale: ",
            "mirrored: ",
            "padding: ",
            "palette: ",
            "rightInset: ",
            "rightPadding: ",
            "spacing: ",
            "topInset: ",
            "topPadding: ",
            "verticalPadding: ",
            "visualFocus: ",
            "wheelEnabled: ",
        ]
    },
    {
        "body": "RangeSlider",
        "description": "RangeSlider",
        "prefix": "RangeSlider",
        "scope": "source.qml",
        "properties": [
            "first.handle: ",
            "first.hovered: ",
            "first.implicitHandleHeight: ",
            "first.implicitHandleWidth: ",
            "first.position: ",
            "first.pressed: ",
            "first.value: ",
            "first.visualPosition: ",
            "from: ",
            "horizontal: ",
            "live: ",
            "orientation: ",
            "second.handle: ",
            "second.hovered: ",
            "second.implicitHandleHeight: ",
            "second.implicitHandleWidth: ",
            "second.position: ",
            "second.pressed: ",
            "second.value: ",
            "second.visualPosition: ",
            "snapMode: ",
            "stepSize: ",
            "to: ",
            "touchDragThreshold: ",
            "vertical: ",
            "voidfirst.decrease()",
            "voidfirst.increase()",
            "voidsecond.decrease()",
            "voidsecond.increase()",
            "availableHeight: ",
            "availableWidth: ",
            "background: ",
            "bottomInset: ",
            "bottomPadding: ",
            "contentItem: ",
            "focusPolicy: ",
            "focusReason: ",
            "font: ",
            "horizontalPadding: ",
            "hoverEnabled: ",
            "hovered: ",
            "implicitBackgroundHeight: ",
            "implicitBackgroundWidth: ",
            "implicitContentHeight: ",
            "implicitContentWidth: ",
            "leftInset: ",
            "leftPadding: ",
            "locale: ",
            "mirrored: ",
            "padding: ",
            "palette: ",
            "rightInset: ",
            "rightPadding: ",
            "spacing: ",
            "topInset: ",
            "topPadding: ",
            "verticalPadding: ",
            "visualFocus: ",
            "wheelEnabled: ",
        ]
    },
    {
        "body": "Rectangle",
        "description": "Rectangle",
        "prefix": "Rectangle",
        "scope": "source.qml",
        "properties": ["color: "]
    },
    {
        "body": "RegExpValidator",
        "description": "RegExpValidator",
        "prefix": "RegExpValidator",
        "scope": "source.qml",
        "properties": ["regExp: "]
    },
    {
        "body": "Repeater",
        "description": "Repeater",
        "prefix": "Repeater",
        "scope": "source.qml",
        "properties": [
            "count: ",
            "delegate: ",
            "model: ",
            "itemAdded(intindex,Itemitem)",
            "itemRemoved(intindex,Itemitem)",
        ]
    },
    {
        "body": "Rotation",
        "description": "Rotation",
        "prefix": "Rotation",
        "scope": "source.qml",
        "properties": ["angle: ", "axis.x", "axis.y", "axis.z", "origin.x", "origin.y"]
    },
    {
        "body": "Row",
        "description": "Row",
        "prefix": "Row",
        "scope": "source.qml",
        "properties": [
            "add: ",
            "bottomPadding: ",
            "leftPadding: ",
            "move: ",
            "padding: ",
            "populate: ",
            "rightPadding: ",
            "spacing: ",
            "topPadding: ",
            "forceLayout()",
            "positioningComplete()",
            "active: ",
        ]
    },
    {
        "body": "RowLayout",
        "description": "RowLayout",
        "prefix": "RowLayout",
        "scope": "source.qml",
        "properties": [
            "layoutDirection: ",
            "spacing: ",
        ]
    },
    {
        "body": "Scale",
        "description": "Scale",
        "prefix": "Scale",
        "scope": "source.qml",
        "properties": ["origin.x: ", "origin.y: ", "xScale: ", "yScale: "]
    },
    {
        "body": "ScrollBar",
        "description": "ScrollBar",
        "prefix": "ScrollBar",
        "scope": "source.qml",
        "properties": [
            "active: ",
            "onHorizontal: ",
            "horizontal: ",
            "interactive: ",
            "minimumSize: ",
            "orientation: ",
            "policy: ",
            "position: ",
            "pressed: ",
            "size: ",
            "snapMode: ",
            "stepSize: ",
            "onVertical: ",
            "vertical: ",
            "visualPosition: ",
            "visualSize: ",
            "availableHeight: ",
            "availableWidth: ",
            "background: ",
            "bottomInset: ",
            "bottomPadding: ",
            "contentItem: ",
            "focusPolicy: ",
            "focusReason: ",
            "font: ",
            "horizontalPadding: ",
            "hoverEnabled: ",
            "hovered: ",
            "implicitBackgroundHeight: ",
            "implicitBackgroundWidth: ",
            "implicitContentHeight: ",
            "implicitContentWidth: ",
            "leftInset: ",
            "leftPadding: ",
            "locale: ",
            "mirrored: ",
            "padding: ",
            "palette: palette ",
            "rightInset: ",
            "rightPadding: ",
            "spacing: ",
            "topInset: ",
            "topPadding: ",
            "verticalPadding: ",
            "visualFocus: ",
            "wheelEnabled: ",
            "layoutDirection: ",
            "spacing: ",
        ]
    },
    {
        "body": "ScrollIndicator",
        "description": "ScrollIndicator",
        "prefix": "ScrollIndicator",
        "scope": "source.qml",
        "properties": [
            "active: ",
            "onHorizontal: ",
            "horizontal: ",
            "minimumSize: ",
            "orientation: ",
            "position: ",
            "size: ",
            "onVertical: ",
            "vertical: ",
            "visualPosition: ",
            "visualSize: ",
            "availableHeight: ",
            "availableWidth: ",
            "background: ",
            "bottomInset: ",
            "bottomPadding: ",
            "contentItem: ",
            "focusPolicy: ",
            "focusReason: ",
            "font: ",
            "horizontalPadding: ",
            "hoverEnabled: ",
            "hovered: ",
            "implicitBackgroundHeight: ",
            "implicitBackgroundWidth: ",
            "implicitContentHeight: ",
            "implicitContentWidth: ",
            "leftInset: ",
            "leftPadding: ",
            "locale: ",
            "mirrored: ",
            "padding: ",
            "palette: ",
            "rightInset: ",
            "rightPadding: ",
            "spacing: ",
            "topInset: ",
            "topPadding: ",
            "verticalPadding: ",
            "visualFocus: ",
            "wheelEnabled: ",
            "layoutDirection: ",
            "spacing: ",
        ]
    },
    {
        "body": "ScrollView",
        "description": "ScrollView",
        "prefix": "ScrollView",
        "scope": "source.qml",
        "properties": [
            "contentChildren: ",
            "contentData: ",
            "contentHeight: ",
            "contentWidth: ",
            "availableHeight: ",
            "availableWidth: ",
            "background: ",
            "bottomInset: ",
            "bottomPadding: ",
            "contentItem: ",
            "focusPolicy: ",
            "focusReason: ",
            "font: ",
            "horizontalPadding: ",
            "hoverEnabled: ",
            "hovered: ",
            "implicitBackgroundHeight: ",
            "implicitBackgroundWidth: ",
            "implicitContentHeight: ",
            "implicitContentWidth: ",
            "leftInset: ",
            "leftPadding: ",
            "locale: ",
            "mirrored: ",
            "padding: ",
            "palette: ",
            "rightInset: ",
            "rightPadding: ",
            "spacing: ",
            "topInset: ",
            "topPadding: ",
            "verticalPadding: ",
            "visualFocus: ",
            "wheelEnabled: ",
            "layoutDirection: ",
            "spacing: ",
        ]
    },
    {
        "body": "Settings",
        "description": "Settings",
        "prefix": "Settings",
        "scope": "source.qml",
        "properties": ["category: ", "fileName: ", "setValue(key,value)"]
    },
    {
        "body": "Slider",
        "description": "Slider",
        "prefix": "Slider",
        "scope": "source.qml",
        "properties": [
            "from: ",
            "handle: ",
            "horizontal: ",
            "implicitHandleHeight: ",
            "implicitHandleWidth: ",
            "live: ",
            "orientation: ",
            "position: ",
            "pressed: ",
            "snapMode: ",
            "stepSize: ",
            "to: ",
            "touchDragThreshold: ",
            "value: ",
            "vertical: ",
            "visualPosition: ",
            "moved()",
            "availableHeight: ",
            "availableWidth: ",
            "background: ",
            "bottomInset: ",
            "bottomPadding: ",
            "contentItem: ",
            "focusPolicy: ",
            "focusReason: ",
            "font: ",
            "horizontalPadding: ",
            "hoverEnabled: ",
            "hovered: ",
            "implicitBackgroundHeight: ",
            "implicitBackgroundWidth: ",
            "implicitContentHeight: ",
            "implicitContentWidth: ",
            "leftInset: ",
            "leftPadding: ",
            "locale: ",
            "mirrored: ",
            "padding: ",
            "palette: ",
            "rightInset: ",
            "rightPadding: ",
            "spacing: ",
            "topInset: ",
            "topPadding: ",
            "verticalPadding: ",
            "visualFocus: ",
            "wheelEnabled: ",
            "layoutDirection: ",
            "spacing: ",
        ]
    },
    {
        "body": "SplitView",
        "description": "SplitView",
        "prefix": "SplitView",
        "scope": "source.qml",
        "properties": [
            "handleDelegate: ",
            "orientation: ",
            "resizing: ",
        ]
    },
    {
        "body": "Stack",
        "description": "Stack",
        "prefix": "Stack",
        "scope": "source.qml",
        "properties": []
    },
    {
        "body": "StackLayout",
        "description": "StackLayout",
        "prefix": "StackLayout",
        "scope": "source.qml",
        "properties": [
            "count: ",
            "currentIndex: ",
        ]
    },
    {
        "body": "StackView",
        "description": "StackView",
        "prefix": "StackView",
        "scope": "source.qml",
        "properties": [
            "busy: ",
            "currentItem: ",
            "depth: ",
            "empty: ",
            "onIndex: ",
            "initialItem: ",
            "popEnter: ",
            "popExit: ",
            "pushEnter: ",
            "pushExit: ",
            "replaceEnter: ",
            "replaceExit: ",
            "onStatus: ",
            "onView: ",
            "onVisible: ",
            "onActivated: ",
            "onActivating: ",
            "onDeactivated: ",
            "onDeactivating: ",
            "onRemoved: ",
            "availableHeight: ",
            "availableWidth: ",
            "background: ",
            "bottomInset: ",
            "bottomPadding: ",
            "contentItem: ",
            "focusPolicy: ",
            "focusReason: ",
            "font: ",
            "horizontalPadding: ",
            "hoverEnabled: ",
            "hovered: ",
            "implicitBackgroundHeight: ",
            "implicitBackgroundWidth: ",
            "implicitContentHeight: ",
            "implicitContentWidth: ",
            "leftInset: ",
            "leftPadding: ",
            "locale: ",
            "mirrored: ",
            "padding: ",
            "palette: ",
            "rightInset: ",
            "rightPadding: ",
            "spacing: ",
            "topInset: ",
            "topPadding: ",
            "verticalPadding: ",
            "visualFocus: ",
            "wheelEnabled: ",
        ]
    },
    {
        "body": "State",
        "description": "State",
        "prefix": "State",
        "scope": "source.qml",
        "properties": ["changes: ", "extend: ", "name: ", "when: "]
    },
    {
        "body": "String",
        "description": "String",
        "prefix": "String",
        "scope": "source.qml",
        "properties": []
    },
    {
        "body": "Switch",
        "description": "Switch",
        "prefix": "Switch",
        "scope": "source.qml",
        "properties": [
            "position: ",
            "visualPosition: ",
            "action: ",
            "autoExclusive: ",
            "autoRepeat: ",
            "autoRepeatDelay: ",
            "autoRepeatInterval: ",
            "checkable: ",
            "checked: ",
            "display: ",
            "down: ",
            "icon.color: ",
            "icon.height: ",
            "icon.name: ",
            "icon.source: ",
            "icon.width: ",
            "implicitIndicatorHeight: ",
            "implicitIndicatorWidth: ",
            "indicator: ",
            "pressX: ",
            "pressY: ",
            "pressed: ",
            "text: ",
            "canceled()",
            "clicked()",
            "doubleClicked()",
            "pressAndHold()",
            "pressed()",
            "released()",
            "toggled()",
            "availableHeight: ",
            "availableWidth: ",
            "background: ",
            "bottomInset: ",
            "bottomPadding: ",
            "contentItem: ",
            "focusPolicy: ",
            "focusReason: ",
            "font: ",
            "horizontalPadding: ",
            "hoverEnabled: ",
            "hovered: ",
            "implicitBackgroundHeight: ",
            "implicitBackgroundWidth: ",
            "implicitContentHeight: ",
            "implicitContentWidth: ",
            "leftInset: ",
            "leftPadding: ",
            "locale: ",
            "mirrored: ",
            "padding: ",
            "palette: ",
            "rightInset: ",
            "rightPadding: ",
            "spacing: ",
            "topInset: ",
            "topPadding: ",
            "verticalPadding: ",
            "visualFocus: ",
            "wheelEnabled: "
        ]
    },
    {
        "body": "Tab",
        "description": "Tab",
        "prefix": "Tab",
        "scope": "source.qml",
        "properties": ["title: ", "active: ", "asynchronous: ", "item: ", "progress: ", "source: ", "sourceComponent: ", "status: ", "loaded()", "setSource()"]
    },
    {
        "body": "TabBar",
        "description": "TabBar",
        "prefix": "TabBar",
        "scope": "source.qml",
        "properties": [
            "contentHeight: ",
            "contentWidth: ",
            "onIndex: ",
            "onPosition: ",
            "position: ",
            "onTabBar: ",
            "contentChildren: ",
            "contentData: ",
            "contentHeight: ",
            "contentModel: ",
            "contentWidth: ",
            "count: ",
            "currentIndex: ",
            "currentItem: ",
            "availableHeight: ",
            "availableWidth: ",
            "background: ",
            "bottomInset: ",
            "bottomPadding: ",
            "contentItem: ",
            "focusPolicy: ",
            "focusReason: ",
            "font: ",
            "horizontalPadding: ",
            "hoverEnabled: ",
            "hovered: ",
            "implicitBackgroundHeight: ",
            "implicitBackgroundWidth: ",
            "implicitContentHeight: ",
            "implicitContentWidth: ",
            "leftInset: ",
            "leftPadding: ",
            "locale: ",
            "mirrored: ",
            "padding: ",
            "palette: ",
            "rightInset: ",
            "rightPadding: ",
            "spacing: ",
            "topInset: ",
            "topPadding: ",
            "verticalPadding: ",
            "visualFocus: ",
            "wheelEnabled: ",
        ]
    },
    {
        "body": "TabButton",
        "description": "TabButton",
        "prefix": "TabButton",
        "scope": "source.qml",
        "properties": [
            "action: ",
            "autoExclusive: ",
            "autoRepeat: ",
            "autoRepeatDelay: ",
            "autoRepeatInterval: ",
            "checkable: ",
            "checked: ",
            "display: ",
            "down: ",
            "icon.color: ",
            "icon.height: ",
            "icon.name: ",
            "icon.source: ",
            "icon.width: ",
            "implicitIndicatorHeight: ",
            "implicitIndicatorWidth: ",
            "indicator: ",
            "pressX: ",
            "pressY: ",
            "pressed: ",
            "text: ",
            "canceled()",
            "clicked()",
            "doubleClicked()",
            "pressAndHold()",
            "pressed()",
            "released()",
            "toggled()",
            "availableHeight: ",
            "availableWidth: ",
            "background: ",
            "bottomInset: ",
            "bottomPadding: ",
            "contentItem: ",
            "focusPolicy: ",
            "focusReason: ",
            "font: ",
            "horizontalPadding: ",
            "hoverEnabled: ",
            "hovered: ",
            "implicitBackgroundHeight: ",
            "implicitBackgroundWidth: ",
            "implicitContentHeight: ",
            "implicitContentWidth: ",
            "leftInset: ",
            "leftPadding: ",
            "locale: ",
            "mirrored: ",
            "padding: ",
            "palette: ",
            "rightInset: ",
            "rightPadding: ",
            "spacing: ",
            "topInset: ",
            "topPadding: ",
            "verticalPadding: ",
            "visualFocus: ",
            "wheelEnabled: "
        ]
    },
    {
        "body": "TabView",
        "description": "TabView",
        "prefix": "TabView",
        "scope": "source.qml",
        "properties": ["contentItem: ", "count: ", "currentIndex: ", "frameVisible: ", "tabPosition: ", "tabsVisible: "]
    },
    {
        "body": "TableView",
        "description": "TableView",
        "prefix": "TableView",
        "scope": "source.qml",
        "properties": [
            "currentRow: ",
            "itemDelegate: ",
            "model: ",
            "rowCount: ",
            "section.criteria: ",
            "section.delegate: ",
            "section.labelPositioning: ",
            "section.property: ",
            "selection: ",
            "activated(row)",
            "clicked(row)",
            "doubleClicked(row)",
            "pressAndHold(row)",
            "contentItem: ",
            "flickableItem: ",
            "frameVisible: ",
            "highlightOnFocus: ",
            "horizontalScrollBarPolicy: ",
            "style: ",
            "verticalScrollBarPolicy: ",
            "viewport: "
        ]
    },
    {
        "body": "Text",
        "description": "Text",
        "prefix": "Text",
        "scope": "source.qml",
        "properties": [
            "advance: ",
            "baseUrl: ",
            "bottomPadding: ",
            "clip: ",
            "color: ",
            "contentHeight: ",
            "contentWidth: ",
            "effectiveHorizontalAlignment: ",
            "elide: ",
            "fontInfo.bold: ",
            "fontInfo.family: ",
            "fontInfo.italic: ",
            "fontInfo.pixelSize: ",
            "fontInfo.pointSize: ",
            "fontInfo.styleName: ",
            "fontInfo.weight: ",
            "fontSizeMode: ",
            "horizontalAlignment: ",
            "hoveredLink: ",
            "leftPadding: ",
            "lineCount: ",
            "lineHeight: ",
            "lineHeightMode: ",
            "linkColor: ",
            "maximumLineCount: ",
            "minimumPixelSize: ",
            "minimumPointSize: ",
            "padding: ",
            "renderType: ",
            "rightPadding: ",
            "style: ",
            "styleColor: ",
            "text: ",
            "textFormat: ",
            "topPadding: ",
            "truncated: ",
            "verticalAlignment: ",
            "wrapMode: ",
            "forceLayout()",
            "lineLaidOut(line)",
            "linkActivated(link)",
            "linkAt(x,y)",
            "linkHovered(link)"
        ]
    },
    {
        "body": "TextArea",
        "description": "TextArea",
        "prefix": "TextArea",
        "scope": "source.qml",
        "properties": [
            "background: ",
            "bottomInset: ",
            "onFlickable: ",
            "focusReason: ",
            "hoverEnabled: ",
            "hovered: ",
            "implicitBackgroundHeight: ",
            "implicitBackgroundWidth: ",
            "leftInset: ",
            "palette: ",
            "placeholderText: ",
            "placeholderTextColor: ",
            "rightInset: ",
            "topInset: ",
            "pressAndHold(event)",
            "pressed(event)",
            "released(event)",
            "activeFocusOnPress: ",
            "baseUrl: ",
            "bottomPadding: ",
            "canPaste: ",
            "canRedo: ",
            "canUndo: ",
            "color: ",
            "contentHeight: ",
            "contentWidth: ",
            "cursorDelegate: ",
            "cursorPosition: ",
            "cursorRectangle: ",
            "cursorVisible: ",
            "effectiveHorizontalAlignment: ",
            "horizontalAlignment: ",
            "hoveredLink: ",
            "inputMethodComposing: ",
            "inputMethodHints: ",
            "leftPadding: ",
            "length: ",
            "lineCount: ",
            "mouseSelectionMode: ",
            "overwriteMode: ",
            "padding: ",
            "persistentSelection: ",
            "preeditText: ",
            "readOnly: ",
            "renderType: ",
            "rightPadding: ",
            "selectByKeyboard: ",
            "selectByMouse: ",
            "selectedText: ",
            "selectedTextColor: ",
            "selectionColor: ",
            "selectionEnd: ",
            "selectionStart: ",
            "tabStopDistance: ",
            "text: ",
            "textDocument: ",
            "textFormat: ",
            "textMargin: ",
            "topPadding: ",
            "verticalAlignment: ",
            "wrapMode: ",
            "append()",
            "clear()",
            "copy()",
            "cut()",
            "deselect()",
            "editingFinished()",
            "getFormattedText()",
            "getText()",
            "insert()",
            "isRightToLeft()",
            "linkActivated()",
            "linkAt()",
            "linkHovered()",
            "moveCursorSelection()",
            "paste()",
            "positionAt()",
            "positionToRectangle()",
            "redo()",
            "remove()",
            "select()",
            "selectAll()",
            "selectWord()",
            "undo()",
        ]
    },
    {
        "body": "TextEdit",
        "description": "TextEdit",
        "prefix": "TextEdit",
        "scope": "source.qml",
        "properties": [
            "activeFocusOnPress: ",
            "baseUrl: ",
            "bottomPadding: ",
            "canPaste: ",
            "canRedo: ",
            "canUndo: ",
            "color: ",
            "contentHeight: ",
            "contentWidth: ",
            "cursorDelegate: ",
            "cursorPosition: ",
            "cursorRectangle: ",
            "cursorVisible: ",
            "effectiveHorizontalAlignment: ",
            "horizontalAlignment: ",
            "hoveredLink: ",
            "inputMethodComposing: ",
            "inputMethodHints: ",
            "leftPadding: ",
            "length: ",
            "lineCount: ",
            "mouseSelectionMode: ",
            "overwriteMode: ",
            "padding: ",
            "persistentSelection: ",
            "preeditText: ",
            "readOnly: ",
            "renderType: ",
            "rightPadding: ",
            "selectByKeyboard: ",
            "selectByMouse: ",
            "selectedText: ",
            "selectedTextColor: ",
            "selectionColor: ",
            "selectionEnd: ",
            "selectionStart: ",
            "tabStopDistance: ",
            "text: ",
            "textDocument: ",
            "textFormat: ",
            "textMargin: ",
            "topPadding: ",
            "verticalAlignment: ",
            "wrapMode: ",
            "clear()",
            "copy()",
            "cut()",
            "deselect()",
            "editingFinished()",
            "insert(position,text)",
            "isRightToLeft(start,end)",
            "linkActivated(link)",
            "linkAt(x,y)",
            "linkHovered(link)",
            "moveCursorSelection(position,mode=TextEdit.SelectCharacters)",
            "paste()",
            "redo()",
            "select(start,end)",
            "selectAll()",
            "selectWord()",
            "undo()",
        ]
    },
    {
        "body": "TextField",
        "description": "TextField",
        "prefix": "TextField",
        "scope": "source.qml",
        "properties": [
            "background: ",
            "bottomInset: ",
            "focusReason: ",
            "hoverEnabled: ",
            "hovered: ",
            "implicitBackgroundHeight: ",
            "implicitBackgroundWidth: ",
            "leftInset: ",
            "palette: ",
            "placeholderText: ",
            "placeholderTextColor: ",
            "rightInset: ",
            "topInset: ",
            "pressAndHold(event)",
            "pressed(event)",
            "released(event)",
            "acceptableInput: ",
            "activeFocusOnPress: ",
            "autoScroll: ",
            "bottomPadding: ",
            "canPaste: ",
            "canRedo: ",
            "canUndo: ",
            "color: ",
            "contentHeight: ",
            "contentWidth: ",
            "cursorDelegate: ",
            "cursorPosition: ",
            "cursorRectangle: ",
            "cursorVisible: ",
            "displayText: ",
            "echoMode: ",
            "effectiveHorizontalAlignment: ",
            "horizontalAlignment: ",
            "inputMask: ",
            "inputMethodComposing: ",
            "inputMethodHints: ",
            "leftPadding: ",
            "length: ",
            "maximumLength: ",
            "mouseSelectionMode: ",
            "overwriteMode: ",
            "padding: ",
            "passwordCharacter: ",
            "passwordMaskDelay: ",
            "persistentSelection: ",
            "preeditText: ",
            "readOnly: ",
            "renderType: ",
            "rightPadding: ",
            "selectByMouse: ",
            "selectedText: ",
            "selectedTextColor: ",
            "selectionColor: ",
            "selectionEnd: ",
            "selectionStart: ",
            "text: ",
            "topPadding: ",
            "validator: ",
            "verticalAlignment: ",
            "wrapMode: ",
            "accepted()",
            "clear()",
            "copy()",
            "cut()",
            "deselect()",
            "editingFinished()",
            "ensureVisible()",
            "getText()",
            "insert()",
            "isRightToLeft()",
            "moveCursorSelection()",
            "paste()",
            "positionAt()",
            "positionToRectangle()",
            "redo()",
            "remove()",
            "select()",
            "selectAll()",
            "selectWord()",
            "textEdited()",
            "undo()"
        ]
    },
    {
        "body": "TextInput",
        "description": "TextInput",
        "prefix": "TextInput",
        "scope": "source.qml",
        "properties": [
            "acceptableInput: ",
            "activeFocusOnPress: ",
            "autoScroll: ",
            "bottomPadding: ",
            "canPaste: ",
            "canRedo: ",
            "canUndo: ",
            "color: ",
            "contentHeight: ",
            "contentWidth: ",
            "cursorDelegate: ",
            "cursorPosition: ",
            "cursorRectangle: ",
            "cursorVisible: ",
            "displayText: ",
            "echoMode: ",
            "effectiveHorizontalAlignment: ",
            "horizontalAlignment: ",
            "inputMask: ",
            "inputMethodComposing: ",
            "inputMethodHints: ",
            "leftPadding: ",
            "length: ",
            "maximumLength: ",
            "mouseSelectionMode: ",
            "overwriteMode: ",
            "padding: ",
            "passwordCharacter: ",
            "passwordMaskDelay: ",
            "persistentSelection: ",
            "preeditText: ",
            "readOnly: ",
            "renderType: ",
            "rightPadding: ",
            "selectByMouse: ",
            "selectedText: ",
            "selectedTextColor: ",
            "selectionColor: ",
            "selectionEnd: ",
            "selectionStart: ",
            "text: ",
            "topPadding: ",
            "validator: ",
            "verticalAlignment: ",
            "wrapMode: ",
            "accepted()",
            "clear()",
            "copy()",
            "cut()",
            "deselect()",
            "editingFinished()",
            "ensureVisible(position)",
            "insert(position,text)",
            "isRightToLeft(start,end)",
            "moveCursorSelection(position,mode=TextInput.SelectCharacters)",
            "paste()",
            "redo()",
            "remove(start,end)",
            "select(start,end)",
            "selectAll()",
            "selectWord()",
            "textEdited()",
            "undo()"
        ]
    },
    {
        "body": "TextMetrics",
        "description": "TextMetrics",
        "prefix": "TextMetrics",
        "scope": "source.qml",
        "properties": ["advanceWidth: ", "boundingRect: ", "elide: ", "elideWidth: ", "elidedText: ", "font: ", "height: ", "text: ", "tightBoundingRect: ", "width: "]
    },
    {
        "body": "Timer",
        "description": "Timer",
        "prefix": "Timer",
        "scope": "source.qml",
        "properties": ["interval: ", "repeat: ", "running: ", "triggeredOnStart: ", "restart()", "start()", "stop()", "triggered()"]
    },
    {
        "body": "ToggleButton",
        "description": "ToggleButton",
        "prefix": "ToggleButton",
        "scope": "source.qml",
        "properties": ["isDefault: ", "menu: "]
    },
]

const SGWidgets = [
    {
        "body": "SGAccordion",
        "description": "SGAccordion",
        "prefix": "SGAccordion",
        "scope": "tech.strata.sgwidgets",
        "properties": ["accordionItems: ", "contentItem: ", "openCloseTime: ", "statusIcon: ", "exclusive: ", "contentsColor: ", "textOpenColor: ", "textClosedColor: ", "headerOpenColor: ", "headerClosedColor: ", "dividerColor: "]
    },
    {
        "body": "SGAlignedLabel",
        "description": "SGAlignedLabel",
        "prefix": "SGAlignedLabel",
        "scope": "tech.strata.sgwidgets",
        "properties": ["target: ", "alignment: ", "margin: ", "overrideLabelWidth: ", "text: ", "alternativeColorEnabled: ", "color: ", "implicitColor: ", "alternativeColor: ", "fontSizeMultiplier: ", "font: ", "horizontalAlignment: ", "contentHeight: ", "contentWidth: ", "clickable: ", "clicked()"]
    },
    {
        "body": "SGButton",
        "description": "SGButton",
        "prefix": "SGButton",
        "scope": "source.qml",
        "properties": ["alternativeColorEnabled: ", "fontSizeMultiplier: ", "minimumContentHeight: ", "minimumContentWidth: ", "preferredContentWidth: ", "preferredContentHeight: ", "contentHorizontalAlignment: ", "contentVerticalAlignment: ", "backgroundOnlyOnHovered: ", "scaleToFit: ", "hintText: ", "iconSize: ", "iconMirror: ", "iconColor", "implicitColor: ", "color: ", "pressedColor: ", "checkedColor: ", "roundedLeft: ", "roundedBottom: ", "roundedRight: ", "roundedTop: "]
    },
    {
        "body": "SGButtonStrip",
        "description": "SGButtonStrip",
        "prefix": "SGButtonStrip",
        "scope": "source.qml",
        "properties": ["model: ", "count: ", "exclusive: ", "orientation: ", "checkedIndices: ", "clicked(index)"]
    },
    {
        "body": "SGCircularGauge",
        "description": "SGCircularGauge",
        "prefix": "SGCircularGauge",
        "scope": "source.qml",
        "properties": ["real: ", "gaugeFillColor1: ", "gaugeFillColor2: ", "gaugeBackgroundColor: ", "centerTextColor: ", "outerTextColor: ", "unitTextFontSizeMultiplier: ", "outerTextFontSizeMultiplier: ", "valueDecimalPlaces: ", "tickmarkDecimalPlaces: ", "minimumValue: ", "maximumValue: ", "tickmarkStepSize: ", "unitText: "]
    },
    {
        "body": "SGComboBox",
        "description": "SGComboBox",
        "prefix": "SGComboBox",
        "scope": "source.qml",
        "properties": ["textColor: ", "indicatorColor: ", "borderColor: ", "borderColorFocused: ", "boxColor: ", "dividers: ", "popupHeight: ", "fontSizeMultiplier: ", "placeholderText: ", "modelWidth: ", "iconImage: ", "textField: ", "textFieldBackground: ", "backgroundItem: ", "popupItem: ", "popupBackground: "]
    },
    {
        "body": "SGGraph",
        "description": "SGGraph",
        "prefix": "SGGraph",
        "scope": "source.qml",
        "properties": ["panXEnabled: ", "panYEnabled: ", "zoomXEnabled: ", "zoomYEnabled: ", "fontSizeMultiplier: ", "mouseArea: "]
    },
    {
        "body": "SGHueSlider",
        "description": "SGHueSlider",
        "prefix": "SGHueSlider",
        "scope": "source.qml",
        "properties": ["color1: ", "color2: ", "color_value1: ", "color_value2: ", "rgbArray: ", "powerSave: "]
    },
    {
        "body": "SGInfoBox",
        "description": "SGInfoBox",
        "prefix": "SGInfoBox",
        "scope": "source.qml",
        "properties": ["textColor: ", "invalidTextColor: ", "fontSizeMultiplier: ", "boxBorderColor: ", "boxBorderWidth: ", "text: ", "horizontalAlignment: ", "placeholderText: ", "readOnly: ", "boxColor: ", "unit: ", "textPadding: ", "validator: ", "acceptableInput: ", "boxFont: ", "unitFont: ", "unitHorizontalAlignment: ", "unitOverrideWidth: ", "boxObject: ", "infoTextObject: ", "mouseAreaObject: ", "placeholderObject: ", "unitObject: ", "accepted(text)", "editingFinished(text)"]
    },
    {
        "body": "SGRadioButton",
        "description": "SGRadioButton",
        "prefix": "SGRadioButton",
        "scope": "source.qml",
        "properties": ["buttonContainer: ", "radioSize: ", "radioColor: ", "index: ", "fontSizeMultiplier: ", "color: ", "alignment: "]
    },
    {
        "body": "SGRGBSlider",
        "description": "SGRGBSlide",
        "prefix": "SGRGBSlide",
        "scope": "source.qml",
        "properties": ["rgbArray: ", "color: ", "color_value: "]
    },
    {
        "body": "SGSlider",
        "description": "SGSlider",
        "prefix": "SGSlider",
        "scope": "source.qml",
        "properties": ["fontSizeMultiplier: ", "textColor: ", "mirror: ", "handleSize: ", "orientation: ", "value: ", "from: ", "to: ", "horizontal: ", "vertical: ", "showTickmarks: ", "showLabels: ", "showInputBox: ", "showToolTip: ", " stepSize: ", "live: ", "visualPosition: ", "position: ", "snapMode: ", "pressed: ", "grooveColor: ", "fillColor: ", "slider: ", "inputBox: ", "fromText: ", "toText: ", "tickmarkRepeater: ", "inputBoxWidth: ", "toolTip: ", "toolTipText: ", "toolTipBackground: ", "validatorObject: ", "userSet(value)", "moved()"]
    },
    {
        "body": "SGSpinBox",
        "description": "SGSpinBox",
        "prefix": "SGSpinBox",
        "scope": "source.qml",
        "properties": [""]
    },
    {
        "body": "SGStatusLight",
        "description": "SGStatusLight",
        "prefix": "SGStatusLight",
        "scope": "source.qml",
        "properties": ["status: ", "customColor: ", "flatStyle: "]
    },
    {
        "body": "SGStatusLogBox",
        "description": "SGStatusLogBox",
        "prefix": "SGStatusLogBox",
        "scope": "source.qml",
        "properties": ["title: ", "titleTextColor: ", "titleBoxColor: ", "titleBoxBorderColor: ", "statusTextColor: ", "statusBoxColor: ", "statusBoxBorderColor: ", "showMessageIds: ", "model: ", "filterRole: ", "copyRole: ", "fontSizeMultiplier: ", "scrollToEnd: ", "listView: ", "listViewMouse: ", "delegate: ", "filterEnabled: ", "copyEnabled: ", "filterModel: ", "listElementTemplate: "]
    },
    {
        "body": "SGSubmitInfoBox",
        "description": "SGSubmitInfoBo",
        "prefix": "SGSubmitInfoBo",
        "scope": "source.qml",
        "properties": ["accepted(text)", "editingFinished(text)", "text: ", "infoBoxObject: ", "textColor: ", "textPadding: ", "invalidTextColor: ", "boxColor: ", "boxBorderColor: ", "boxBorderWidth: ", "unit: ", "readOnly: ", "validator: ", "placeholderText: ", "horizontalAlignment: ", "buttonText: ", "buttonImplicitWidth: ", "floatValue: ", "intValue: ", "fontSizeMultiplier: ", "appliedString", "infoBoxHeight: "]
    },
    {
        "body": "SGSwitch",
        "description": "SGSwitch",
        "prefix": "SGSwitch",
        "scope": "source.qml",
        "properties": ["released()", "canceled()", "clicked()", "toggled()", "press()", "pressAndHold()", "fontSizeMultiplier: ", "handleColor: ", "textColor: ", "labelsInside: ", "labelsInside: ", "pressed: ", "down: ", "checked: ", "checkedLabel: ", "uncheckedLabel: ", "grooveFillColor: ", "grooveColor: "]
    },
    {
        "body": "SGTextField",
        "description": "SGTextField",
        "prefix": "SGTextField",
        "scope": "source.qml",
        "properties": ["isValid: ", "activeEditing: ", "validationReady: ", "timerIsRunning: ", "isValidAffectsBackground: ", "leftIconColor: ", "leftIconSource: ", "darkMode: ", "showCursorPosition: ", "showClearButton: ", "passwordMode: ", "busyIndicatorRunning: ", "suggestionListModel: ", "suggestionListDelegate: ", "suggestionModelTextRole: ", "suggestionPosition: ", "suggestionEmptyModelText: ", "suggestionHeaderText: ", "suggestionCloseOnDown: ", "suggestionOpenWithAnyKey: ", "suggestionMaxHeight: ", "suggestionDelegateNumbering: ", "suggestionDelegateRemovable: ", "suggestionDelegateTextWrap: ", "suggestionPopup: ", "suggestionDelegateSelected(index)", "suggestionDelegateRemoveRequested(index)", "hasRightIcons: ", "revealPassword: "]
    },
    {
        "body": "SGText",
        "description": "SGText",
        "prefix": "SGText",
        "scope": "source.qml",
        "properties": ["alternativeEnabledColor: ", "implicitColor: ", "alternativeColor: ", "fontSizeMultiplier: ", "text: "]
    },
    {
        "body": "SGTextArea",
        "description": "SGTextArea",
        "prefix": "SGTextArea",
        "scope": "source.qml",
        "properties": ["text: ", "font: ", "placeholderText: ", "minimumLineCount: ", "maximumLineCount: ", "tabAllowed: ", "readOnly: ", "keepCursorAtEnd: ", "isValid: "]
    }
]

const BasicItemProperties = [
    "activeFocus: ",
    "activeFocusOnTab: ",
    "antialiasing: ",
    "baselineOffset: ",
    "children: ",
    "childrenRect: ",
    "clip: ",
    "containmentMask: ",
    "data: ",
    "enabled: ",
    "focus: ",
    "height: ",
    "id: ",
    "implicitHeight: ",
    "implicitWidth: ",
    "opacity: ",
    "parent: ",
    "resources: ",
    "rotation: ",
    "scale: ",
    "smooth: ",
    "state: ",
    "states: ",
    "transform: ",
    "transformOrigin: ",
    "transitions: ",
    "visible: ",
    "visibleChildren: ",
    "width: ",
    "x: ",
    "y: ",
    "z: ",
    "objectName: ",
]
const qtQuickBody = [
    {
        "body": "property",
        "description": "QML property alias",
        "prefix": "property",
        "scope": "source.qml",
        "properties": ["alias", "real", "string", "url", "double", "int", "bool", "color", "var", "coordinate", "date", "default", "enumeration", "size", "point", "list", "vector2d", "vector3d", "rect", "palette"]
    },
    {
        "body": "anchors",
        "description": "(all sides)",
        "prefix": "anchors",
        "scope": "source.qml",
        "properties": ["margins: ", "left: ", "right: ", "top: ", "bottom: ", "verticalCenter: ", "horizontalCenter: ", "fill: ", "centerIn: ", "horizontalOffset: ", "verticalOffset: "]
    },
    {
        "body": "console",
        "description": "console",
        "prefix": "console",
        "scope": "source.js",
        "properties": ["log(\"\")", "debug(\"\")", "info(\"\")", "warn(\"\")", "error(\"\")"]
    },
    {
        "body": "font",
        "description": "font",
        "prefix": "font",
        "scope": "source.qml",
        "properties": ["bold", "capitalization", "family", "italic", "pixelSize", "pointSize", "spacing", "underline"]
    },
]
// return an object from a string with definable properties
function createDynamicProperty(property) {
    return {
        "label": property,
        "kind": monaco.languages.CompletionItemKind.KeyWord,
        "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        "insertText": property,
        "range": null
    }
}
// filter out duplicate lines
function removeDuplicates(propertySuggestions) {
    return propertySuggestions.sort().filter(function (itm, idx, arr) {
        return !idx || itm.label !== arr[idx - 1].label;
    })
}
// This is the properties string array conversion to an object array, this has to be done in real time due to the limitations of the monaco editor suggestions
function convertStrArrayToObjArray(key, properties, isProperty = false, isIdReference = false) {
    var propertySuggestions = []
    qtObjectPropertyValues[key] = []
    for (var i = 0; i < properties.length; i++) {
        if (!isIdReference) {
            propertySuggestions.push(createDynamicProperty(properties[i]))
        } else {
            propertySuggestions.push(createDynamicProperty(properties[i].split(":")[0]))
        }
    }
    if (propertySuggestions.length !== 0) {
        propertySuggestions = removeDuplicates(propertySuggestions)
    }
    if (isProperty) {
        qtObjectPropertyValues[key] = propertySuggestions
    } else {
        qtObjectPropertyValues[key] = propertySuggestions.concat(Object.values(suggestions));
    }
}
// setting each key val pair for the object
function createQtObjectValPairs(key, val) {
    qtObjectKeyValues[key] = val
}
// creating the qtObjectKeyValues array
function convertQtQuickToObject(objArray, isProperty = false) {
    for (var i = 0; i < objArray.length; i++) {
        createQtObjectValPairs(objArray[i].prefix, { label: objArray[i].prefix, insertText: objArray[i].body, properties: objArray[i].properties, flag: isProperty, isId: false })
    }
}
// Initializes the library to become an Object array to be feed into suggestions
function initializeQtQuick(flags) {
    if (flags.qtQuickFlag) {
        convertQtQuickToObject(qtQuick)
        convertQtQuickToObject(qtQuickBody, true)
    }
    if (flags.sgwidgetsFlag) {
        convertQtQuickToObject(SGWidgets)
    }
}
// This is a register for when an Id of a type is read and/or created. Allowing us to instantiate from the id caller
function addCustomIdAndTypes(idText, position, type = "Item") {
    if (!qtIdPairs.hasOwnProperty(position.lineNumber)) {
        qtIdPairs[position.lineNumber] = {}
        qtIdPairs[position.lineNumber][idText] = type
        if (!qtObjectKeyValues.hasOwnProperty(type)) {
            type = "Item"
        }
        createQtObjectValPairs(idText, { label: idText, insertText: idText, properties: qtObjectKeyValues[type].properties, flag: true, isId: true })
        suggestions[idText] = {
            label: qtObjectKeyValues[idText].label,
            kind: monaco.languages.CompletionItemKind.Function,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            insertText: qtObjectKeyValues[idText].insertText,
            range: null,
        }
    } else {
        if (!qtIdPairs[position.lineNumber].hasOwnProperty(idText)) {
            var keys = Object.keys(qtIdPairs[position.lineNumber])
            delete suggestions[keys[0]]
            delete qtObjectKeyValues[keys[0]]
            delete qtIdPairs[position.lineNumber]
            qtIdPairs[position.lineNumber] = {}
            qtIdPairs[position.lineNumber][idText] = type
            if (!qtObjectKeyValues.hasOwnProperty(type)) {
                type = "Item"
            }
            createQtObjectValPairs(idText, { label: idText, insertText: idText, properties: qtObjectKeyValues[type].properties, flag: true, isId: true})
            suggestions[idText] = {
                label: qtObjectKeyValues[idText].label,
                kind: monaco.languages.CompletionItemKind.Function,
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                insertText: qtObjectKeyValues[idText].insertText,
                range: null,
            }
        } else if (qtIdPairs[position.lineNumber][idText] !== type) {
            qtIdPairs[position.lineNumber][idText] = type
            var keys = Object.keys(qtIdPairs[position.lineNumber])
            delete suggestions[keys[0]]
            delete qtObjectKeyValues[keys[0]]
            if (!qtObjectKeyValues.hasOwnProperty(type)) {
                type = "Item"
            }
            createQtObjectValPairs(idText, { label: idText, insertText: idText, properties: qtObjectKeyValues[type].properties, flag: true, isId: true })
            suggestions[idText] = {
                label: qtObjectKeyValues[idText].label,
                kind: monaco.languages.CompletionItemKind.Function,
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                insertText: qtObjectKeyValues[idText].insertText,
                range: null,
            }
        }
    }
}

/*
    This the global registration for the monaco editor this creates the syntax and linguistics of the qml language, as well as defining the theme of the qml language
*/
function registerQmlAsLanguage() {
    monaco.languages.register({ id: 'qml' })
    monaco.languages.setMonarchTokensProvider('qml', {
        keywords: ['readonly', 'property', 'for', 'if', 'else', 'do', 'while', 'true', 'false', 'signal', 'const', 'switch', 'import', 'as', "on", 'async', 'console', "let", "default", "function"],
        typeKeywords: ['int', 'real', 'var', 'string', 'color', 'url', 'alias', 'bool', 'double'],
        operators: [
            '=', '>', '<', '!', '~', '?', ':', '==', '<=', '>=', '!=', '===', '<==', '>==', '!==',
            '&&', '||', '++', '--', '+', '-', '*', '/', '&', '|', '^', '%',
            '<<', '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=', '^=',
            '%=', '<<=', '>>=', '>>>='
        ],
        digits: /\d+(_+\d+)*/,
        symbols: /[=><!~?:&|+\-*\/\^%]+/,
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
        regexpesc: /\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,
        tokenizer: {
            root: [
                [/[{}]/, 'delimiter.bracket'],
                [/^[A_Z0_9]{(.|\n)(?!})$/, 'delimiter.bracket.error'],
                [/[a-z_$][\w$]*/, {
                    cases: {
                        '@typeKeywords': 'keyword',
                        '@keywords': 'keyword',

                    }
                }
                ],
                [/[A-Z][\w\$]*/, 'type.identifier'],
                [/(?:^|\{|;)\s*[a-z][\w\.]*\s*(?=\:|\{)/, "property.defs"],
                [/^id:\t[a-z0-9_]*$/, "type.id"],
                { include: '@whitespace' },
                [/\/(?=([^\\\/]|\\.)+\/([gimsuy]*)(\s*)(\.|;|\/|,|\)|\]|\}|$))/, { token: 'regexp', bracket: '@open', next: '@regexp' }],
                [/[()\[\]]/, '@brackets'],
                [/[<>](?!@symbols)/, '@brackets'],
                [/@symbols/, {
                    cases: {
                        '@operators': 'delimiter',
                        '@default': ''
                    }
                }
                ],
                [/(@digits)[eE]([\-+]?(@digits))?/, 'number.float'],
                [/(@digits)\.(@digits)([eE][\-+]?(@digits))?/, 'number.float'],
                [/(@digits)/, 'number'],
                [/[;,.]/, 'delimiter'],
                [/"([^"\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
                [/'([^'\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
                [/"/, 'string', '@string_double'],
                [/'/, 'string', '@string_single'],
                [/`/, 'string', '@string_backtick'],

            ],
            whitespace: [
                [/[ \t\r\n]+/, ''],
                [/\/\*\*(?!\/)/, 'comment.doc', '@jsdoc'],
                [/\/\*/, 'comment', '@comment'],
                [/\/\/.*$/, 'comment'],
            ],

            comment: [
                [/[^\/*]+/, 'comment'],
                [/\*\//, 'comment', '@pop'],
                [/[\/*]/, 'comment']
            ],

            jsdoc: [
                [/[^\/*]+/, 'comment.doc'],
                [/\*\//, 'comment.doc', '@pop'],
                [/[\/*]/, 'comment.doc']
            ],

            // We match regular expression quite precisely
            regexp: [
                [/(\{)(\d+(?:,\d*)?)(\})/, ['regexp.escape.control', 'regexp.escape.control', 'regexp.escape.control']],
                [/(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/, ['regexp.escape.control', { token: 'regexp.escape.control', next: '@regexrange' }]],
                [/(\()(\?:|\?=|\?!)/, ['regexp.escape.control', 'regexp.escape.control']],
                [/[()]/, 'regexp.escape.control'],
                [/@regexpctl/, 'regexp.escape.control'],
                [/[^\\\/]/, 'regexp'],
                [/@regexpesc/, 'regexp.escape'],
                [/\\\./, 'regexp.invalid'],
                [/(\/)([gimsuy]*)/, [{ token: 'regexp', bracket: '@close', next: '@pop' }, 'keyword.other']],
            ],

            regexrange: [
                [/-/, 'regexp.escape.control'],
                [/\^/, 'regexp.invalid'],
                [/@regexpesc/, 'regexp.escape'],
                [/[^\]]/, 'regexp'],
                [/\]/, { token: 'regexp.escape.control', next: '@pop', bracket: '@close' }],
            ],

            string_double: [
                [/[^\\"]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/"/, 'string', '@pop']
            ],

            string_single: [
                [/[^\\']+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/'/, 'string', '@pop']
            ],

            string_backtick: [
                [/\$\{/, { token: 'delimiter.bracket' }],
                [/[^\\`$]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/`/, 'string', '@pop']
            ],
        }

    })
    monaco.editor.defineTheme('qmlTheme', {
        base: 'vs',
        inherit: false,
        rules: [
            { token: "comment", foreground: "#32C132" },
            { token: "delimiter.bracket", foreground: "#000000" },
            { token: "keyword", foreground: "#829356" },
            { token: "type.identifier", foreground: "#DF00FF" },
            { token: "string", foreground: "#32C132" },
            { token: "property.defs", foreground: "#BA262B" },
            { token: "type.id", fontStyle: 'italic' },
            { token: "string.escape.invalid", foreground: "#FF0000", fontStyle: 'italic underline' },
            { token: "regexp.invalid", foreground: "#FF0000", fontStyle: 'italic underline' },
            { token: "string.invalid", foreground: "#FF0000", fontStyle: 'italic underline' },
            { token: "regexp.escape.control", foreground: "#FF0000", fontStyle: 'italic' },
            { token: "regexp", foreground: "#FF0000", fontStyle: 'italic' },
            { token: "delimiter.bracket.error", foreground: "#FF0000" }
        ]
    })

    runQmlProvider()
    editor = monaco.editor.create(document.getElementById('container'), {
        value: "",
        language: 'qml',
        theme: "qmlTheme",
        insertSpaces: true,
        detectIndentation: true,
        tabCompletion: "on",
        formatOnPaste: true,
    });

    function getValue() {
        return editor.getValue();
    }

    function setValue(value) {
        editor.setValue(value)
    }

    isInitialized = true
    // This searches and determines where the position lies within each child Item, so that the correct Qt file class is returned
    function searchForChildBrackets(model, position) {
        var prevMatch = model.findPreviousMatch("{", position, false, false)
        var nextBracketMatch = model.findNextMatch("{", position, false, false)
        var prevBracketMatch = model.findPreviousMatch("}", position, false, false)
        var nextMatch = model.findNextMatch("}", position, false, false)
        var nextnextMatch = model.findNextMatch("}", { lineNumber: nextMatch.range.startLineNumber, column: nextMatch.range.endColumn }, false, false)
        var prevprevMatch = model.findPreviousMatch("{", { lineNumber: prevMatch.range.startLineNumber, column: prevMatch.range.startColumn }, false, false)
        //Edge Case 4: this is when there is only one QtItem, most common is when we create a new file
        if (prevMatch.range.startLineNumber === topOfFile.range.startLineNumber && nextMatch.range.startLineNumber === bottomOfFile.range.startLineNumber) {
            propRange = {
                startLineNumber: prevMatch.range.startLineNumber,
                endLineNumber: nextMatch.range.startLineNumber,
                startColumn: prevMatch.range.startColumn,
                endColumn: nextMatch.range.endColumn
            }
            return retrieveType(model, propRange)
        }
        //Edge Case 3: this is to ensure that editing the top of the file does not allow a child item to read in its parent data i.e Item and anchors dont mix
        if (prevMatch.range.startLineNumber === topOfFile.range.startLineNumber || prevprevMatch.range.startLineNumber === topOfFile.range.startLineNumber) {
            if (position.lineNumber >= prevMatch.range.startLineNumber && position.lineNumber <= nextMatch.range.startLineNumber && (nextMatch.range.startLineNumber <= nextnextMatch.range.startLineNumber && prevBracketMatch.range.startLineNumber >= nextnextMatch.range.startLineNumber)) {
                propRange = {
                    startLineNumber: prevMatch.range.startLineNumber,
                    endLineNumber: nextMatch.range.startLineNumber,
                    startColumn: prevMatch.range.startColumn,
                    endColumn: nextMatch.range.endColumn
                }
                return retrieveType(model, propRange)
            }
        }
        //Edge Case 5: same as 3, just inveresed for the end of the file
        if (nextMatch.range.startLineNumber === bottomOfFile.range.startLineNumber || nextnextMatch.range.startLineNumber === bottomOfFile.range.startLineNumber) {
            if (position.lineNumber >= prevMatch.range.startLineNumber && position.lineNumber <= nextMatch.range.startLineNumber && prevMatch.range.startLineNumber > prevBracketMatch.range.startLineNumber) {
                propRange = {
                    startLineNumber: prevMatch.range.startLineNumber,
                    endLineNumber: nextMatch.range.startLineNumber,
                    startColumn: prevMatch.range.startColumn,
                    endColumn: nextMatch.range.endColumn
                }
                return retrieveType(model, propRange)
            }
        }
        //Normal case: the child is independent and returns the type
        if (position.lineNumber >= prevMatch.range.startLineNumber && (prevMatch.range.startLineNumber > prevBracketMatch.range.startLineNumber)) {
            if (position.lineNumber <= nextMatch.range.startLineNumber && nextMatch.range.startLineNumber < nextBracketMatch.range.startLineNumber) {
                propRange = {
                    startLineNumber: prevMatch.range.startLineNumber,
                    endLineNumber: nextMatch.range.startLineNumber,
                    startColumn: prevMatch.range.startColumn,
                    endColumn: nextMatch.range.endColumn
                }
                return retrieveType(model, propRange)
                // Edge Case 1: A rare case where if there is no first child of an item on loaded the properties will not propagate
            } else if (nextMatch.range.startLineNumber > nextBracketMatch.range.startLineNumber) {
                var nextPosition = { lineNumber: nextBracketMatch.range.startLineNumber, column: nextBracketMatch.range.startColumn }
                var prevParent = findPreviousBracketParent(model, nextPosition)
                if (qtObjectKeyValues.hasOwnProperty(prevParent)) {
                    propRange = {
                        startLineNumber: nextMatch.range.startLineNumber,
                        endLineNumber: nextBracketMatch.range.startLineNumber,
                        startColumn: nextMatch.range.startColumn,
                        endColumn: nextBracketMatch.range.endColumn,
                    }
                    convertStrArrayToObjArray(prevParent, qtObjectKeyValues[prevParent].properties, qtObjectKeyValues[prevParent].flag)
                    if (currentItems[prevParent] === undefined) {
                        currentItems[prevParent] = {}
                    }
                    currentItems[prevParent][propRange] = qtObjectPropertyValues[prevParent]
                    return currentItems[prevParent][propRange]
                }
            }
            //Edge case 2: this is the most common edge case hit where the properties between sibling items are intermingled this determines what the parent item is
        } else if (prevMatch.range.startLineNumber < prevBracketMatch.range.startLineNumber && position.lineNumber <= nextMatch.range.startLineNumber) {
            var prevParent = findPreviousBracketParent(model, position)
            if (qtObjectKeyValues.hasOwnProperty(prevParent)) {
                propRange = {
                    startLineNumber: prevMatch.range.startLineNumber,
                    endLineNumber: prevBracketMatch.range.startLineNumber,
                    startColumn: prevMatch.range.startColumn,
                    endColumn: prevBracketMatch.range.endColumn,
                }
                convertStrArrayToObjArray(prevParent, qtObjectKeyValues[prevParent].properties, qtObjectKeyValues[prevParent].flag)
                if (currentItems[prevParent] === undefined) {
                    currentItems[prevParent] = {}
                }
                currentItems[prevParent][propRange] = qtObjectPropertyValues[prevParent]
                return currentItems[prevParent][propRange]
            }
        }
    }
    // This creates the suggestions widgets and suggestion items, returning the determined suggestions, reads the files ids, updates editor settings per initial conditions
    function runQmlProvider() {
        monaco.languages.registerCompletionItemProvider('qml', {
            triggerCharacters: ['.'],
            provideCompletionItems: (model, position) => {
                var currText = model.getValueInRange({ startLineNumber: position.lineNumber, startColumn: 0, endLineNumber: position.lineNumber, endColumn: position.column });
                var currWords = currText.replace("\t", "").split(" ");
                var active = currWords[currWords.length - 1]
                fullRange = model.getFullModelRange()
                topOfFile = model.findNextMatch("{", { lineNumber: fullRange.startLineNumber, column: fullRange.startColumn })
                bottomOfFile = model.findPreviousMatch("}", { lineNumber: fullRange.endLineNumber, column: fullRange.endColumn })
                var getId = model.findNextMatch("id:", { lineNumber: fullRange.startLineNumber, column: fullRange.startColumn })
                if (getId !== null && getId !== undefined) {
                    var nextCheck = model.findNextMatch("}", { lineNumber: getId.range.endLineNumber, column: getId.range.endColumn })
                    var prevCheck = model.findPreviousMatch("{", { lineNumber: getId.range.startLineNumber, column: getId.range.startcolumn })
                    if (!(nextCheck.range.startLineNumber === bottomOfFile.range.startLineNumber && prevCheck.range.startLineNumber === topOfFile.range.startLineNumber)) {
                        getTypeID(model)
                    }
                }
                if (topOfFile === null && bottomOfFile === null) {
                    return { suggestions: suggestions }
                }
                if ((position.lineNumber < topOfFile.range.startLineNumber || position.lineNumber > bottomOfFile.range.startLineNumber) || (bottomOfFile === null && topOfFile === null)) {
                    editor.updateOptions({
                        suggest: {
                            showFunctions: false,
                            showClasses: true,
                            showKeyWords: false,
                            showProperties: false,
                        }
                    })
                } else {
                    editor.updateOptions({
                        suggest: {
                            showFunctions: true,
                            showClasses: true,
                            showKeyWords: true,
                            showProperties: true,
                        }
                    })
                }
                if (active.includes(".")) {
                    const activeWord = active.substring(0, active.length - 1).split('.')[0]
                    if (qtObjectKeyValues.hasOwnProperty(activeWord)) {
                        convertStrArrayToObjArray(activeWord, qtObjectKeyValues[activeWord].properties, qtObjectKeyValues[activeWord].flag, qtObjectKeyValues[activeWord].isId)
                        return { suggestions: qtObjectPropertyValues[activeWord] }
                    }
                }
                var fetchedSuggestions = searchForChildBrackets(model, position)
                return { suggestions: fetchedSuggestions === undefined || fetchedSuggestions === null ? Object.values(suggestions) : fetchedSuggestions }
            }
        })
    }
    // Searches for the parent Item based off of the end column of a sibling item, this searches up and checks for time where the current line number is a child of the item
    function findPreviousBracketParent(model, position) {
        var currentPosition = position;
        var parent = null
        while (currentPosition.lineNumber <= position.lineNumber) {
            var getPrev = model.findPreviousMatch("{", currentPosition)
            var getPrevNext = model.findNextMatch("}",{lineNumber: getPrev.range.startLineNumber, column: getPrev.range.startColumn})
            if (currentPosition.lineNumber < getPrev.range.startLineNumber) {
                return suggestions
            }

            if(currentPosition.lineNumber < getPrevNext.range.startLineNumber){
                var content = model.getLineContent(getPrev.range.startLineNumber)
                var splitContent = content.replace("\t", "").split(/\{|\t/)
                var bracketWord = splitContent[0].trim()
                parent = bracketWord
                return parent
            }

            currentPosition = { lineNumber: getPrev.range.startLineNumber, column: getPrev.range.startColumn }

        }
    }
    // Searches and initializes all id types to the suggestions object as well as allow updates to each item
    function getTypeID(model, position) {
        var position = { lineNumber: fullRange.endLineNumber, column: fullRange.endColumn }
        while (position.lineNumber > fullRange.startLineNumber && !searchedIds) {
            var getPrevIDPosition = model.findPreviousMatch("id:", position, false, false)
            if (position.lineNumber < getPrevIDPosition.range.startLineNumber) {
                break;
            }

            var prevIdLine = model.getLineContent(getPrevIDPosition.range.startLineNumber)
            var prevId = prevIdLine.replace("\t", "").split(":")[1].trim()

            var getIdType = model.findPreviousMatch("{", { lineNumber: getPrevIDPosition.range.startLineNumber, column: getPrevIDPosition.range.startColumn })
            position = { lineNumber: getIdType.range.startLineNumber, column: getIdType.range.startColumn }
            var content = model.getValueInRange({ startLineNumber: getIdType.range.startLineNumber, startColumn: 0, endLineNumber: getIdType.range.startLineNumber, endColumn: getIdType.range.endColumn })
            var type = content.replace("\t", "").split(/\{|\t/)[0].trim()
            addCustomIdAndTypes(prevId, position, type)
        }
        searchedIds = true
    }
    // This grabs the Item type from the parent bracket and returns the suggestions
    function retrieveType(model, propRange) {
        var content = model.getLineContent(propRange.startLineNumber)
        var splitContent = content.replace("\t", "").split(/\{|\t/)
        var bracketWord = splitContent[0].trim()
        if (qtObjectKeyValues.hasOwnProperty(bracketWord)) {
            convertStrArrayToObjArray(bracketWord, qtObjectKeyValues[bracketWord].properties, qtObjectKeyValues[bracketWord].flag)
            if (currentItems[bracketWord] === undefined) {
                currentItems[bracketWord] = {}
            }
            currentItems[bracketWord][propRange] = qtObjectPropertyValues[bracketWord]
            return currentItems[bracketWord][propRange]
        } else {
            return Object.values(suggestions)
        }
    }

    editor.getModel().onDidChangeContent((event) => {
        var getId =  editor.getModel().getLineContent(event.changes[0].range.startLineNumber);
        var position = {lineNumber: event.changes[0].range.startLineNumber, column: event.changes[0].range.startColumn}
        if (getId.includes("id:")) {
            var word = getId.replace("\t", "").split(":")[1].trim()
            var getIdType =  editor.getModel().findPreviousMatch("{", position, false, false)
            var content =  editor.getModel().getLineContent({ lineNumber: getIdType.range.startLineNumber, column: getIdType.range.startColumn })
            var type = content.replace("\t", "").split(/\{|\t/)[0].trim()
            addCustomIdAndTypes(word, position, type)
        }
    })
}

/*
    External facing functions that will be used in conjunction with the Visual Editor
*/
function searchForUUID(uuid){
    const model = editor.getModel()
    const range = model.getFullModelRange()
    const uuidMatch = model.findNextMatch(uuid,{lineNumber: range.startLineNumber, column: range.startColumn})
    const endUUidMatch = model.findNextMatch(`end_${uuid}`,{lineNumber: range.startLineNumber, column: range.startColumn})
    if (uuidMatch !== null && endUUidMatch !== null) {
        editor.revealLineInCenter(uuidMatch.range.startLineNumber)
        editor.setSelection({startLineNumber: uuidMatch.range.startLineNumber, startColumn: 0, endColumn: endUUidMatch.range.endColumn, endLineNumber: endUUidMatch.range.startLineNumber})
    } else {
        err_flag = true
        consoleErrorMessage("uuid_search")
    }
}

function consoleErrorMessage(type){
    switch(type){
        case "uuid_search": err_msg = ERROR_TYPES.UUID_ERROR
        break;
        case "parent_search": err_msg = ERROR_TYPES.PARENT_ERROR
        break;
        default: err_msg = ERROR_TYPES.GENERIC_ERROR
    }
}
