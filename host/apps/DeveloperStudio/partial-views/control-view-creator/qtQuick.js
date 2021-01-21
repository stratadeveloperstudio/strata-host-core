const qtQuick = [
    {
        "body": "Abstract3DSeries{\n    //baseColor: color\n    //baseGradient: ColorGradient\n    //colorStyle: Theme3D.ColorStyle\n    //itemLabel: string\n    //itemLabelFormat: string\n    //itemLabelVisible: bool\n    //mesh: Abstract3DSeries.Mesh\n    //meshRotation: quaternion\n    //meshSmooth: bool\n    //multiHighlightColor: color\n    //multiHighlightGradient: ColorGradient\n    //name: string\n    //singleHighlightColor: color\n    //singleHighlightGradient: ColorGradient\n    //type: Abstract3DSeries.SeriesType\n    //userDefinedMesh: string\n    //visible: bool\n}",
        "description": "Abstract3DSeries",
        "prefix": "Abstract3DSeries",
        "scope": "source.qml"
    },
    {
        "body": "AbstractActionInput{\n    \n}",
        "description": "AbstractActionInput",
        "prefix": "AbstractActionInput",
        "scope": "source.qml"
    },
    {
        "body": "AbstractAnimation{\n    //animationName: string\n    //animationType: enumeration\n    //duration: real\n    //position: real\n}",
        "description": "AbstractAnimation",
        "prefix": "AbstractAnimation",
        "scope": "source.qml"
    },
    {
        "body": "AbstractAxis{\n    //alignment: alignment\n    //color: color\n    //gridLineColor: color\n    //gridVisible: bool\n    //labelsAngle: int\n    //labelsColor: color\n    //labelsFont: font\n    //labelsVisible: bool\n    //lineVisible: bool\n    //minorGridLineColor: color\n    //minorGridVisible: bool\n    //orientation: Qt.Orientation\n    //reverse: alignment\n    //shadesBorderColor: color\n    //shadesColor: color\n    //shadesVisible: bool\n    //titleFont: font\n    //titleText: string\n    //titleVisible: bool\n    //visible: bool\n}",
        "description": "AbstractAxis",
        "prefix": "AbstractAxis",
        "scope": "source.qml"
    },
    {
        "body": "AbstractAxis3D{\n    //autoAdjustRange: bool\n    //labelAutoRotation: real\n    //labels: list\n    //max: real\n    //min: real\n    //orientation: AbstractAxis3D.AxisOrientation\n    //title: string\n    //titleFixed: bool\n    //titleVisible: bool\n    //type: AbstractAxis3D.AxisType\n}",
        "description": "AbstractAxis3D",
        "prefix": "AbstractAxis3D",
        "scope": "source.qml"
    },
    {
        "body": "AbstractAxisInput{\n    //sourceDevice: AbstractPhysicalDevice\n}",
        "description": "AbstractAxisInput",
        "prefix": "AbstractAxisInput",
        "scope": "source.qml"
    },
    {
        "body": "AbstractBarSeries{\n    //axisX: AbstractAxis\n    //axisXTop: AbstractAxis\n    //axisY: AbstractAxis\n    //axisYRight: AbstractAxis\n    //barWidth: real\n    //count: int\n    //labelsAngle: real\n    //labelsFormat: string\n    //labelsPosition: enumeration\n    //labelsPrecision: real\n    //labelsVisible: bool\n    //barsetsAdded()\n    //barsetsRemoved()\n    //clear()\n    //clicked(intindex,BarSetbarset)\n    //doubleClicked(intindex,BarSetbarset)\n    //hovered(boolstatus,intindex,BarSetbarset)\n    //pressed(intindex,BarSetbarset)\n    //released(intindex,BarSetbarset)\n    //name: string\n    //opacity: real\n    //type: enumeration\n    //useOpenGL: bool\n    //visible: bool\n}",
        "description": "AbstractBarSeries",
        "prefix": "AbstractBarSeries",
        "scope": "source.qml"
    },
    {
        "body": "AbstractButton{\n    //action: Action\n    //autoExclusive: bool\n    //autoRepeat: bool\n    //autoRepeatDelay: int\n    //autoRepeatInterval: int\n    //checkable: bool\n    //checked: bool\n    //display: enumeration\n    //down: bool\n    //icon.color: color\n    //icon.height: int\n    //icon.name: string\n    //icon.source: url\n    //icon.width: int\n    //implicitIndicatorHeight: real\n    //implicitIndicatorWidth: real\n    //indicator: Item\n    //pressX: real\n    //pressY: real\n    //pressed: bool\n    //text: string\n    //canceled()\n    //clicked()\n    //doubleClicked()\n    //pressAndHold()\n    //pressed()\n    //released()\n    //toggled()\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "AbstractButton",
        "prefix": "AbstractButton",
        "scope": "source.qml"
    },
    {
        "body": "AbstractClipAnimator{\n    //loops: int\n}",
        "description": "AbstractClipAnimator",
        "prefix": "AbstractClipAnimator",
        "scope": "source.qml"
    },
    {
        "body": "AbstractClipBlendNode{\n    \n}",
        "description": "AbstractClipBlendNode",
        "prefix": "AbstractClipBlendNode",
        "scope": "source.qml"
    },
    {
        "body": "AbstractDataProxy{\n    //type: AbstractDataProxy.DataType\n}",
        "description": "AbstractDataProxy",
        "prefix": "AbstractDataProxy",
        "scope": "source.qml"
    },
    {
        "body": "AbstractGraph3D{\n    //aspectRatio: real\n    //currentFps: int\n    //customItemList: list<Custom3DItem>\n    //horizontalAspectRatio: real\n    //inputHandler: AbstractInputHandler3D\n    //locale: locale\n    //margin: real\n    //measureFps: bool\n    //msaaSamples: int\n    //optimizationHints: AbstractGraph3D.OptimizationHints\n    //orthoProjection: bool\n    //polar: bool\n    //queriedGraphPosition: vector3d\n    //radialLabelOffset: real\n    //reflection: bool\n    //reflectivity: real\n    //renderingMode: AbstractGraph3D.RenderingMode\n    //scene: Scene3D\n    //selectedElement: AbstractGraph3D.ElementType\n    //selectionMode: AbstractGraph3D.SelectionMode\n    //shadowQuality: AbstractGraph3D.ShadowQuality\n    //shadowsSupported: bool\n    //theme: Theme3D\n}",
        "description": "AbstractGraph3D",
        "prefix": "AbstractGraph3D",
        "scope": "source.qml"
    },
    {
        "body": "AbstractInputHandler3D{\n    \n}",
        "description": "AbstractInputHandler3D",
        "prefix": "AbstractInputHandler3D",
        "scope": "source.qml"
    },
    {
        "body": "AbstractPhysicalDevice{\n    \n}",
        "description": "AbstractPhysicalDevice",
        "prefix": "AbstractPhysicalDevice",
        "scope": "source.qml"
    },
    {
        "body": "AbstractRayCaster{\n    //filterMode: enumeration\n    //hits: array\n    //runMode: enumeration\n}",
        "description": "AbstractRayCaster",
        "prefix": "AbstractRayCaster",
        "scope": "source.qml"
    },
    {
        "body": "AbstractSeries{\n    //name: string\n    //opacity: real\n    //type: enumeration\n    //useOpenGL: bool\n    //visible: bool\n}",
        "description": "AbstractSeries",
        "prefix": "AbstractSeries",
        "scope": "source.qml"
    },
    {
        "body": "AbstractSkeleton{\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "AbstractSkeleton",
        "prefix": "AbstractSkeleton",
        "scope": "source.qml"
    },
    {
        "body": "AbstractTextureImage{\n    //face: enumeration\n    //layer: int\n    //mipLevel: int\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "AbstractTextureImage",
        "prefix": "AbstractTextureImage",
        "scope": "source.qml"
    },
    {
        "body": "Accelerometer{\n    //accelerationMode: AccelerationMode\n    //active: bool\n    //alwaysOn: bool\n    //availableDataRates: list<Range>\n    //axesOrientationMode: Sensor: : AxesOrientationMode\n    //bufferSize: int\n    //busy: bool\n    //connectedToBackend: bool\n    //currentOrientation: int\n    //dataRate: int\n    //description: string\n    //efficientBufferSize: int\n    //error: int\n    //identifier: string\n    //maxBufferSize: int\n    //outputRange: int\n    //outputRanges: list<OutputRange>\n    //reading: SensorReading\n    //skipDuplicates: bool\n    //type: string\n    //userOrientation: int\n}",
        "description": "Accelerometer",
        "prefix": "Accelerometer",
        "scope": "source.qml"
    },
    {
        "body": "AccelerometerReading{\n    //x: qreal\n    //y: qreal\n    //z: qreal\n    //timestamp: quint64\n}",
        "description": "AccelerometerReading",
        "prefix": "AccelerometerReading",
        "scope": "source.qml"
    },
    {
        "body": "Accessible{\n    //checkStateMixed: bool\n    //checkable: bool\n    //checked: bool\n    //defaultButton: bool\n    //description: string\n    //editable: bool\n    //focusable: bool\n    //focused: bool\n    //ignored: bool\n    //multiLine: bool\n    //name: string\n    //passwordEdit: bool\n    //pressed: bool\n    //readOnly: bool\n    //role: enumeration\n    //searchEdit: bool\n    //selectable: bool\n    //selectableText: bool\n    //selected: bool\n    //decreaseAction()\n    //increaseAction()\n    //nextPageAction()\n    //pressAction()\n    //previousPageAction()\n    //scrollDownAction()\n    //scrollLeftAction()\n    //scrollRightAction()\n    //scrollUpAction()\n    //toggleAction()\n}",
        "description": "Accessible",
        "prefix": "Accessible",
        "scope": "source.qml"
    },
    {
        "body": "Action{\n    //checkable: bool\n    //checked: bool\n    //enabled: bool\n    //icon.color: color\n    //icon.height: int\n    //icon.name: string\n    //icon.source: url\n    //icon.width: int\n    //shortcut: keysequence\n    //text: string\n    //toggled(QtObjectsource)\n    //triggered(QtObjectsource)\n    //objectName: string\n}",
        "description": "Action",
        "prefix": "Action",
        "scope": "source.qml"
    },
    {
        "body": "ActionGroup{\n    //actions: list<Action>\n    //checkedAction: Action\n    //enabled: bool\n    //exclusive: bool\n    //onGroup : Actiongro: { }\n    //triggered(Actionaction)\n    //objectName: string\n}",
        "description": "ActionGroup",
        "prefix": "ActionGroup",
        "scope": "source.qml"
    },
    {
        "body": "ActionInput{\n    //buttons: list<int>\n    //sourceDevice: AbstractPhysicalDevice\n    //buttonsChanged(constQVector<int>&buttons)\n    //sourceDeviceChanged()\n}",
        "description": "ActionInput",
        "prefix": "ActionInput",
        "scope": "source.qml"
    },
    {
        "body": "AdditiveClipBlend{\n    //additiveClip: AbstractClipBlendNode\n    //additiveFactor: real\n    //baseClip: AbstractClipBlendNode\n}",
        "description": "AdditiveClipBlend",
        "prefix": "AdditiveClipBlend",
        "scope": "source.qml"
    },
    {
        "body": "Address{\n    //address: QGeoAddress\n    //city: string\n    //country: string\n    //countryCode: string\n    //county: string\n    //district: string\n    //isTextGenerated: bool\n    //postalCode: string\n    //state: string\n    //street: string\n    //text: string\n}",
        "description": "Address",
        "prefix": "Address",
        "scope": "source.qml"
    },
    {
        "body": "Affector{\n    //enabled: bool\n    //groups: list<string>\n    //once: bool\n    //shape: Shape\n    //system: ParticleSystem\n    //whenCollidingWith: list<string>\n    //affected(realx,realy)\n}",
        "description": "Affector",
        "prefix": "Affector",
        "scope": "source.qml"
    },
    {
        "body": "Age{\n    //advancePosition: bool\n    //lifeLeft: int\n    //enabled: bool\n    //groups: list<string>\n    //once: bool\n    //shape: Shape\n    //system: ParticleSystem\n    //whenCollidingWith: list<string>\n    //affected(realx,realy)\n}",
        "description": "Age",
        "prefix": "Age",
        "scope": "source.qml"
    },
    {
        "body": "AlphaCoverage{\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "AlphaCoverage",
        "prefix": "AlphaCoverage",
        "scope": "source.qml"
    },
    {
        "body": "AlphaTest{\n    //alphaFunction: enumeration\n    //referenceValue: real\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "AlphaTest",
        "prefix": "AlphaTest",
        "scope": "source.qml"
    },
    {
        "body": "Altimeter{\n    //active: bool\n    //alwaysOn: bool\n    //availableDataRates: list<Range>\n    //axesOrientationMode: Sensor: : AxesOrientationMode\n    //bufferSize: int\n    //busy: bool\n    //connectedToBackend: bool\n    //currentOrientation: int\n    //dataRate: int\n    //description: string\n    //efficientBufferSize: int\n    //error: int\n    //identifier: string\n    //maxBufferSize: int\n    //outputRange: int\n    //outputRanges: list<OutputRange>\n    //reading: SensorReading\n    //skipDuplicates: bool\n    //type: string\n    //userOrientation: int\n}",
        "description": "Altimeter",
        "prefix": "Altimeter",
        "scope": "source.qml"
    },
    {
        "body": "AltimeterReading{\n    //altitude: qreal\n    //timestamp: quint64\n}",
        "description": "AltimeterReading",
        "prefix": "AltimeterReading",
        "scope": "source.qml"
    },
    {
        "body": "AmbientLightReading{\n    //lightLevel: LightLevel\n    //timestamp: quint64\n}",
        "description": "AmbientLightReading",
        "prefix": "AmbientLightReading",
        "scope": "source.qml"
    },
    {
        "body": "AmbientLightSensor{\n    //active: bool\n    //alwaysOn: bool\n    //availableDataRates: list<Range>\n    //axesOrientationMode: Sensor: : AxesOrientationMode\n    //bufferSize: int\n    //busy: bool\n    //connectedToBackend: bool\n    //currentOrientation: int\n    //dataRate: int\n    //description: string\n    //efficientBufferSize: int\n    //error: int\n    //identifier: string\n    //maxBufferSize: int\n    //outputRange: int\n    //outputRanges: list<OutputRange>\n    //reading: SensorReading\n    //skipDuplicates: bool\n    //type: string\n    //userOrientation: int\n}",
        "description": "AmbientLightSensor",
        "prefix": "AmbientLightSensor",
        "scope": "source.qml"
    },
    {
        "body": "AmbientTemperatureReading{\n    //temperature: qreal\n    //timestamp: quint64\n}",
        "description": "AmbientTemperatureReading",
        "prefix": "AmbientTemperatureReading",
        "scope": "source.qml"
    },
    {
        "body": "AmbientTemperatureSensor{\n    //active: bool\n    //alwaysOn: bool\n    //availableDataRates: list<Range>\n    //axesOrientationMode: Sensor: : AxesOrientationMode\n    //bufferSize: int\n    //busy: bool\n    //connectedToBackend: bool\n    //currentOrientation: int\n    //dataRate: int\n    //description: string\n    //efficientBufferSize: int\n    //error: int\n    //identifier: string\n    //maxBufferSize: int\n    //outputRange: int\n    //outputRanges: list<OutputRange>\n    //reading: SensorReading\n    //skipDuplicates: bool\n    //type: string\n    //userOrientation: int\n}",
        "description": "AmbientTemperatureSensor",
        "prefix": "AmbientTemperatureSensor",
        "scope": "source.qml"
    },
    {
        "body": "AnalogAxisInput{\n    //axis: int\n}",
        "description": "AnalogAxisInput",
        "prefix": "AnalogAxisInput",
        "scope": "source.qml"
    },
    {
        "body": "AnchorAnimation{\n    //duration: int\n    //easing.amplitude: real\n    //easing.overshoot: real\n    //easing.period: real\n    //easing.type: enumeration\n    //targets: list<Item>\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "AnchorAnimation",
        "prefix": "AnchorAnimation",
        "scope": "source.qml"
    },
    {
        "body": "AnchorChanges{\n    //anchors.baseline: AnchorLine\n    //anchors.bottom: AnchorLine\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.left: AnchorLine\n    //anchors.right: AnchorLine\n    //anchors.top: AnchorLine\n    //anchors.verticalCenter: AnchorLine\n    //target: Item\n}",
        "description": "AnchorChanges",
        "prefix": "AnchorChanges",
        "scope": "source.qml"
    },
    {
        "body": "AngleDirection{\n    //angle: real\n    //angleVariation: real\n    //magnitude: real\n    //magnitudeVariation: real\n}",
        "description": "AngleDirection",
        "prefix": "AngleDirection",
        "scope": "source.qml"
    },
    {
        "body": "AnimatedImage{\n    //currentFrame: int\n    //frameCount: int\n    //paused: bool\n    //playing: bool\n    //source: url\n    //speed: real\n    //asynchronous: bool\n    //autoTransform: bool\n    //cache: bool\n    //fillMode: enumeration\n    //horizontalAlignment: enumeration\n    //mipmap: bool\n    //mirror: bool\n    //paintedHeight: real\n    //paintedWidth: real\n    //progress: real\n    //smooth: bool\n    //source: url\n    //sourceSize: QSize\n    //status: enumeration\n    //verticalAlignment: enumeration\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "AnimatedImage",
        "prefix": "AnimatedImage",
        "scope": "source.qml"
    },
    {
        "body": "AnimatedSprite{\n    //currentFrame: int\n    //frameCount: int\n    //frameDuration: int\n    //frameHeight: int\n    //frameRate: qreal\n    //frameSync: bool\n    //frameWidth: int\n    //frameX: int\n    //frameY: int\n    //interpolate: bool\n    //loops: int\n    //paused: bool\n    //reverse: bool\n    //running: bool\n    //source: url\n    //finished()\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "AnimatedSprite",
        "prefix": "AnimatedSprite",
        "scope": "source.qml"
    },
    {
        "body": "Animation{\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "Animation",
        "prefix": "Animation",
        "scope": "source.qml"
    },
    {
        "body": "AnimationController{\n    //activeAnimationGroup: int\n    //animationGroups: list<AnimationGroup>\n    //entity: Entity\n    //position: real\n    //positionOffset: real\n    //positionScale: real\n    //recursive: bool\n}",
        "description": "AnimationController",
        "prefix": "AnimationController",
        "scope": "source.qml"
    },
    {
        "body": "AnimationGroup{\n    //animations: list<AbstractAnimation>\n    //duration: real\n    //name: string\n    //position: real\n}",
        "description": "AnimationGroup",
        "prefix": "AnimationGroup",
        "scope": "source.qml"
    },
    {
        "body": "Animator{\n    //duration: int\n    //easing.amplitude: real\n    //easing.bezierCurve: list<real>\n    //easing.overshoot: real\n    //easing.period: real\n    //easing.type: enumeration\n    //from: real\n    //target: QtQuick: : Item\n    //to: real\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "Animator",
        "prefix": "Animator",
        "scope": "source.qml"
    },
    {
        "body": "ApplicationWindow{\n    //onActivefocuscontrol : Contr: { }\n    //activeFocusControl: Control\n    //background: Item\n    //contentData: list<Object>\n    //onContentitem : It: { }\n    //contentItem: Item\n    //font: font\n    //onFooter : It: { }\n    //footer: Item\n    //onHeader : It: { }\n    //header: Item\n    //locale: Locale\n    //onMenubar : It: { }\n    //menuBar: Item\n    //onOverlay : Item (Obsolet: { }\n    //overlay: Item\n    //overlay.modal: Component\n    //overlay.modeless: Component\n    //palette: palette\n    //onWindow : Applicationwind: { }\n    //active: bool\n    //onActive : Bo: { }\n    //onActivefocusitem : It: { }\n    //activeFocusItem: Item\n    //color: color\n    //contentItem: Item\n    //onContentitem : It: { }\n    //contentOrientation: Qt: : ScreenOrientation\n    //data: list<Object>\n    //flags: Qt: : WindowFlags\n    //height: int\n    //onHeight : I: { }\n    //maximumHeight: int\n    //maximumWidth: int\n    //minimumHeight: int\n    //minimumWidth: int\n    //modality: Qt: : WindowModality\n    //opacity: real\n    //screen: variant\n    //title: string\n    //visibility: QWindow: : Visibility\n    //onVisibility : Qwindow::Visibili: { }\n    //visible: bool\n    //onWidth : I: { }\n    //width: int\n    //onWindow : Wind: { }\n    //x: int\n    //y: int\n    //alert()\n    //close()\n    //closing()\n    //hide()\n    //lower()\n    //raise()\n    //requestActivate()\n    //show()\n    //showFullScreen()\n    //showMaximized()\n    //showMinimized()\n    //showNormal()\n}",
        "description": "ApplicationWindow",
        "prefix": "ApplicationWindow",
        "scope": "source.qml"
    },
    {
        "body": "ApplicationWindowStyle{\n    //background: Component\n    //control: ApplicationWindow\n    //objectName: string\n}",
        "description": "ApplicationWindowStyle",
        "prefix": "ApplicationWindowStyle",
        "scope": "source.qml"
    },
    {
        "body": "AreaSeries{\n    //axisAngular: AbstractAxis\n    //axisRadial: AbstractAxis\n    //axisX: AbstractAxis\n    //axisXTop: AbstractAxis\n    //axisY: AbstractAxis\n    //axisYRight: AbstractAxis\n    //borderColor: color\n    //borderWidth: real\n    //brushFilename: QString\n    //color: color\n    //lowerSeries: LineSeries\n    //pointLabelsClipping: bool\n    //pointLabelsColor: font\n    //pointLabelsFont: font\n    //pointLabelsFormat: string\n    //pointLabelsVisible: bool\n    //upperSeries: LineSeries\n    //clicked(pointpoint)\n    //doubleClicked(pointpoint)\n    //hovered(pointpoint,boolstate)\n    //pressed(pointpoint)\n    //released(pointpoint)\n    //name: string\n    //opacity: real\n    //type: enumeration\n    //useOpenGL: bool\n    //visible: bool\n}",
        "description": "AreaSeries",
        "prefix": "AreaSeries",
        "scope": "source.qml"
    },
    {
        "body": "Armature{\n    //skeleton: AbstractSkeleton\n    //isShareable: bool\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "Armature",
        "prefix": "Armature",
        "scope": "source.qml"
    },
    {
        "body": "AttenuationModelInverse{\n    //end: real\n    //name: string\n    //rolloff: real\n    //start: real\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "AttenuationModelInverse",
        "prefix": "AttenuationModelInverse",
        "scope": "source.qml"
    },
    {
        "body": "AttenuationModelLinear{\n    //end: real\n    //name: string\n    //start: real\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "AttenuationModelLinear",
        "prefix": "AttenuationModelLinear",
        "scope": "source.qml"
    },
    {
        "body": "Attractor{\n    //affectedParameter: AffectableParameter\n    //proportionalToDistance: Proportion\n    //enabled: bool\n    //groups: list<string>\n    //once: bool\n    //shape: Shape\n    //system: ParticleSystem\n    //whenCollidingWith: list<string>\n    //affected(realx,realy)\n}",
        "description": "Attractor",
        "prefix": "Attractor",
        "scope": "source.qml"
    },
    {
        "body": "Attribute{\n    \n}",
        "description": "Attribute",
        "prefix": "Attribute",
        "scope": "source.qml"
    },
    {
        "body": "Audio{\n    //audioRole: enumeration\n    //autoLoad: bool\n    //autoPlay: bool\n    //availability: enumeration\n    //bufferProgress: real\n    //customAudioRole: string\n    //duration: int\n    //error: enumeration\n    //errorString: string\n    //hasAudio: bool\n    //hasVideo: bool\n    //loops: int\n    //mediaObject: variant\n    //metaData.albumArtist: variant\n    //metaData.albumTitle: variant\n    //metaData.audioBitRate: variant\n    //metaData.audioCodec: variant\n    //metaData.author: variant\n    //metaData.averageLevel: variant\n    //metaData.category: variant\n    //metaData.channelCount: variant\n    //metaData.chapterNumber: variant\n    //metaData.comment: variant\n    //metaData.composer: variant\n    //metaData.conductor: variant\n    //metaData.contributingArtist: variant\n    //metaData.copyright: variant\n    //metaData.coverArtUrlLarge: variant\n    //metaData.coverArtUrlSmall: variant\n    //metaData.date: variant\n    //metaData.description: variant\n    //metaData.director: variant\n    //metaData.genre: variant\n    //metaData.keywords: variant\n    //metaData.language: variant\n    //metaData.leadPerformer: variant\n    //metaData.lyrics: variant\n    //metaData.mediaType: variant\n    //metaData.mood: variant\n    //metaData.parentalRating: variant\n    //metaData.peakValue: variant\n    //metaData.pixelAspectRatio: variant\n    //metaData.posterUrl: variant\n    //metaData.publisher: variant\n    //metaData.ratingOrganization: variant\n    //metaData.resolution: variant\n    //metaData.sampleRate: variant\n    //metaData.size: variant\n    //metaData.subTitle: variant\n    //metaData.title: variant\n    //metaData.trackCount: variant\n    //metaData.trackNumber: variant\n    //metaData.userRating: variant\n    //metaData.videoBitRate: variant\n    //metaData.videoCodec: variant\n    //metaData.videoFrameRate: variant\n    //metaData.writer: variant\n    //metaData.year: variant\n    //muted: bool\n    //notifyInterval: int\n    //playbackRate: real\n    //playbackState: enumeration\n    //playlist: Playlist\n    //position: int\n    //seekable: bool\n    //source: url\n    //status: enumeration\n    //volume: real\n    //error(error,errorString)\n    //pause()\n    //paused()\n    //play()\n    //playbackStateChanged()\n    //playing()\n    //seek(offset)\n    //stop()\n    //stopped()\n    //list<int>supportedAudioRoles()\n}",
        "description": "Audio",
        "prefix": "Audio",
        "scope": "source.qml"
    },
    {
        "body": "AudioCategory{\n    //name: string\n    //volume: real\n    //pause()\n    //pause()\n    //stop()\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "AudioCategory",
        "prefix": "AudioCategory",
        "scope": "source.qml"
    },
    {
        "body": "AudioEngine{\n    //categories: map\n    //dopplerFactor: real\n    //listener: QtAudioEngine: : AudioListener\n    //liveInstances: int\n    //loading: bool\n    //samples: map\n    //sounds: map\n    //speedOfSound: real\n    //addAttenuationModel(AttenuationModelattenuationModel)\n    //addAudioCategory(AudioCategorycategory)\n    //addAudioSample(AudioSamplesample)\n    //addSound(Soundsound)\n    //finishedLoading()\n    //isLoadingChanged()\n    //liveInstanceCountChanged()\n    //ready()\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "AudioEngine",
        "prefix": "AudioEngine",
        "scope": "source.qml"
    },
    {
        "body": "AudioListener{\n    //direction: vector3d\n    //engine: QtAudioEngine: : AudioEngine\n    //gain: real\n    //position: vector3d\n    //up: vector3d\n    //velocity: vector3d\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "AudioListener",
        "prefix": "AudioListener",
        "scope": "source.qml"
    },
    {
        "body": "AudioSample{\n    //loaded: bool\n    //name: string\n    //preloaded: bool\n    //source: url\n    //loadedChanged()\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "AudioSample",
        "prefix": "AudioSample",
        "scope": "source.qml"
    },
    {
        "body": "AuthenticationDialogRequest{\n    //accepted: bool\n    //proxyHost: string\n    //realm: string\n    //type: enumeration\n    //url: url\n}",
        "description": "AuthenticationDialogRequest",
        "prefix": "AuthenticationDialogRequest",
        "scope": "source.qml"
    },
    {
        "body": "Axis{\n    //buttons: QVariantList\n    //inputs: list<AbstractAxisInput>\n    //scale: real\n    //value: int\n    //velocity: real\n}",
        "description": "Axis",
        "prefix": "Axis",
        "scope": "source.qml"
    },
    {
        "body": "AxisAccumulator{\n    //sourceAxis: Axis\n    //sourceAxisType: SourceAxisType\n    //value: real\n}",
        "description": "AxisAccumulator",
        "prefix": "AxisAccumulator",
        "scope": "source.qml"
    },
    {
        "body": "AxisSetting{\n    //axes: list<int>\n    //axis: QVariantList\n    //deadZoneRadius: float\n    //smooth: bool\n    //axisChanged()\n    //deadZoneRadiusChanged()\n    //smoothChanged()\n}",
        "description": "AxisSetting",
        "prefix": "AxisSetting",
        "scope": "source.qml"
    },
    {
        "body": "BackspaceKey{\n    //active: bool\n    //alternativeKeys: var\n    //displayText: string\n    //effectiveAlternativeKeys: var\n    //effectiveAlternativeKeysHighlightIndex: int\n    //functionKey: bool\n    //highlighted: bool\n    //key: int\n    //keyPanelDelegate: alias\n    //noKeyEvent: bool\n    //noModifier: bool\n    //pressed: bool\n    //repeat: bool\n    //showPreview: bool\n    //smallText: string\n    //smallTextVisible: bool\n    //soundEffect: url\n    //text: string\n    //uppercased: bool\n    //weight: real\n    //clicked()\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "BackspaceKey",
        "prefix": "BackspaceKey",
        "scope": "source.qml"
    },
    {
        "body": "Bar3DSeries{\n    //dataProxy: BarDataProxy\n    //invalidSelectionPosition: point\n    //meshAngle: real\n    //selectedBar: point\n    //baseColor: color\n    //baseGradient: ColorGradient\n    //colorStyle: Theme3D.ColorStyle\n    //itemLabel: string\n    //itemLabelFormat: string\n    //itemLabelVisible: bool\n    //mesh: Abstract3DSeries.Mesh\n    //meshRotation: quaternion\n    //meshSmooth: bool\n    //multiHighlightColor: color\n    //multiHighlightGradient: ColorGradient\n    //name: string\n    //singleHighlightColor: color\n    //singleHighlightGradient: ColorGradient\n    //type: Abstract3DSeries.SeriesType\n    //userDefinedMesh: string\n    //visible: bool\n}",
        "description": "Bar3DSeries",
        "prefix": "Bar3DSeries",
        "scope": "source.qml"
    },
    {
        "body": "BarCategoryAxis{\n    //categories: QStringList\n    //count: int\n    //max: string\n    //min: string\n    //rangeChanged(stringmin,stringmax)\n    //alignment: alignment\n    //color: color\n    //gridLineColor: color\n    //gridVisible: bool\n    //labelsAngle: int\n    //labelsColor: color\n    //labelsFont: font\n    //labelsVisible: bool\n    //lineVisible: bool\n    //minorGridLineColor: color\n    //minorGridVisible: bool\n    //orientation: Qt.Orientation\n    //reverse: alignment\n    //shadesBorderColor: color\n    //shadesColor: color\n    //shadesVisible: bool\n    //titleFont: font\n    //titleText: string\n    //titleVisible: bool\n    //visible: bool\n}",
        "description": "BarCategoryAxis",
        "prefix": "BarCategoryAxis",
        "scope": "source.qml"
    },
    {
        "body": "BarDataProxy{\n    //columnLabels: list\n    //rowCount: int\n    //rowLabels: list\n    //series: Bar3DSeries\n    //type: AbstractDataProxy.DataType\n}",
        "description": "BarDataProxy",
        "prefix": "BarDataProxy",
        "scope": "source.qml"
    },
    {
        "body": "BarSeries{\n    //axisX: AbstractAxis\n    //axisXTop: AbstractAxis\n    //axisY: AbstractAxis\n    //axisYRight: AbstractAxis\n    //barWidth: real\n    //count: int\n    //labelsAngle: real\n    //labelsFormat: string\n    //labelsPosition: enumeration\n    //labelsPrecision: real\n    //labelsVisible: bool\n    //barsetsAdded()\n    //barsetsRemoved()\n    //clear()\n    //clicked(intindex,BarSetbarset)\n    //doubleClicked(intindex,BarSetbarset)\n    //hovered(boolstatus,intindex,BarSetbarset)\n    //pressed(intindex,BarSetbarset)\n    //released(intindex,BarSetbarset)\n    //name: string\n    //opacity: real\n    //type: enumeration\n    //useOpenGL: bool\n    //visible: bool\n}",
        "description": "BarSeries",
        "prefix": "BarSeries",
        "scope": "source.qml"
    },
    {
        "body": "BarSet{\n    //borderColor: color\n    //borderWidth: real\n    //brushFilename: string\n    //color: color\n    //count: int\n    //label: string\n    //labelColor: color\n    //labelFont: font\n    //values: QVariantList\n    //append(realvalue)\n    //at(intindex)\n    //clicked(intindex)\n    //doubleClicked(intindex)\n    //pressed(intindex)\n    //released(intindex)\n    //remove(intindex,intcount)\n    //replace(intindex,realvalue)\n    //valueChanged(intindex)\n    //valuesAdded(intindex,intcount)\n    //valuesRemoved(intindex,intcount)\n}",
        "description": "BarSet",
        "prefix": "BarSet",
        "scope": "source.qml"
    },
    {
        "body": "Bars3D{\n    //barSpacing: size\n    //barSpacingRelative: bool\n    //barThickness: real\n    //columnAxis: CategoryAxis3D\n    //floorLevel: real\n    //multiSeriesUniform: bool\n    //primarySeries: Bar3DSeries\n    //rowAxis: CategoryAxis3D\n    //selectedSeries: Bar3DSeries\n    //seriesList: list<Bar3DSeries>\n    //valueAxis: ValueAxis3D\n    //aspectRatio: real\n    //currentFps: int\n    //customItemList: list<Custom3DItem>\n    //horizontalAspectRatio: real\n    //inputHandler: AbstractInputHandler3D\n    //locale: locale\n    //margin: real\n    //measureFps: bool\n    //msaaSamples: int\n    //optimizationHints: AbstractGraph3D.OptimizationHints\n    //orthoProjection: bool\n    //polar: bool\n    //queriedGraphPosition: vector3d\n    //radialLabelOffset: real\n    //reflection: bool\n    //reflectivity: real\n    //renderingMode: AbstractGraph3D.RenderingMode\n    //scene: Scene3D\n    //selectedElement: AbstractGraph3D.ElementType\n    //selectionMode: AbstractGraph3D.SelectionMode\n    //shadowQuality: AbstractGraph3D.ShadowQuality\n    //shadowsSupported: bool\n    //theme: Theme3D\n}",
        "description": "Bars3D",
        "prefix": "Bars3D",
        "scope": "source.qml"
    },
    {
        "body": "BaseKey{\n    //active: bool\n    //alternativeKeys: var\n    //displayText: string\n    //effectiveAlternativeKeys: var\n    //effectiveAlternativeKeysHighlightIndex: int\n    //functionKey: bool\n    //highlighted: bool\n    //key: int\n    //keyPanelDelegate: alias\n    //noKeyEvent: bool\n    //noModifier: bool\n    //pressed: bool\n    //repeat: bool\n    //showPreview: bool\n    //smallText: string\n    //smallTextVisible: bool\n    //soundEffect: url\n    //text: string\n    //uppercased: bool\n    //weight: real\n    //clicked()\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "BaseKey",
        "prefix": "BaseKey",
        "scope": "source.qml"
    },
    {
        "body": "Behavior{\n    //animation: Animation\n    //enabled: bool\n}",
        "description": "Behavior",
        "prefix": "Behavior",
        "scope": "source.qml"
    },
    {
        "body": "Binding{\n    //delayed: bool\n    //property: string\n    //target: Object\n    //value: any\n    //when: bool\n}",
        "description": "Binding",
        "prefix": "Binding",
        "scope": "source.qml"
    },
    {
        "body": "Blend{\n    //cached: bool\n    //foregroundSource: variant\n    //mode: string\n    //source: variant\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "Blend",
        "prefix": "Blend",
        "scope": "source.qml"
    },
    {
        "body": "BlendEquation{\n    //blendFunction: enumeration\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "BlendEquation",
        "prefix": "BlendEquation",
        "scope": "source.qml"
    },
    {
        "body": "BlendEquationArguments{\n    //DestinationAlpha: enumeration\n    //bufferIndex: int\n    //destinationRgb: enumeration\n    //sourceAlpha: enumeration\n    //sourceRgb: enumeration\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "BlendEquationArguments",
        "prefix": "BlendEquationArguments",
        "scope": "source.qml"
    },
    {
        "body": "BlendedClipAnimator{\n    //blendTree: AbstractClipBlendNode\n}",
        "description": "BlendedClipAnimator",
        "prefix": "BlendedClipAnimator",
        "scope": "source.qml"
    },
    {
        "body": "BlitFramebuffer{\n    //destination: RenderTarget\n    //destinationAttachmentPoint: RenderTargetOutput.AttachmentPoint\n    //destinationRect: Rect\n    //interpolationMethod: InterpolationMethod\n    //source: RenderTarget\n    //sourceAttachmentPoint: RenderTargetOutput.AttachmentPoint\n    //sourceRect: Rect\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "BlitFramebuffer",
        "prefix": "BlitFramebuffer",
        "scope": "source.qml"
    },
    {
        "body": "BluetoothDiscoveryModel{\n    //discoveryMode: enumeration\n    //error: enumeration\n    //remoteAddress: string\n    //running: bool\n    //uuidFilter: string\n    //deviceDiscovered(stringdevice)\n    //serviceDiscovered(BluetoothServiceservice)\n}",
        "description": "BluetoothDiscoveryModel",
        "prefix": "BluetoothDiscoveryModel",
        "scope": "source.qml"
    },
    {
        "body": "BluetoothService{\n    //deviceAddress: string\n    //deviceName: string\n    //registered: string\n    //serviceDescription: string\n    //serviceName: string\n    //serviceProtocol: enumeration\n    //serviceUuid: string\n    //detailsChanged()\n}",
        "description": "BluetoothService",
        "prefix": "BluetoothService",
        "scope": "source.qml"
    },
    {
        "body": "BluetoothSocket{\n    //connected: bool\n    //error: enumeration\n    //service: BluetoothService\n    //state: enumeration\n    //stringData: string\n}",
        "description": "BluetoothSocket",
        "prefix": "BluetoothSocket",
        "scope": "source.qml"
    },
    {
        "body": "BorderImage{\n    //asynchronous: bool\n    //border.bottom: int\n    //border.left: int\n    //border.right: int\n    //border.top: int\n    //cache: bool\n    //horizontalTileMode: enumeration\n    //mirror: bool\n    //progress: real\n    //smooth: bool\n    //source: url\n    //sourceSize: QSize\n    //status: enumeration\n    //verticalTileMode: enumeration\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "BorderImage",
        "prefix": "BorderImage",
        "scope": "source.qml"
    },
    {
        "body": "BorderImageMesh{\n    //border.bottom: int\n    //border.left: int\n    //border.right: int\n    //border.top: int\n    //horizontalTileMode: enumeration\n    //size: size\n    //verticalTileMode: enumeration\n}",
        "description": "BorderImageMesh",
        "prefix": "BorderImageMesh",
        "scope": "source.qml"
    },
    {
        "body": "BoxPlotSeries{\n    //axisX: AbstractAxis\n    //axisXTop: AbstractAxis\n    //axisY: AbstractAxis\n    //axisYRight: AbstractAxis\n    //boxOutlineVisible: bool\n    //boxWidth: real\n    //brushFilename: string\n    //count: int\n    //append(stringlabel,VariantListvalues)\n    //append(BoxSetbox)\n    //at(intindex)\n    //boxsetsAdded(listsets)\n    //boxsetsRemoved(listsets)\n    //clear()\n    //clicked(BoxSetboxset)\n    //doubleClicked(BoxSetboxset)\n    //hovered(boolstatus,BoxSetboxset)\n    //insert(intindex,stringlabel,VariantListvalues)\n    //pressed(BoxSetboxset)\n    //released(BoxSetboxset)\n    //remove(QBoxSetboxset)\n    //name: string\n    //opacity: real\n    //type: enumeration\n    //useOpenGL: bool\n    //visible: bool\n}",
        "description": "BoxPlotSeries",
        "prefix": "BoxPlotSeries",
        "scope": "source.qml"
    },
    {
        "body": "BoxSet{\n    //brushFilename: string\n    //count: int\n    //label: string\n    //values: list\n    //cleared()\n    //clicked()\n    //doubleClicked()\n    //hovered(boolstatus)\n    //pressed()\n    //released()\n    //valueChanged(intindex)\n    //valuesChanged()\n}",
        "description": "BoxSet",
        "prefix": "BoxSet",
        "scope": "source.qml"
    },
    {
        "body": "BrightnessContrast{\n    //brightness: real\n    //cached: bool\n    //contrast: real\n    //source: variant\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "BrightnessContrast",
        "prefix": "BrightnessContrast",
        "scope": "source.qml"
    },
    {
        "body": "Buffer{\n    //syncData: bool\n    //type: QBuffer: : BufferType(obsolete)\n    //usage: QBuffer: : UsageType\n}",
        "description": "Buffer",
        "prefix": "Buffer",
        "scope": "source.qml"
    },
    {
        "body": "BusyIndicator{\n    //running: bool\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "BusyIndicator",
        "prefix": "BusyIndicator",
        "scope": "source.qml"
    },
    {
        "body": "BusyIndicatorStyle{\n    //control: BusyIndicator\n    //indicator: Component\n}",
        "description": "BusyIndicatorStyle",
        "prefix": "BusyIndicatorStyle",
        "scope": "source.qml"
    },
    {
        "body": "Button{\n    //flat: bool\n    //highlighted: bool\n    //action: Action\n    //autoExclusive: bool\n    //autoRepeat: bool\n    //autoRepeatDelay: int\n    //autoRepeatInterval: int\n    //checkable: bool\n    //checked: bool\n    //display: enumeration\n    //down: bool\n    //icon.color: color\n    //icon.height: int\n    //icon.name: string\n    //icon.source: url\n    //icon.width: int\n    //implicitIndicatorHeight: real\n    //implicitIndicatorWidth: real\n    //indicator: Item\n    //pressX: real\n    //pressY: real\n    //pressed: bool\n    //text: string\n    //canceled()\n    //clicked()\n    //doubleClicked()\n    //pressAndHold()\n    //pressed()\n    //released()\n    //toggled()\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "Button",
        "prefix": "Button",
        "scope": "source.qml"
    },
    {
        "body": "ButtonAxisInput{\n    //acceleration: real\n    //buttons: list<var>\n    //deceleration: list<var>\n    //scale: real\n}",
        "description": "ButtonAxisInput",
        "prefix": "ButtonAxisInput",
        "scope": "source.qml"
    },
    {
        "body": "ButtonGroup{\n    //buttons: list<AbstractButton>\n    //checkState: enumeration\n    //checkedButton: AbstractButton\n    //exclusive: bool\n    //onGroup : Buttongro: { }\n    //clicked(AbstractButtonbutton)\n    //objectName: string\n}",
        "description": "ButtonGroup",
        "prefix": "ButtonGroup",
        "scope": "source.qml"
    },
    {
        "body": "ButtonStyle{\n    //background: Component\n    //control: Button\n    //label: Component\n}",
        "description": "ButtonStyle",
        "prefix": "ButtonStyle",
        "scope": "source.qml"
    },
    {
        "body": "Calendar{\n    //dayOfWeekFormat: int\n    //frameVisible: bool\n    //locale: var\n    //maximumDate: date\n    //minimumDate: date\n    //navigationBarVisible: bool\n    //selectedDate: date\n    //visibleMonth: int\n    //visibleYear: int\n    //weekNumbersVisible: bool\n    //clicked(date)\n    //doubleClicked(date)\n    //hovered(date)\n    //pressAndHold(date)\n    //pressed(date)\n    //released(date)\n}",
        "description": "Calendar",
        "prefix": "Calendar",
        "scope": "source.qml"
    },
    {
        "body": "CalendarStyle{\n    //background: Component\n    //control: Calendar\n    //dayDelegate: Component\n    //dayOfWeekDelegate: Component\n    //gridColor: color\n    //gridVisible: bool\n    //navigationBar: Component\n    //weekNumberDelegate: Component\n}",
        "description": "CalendarStyle",
        "prefix": "CalendarStyle",
        "scope": "source.qml"
    },
    {
        "body": "Camera{\n    //aspectRatio: real\n    //bottom: real\n    //farPlane: real\n    //fieldOfView: real\n    //left: real\n    //nearPlane: real\n    //position: vector3d\n    //projectionMatrix: matrix4x4\n    //projectionType: enumeration\n    //right: real\n    //top: real\n    //upVector: vector3d\n    //viewCenter: vector3d\n    //viewMatrix: matrix4x4(obsolete)\n    //viewVector: vector3d\n    //components: list<Component3D>\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "Camera",
        "prefix": "Camera",
        "scope": "source.qml"
    },
    {
        "body": "Camera3D{\n    //cameraPreset: Camera3D.CameraPreset\n    //maxZoomLevel: float\n    //minZoomLevel: float\n    //target: vector3d\n    //wrapXRotation: bool\n    //wrapYRotation: bool\n    //xRotation: float\n    //yRotation: float\n    //zoomLevel: float\n}",
        "description": "Camera3D",
        "prefix": "Camera3D",
        "scope": "source.qml"
    },
    {
        "body": "CameraCapabilities{\n    //maximumFieldOfView: qreal\n    //maximumTilt: qreal\n    //maximumZoomLevel: qreal\n    //minimumFieldOfView: qreal\n    //minimumTilt: qreal\n    //minimumZoomLevel: qreal\n}",
        "description": "CameraCapabilities",
        "prefix": "CameraCapabilities",
        "scope": "source.qml"
    },
    {
        "body": "CameraCapture{\n    //capturedImagePath: string\n    //errorString: string\n    //ready: bool\n    //resolution: size\n    //supportedResolutions: list<size>\n    //cancelCapture()\n    //capture()\n    //captureFailed(requestId,message)\n    //captureToLocation(location)\n    //imageCaptured(requestId,preview)\n    //imageMetadataAvailable(requestId,key,value)\n    //imageSaved(requestId,path)\n    //setMetadata(key,value)\n}",
        "description": "CameraCapture",
        "prefix": "CameraCapture",
        "scope": "source.qml"
    },
    {
        "body": "CameraExposure{\n    //aperture: real\n    //exposureCompensation: real\n    //exposureMode: enumeration\n    //iso: int\n    //manualAperture: real\n    //manualIso: real\n    //manualShutterSpeed: real\n    //meteringMode: enumeration\n    //shutterSpeed: real\n    //spotMeteringPoint: QPointF\n    //supportedExposureModes: list<ExposureMode>\n    //setAutoAperture()\n    //setAutoIsoSensitivity()\n    //setAutoShutterSpeed()\n}",
        "description": "CameraExposure",
        "prefix": "CameraExposure",
        "scope": "source.qml"
    },
    {
        "body": "CameraFlash{\n    //mode: enumeration\n    //ready: bool\n    //supportedModes: list<FlashMode>\n    //flashModeChanged(int)\n    //flashReady(bool)\n}",
        "description": "CameraFlash",
        "prefix": "CameraFlash",
        "scope": "source.qml"
    },
    {
        "body": "CameraFocus{\n    //customFocusPoint: point\n    //focusMode: enumeration\n    //focusPointMode: enumeration\n    //focusZones: list<focusZone>\n    //supportedFocusModes: list<FocusMode>\n    //supportedFocusPointModes: list<enumeration>\n}",
        "description": "CameraFocus",
        "prefix": "CameraFocus",
        "scope": "source.qml"
    },
    {
        "body": "CameraImageProcessing{\n    //brightness: qreal\n    //colorFilter: enumeration\n    //contrast: qreal\n    //denoisingLevel: qreal\n    //isAvailable: bool\n    //manualWhiteBalance: qreal\n    //saturation: qreal\n    //sharpeningLevel: qreal\n    //supportedColorFilters: list<ColorFilter>\n    //supportedWhiteBalanceModes: list<WhiteBalanceMode>\n    //whiteBalanceMode: enumeration\n}",
        "description": "CameraImageProcessing",
        "prefix": "CameraImageProcessing",
        "scope": "source.qml"
    },
    {
        "body": "CameraLens{\n    //aspectRatio: real\n    //bottom: real\n    //farPlane: real\n    //fieldOfView: real\n    //left: real\n    //nearPlane: real\n    //projectionMatrix: matrix4x4\n    //projectionType: enumeration\n    //right: real\n    //top: real\n    //isShareable: bool\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "CameraLens",
        "prefix": "CameraLens",
        "scope": "source.qml"
    },
    {
        "body": "CameraRecorder{\n    //actualLocation: string\n    //audioBitRate: int\n    //audioChannels: int\n    //audioCodec: string\n    //audioEncodingMode: enumeration\n    //audioSampleRate: int\n    //duration: int\n    //errorCode: enumeration\n    //errorString: string\n    //frameRate: qreal\n    //mediaContainer: string\n    //muted: bool\n    //outputLocation: string\n    //recorderState: enumeration\n    //recorderStatus: enumeration\n    //resolution: size\n    //videoBitRate: int\n    //videoCodec: string\n    //videoEncodingMode: enumeration\n    //record()\n    //setMetadata(key,value)\n    //stop()\n}",
        "description": "CameraRecorder",
        "prefix": "CameraRecorder",
        "scope": "source.qml"
    },
    {
        "body": "CameraSelector{\n    //camera: Entity\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "CameraSelector",
        "prefix": "CameraSelector",
        "scope": "source.qml"
    },
    {
        "body": "CandlestickSeries{\n    //axisX: AbstractAxis\n    //axisXTop: AbstractAxis\n    //axisY: AbstractAxis\n    //axisYRight: AbstractAxis\n    //bodyOutlineVisible: bool\n    //bodyWidth: real\n    //brushFilename: string\n    //capsVisible: bool\n    //capsWidth: real\n    //count: int\n    //decreasingColor: color\n    //increasingColor: color\n    //maximumColumnWidth: real\n    //minimumColumnWidth: real\n    //append(CandlestickSetset)\n    //at(intindex)\n    //candlestickSetsAdded(list<CandlestickSet>sets)\n    //candlestickSetsRemoved(list<CandlestickSet>sets)\n    //clear()\n    //clicked(CandlestickSetset)\n    //doubleClicked(CandlestickSetset)\n    //hovered(boolstatus,CandlestickSetset)\n    //insert(intindex,CandlestickSetset)\n    //pressed(CandlestickSetset)\n    //released(CandlestickSetset)\n    //remove(CandlestickSetset)\n    //name: string\n    //opacity: real\n    //type: enumeration\n    //useOpenGL: bool\n    //visible: bool\n}",
        "description": "CandlestickSeries",
        "prefix": "CandlestickSeries",
        "scope": "source.qml"
    },
    {
        "body": "CandlestickSet{\n    //brushFilename: string\n    //close: real\n    //high: real\n    //low: real\n    //open: real\n    //timestamp: real\n    //clicked()\n    //doubleClicked()\n    //hovered(boolstatus)\n    //pressed()\n    //released()\n}",
        "description": "CandlestickSet",
        "prefix": "CandlestickSet",
        "scope": "source.qml"
    },
    {
        "body": "Canvas{\n    //available: bool\n    //canvasSize: size\n    //canvasWindow: rect(obsolete)\n    //context: object\n    //contextType: string\n    //renderStrategy: enumeration\n    //renderTarget: enumeration\n    //tileSize: size(obsolete)\n    //cancelRequestAnimationFrame(inthandle)\n    //imageLoaded()\n    //isImageError(urlimage)\n    //isImageLoaded(urlimage)\n    //isImageLoading(urlimage)\n    //loadImage(urlimage)\n    //markDirty(rectarea)\n    //paint(rectregion)\n    //painted()\n    //requestPaint()\n    //unloadImage(urlimage)\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "Canvas",
        "prefix": "Canvas",
        "scope": "source.qml"
    },
    {
        "body": "Canvas3D{\n    //context: Context3D\n    //devicePixelRatio: float\n    //fps: int\n    //pixelSize: size\n    //renderOnDemand: bool\n    //renderTarget: RenderTarget\n}",
        "description": "Canvas3D",
        "prefix": "Canvas3D",
        "scope": "source.qml"
    },
    {
        "body": "Canvas3DAbstractObject{\n    //invalidated: bool\n    //name: string\n}",
        "description": "Canvas3DAbstractObject",
        "prefix": "Canvas3DAbstractObject",
        "scope": "source.qml"
    },
    {
        "body": "Canvas3DActiveInfo{\n    //name: string\n    //size: string\n    //type: string\n}",
        "description": "Canvas3DActiveInfo",
        "prefix": "Canvas3DActiveInfo",
        "scope": "source.qml"
    },
    {
        "body": "Canvas3DBuffer{\n    //invalidated: bool\n    //name: string\n}",
        "description": "Canvas3DBuffer",
        "prefix": "Canvas3DBuffer",
        "scope": "source.qml"
    },
    {
        "body": "Canvas3DContextAttributes{\n    //alpha: bool\n    //antialias: bool\n    //depth: bool\n    //failIfMajorPerformanceCaveat: bool\n    //preferLowPowerToHighPerformance: bool\n    //premultipliedAlpha: bool\n    //preserveDrawingBuffer: bool\n    //stencil: bool\n}",
        "description": "Canvas3DContextAttributes",
        "prefix": "Canvas3DContextAttributes",
        "scope": "source.qml"
    },
    {
        "body": "Canvas3DFrameBuffer{\n    //invalidated: bool\n    //name: string\n}",
        "description": "Canvas3DFrameBuffer",
        "prefix": "Canvas3DFrameBuffer",
        "scope": "source.qml"
    },
    {
        "body": "Canvas3DProgram{\n    //invalidated: bool\n    //name: string\n}",
        "description": "Canvas3DProgram",
        "prefix": "Canvas3DProgram",
        "scope": "source.qml"
    },
    {
        "body": "Canvas3DRenderBuffer{\n    //invalidated: bool\n    //name: string\n}",
        "description": "Canvas3DRenderBuffer",
        "prefix": "Canvas3DRenderBuffer",
        "scope": "source.qml"
    },
    {
        "body": "Canvas3DShader{\n    //invalidated: bool\n    //name: string\n}",
        "description": "Canvas3DShader",
        "prefix": "Canvas3DShader",
        "scope": "source.qml"
    },
    {
        "body": "Canvas3DShaderPrecisionFormat{\n    //precision: int\n    //rangeMax: int\n    //rangeMin: int\n}",
        "description": "Canvas3DShaderPrecisionFormat",
        "prefix": "Canvas3DShaderPrecisionFormat",
        "scope": "source.qml"
    },
    {
        "body": "Canvas3DTexture{\n    //invalidated: bool\n    //name: string\n}",
        "description": "Canvas3DTexture",
        "prefix": "Canvas3DTexture",
        "scope": "source.qml"
    },
    {
        "body": "Canvas3DTextureProvider{\n    \n}",
        "description": "Canvas3DTextureProvider",
        "prefix": "Canvas3DTextureProvider",
        "scope": "source.qml"
    },
    {
        "body": "Canvas3DUniformLocation{\n    //invalidated: bool\n    //name: string\n}",
        "description": "Canvas3DUniformLocation",
        "prefix": "Canvas3DUniformLocation",
        "scope": "source.qml"
    },
    {
        "body": "CanvasGradient{\n    \n}",
        "description": "CanvasGradient",
        "prefix": "CanvasGradient",
        "scope": "source.qml"
    },
    {
        "body": "CanvasImageData{\n    //data: object\n    //height: int\n    //width: int\n}",
        "description": "CanvasImageData",
        "prefix": "CanvasImageData",
        "scope": "source.qml"
    },
    {
        "body": "CanvasPixelArray{\n    //length: int\n}",
        "description": "CanvasPixelArray",
        "prefix": "CanvasPixelArray",
        "scope": "source.qml"
    },
    {
        "body": "Category{\n    //category: QPlaceCategory\n    //categoryId: string\n    //icon: PlaceIcon\n    //name: string\n    //plugin: Plugin\n    //status: enumeration\n    //visibility: enumeration\n}",
        "description": "Category",
        "prefix": "Category",
        "scope": "source.qml"
    },
    {
        "body": "CategoryAxis{\n    //categoriesLabels: StringList\n    //count: int\n    //labelsPosition: enumeration\n    //startValue: int\n    //append(stringlabel,realendValue)\n    //remove(stringlabel)\n    //replace(stringoldLabel,stringnewLabel)\n    //alignment: alignment\n    //color: color\n    //gridLineColor: color\n    //gridVisible: bool\n    //labelsAngle: int\n    //labelsColor: color\n    //labelsFont: font\n    //labelsVisible: bool\n    //lineVisible: bool\n    //minorGridLineColor: color\n    //minorGridVisible: bool\n    //orientation: Qt.Orientation\n    //reverse: alignment\n    //shadesBorderColor: color\n    //shadesColor: color\n    //shadesVisible: bool\n    //titleFont: font\n    //titleText: string\n    //titleVisible: bool\n    //visible: bool\n}",
        "description": "CategoryAxis",
        "prefix": "CategoryAxis",
        "scope": "source.qml"
    },
    {
        "body": "CategoryAxis3D{\n    //labels: list\n    //autoAdjustRange: bool\n    //labelAutoRotation: real\n    //labels: list\n    //max: real\n    //min: real\n    //orientation: AbstractAxis3D.AxisOrientation\n    //title: string\n    //titleFixed: bool\n    //titleVisible: bool\n    //type: AbstractAxis3D.AxisType\n}",
        "description": "CategoryAxis3D",
        "prefix": "CategoryAxis3D",
        "scope": "source.qml"
    },
    {
        "body": "CategoryModel{\n    //hierarchical: bool\n    //plugin: Plugin\n    //status: enumeration\n    //dataChanged()\n}",
        "description": "CategoryModel",
        "prefix": "CategoryModel",
        "scope": "source.qml"
    },
    {
        "body": "CategoryRange{\n    //endValue: int\n    //label: string\n}",
        "description": "CategoryRange",
        "prefix": "CategoryRange",
        "scope": "source.qml"
    },
    {
        "body": "ChangeLanguageKey{\n    //customLayoutsOnly: bool\n    //active: bool\n    //alternativeKeys: var\n    //displayText: string\n    //effectiveAlternativeKeys: var\n    //effectiveAlternativeKeysHighlightIndex: int\n    //functionKey: bool\n    //highlighted: bool\n    //key: int\n    //keyPanelDelegate: alias\n    //noKeyEvent: bool\n    //noModifier: bool\n    //pressed: bool\n    //repeat: bool\n    //showPreview: bool\n    //smallText: string\n    //smallTextVisible: bool\n    //soundEffect: url\n    //text: string\n    //uppercased: bool\n    //weight: real\n    //clicked()\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "ChangeLanguageKey",
        "prefix": "ChangeLanguageKey",
        "scope": "source.qml"
    },
    {
        "body": "ChartView{\n    //animationDuration: int\n    //animationEasingCurve: easing\n    //animationOptions: enumeration\n    //axes: list<AbstractAxis>\n    //backgroundColor: color\n    //backgroundRoundness: real\n    //count: int\n    //dropShadowEnabled: bool\n    //legend: Legend\n    //locale: locale\n    //localizeNumbers: bool\n    //margins: Margins\n    //plotArea: rect\n    //plotAreaColor: color\n    //theme: enumeration\n    //title: string\n    //titleColor: color\n    //titleFont: font\n    //isZoomed()\n    //removeAllSeries()\n    //removeSeries(AbstractSeriesseries)\n    //scrollDown(realpixels)\n    //scrollLeft(realpixels)\n    //scrollRight(realpixels)\n    //scrollUp(realpixels)\n    //seriesAdded(AbstractSeriesseries)\n    //seriesRemoved(AbstractSeriesseries)\n    //setAxisX(AbstractAxisaxis,AbstractSeriesseries)\n    //setAxisY(AbstractAxisaxis,AbstractSeriesseries)\n    //zoom(realfactor)\n    //zoomIn()\n    //zoomIn(rectrectangle)\n    //zoomOut()\n    //zoomReset()\n}",
        "description": "ChartView",
        "prefix": "ChartView",
        "scope": "source.qml"
    },
    {
        "body": "CheckBox{\n    //checkState: enumeration\n    //nextCheckState: function\n    //tristate: bool\n    //action: Action\n    //autoExclusive: bool\n    //autoRepeat: bool\n    //autoRepeatDelay: int\n    //autoRepeatInterval: int\n    //checkable: bool\n    //checked: bool\n    //display: enumeration\n    //down: bool\n    //icon.color: color\n    //icon.height: int\n    //icon.name: string\n    //icon.source: url\n    //icon.width: int\n    //implicitIndicatorHeight: real\n    //implicitIndicatorWidth: real\n    //indicator: Item\n    //pressX: real\n    //pressY: real\n    //pressed: bool\n    //text: string\n    //canceled()\n    //clicked()\n    //doubleClicked()\n    //pressAndHold()\n    //pressed()\n    //released()\n    //toggled()\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "CheckBox",
        "prefix": "CheckBox",
        "scope": "source.qml"
    },
    {
        "body": "CheckBoxStyle{\n    //background: Component\n    //control: CheckBox\n    //indicator: Component\n    //label: Component\n    //spacing: int\n}",
        "description": "CheckBoxStyle",
        "prefix": "CheckBoxStyle",
        "scope": "source.qml"
    },
    {
        "body": "CheckDelegate{\n    //checkState: enumeration\n    //nextCheckState: function\n    //tristate: bool\n    //highlighted: bool\n    //action: Action\n    //autoExclusive: bool\n    //autoRepeat: bool\n    //autoRepeatDelay: int\n    //autoRepeatInterval: int\n    //checkable: bool\n    //checked: bool\n    //display: enumeration\n    //down: bool\n    //icon.color: color\n    //icon.height: int\n    //icon.name: string\n    //icon.source: url\n    //icon.width: int\n    //implicitIndicatorHeight: real\n    //implicitIndicatorWidth: real\n    //indicator: Item\n    //pressX: real\n    //pressY: real\n    //pressed: bool\n    //text: string\n    //canceled()\n    //clicked()\n    //doubleClicked()\n    //pressAndHold()\n    //pressed()\n    //released()\n    //toggled()\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "CheckDelegate",
        "prefix": "CheckDelegate",
        "scope": "source.qml"
    },
    {
        "body": "CircularGauge{\n    //maximumValue: real\n    //minimumValue: real\n    //stepSize: real\n    //tickmarksVisible: bool\n    //value: alias\n}",
        "description": "CircularGauge",
        "prefix": "CircularGauge",
        "scope": "source.qml"
    },
    {
        "body": "CircularGaugeStyle{\n    //angleRange: real\n    //background: Component\n    //control: CircularGauge\n    //foreground: Component\n    //labelCount: int\n    //labelInset: real\n    //labelStepSize: real\n    //maximumValueAngle: real\n    //minimumValueAngle: real\n    //minorTickmark: Component\n    //minorTickmarkCount: int\n    //minorTickmarkInset: real\n    //needle: Component\n    //needleRotation: real\n    //outerRadius: real\n    //tickmark: Component\n    //tickmarkCount: int\n    //tickmarkInset: real\n    //tickmarkLabel: Component\n    //tickmarkStepSize: real\n}",
        "description": "CircularGaugeStyle",
        "prefix": "CircularGaugeStyle",
        "scope": "source.qml"
    },
    {
        "body": "ClearBuffers{\n    //buffers: enumeration\n    //clearDepthValue: real\n    //clearStencilValue: int\n    //color: color\n    //colorbuffer: RenderTargetOutput\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "ClearBuffers",
        "prefix": "ClearBuffers",
        "scope": "source.qml"
    },
    {
        "body": "ClipAnimator{\n    //clip: var\n}",
        "description": "ClipAnimator",
        "prefix": "ClipAnimator",
        "scope": "source.qml"
    },
    {
        "body": "ClipPlane{\n    //distance: real\n    //normal: vector3d\n    //planeIndex: int\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "ClipPlane",
        "prefix": "ClipPlane",
        "scope": "source.qml"
    },
    {
        "body": "CloseEvent{\n    //accepted: bool\n}",
        "description": "CloseEvent",
        "prefix": "CloseEvent",
        "scope": "source.qml"
    },
    {
        "body": "ColorAnimation{\n    //from: color\n    //to: color\n    //duration: int\n    //easing.amplitude: real\n    //easing.bezierCurve: list<real>\n    //easing.overshoot: real\n    //easing.period: real\n    //easing.type: enumeration\n    //exclude: list<Object>\n    //from: variant\n    //properties: string\n    //property: string\n    //target: Object\n    //targets: list<Object>\n    //to: variant\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "ColorAnimation",
        "prefix": "ColorAnimation",
        "scope": "source.qml"
    },
    {
        "body": "ColorDialog{\n    //color: color\n    //currentColor: color\n    //modality: Qt: : WindowModality\n    //showAlphaChannel: bool\n    //title: string\n    //visible: bool\n}",
        "description": "ColorDialog",
        "prefix": "ColorDialog",
        "scope": "source.qml"
    },
    {
        "body": "ColorDialogRequest{\n    //accepted: bool\n    //color: color\n}",
        "description": "ColorDialogRequest",
        "prefix": "ColorDialogRequest",
        "scope": "source.qml"
    },
    {
        "body": "ColorGradient{\n    //stops: list<ColorGradientStop>\n}",
        "description": "ColorGradient",
        "prefix": "ColorGradient",
        "scope": "source.qml"
    },
    {
        "body": "ColorGradientStop{\n    //color: color\n    //position: real\n}",
        "description": "ColorGradientStop",
        "prefix": "ColorGradientStop",
        "scope": "source.qml"
    },
    {
        "body": "ColorMask{\n    //alphaMasked: bool\n    //blueMasked: bool\n    //greenMasked: bool\n    //redMasked: bool\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "ColorMask",
        "prefix": "ColorMask",
        "scope": "source.qml"
    },
    {
        "body": "ColorOverlay{\n    //cached: bool\n    //color: color\n    //source: variant\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "ColorOverlay",
        "prefix": "ColorOverlay",
        "scope": "source.qml"
    },
    {
        "body": "Colorize{\n    //cached: bool\n    //hue: real\n    //lightness: real\n    //saturation: real\n    //source: variant\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "Colorize",
        "prefix": "Colorize",
        "scope": "source.qml"
    },
    {
        "body": "Column{\n    //add: Transition\n    //bottomPadding: real\n    //leftPadding: real\n    //move: Transition\n    //padding: real\n    //populate: Transition\n    //rightPadding: real\n    //spacing: real\n    //topPadding: real\n    //forceLayout()\n    //positioningComplete()\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "Column",
        "prefix": "Column",
        "scope": "source.qml"
    },
    {
        "body": "ColumnLayout{\n    //layoutDirection: enumeration\n    //spacing: real\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "ColumnLayout",
        "prefix": "ColumnLayout",
        "scope": "source.qml"
    },
    {
        "body": "ComboBox{\n    //acceptableInput: bool\n    //count: int\n    //currentIndex: int\n    //currentText: string\n    //delegate: Component\n    //displayText: string\n    //down: bool\n    //editText: string\n    //editable: bool\n    //flat: bool\n    //highlightedIndex: int\n    //implicitIndicatorHeight: real\n    //implicitIndicatorWidth: real\n    //indicator: Item\n    //inputMethodComposing: bool\n    //inputMethodHints: flags\n    //model: model\n    //popup: Popup\n    //pressed: bool\n    //textRole: string\n    //validator: Validator\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "ComboBox",
        "prefix": "ComboBox",
        "scope": "source.qml"
    },
    {
        "body": "ComboBoxStyle{\n    //background: Component\n    //control: ComboBox\n    //dropDownButtonWidth: int\n    //font: font\n    //label: Component\n    //renderType: int\n    //selectedTextColor: color\n    //selectionColor: color\n    //textColor: color\n}",
        "description": "ComboBoxStyle",
        "prefix": "ComboBoxStyle",
        "scope": "source.qml"
    },
    {
        "body": "Compass{\n    //active: bool\n    //alwaysOn: bool\n    //availableDataRates: list<Range>\n    //axesOrientationMode: Sensor: : AxesOrientationMode\n    //bufferSize: int\n    //busy: bool\n    //connectedToBackend: bool\n    //currentOrientation: int\n    //dataRate: int\n    //description: string\n    //efficientBufferSize: int\n    //error: int\n    //identifier: string\n    //maxBufferSize: int\n    //outputRange: int\n    //outputRanges: list<OutputRange>\n    //reading: SensorReading\n    //skipDuplicates: bool\n    //type: string\n    //userOrientation: int\n}",
        "description": "Compass",
        "prefix": "Compass",
        "scope": "source.qml"
    },
    {
        "body": "CompassReading{\n    //azimuth: qreal\n    //calibrationLevel: qreal\n    //timestamp: quint64\n}",
        "description": "CompassReading",
        "prefix": "CompassReading",
        "scope": "source.qml"
    },
    {
        "body": "Component{\n    //progress: real\n    //status: enumeration\n    //url: url\n    //onCompleted: { }\n    //onDestruction: { }\n}",
        "description": "Component",
        "prefix": "Component",
        "scope": "source.qml"
    },
    {
        "body": "Component3D{\n    //isShareable: bool\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "Component3D",
        "prefix": "Component3D",
        "scope": "source.qml"
    },
    {
        "body": "ComputeCommand{\n    //workGroupX: int\n    //workGroupY: int\n    //workGroupZ: int\n    //isShareable: bool\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "ComputeCommand",
        "prefix": "ComputeCommand",
        "scope": "source.qml"
    },
    {
        "body": "ConeGeometry{\n    //bottomRadius: real\n    //hasBottomEndcap: bool\n    //hasTopEndcap: bool\n    //indexAttribute: Attribute\n    //length: real\n    //normalAttribute: Attribute\n    //positionAttribute: Attribute\n    //rings: int\n    //slices: int\n    //texCoordAttribute: Attribute\n    //topRadius: real\n}",
        "description": "ConeGeometry",
        "prefix": "ConeGeometry",
        "scope": "source.qml"
    },
    {
        "body": "ConeMesh{\n    //bottomRadius: real\n    //hasBottomEndcap: bool\n    //hasTopEndcap: bool\n    //length: real\n    //rings: int\n    //slices: int\n    //topRadius: real\n}",
        "description": "ConeMesh",
        "prefix": "ConeMesh",
        "scope": "source.qml"
    },
    {
        "body": "ConicalGradient{\n    //angle: real\n    //cached: bool\n    //gradient: Gradient\n    //horizontalOffset: real\n    //source: variant\n    //verticalOffset: real\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "ConicalGradient",
        "prefix": "ConicalGradient",
        "scope": "source.qml"
    },
    {
        "body": "Connections{\n    //enabled: bool\n    //ignoreUnknownSignals: bool\n    //target: Object\n}",
        "description": "Connections",
        "prefix": "Connections",
        "scope": "source.qml"
    },
    {
        "body": "ContactDetail{\n    //contactDetail: QPlaceContactDetail\n    //label: string\n    //value: string\n}",
        "description": "ContactDetail",
        "prefix": "ContactDetail",
        "scope": "source.qml"
    },
    {
        "body": "ContactDetails{\n    \n}",
        "description": "ContactDetails",
        "prefix": "ContactDetails",
        "scope": "source.qml"
    },
    {
        "body": "Container{\n    //contentChildren: list<Item>\n    //contentData: list<Object>\n    //contentHeight: real\n    //contentModel: model\n    //contentWidth: real\n    //count: int\n    //currentIndex: int\n    //currentItem: Item\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "Container",
        "prefix": "Container",
        "scope": "source.qml"
    },
    {
        "body": "Context2D{\n    //canvas: QtQuick: : Canvas\n    //fillRule: enumeration\n    //fillStyle: variant\n    //font: string\n    //globalAlpha: real\n    //globalCompositeOperation: string\n    //lineCap: string\n    //lineDashOffset: real\n    //lineJoin: string\n    //lineWidth: real\n    //miterLimit: real\n    //shadowBlur: real\n    //shadowColor: string\n    //shadowOffsetX: qreal\n    //shadowOffsetY: qreal\n    //strokeStyle: variant\n    //textAlign: string\n    //textBaseline: string\n    //drawImage(variantimage,realdx,realdy)\n    //drawImage(variantimage,realdx,realdy,realdw,realdh)\n    //drawImage(variantimage,realsx,realsy,realsw,realsh,realdx,realdy,realdw,realdh)\n    //setLineDash(arraypattern)\n}",
        "description": "Context2D",
        "prefix": "Context2D",
        "scope": "source.qml"
    },
    {
        "body": "Context3D{\n    //canvas: Canvas3D\n    //drawingBufferHeight: int\n    //drawingBufferWidth: int\n    //Context3D: : glEnumscheckFramebufferStatus(glEnumstarget)\n    //list<Canvas3DShader>getAttachedShaders(Canvas3DProgramprogram3D)\n    //list<variant>getSupportedExtensions()\n    //viewport(intx,inty,intwidth,intheight)\n}",
        "description": "Context3D",
        "prefix": "Context3D",
        "scope": "source.qml"
    },
    {
        "body": "ContextMenuRequest{\n    //accepted: bool\n    //editFlags: flags\n    //isContentEditable: bool\n    //linkText: string\n    //linkUrl: url\n    //mediaFlags: flags\n    //mediaType: enumeration\n    //mediaUrl: url\n    //misspelledWord: string\n    //selectedText: string\n    //spellCheckerSuggestions: stringlist\n    //x: int\n    //y: int\n}",
        "description": "ContextMenuRequest",
        "prefix": "ContextMenuRequest",
        "scope": "source.qml"
    },
    {
        "body": "Control{\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "Control",
        "prefix": "Control",
        "scope": "source.qml"
    },
    {
        "body": "CoordinateAnimation{\n    //direction: enumeration\n    //from: coordinate\n    //to: coordinate\n    //duration: int\n    //easing.amplitude: real\n    //easing.bezierCurve: list<real>\n    //easing.overshoot: real\n    //easing.period: real\n    //easing.type: enumeration\n    //exclude: list<Object>\n    //from: variant\n    //properties: string\n    //property: string\n    //target: Object\n    //targets: list<Object>\n    //to: variant\n}",
        "description": "CoordinateAnimation",
        "prefix": "CoordinateAnimation",
        "scope": "source.qml"
    },
    {
        "body": "CuboidGeometry{\n    //indexAttribute: Attribute\n    //normalAttribute: Attribute\n    //positionAttribute: Attribute\n    //tangentAttribute: Attribute\n    //texCoordAttribute: Attribute\n    //xExtent: real\n    //xyMeshResolution: size\n    //xzMeshResolution: size\n    //yExtent: real\n    //yzMeshResolution: size\n    //zExtent: real\n}",
        "description": "CuboidGeometry",
        "prefix": "CuboidGeometry",
        "scope": "source.qml"
    },
    {
        "body": "CuboidMesh{\n    //xExtent: real\n    //xyMeshResolution: size\n    //xzMeshResolution: size\n    //yExtent: real\n    //yzMeshResolution: size\n    //zExtent: real\n}",
        "description": "CuboidMesh",
        "prefix": "CuboidMesh",
        "scope": "source.qml"
    },
    {
        "body": "CullFace{\n    //mode: enumeration\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "CullFace",
        "prefix": "CullFace",
        "scope": "source.qml"
    },
    {
        "body": "CumulativeDirection{\n    \n}",
        "description": "CumulativeDirection",
        "prefix": "CumulativeDirection",
        "scope": "source.qml"
    },
    {
        "body": "Custom3DItem{\n    //meshFile: string\n    //position: vector3d\n    //positionAbsolute: bool\n    //rotation: quaternion\n    //scaling: vector3d\n    //scalingAbsolute: bool\n    //shadowCasting: bool\n    //textureFile: string\n    //visible: bool\n}",
        "description": "Custom3DItem",
        "prefix": "Custom3DItem",
        "scope": "source.qml"
    },
    {
        "body": "Custom3DLabel{\n    //backgroundColor: color\n    //backgroundEnabled: bool\n    //borderEnabled: bool\n    //facingCamera: bool\n    //font: font\n    //text: string\n    //textColor: color\n    //meshFile: string\n    //position: vector3d\n    //positionAbsolute: bool\n    //rotation: quaternion\n    //scaling: vector3d\n    //scalingAbsolute: bool\n    //shadowCasting: bool\n    //textureFile: string\n    //visible: bool\n}",
        "description": "Custom3DLabel",
        "prefix": "Custom3DLabel",
        "scope": "source.qml"
    },
    {
        "body": "Custom3DVolume{\n    //alphaMultiplier: real\n    //drawSliceFrames: bool\n    //drawSlices: bool\n    //preserveOpacity: bool\n    //sliceFrameColor: color\n    //sliceFrameGaps: vector3d\n    //sliceFrameThicknesses: vector3d\n    //sliceFrameWidths: vector3d\n    //sliceIndexX: int\n    //sliceIndexY: int\n    //sliceIndexZ: int\n    //textureDepth: int\n    //textureHeight: int\n    //textureWidth: int\n    //useHighDefShader: bool\n    //meshFile: string\n    //position: vector3d\n    //positionAbsolute: bool\n    //rotation: quaternion\n    //scaling: vector3d\n    //scalingAbsolute: bool\n    //shadowCasting: bool\n    //textureFile: string\n    //visible: bool\n}",
        "description": "Custom3DVolume",
        "prefix": "Custom3DVolume",
        "scope": "source.qml"
    },
    {
        "body": "CustomParticle{\n    //fragmentShader: string\n    //vertexShader: string\n    //groups: list<string>\n    //system: ParticleSystem\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "CustomParticle",
        "prefix": "CustomParticle",
        "scope": "source.qml"
    },
    {
        "body": "CylinderGeometry{\n    //indexAttribute: Attribute\n    //length: real\n    //normalAttribute: Attribute\n    //positionAttribute: Attribute\n    //radius: real\n    //rings: int\n    //slices: int\n    //texCoordAttribute: Attribute\n}",
        "description": "CylinderGeometry",
        "prefix": "CylinderGeometry",
        "scope": "source.qml"
    },
    {
        "body": "CylinderMesh{\n    //length: real\n    //radius: real\n    //rings: int\n    //slices: int\n}",
        "description": "CylinderMesh",
        "prefix": "CylinderMesh",
        "scope": "source.qml"
    },
    {
        "body": "Date{\n    \n}",
        "description": "Date",
        "prefix": "Date",
        "scope": "source.qml"
    },
    {
        "body": "DateTimeAxis{\n    //format: string\n    //max: datetime\n    //min: datetime\n    //tickCount: int\n    //rangeChanged(datetimemin,datetimemax)\n    //alignment: alignment\n    //color: color\n    //gridLineColor: color\n    //gridVisible: bool\n    //labelsAngle: int\n    //labelsColor: color\n    //labelsFont: font\n    //labelsVisible: bool\n    //lineVisible: bool\n    //minorGridLineColor: color\n    //minorGridVisible: bool\n    //orientation: Qt.Orientation\n    //reverse: alignment\n    //shadesBorderColor: color\n    //shadesColor: color\n    //shadesVisible: bool\n    //titleFont: font\n    //titleText: string\n    //titleVisible: bool\n    //visible: bool\n}",
        "description": "DateTimeAxis",
        "prefix": "DateTimeAxis",
        "scope": "source.qml"
    },
    {
        "body": "DelayButton{\n    //delay: int\n    //progress: real\n    //transition: Transition\n    //activated()\n    //action: Action\n    //autoExclusive: bool\n    //autoRepeat: bool\n    //autoRepeatDelay: int\n    //autoRepeatInterval: int\n    //checkable: bool\n    //checked: bool\n    //display: enumeration\n    //down: bool\n    //icon.color: color\n    //icon.height: int\n    //icon.name: string\n    //icon.source: url\n    //icon.width: int\n    //implicitIndicatorHeight: real\n    //implicitIndicatorWidth: real\n    //indicator: Item\n    //pressX: real\n    //pressY: real\n    //pressed: bool\n    //text: string\n    //canceled()\n    //clicked()\n    //doubleClicked()\n    //pressAndHold()\n    //pressed()\n    //released()\n    //toggled()\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "DelayButton",
        "prefix": "DelayButton",
        "scope": "source.qml"
    },
    {
        "body": "DelayButtonStyle{\n    //control: DelayButton\n    //foreground: Component\n    //progressBarDropShadowColor: color\n    //progressBarGradient: Gradient\n}",
        "description": "DelayButtonStyle",
        "prefix": "DelayButtonStyle",
        "scope": "source.qml"
    },
    {
        "body": "DelegateChoice{\n    //column: index\n    //delegate: Component\n    //index: index\n    //roleValue: string\n    //row: index\n}",
        "description": "DelegateChoice",
        "prefix": "DelegateChoice",
        "scope": "source.qml"
    },
    {
        "body": "DelegateChooser{\n    //choices: list<DelegateChoice>\n    //role: string\n}",
        "description": "DelegateChooser",
        "prefix": "DelegateChooser",
        "scope": "source.qml"
    },
    {
        "body": "DelegateModel{\n    //count: int\n    //delegate: Component\n    //filterOnGroup: string\n    //onGroups : Stringli: { }\n    //groups: list<DelegateModelGroup>\n    //onInitems : I: { }\n    //onInpersisteditems : I: { }\n    //onIsunresolved : Bo: { }\n    //items: DelegateModelGroup\n    //onItemsindex : I: { }\n    //onModel : I: { }\n    //model: model\n    //parts: object\n    //persistedItems: DelegateModelGroup\n    //onPersisteditemsindex : I: { }\n    //rootIndex: QModelIndex\n}",
        "description": "DelegateModel",
        "prefix": "DelegateModel",
        "scope": "source.qml"
    },
    {
        "body": "DelegateModelGroup{\n    //\n    //\n    //count: int\n    //includeByDefault: bool\n    //name: string\n    //addGroups(intindex,intcount,stringlistgroups)\n    //changed(arrayremoved,arrayinserted)\n    //create(intindex)\n    //create(intindex,jsdictdata,arraygroups=undefined)\n    //create(jsdictdata,arraygroups=undefined)\n    //insert(intindex,jsdictdata,arraygroups=undefined)\n    //insert(jsdictdata,vargroups=undefined)\n    //move(varfrom,varto,intcount)\n    //remove(intindex,intcount)\n    //removeGroups(intindex,intcount,stringlistgroups)\n    //resolve(intfrom,intto)\n    //setGroups(intindex,intcount,stringlistgroups)\n    //setGroups(intindex,intcount,stringlistgroups)\n}",
        "description": "DelegateModelGroup",
        "prefix": "DelegateModelGroup",
        "scope": "source.qml"
    },
    {
        "body": "DepthTest{\n    //depthFunction: enumeration\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "DepthTest",
        "prefix": "DepthTest",
        "scope": "source.qml"
    },
    {
        "body": "Desaturate{\n    //cached: bool\n    //desaturation: real\n    //source: variant\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "Desaturate",
        "prefix": "Desaturate",
        "scope": "source.qml"
    },
    {
        "body": "Dial{\n    //angle: real\n    //from: real\n    //handle: Item\n    //inputMode: enumeration\n    //live: bool\n    //position: real\n    //pressed: bool\n    //snapMode: enumeration\n    //stepSize: real\n    //to: real\n    //value: real\n    //wrap: bool\n    //moved()\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "Dial",
        "prefix": "Dial",
        "scope": "source.qml"
    },
    {
        "body": "DialStyle{\n    //background: Component\n    //control: Dial\n    //handle: Component\n    //handleInset: real\n    //labelCount: int\n    //labelInset: real\n    //labelStepSize: real\n    //minorTickmark: Component\n    //minorTickmarkCount: int\n    //minorTickmarkInset: real\n    //outerRadius: real\n    //tickmark: Component\n    //tickmarkCount: int\n    //tickmarkInset: real\n    //tickmarkLabel: Component\n    //tickmarkStepSize: real\n}",
        "description": "DialStyle",
        "prefix": "DialStyle",
        "scope": "source.qml"
    },
    {
        "body": "Dialog{\n    //footer: Item\n    //header: Item\n    //implicitFooterHeight: real\n    //implicitFooterWidth: real\n    //implicitHeaderHeight: real\n    //implicitHeaderWidth: real\n    //result: int\n    //standardButtons: enumeration\n    //title: string\n    //accepted()\n    //applied()\n    //discarded()\n    //helpRequested()\n    //rejected()\n    //reset()\n    //activeFocus: bool\n    //anchors.centerIn: Object\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomMargin: real\n    //bottomPadding: real\n    //clip: bool\n    //closePolicy: enumeration\n    //contentChildren: list<Item>\n    //contentData: list<Object>\n    //contentHeight: real\n    //contentItem: Item\n    //contentWidth: real\n    //dim: bool\n    //enabled: bool\n    //enter: Transition\n    //exit: Transition\n    //focus: bool\n    //font: font\n    //height: real\n    //horizontalPadding: real\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //leftInset: real\n    //leftMargin: real\n    //leftPadding: real\n    //locale: Locale\n    //margins: real\n    //mirrored: bool\n    //modal: bool\n    //opacity: real\n    //opened: bool\n    //padding: real\n    //palette: palette\n    //parent: Item\n    //rightInset: real\n    //rightMargin: real\n    //rightPadding: real\n    //scale: real\n    //spacing: real\n    //topInset: real\n    //topMargin: real\n    //topPadding: real\n    //transformOrigin: enumeration\n    //verticalPadding: real\n    //visible: bool\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //forceActiveFocus(reason=Qt.OtherFocusReason)\n    //objectName: string\n}",
        "description": "Dialog",
        "prefix": "Dialog",
        "scope": "source.qml"
    },
    {
        "body": "DialogButtonBox{\n    //alignment: flags\n    //onButtonbox : Dialogbuttonb: { }\n    //buttonLayout: enumeration\n    //onButtonrole : Enumerati: { }\n    //delegate: Component\n    //position: enumeration\n    //standardButtons: enumeration\n    //accepted()\n    //applied()\n    //clicked(AbstractButtonbutton)\n    //discarded()\n    //helpRequested()\n    //rejected()\n    //reset()\n    //contentChildren: list<Item>\n    //contentData: list<Object>\n    //contentHeight: real\n    //contentModel: model\n    //contentWidth: real\n    //count: int\n    //currentIndex: int\n    //currentItem: Item\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "DialogButtonBox",
        "prefix": "DialogButtonBox",
        "scope": "source.qml"
    },
    {
        "body": "DiffuseMapMaterial{\n    //ambient: color\n    //diffuse: TextureImage\n    //shininess: real\n    //specular: color\n    //textureScale: real\n}",
        "description": "DiffuseMapMaterial",
        "prefix": "DiffuseMapMaterial",
        "scope": "source.qml"
    },
    {
        "body": "DiffuseSpecularMapMaterial{\n    //ambient: color\n    //diffuse: TextureImage\n    //shininess: real\n    //specular: TextureImage\n    //textureScale: real\n}",
        "description": "DiffuseSpecularMapMaterial",
        "prefix": "DiffuseSpecularMapMaterial",
        "scope": "source.qml"
    },
    {
        "body": "DiffuseSpecularMaterial{\n    //alphaBlending: bool\n    //ambient: color\n    //diffuse: var\n    //normal: var\n    //shininess: real\n    //specular: var\n    //textureScale: real\n}",
        "description": "DiffuseSpecularMaterial",
        "prefix": "DiffuseSpecularMaterial",
        "scope": "source.qml"
    },
    {
        "body": "Direction{\n    \n}",
        "description": "Direction",
        "prefix": "Direction",
        "scope": "source.qml"
    },
    {
        "body": "DirectionalBlur{\n    //angle: real\n    //cached: bool\n    //length: real\n    //samples: int\n    //source: variant\n    //transparentBorder: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "DirectionalBlur",
        "prefix": "DirectionalBlur",
        "scope": "source.qml"
    },
    {
        "body": "DirectionalLight{\n    //worldDirection: vector3d\n}",
        "description": "DirectionalLight",
        "prefix": "DirectionalLight",
        "scope": "source.qml"
    },
    {
        "body": "DispatchCompute{\n    //workGroupX: int\n    //workGroupY: int\n    //workGroupZ: int\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "DispatchCompute",
        "prefix": "DispatchCompute",
        "scope": "source.qml"
    },
    {
        "body": "Displace{\n    //cached: bool\n    //displacement: real\n    //displacementSource: variant\n    //source: variant\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "Displace",
        "prefix": "Displace",
        "scope": "source.qml"
    },
    {
        "body": "DistanceReading{\n    //distance: qreal\n    //timestamp: quint64\n}",
        "description": "DistanceReading",
        "prefix": "DistanceReading",
        "scope": "source.qml"
    },
    {
        "body": "DistanceSensor{\n    //active: bool\n    //alwaysOn: bool\n    //availableDataRates: list<Range>\n    //axesOrientationMode: Sensor: : AxesOrientationMode\n    //bufferSize: int\n    //busy: bool\n    //connectedToBackend: bool\n    //currentOrientation: int\n    //dataRate: int\n    //description: string\n    //efficientBufferSize: int\n    //error: int\n    //identifier: string\n    //maxBufferSize: int\n    //outputRange: int\n    //outputRanges: list<OutputRange>\n    //reading: SensorReading\n    //skipDuplicates: bool\n    //type: string\n    //userOrientation: int\n}",
        "description": "DistanceSensor",
        "prefix": "DistanceSensor",
        "scope": "source.qml"
    },
    {
        "body": "Dithering{\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "Dithering",
        "prefix": "Dithering",
        "scope": "source.qml"
    },
    {
        "body": "DoubleValidator{\n    //bottom: real\n    //decimals: int\n    //locale: string\n    //notation: enumeration\n    //top: real\n}",
        "description": "DoubleValidator",
        "prefix": "DoubleValidator",
        "scope": "source.qml"
    },
    {
        "body": "Drag{\n    //onActive : Bo: { }\n    //onDragtype : Enumerati: { }\n    //onHotspot : Qpoin: { }\n    //onImagesource : Qu: { }\n    //onKeys : Stringli: { }\n    //onMimedata : Stringli: { }\n    //onProposedaction : Enumerati: { }\n    //onSource : Obje: { }\n    //onSupportedactions : Fla: { }\n    //onTarget : Obje: { }\n    //onVoid Cancel: { }\n    //onDragfinished(Dropaction Dropactio: { }\n    //onDragstarted: { }\n    //onEnumeration Drop: { }\n    //onVoid Start(Flags Supportedaction: { }\n    //onVoid Startdrag(Flags Supportedaction: { }\n}",
        "description": "Drag",
        "prefix": "Drag",
        "scope": "source.qml"
    },
    {
        "body": "DragEvent{\n    //\n    //accepted: bool\n    //action: enumeration\n    //colorData: color\n    //drag.source: Object\n    //formats: stringlist\n    //hasColor: bool\n    //hasHtml: bool\n    //hasText: bool\n    //hasUrls: bool\n    //html: string\n    //keys: stringlist\n    //proposedAction: flags\n    //supportedActions: flags\n    //text: string\n    //urls: urllist\n    //x: real\n    //y: real\n    //accept()\n    //accept(enumerationaction)\n    //acceptProposedAction()\n}",
        "description": "DragEvent",
        "prefix": "DragEvent",
        "scope": "source.qml"
    },
    {
        "body": "DragHandler{\n    //translation: QVector2D\n    //xAxis.enabled: bool\n    //xAxis.maximum: real\n    //xAxis.minimum: real\n    //yAxis.enabled: bool\n    //yAxis.maximum: real\n    //yAxis.minimum: real\n    //acceptedButtons: flags\n    //acceptedDevices: flags\n    //acceptedModifiers: flags\n    //acceptedPointerTypes: flags\n    //active: bool\n    //centroid: QtQuick: : HandlerPoint\n    //enabled: bool\n    //grabPermissions: flags\n    //margin: real\n    //maximumPointCount: int\n    //minimumPointCount: int\n    //parent: Item\n    //target: Item\n    //canceled(EventPointpoint)\n    //grabChanged(GrabTransitiontransition,EventPointpoint)\n}",
        "description": "DragHandler",
        "prefix": "DragHandler",
        "scope": "source.qml"
    },
    {
        "body": "Drawer{\n    //dragMargin: real\n    //edge: enumeration\n    //interactive: bool\n    //position: real\n    //activeFocus: bool\n    //anchors.centerIn: Object\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomMargin: real\n    //bottomPadding: real\n    //clip: bool\n    //closePolicy: enumeration\n    //contentChildren: list<Item>\n    //contentData: list<Object>\n    //contentHeight: real\n    //contentItem: Item\n    //contentWidth: real\n    //dim: bool\n    //enabled: bool\n    //enter: Transition\n    //exit: Transition\n    //focus: bool\n    //font: font\n    //height: real\n    //horizontalPadding: real\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //leftInset: real\n    //leftMargin: real\n    //leftPadding: real\n    //locale: Locale\n    //margins: real\n    //mirrored: bool\n    //modal: bool\n    //opacity: real\n    //opened: bool\n    //padding: real\n    //palette: palette\n    //parent: Item\n    //rightInset: real\n    //rightMargin: real\n    //rightPadding: real\n    //scale: real\n    //spacing: real\n    //topInset: real\n    //topMargin: real\n    //topPadding: real\n    //transformOrigin: enumeration\n    //verticalPadding: real\n    //visible: bool\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //forceActiveFocus(reason=Qt.OtherFocusReason)\n    //objectName: string\n}",
        "description": "Drawer",
        "prefix": "Drawer",
        "scope": "source.qml"
    },
    {
        "body": "DropArea{\n    //containsDrag: bool\n    //drag.source: Object\n    //drag.x: qreal\n    //drag.y: qreal\n    //keys: stringlist\n    //dropped(DragEventdrop)\n    //entered(DragEventdrag)\n    //exited()\n    //positionChanged(DragEventdrag)\n}",
        "description": "DropArea",
        "prefix": "DropArea",
        "scope": "source.qml"
    },
    {
        "body": "DropShadow{\n    //cached: alias\n    //color: alias\n    //horizontalOffset: real\n    //radius: int\n    //samples: alias\n    //source: alias\n    //spread: alias\n    //transparentBorder: alias\n    //verticalOffset: real\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "DropShadow",
        "prefix": "DropShadow",
        "scope": "source.qml"
    },
    {
        "body": "DwmFeatures{\n    //blurBehindEnabled: bool\n    //bottomGlassMargin: int\n    //excludedFromPeek: bool\n    //flip3DPolicy: QtWin: : WindowFlip3DPolicy\n    //leftGlassMargin: int\n    //peekDisallowed: bool\n    //rightGlassMargin: int\n    //topGlassMargin: int\n}",
        "description": "DwmFeatures",
        "prefix": "DwmFeatures",
        "scope": "source.qml"
    },
    {
        "body": "DynamicParameter{\n    //type: string\n}",
        "description": "DynamicParameter",
        "prefix": "DynamicParameter",
        "scope": "source.qml"
    },
    {
        "body": "EditorialModel{\n    //batchSize: int\n    //place: Place\n    //totalCount: int\n}",
        "description": "EditorialModel",
        "prefix": "EditorialModel",
        "scope": "source.qml"
    },
    {
        "body": "Effect{\n    //parameters: list<Parameter>\n    //techniques: list<Technique>\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "Effect",
        "prefix": "Effect",
        "scope": "source.qml"
    },
    {
        "body": "EllipseShape{\n    //fill: bool\n}",
        "description": "EllipseShape",
        "prefix": "EllipseShape",
        "scope": "source.qml"
    },
    {
        "body": "Emitter{\n    //acceleration: StochasticDirection\n    //emitRate: real\n    //enabled: bool\n    //endSize: real\n    //group: string\n    //lifeSpan: int\n    //lifeSpanVariation: int\n    //maximumEmitted: int\n    //shape: Shape\n    //size: real\n    //sizeVariation: real\n    //startTime: int\n    //system: ParticleSystem\n    //velocity: StochasticDirection\n    //velocityFromMovement: qreal\n    //burst(intcount)\n    //burst(intcount,intx,inty)\n    //emitParticles(Arrayparticles)\n    //pulse(intduration)\n}",
        "description": "Emitter",
        "prefix": "Emitter",
        "scope": "source.qml"
    },
    {
        "body": "EnterKey{\n    //actionId: int\n    //active: bool\n    //alternativeKeys: var\n    //displayText: string\n    //effectiveAlternativeKeys: var\n    //effectiveAlternativeKeysHighlightIndex: int\n    //functionKey: bool\n    //highlighted: bool\n    //key: int\n    //keyPanelDelegate: alias\n    //noKeyEvent: bool\n    //noModifier: bool\n    //pressed: bool\n    //repeat: bool\n    //showPreview: bool\n    //smallText: string\n    //smallTextVisible: bool\n    //soundEffect: url\n    //text: string\n    //uppercased: bool\n    //weight: real\n    //clicked()\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "EnterKey",
        "prefix": "EnterKey",
        "scope": "source.qml"
    },
    {
        "body": "EnterKeyAction{\n    //onActionid : I: { }\n    //onEnabled : Bo: { }\n    //onLabel : Stri: { }\n}",
        "description": "EnterKeyAction",
        "prefix": "EnterKeyAction",
        "scope": "source.qml"
    },
    {
        "body": "Entity{\n    //components: list<Component3D>\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "Entity",
        "prefix": "Entity",
        "scope": "source.qml"
    },
    {
        "body": "EntityLoader{\n    //entity: QtQml: : QtObject\n    //source: url\n    //status: Status\n    //components: list<Component3D>\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "EntityLoader",
        "prefix": "EntityLoader",
        "scope": "source.qml"
    },
    {
        "body": "EnvironmentLight{\n    //irradiance: Texture\n    //specular: Texture\n}",
        "description": "EnvironmentLight",
        "prefix": "EnvironmentLight",
        "scope": "source.qml"
    },
    {
        "body": "EventConnection{\n    //events: stringlist\n    //stateMachine: ScxmlStateMachine\n    //occurred(event)\n}",
        "description": "EventConnection",
        "prefix": "EventConnection",
        "scope": "source.qml"
    },
    {
        "body": "EventPoint{\n    //accepted: bool\n    //pointId: int\n    //position: point\n    //sceneGrabPosition: point\n    //scenePosition: point\n    //scenePressPosition: point\n    //state: int\n    //timeHeld: real\n    //velocity: vector2d\n}",
        "description": "EventPoint",
        "prefix": "EventPoint",
        "scope": "source.qml"
    },
    {
        "body": "EventTouchPoint{\n    //ellipseDiameters: size\n    //pressure: qreal\n    //rotation: qreal\n    //uniqueId: QPointerUniqueId\n}",
        "description": "EventTouchPoint",
        "prefix": "EventTouchPoint",
        "scope": "source.qml"
    },
    {
        "body": "ExclusiveGroup{\n    //current: object\n}",
        "description": "ExclusiveGroup",
        "prefix": "ExclusiveGroup",
        "scope": "source.qml"
    },
    {
        "body": "ExtendedAttributes{\n    \n}",
        "description": "ExtendedAttributes",
        "prefix": "ExtendedAttributes",
        "scope": "source.qml"
    },
    {
        "body": "ExtrudedTextGeometry{\n    //depth: float\n    //font: QFont\n    //indexAttribute: Attribute\n    //normalAttribute: Attribute\n    //positionAttribute: Attribute\n    //text: QString\n}",
        "description": "ExtrudedTextGeometry",
        "prefix": "ExtrudedTextGeometry",
        "scope": "source.qml"
    },
    {
        "body": "ExtrudedTextMesh{\n    //depth: float\n    //font: QFont\n    //text: QString\n}",
        "description": "ExtrudedTextMesh",
        "prefix": "ExtrudedTextMesh",
        "scope": "source.qml"
    },
    {
        "body": "FastBlur{\n    //cached: bool\n    //radius: real\n    //source: variant\n    //transparentBorder: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "FastBlur",
        "prefix": "FastBlur",
        "scope": "source.qml"
    },
    {
        "body": "FileDialog{\n    //defaultSuffix: string\n    //fileUrl: url\n    //fileUrls: list<url>\n    //folder: url\n    //modality: Qt: : WindowModality\n    //nameFilters: list<string>\n    //selectExisting: bool\n    //selectFolder: bool\n    //selectMultiple: bool\n    //selectedNameFilter: string\n    //shortcuts: Object\n    //sidebarVisible: bool\n    //title: string\n    //visible: bool\n}",
        "description": "FileDialog",
        "prefix": "FileDialog",
        "scope": "source.qml"
    },
    {
        "body": "FileDialogRequest{\n    //accepted: bool\n    //acceptedMimeTypes: stringlist\n    //defaultFileName: string\n    //mode: enumeration\n}",
        "description": "FileDialogRequest",
        "prefix": "FileDialogRequest",
        "scope": "source.qml"
    },
    {
        "body": "FillerKey{\n    //active: bool\n    //alternativeKeys: var\n    //displayText: string\n    //effectiveAlternativeKeys: var\n    //effectiveAlternativeKeysHighlightIndex: int\n    //functionKey: bool\n    //highlighted: bool\n    //key: int\n    //keyPanelDelegate: alias\n    //noKeyEvent: bool\n    //noModifier: bool\n    //pressed: bool\n    //repeat: bool\n    //showPreview: bool\n    //smallText: string\n    //smallTextVisible: bool\n    //soundEffect: url\n    //text: string\n    //uppercased: bool\n    //weight: real\n    //clicked()\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "FillerKey",
        "prefix": "FillerKey",
        "scope": "source.qml"
    },
    {
        "body": "FilterKey{\n    //name: string\n    //value: variant\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "FilterKey",
        "prefix": "FilterKey",
        "scope": "source.qml"
    },
    {
        "body": "FinalState{\n    //active: bool\n    //entered()\n    //exited()\n}",
        "description": "FinalState",
        "prefix": "FinalState",
        "scope": "source.qml"
    },
    {
        "body": "FirstPersonCameraController{\n    //acceleration: real\n    //camera: Camera\n    //deceleration: real\n    //linearSpeed: real\n    //lookSpeed: real\n}",
        "description": "FirstPersonCameraController",
        "prefix": "FirstPersonCameraController",
        "scope": "source.qml"
    },
    {
        "body": "Flickable{\n    //atXBeginning: bool\n    //atXEnd: bool\n    //atYBeginning: bool\n    //atYEnd: bool\n    //bottomMargin: real\n    //boundsBehavior: enumeration\n    //boundsMovement: enumeration\n    //contentHeight: real\n    //contentItem: Item\n    //contentWidth: real\n    //contentX: real\n    //contentY: real\n    //dragging: bool\n    //draggingHorizontally: bool\n    //draggingVertically: bool\n    //flickDeceleration: real\n    //flickableDirection: enumeration\n    //flicking: bool\n    //flickingHorizontally: bool\n    //flickingVertically: bool\n    //horizontalOvershoot: real\n    //horizontalVelocity: real\n    //interactive: bool\n    //leftMargin: real\n    //maximumFlickVelocity: real\n    //moving: bool\n    //movingHorizontally: bool\n    //movingVertically: bool\n    //originX: real\n    //originY: real\n    //pixelAligned: bool\n    //pressDelay: int\n    //rebound: Transition\n    //rightMargin: real\n    //synchronousDrag: bool\n    //topMargin: real\n    //verticalOvershoot: real\n    //verticalVelocity: real\n    //visibleArea.heightRatio: real\n    //visibleArea.widthRatio: real\n    //visibleArea.xPosition: real\n    //visibleArea.yPosition: real\n    //cancelFlick()\n    //flick(qrealxVelocity,qrealyVelocity)\n    //flickEnded()\n    //flickStarted()\n    //movementEnded()\n    //movementStarted()\n    //resizeContent(realwidth,realheight,QPointFcenter)\n    //returnToBounds()\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "Flickable",
        "prefix": "Flickable",
        "scope": "source.qml"
    },
    {
        "body": "Flipable{\n    //back: Item\n    //front: Item\n    //side: enumeration\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "Flipable",
        "prefix": "Flipable",
        "scope": "source.qml"
    },
    {
        "body": "Flow{\n    //add: Transition\n    //bottomPadding: real\n    //effectiveLayoutDirection: enumeration\n    //flow: enumeration\n    //layoutDirection: enumeration\n    //leftPadding: real\n    //move: Transition\n    //padding: real\n    //populate: Transition\n    //rightPadding: real\n    //spacing: real\n    //topPadding: real\n    //forceLayout()\n    //positioningComplete()\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "Flow",
        "prefix": "Flow",
        "scope": "source.qml"
    },
    {
        "body": "FocusScope{\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "FocusScope",
        "prefix": "FocusScope",
        "scope": "source.qml"
    },
    {
        "body": "FolderListModel{\n    //caseSensitive: bool\n    //count: int\n    //folder: url\n    //nameFilters: list<string>\n    //parentFolder: url\n    //rootFolder: url\n    //showDirs: bool\n    //showDirsFirst: bool\n    //showDotAndDotDot: bool\n    //showFiles: bool\n    //showHidden: bool\n    //showOnlyReadable: bool\n    //sortCaseSensitive: bool\n    //sortField: enumeration\n    //sortReversed: bool\n    //status: enumeration\n}",
        "description": "FolderListModel",
        "prefix": "FolderListModel",
        "scope": "source.qml"
    },
    {
        "body": "FontDialog{\n    //currentFont: font\n    //font: font\n    //modality: Qt: : WindowModality\n    //monospacedFonts: bool\n    //nonScalableFonts: bool\n    //proportionalFonts: bool\n    //scalableFonts: bool\n    //title: string\n    //visible: bool\n}",
        "description": "FontDialog",
        "prefix": "FontDialog",
        "scope": "source.qml"
    },
    {
        "body": "FontLoader{\n    //name: string\n    //source: url\n    //status: enumeration\n}",
        "description": "FontLoader",
        "prefix": "FontLoader",
        "scope": "source.qml"
    },
    {
        "body": "FontMetrics{\n    //ascent: real\n    //averageCharacterWidth: real\n    //descent: real\n    //font: font\n    //height: real\n    //leading: real\n    //lineSpacing: real\n    //lineWidth: real\n    //maximumCharacterWidth: real\n    //minimumLeftBearing: real\n    //minimumRightBearing: real\n    //overlinePosition: real\n    //strikeOutPosition: real\n    //underlinePosition: real\n    //xHeight: real\n}",
        "description": "FontMetrics",
        "prefix": "FontMetrics",
        "scope": "source.qml"
    },
    {
        "body": "FormValidationMessageRequest{\n    //accepted: bool\n    //anchor: rectangle\n    //subText: bool\n    //text: bool\n    //type: enumeration\n}",
        "description": "FormValidationMessageRequest",
        "prefix": "FormValidationMessageRequest",
        "scope": "source.qml"
    },
    {
        "body": "ForwardRenderer{\n    //camera: Entity\n    //clearColor: color\n    //frustumCulling: bool\n    //gamma: real\n    //surface: Object\n    //viewportRect: rect\n    //window: Object(obsolete)\n}",
        "description": "ForwardRenderer",
        "prefix": "ForwardRenderer",
        "scope": "source.qml"
    },
    {
        "body": "Frame{\n    //contentChildren: list<Item>\n    //contentData: list<Object>\n    //contentHeight: real\n    //contentWidth: real\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "Frame",
        "prefix": "Frame",
        "scope": "source.qml"
    },
    {
        "body": "FrameAction{\n    //triggered(realdt)\n    //isShareable: bool\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "FrameAction",
        "prefix": "FrameAction",
        "scope": "source.qml"
    },
    {
        "body": "FrameGraphNode{\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "FrameGraphNode",
        "prefix": "FrameGraphNode",
        "scope": "source.qml"
    },
    {
        "body": "Friction{\n    //factor: real\n    //threshold: real\n    //enabled: bool\n    //groups: list<string>\n    //once: bool\n    //shape: Shape\n    //system: ParticleSystem\n    //whenCollidingWith: list<string>\n    //affected(realx,realy)\n}",
        "description": "Friction",
        "prefix": "Friction",
        "scope": "source.qml"
    },
    {
        "body": "FrontFace{\n    //direction: enumeration\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "FrontFace",
        "prefix": "FrontFace",
        "scope": "source.qml"
    },
    {
        "body": "FrustumCulling{\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "FrustumCulling",
        "prefix": "FrustumCulling",
        "scope": "source.qml"
    },
    {
        "body": "FullScreenRequest{\n    //origin: url\n    //toggleOn: bool\n}",
        "description": "FullScreenRequest",
        "prefix": "FullScreenRequest",
        "scope": "source.qml"
    },
    {
        "body": "GLStateDumpExt{\n    \n}",
        "description": "GLStateDumpExt",
        "prefix": "GLStateDumpExt",
        "scope": "source.qml"
    },
    {
        "body": "GammaAdjust{\n    //cached: bool\n    //gamma: real\n    //source: variant\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "GammaAdjust",
        "prefix": "GammaAdjust",
        "scope": "source.qml"
    },
    {
        "body": "Gauge{\n    //font: font\n    //formatValue: var\n    //maximumValue: alias\n    //minimumValue: alias\n    //minorTickmarkCount: int\n    //orientation: int\n    //tickmarkAlignment: int\n    //tickmarkStepSize: real\n    //value: alias\n}",
        "description": "Gauge",
        "prefix": "Gauge",
        "scope": "source.qml"
    },
    {
        "body": "GaugeStyle{\n    //background: Component\n    //control: Gauge\n    //foreground: Component\n    //minorTickmark: Component\n    //tickmark: Component\n    //tickmarkLabel: Component\n    //valueBar: Component\n    //valuePosition: real\n}",
        "description": "GaugeStyle",
        "prefix": "GaugeStyle",
        "scope": "source.qml"
    },
    {
        "body": "GaussianBlur{\n    //cached: bool\n    //deviation: real\n    //radius: real\n    //samples: int\n    //source: variant\n    //transparentBorder: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "GaussianBlur",
        "prefix": "GaussianBlur",
        "scope": "source.qml"
    },
    {
        "body": "GeocodeModel{\n    //autoUpdate: bool\n    //bounds: geoshape\n    //count: int\n    //error: enumeration\n    //errorString: string\n    //limit: int\n    //offset: int\n    //plugin: Plugin\n    //query: QVariant\n    //status: enumeration\n    //locationsChanged()\n}",
        "description": "GeocodeModel",
        "prefix": "GeocodeModel",
        "scope": "source.qml"
    },
    {
        "body": "Geometry{\n    //attributes: list<Attribute>\n    //boundingVolumePositionAttribute: Attribute\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "Geometry",
        "prefix": "Geometry",
        "scope": "source.qml"
    },
    {
        "body": "GeometryRenderer{\n    //firstInstance: int\n    //firstVertex: int\n    //geometry: Geometry\n    //indexBufferByteOffset: int\n    //indexOffset: int\n    //instanceCount: int\n    //primitiveRestart: bool\n    //primitiveType: enumeration\n    //restartIndex: int\n    //vertexCount: int\n    //verticesPerPatch: int\n    //isShareable: bool\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "GeometryRenderer",
        "prefix": "GeometryRenderer",
        "scope": "source.qml"
    },
    {
        "body": "GestureEvent{\n    //dragThreshold: real\n    //touchPoints: list<TouchPoint>\n    //grab()\n}",
        "description": "GestureEvent",
        "prefix": "GestureEvent",
        "scope": "source.qml"
    },
    {
        "body": "Glow{\n    //cached: alias\n    //color: alias\n    //radius: alias\n    //samples: alias\n    //source: alias\n    //spread: alias\n    //transparentBorder: alias\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "Glow",
        "prefix": "Glow",
        "scope": "source.qml"
    },
    {
        "body": "GoochMaterial{\n    //alpha: real\n    //beta: real\n    //cool: color\n    //diffuse: color\n    //shininess: real\n    //specular: color\n    //warm: color\n}",
        "description": "GoochMaterial",
        "prefix": "GoochMaterial",
        "scope": "source.qml"
    },
    {
        "body": "Gradient{\n    //orientation: enumeration\n    //stops: list<GradientStop>\n}",
        "description": "Gradient",
        "prefix": "Gradient",
        "scope": "source.qml"
    },
    {
        "body": "GradientStop{\n    //color: color\n    //position: real\n}",
        "description": "GradientStop",
        "prefix": "GradientStop",
        "scope": "source.qml"
    },
    {
        "body": "GraphicsApiFilter{\n    //api: enumeration\n    //extensions: stringlist\n    //majorVersion: int\n    //minorVersion: int\n    //profile: enumeration\n    //vendor: string\n    //objectName: string\n}",
        "description": "GraphicsApiFilter",
        "prefix": "GraphicsApiFilter",
        "scope": "source.qml"
    },
    {
        "body": "GraphicsInfo{\n    //api: enumeration\n    //majorVersion: int\n    //minorVersion: int\n    //profile: enumeration\n    //renderableType: enumeration\n    //shaderCompilationType: enumeration\n    //shaderSourceType: enumeration\n    //shaderType: enumeration\n}",
        "description": "GraphicsInfo",
        "prefix": "GraphicsInfo",
        "scope": "source.qml"
    },
    {
        "body": "Gravity{\n    //acceleration: real(obsolete)\n    //angle: real\n    //magnitude: real\n    //enabled: bool\n    //groups: list<string>\n    //once: bool\n    //shape: Shape\n    //system: ParticleSystem\n    //whenCollidingWith: list<string>\n    //affected(realx,realy)\n}",
        "description": "Gravity",
        "prefix": "Gravity",
        "scope": "source.qml"
    },
    {
        "body": "Grid{\n    //add: Transition\n    //bottomPadding: real\n    //columnSpacing: qreal\n    //columns: int\n    //effectiveHorizontalItemAlignment: enumeration\n    //effectiveLayoutDirection: enumeration\n    //flow: enumeration\n    //horizontalItemAlignment: enumeration\n    //layoutDirection: enumeration\n    //leftPadding: real\n    //move: Transition\n    //padding: real\n    //populate: Transition\n    //rightPadding: real\n    //rowSpacing: qreal\n    //rows: int\n    //spacing: qreal\n    //topPadding: real\n    //verticalItemAlignment: enumeration\n    //forceLayout()\n    //positioningComplete()\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "Grid",
        "prefix": "Grid",
        "scope": "source.qml"
    },
    {
        "body": "GridLayout{\n    //columnSpacing: real\n    //columns: int\n    //flow: enumeration\n    //layoutDirection: enumeration\n    //rowSpacing: real\n    //rows: int\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "GridLayout",
        "prefix": "GridLayout",
        "scope": "source.qml"
    },
    {
        "body": "GridMesh{\n    //resolution: size\n}",
        "description": "GridMesh",
        "prefix": "GridMesh",
        "scope": "source.qml"
    },
    {
        "body": "GridView{\n    //\n    //add: Transition\n    //addDisplaced: Transition\n    //cacheBuffer: int\n    //cellHeight: real\n    //cellWidth: real\n    //count: int\n    //currentIndex: int\n    //currentItem: Item\n    //onDelayremove : Bo: { }\n    //delegate: Component\n    //displaced: Transition\n    //displayMarginBeginning: int\n    //displayMarginEnd: int\n    //effectiveLayoutDirection: enumeration\n    //flow: enumeration\n    //footer: Component\n    //footerItem: Item\n    //header: Component\n    //headerItem: Item\n    //highlight: Component\n    //highlightFollowsCurrentItem: bool\n    //highlightItem: Item\n    //highlightMoveDuration: int\n    //highlightRangeMode: enumeration\n    //onIscurrentitem : Bo: { }\n    //keyNavigationEnabled: bool\n    //keyNavigationWraps: bool\n    //layoutDirection: enumeration\n    //model: model\n    //move: Transition\n    //moveDisplaced: Transition\n    //populate: Transition\n    //preferredHighlightBegin: real\n    //preferredHighlightEnd: real\n    //remove: Transition\n    //removeDisplaced: Transition\n    //snapMode: enumeration\n    //verticalLayoutDirection: enumeration\n    //onView : Gridvi: { }\n    //onAdd: { }\n    //forceLayout()\n    //moveCurrentIndexDown()\n    //moveCurrentIndexLeft()\n    //moveCurrentIndexRight()\n    //moveCurrentIndexUp()\n    //positionViewAtBeginning()\n    //positionViewAtEnd()\n    //positionViewAtIndex(intindex,PositionModemode)\n    //onRemove: { }\n    //atXBeginning: bool\n    //atXEnd: bool\n    //atYBeginning: bool\n    //atYEnd: bool\n    //bottomMargin: real\n    //boundsBehavior: enumeration\n    //boundsMovement: enumeration\n    //contentHeight: real\n    //contentItem: Item\n    //contentWidth: real\n    //contentX: real\n    //contentY: real\n    //dragging: bool\n    //draggingHorizontally: bool\n    //draggingVertically: bool\n    //flickDeceleration: real\n    //flickableDirection: enumeration\n    //flicking: bool\n    //flickingHorizontally: bool\n    //flickingVertically: bool\n    //horizontalOvershoot: real\n    //horizontalVelocity: real\n    //interactive: bool\n    //leftMargin: real\n    //maximumFlickVelocity: real\n    //moving: bool\n    //movingHorizontally: bool\n    //movingVertically: bool\n    //originX: real\n    //originY: real\n    //pixelAligned: bool\n    //pressDelay: int\n    //rebound: Transition\n    //rightMargin: real\n    //synchronousDrag: bool\n    //topMargin: real\n    //verticalOvershoot: real\n    //verticalVelocity: real\n    //visibleArea.heightRatio: real\n    //visibleArea.widthRatio: real\n    //visibleArea.xPosition: real\n    //visibleArea.yPosition: real\n    //cancelFlick()\n    //flick(qrealxVelocity,qrealyVelocity)\n    //flickEnded()\n    //flickStarted()\n    //movementEnded()\n    //movementStarted()\n    //resizeContent(realwidth,realheight,QPointFcenter)\n    //returnToBounds()\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "GridView",
        "prefix": "GridView",
        "scope": "source.qml"
    },
    {
        "body": "GroupBox{\n    //implicitLabelHeight: real\n    //implicitLabelWidth: real\n    //label: Item\n    //title: string\n    //contentChildren: list<Item>\n    //contentData: list<Object>\n    //contentHeight: real\n    //contentWidth: real\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "GroupBox",
        "prefix": "GroupBox",
        "scope": "source.qml"
    },
    {
        "body": "GroupGoal{\n    //goalState: string\n    //jump: bool\n    //enabled: bool\n    //groups: list<string>\n    //once: bool\n    //shape: Shape\n    //system: ParticleSystem\n    //whenCollidingWith: list<string>\n    //affected(realx,realy)\n}",
        "description": "GroupGoal",
        "prefix": "GroupGoal",
        "scope": "source.qml"
    },
    {
        "body": "Gyroscope{\n    //active: bool\n    //alwaysOn: bool\n    //availableDataRates: list<Range>\n    //axesOrientationMode: Sensor: : AxesOrientationMode\n    //bufferSize: int\n    //busy: bool\n    //connectedToBackend: bool\n    //currentOrientation: int\n    //dataRate: int\n    //description: string\n    //efficientBufferSize: int\n    //error: int\n    //identifier: string\n    //maxBufferSize: int\n    //outputRange: int\n    //outputRanges: list<OutputRange>\n    //reading: SensorReading\n    //skipDuplicates: bool\n    //type: string\n    //userOrientation: int\n}",
        "description": "Gyroscope",
        "prefix": "Gyroscope",
        "scope": "source.qml"
    },
    {
        "body": "GyroscopeReading{\n    //x: qreal\n    //y: qreal\n    //z: qreal\n    //timestamp: quint64\n}",
        "description": "GyroscopeReading",
        "prefix": "GyroscopeReading",
        "scope": "source.qml"
    },
    {
        "body": "HBarModelMapper{\n    //columnCount: int\n    //firstBarSetRow: int\n    //firstColumn: int\n    //lastBarSetRow: int\n    //model: SomeModel\n    //series: AbstractBarSeries\n}",
        "description": "HBarModelMapper",
        "prefix": "HBarModelMapper",
        "scope": "source.qml"
    },
    {
        "body": "HBoxPlotModelMapper{\n    //columnCount: int\n    //firstBoxSetRow: int\n    //firstColumn: int\n    //lastBoxSetRow: int\n    //model: SomeModel\n    //series: AbstractBarSeries\n}",
        "description": "HBoxPlotModelMapper",
        "prefix": "HBoxPlotModelMapper",
        "scope": "source.qml"
    },
    {
        "body": "HCandlestickModelMapper{\n    //closeColumn: int\n    //firstSetRow: int\n    //highColumn: int\n    //lastSetRow: int\n    //lowColumn: int\n    //model: QAbstractItemModel\n    //openColumn: int\n    //series: CandlestickSeries\n    //timestampColumn: int\n}",
        "description": "HCandlestickModelMapper",
        "prefix": "HCandlestickModelMapper",
        "scope": "source.qml"
    },
    {
        "body": "HPieModelMapper{\n    //columnCount: int\n    //firstColumn: int\n    //labelsRow: int\n    //model: SomeModel\n    //series: PieSeries\n    //valuesRow: int\n}",
        "description": "HPieModelMapper",
        "prefix": "HPieModelMapper",
        "scope": "source.qml"
    },
    {
        "body": "HXYModelMapper{\n    //columnCount: int\n    //firstColumn: int\n    //model: SomeModel\n    //series: XYSeries\n    //xRow: int\n    //yRow: int\n}",
        "description": "HXYModelMapper",
        "prefix": "HXYModelMapper",
        "scope": "source.qml"
    },
    {
        "body": "HandlerPoint{\n    //ellipseDiameters: size\n    //id: int\n    //modifiers: enumeration\n    //position: QPointF\n    //pressPosition: QPointF\n    //pressedButtons: enumeration\n    //pressure: qreal\n    //rotation: qreal\n    //sceneGrabPosition: QPointF\n    //scenePosition: QPointF\n    //scenePressPosition: QPointF\n    //uniqueId: PointingDeviceUniqueId\n    //velocity: QVector2D\n}",
        "description": "HandlerPoint",
        "prefix": "HandlerPoint",
        "scope": "source.qml"
    },
    {
        "body": "HandwritingInputPanel{\n    //active: bool\n    //available: bool\n    //inputPanel: var\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "HandwritingInputPanel",
        "prefix": "HandwritingInputPanel",
        "scope": "source.qml"
    },
    {
        "body": "HandwritingModeKey{\n    //active: bool\n    //alternativeKeys: var\n    //displayText: string\n    //effectiveAlternativeKeys: var\n    //effectiveAlternativeKeysHighlightIndex: int\n    //functionKey: bool\n    //highlighted: bool\n    //key: int\n    //keyPanelDelegate: alias\n    //noKeyEvent: bool\n    //noModifier: bool\n    //pressed: bool\n    //repeat: bool\n    //showPreview: bool\n    //smallText: string\n    //smallTextVisible: bool\n    //soundEffect: url\n    //text: string\n    //uppercased: bool\n    //weight: real\n    //clicked()\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "HandwritingModeKey",
        "prefix": "HandwritingModeKey",
        "scope": "source.qml"
    },
    {
        "body": "HeightMapSurfaceDataProxy{\n    //heightMapFile: string\n    //maxXValue: real\n    //maxZValue: real\n    //minXValue: real\n    //minZValue: real\n    //columnCount: int\n    //rowCount: int\n    //series: Surface3DSeries\n    //type: AbstractDataProxy.DataType\n}",
        "description": "HeightMapSurfaceDataProxy",
        "prefix": "HeightMapSurfaceDataProxy",
        "scope": "source.qml"
    },
    {
        "body": "HideKeyboardKey{\n    //active: bool\n    //alternativeKeys: var\n    //displayText: string\n    //effectiveAlternativeKeys: var\n    //effectiveAlternativeKeysHighlightIndex: int\n    //functionKey: bool\n    //highlighted: bool\n    //key: int\n    //keyPanelDelegate: alias\n    //noKeyEvent: bool\n    //noModifier: bool\n    //pressed: bool\n    //repeat: bool\n    //showPreview: bool\n    //smallText: string\n    //smallTextVisible: bool\n    //soundEffect: url\n    //text: string\n    //uppercased: bool\n    //weight: real\n    //clicked()\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "HideKeyboardKey",
        "prefix": "HideKeyboardKey",
        "scope": "source.qml"
    },
    {
        "body": "HistoryState{\n    //defaultState: QAbstractState\n    //historyType: enumeration\n    //active: bool\n    //entered()\n    //exited()\n}",
        "description": "HistoryState",
        "prefix": "HistoryState",
        "scope": "source.qml"
    },
    {
        "body": "HolsterReading{\n    //holstered: qreal\n    //timestamp: quint64\n}",
        "description": "HolsterReading",
        "prefix": "HolsterReading",
        "scope": "source.qml"
    },
    {
        "body": "HolsterSensor{\n    //active: bool\n    //alwaysOn: bool\n    //availableDataRates: list<Range>\n    //axesOrientationMode: Sensor: : AxesOrientationMode\n    //bufferSize: int\n    //busy: bool\n    //connectedToBackend: bool\n    //currentOrientation: int\n    //dataRate: int\n    //description: string\n    //efficientBufferSize: int\n    //error: int\n    //identifier: string\n    //maxBufferSize: int\n    //outputRange: int\n    //outputRanges: list<OutputRange>\n    //reading: SensorReading\n    //skipDuplicates: bool\n    //type: string\n    //userOrientation: int\n}",
        "description": "HolsterSensor",
        "prefix": "HolsterSensor",
        "scope": "source.qml"
    },
    {
        "body": "HorizontalBarSeries{\n    //axisX: AbstractAxis\n    //axisXTop: AbstractAxis\n    //axisY: AbstractAxis\n    //axisYRight: AbstractAxis\n    //barWidth: real\n    //count: int\n    //labelsAngle: real\n    //labelsFormat: string\n    //labelsPosition: enumeration\n    //labelsPrecision: real\n    //labelsVisible: bool\n    //barsetsAdded()\n    //barsetsRemoved()\n    //clear()\n    //clicked(intindex,BarSetbarset)\n    //doubleClicked(intindex,BarSetbarset)\n    //hovered(boolstatus,intindex,BarSetbarset)\n    //pressed(intindex,BarSetbarset)\n    //released(intindex,BarSetbarset)\n    //name: string\n    //opacity: real\n    //type: enumeration\n    //useOpenGL: bool\n    //visible: bool\n}",
        "description": "HorizontalBarSeries",
        "prefix": "HorizontalBarSeries",
        "scope": "source.qml"
    },
    {
        "body": "HorizontalPercentBarSeries{\n    //axisX: AbstractAxis\n    //axisXTop: AbstractAxis\n    //axisY: AbstractAxis\n    //axisYRight: AbstractAxis\n    //barWidth: real\n    //count: int\n    //labelsAngle: real\n    //labelsFormat: string\n    //labelsPosition: enumeration\n    //labelsPrecision: real\n    //labelsVisible: bool\n    //barsetsAdded()\n    //barsetsRemoved()\n    //clear()\n    //clicked(intindex,BarSetbarset)\n    //doubleClicked(intindex,BarSetbarset)\n    //hovered(boolstatus,intindex,BarSetbarset)\n    //pressed(intindex,BarSetbarset)\n    //released(intindex,BarSetbarset)\n    //name: string\n    //opacity: real\n    //type: enumeration\n    //useOpenGL: bool\n    //visible: bool\n}",
        "description": "HorizontalPercentBarSeries",
        "prefix": "HorizontalPercentBarSeries",
        "scope": "source.qml"
    },
    {
        "body": "HorizontalStackedBarSeries{\n    //axisX: AbstractAxis\n    //axisXTop: AbstractAxis\n    //axisY: AbstractAxis\n    //axisYRight: AbstractAxis\n    //barWidth: real\n    //count: int\n    //labelsAngle: real\n    //labelsFormat: string\n    //labelsPosition: enumeration\n    //labelsPrecision: real\n    //labelsVisible: bool\n    //barsetsAdded()\n    //barsetsRemoved()\n    //clear()\n    //clicked(intindex,BarSetbarset)\n    //doubleClicked(intindex,BarSetbarset)\n    //hovered(boolstatus,intindex,BarSetbarset)\n    //pressed(intindex,BarSetbarset)\n    //released(intindex,BarSetbarset)\n    //name: string\n    //opacity: real\n    //type: enumeration\n    //useOpenGL: bool\n    //visible: bool\n}",
        "description": "HorizontalStackedBarSeries",
        "prefix": "HorizontalStackedBarSeries",
        "scope": "source.qml"
    },
    {
        "body": "HoverHandler{\n    \n}",
        "description": "HoverHandler",
        "prefix": "HoverHandler",
        "scope": "source.qml"
    },
    {
        "body": "HueSaturation{\n    //cached: bool\n    //hue: real\n    //lightness: real\n    //saturation: real\n    //source: variant\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "HueSaturation",
        "prefix": "HueSaturation",
        "scope": "source.qml"
    },
    {
        "body": "HumidityReading{\n    //absoluteHumidity: qreal\n    //relativeHumidity: qreal\n    //timestamp: quint64\n}",
        "description": "HumidityReading",
        "prefix": "HumidityReading",
        "scope": "source.qml"
    },
    {
        "body": "HumiditySensor{\n    //active: bool\n    //alwaysOn: bool\n    //availableDataRates: list<Range>\n    //axesOrientationMode: Sensor: : AxesOrientationMode\n    //bufferSize: int\n    //busy: bool\n    //connectedToBackend: bool\n    //currentOrientation: int\n    //dataRate: int\n    //description: string\n    //efficientBufferSize: int\n    //error: int\n    //identifier: string\n    //maxBufferSize: int\n    //outputRange: int\n    //outputRanges: list<OutputRange>\n    //reading: SensorReading\n    //skipDuplicates: bool\n    //type: string\n    //userOrientation: int\n}",
        "description": "HumiditySensor",
        "prefix": "HumiditySensor",
        "scope": "source.qml"
    },
    {
        "body": "IRProximityReading{\n    //reflectance: qreal\n    //timestamp: quint64\n}",
        "description": "IRProximityReading",
        "prefix": "IRProximityReading",
        "scope": "source.qml"
    },
    {
        "body": "IRProximitySensor{\n    //active: bool\n    //alwaysOn: bool\n    //availableDataRates: list<Range>\n    //axesOrientationMode: Sensor: : AxesOrientationMode\n    //bufferSize: int\n    //busy: bool\n    //connectedToBackend: bool\n    //currentOrientation: int\n    //dataRate: int\n    //description: string\n    //efficientBufferSize: int\n    //error: int\n    //identifier: string\n    //maxBufferSize: int\n    //outputRange: int\n    //outputRanges: list<OutputRange>\n    //reading: SensorReading\n    //skipDuplicates: bool\n    //type: string\n    //userOrientation: int\n}",
        "description": "IRProximitySensor",
        "prefix": "IRProximitySensor",
        "scope": "source.qml"
    },
    {
        "body": "Icon{\n    //icon: QPlaceIcon\n    //parameters: Object\n    //plugin: Plugin\n}",
        "description": "Icon",
        "prefix": "Icon",
        "scope": "source.qml"
    },
    {
        "body": "Image{\n    //asynchronous: bool\n    //autoTransform: bool\n    //cache: bool\n    //fillMode: enumeration\n    //horizontalAlignment: enumeration\n    //mipmap: bool\n    //mirror: bool\n    //paintedHeight: real\n    //paintedWidth: real\n    //progress: real\n    //smooth: bool\n    //source: url\n    //sourceSize: QSize\n    //status: enumeration\n    //verticalAlignment: enumeration\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "Image",
        "prefix": "Image",
        "scope": "source.qml"
    },
    {
        "body": "ImageModel{\n    //batchSize: int\n    //place: Place\n    //totalCount: int\n}",
        "description": "ImageModel",
        "prefix": "ImageModel",
        "scope": "source.qml"
    },
    {
        "body": "ImageParticle{\n    //alpha: real\n    //alphaVariation: real\n    //autoRotation: bool\n    //blueVariation: real\n    //color: color\n    //colorTable: url\n    //colorVariation: real\n    //entryEffect: EntryEffect\n    //greenVariation: real\n    //opacityTable: url\n    //redVariation: real\n    //rotation: real\n    //rotationVariation: real\n    //rotationVelocity: real\n    //rotationVelocityVariation: real\n    //sizeTable: url\n    //source: url\n    //sprites: list<Sprite>\n    //spritesInterpolate: bool\n    //status: Status\n    //xVector: StochasticDirection\n    //yVector: StochasticDirection\n    //groups: list<string>\n    //system: ParticleSystem\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "ImageParticle",
        "prefix": "ImageParticle",
        "scope": "source.qml"
    },
    {
        "body": "InnerShadow{\n    //cached: bool\n    //color: color\n    //fast: bool\n    //horizontalOffset: real\n    //radius: real\n    //samples: int\n    //source: variant\n    //spread: real\n    //verticalOffset: real\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "InnerShadow",
        "prefix": "InnerShadow",
        "scope": "source.qml"
    },
    {
        "body": "InputChord{\n    //chords: list<AbstractActionInput>\n    //timeout: int\n}",
        "description": "InputChord",
        "prefix": "InputChord",
        "scope": "source.qml"
    },
    {
        "body": "InputContext{\n    //anchorPosition: int\n    //anchorRectangle: rect\n    //animating: bool\n    //capsLock: bool(obsolete)\n    //capsLockActive: bool\n    //cursorPosition: int\n    //cursorRectangle: rect\n    //inputEngine: InputEngine\n    //inputMethodHints: int\n    //locale: string\n    //preeditText: string\n    //selectedText: string\n    //shift: bool(obsolete)\n    //shiftActive: bool\n    //surroundingText: string\n    //uppercase: bool\n}",
        "description": "InputContext",
        "prefix": "InputContext",
        "scope": "source.qml"
    },
    {
        "body": "InputEngine{\n    //activeKey: int\n    //inputMethod: InputMethod\n    //inputMode: int\n    //inputModes: list<int>\n    //patternRecognitionModes: list<int>\n    //previousKey: int\n    //wordCandidateListModel: QVirtualKeyboardSelectionListModel\n    //wordCandidateListVisibleHint: bool\n}",
        "description": "InputEngine",
        "prefix": "InputEngine",
        "scope": "source.qml"
    },
    {
        "body": "InputHandler3D{\n    //rotationEnabled: bool\n    //selectionEnabled: bool\n    //zoomAtTargetEnabled: bool\n    //zoomEnabled: bool\n}",
        "description": "InputHandler3D",
        "prefix": "InputHandler3D",
        "scope": "source.qml"
    },
    {
        "body": "InputMethod{\n    //inputContext: InputContext\n    //inputEngine: InputEngine\n    //list<int>inputModes(stringlocale)\n    //list<int>patternRecognitionModes()\n    //reset()\n    //selectionListActiveItemChanged(inttype,intindex)\n    //selectionListChanged(inttype)\n    //list<int>selectionLists()\n    //selectionListsChanged()\n    //update()\n}",
        "description": "InputMethod",
        "prefix": "InputMethod",
        "scope": "source.qml"
    },
    {
        "body": "InputModeKey{\n    //inputModeCount: int\n    //inputModeNameList: var\n    //inputModes: var\n    //active: bool\n    //alternativeKeys: var\n    //displayText: string\n    //effectiveAlternativeKeys: var\n    //effectiveAlternativeKeysHighlightIndex: int\n    //functionKey: bool\n    //highlighted: bool\n    //key: int\n    //keyPanelDelegate: alias\n    //noKeyEvent: bool\n    //noModifier: bool\n    //pressed: bool\n    //repeat: bool\n    //showPreview: bool\n    //smallText: string\n    //smallTextVisible: bool\n    //soundEffect: url\n    //text: string\n    //uppercased: bool\n    //weight: real\n    //clicked()\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "InputModeKey",
        "prefix": "InputModeKey",
        "scope": "source.qml"
    },
    {
        "body": "InputPanel{\n    //active: bool\n    //externalLanguageSwitchEnabled: bool\n    //externalLanguageSwitch(var,int)\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "InputPanel",
        "prefix": "InputPanel",
        "scope": "source.qml"
    },
    {
        "body": "InputSequence{\n    //buttonInterval: int\n    //sequences: list<AbstractActionInput>\n    //timeout: int\n    //buttonIntervalChanged()\n    //timeoutChanged()\n}",
        "description": "InputSequence",
        "prefix": "InputSequence",
        "scope": "source.qml"
    },
    {
        "body": "InputSettings{\n    //eventSource: Object\n    //isShareable: bool\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "InputSettings",
        "prefix": "InputSettings",
        "scope": "source.qml"
    },
    {
        "body": "Instantiator{\n    //active: bool\n    //asynchronous: bool\n    //count: int\n    //delegate: QtQml: : Component\n    //model: variant\n    //object: QtObject\n    //objectAdded(intindex,QtObjectobject)\n    //objectRemoved(intindex,QtObjectobject)\n}",
        "description": "Instantiator",
        "prefix": "Instantiator",
        "scope": "source.qml"
    },
    {
        "body": "IntValidator{\n    //bottom: int\n    //locale: string\n    //top: int\n}",
        "description": "IntValidator",
        "prefix": "IntValidator",
        "scope": "source.qml"
    },
    {
        "body": "InvokedServices{\n    //children: var\n    //qmlChildren: list<QtObject>\n    //stateMachine: ScxmlStateMachine\n}",
        "description": "InvokedServices",
        "prefix": "InvokedServices",
        "scope": "source.qml"
    },
    {
        "body": "Item{\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "Item",
        "prefix": "Item",
        "scope": "source.qml"
    },
    {
        "body": "ItemDelegate{\n    //highlighted: bool\n    //action: Action\n    //autoExclusive: bool\n    //autoRepeat: bool\n    //autoRepeatDelay: int\n    //autoRepeatInterval: int\n    //checkable: bool\n    //checked: bool\n    //display: enumeration\n    //down: bool\n    //icon.color: color\n    //icon.height: int\n    //icon.name: string\n    //icon.source: url\n    //icon.width: int\n    //implicitIndicatorHeight: real\n    //implicitIndicatorWidth: real\n    //indicator: Item\n    //pressX: real\n    //pressY: real\n    //pressed: bool\n    //text: string\n    //canceled()\n    //clicked()\n    //doubleClicked()\n    //pressAndHold()\n    //pressed()\n    //released()\n    //toggled()\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "ItemDelegate",
        "prefix": "ItemDelegate",
        "scope": "source.qml"
    },
    {
        "body": "ItemGrabResult{\n    //objectName: string\n}",
        "description": "ItemGrabResult",
        "prefix": "ItemGrabResult",
        "scope": "source.qml"
    },
    {
        "body": "ItemModelBarDataProxy{\n    //autoColumnCategories: bool\n    //autoRowCategories: bool\n    //columnCategories: list<String>\n    //columnRole: string\n    //columnRolePattern: regExp\n    //columnRoleReplace: string\n    //itemModel: model\n    //multiMatchBehavior: ItemModelBarDataProxy.MultiMatchBehavior\n    //rotationRole: string\n    //rotationRolePattern: regExp\n    //rotationRoleReplace: string\n    //rowCategories: list<String>\n    //rowRole: string\n    //rowRolePattern: regExp\n    //rowRoleReplace: string\n    //useModelCategories: bool\n    //valueRole: string\n    //valueRolePattern: regExp\n    //valueRoleReplace: string\n    //columnLabels: list\n    //rowCount: int\n    //rowLabels: list\n    //series: Bar3DSeries\n    //type: AbstractDataProxy.DataType\n}",
        "description": "ItemModelBarDataProxy",
        "prefix": "ItemModelBarDataProxy",
        "scope": "source.qml"
    },
    {
        "body": "ItemModelScatterDataProxy{\n    //itemModel: model\n    //rotationRole: string\n    //rotationRolePattern: regExp\n    //rotationRoleReplace: string\n    //xPosRole: string\n    //xPosRolePattern: regExp\n    //xPosRoleReplace: string\n    //yPosRole: string\n    //yPosRolePattern: regExp\n    //yPosRoleReplace: string\n    //zPosRole: string\n    //zPosRolePattern: regExp\n    //zPosRoleReplace: string\n    //itemCount: int\n    //series: Scatter3DSeries\n    //type: AbstractDataProxy.DataType\n}",
        "description": "ItemModelScatterDataProxy",
        "prefix": "ItemModelScatterDataProxy",
        "scope": "source.qml"
    },
    {
        "body": "ItemModelSurfaceDataProxy{\n    //autoColumnCategories: bool\n    //autoRowCategories: bool\n    //columnCategories: list<String>\n    //columnRole: string\n    //columnRolePattern: regExp\n    //columnRoleReplace: string\n    //itemModel: model\n    //multiMatchBehavior: ItemModelSurfaceDataProxy.MultiMatchBehavior\n    //rowCategories: list<String>\n    //rowRole: string\n    //rowRolePattern: regExp\n    //rowRoleReplace: string\n    //useModelCategories: bool\n    //xPosRole: string\n    //xPosRolePattern: regExp\n    //xPosRoleReplace: string\n    //yPosRole: string\n    //yPosRolePattern: regExp\n    //yPosRoleReplace: string\n    //zPosRole: string\n    //zPosRolePattern: regExp\n    //zPosRoleReplace: string\n    //columnCount: int\n    //rowCount: int\n    //series: Surface3DSeries\n    //type: AbstractDataProxy.DataType\n}",
        "description": "ItemModelSurfaceDataProxy",
        "prefix": "ItemModelSurfaceDataProxy",
        "scope": "source.qml"
    },
    {
        "body": "ItemParticle{\n    //delegate: Component\n    //fade: bool\n    //freeze(Itemitem)\n    //give(Itemitem)\n    //take(Itemitem,boolprioritize)\n    //unfreeze(Itemitem)\n    //groups: list<string>\n    //system: ParticleSystem\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "ItemParticle",
        "prefix": "ItemParticle",
        "scope": "source.qml"
    },
    {
        "body": "ItemSelectionModel{\n    //currentIndex: QModelIndex\n    //hasSelection: bool\n    //model: QAbstractItemModel\n    //selectedIndexes: QModelIndexList\n    //selection: object\n    //currentChanged(QModelIndexcurrent,QModelIndexprevious)\n    //selectionChanged(QItemSelectionselected,QItemSelectiondeselected)\n}",
        "description": "ItemSelectionModel",
        "prefix": "ItemSelectionModel",
        "scope": "source.qml"
    },
    {
        "body": "IviApplication{\n    \n}",
        "description": "IviApplication",
        "prefix": "IviApplication",
        "scope": "source.qml"
    },
    {
        "body": "IviSurface{\n    //iviId: int\n    //surface: WaylandSurface\n}",
        "description": "IviSurface",
        "prefix": "IviSurface",
        "scope": "source.qml"
    },
    {
        "body": "JavaScriptDialogRequest{\n    //accepted: bool\n    //defaultText: string\n    //message: string\n    //securityOrigin: url\n    //title: string\n    //type: enumeration\n}",
        "description": "JavaScriptDialogRequest",
        "prefix": "JavaScriptDialogRequest",
        "scope": "source.qml"
    },
    {
        "body": "Joint{\n    //childJoints: list<Joint>\n    //inverseBindMatrix: matrix4x4\n    //rotation: quaternion\n    //rotationX: real\n    //rotationY: real\n    //rotationZ: real\n    //scale: vector3d\n    //translation: vector3d\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "Joint",
        "prefix": "Joint",
        "scope": "source.qml"
    },
    {
        "body": "JumpList{\n    //categories: list<JumpListCategory>\n    //frequent: JumpListCategory\n    //recent: JumpListCategory\n    //tasks: JumpListCategory\n}",
        "description": "JumpList",
        "prefix": "JumpList",
        "scope": "source.qml"
    },
    {
        "body": "JumpListCategory{\n    //items: list<JumpListItem>\n    //title: string\n    //visible: bool\n}",
        "description": "JumpListCategory",
        "prefix": "JumpListCategory",
        "scope": "source.qml"
    },
    {
        "body": "JumpListDestination{\n    //filePath: string\n}",
        "description": "JumpListDestination",
        "prefix": "JumpListDestination",
        "scope": "source.qml"
    },
    {
        "body": "JumpListLink{\n    //arguments: string\n    //description: string\n    //executablePath: string\n    //iconPath: string\n    //title: string\n}",
        "description": "JumpListLink",
        "prefix": "JumpListLink",
        "scope": "source.qml"
    },
    {
        "body": "JumpListSeparator{\n    \n}",
        "description": "JumpListSeparator",
        "prefix": "JumpListSeparator",
        "scope": "source.qml"
    },
    {
        "body": "Key{\n    //active: bool\n    //alternativeKeys: var\n    //displayText: string\n    //effectiveAlternativeKeys: var\n    //effectiveAlternativeKeysHighlightIndex: int\n    //functionKey: bool\n    //highlighted: bool\n    //key: int\n    //keyPanelDelegate: alias\n    //noKeyEvent: bool\n    //noModifier: bool\n    //pressed: bool\n    //repeat: bool\n    //showPreview: bool\n    //smallText: string\n    //smallTextVisible: bool\n    //soundEffect: url\n    //text: string\n    //uppercased: bool\n    //weight: real\n    //clicked()\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "Key",
        "prefix": "Key",
        "scope": "source.qml"
    },
    {
        "body": "KeyEvent{\n    //accepted: bool\n    //count: int\n    //isAutoRepeat: bool\n    //key: int\n    //modifiers: int\n    //nativeScanCode: quint32\n    //text: string\n}",
        "description": "KeyEvent",
        "prefix": "KeyEvent",
        "scope": "source.qml"
    },
    {
        "body": "KeyIcon{\n    //color: alias\n    //source: alias\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "KeyIcon",
        "prefix": "KeyIcon",
        "scope": "source.qml"
    },
    {
        "body": "KeyNavigation{\n    //backtab: Item\n    //down: Item\n    //left: Item\n    //priority: enumeration\n    //right: Item\n    //tab: Item\n    //up: Item\n}",
        "description": "KeyNavigation",
        "prefix": "KeyNavigation",
        "scope": "source.qml"
    },
    {
        "body": "KeyPanel{\n    //control: Item\n    //soundEffect: url\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "KeyPanel",
        "prefix": "KeyPanel",
        "scope": "source.qml"
    },
    {
        "body": "KeyboardColumn{\n    //keyWeight: real\n    //smallTextVisible: bool\n    //layoutDirection: enumeration\n    //spacing: real\n}",
        "description": "KeyboardColumn",
        "prefix": "KeyboardColumn",
        "scope": "source.qml"
    },
    {
        "body": "KeyboardDevice{\n    //activeInput: KeyboardHandler\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "KeyboardDevice",
        "prefix": "KeyboardDevice",
        "scope": "source.qml"
    },
    {
        "body": "KeyboardHandler{\n    //focus: bool\n    //sourceDevice: KeyboardDevice\n    //asteriskPressed(KeyEventevent)\n    //backPressed(KeyEventevent)\n    //backtabPressed(KeyEventevent)\n    //callPressed(KeyEventevent)\n    //cancelPressed(KeyEventevent)\n    //context1Pressed(KeyEventevent)\n    //context2Pressed(KeyEventevent)\n    //context3Pressed(KeyEventevent)\n    //context4Pressed(KeyEventevent)\n    //deletePressed(KeyEventevent)\n    //digit0Pressed(KeyEventevent)\n    //digit1Pressed(KeyEventevent)\n    //digit2Pressed(KeyEventevent)\n    //digit3Pressed(KeyEventevent)\n    //digit4Pressed(KeyEventevent)\n    //digit5Pressed(KeyEventevent)\n    //digit6Pressed(KeyEventevent)\n    //digit7Pressed(KeyEventevent)\n    //digit8Pressed(KeyEventevent)\n    //digit9Pressed(KeyEventevent)\n    //downPressed(KeyEventevent)\n    //enterPressed(KeyEventevent)\n    //escapePressed(KeyEventevent)\n    //flipPressed(KeyEventevent)\n    //hangupPressed(KeyEventevent)\n    //leftPressed(KeyEventevent)\n    //menuPressed(KeyEventevent)\n    //noPressed(KeyEventevent)\n    //numberSignPressed(KeyEventevent)\n    //pressed(KeyEventevent)\n    //released(KeyEventevent)\n    //returnPressed(KeyEventevent)\n    //rightPressed(KeyEventevent)\n    //selectPressed(KeyEventevent)\n    //spacePressed(KeyEventevent)\n    //tabPressed(KeyEventevent)\n    //upPressed(KeyEventevent)\n    //volumeDownPressed(KeyEventevent)\n    //volumeUpPressed(KeyEventevent)\n    //yesPressed(KeyEventevent)\n    //isShareable: bool\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "KeyboardHandler",
        "prefix": "KeyboardHandler",
        "scope": "source.qml"
    },
    {
        "body": "KeyboardLayout{\n    //inputMethod: var\n    //inputMode: int\n    //keyWeight: real\n    //sharedLayouts: var\n    //smallTextVisible: bool\n    //createInputMethod()\n    //layoutDirection: enumeration\n    //spacing: real\n}",
        "description": "KeyboardLayout",
        "prefix": "KeyboardLayout",
        "scope": "source.qml"
    },
    {
        "body": "KeyboardLayoutLoader{\n    //inputMethod: var\n    //inputMode: int\n    //sharedLayouts: var\n    //createInputMethod()\n    //active: bool\n    //asynchronous: bool\n    //item: object\n    //progress: real\n    //source: url\n    //sourceComponent: Component\n    //status: enumeration\n    //loaded()\n    //setSource()\n}",
        "description": "KeyboardLayoutLoader",
        "prefix": "KeyboardLayoutLoader",
        "scope": "source.qml"
    },
    {
        "body": "KeyboardRow{\n    //keyWeight: real\n    //smallTextVisible: bool\n    //layoutDirection: enumeration\n    //spacing: real\n}",
        "description": "KeyboardRow",
        "prefix": "KeyboardRow",
        "scope": "source.qml"
    },
    {
        "body": "KeyboardStyle{\n    //alternateKeysListBackground: Component\n    //alternateKeysListBottomMargin: real\n    //alternateKeysListDelegate: Component\n    //alternateKeysListHighlight: Component\n    //alternateKeysListItemHeight: real\n    //alternateKeysListItemWidth: real\n    //alternateKeysListLeftMargin: real\n    //alternateKeysListRightMargin: real\n    //alternateKeysListTopMargin: real\n    //backspaceKeyPanel: Component\n    //characterPreviewDelegate: Component\n    //characterPreviewMargin: real\n    //enterKeyPanel: Component\n    //fullScreenInputBackground: Component\n    //fullScreenInputColor: color\n    //fullScreenInputContainerBackground: Component\n    //fullScreenInputCursor: Component\n    //fullScreenInputFont: font\n    //fullScreenInputMargins: real\n    //fullScreenInputPadding: real\n    //fullScreenInputPasswordCharacter: string\n    //fullScreenInputSelectedTextColor: color\n    //fullScreenInputSelectionColor: color\n    //handwritingKeyPanel: Component\n    //hideKeyPanel: Component\n    //keyPanel: Component\n    //keyboardBackground: Component\n    //keyboardDesignHeight: real\n    //keyboardDesignWidth: real\n    //keyboardHeight: real\n    //keyboardRelativeBottomMargin: real\n    //keyboardRelativeLeftMargin: real\n    //keyboardRelativeRightMargin: real\n    //keyboardRelativeTopMargin: real\n    //languageKeyPanel: Component\n    //languageListAdd: Transition\n    //languageListBackground: Component\n    //languageListDelegate: Component\n    //languageListHighlight: Component\n    //languageListRemove: Transition\n    //languagePopupListEnabled: bool\n    //modeKeyPanel: Component\n    //navigationHighlight: Component\n    //popupListAdd: Transition\n    //popupListBackground: Component\n    //popupListDelegate: Component\n    //popupListHighlight: Component\n    //popupListRemove: Transition\n    //scaleHint: real\n    //selectionHandle: Component\n    //selectionListAdd: Transition\n    //selectionListBackground: Component\n    //selectionListDelegate: Component\n    //selectionListHeight: real\n    //selectionListHighlight: Component\n    //selectionListRemove: Transition\n    //shiftKeyPanel: Component\n    //spaceKeyPanel: Component\n    //symbolKeyPanel: Component\n    //traceCanvasDelegate: Component\n    //traceInputKeyPanelDelegate: Component\n    //objectName: string\n}",
        "description": "KeyboardStyle",
        "prefix": "KeyboardStyle",
        "scope": "source.qml"
    },
    {
        "body": "KeyframeAnimation{\n    //easing: EasingCurve\n    //endMode: enumeration\n    //framePositions: list<real>\n    //keyframes: list<Transform>\n    //startMode: enumeration\n    //target: Transform\n    //targetName: string\n    //animationName: string\n    //animationType: enumeration\n    //duration: real\n    //position: real\n}",
        "description": "KeyframeAnimation",
        "prefix": "KeyframeAnimation",
        "scope": "source.qml"
    },
    {
        "body": "Keys{\n    //enabled: bool\n    //forwardTo: list<Object>\n    //priority: enumeration\n    //asteriskPressed(KeyEventevent)\n    //backPressed(KeyEventevent)\n    //backtabPressed(KeyEventevent)\n    //callPressed(KeyEventevent)\n    //cancelPressed(KeyEventevent)\n    //context1Pressed(KeyEventevent)\n    //context2Pressed(KeyEventevent)\n    //context3Pressed(KeyEventevent)\n    //context4Pressed(KeyEventevent)\n    //deletePressed(KeyEventevent)\n    //digit0Pressed(KeyEventevent)\n    //digit1Pressed(KeyEventevent)\n    //digit2Pressed(KeyEventevent)\n    //digit3Pressed(KeyEventevent)\n    //digit4Pressed(KeyEventevent)\n    //digit5Pressed(KeyEventevent)\n    //digit6Pressed(KeyEventevent)\n    //digit7Pressed(KeyEventevent)\n    //digit8Pressed(KeyEventevent)\n    //digit9Pressed(KeyEventevent)\n    //downPressed(KeyEventevent)\n    //enterPressed(KeyEventevent)\n    //escapePressed(KeyEventevent)\n    //flipPressed(KeyEventevent)\n    //hangupPressed(KeyEventevent)\n    //leftPressed(KeyEventevent)\n    //menuPressed(KeyEventevent)\n    //noPressed(KeyEventevent)\n    //pressed(KeyEventevent)\n    //released(KeyEventevent)\n    //returnPressed(KeyEventevent)\n    //rightPressed(KeyEventevent)\n    //selectPressed(KeyEventevent)\n    //shortcutOverride(KeyEventevent)\n    //spacePressed(KeyEventevent)\n    //tabPressed(KeyEventevent)\n    //upPressed(KeyEventevent)\n    //volumeDownPressed(KeyEventevent)\n    //volumeUpPressed(KeyEventevent)\n    //yesPressed(KeyEventevent)\n}",
        "description": "Keys",
        "prefix": "Keys",
        "scope": "source.qml"
    },
    {
        "body": "Label{\n    //background: Item\n    //bottomInset: real\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //leftInset: real\n    //palette: palette\n    //rightInset: real\n    //topInset: real\n    //advance: size\n    //baseUrl: url\n    //bottomPadding: real\n    //clip: bool\n    //color: color\n    //contentHeight: real\n    //contentWidth: real\n    //effectiveHorizontalAlignment: enumeration\n    //elide: enumeration\n    //font.bold: bool\n    //font.capitalization: enumeration\n    //font.family: string\n    //font.hintingPreference: enumeration\n    //font.italic: bool\n    //font.kerning: bool\n    //font.letterSpacing: real\n    //font.pixelSize: int\n    //font.pointSize: real\n    //font.preferShaping: bool\n    //font.strikeout: bool\n    //font.styleName: string\n    //font.underline: bool\n    //font.weight: enumeration\n    //font.wordSpacing: real\n    //fontInfo.bold: bool\n    //fontInfo.family: string\n    //fontInfo.italic: bool\n    //fontInfo.pixelSize: string\n    //fontInfo.pointSize: real\n    //fontInfo.styleName: string\n    //fontInfo.weight: int\n    //fontSizeMode: enumeration\n    //horizontalAlignment: enumeration\n    //hoveredLink: string\n    //leftPadding: real\n    //lineCount: int\n    //lineHeight: real\n    //lineHeightMode: enumeration\n    //linkColor: color\n    //maximumLineCount: int\n    //minimumPixelSize: int\n    //minimumPointSize: int\n    //padding: real\n    //renderType: enumeration\n    //rightPadding: real\n    //style: enumeration\n    //styleColor: color\n    //text: string\n    //textFormat: enumeration\n    //topPadding: real\n    //truncated: bool\n    //verticalAlignment: enumeration\n    //wrapMode: enumeration\n    //doLayout()(obsolete)\n    //forceLayout()\n    //lineLaidOut()\n    //linkActivated()\n    //linkAt()\n    //linkHovered()\n}",
        "description": "Label",
        "prefix": "Label",
        "scope": "source.qml"
    },
    {
        "body": "Layer{\n    //recursive: bool\n    //isShareable: bool\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "Layer",
        "prefix": "Layer",
        "scope": "source.qml"
    },
    {
        "body": "LayerFilter{\n    //filterMode: enumeration\n    //layers: list<Layer>\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "LayerFilter",
        "prefix": "LayerFilter",
        "scope": "source.qml"
    },
    {
        "body": "Layout{\n    //onAlignment : Qt.Alignme: { }\n    //onBottommargin : Re: { }\n    //onColumn : I: { }\n    //onColumnspan : I: { }\n    //onFillheight : Bo: { }\n    //onFillwidth : Bo: { }\n    //onLeftmargin : Re: { }\n    //onMargins : Re: { }\n    //onMaximumheight : Re: { }\n    //onMaximumwidth : Re: { }\n    //onMinimumheight : Re: { }\n    //onMinimumwidth : Re: { }\n    //onPreferredheight : Re: { }\n    //onPreferredwidth : Re: { }\n    //onRightmargin : Re: { }\n    //onRow : I: { }\n    //onRowspan : I: { }\n    //onTopmargin : Re: { }\n}",
        "description": "Layout",
        "prefix": "Layout",
        "scope": "source.qml"
    },
    {
        "body": "LayoutMirroring{\n    //childrenInherit: bool\n    //enabled: bool\n}",
        "description": "LayoutMirroring",
        "prefix": "LayoutMirroring",
        "scope": "source.qml"
    },
    {
        "body": "Legend{\n    //alignment: alignment\n    //backgroundVisible: bool\n    //borderColor: color\n    //color: color\n    //font: Font\n    //labelColor: color\n    //markerShape: enumeration\n    //reverseMarkers: bool\n    //showToolTips: bool\n    //visible: bool\n}",
        "description": "Legend",
        "prefix": "Legend",
        "scope": "source.qml"
    },
    {
        "body": "LerpBlend{\n    //blendFactor: real\n}",
        "description": "LerpBlend",
        "prefix": "LerpBlend",
        "scope": "source.qml"
    },
    {
        "body": "LevelAdjust{\n    //cached: bool\n    //gamma: variant\n    //maximumInput: color\n    //maximumOutput: color\n    //minimumInput: color\n    //minimumOutput: color\n    //source: variant\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "LevelAdjust",
        "prefix": "LevelAdjust",
        "scope": "source.qml"
    },
    {
        "body": "LevelOfDetail{\n    //ThresholdType: enumeration\n    //camera: Camera\n    //currentIndex: int\n    //thresholdType: int\n    //thresholds: QVector<qreal>\n    //volumeOverride: int\n    //isShareable: bool\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "LevelOfDetail",
        "prefix": "LevelOfDetail",
        "scope": "source.qml"
    },
    {
        "body": "LevelOfDetailBoundingSphere{\n    //center: QVector3D\n    //radius: qreal\n    //isShareable: bool\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "LevelOfDetailBoundingSphere",
        "prefix": "LevelOfDetailBoundingSphere",
        "scope": "source.qml"
    },
    {
        "body": "LevelOfDetailLoader{\n    //sources: list<string>\n    //components: list<Component3D>\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "LevelOfDetailLoader",
        "prefix": "LevelOfDetailLoader",
        "scope": "source.qml"
    },
    {
        "body": "LevelOfDetailSwitch{\n    //currentIndex: int\n    //isShareable: bool\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "LevelOfDetailSwitch",
        "prefix": "LevelOfDetailSwitch",
        "scope": "source.qml"
    },
    {
        "body": "LidReading{\n    //backLidClosed: qreal\n    //frontLidClosed: qreal\n    //timestamp: quint64\n}",
        "description": "LidReading",
        "prefix": "LidReading",
        "scope": "source.qml"
    },
    {
        "body": "LidSensor{\n    //active: bool\n    //alwaysOn: bool\n    //availableDataRates: list<Range>\n    //axesOrientationMode: Sensor: : AxesOrientationMode\n    //bufferSize: int\n    //busy: bool\n    //connectedToBackend: bool\n    //currentOrientation: int\n    //dataRate: int\n    //description: string\n    //efficientBufferSize: int\n    //error: int\n    //identifier: string\n    //maxBufferSize: int\n    //outputRange: int\n    //outputRanges: list<OutputRange>\n    //reading: SensorReading\n    //skipDuplicates: bool\n    //type: string\n    //userOrientation: int\n}",
        "description": "LidSensor",
        "prefix": "LidSensor",
        "scope": "source.qml"
    },
    {
        "body": "Light{\n    \n}",
        "description": "Light",
        "prefix": "Light",
        "scope": "source.qml"
    },
    {
        "body": "Light3D{\n    //autoPosition: bool\n}",
        "description": "Light3D",
        "prefix": "Light3D",
        "scope": "source.qml"
    },
    {
        "body": "LightReading{\n    //illuminance: qreal\n    //timestamp: quint64\n}",
        "description": "LightReading",
        "prefix": "LightReading",
        "scope": "source.qml"
    },
    {
        "body": "LightSensor{\n    //fieldOfView: qreal\n    //active: bool\n    //alwaysOn: bool\n    //availableDataRates: list<Range>\n    //axesOrientationMode: Sensor: : AxesOrientationMode\n    //bufferSize: int\n    //busy: bool\n    //connectedToBackend: bool\n    //currentOrientation: int\n    //dataRate: int\n    //description: string\n    //efficientBufferSize: int\n    //error: int\n    //identifier: string\n    //maxBufferSize: int\n    //outputRange: int\n    //outputRanges: list<OutputRange>\n    //reading: SensorReading\n    //skipDuplicates: bool\n    //type: string\n    //userOrientation: int\n}",
        "description": "LightSensor",
        "prefix": "LightSensor",
        "scope": "source.qml"
    },
    {
        "body": "LineSeries{\n    //capStyle: Qt: : PenCapStyle\n    //count: int\n    //style: Qt: : PenStyle\n    //width: real\n    //axisAngular: AbstractAxis\n    //axisRadial: AbstractAxis\n    //axisX: AbstractAxis\n    //axisXTop: AbstractAxis\n    //axisY: AbstractAxis\n    //axisYRight: AbstractAxis\n    //color: color\n    //pointLabelsClipping: bool\n    //pointLabelsColor: font\n    //pointLabelsFont: font\n    //pointLabelsFormat: string\n    //pointLabelsVisible: bool\n    //pointsVisible: bool\n    //append(realx,realy)\n    //clicked(pointpoint)\n    //doubleClicked(pointpoint)\n    //hovered(pointpoint,boolstate)\n    //insert(intindex,realx,realy)\n    //pointAdded(intindex)\n    //pointRemoved(intindex)\n    //pointReplaced(intindex)\n    //pointsRemoved(intindex,intcount)\n    //pointsReplaced()\n    //pressed(pointpoint)\n    //released(pointpoint)\n    //remove(realx,realy)\n    //remove(intindex)\n    //removePoints(intindex,intcount)\n    //replace(realoldX,realoldY,realnewX,realnewY)\n    //name: string\n    //opacity: real\n    //type: enumeration\n    //useOpenGL: bool\n    //visible: bool\n}",
        "description": "LineSeries",
        "prefix": "LineSeries",
        "scope": "source.qml"
    },
    {
        "body": "LineShape{\n    //mirrored: bool\n}",
        "description": "LineShape",
        "prefix": "LineShape",
        "scope": "source.qml"
    },
    {
        "body": "LineWidth{\n    //value: real\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "LineWidth",
        "prefix": "LineWidth",
        "scope": "source.qml"
    },
    {
        "body": "LinearGradient{\n    //cached: bool\n    //end: variant\n    //gradient: Gradient\n    //source: variant\n    //start: variant\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "LinearGradient",
        "prefix": "LinearGradient",
        "scope": "source.qml"
    },
    {
        "body": "ListElement{\n    \n}",
        "description": "ListElement",
        "prefix": "ListElement",
        "scope": "source.qml"
    },
    {
        "body": "ListModel{\n    //count: int\n    //dynamicRoles: bool\n    //append(jsobjectdict)\n    //clear()\n    //insert(intindex,jsobjectdict)\n    //move(intfrom,intto,intn)\n    //remove(intindex,intcount=1)\n    //set(intindex,jsobjectdict)\n    //setProperty(intindex,stringproperty,variantvalue)\n    //sync()\n}",
        "description": "ListModel",
        "prefix": "ListModel",
        "scope": "source.qml"
    },
    {
        "body": "ListView{\n    //\n    //add: Transition\n    //addDisplaced: Transition\n    //cacheBuffer: int\n    //count: int\n    //currentIndex: int\n    //currentItem: Item\n    //currentSection: string\n    //onDelayremove : Bo: { }\n    //delegate: Component\n    //displaced: Transition\n    //displayMarginBeginning: int\n    //displayMarginEnd: int\n    //effectiveLayoutDirection: enumeration\n    //footer: Component\n    //footerItem: Item\n    //footerPositioning: enumeration\n    //header: Component\n    //headerItem: Item\n    //headerPositioning: enumeration\n    //highlight: Component\n    //highlightFollowsCurrentItem: bool\n    //highlightItem: Item\n    //highlightMoveDuration: int\n    //highlightMoveVelocity: real\n    //highlightRangeMode: enumeration\n    //highlightResizeDuration: int\n    //highlightResizeVelocity: real\n    //onIscurrentitem : Bo: { }\n    //keyNavigationEnabled: bool\n    //keyNavigationWraps: bool\n    //layoutDirection: enumeration\n    //model: model\n    //move: Transition\n    //moveDisplaced: Transition\n    //onNextsection : Stri: { }\n    //orientation: enumeration\n    //populate: Transition\n    //preferredHighlightBegin: real\n    //preferredHighlightEnd: real\n    //onPrevioussection : Stri: { }\n    //remove: Transition\n    //removeDisplaced: Transition\n    //onSection : Stri: { }\n    //section.criteria: enumeration\n    //section.delegate: Component\n    //section.labelPositioning: enumeration\n    //section.property: string\n    //snapMode: enumeration\n    //spacing: real\n    //verticalLayoutDirection: enumeration\n    //onView : Listvi: { }\n    //onAdd: { }\n    //decrementCurrentIndex()\n    //forceLayout()\n    //incrementCurrentIndex()\n    //positionViewAtBeginning()\n    //positionViewAtEnd()\n    //positionViewAtIndex(intindex,PositionModemode)\n    //onRemove: { }\n    //atXBeginning: bool\n    //atXEnd: bool\n    //atYBeginning: bool\n    //atYEnd: bool\n    //bottomMargin: real\n    //boundsBehavior: enumeration\n    //boundsMovement: enumeration\n    //contentHeight: real\n    //contentItem: Item\n    //contentWidth: real\n    //contentX: real\n    //contentY: real\n    //dragging: bool\n    //draggingHorizontally: bool\n    //draggingVertically: bool\n    //flickDeceleration: real\n    //flickableDirection: enumeration\n    //flicking: bool\n    //flickingHorizontally: bool\n    //flickingVertically: bool\n    //horizontalOvershoot: real\n    //horizontalVelocity: real\n    //interactive: bool\n    //leftMargin: real\n    //maximumFlickVelocity: real\n    //moving: bool\n    //movingHorizontally: bool\n    //movingVertically: bool\n    //originX: real\n    //originY: real\n    //pixelAligned: bool\n    //pressDelay: int\n    //rebound: Transition\n    //rightMargin: real\n    //synchronousDrag: bool\n    //topMargin: real\n    //verticalOvershoot: real\n    //verticalVelocity: real\n    //visibleArea.heightRatio: real\n    //visibleArea.widthRatio: real\n    //visibleArea.xPosition: real\n    //visibleArea.yPosition: real\n    //cancelFlick()\n    //flick(qrealxVelocity,qrealyVelocity)\n    //flickEnded()\n    //flickStarted()\n    //movementEnded()\n    //movementStarted()\n    //resizeContent(realwidth,realheight,QPointFcenter)\n    //returnToBounds()\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "ListView",
        "prefix": "ListView",
        "scope": "source.qml"
    },
    {
        "body": "Loader{\n    //active: bool\n    //asynchronous: bool\n    //item: object\n    //progress: real\n    //source: url\n    //sourceComponent: Component\n    //status: enumeration\n    //loaded()\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "Loader",
        "prefix": "Loader",
        "scope": "source.qml"
    },
    {
        "body": "Locale{\n    //amText: string\n    //decimalPoint: string\n    //exponential: string\n    //firstDayOfWeek: enumeration\n    //groupSeparator: string\n    //measurementSystem: enumeration\n    //name: string\n    //nativeCountryName: string\n    //nativeLanguageName: string\n    //negativeSign: string\n    //percent: string\n    //pmText: string\n    //positiveSign: string\n    //textDirection: enumeration\n    //uiLanguages: Array<string>\n    //weekDays: Array<int>\n    //zeroDigit: string\n}",
        "description": "Locale",
        "prefix": "Locale",
        "scope": "source.qml"
    },
    {
        "body": "Location{\n    //address: Address\n    //boundingBox: georectangle\n    //coordinate: coordinate\n    //location: QGeoLocation\n}",
        "description": "Location",
        "prefix": "Location",
        "scope": "source.qml"
    },
    {
        "body": "LogValueAxis{\n    //base: real\n    //labelFormat: real\n    //max: real\n    //min: real\n    //minorTickCount: int\n    //tickCount: int\n    //minorTickCountChanged(intminorTickCount)\n    //tickCountChanged(inttickCount)\n    //alignment: alignment\n    //color: color\n    //gridLineColor: color\n    //gridVisible: bool\n    //labelsAngle: int\n    //labelsColor: color\n    //labelsFont: font\n    //labelsVisible: bool\n    //lineVisible: bool\n    //minorGridLineColor: color\n    //minorGridVisible: bool\n    //orientation: Qt.Orientation\n    //reverse: alignment\n    //shadesBorderColor: color\n    //shadesColor: color\n    //shadesVisible: bool\n    //titleFont: font\n    //titleText: string\n    //titleVisible: bool\n    //visible: bool\n}",
        "description": "LogValueAxis",
        "prefix": "LogValueAxis",
        "scope": "source.qml"
    },
    {
        "body": "LogValueAxis3DFormatter{\n    //autoSubGrid: bool\n    //base: real\n    //showEdgeLabels: bool\n}",
        "description": "LogValueAxis3DFormatter",
        "prefix": "LogValueAxis3DFormatter",
        "scope": "source.qml"
    },
    {
        "body": "LoggingCategory{\n    //defaultLogLevel: enumeration\n    //name: string\n}",
        "description": "LoggingCategory",
        "prefix": "LoggingCategory",
        "scope": "source.qml"
    },
    {
        "body": "LogicalDevice{\n    //actions: list<Action>\n    //axis: list<Axis>\n}",
        "description": "LogicalDevice",
        "prefix": "LogicalDevice",
        "scope": "source.qml"
    },
    {
        "body": "Magnetometer{\n    //returnGeoValues: bool\n    //active: bool\n    //alwaysOn: bool\n    //availableDataRates: list<Range>\n    //axesOrientationMode: Sensor: : AxesOrientationMode\n    //bufferSize: int\n    //busy: bool\n    //connectedToBackend: bool\n    //currentOrientation: int\n    //dataRate: int\n    //description: string\n    //efficientBufferSize: int\n    //error: int\n    //identifier: string\n    //maxBufferSize: int\n    //outputRange: int\n    //outputRanges: list<OutputRange>\n    //reading: SensorReading\n    //skipDuplicates: bool\n    //type: string\n    //userOrientation: int\n}",
        "description": "Magnetometer",
        "prefix": "Magnetometer",
        "scope": "source.qml"
    },
    {
        "body": "MagnetometerReading{\n    //calibrationLevel: qreal\n    //x: qreal\n    //y: qreal\n    //z: qreal\n    //timestamp: quint64\n}",
        "description": "MagnetometerReading",
        "prefix": "MagnetometerReading",
        "scope": "source.qml"
    },
    {
        "body": "Map{\n    //activeMapType: MapType\n    //bearing: real\n    //center: coordinate\n    //color: color\n    //copyrightsVisible: bool\n    //error: enumeration\n    //errorString: string\n    //fieldOfView: real\n    //gesture: MapGestureArea\n    //mapItems: list<MapItem>\n    //mapParameters: list<MapParameters>\n    //mapReady: bool\n    //maximumFieldOfView: real\n    //maximumTilt: real\n    //maximumZoomLevel: real\n    //minimumFieldOfView: real\n    //minimumTilt: real\n    //minimumZoomLevel: real\n    //plugin: Plugin\n    //supportedMapTypes: list<MapType>\n    //tilt: real\n    //visibleArea: rect\n    //visibleRegion: geoshape\n    //zoomLevel: real\n    //copyrightLinkActivated(stringlink)\n}",
        "description": "Map",
        "prefix": "Map",
        "scope": "source.qml"
    },
    {
        "body": "MapCircle{\n    //border.color: color\n    //border.width: int\n    //center: coordinate\n    //color: color\n    //opacity: real\n    //radius: real\n}",
        "description": "MapCircle",
        "prefix": "MapCircle",
        "scope": "source.qml"
    },
    {
        "body": "MapCircleObject{\n    //border.color: color\n    //border.width: int\n    //center: coordinate\n    //color: color\n    //radius: real\n}",
        "description": "MapCircleObject",
        "prefix": "MapCircleObject",
        "scope": "source.qml"
    },
    {
        "body": "MapCopyrightNotice{\n    //mapSource: Map\n    //styleSheet: string\n}",
        "description": "MapCopyrightNotice",
        "prefix": "MapCopyrightNotice",
        "scope": "source.qml"
    },
    {
        "body": "MapGestureArea{\n    //acceptedGestures: enumeration\n    //enabled: bool\n    //flickDeceleration: real\n    //maximumZoomLevelChange: real\n    //panActive: bool\n    //pinchActive: bool\n    //preventStealing: bool\n    //rotationActive: bool\n    //tiltActive: bool\n    //flickFinished()\n    //flickStarted()\n    //panFinished()\n    //panStarted()\n    //pinchFinished(PinchEventevent)\n    //pinchStarted(PinchEventevent)\n    //pinchUpdated(PinchEventevent)\n    //rotationFinished(PinchEventevent)\n    //rotationStarted(PinchEventevent)\n    //rotationUpdated(PinchEventevent)\n    //tiltFinished(PinchEventevent)\n    //tiltStarted(PinchEventevent)\n    //tiltUpdated(PinchEventevent)\n}",
        "description": "MapGestureArea",
        "prefix": "MapGestureArea",
        "scope": "source.qml"
    },
    {
        "body": "MapIconObject{\n    //content: Variant\n    //coordinate: Variant\n    //size: Variant\n}",
        "description": "MapIconObject",
        "prefix": "MapIconObject",
        "scope": "source.qml"
    },
    {
        "body": "MapItemGroup{\n    \n}",
        "description": "MapItemGroup",
        "prefix": "MapItemGroup",
        "scope": "source.qml"
    },
    {
        "body": "MapItemView{\n    //add: Transition\n    //autoFitViewport: Component\n    //delegate: Component\n    //model: model\n    //remove: Transition\n}",
        "description": "MapItemView",
        "prefix": "MapItemView",
        "scope": "source.qml"
    },
    {
        "body": "MapObjectView{\n    //delegate: Component\n    //model: Variant\n}",
        "description": "MapObjectView",
        "prefix": "MapObjectView",
        "scope": "source.qml"
    },
    {
        "body": "MapParameter{\n    \n}",
        "description": "MapParameter",
        "prefix": "MapParameter",
        "scope": "source.qml"
    },
    {
        "body": "MapPinchEvent{\n    //accepted: bool\n    //angle: real\n    //center: QPoint\n    //point1: QPoint\n    //point2: QPoint\n    //pointCount: int\n}",
        "description": "MapPinchEvent",
        "prefix": "MapPinchEvent",
        "scope": "source.qml"
    },
    {
        "body": "MapPolygon{\n    //border.color: color\n    //border.width: int\n    //color: color\n    //path: list<coordinate>\n}",
        "description": "MapPolygon",
        "prefix": "MapPolygon",
        "scope": "source.qml"
    },
    {
        "body": "MapPolygonObject{\n    //border.color: color\n    //border.width: int\n    //color: color\n    //path: VariantList\n}",
        "description": "MapPolygonObject",
        "prefix": "MapPolygonObject",
        "scope": "source.qml"
    },
    {
        "body": "MapPolyline{\n    //line.color: color\n    //line.width: int\n    //path: list<coordinate>\n}",
        "description": "MapPolyline",
        "prefix": "MapPolyline",
        "scope": "source.qml"
    },
    {
        "body": "MapPolylineObject{\n    //line.color: color\n    //line.width: int\n    //path: VariantList\n}",
        "description": "MapPolylineObject",
        "prefix": "MapPolylineObject",
        "scope": "source.qml"
    },
    {
        "body": "MapQuickItem{\n    //anchorPoint: QPointF\n    //coordinate: coordinate\n    //sourceItem: object\n    //zoomLevel: real\n}",
        "description": "MapQuickItem",
        "prefix": "MapQuickItem",
        "scope": "source.qml"
    },
    {
        "body": "MapRectangle{\n    //border.color: color\n    //border.width: int\n    //bottomRight: coordinate\n    //color: color\n    //opacity: real\n    //topLeft: coordinate\n}",
        "description": "MapRectangle",
        "prefix": "MapRectangle",
        "scope": "source.qml"
    },
    {
        "body": "MapRoute{\n    //line.color: color\n    //line.width: int\n    //route: Route\n}",
        "description": "MapRoute",
        "prefix": "MapRoute",
        "scope": "source.qml"
    },
    {
        "body": "MapRouteObject{\n    //route: Route\n}",
        "description": "MapRouteObject",
        "prefix": "MapRouteObject",
        "scope": "source.qml"
    },
    {
        "body": "MapType{\n    //cameraCapabilities: CameraCapabilities\n    //description: string\n    //metadata: VariantMap\n    //mobile: bool\n    //name: string\n    //night: bool\n    //style: enumeration\n}",
        "description": "MapType",
        "prefix": "MapType",
        "scope": "source.qml"
    },
    {
        "body": "Margins{\n    //bottom: int\n    //left: int\n    //right: int\n    //top: int\n}",
        "description": "Margins",
        "prefix": "Margins",
        "scope": "source.qml"
    },
    {
        "body": "MaskShape{\n    //source: url\n}",
        "description": "MaskShape",
        "prefix": "MaskShape",
        "scope": "source.qml"
    },
    {
        "body": "MaskedBlur{\n    //cached: alias\n    //maskSource: alias\n    //radius: alias\n    //samples: alias\n    //source: alias\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "MaskedBlur",
        "prefix": "MaskedBlur",
        "scope": "source.qml"
    },
    {
        "body": "Material{\n    //effect: Effect\n    //parameters: list<Parameter>\n}",
        "description": "Material",
        "prefix": "Material",
        "scope": "source.qml"
    },
    {
        "body": "Matrix4x4{\n    //matrix: QMatrix4x4\n}",
        "description": "Matrix4x4",
        "prefix": "Matrix4x4",
        "scope": "source.qml"
    },
    {
        "body": "MediaPlayer{\n    //audioRole: enumeration\n    //autoLoad: bool\n    //autoPlay: bool\n    //availability: enumeration\n    //bufferProgress: real\n    //customAudioRole: string\n    //duration: int\n    //error: enumeration\n    //errorString: string\n    //hasAudio: bool\n    //hasVideo: bool\n    //loops: int\n    //mediaObject: variant\n    //metaData.albumArtist: variant\n    //metaData.albumTitle: variant\n    //metaData.audioBitRate: variant\n    //metaData.audioCodec: variant\n    //metaData.author: variant\n    //metaData.averageLevel: variant\n    //metaData.category: variant\n    //metaData.channelCount: variant\n    //metaData.chapterNumber: variant\n    //metaData.comment: variant\n    //metaData.composer: variant\n    //metaData.conductor: variant\n    //metaData.contributingArtist: variant\n    //metaData.copyright: variant\n    //metaData.coverArtUrlLarge: variant\n    //metaData.coverArtUrlSmall: variant\n    //metaData.date: variant\n    //metaData.description: variant\n    //metaData.director: variant\n    //metaData.genre: variant\n    //metaData.keywords: variant\n    //metaData.language: variant\n    //metaData.leadPerformer: variant\n    //metaData.lyrics: variant\n    //metaData.mediaType: variant\n    //metaData.mood: variant\n    //metaData.parentalRating: variant\n    //metaData.peakValue: variant\n    //metaData.pixelAspectRatio: variant\n    //metaData.posterUrl: variant\n    //metaData.publisher: variant\n    //metaData.ratingOrganization: variant\n    //metaData.resolution: variant\n    //metaData.sampleRate: variant\n    //metaData.size: variant\n    //metaData.subTitle: variant\n    //metaData.title: variant\n    //metaData.trackCount: variant\n    //metaData.trackNumber: variant\n    //metaData.userRating: variant\n    //metaData.videoBitRate: variant\n    //metaData.videoCodec: variant\n    //metaData.videoFrameRate: variant\n    //metaData.writer: variant\n    //metaData.year: variant\n    //muted: bool\n    //notifyInterval: int\n    //playbackRate: real\n    //playbackState: enumeration\n    //playlist: Playlist\n    //position: int\n    //seekable: bool\n    //source: url\n    //status: enumeration\n    //volume: real\n    //error(error,errorString)\n    //pause()\n    //paused()\n    //play()\n    //playbackStateChanged()\n    //playing()\n    //seek(offset)\n    //stop()\n    //stopped()\n    //list<int>supportedAudioRoles()\n}",
        "description": "MediaPlayer",
        "prefix": "MediaPlayer",
        "scope": "source.qml"
    },
    {
        "body": "MemoryBarrier{\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "MemoryBarrier",
        "prefix": "MemoryBarrier",
        "scope": "source.qml"
    },
    {
        "body": "Menu{\n    //\n    //\n    //\n    //cascade: bool\n    //contentData: list<Object>\n    //contentModel: model\n    //count: int\n    //currentIndex: int\n    //delegate: Component\n    //overlap: real\n    //title: string\n    //activeFocus: bool\n    //anchors.centerIn: Object\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomMargin: real\n    //bottomPadding: real\n    //clip: bool\n    //closePolicy: enumeration\n    //contentChildren: list<Item>\n    //contentData: list<Object>\n    //contentHeight: real\n    //contentItem: Item\n    //contentWidth: real\n    //dim: bool\n    //enabled: bool\n    //enter: Transition\n    //exit: Transition\n    //focus: bool\n    //font: font\n    //height: real\n    //horizontalPadding: real\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //leftInset: real\n    //leftMargin: real\n    //leftPadding: real\n    //locale: Locale\n    //margins: real\n    //mirrored: bool\n    //modal: bool\n    //opacity: real\n    //opened: bool\n    //padding: real\n    //palette: palette\n    //parent: Item\n    //rightInset: real\n    //rightMargin: real\n    //rightPadding: real\n    //scale: real\n    //spacing: real\n    //topInset: real\n    //topMargin: real\n    //topPadding: real\n    //transformOrigin: enumeration\n    //verticalPadding: real\n    //visible: bool\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //forceActiveFocus(reason=Qt.OtherFocusReason)\n    //objectName: string\n}",
        "description": "Menu",
        "prefix": "Menu",
        "scope": "source.qml"
    },
    {
        "body": "MenuBar{\n    //contentHeight: real\n    //contentWidth: real\n    //delegate: Component\n    //menus: list<Menu>\n    //contentChildren: list<Item>\n    //contentData: list<Object>\n    //contentHeight: real\n    //contentModel: model\n    //contentWidth: real\n    //count: int\n    //currentIndex: int\n    //currentItem: Item\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "MenuBar",
        "prefix": "MenuBar",
        "scope": "source.qml"
    },
    {
        "body": "MenuBarItem{\n    //highlighted: bool\n    //menu: Menu\n    //menuBar: Menu\n    //action: Action\n    //autoExclusive: bool\n    //autoRepeat: bool\n    //autoRepeatDelay: int\n    //autoRepeatInterval: int\n    //checkable: bool\n    //checked: bool\n    //display: enumeration\n    //down: bool\n    //icon.color: color\n    //icon.height: int\n    //icon.name: string\n    //icon.source: url\n    //icon.width: int\n    //implicitIndicatorHeight: real\n    //implicitIndicatorWidth: real\n    //indicator: Item\n    //pressX: real\n    //pressY: real\n    //pressed: bool\n    //text: string\n    //canceled()\n    //clicked()\n    //doubleClicked()\n    //pressAndHold()\n    //pressed()\n    //released()\n    //toggled()\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "MenuBarItem",
        "prefix": "MenuBarItem",
        "scope": "source.qml"
    },
    {
        "body": "MenuBarStyle{\n    //background: Component\n    //font: font\n    //itemDelegate: Component\n    //menuStyle: Component\n}",
        "description": "MenuBarStyle",
        "prefix": "MenuBarStyle",
        "scope": "source.qml"
    },
    {
        "body": "MenuItem{\n    //arrow: Item\n    //highlighted: bool\n    //menu: Menu\n    //subMenu: Menu\n    //action: Action\n    //autoExclusive: bool\n    //autoRepeat: bool\n    //autoRepeatDelay: int\n    //autoRepeatInterval: int\n    //checkable: bool\n    //checked: bool\n    //display: enumeration\n    //down: bool\n    //icon.color: color\n    //icon.height: int\n    //icon.name: string\n    //icon.source: url\n    //icon.width: int\n    //implicitIndicatorHeight: real\n    //implicitIndicatorWidth: real\n    //indicator: Item\n    //pressX: real\n    //pressY: real\n    //pressed: bool\n    //text: string\n    //canceled()\n    //clicked()\n    //doubleClicked()\n    //pressAndHold()\n    //pressed()\n    //released()\n    //toggled()\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "MenuItem",
        "prefix": "MenuItem",
        "scope": "source.qml"
    },
    {
        "body": "MenuSeparator{\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "MenuSeparator",
        "prefix": "MenuSeparator",
        "scope": "source.qml"
    },
    {
        "body": "MenuStyle{\n    //font: font\n    //frame: Component\n    //itemDelegate: Object\n    //scrollIndicator: Component\n    //separator: Component\n    //submenuOverlap: int\n    //submenuPopupDelay: int\n}",
        "description": "MenuStyle",
        "prefix": "MenuStyle",
        "scope": "source.qml"
    },
    {
        "body": "Mesh{\n    //meshName: string\n    //source: url\n    //status: enumeration\n}",
        "description": "Mesh",
        "prefix": "Mesh",
        "scope": "source.qml"
    },
    {
        "body": "MessageDialog{\n    //clickedButton: StandardButton\n    //detailedText: string\n    //icon: QQuickStandardIcon: : Icon\n    //informativeText: string\n    //modality: Qt: : WindowModality\n    //standardButtons: StandardButtons\n    //text: string\n    //title: string\n    //visible: bool\n    //accepted()\n    //apply()\n    //discard()\n    //help()\n    //no()\n    //rejected()\n    //reset()\n    //yes()\n}",
        "description": "MessageDialog",
        "prefix": "MessageDialog",
        "scope": "source.qml"
    },
    {
        "body": "ModeKey{\n    //mode: bool\n    //active: bool\n    //alternativeKeys: var\n    //displayText: string\n    //effectiveAlternativeKeys: var\n    //effectiveAlternativeKeysHighlightIndex: int\n    //functionKey: bool\n    //highlighted: bool\n    //key: int\n    //keyPanelDelegate: alias\n    //noKeyEvent: bool\n    //noModifier: bool\n    //pressed: bool\n    //repeat: bool\n    //showPreview: bool\n    //smallText: string\n    //smallTextVisible: bool\n    //soundEffect: url\n    //text: string\n    //uppercased: bool\n    //weight: real\n    //clicked()\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "ModeKey",
        "prefix": "ModeKey",
        "scope": "source.qml"
    },
    {
        "body": "MorphTarget{\n    //attributeNames: list<string>\n    //attributes: list<Attribute>\n    //objectName: string\n}",
        "description": "MorphTarget",
        "prefix": "MorphTarget",
        "scope": "source.qml"
    },
    {
        "body": "MorphingAnimation{\n    //easing: EasingCurve\n    //interpolator: real\n    //method: enumeration\n    //morphTargets: list<MorphTarget>\n    //target: GeometryRenderer\n    //targetName: string\n    //targetPositions: list<real>\n    //animationName: string\n    //animationType: enumeration\n    //duration: real\n    //position: real\n}",
        "description": "MorphingAnimation",
        "prefix": "MorphingAnimation",
        "scope": "source.qml"
    },
    {
        "body": "MouseArea{\n    //acceptedButtons: Qt: : MouseButtons\n    //containsMouse: bool\n    //containsPress: bool\n    //cursorShape: Qt: : CursorShape\n    //drag.active: bool\n    //drag.axis: enumeration\n    //drag.filterChildren: bool\n    //drag.maximumX: real\n    //drag.maximumY: real\n    //drag.minimumX: real\n    //drag.minimumY: real\n    //drag.target: Item\n    //drag.threshold: real\n    //enabled: bool\n    //hoverEnabled: bool\n    //mouseX: real\n    //mouseY: real\n    //pressAndHoldInterval: int\n    //pressed: bool\n    //pressedButtons: MouseButtons\n    //preventStealing: bool\n    //propagateComposedEvents: bool\n    //scrollGestureEnabled: bool\n    //canceled()\n    //clicked(MouseEventmouse)\n    //doubleClicked(MouseEventmouse)\n    //entered()\n    //exited()\n    //positionChanged(MouseEventmouse)\n    //pressAndHold(MouseEventmouse)\n    //pressed(MouseEventmouse)\n    //released(MouseEventmouse)\n    //wheel(WheelEventwheel)\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "MouseArea",
        "prefix": "MouseArea",
        "scope": "source.qml"
    },
    {
        "body": "MouseDevice{\n    //sensitivity: real\n}",
        "description": "MouseDevice",
        "prefix": "MouseDevice",
        "scope": "source.qml"
    },
    {
        "body": "MouseEvent{\n    //accepted: bool\n    //button: Buttons\n    //buttons: int\n    //modifiers: Modifiers\n    //wasHeld: bool\n    //x: int\n    //y: int\n}",
        "description": "MouseEvent",
        "prefix": "MouseEvent",
        "scope": "source.qml"
    },
    {
        "body": "MouseHandler{\n    //containsMouse: bool\n    //sourceDevice: MouseDevice\n    //clicked(MouseEventmouse)\n    //doubleClicked(MouseEventmouse)\n    //entered()\n    //exited()\n    //positionChanged(MouseEventmouse)\n    //pressAndHold(MouseEventmouse)\n    //pressed(MouseEventmouse)\n    //released(MouseEventmouse)\n    //wheel(MouseEventmouse)\n}",
        "description": "MouseHandler",
        "prefix": "MouseHandler",
        "scope": "source.qml"
    },
    {
        "body": "MultiPointHandler{\n    //acceptedButtons: flags\n    //acceptedDevices: flags\n    //acceptedModifiers: flags\n    //acceptedPointerTypes: flags\n    //active: bool\n    //centroid: QtQuick: : HandlerPoint\n    //enabled: bool\n    //grabPermissions: flags\n    //margin: real\n    //maximumPointCount: int\n    //minimumPointCount: int\n    //parent: Item\n    //target: Item\n    //canceled(EventPointpoint)\n    //grabChanged(GrabTransitiontransition,EventPointpoint)\n}",
        "description": "MultiPointHandler",
        "prefix": "MultiPointHandler",
        "scope": "source.qml"
    },
    {
        "body": "MultiPointTouchArea{\n    //maximumTouchPoints: int\n    //minimumTouchPoints: int\n    //mouseEnabled: bool\n    //touchPoints: list<TouchPoint>\n    //canceled(list<TouchPoint>touchPoints)\n    //gestureStarted(GestureEventgesture)\n    //pressed(list<TouchPoint>touchPoints)\n    //released(list<TouchPoint>touchPoints)\n    //touchUpdated(list<TouchPoint>touchPoints)\n    //updated(list<TouchPoint>touchPoints)\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "MultiPointTouchArea",
        "prefix": "MultiPointTouchArea",
        "scope": "source.qml"
    },
    {
        "body": "MultiSampleAntiAliasing{\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "MultiSampleAntiAliasing",
        "prefix": "MultiSampleAntiAliasing",
        "scope": "source.qml"
    },
    {
        "body": "Navigator{\n    //active: bool\n    //currentRoute: Route\n    //currentSegment: int\n    //map: Map\n    //navigatorReady: bool\n    //plugin: Plugin\n    //positionSource: PositionSource\n    //route: Route\n    //trackPositionSource: bool\n    //destinationReached()\n    //waypointReached(Waypointwaypoint)\n}",
        "description": "Navigator",
        "prefix": "Navigator",
        "scope": "source.qml"
    },
    {
        "body": "NdefFilter{\n    //maximum: int\n    //minimum: int\n    //type: string\n    //typeNameFormat: QQmlNdefRecord: : TypeNameFormat\n}",
        "description": "NdefFilter",
        "prefix": "NdefFilter",
        "scope": "source.qml"
    },
    {
        "body": "NdefMimeRecord{\n    //uri: string\n    //record: string\n    //type: string\n    //typeNameFormat: enumeration\n}",
        "description": "NdefMimeRecord",
        "prefix": "NdefMimeRecord",
        "scope": "source.qml"
    },
    {
        "body": "NdefRecord{\n    //record: string\n    //type: string\n    //typeNameFormat: enumeration\n}",
        "description": "NdefRecord",
        "prefix": "NdefRecord",
        "scope": "source.qml"
    },
    {
        "body": "NdefTextRecord{\n    //locale: string\n    //localeMatch: enumeration\n    //text: string\n    //record: string\n    //type: string\n    //typeNameFormat: enumeration\n}",
        "description": "NdefTextRecord",
        "prefix": "NdefTextRecord",
        "scope": "source.qml"
    },
    {
        "body": "NdefUriRecord{\n    //uri: string\n    //record: string\n    //type: string\n    //typeNameFormat: enumeration\n}",
        "description": "NdefUriRecord",
        "prefix": "NdefUriRecord",
        "scope": "source.qml"
    },
    {
        "body": "NearField{\n    //filter: list<NdefFilter>\n    //messageRecords: list<NdefRecord>\n    //orderMatch: bool\n    //polling: bool\n    //tagFound()\n    //tagRemoved()\n}",
        "description": "NearField",
        "prefix": "NearField",
        "scope": "source.qml"
    },
    {
        "body": "NoDepthMask{\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "NoDepthMask",
        "prefix": "NoDepthMask",
        "scope": "source.qml"
    },
    {
        "body": "NoDraw{\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "NoDraw",
        "prefix": "NoDraw",
        "scope": "source.qml"
    },
    {
        "body": "Node{\n    //heartbeatInterval: int\n    //persistedStore: QRemoteObjectAbstractPersistedStore\n    //registryUrl: url\n}",
        "description": "Node",
        "prefix": "Node",
        "scope": "source.qml"
    },
    {
        "body": "NodeInstantiator{\n    //active: bool\n    //asynchronous: bool\n    //count: int\n    //delegate: QtQml: : Component\n    //model: variant\n    //object: QtQml: : QtObject\n    //objectAdded(intindex,QtObjectobject)\n    //QtQml: : QtObjectobjectAt(intindex)\n    //objectRemoved(intindex,QtObjectobject)\n}",
        "description": "NodeInstantiator",
        "prefix": "NodeInstantiator",
        "scope": "source.qml"
    },
    {
        "body": "NormalDiffuseMapAlphaMaterial{\n    //ambient: color\n    //diffuse: TextureImage\n    //normal: TextureImage\n    //shininess: real\n    //specular: color\n    //textureScale: real\n}",
        "description": "NormalDiffuseMapAlphaMaterial",
        "prefix": "NormalDiffuseMapAlphaMaterial",
        "scope": "source.qml"
    },
    {
        "body": "NormalDiffuseMapMaterial{\n    //ambient: color\n    //diffuse: TextureImage\n    //normal: TextureImage\n    //shininess: real\n    //specular: color\n    //textureScale: real\n}",
        "description": "NormalDiffuseMapMaterial",
        "prefix": "NormalDiffuseMapMaterial",
        "scope": "source.qml"
    },
    {
        "body": "NormalDiffuseSpecularMapMaterial{\n    //ambient: color\n    //diffuse: TextureImage\n    //normal: TextureImage\n    //shininess: real\n    //specular: TextureImage\n    //textureScale: real\n}",
        "description": "NormalDiffuseSpecularMapMaterial",
        "prefix": "NormalDiffuseSpecularMapMaterial",
        "scope": "source.qml"
    },
    {
        "body": "Number{\n    \n}",
        "description": "Number",
        "prefix": "Number",
        "scope": "source.qml"
    },
    {
        "body": "NumberAnimation{\n    //from: real\n    //to: real\n    //duration: int\n    //easing.amplitude: real\n    //easing.bezierCurve: list<real>\n    //easing.overshoot: real\n    //easing.period: real\n    //easing.type: enumeration\n    //exclude: list<Object>\n    //from: variant\n    //properties: string\n    //property: string\n    //target: Object\n    //targets: list<Object>\n    //to: variant\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "NumberAnimation",
        "prefix": "NumberAnimation",
        "scope": "source.qml"
    },
    {
        "body": "NumberKey{\n    //active: bool\n    //alternativeKeys: var\n    //displayText: string\n    //effectiveAlternativeKeys: var\n    //effectiveAlternativeKeysHighlightIndex: int\n    //functionKey: bool\n    //highlighted: bool\n    //key: int\n    //keyPanelDelegate: alias\n    //noKeyEvent: bool\n    //noModifier: bool\n    //pressed: bool\n    //repeat: bool\n    //showPreview: bool\n    //smallText: string\n    //smallTextVisible: bool\n    //soundEffect: url\n    //text: string\n    //uppercased: bool\n    //weight: real\n    //clicked()\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "NumberKey",
        "prefix": "NumberKey",
        "scope": "source.qml"
    },
    {
        "body": "Object3D{\n    //position: vector3d\n}",
        "description": "Object3D",
        "prefix": "Object3D",
        "scope": "source.qml"
    },
    {
        "body": "ObjectModel{\n    //count: int\n    //onIndex : I: { }\n    //append(objectitem)\n    //clear()\n    //insert(intindex,objectitem)\n    //move(intfrom,intto,intn=1)\n    //remove(intindex,intn=1)\n}",
        "description": "ObjectModel",
        "prefix": "ObjectModel",
        "scope": "source.qml"
    },
    {
        "body": "ObjectPicker{\n    //containsMouse: bool\n    //dragEnabled: bool\n    //hoverEnabled: bool\n    //pressed: bool\n    //clicked(PickEventpick)\n    //clicked(PickEventpick)\n    //entered()\n    //exited()\n    //moved(PickEventpick)\n    //pressed(PickEventpick)\n    //released(PickEventpick)\n}",
        "description": "ObjectPicker",
        "prefix": "ObjectPicker",
        "scope": "source.qml"
    },
    {
        "body": "OpacityAnimator{\n    //duration: int\n    //easing.amplitude: real\n    //easing.bezierCurve: list<real>\n    //easing.overshoot: real\n    //easing.period: real\n    //easing.type: enumeration\n    //from: real\n    //target: QtQuick: : Item\n    //to: real\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "OpacityAnimator",
        "prefix": "OpacityAnimator",
        "scope": "source.qml"
    },
    {
        "body": "OpacityMask{\n    //cached: bool\n    //invert: bool\n    //maskSource: variant\n    //source: variant\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "OpacityMask",
        "prefix": "OpacityMask",
        "scope": "source.qml"
    },
    {
        "body": "OpenGLInfo{\n    //majorVersion: int\n    //minorVersion: int\n    //profile: enumeration\n    //renderableType: enumeration\n}",
        "description": "OpenGLInfo",
        "prefix": "OpenGLInfo",
        "scope": "source.qml"
    },
    {
        "body": "OrbitCameraController{\n    //camera: Camera\n    //linearSpeed: real\n    //lookSpeed: real\n    //zoomLimit: real\n}",
        "description": "OrbitCameraController",
        "prefix": "OrbitCameraController",
        "scope": "source.qml"
    },
    {
        "body": "OrientationReading{\n    //orientation: Orientation\n    //timestamp: quint64\n}",
        "description": "OrientationReading",
        "prefix": "OrientationReading",
        "scope": "source.qml"
    },
    {
        "body": "OrientationSensor{\n    //active: bool\n    //alwaysOn: bool\n    //availableDataRates: list<Range>\n    //axesOrientationMode: Sensor: : AxesOrientationMode\n    //bufferSize: int\n    //busy: bool\n    //connectedToBackend: bool\n    //currentOrientation: int\n    //dataRate: int\n    //description: string\n    //efficientBufferSize: int\n    //error: int\n    //identifier: string\n    //maxBufferSize: int\n    //outputRange: int\n    //outputRanges: list<OutputRange>\n    //reading: SensorReading\n    //skipDuplicates: bool\n    //type: string\n    //userOrientation: int\n}",
        "description": "OrientationSensor",
        "prefix": "OrientationSensor",
        "scope": "source.qml"
    },
    {
        "body": "Overlay{\n    //onModal : Compone: { }\n    //onModeless : Compone: { }\n    //onOverlay : Overl: { }\n    //onPressed: { }\n    //onReleased: { }\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "Overlay",
        "prefix": "Overlay",
        "scope": "source.qml"
    },
    {
        "body": "Package{\n    //onName : Stri: { }\n}",
        "description": "Package",
        "prefix": "Package",
        "scope": "source.qml"
    },
    {
        "body": "Page{\n    //footer: Item\n    //header: Item\n    //implicitFooterHeight: real\n    //implicitFooterWidth: real\n    //implicitHeaderHeight: real\n    //implicitHeaderWidth: real\n    //title: string\n    //contentChildren: list<Item>\n    //contentData: list<Object>\n    //contentHeight: real\n    //contentWidth: real\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "Page",
        "prefix": "Page",
        "scope": "source.qml"
    },
    {
        "body": "PageIndicator{\n    //count: int\n    //currentIndex: int\n    //delegate: Component\n    //interactive: bool\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "PageIndicator",
        "prefix": "PageIndicator",
        "scope": "source.qml"
    },
    {
        "body": "Pane{\n    //contentChildren: list<Item>\n    //contentData: list<Object>\n    //contentHeight: real\n    //contentWidth: real\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "Pane",
        "prefix": "Pane",
        "scope": "source.qml"
    },
    {
        "body": "ParallelAnimation{\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "ParallelAnimation",
        "prefix": "ParallelAnimation",
        "scope": "source.qml"
    },
    {
        "body": "Parameter{\n    //name: QString\n    //value: QVariant\n}",
        "description": "Parameter",
        "prefix": "Parameter",
        "scope": "source.qml"
    },
    {
        "body": "ParentAnimation{\n    //newParent: Item\n    //target: Item\n    //via: Item\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "ParentAnimation",
        "prefix": "ParentAnimation",
        "scope": "source.qml"
    },
    {
        "body": "ParentChange{\n    //height: real\n    //parent: Item\n    //rotation: real\n    //scale: real\n    //target: Item\n    //width: real\n    //x: real\n    //y: real\n}",
        "description": "ParentChange",
        "prefix": "ParentChange",
        "scope": "source.qml"
    },
    {
        "body": "Particle{\n    //alpha: real\n    //autoRotate: bool\n    //ax: real\n    //ay: real\n    //blue: real\n    //currentSize: real\n    //endSize: real\n    //green: real\n    //initialAX: real\n    //initialAY: real\n    //initialVX: real\n    //initialVY: real\n    //initialX: real\n    //initialY: real\n    //lifeLeft: real\n    //lifeSpan: real\n    //red: real\n    //rotation: real\n    //rotationVelocity: real\n    //startSize: real\n    //t: real\n    //update: bool\n    //vx: real\n    //vy: real\n    //x: real\n    //xDeformationVectorX: real\n    //xDeformationVectorY: real\n    //y: real\n    //yDeformationVectorX: real\n    //yDeformationVectorY: real\n}",
        "description": "Particle",
        "prefix": "Particle",
        "scope": "source.qml"
    },
    {
        "body": "ParticleGroup{\n    //duration: int\n    //durationVariation: ParticleSystem\n    //name: string\n    //system: ParticleSystem\n    //to: ParticleSystem\n}",
        "description": "ParticleGroup",
        "prefix": "ParticleGroup",
        "scope": "source.qml"
    },
    {
        "body": "ParticlePainter{\n    //groups: list<string>\n    //system: ParticleSystem\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "ParticlePainter",
        "prefix": "ParticlePainter",
        "scope": "source.qml"
    },
    {
        "body": "ParticleSystem{\n    //empty: bool\n    //particleStates: list<Sprite>\n    //paused: bool\n    //running: bool\n    //pause()\n    //reset()\n    //restart()\n    //resume()\n    //start()\n    //stop()\n}",
        "description": "ParticleSystem",
        "prefix": "ParticleSystem",
        "scope": "source.qml"
    },
    {
        "body": "Path{\n    //closed: bool\n    //pathElements: list<PathElement>\n    //startX: real\n    //startY: real\n}",
        "description": "Path",
        "prefix": "Path",
        "scope": "source.qml"
    },
    {
        "body": "PathAngleArc{\n    //centerX: real\n    //centerY: real\n    //moveToStart: bool\n    //radiusX: real\n    //radiusY: real\n    //startAngle: real\n    //sweepAngle: real\n}",
        "description": "PathAngleArc",
        "prefix": "PathAngleArc",
        "scope": "source.qml"
    },
    {
        "body": "PathAnimation{\n    //anchorPoint: point\n    //duration: int\n    //easing.amplitude: real\n    //easing.bezierCurve: list<real>\n    //easing.overshoot: real\n    //easing.period: real\n    //easing.type: enumeration\n    //endRotation: real\n    //orientation: enumeration\n    //orientationEntryDuration: real\n    //orientationExitDuration: real\n    //path: Path\n    //target: Item\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "PathAnimation",
        "prefix": "PathAnimation",
        "scope": "source.qml"
    },
    {
        "body": "PathArc{\n    //direction: enumeration\n    //radiusX: real\n    //radiusY: real\n    //relativeX: real\n    //relativeY: real\n    //useLargeArc: bool\n    //x: real\n    //xAxisRotation: real\n    //y: real\n}",
        "description": "PathArc",
        "prefix": "PathArc",
        "scope": "source.qml"
    },
    {
        "body": "PathAttribute{\n    //name: string\n    //value: real\n}",
        "description": "PathAttribute",
        "prefix": "PathAttribute",
        "scope": "source.qml"
    },
    {
        "body": "PathCubic{\n    //control1X: real\n    //control1Y: real\n    //control2X: real\n    //control2Y: real\n    //relativeControl1X: real\n    //relativeControl1Y: real\n    //relativeControl2X: real\n    //relativeControl2Y: real\n    //relativeX: real\n    //relativeY: real\n    //x: real\n    //y: real\n}",
        "description": "PathCubic",
        "prefix": "PathCubic",
        "scope": "source.qml"
    },
    {
        "body": "PathCurve{\n    //relativeX: real\n    //relativeY: real\n    //x: real\n    //y: real\n}",
        "description": "PathCurve",
        "prefix": "PathCurve",
        "scope": "source.qml"
    },
    {
        "body": "PathElement{\n    \n}",
        "description": "PathElement",
        "prefix": "PathElement",
        "scope": "source.qml"
    },
    {
        "body": "PathInterpolator{\n    //angle: real\n    //path: Path\n    //progress: real\n    //x: real\n    //y: real\n}",
        "description": "PathInterpolator",
        "prefix": "PathInterpolator",
        "scope": "source.qml"
    },
    {
        "body": "PathLine{\n    //relativeX: real\n    //relativeY: real\n    //x: real\n    //y: real\n}",
        "description": "PathLine",
        "prefix": "PathLine",
        "scope": "source.qml"
    },
    {
        "body": "PathMove{\n    //relativeX: real\n    //relativeY: real\n    //x: real\n    //y: real\n}",
        "description": "PathMove",
        "prefix": "PathMove",
        "scope": "source.qml"
    },
    {
        "body": "PathPercent{\n    //value: real\n}",
        "description": "PathPercent",
        "prefix": "PathPercent",
        "scope": "source.qml"
    },
    {
        "body": "PathQuad{\n    //controlX: real\n    //controlY: real\n    //relativeControlX: real\n    //relativeControlY: real\n    //relativeX: real\n    //relativeY: real\n    //x: real\n    //y: real\n}",
        "description": "PathQuad",
        "prefix": "PathQuad",
        "scope": "source.qml"
    },
    {
        "body": "PathSvg{\n    //path: string\n}",
        "description": "PathSvg",
        "prefix": "PathSvg",
        "scope": "source.qml"
    },
    {
        "body": "PathView{\n    //cacheItemCount: int\n    //count: int\n    //currentIndex: int\n    //currentItem: Item\n    //delegate: Component\n    //dragMargin: real\n    //dragging: bool\n    //flickDeceleration: real\n    //flicking: bool\n    //highlight: Component\n    //highlightItem: Item\n    //highlightMoveDuration: int\n    //highlightRangeMode: enumeration\n    //interactive: bool\n    //onIscurrentitem : Bo: { }\n    //maximumFlickVelocity: real\n    //model: model\n    //movementDirection: enumeration\n    //moving: bool\n    //offset: real\n    //onOnpath : Bo: { }\n    //path: Path\n    //pathItemCount: int\n    //preferredHighlightBegin: real\n    //preferredHighlightEnd: real\n    //snapMode: enumeration\n    //onView : Pathvi: { }\n    //decrementCurrentIndex()\n    //dragEnded()\n    //dragStarted()\n    //flickEnded()\n    //flickStarted()\n    //incrementCurrentIndex()\n    //movementEnded()\n    //movementStarted()\n    //positionViewAtIndex(intindex,PositionModemode)\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "PathView",
        "prefix": "PathView",
        "scope": "source.qml"
    },
    {
        "body": "PauseAnimation{\n    //duration: int\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "PauseAnimation",
        "prefix": "PauseAnimation",
        "scope": "source.qml"
    },
    {
        "body": "PerVertexColorMaterial{\n    \n}",
        "description": "PerVertexColorMaterial",
        "prefix": "PerVertexColorMaterial",
        "scope": "source.qml"
    },
    {
        "body": "PercentBarSeries{\n    //axisX: AbstractAxis\n    //axisXTop: AbstractAxis\n    //axisY: AbstractAxis\n    //axisYRight: AbstractAxis\n    //barWidth: real\n    //count: int\n    //labelsAngle: real\n    //labelsFormat: string\n    //labelsPosition: enumeration\n    //labelsPrecision: real\n    //labelsVisible: bool\n    //barsetsAdded()\n    //barsetsRemoved()\n    //clear()\n    //clicked(intindex,BarSetbarset)\n    //doubleClicked(intindex,BarSetbarset)\n    //hovered(boolstatus,intindex,BarSetbarset)\n    //pressed(intindex,BarSetbarset)\n    //released(intindex,BarSetbarset)\n    //name: string\n    //opacity: real\n    //type: enumeration\n    //useOpenGL: bool\n    //visible: bool\n}",
        "description": "PercentBarSeries",
        "prefix": "PercentBarSeries",
        "scope": "source.qml"
    },
    {
        "body": "PhongAlphaMaterial{\n    //alpha: real\n    //ambient: color\n    //diffuse: color\n    //shininess: real\n    //specular: color\n}",
        "description": "PhongAlphaMaterial",
        "prefix": "PhongAlphaMaterial",
        "scope": "source.qml"
    },
    {
        "body": "PhongMaterial{\n    //ambient: color\n    //diffuse: color\n    //shininess: real\n    //specular: color\n}",
        "description": "PhongMaterial",
        "prefix": "PhongMaterial",
        "scope": "source.qml"
    },
    {
        "body": "PickEvent{\n    //accepted: bool\n    //button: int\n    //buttons: int\n    //distance: real\n    //localIntersection: Vector3D\n    //modifiers: int\n    //position: Point2D\n    //worldIntersection: Vector3D\n}",
        "description": "PickEvent",
        "prefix": "PickEvent",
        "scope": "source.qml"
    },
    {
        "body": "PickLineEvent{\n    //triangleIndex: uint\n    //vertex1Index: uint\n    //vertex2Index: uint\n}",
        "description": "PickLineEvent",
        "prefix": "PickLineEvent",
        "scope": "source.qml"
    },
    {
        "body": "PickPointEvent{\n    //pointIndex: uint\n}",
        "description": "PickPointEvent",
        "prefix": "PickPointEvent",
        "scope": "source.qml"
    },
    {
        "body": "PickTriangleEvent{\n    //triangleIndex: uint\n    //vertex1Index: uint\n    //vertex2Index: uint\n    //vertex3Index: uint\n}",
        "description": "PickTriangleEvent",
        "prefix": "PickTriangleEvent",
        "scope": "source.qml"
    },
    {
        "body": "PickingSettings{\n    //faceOrientationPickingMode: enumeration\n    //pickMethod: enumeration\n    //pickResultMode: enumeration\n    //worldSpaceTolerance: qreal\n}",
        "description": "PickingSettings",
        "prefix": "PickingSettings",
        "scope": "source.qml"
    },
    {
        "body": "Picture{\n    //color: color\n    //source: url\n}",
        "description": "Picture",
        "prefix": "Picture",
        "scope": "source.qml"
    },
    {
        "body": "PieMenu{\n    //activationMode: enumeration(obsolete)\n    //boundingItem: Item\n    //currentIndex: int\n    //currentItem: int\n    //menuItems: list<MenuItem>\n    //selectionAngle: real\n    //title: string\n    //triggerMode: int\n}",
        "description": "PieMenu",
        "prefix": "PieMenu",
        "scope": "source.qml"
    },
    {
        "body": "PieMenuStyle{\n    //background: Component\n    //backgroundColor: color\n    //cancel: Component\n    //cancelRadius: real\n    //control: PieMenu\n    //endAngle: real\n    //menuItem: Component\n    //radius: real\n    //selectionColor: color\n    //shadowColor: color\n    //shadowRadius: real\n    //shadowSpread: real\n    //startAngle: real\n    //title: Component\n}",
        "description": "PieMenuStyle",
        "prefix": "PieMenuStyle",
        "scope": "source.qml"
    },
    {
        "body": "PieSeries{\n    //count: int\n    //endAngle: real\n    //holeSize: real\n    //horizontalPosition: real\n    //size: real\n    //startAngle: real\n    //sum: real\n    //verticalPosition: real\n    //added(list<PieSlice>slices)\n    //clear()\n    //clicked(PieSliceslice)\n    //doubleClicked(PieSliceslice)\n    //hovered(PieSliceslice,boolstate)\n    //pressed(PieSliceslice)\n    //released(PieSliceslice)\n    //removed(list<PieSlice>slices)\n    //sliceAdded(PieSliceslice)\n    //sliceRemoved(PieSliceslice)\n    //name: string\n    //opacity: real\n    //type: enumeration\n    //useOpenGL: bool\n    //visible: bool\n}",
        "description": "PieSeries",
        "prefix": "PieSeries",
        "scope": "source.qml"
    },
    {
        "body": "PieSlice{\n    //angleSpan: real\n    //borderColor: color\n    //borderWidth: int\n    //brushFilename: string\n    //color: color\n    //explodeDistanceFactor: real\n    //exploded: bool\n    //label: string\n    //labelArmLengthFactor: real\n    //labelColor: color\n    //labelFont: font\n    //labelPosition: enumeration\n    //labelVisible: bool\n    //percentage: real\n    //startAngle: real\n    //value: real\n    //clicked()\n    //doubleClicked()\n    //hovered(boolstate)\n    //pressed()\n    //released()\n}",
        "description": "PieSlice",
        "prefix": "PieSlice",
        "scope": "source.qml"
    },
    {
        "body": "PinchArea{\n    //enabled: bool\n    //pinch.active: bool\n    //pinch.dragAxis: enumeration\n    //pinch.maximumRotation: real\n    //pinch.maximumScale: real\n    //pinch.maximumX: real\n    //pinch.maximumY: real\n    //pinch.minimumRotation: real\n    //pinch.minimumScale: real\n    //pinch.minimumX: real\n    //pinch.minimumY: real\n    //pinch.target: Item\n    //pinchFinished()\n    //pinchStarted()\n    //pinchUpdated()\n    //smartZoom()\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "PinchArea",
        "prefix": "PinchArea",
        "scope": "source.qml"
    },
    {
        "body": "PinchEvent{\n    //accepted: bool\n    //angle: real\n    //center: QPointF\n    //point1: QPointF\n    //point2: QPointF\n    //pointCount: int\n    //previousAngle: real\n    //previousCenter: QPointF\n    //previousScale: real\n    //rotation: real\n    //scale: real\n    //startCenter: QPointF\n    //startPoint1: QPointF\n    //startPoint2: QPointF\n}",
        "description": "PinchEvent",
        "prefix": "PinchEvent",
        "scope": "source.qml"
    },
    {
        "body": "PinchHandler{\n    //active: bool\n    //activeScale: real\n    //centroid: QtQuick: : HandlerPoint\n    //maximumRotation: real\n    //maximumScale: real\n    //maximumX: real\n    //maximumY: real\n    //minimumRotation: real\n    //minimumScale: real\n    //minimumTouchPoints: int\n    //minimumX: real\n    //minimumY: real\n    //rotation: real\n    //scale: real\n    //translation: QVector2D\n    //acceptedButtons: flags\n    //acceptedDevices: flags\n    //acceptedModifiers: flags\n    //acceptedPointerTypes: flags\n    //active: bool\n    //centroid: QtQuick: : HandlerPoint\n    //enabled: bool\n    //grabPermissions: flags\n    //margin: real\n    //maximumPointCount: int\n    //minimumPointCount: int\n    //parent: Item\n    //target: Item\n    //canceled(EventPointpoint)\n    //grabChanged(GrabTransitiontransition,EventPointpoint)\n}",
        "description": "PinchHandler",
        "prefix": "PinchHandler",
        "scope": "source.qml"
    },
    {
        "body": "Place{\n    //attribution: string\n    //categories: list<Category>\n    //contactDetails: ContactDetails\n    //detailsFetched: bool\n    //editorialModel: EditorialModel\n    //extendedAttributes: ExtendedAttributes\n    //favorite: Place\n    //icon: Icon\n    //imageModel: ImageModel\n    //location: QtPositioning: : Location\n    //name: string\n    //place: QPlace\n    //placeId: string\n    //plugin: Plugin\n    //primaryEmail: string\n    //primaryFax: string\n    //primaryPhone: string\n    //primaryWebsite: string\n    //ratings: Ratings\n    //reviewModel: ReviewModel\n    //status: enumeration\n    //supplier: Supplier\n    //visibility: enumeration\n}",
        "description": "Place",
        "prefix": "Place",
        "scope": "source.qml"
    },
    {
        "body": "PlaceAttribute{\n    //attribute: QPlaceAttribute\n    //label: string\n    //text: string\n}",
        "description": "PlaceAttribute",
        "prefix": "PlaceAttribute",
        "scope": "source.qml"
    },
    {
        "body": "PlaceSearchModel{\n    //categories: list<Category>\n    //count: int\n    //favoritesMatchParameters: VariantMap\n    //favoritesPlugin: Plugin\n    //incremental: bool\n    //limit: int\n    //nextPagesAvailable: bool\n    //plugin: Plugin\n    //previousPagesAvailable: bool\n    //recommendationId: string\n    //relevanceHint: enumeration\n    //searchArea: variant\n    //searchTerm: string\n    //status: enum\n    //visibilityScope: enum\n}",
        "description": "PlaceSearchModel",
        "prefix": "PlaceSearchModel",
        "scope": "source.qml"
    },
    {
        "body": "PlaceSearchSuggestionModel{\n    //limit: int\n    //offset: int\n    //plugin: Plugin\n    //searchArea: geoshape\n    //searchTerm: string\n    //status: enum\n    //suggestions: stringlist\n}",
        "description": "PlaceSearchSuggestionModel",
        "prefix": "PlaceSearchSuggestionModel",
        "scope": "source.qml"
    },
    {
        "body": "PlaneGeometry{\n    //height: real\n    //indexAttribute: Attribute\n    //mirrored: bool\n    //normalAttribute: Attribute\n    //positionAttribute: Attribute\n    //resolution: size\n    //tangentAttribute: Attribute\n    //texCoordAttribute: Attribute\n    //width: real\n}",
        "description": "PlaneGeometry",
        "prefix": "PlaneGeometry",
        "scope": "source.qml"
    },
    {
        "body": "PlaneMesh{\n    //height: real\n    //meshResolution: size\n    //mirrored: bool\n    //width: real\n}",
        "description": "PlaneMesh",
        "prefix": "PlaneMesh",
        "scope": "source.qml"
    },
    {
        "body": "PlayVariation{\n    //looping: bool\n    //maxGain: real\n    //maxPitch: real\n    //minGain: real\n    //minPitch: real\n    //sample: string\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "PlayVariation",
        "prefix": "PlayVariation",
        "scope": "source.qml"
    },
    {
        "body": "Playlist{\n    //currentIndex: int\n    //currentItemsource: url\n    //error: enumeration\n    //errorString: string\n    //itemCount: int\n    //playbackMode: enumeration\n    //readOnly: bool\n    //itemAboutToBeInserted(start,end)\n    //itemAboutToBeRemoved(start,end)\n    //itemChanged(start,end)\n    //itemInserted(start,end)\n    //itemRemoved(start,end)\n    //load(location,format)\n    //loadFailed()\n    //loaded()\n    //next()\n    //previous()\n    //shuffle()\n}",
        "description": "Playlist",
        "prefix": "Playlist",
        "scope": "source.qml"
    },
    {
        "body": "PlaylistItem{\n    //source: url\n}",
        "description": "PlaylistItem",
        "prefix": "PlaylistItem",
        "scope": "source.qml"
    },
    {
        "body": "Plugin{\n    //allowExperimental: bool\n    //availableServiceProviders: stringlist\n    //isAttached: bool\n    //locales: stringlist\n    //name: string\n    //parameters: list<PluginParameter>\n    //preferred: stringlist\n    //required: enumeration\n}",
        "description": "Plugin",
        "prefix": "Plugin",
        "scope": "source.qml"
    },
    {
        "body": "PluginParameter{\n    //name: string\n    //value: QVariant\n}",
        "description": "PluginParameter",
        "prefix": "PluginParameter",
        "scope": "source.qml"
    },
    {
        "body": "PointDirection{\n    //x: real\n    //xVariation: real\n    //y: real\n    //yVariation: real\n}",
        "description": "PointDirection",
        "prefix": "PointDirection",
        "scope": "source.qml"
    },
    {
        "body": "PointHandler{\n    //acceptedButtons: flags\n    //acceptedDevices: flags\n    //acceptedModifiers: flags\n    //acceptedPointerTypes: flags\n    //active: bool\n    //enabled: bool\n    //grabPermissions: flags\n    //margin: real\n    //parent: Item\n    //point: HandlerPoint\n    //target: Item\n    //canceled(EventPointpoint)\n    //grabChanged(GrabTransitiontransition,EventPointpoint)\n}",
        "description": "PointHandler",
        "prefix": "PointHandler",
        "scope": "source.qml"
    },
    {
        "body": "PointLight{\n    //constantAttenuation: float\n    //linearAttenuation: float\n    //quadraticAttenuation: float\n}",
        "description": "PointLight",
        "prefix": "PointLight",
        "scope": "source.qml"
    },
    {
        "body": "PointSize{\n    //sizeMode: enumeration\n    //value: real\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "PointSize",
        "prefix": "PointSize",
        "scope": "source.qml"
    },
    {
        "body": "PointerDevice{\n    //capabilities: enumeration\n    //pointerType: enumeration\n    //type: enumeration\n}",
        "description": "PointerDevice",
        "prefix": "PointerDevice",
        "scope": "source.qml"
    },
    {
        "body": "PointerDeviceHandler{\n    //acceptedButtons: flags\n    //acceptedDevices: flags\n    //acceptedModifiers: flags\n    //acceptedPointerTypes: flags\n    //active: bool\n    //enabled: bool\n    //grabPermissions: flags\n    //margin: real\n    //parent: Item\n    //target: Item\n    //canceled(EventPointpoint)\n    //grabChanged(GrabTransitiontransition,EventPointpoint)\n}",
        "description": "PointerDeviceHandler",
        "prefix": "PointerDeviceHandler",
        "scope": "source.qml"
    },
    {
        "body": "PointerEvent{\n    //button: enumeration\n    //buttons: int\n    //device: PointerDevice\n    //modifiers: int\n}",
        "description": "PointerEvent",
        "prefix": "PointerEvent",
        "scope": "source.qml"
    },
    {
        "body": "PointerHandler{\n    //active: bool\n    //enabled: bool\n    //grabPermissions: flags\n    //margin: real\n    //parent: Item\n    //target: Item\n    //canceled(EventPointpoint)\n    //grabChanged(GrabTransitiontransition,EventPointpoint)\n}",
        "description": "PointerHandler",
        "prefix": "PointerHandler",
        "scope": "source.qml"
    },
    {
        "body": "PolarChartView{\n    \n}",
        "description": "PolarChartView",
        "prefix": "PolarChartView",
        "scope": "source.qml"
    },
    {
        "body": "PolygonOffset{\n    //depthSteps: real\n    //scaleFactor: real\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "PolygonOffset",
        "prefix": "PolygonOffset",
        "scope": "source.qml"
    },
    {
        "body": "Popup{\n    //activeFocus: bool\n    //anchors.centerIn: Object\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomMargin: real\n    //bottomPadding: real\n    //clip: bool\n    //closePolicy: enumeration\n    //contentChildren: list<Item>\n    //contentData: list<Object>\n    //contentHeight: real\n    //contentItem: Item\n    //contentWidth: real\n    //dim: bool\n    //enabled: bool\n    //enter: Transition\n    //exit: Transition\n    //focus: bool\n    //font: font\n    //height: real\n    //horizontalPadding: real\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //leftInset: real\n    //leftMargin: real\n    //leftPadding: real\n    //locale: Locale\n    //margins: real\n    //mirrored: bool\n    //modal: bool\n    //opacity: real\n    //opened: bool\n    //padding: real\n    //palette: palette\n    //parent: Item\n    //rightInset: real\n    //rightMargin: real\n    //rightPadding: real\n    //scale: real\n    //spacing: real\n    //topInset: real\n    //topMargin: real\n    //topPadding: real\n    //transformOrigin: enumeration\n    //verticalPadding: real\n    //visible: bool\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //forceActiveFocus(reason=Qt.OtherFocusReason)\n    //objectName: string\n}",
        "description": "Popup",
        "prefix": "Popup",
        "scope": "source.qml"
    },
    {
        "body": "Position{\n    //altitudeValid: bool\n    //coordinate: coordinate\n    //direction: double\n    //directionValid: bool\n    //horizontalAccuracy: real\n    //horizontalAccuracyValid: bool\n    //latitudeValid: bool\n    //longitudeValid: bool\n    //magneticVariation: double\n    //magneticVariationValid: bool\n    //speed: double\n    //speedValid: bool\n    //timestamp: date\n    //verticalAccuracy: real\n    //verticalAccuracyValid: bool\n    //verticalSpeed: double\n    //verticalSpeedValid: bool\n}",
        "description": "Position",
        "prefix": "Position",
        "scope": "source.qml"
    },
    {
        "body": "PositionSource{\n    //active: bool\n    //name: string\n    //nmeaSource: url\n    //position: Position\n    //preferredPositioningMethods: enumeration\n    //sourceError: enumeration\n    //supportedPositioningMethods: enumeration\n    //updateInterval: int\n    //valid: bool\n    //start()\n    //stop()\n    //update()\n    //updateTimeout()\n}",
        "description": "PositionSource",
        "prefix": "PositionSource",
        "scope": "source.qml"
    },
    {
        "body": "Positioner{\n    //onIndex : I: { }\n    //onIsfirstitem : Bo: { }\n    //onIslastitem : Bo: { }\n}",
        "description": "Positioner",
        "prefix": "Positioner",
        "scope": "source.qml"
    },
    {
        "body": "PressureReading{\n    //pressure: qreal\n    //temperature: qreal\n    //timestamp: quint64\n}",
        "description": "PressureReading",
        "prefix": "PressureReading",
        "scope": "source.qml"
    },
    {
        "body": "PressureSensor{\n    //active: bool\n    //alwaysOn: bool\n    //availableDataRates: list<Range>\n    //axesOrientationMode: Sensor: : AxesOrientationMode\n    //bufferSize: int\n    //busy: bool\n    //connectedToBackend: bool\n    //currentOrientation: int\n    //dataRate: int\n    //description: string\n    //efficientBufferSize: int\n    //error: int\n    //identifier: string\n    //maxBufferSize: int\n    //outputRange: int\n    //outputRanges: list<OutputRange>\n    //reading: SensorReading\n    //skipDuplicates: bool\n    //type: string\n    //userOrientation: int\n}",
        "description": "PressureSensor",
        "prefix": "PressureSensor",
        "scope": "source.qml"
    },
    {
        "body": "Product{\n    //description: string\n    //identifier: string\n    //price: string\n    //status: enumeration\n    //store: object\n    //title: string\n    //type: string\n    //onPurchaseFailed(objecttransaction)\n    //onPurchaseRestored(objecttransaction)\n    //onPurchaseSucceeded(objecttransaction)\n    //purchase()\n    //resetStatus()\n}",
        "description": "Product",
        "prefix": "Product",
        "scope": "source.qml"
    },
    {
        "body": "ProgressBar{\n    //from: real\n    //indeterminate: bool\n    //position: real\n    //to: real\n    //value: real\n    //visualPosition: real\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "ProgressBar",
        "prefix": "ProgressBar",
        "scope": "source.qml"
    },
    {
        "body": "ProgressBarStyle{\n    //background: Component\n    //control: ProgressBar\n    //currentProgress: real\n    //panel: Component\n    //progress: Component\n}",
        "description": "ProgressBarStyle",
        "prefix": "ProgressBarStyle",
        "scope": "source.qml"
    },
    {
        "body": "PropertyAction{\n    //exclude: list<Object>\n    //properties: string\n    //property: string\n    //target: Object\n    //targets: list<Object>\n    //value: any\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "PropertyAction",
        "prefix": "PropertyAction",
        "scope": "source.qml"
    },
    {
        "body": "PropertyAnimation{\n    //duration: int\n    //easing.amplitude: real\n    //easing.bezierCurve: list<real>\n    //easing.overshoot: real\n    //easing.period: real\n    //easing.type: enumeration\n    //exclude: list<Object>\n    //from: variant\n    //properties: string\n    //property: string\n    //target: Object\n    //targets: list<Object>\n    //to: variant\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "PropertyAnimation",
        "prefix": "PropertyAnimation",
        "scope": "source.qml"
    },
    {
        "body": "PropertyChanges{\n    //explicit: bool\n    //restoreEntryValues: bool\n    //target: Object\n}",
        "description": "PropertyChanges",
        "prefix": "PropertyChanges",
        "scope": "source.qml"
    },
    {
        "body": "ProximityFilter{\n    //distanceThreshold: real\n    //entity: Entity\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "ProximityFilter",
        "prefix": "ProximityFilter",
        "scope": "source.qml"
    },
    {
        "body": "ProximityReading{\n    //near: bool\n    //timestamp: quint64\n}",
        "description": "ProximityReading",
        "prefix": "ProximityReading",
        "scope": "source.qml"
    },
    {
        "body": "ProximitySensor{\n    //active: bool\n    //alwaysOn: bool\n    //availableDataRates: list<Range>\n    //axesOrientationMode: Sensor: : AxesOrientationMode\n    //bufferSize: int\n    //busy: bool\n    //connectedToBackend: bool\n    //currentOrientation: int\n    //dataRate: int\n    //description: string\n    //efficientBufferSize: int\n    //error: int\n    //identifier: string\n    //maxBufferSize: int\n    //outputRange: int\n    //outputRanges: list<OutputRange>\n    //reading: SensorReading\n    //skipDuplicates: bool\n    //type: string\n    //userOrientation: int\n}",
        "description": "ProximitySensor",
        "prefix": "ProximitySensor",
        "scope": "source.qml"
    },
    {
        "body": "QAbstractState{\n    //active: bool\n    //entered()\n    //exited()\n}",
        "description": "QAbstractState",
        "prefix": "QAbstractState",
        "scope": "source.qml"
    },
    {
        "body": "QAbstractTransition{\n    //sourceState: bool\n    //targetState: QAbstractState\n    //targetStates: list<QAbstractState>\n    //triggered()\n}",
        "description": "QAbstractTransition",
        "prefix": "QAbstractTransition",
        "scope": "source.qml"
    },
    {
        "body": "QSignalTransition{\n    //senderObject: QObject\n    //signal: string\n    //sourceState: bool\n    //targetState: QAbstractState\n    //targetStates: list<QAbstractState>\n    //triggered()\n}",
        "description": "QSignalTransition",
        "prefix": "QSignalTransition",
        "scope": "source.qml"
    },
    {
        "body": "QVirtualKeyboardSelectionListModel{\n    \n}",
        "description": "QVirtualKeyboardSelectionListModel",
        "prefix": "QVirtualKeyboardSelectionListModel",
        "scope": "source.qml"
    },
    {
        "body": "Qt{\n    //\n    //application: object\n    //inputMethod: object\n    //platform: object\n    //styleHints: object\n    //binding(function)\n    //callLater(function)\n    //callLater(function,argument1,argument2,...)\n    //exit(intretCode)\n    //font(objectfontSpecifier)\n    //list<string>fontFamilies()\n    //locale(name)\n    //matrix4x4(realm11,realm12,realm13,realm14,realm21,realm22,realm23,realm24,realm31,realm32,realm33,realm34,realm41,realm42,realm43,realm44)\n    //quaternion(realscalar,realx,realy,realz)\n    //quit()\n    //size(intwidth,intheight)\n    //vector2d(realx,realy)\n    //vector3d(realx,realy,realz)\n    //vector4d(realx,realy,realz,realw)\n}",
        "description": "Qt",
        "prefix": "Qt",
        "scope": "source.qml"
    },
    {
        "body": "QtMultimedia{\n    //availableCameras: list<object>\n    //defaultCamera: object\n}",
        "description": "QtMultimedia",
        "prefix": "QtMultimedia",
        "scope": "source.qml"
    },
    {
        "body": "QtObject{\n    //objectName: string\n}",
        "description": "QtObject",
        "prefix": "QtObject",
        "scope": "source.qml"
    },
    {
        "body": "QtPositioning{\n    \n}",
        "description": "QtPositioning",
        "prefix": "QtPositioning",
        "scope": "source.qml"
    },
    {
        "body": "QuaternionAnimation{\n    //duration: int\n    //easing.amplitude: real\n    //easing.bezierCurve: list<real>\n    //easing.overshoot: real\n    //easing.period: real\n    //easing.type: enumeration\n    //exclude: list<Object>\n    //from: variant\n    //properties: string\n    //property: string\n    //target: Object\n    //targets: list<Object>\n    //to: variant\n}",
        "description": "QuaternionAnimation",
        "prefix": "QuaternionAnimation",
        "scope": "source.qml"
    },
    {
        "body": "QuotaRequest{\n    //origin: url\n    //requestedSize: qint64\n}",
        "description": "QuotaRequest",
        "prefix": "QuotaRequest",
        "scope": "source.qml"
    },
    {
        "body": "RadialBlur{\n    //angle: real\n    //cached: bool\n    //horizontalOffset: real\n    //samples: int\n    //source: variant\n    //transparentBorder: bool\n    //verticalOffset: real\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "RadialBlur",
        "prefix": "RadialBlur",
        "scope": "source.qml"
    },
    {
        "body": "RadialGradient{\n    //angle: real\n    //cached: bool\n    //gradient: Gradient\n    //horizontalOffset: real\n    //horizontalRadius: real\n    //source: variant\n    //verticalOffset: real\n    //verticalRadius: real\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "RadialGradient",
        "prefix": "RadialGradient",
        "scope": "source.qml"
    },
    {
        "body": "Radio{\n    //antennaConnected: int\n    //availability: enumeration\n    //band: enumeration\n    //frequency: int\n    //frequencyStep: int\n    //maximumFrequency: int\n    //minimumFrequency: int\n    //muted: bool\n    //searching: bool\n    //signalStrength: int\n    //state: enumeration\n    //stereo: bool\n    //stereoMode: enumeration\n    //volume: int\n    //cancelScan()\n    //scanDown()\n    //scanUp()\n    //searchAllStations(enumerationsearchMode)\n    //start()\n    //stationFound(intfrequency,stringstationId)\n    //stop()\n    //tuneDown()\n    //tuneUp()\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "Radio",
        "prefix": "Radio",
        "scope": "source.qml"
    },
    {
        "body": "RadioButton{\n    //action: Action\n    //autoExclusive: bool\n    //autoRepeat: bool\n    //autoRepeatDelay: int\n    //autoRepeatInterval: int\n    //checkable: bool\n    //checked: bool\n    //display: enumeration\n    //down: bool\n    //icon.color: color\n    //icon.height: int\n    //icon.name: string\n    //icon.source: url\n    //icon.width: int\n    //implicitIndicatorHeight: real\n    //implicitIndicatorWidth: real\n    //indicator: Item\n    //pressX: real\n    //pressY: real\n    //pressed: bool\n    //text: string\n    //canceled()\n    //clicked()\n    //doubleClicked()\n    //pressAndHold()\n    //pressed()\n    //released()\n    //toggled()\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "RadioButton",
        "prefix": "RadioButton",
        "scope": "source.qml"
    },
    {
        "body": "RadioButtonStyle{\n    //background: Component\n    //control: RadioButton\n    //indicator: Component\n    //label: Component\n    //spacing: int\n}",
        "description": "RadioButtonStyle",
        "prefix": "RadioButtonStyle",
        "scope": "source.qml"
    },
    {
        "body": "RadioData{\n    //alternativeFrequenciesEnabled: bool\n    //availability: enumeration\n    //programType: enumeration\n    //programTypeName: string\n    //radioText: string\n    //stationId: string\n    //stationName: string\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "RadioData",
        "prefix": "RadioData",
        "scope": "source.qml"
    },
    {
        "body": "RadioDelegate{\n    //highlighted: bool\n    //action: Action\n    //autoExclusive: bool\n    //autoRepeat: bool\n    //autoRepeatDelay: int\n    //autoRepeatInterval: int\n    //checkable: bool\n    //checked: bool\n    //display: enumeration\n    //down: bool\n    //icon.color: color\n    //icon.height: int\n    //icon.name: string\n    //icon.source: url\n    //icon.width: int\n    //implicitIndicatorHeight: real\n    //implicitIndicatorWidth: real\n    //indicator: Item\n    //pressX: real\n    //pressY: real\n    //pressed: bool\n    //text: string\n    //canceled()\n    //clicked()\n    //doubleClicked()\n    //pressAndHold()\n    //pressed()\n    //released()\n    //toggled()\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "RadioDelegate",
        "prefix": "RadioDelegate",
        "scope": "source.qml"
    },
    {
        "body": "RangeSlider{\n    //first.handle: Item\n    //first.hovered: bool\n    //first.implicitHandleHeight: real\n    //first.implicitHandleWidth: real\n    //first.position: real\n    //first.pressed: bool\n    //first.value: real\n    //first.visualPosition: real\n    //from: real\n    //horizontal: bool\n    //live: bool\n    //orientation: enumeration\n    //second.handle: Item\n    //second.hovered: bool\n    //second.implicitHandleHeight: real\n    //second.implicitHandleWidth: real\n    //second.position: real\n    //second.pressed: bool\n    //second.value: real\n    //second.visualPosition: real\n    //snapMode: enumeration\n    //stepSize: real\n    //to: real\n    //touchDragThreshold: qreal\n    //vertical: bool\n    //voidfirst.decrease()\n    //voidfirst.increase()\n    //voidsecond.decrease()\n    //voidsecond.increase()\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "RangeSlider",
        "prefix": "RangeSlider",
        "scope": "source.qml"
    },
    {
        "body": "Ratings{\n    //average: real\n    //count: int\n    //maximum: real\n    //ratings: QPlaceRatings\n}",
        "description": "Ratings",
        "prefix": "Ratings",
        "scope": "source.qml"
    },
    {
        "body": "RayCaster{\n    //direction: vector3D\n    //length: real\n    //origin: vector3d\n}",
        "description": "RayCaster",
        "prefix": "RayCaster",
        "scope": "source.qml"
    },
    {
        "body": "Rectangle{\n    //antialiasing: bool\n    //border.color: color\n    //border.width: int\n    //color: color\n    //gradient: any\n    //radius: real\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "Rectangle",
        "prefix": "Rectangle",
        "scope": "source.qml"
    },
    {
        "body": "RectangleShape{\n    \n}",
        "description": "RectangleShape",
        "prefix": "RectangleShape",
        "scope": "source.qml"
    },
    {
        "body": "RectangularGlow{\n    //cached: bool\n    //color: color\n    //cornerRadius: real\n    //glowRadius: real\n    //spread: real\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "RectangularGlow",
        "prefix": "RectangularGlow",
        "scope": "source.qml"
    },
    {
        "body": "RecursiveBlur{\n    //cached: bool\n    //loops: int\n    //progress: real\n    //radius: real\n    //source: variant\n    //transparentBorder: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "RecursiveBlur",
        "prefix": "RecursiveBlur",
        "scope": "source.qml"
    },
    {
        "body": "RegExpValidator{\n    //regExp: regExp\n}",
        "description": "RegExpValidator",
        "prefix": "RegExpValidator",
        "scope": "source.qml"
    },
    {
        "body": "RegisterProtocolHandlerRequest{\n    //origin: url\n    //scheme: string\n}",
        "description": "RegisterProtocolHandlerRequest",
        "prefix": "RegisterProtocolHandlerRequest",
        "scope": "source.qml"
    },
    {
        "body": "RenderCapture{\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "RenderCapture",
        "prefix": "RenderCapture",
        "scope": "source.qml"
    },
    {
        "body": "RenderCaptureReply{\n    //captureId: int\n    //complete: bool\n    //image: variant\n}",
        "description": "RenderCaptureReply",
        "prefix": "RenderCaptureReply",
        "scope": "source.qml"
    },
    {
        "body": "RenderPass{\n    //filterKeys: list<FilterKey>\n    //parameters: list<Parameter>\n    //renderStates: list<RenderState>\n    //shaderProgram: ShaderProgram\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "RenderPass",
        "prefix": "RenderPass",
        "scope": "source.qml"
    },
    {
        "body": "RenderPassFilter{\n    //matchAny: list<FilterKey>\n    //parameters: list<Parameter>\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "RenderPassFilter",
        "prefix": "RenderPassFilter",
        "scope": "source.qml"
    },
    {
        "body": "RenderSettings{\n    //activeFrameGraph: FrameGraphNode\n    //pickingSettings: PickingSettings\n    //renderPolicy: enumeration\n}",
        "description": "RenderSettings",
        "prefix": "RenderSettings",
        "scope": "source.qml"
    },
    {
        "body": "RenderState{\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "RenderState",
        "prefix": "RenderState",
        "scope": "source.qml"
    },
    {
        "body": "RenderStateSet{\n    //renderStates: list<RenderState>\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "RenderStateSet",
        "prefix": "RenderStateSet",
        "scope": "source.qml"
    },
    {
        "body": "RenderSurfaceSelector{\n    //externalRenderTargetSize: size\n    //surface: QSurface\n    //surfacePixelRatio: real\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "RenderSurfaceSelector",
        "prefix": "RenderSurfaceSelector",
        "scope": "source.qml"
    },
    {
        "body": "RenderTarget{\n    //attachments: list<RenderTargetOutput>\n}",
        "description": "RenderTarget",
        "prefix": "RenderTarget",
        "scope": "source.qml"
    },
    {
        "body": "RenderTargetOutput{\n    //attachmentPoint: enumeration\n    //face: enumeration\n    //layer: int\n    //mipLevel: int\n    //texture: Texture\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "RenderTargetOutput",
        "prefix": "RenderTargetOutput",
        "scope": "source.qml"
    },
    {
        "body": "RenderTargetSelector{\n    //drawBuffers: list<variant>\n    //target: RenderTarget\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "RenderTargetSelector",
        "prefix": "RenderTargetSelector",
        "scope": "source.qml"
    },
    {
        "body": "Repeater{\n    //count: int\n    //delegate: Component\n    //model: any\n    //itemAdded(intindex,Itemitem)\n    //itemRemoved(intindex,Itemitem)\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "Repeater",
        "prefix": "Repeater",
        "scope": "source.qml"
    },
    {
        "body": "ReviewModel{\n    //batchSize: int\n    //place: Place\n    //totalCount: int\n}",
        "description": "ReviewModel",
        "prefix": "ReviewModel",
        "scope": "source.qml"
    },
    {
        "body": "Rotation{\n    //angle: real\n    //axis.x: real\n    //axis.y: real\n    //axis.z: real\n    //origin.x: real\n    //origin.y: real\n}",
        "description": "Rotation",
        "prefix": "Rotation",
        "scope": "source.qml"
    },
    {
        "body": "RotationAnimation{\n    //direction: enumeration\n    //from: real\n    //to: real\n    //duration: int\n    //easing.amplitude: real\n    //easing.bezierCurve: list<real>\n    //easing.overshoot: real\n    //easing.period: real\n    //easing.type: enumeration\n    //exclude: list<Object>\n    //from: variant\n    //properties: string\n    //property: string\n    //target: Object\n    //targets: list<Object>\n    //to: variant\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "RotationAnimation",
        "prefix": "RotationAnimation",
        "scope": "source.qml"
    },
    {
        "body": "RotationAnimator{\n    //direction: enumeration\n    //duration: int\n    //easing.amplitude: real\n    //easing.bezierCurve: list<real>\n    //easing.overshoot: real\n    //easing.period: real\n    //easing.type: enumeration\n    //from: real\n    //target: QtQuick: : Item\n    //to: real\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "RotationAnimator",
        "prefix": "RotationAnimator",
        "scope": "source.qml"
    },
    {
        "body": "RotationReading{\n    //x: qreal\n    //y: qreal\n    //z: qreal\n    //timestamp: quint64\n}",
        "description": "RotationReading",
        "prefix": "RotationReading",
        "scope": "source.qml"
    },
    {
        "body": "RotationSensor{\n    //hasZ: qreal\n    //active: bool\n    //alwaysOn: bool\n    //availableDataRates: list<Range>\n    //axesOrientationMode: Sensor: : AxesOrientationMode\n    //bufferSize: int\n    //busy: bool\n    //connectedToBackend: bool\n    //currentOrientation: int\n    //dataRate: int\n    //description: string\n    //efficientBufferSize: int\n    //error: int\n    //identifier: string\n    //maxBufferSize: int\n    //outputRange: int\n    //outputRanges: list<OutputRange>\n    //reading: SensorReading\n    //skipDuplicates: bool\n    //type: string\n    //userOrientation: int\n}",
        "description": "RotationSensor",
        "prefix": "RotationSensor",
        "scope": "source.qml"
    },
    {
        "body": "RoundButton{\n    //radius: real\n    //flat: bool\n    //highlighted: bool\n    //action: Action\n    //autoExclusive: bool\n    //autoRepeat: bool\n    //autoRepeatDelay: int\n    //autoRepeatInterval: int\n    //checkable: bool\n    //checked: bool\n    //display: enumeration\n    //down: bool\n    //icon.color: color\n    //icon.height: int\n    //icon.name: string\n    //icon.source: url\n    //icon.width: int\n    //implicitIndicatorHeight: real\n    //implicitIndicatorWidth: real\n    //indicator: Item\n    //pressX: real\n    //pressY: real\n    //pressed: bool\n    //text: string\n    //canceled()\n    //clicked()\n    //doubleClicked()\n    //pressAndHold()\n    //pressed()\n    //released()\n    //toggled()\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "RoundButton",
        "prefix": "RoundButton",
        "scope": "source.qml"
    },
    {
        "body": "Route{\n    //bounds: georectangle\n    //distance: real\n    //legs: list<Route>\n    //path: list<coordinate>\n    //routeQuery: RouteQuery\n    //segments: list<RouteSegment>\n    //travelTime: int\n}",
        "description": "Route",
        "prefix": "Route",
        "scope": "source.qml"
    },
    {
        "body": "RouteLeg{\n    //legIndex: int\n    //overallRoute: Route\n}",
        "description": "RouteLeg",
        "prefix": "RouteLeg",
        "scope": "source.qml"
    },
    {
        "body": "RouteManeuver{\n    //direction: enumeration\n    //distanceToNextInstruction: real\n    //extendedAttributes: Object\n    //instructionText: string\n    //position: coordinate\n    //timeToNextInstruction: int\n    //valid: bool\n    //waypoint: coordinate\n    //waypointValid: bool\n}",
        "description": "RouteManeuver",
        "prefix": "RouteManeuver",
        "scope": "source.qml"
    },
    {
        "body": "RouteModel{\n    //autoUpdate: bool\n    //count: int\n    //error: enumeration\n    //errorString: string\n    //measurementSystem: Locale: : MeasurementSystem\n    //plugin: Plugin\n    //query: RouteQuery\n    //status: enumeration\n}",
        "description": "RouteModel",
        "prefix": "RouteModel",
        "scope": "source.qml"
    },
    {
        "body": "RouteQuery{\n    //excludedAreas: list<georectangle>\n    //extraParameters: VariantMap\n    //featureTypes: QList<FeatureType>\n    //maneuverDetail: enumeration\n    //numberAlternativeRoutes: int\n    //routeOptimizations: enumeration\n    //segmentDetail: enumeration\n    //travelModes: enumeration\n    //waypoints: list<coordinate>\n    //list<Waypoint>waypointObjects()\n}",
        "description": "RouteQuery",
        "prefix": "RouteQuery",
        "scope": "source.qml"
    },
    {
        "body": "RouteSegment{\n    //distance: real\n    //maneuver: RouteManeuver\n    //path: list<coordinate>\n    //travelTime: int\n}",
        "description": "RouteSegment",
        "prefix": "RouteSegment",
        "scope": "source.qml"
    },
    {
        "body": "Row{\n    //add: Transition\n    //bottomPadding: real\n    //effectiveLayoutDirection: enumeration\n    //layoutDirection: enumeration\n    //leftPadding: real\n    //move: Transition\n    //padding: real\n    //populate: Transition\n    //rightPadding: real\n    //spacing: real\n    //topPadding: real\n    //forceLayout()\n    //positioningComplete()\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "Row",
        "prefix": "Row",
        "scope": "source.qml"
    },
    {
        "body": "RowLayout{\n    //layoutDirection: enumeration\n    //spacing: real\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "RowLayout",
        "prefix": "RowLayout",
        "scope": "source.qml"
    },
    {
        "body": "Scale{\n    //origin.x: real\n    //origin.y: real\n    //xScale: real\n    //yScale: real\n}",
        "description": "Scale",
        "prefix": "Scale",
        "scope": "source.qml"
    },
    {
        "body": "ScaleAnimator{\n    //duration: int\n    //easing.amplitude: real\n    //easing.bezierCurve: list<real>\n    //easing.overshoot: real\n    //easing.period: real\n    //easing.type: enumeration\n    //from: real\n    //target: QtQuick: : Item\n    //to: real\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "ScaleAnimator",
        "prefix": "ScaleAnimator",
        "scope": "source.qml"
    },
    {
        "body": "Scatter3D{\n    //axisX: ValueAxis3D\n    //axisY: ValueAxis3D\n    //axisZ: ValueAxis3D\n    //selectedSeries: Scatter3DSeries\n    //seriesList: list<Scatter3DSeries>\n    //aspectRatio: real\n    //currentFps: int\n    //customItemList: list<Custom3DItem>\n    //horizontalAspectRatio: real\n    //inputHandler: AbstractInputHandler3D\n    //locale: locale\n    //margin: real\n    //measureFps: bool\n    //msaaSamples: int\n    //optimizationHints: AbstractGraph3D.OptimizationHints\n    //orthoProjection: bool\n    //polar: bool\n    //queriedGraphPosition: vector3d\n    //radialLabelOffset: real\n    //reflection: bool\n    //reflectivity: real\n    //renderingMode: AbstractGraph3D.RenderingMode\n    //scene: Scene3D\n    //selectedElement: AbstractGraph3D.ElementType\n    //selectionMode: AbstractGraph3D.SelectionMode\n    //shadowQuality: AbstractGraph3D.ShadowQuality\n    //shadowsSupported: bool\n    //theme: Theme3D\n}",
        "description": "Scatter3D",
        "prefix": "Scatter3D",
        "scope": "source.qml"
    },
    {
        "body": "Scatter3DSeries{\n    //dataProxy: ScatterDataProxy\n    //invalidSelectionIndex: int\n    //itemSize: float\n    //selectedItem: int\n    //baseColor: color\n    //baseGradient: ColorGradient\n    //colorStyle: Theme3D.ColorStyle\n    //itemLabel: string\n    //itemLabelFormat: string\n    //itemLabelVisible: bool\n    //mesh: Abstract3DSeries.Mesh\n    //meshRotation: quaternion\n    //meshSmooth: bool\n    //multiHighlightColor: color\n    //multiHighlightGradient: ColorGradient\n    //name: string\n    //singleHighlightColor: color\n    //singleHighlightGradient: ColorGradient\n    //type: Abstract3DSeries.SeriesType\n    //userDefinedMesh: string\n    //visible: bool\n}",
        "description": "Scatter3DSeries",
        "prefix": "Scatter3DSeries",
        "scope": "source.qml"
    },
    {
        "body": "ScatterDataProxy{\n    //itemCount: int\n    //series: Scatter3DSeries\n    //type: AbstractDataProxy.DataType\n}",
        "description": "ScatterDataProxy",
        "prefix": "ScatterDataProxy",
        "scope": "source.qml"
    },
    {
        "body": "ScatterSeries{\n    //borderColor: color\n    //borderWidth: real\n    //brushFilename: string\n    //count: int\n    //markerShape: enumeration\n    //markerSize: real\n    //axisAngular: AbstractAxis\n    //axisRadial: AbstractAxis\n    //axisX: AbstractAxis\n    //axisXTop: AbstractAxis\n    //axisY: AbstractAxis\n    //axisYRight: AbstractAxis\n    //color: color\n    //pointLabelsClipping: bool\n    //pointLabelsColor: font\n    //pointLabelsFont: font\n    //pointLabelsFormat: string\n    //pointLabelsVisible: bool\n    //pointsVisible: bool\n    //append(realx,realy)\n    //clicked(pointpoint)\n    //doubleClicked(pointpoint)\n    //hovered(pointpoint,boolstate)\n    //insert(intindex,realx,realy)\n    //pointAdded(intindex)\n    //pointRemoved(intindex)\n    //pointReplaced(intindex)\n    //pointsRemoved(intindex,intcount)\n    //pointsReplaced()\n    //pressed(pointpoint)\n    //released(pointpoint)\n    //remove(realx,realy)\n    //remove(intindex)\n    //removePoints(intindex,intcount)\n    //replace(realoldX,realoldY,realnewX,realnewY)\n    //name: string\n    //opacity: real\n    //type: enumeration\n    //useOpenGL: bool\n    //visible: bool\n}",
        "description": "ScatterSeries",
        "prefix": "ScatterSeries",
        "scope": "source.qml"
    },
    {
        "body": "Scene2D{\n    //entities: list<Entity>\n    //item: Item\n    //mouseEnabled: bool\n    //output: RenderTargetOutput\n    //renderPolicy: enumeration\n}",
        "description": "Scene2D",
        "prefix": "Scene2D",
        "scope": "source.qml"
    },
    {
        "body": "Scene3D{\n    //activeCamera: Camera3D\n    //activeLight: Light3D\n    //devicePixelRatio: float\n    //graphPositionQuery: point\n    //invalidSelectionPoint: point\n    //primarySubViewport: rect\n    //secondarySubViewport: rect\n    //secondarySubviewOnTop: bool\n    //selectionQueryPosition: point\n    //slicingActive: bool\n    //viewport: rect\n}",
        "description": "Scene3D",
        "prefix": "Scene3D",
        "scope": "source.qml"
    },
    {
        "body": "SceneLoader{\n    //source: url\n    //status: enumeration\n    //progress: real\n    //status: enumeration\n    //url: url\n    //completed()\n    //createObject()\n    //destruction()\n    //errorString()\n    //incubateObject()\n}",
        "description": "SceneLoader",
        "prefix": "SceneLoader",
        "scope": "source.qml"
    },
    {
        "body": "ScissorTest{\n    //bottom: int\n    //height: int\n    //left: int\n    //width: int\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "ScissorTest",
        "prefix": "ScissorTest",
        "scope": "source.qml"
    },
    {
        "body": "Screen{\n    //onDesktopavailableheight : I: { }\n    //onDesktopavailablewidth : I: { }\n    //onDevicepixelratio : Re: { }\n    //onHeight : I: { }\n    //onLogicalpixeldensity : Real (Obsolet: { }\n    //onManufacturer : Stri: { }\n    //onModel : Stri: { }\n    //onName : Stri: { }\n    //onOrientation : Qt::Screenorientati: { }\n    //onOrientationupdatemask : Qt::Screenorientatio: { }\n    //onPixeldensity : Re: { }\n    //onPrimaryorientation : Qt::Screenorientati: { }\n    //onSerialnumber : Stri: { }\n    //onVirtualx : I: { }\n    //onVirtualy : I: { }\n    //onWidth : I: { }\n    //onInt Anglebetween(Qt::Screenorientation A,  Qt::Screenorientation : { }\n}",
        "description": "Screen",
        "prefix": "Screen",
        "scope": "source.qml"
    },
    {
        "body": "ScreenRayCaster{\n    //position: point\n}",
        "description": "ScreenRayCaster",
        "prefix": "ScreenRayCaster",
        "scope": "source.qml"
    },
    {
        "body": "ScriptAction{\n    //script: script\n    //scriptName: string\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "ScriptAction",
        "prefix": "ScriptAction",
        "scope": "source.qml"
    },
    {
        "body": "ScrollBar{\n    //active: bool\n    //onHorizontal : Scrollb: { }\n    //horizontal: bool\n    //interactive: bool\n    //minimumSize: real\n    //orientation: enumeration\n    //policy: enumeration\n    //position: real\n    //pressed: bool\n    //size: real\n    //snapMode: enumeration\n    //stepSize: real\n    //onVertical : Scrollb: { }\n    //vertical: bool\n    //visualPosition: real\n    //visualSize: real\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "ScrollBar",
        "prefix": "ScrollBar",
        "scope": "source.qml"
    },
    {
        "body": "ScrollIndicator{\n    //active: bool\n    //onHorizontal : Scrollindicat: { }\n    //horizontal: bool\n    //minimumSize: real\n    //orientation: enumeration\n    //position: real\n    //size: real\n    //onVertical : Scrollindicat: { }\n    //vertical: bool\n    //visualPosition: real\n    //visualSize: real\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "ScrollIndicator",
        "prefix": "ScrollIndicator",
        "scope": "source.qml"
    },
    {
        "body": "ScrollView{\n    //contentChildren: list<Item>\n    //contentData: list<Object>\n    //contentChildren: list<Item>\n    //contentData: list<Object>\n    //contentHeight: real\n    //contentWidth: real\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "ScrollView",
        "prefix": "ScrollView",
        "scope": "source.qml"
    },
    {
        "body": "ScrollViewStyle{\n    //control: ScrollView\n    //corner: Component\n    //decrementControl: Component\n    //frame: Component\n    //handle: Component\n    //handleOverlap: int\n    //incrementControl: Component\n    //minimumHandleLength: int\n    //scrollBarBackground: Component\n    //scrollToClickedPosition: bool\n    //transientScrollBars: bool\n}",
        "description": "ScrollViewStyle",
        "prefix": "ScrollViewStyle",
        "scope": "source.qml"
    },
    {
        "body": "ScxmlStateMachine{\n    //dataModel: ScxmlDataModel\n    //initialValues: var\n    //initialized: bool\n    //invoked: bool\n    //invokedServices: list\n    //loader: Loader\n    //name: string\n    //parseErrors: var\n    //running: bool\n    //sessionId: string\n    //activeStateNames(boolcompress)\n    //cancelDelayedEvent(stringsendId)\n    //finished()\n    //init()\n    //isActive(stringscxmlStateName)\n    //isDispatchableTarget(stringtarget)\n    //log(stringlabel,stringmsg)\n    //reachedStableState()\n    //start()\n    //stateNames(boolcompress)\n    //stop()\n    //submitEvent(event)\n    //submitEvent(stringeventName,vardata)\n}",
        "description": "ScxmlStateMachine",
        "prefix": "ScxmlStateMachine",
        "scope": "source.qml"
    },
    {
        "body": "SeamlessCubemap{\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "SeamlessCubemap",
        "prefix": "SeamlessCubemap",
        "scope": "source.qml"
    },
    {
        "body": "SelectionListItem{\n    //soundEffect: url\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "SelectionListItem",
        "prefix": "SelectionListItem",
        "scope": "source.qml"
    },
    {
        "body": "Sensor{\n    //active: bool\n    //alwaysOn: bool\n    //availableDataRates: list<Range>\n    //axesOrientationMode: Sensor: : AxesOrientationMode\n    //bufferSize: int\n    //busy: bool\n    //connectedToBackend: bool\n    //currentOrientation: int\n    //dataRate: int\n    //description: string\n    //efficientBufferSize: int\n    //error: int\n    //identifier: string\n    //maxBufferSize: int\n    //outputRange: int\n    //outputRanges: list<OutputRange>\n    //reading: SensorReading\n    //skipDuplicates: bool\n    //type: string\n    //userOrientation: int\n}",
        "description": "Sensor",
        "prefix": "Sensor",
        "scope": "source.qml"
    },
    {
        "body": "SensorGesture{\n    //availableGestures: stringlist\n    //enabled: bool\n    //gestures: stringlist\n    //invalidGestures: stringlist\n    //validGestures: stringlist\n    //detected(stringgesture)\n}",
        "description": "SensorGesture",
        "prefix": "SensorGesture",
        "scope": "source.qml"
    },
    {
        "body": "SensorGlobal{\n    //list<string>sensorTypes()\n    //list<string>sensorsForType(type)\n}",
        "description": "SensorGlobal",
        "prefix": "SensorGlobal",
        "scope": "source.qml"
    },
    {
        "body": "SensorReading{\n    //timestamp: quint64\n}",
        "description": "SensorReading",
        "prefix": "SensorReading",
        "scope": "source.qml"
    },
    {
        "body": "SequentialAnimation{\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "SequentialAnimation",
        "prefix": "SequentialAnimation",
        "scope": "source.qml"
    },
    {
        "body": "Settings{\n    //category: string\n    //fileName: string\n    //setValue(stringkey,varvalue)\n}",
        "description": "Settings",
        "prefix": "Settings",
        "scope": "source.qml"
    },
    {
        "body": "SettingsStore{\n    \n}",
        "description": "SettingsStore",
        "prefix": "SettingsStore",
        "scope": "source.qml"
    },
    {
        "body": "ShaderEffect{\n    //blending: bool\n    //cullMode: enumeration\n    //fragmentShader: string\n    //log: string\n    //mesh: variant\n    //status: enumeration\n    //supportsAtlasTextures: bool\n    //vertexShader: string\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "ShaderEffect",
        "prefix": "ShaderEffect",
        "scope": "source.qml"
    },
    {
        "body": "ShaderEffectSource{\n    //format: enumeration\n    //hideSource: bool\n    //live: bool\n    //mipmap: bool\n    //recursive: bool\n    //samples: int\n    //sourceItem: Item\n    //sourceRect: rect\n    //textureMirroring: enumeration\n    //textureSize: size\n    //wrapMode: enumeration\n    //scheduleUpdate()\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "ShaderEffectSource",
        "prefix": "ShaderEffectSource",
        "scope": "source.qml"
    },
    {
        "body": "ShaderProgram{\n    //computeShaderCode: string\n    //computeShaderGraph: string\n    //fragmentShaderCode: string\n    //fragmentShaderGraph: string\n    //geometryShaderCode: string\n    //geometryShaderGraph: string\n    //log: string\n    //status: string\n    //tessellationControlShaderCode: string\n    //tessellationControlShaderGraph: string\n    //tessellationEvaluationShaderCode: string\n    //tessellationEvaluationShaderGraph: string\n    //vertexShaderCode: string\n    //vertexShaderGraph: string\n}",
        "description": "ShaderProgram",
        "prefix": "ShaderProgram",
        "scope": "source.qml"
    },
    {
        "body": "ShaderProgramBuilder{\n    //enabledLayers: stringlist\n    //shaderProgram: string\n}",
        "description": "ShaderProgramBuilder",
        "prefix": "ShaderProgramBuilder",
        "scope": "source.qml"
    },
    {
        "body": "Shape{\n    \n}",
        "description": "Shape",
        "prefix": "Shape",
        "scope": "source.qml"
    },
    {
        "body": "ShellSurface{\n    //windowType: enum\n}",
        "description": "ShellSurface",
        "prefix": "ShellSurface",
        "scope": "source.qml"
    },
    {
        "body": "ShellSurfaceItem{\n    //autoCreatePopupItems: bool\n    //moveItem: Item\n    //shellSurface: ShellSurface\n    //compositor: WaylandCompositor\n    //focusOnClick: bool\n    //origin: enum\n    //paintEnabled: bool\n    //sizeFollowsSurface: bool\n    //subsurfaceHandler: object\n    //surface: WaylandSurface\n    //setPrimary()\n}",
        "description": "ShellSurfaceItem",
        "prefix": "ShellSurfaceItem",
        "scope": "source.qml"
    },
    {
        "body": "ShiftHandler{\n    //autoCapitalizationEnabled: bool\n    //sentenceEndingCharacters: string\n    //toggleShiftEnabled: bool\n}",
        "description": "ShiftHandler",
        "prefix": "ShiftHandler",
        "scope": "source.qml"
    },
    {
        "body": "ShiftKey{\n    //active: bool\n    //alternativeKeys: var\n    //displayText: string\n    //effectiveAlternativeKeys: var\n    //effectiveAlternativeKeysHighlightIndex: int\n    //functionKey: bool\n    //highlighted: bool\n    //key: int\n    //keyPanelDelegate: alias\n    //noKeyEvent: bool\n    //noModifier: bool\n    //pressed: bool\n    //repeat: bool\n    //showPreview: bool\n    //smallText: string\n    //smallTextVisible: bool\n    //soundEffect: url\n    //text: string\n    //uppercased: bool\n    //weight: real\n    //clicked()\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "ShiftKey",
        "prefix": "ShiftKey",
        "scope": "source.qml"
    },
    {
        "body": "Shortcut{\n    //autoRepeat: bool\n    //context: enumeration\n    //enabled: bool\n    //nativeText: string\n    //portableText: string\n    //sequence: keysequence\n    //sequences: list<keysequence>\n    //activated()\n    //activatedAmbiguously()\n}",
        "description": "Shortcut",
        "prefix": "Shortcut",
        "scope": "source.qml"
    },
    {
        "body": "SignalSpy{\n    //count: int\n    //signalArguments: list\n    //signalName: string\n    //target: var\n    //valid: bool\n    //clear()\n    //wait(timeout)\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "SignalSpy",
        "prefix": "SignalSpy",
        "scope": "source.qml"
    },
    {
        "body": "SignalTransition{\n    //guard: bool\n    //signal: signal\n    //senderObject: QObject\n    //signal: string\n    //sourceState: bool\n    //targetState: QAbstractState\n    //targetStates: list<QAbstractState>\n    //triggered()\n}",
        "description": "SignalTransition",
        "prefix": "SignalTransition",
        "scope": "source.qml"
    },
    {
        "body": "SinglePointHandler{\n    //acceptedButtons: flags\n    //acceptedDevices: flags\n    //acceptedModifiers: flags\n    //acceptedPointerTypes: flags\n    //active: bool\n    //enabled: bool\n    //grabPermissions: flags\n    //margin: real\n    //parent: Item\n    //point: HandlerPoint\n    //target: Item\n    //canceled(EventPointpoint)\n    //grabChanged(GrabTransitiontransition,EventPointpoint)\n}",
        "description": "SinglePointHandler",
        "prefix": "SinglePointHandler",
        "scope": "source.qml"
    },
    {
        "body": "Skeleton{\n    //rootJoint: Joint\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "Skeleton",
        "prefix": "Skeleton",
        "scope": "source.qml"
    },
    {
        "body": "SkeletonLoader{\n    //source: url\n    //status: SkeletonLoader.Status\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "SkeletonLoader",
        "prefix": "SkeletonLoader",
        "scope": "source.qml"
    },
    {
        "body": "Slider{\n    //from: real\n    //handle: Item\n    //horizontal: bool\n    //implicitHandleHeight: real\n    //implicitHandleWidth: real\n    //live: bool\n    //orientation: enumeration\n    //position: real\n    //pressed: bool\n    //snapMode: enumeration\n    //stepSize: real\n    //to: real\n    //touchDragThreshold: qreal\n    //value: real\n    //vertical: bool\n    //visualPosition: real\n    //moved()\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "Slider",
        "prefix": "Slider",
        "scope": "source.qml"
    },
    {
        "body": "SliderStyle{\n    //control: Slider\n    //groove: Component\n    //handle: Component\n    //panel: Component\n    //tickmarks: Component\n}",
        "description": "SliderStyle",
        "prefix": "SliderStyle",
        "scope": "source.qml"
    },
    {
        "body": "SmoothedAnimation{\n    //duration: int\n    //maximumEasingTime: int\n    //reversingMode: enumeration\n    //velocity: real\n    //from: real\n    //to: real\n    //duration: int\n    //easing.amplitude: real\n    //easing.bezierCurve: list<real>\n    //easing.overshoot: real\n    //easing.period: real\n    //easing.type: enumeration\n    //exclude: list<Object>\n    //from: variant\n    //properties: string\n    //property: string\n    //target: Object\n    //targets: list<Object>\n    //to: variant\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "SmoothedAnimation",
        "prefix": "SmoothedAnimation",
        "scope": "source.qml"
    },
    {
        "body": "SortPolicy{\n    //sortTypes: QVariantList\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "SortPolicy",
        "prefix": "SortPolicy",
        "scope": "source.qml"
    },
    {
        "body": "Sound{\n    //attenuationModel: string\n    //category: string\n    //name: string\n    //playType: enumeration\n    //addPlayVariation(PlayVariationplayVariation)\n    //QtAudioEngine: : SoundInstancenewInstance()\n    //play()\n    //play(gain)\n    //play(gain,pitch)\n    //play(position)\n    //play(position,velocity)\n    //play(position,velocity,direction)\n    //play(position,gain)\n    //play(position,velocity,gain)\n    //play(position,velocity,direction,gain)\n    //play(position,gain,pitch)\n    //play(position,velocity,gain,pitch)\n    //play(position,velocity,direction,gain,pitch)\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "Sound",
        "prefix": "Sound",
        "scope": "source.qml"
    },
    {
        "body": "SoundEffect{\n    //category: string\n    //loops: int\n    //loopsRemaining: int\n    //muted: bool\n    //playing: bool\n    //source: url\n    //status: enumeration\n    //volume: qreal\n    //categoryChanged()\n    //loadedChanged()\n    //loopCountChanged()\n    //loopsRemainingChanged()\n    //mutedChanged()\n    //play()\n    //playingChanged()\n    //sourceChanged()\n    //statusChanged()\n    //stop()\n    //volumeChanged()\n}",
        "description": "SoundEffect",
        "prefix": "SoundEffect",
        "scope": "source.qml"
    },
    {
        "body": "SoundInstance{\n    //direction: vector3d\n    //engine: QtAudioEngine: : AudioEngine\n    //gain: vector3d\n    //pitch: vector3d\n    //position: vector3d\n    //sound: string\n    //state: enumeration\n    //velocity: vector3d\n    //directionChanged()\n    //gainChanged()\n    //pause()\n    //pitchChanged()\n    //play()\n    //positionChanged()\n    //soundChanged()\n    //stateChanged(state)\n    //stop()\n    //velocityChanged()\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "SoundInstance",
        "prefix": "SoundInstance",
        "scope": "source.qml"
    },
    {
        "body": "SpaceKey{\n    //active: bool\n    //alternativeKeys: var\n    //displayText: string\n    //effectiveAlternativeKeys: var\n    //effectiveAlternativeKeysHighlightIndex: int\n    //functionKey: bool\n    //highlighted: bool\n    //key: int\n    //keyPanelDelegate: alias\n    //noKeyEvent: bool\n    //noModifier: bool\n    //pressed: bool\n    //repeat: bool\n    //showPreview: bool\n    //smallText: string\n    //smallTextVisible: bool\n    //soundEffect: url\n    //text: string\n    //uppercased: bool\n    //weight: real\n    //clicked()\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "SpaceKey",
        "prefix": "SpaceKey",
        "scope": "source.qml"
    },
    {
        "body": "SphereGeometry{\n    //generateTangents: bool\n    //indexAttribute: Attribute\n    //normalAttribute: Attribute\n    //positionAttribute: Attribute\n    //radius: real\n    //rings: int\n    //slices: int\n    //tangentAttribute: Attribute\n    //texCoordAttribute: Attribute\n}",
        "description": "SphereGeometry",
        "prefix": "SphereGeometry",
        "scope": "source.qml"
    },
    {
        "body": "SphereMesh{\n    //generateTangents: bool\n    //radius: real\n    //rings: int\n    //slices: int\n}",
        "description": "SphereMesh",
        "prefix": "SphereMesh",
        "scope": "source.qml"
    },
    {
        "body": "SpinBox{\n    //displayText: string\n    //down.hovered: bool\n    //down.implicitIndicatorHeight: real\n    //down.implicitIndicatorWidth: real\n    //down.indicator: Item\n    //down.pressed: bool\n    //editable: bool\n    //from: int\n    //inputMethodComposing: bool\n    //inputMethodHints: flags\n    //stepSize: int\n    //textFromValue: function\n    //to: int\n    //up.hovered: bool\n    //up.implicitIndicatorHeight: real\n    //up.implicitIndicatorWidth: real\n    //up.indicator: Item\n    //up.pressed: bool\n    //validator: Validator\n    //value: int\n    //valueFromText: function\n    //wrap: bool\n    //valueModified()\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "SpinBox",
        "prefix": "SpinBox",
        "scope": "source.qml"
    },
    {
        "body": "SpinBoxStyle{\n    //background: Component\n    //control: SpinBox\n    //decrementControl: Component\n    //font: font\n    //horizontalAlignment: int\n    //incrementControl: Component\n    //renderType: int\n    //selectedTextColor: color\n    //selectionColor: color\n    //textColor: color\n}",
        "description": "SpinBoxStyle",
        "prefix": "SpinBoxStyle",
        "scope": "source.qml"
    },
    {
        "body": "SplineSeries{\n    //capStyle: Qt: : PenCapStyle\n    //count: int\n    //style: Qt: : PenStyle\n    //width: real\n    //axisAngular: AbstractAxis\n    //axisRadial: AbstractAxis\n    //axisX: AbstractAxis\n    //axisXTop: AbstractAxis\n    //axisY: AbstractAxis\n    //axisYRight: AbstractAxis\n    //color: color\n    //pointLabelsClipping: bool\n    //pointLabelsColor: font\n    //pointLabelsFont: font\n    //pointLabelsFormat: string\n    //pointLabelsVisible: bool\n    //pointsVisible: bool\n    //append(realx,realy)\n    //clicked(pointpoint)\n    //doubleClicked(pointpoint)\n    //hovered(pointpoint,boolstate)\n    //insert(intindex,realx,realy)\n    //pointAdded(intindex)\n    //pointRemoved(intindex)\n    //pointReplaced(intindex)\n    //pointsRemoved(intindex,intcount)\n    //pointsReplaced()\n    //pressed(pointpoint)\n    //released(pointpoint)\n    //remove(realx,realy)\n    //remove(intindex)\n    //removePoints(intindex,intcount)\n    //replace(realoldX,realoldY,realnewX,realnewY)\n    //name: string\n    //opacity: real\n    //type: enumeration\n    //useOpenGL: bool\n    //visible: bool\n}",
        "description": "SplineSeries",
        "prefix": "SplineSeries",
        "scope": "source.qml"
    },
    {
        "body": "SplitView{\n    //handleDelegate: Component\n    //orientation: int\n    //resizing: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "SplitView",
        "prefix": "SplitView",
        "scope": "source.qml"
    },
    {
        "body": "SpotLight{\n    //constantAttenuation: float\n    //cutOffAngle: float\n    //linearAttenuation: float\n    //localDirection: vector3d\n    //quadraticAttenuation: float\n}",
        "description": "SpotLight",
        "prefix": "SpotLight",
        "scope": "source.qml"
    },
    {
        "body": "SpringAnimation{\n    //damping: real\n    //epsilon: real\n    //mass: real\n    //modulus: real\n    //spring: real\n    //velocity: real\n    //from: real\n    //to: real\n    //duration: int\n    //easing.amplitude: real\n    //easing.bezierCurve: list<real>\n    //easing.overshoot: real\n    //easing.period: real\n    //easing.type: enumeration\n    //exclude: list<Object>\n    //from: variant\n    //properties: string\n    //property: string\n    //target: Object\n    //targets: list<Object>\n    //to: variant\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "SpringAnimation",
        "prefix": "SpringAnimation",
        "scope": "source.qml"
    },
    {
        "body": "Sprite{\n    //duration: int\n    //durationVariation: int\n    //frameCount: int\n    //frameDuration: int\n    //frameDurationVariation: int\n    //frameHeight: int\n    //frameRate: qreal\n    //frameRateVariation: qreal\n    //frameSync: bool\n    //frameWidth: int\n    //frameX: int\n    //frameY: int\n    //name: string\n    //randomStart: bool\n    //reverse: bool\n    //source: url\n    //to: QVariantMap\n}",
        "description": "Sprite",
        "prefix": "Sprite",
        "scope": "source.qml"
    },
    {
        "body": "SpriteGoal{\n    //goalState: string\n    //jump: bool\n    //systemStates: bool\n    //enabled: bool\n    //groups: list<string>\n    //once: bool\n    //shape: Shape\n    //system: ParticleSystem\n    //whenCollidingWith: list<string>\n    //affected(realx,realy)\n}",
        "description": "SpriteGoal",
        "prefix": "SpriteGoal",
        "scope": "source.qml"
    },
    {
        "body": "SpriteSequence{\n    //currentSprite: string\n    //goalSprite: string\n    //interpolate: bool\n    //running: bool\n    //sprites: list<Sprite>\n    //jumpTo(stringsprite)\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "SpriteSequence",
        "prefix": "SpriteSequence",
        "scope": "source.qml"
    },
    {
        "body": "Stack{\n    //onIndex : I: { }\n    //onStatus : Enumerati: { }\n    //onView : Stackvi: { }\n}",
        "description": "Stack",
        "prefix": "Stack",
        "scope": "source.qml"
    },
    {
        "body": "StackLayout{\n    //count: int\n    //currentIndex: int\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "StackLayout",
        "prefix": "StackLayout",
        "scope": "source.qml"
    },
    {
        "body": "StackView{\n    //busy: bool\n    //currentItem: Item\n    //depth: int\n    //empty: bool\n    //onIndex : I: { }\n    //initialItem: var\n    //popEnter: Transition\n    //popExit: Transition\n    //pushEnter: Transition\n    //pushExit: Transition\n    //replaceEnter: Transition\n    //replaceExit: Transition\n    //onStatus : Enumerati: { }\n    //onView : Stackvi: { }\n    //onVisible : Bo: { }\n    //onActivated: { }\n    //onActivating: { }\n    //onDeactivated: { }\n    //onDeactivating: { }\n    //onRemoved: { }\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "StackView",
        "prefix": "StackView",
        "scope": "source.qml"
    },
    {
        "body": "StackViewDelegate{\n    //popTransition: Component\n    //pushTransition: Component\n    //replaceTransition: Component\n    //objectName: string\n}",
        "description": "StackViewDelegate",
        "prefix": "StackViewDelegate",
        "scope": "source.qml"
    },
    {
        "body": "StackedBarSeries{\n    //axisX: AbstractAxis\n    //axisXTop: AbstractAxis\n    //axisY: AbstractAxis\n    //axisYRight: AbstractAxis\n    //barWidth: real\n    //count: int\n    //labelsAngle: real\n    //labelsFormat: string\n    //labelsPosition: enumeration\n    //labelsPrecision: real\n    //labelsVisible: bool\n    //barsetsAdded()\n    //barsetsRemoved()\n    //clear()\n    //clicked(intindex,BarSetbarset)\n    //doubleClicked(intindex,BarSetbarset)\n    //hovered(boolstatus,intindex,BarSetbarset)\n    //pressed(intindex,BarSetbarset)\n    //released(intindex,BarSetbarset)\n    //name: string\n    //opacity: real\n    //type: enumeration\n    //useOpenGL: bool\n    //visible: bool\n}",
        "description": "StackedBarSeries",
        "prefix": "StackedBarSeries",
        "scope": "source.qml"
    },
    {
        "body": "State{\n    //changes: list<Change>\n    //extend: string\n    //name: string\n    //when: bool\n}",
        "description": "State",
        "prefix": "State",
        "scope": "source.qml"
    },
    {
        "body": "StateChangeScript{\n    //name: string\n    //script: script\n}",
        "description": "StateChangeScript",
        "prefix": "StateChangeScript",
        "scope": "source.qml"
    },
    {
        "body": "StateGroup{\n    //state: string\n    //states: list<State>\n    //transitions: list<Transition>\n}",
        "description": "StateGroup",
        "prefix": "StateGroup",
        "scope": "source.qml"
    },
    {
        "body": "StateMachine{\n    //errorString: string\n    //globalRestorePolicy: enumeration\n    //running: bool\n    //start()\n    //started()\n    //stop()\n    //stopped()\n    //childMode: enumeration\n    //errorState: QAbstractState\n    //initialState: QAbstractState\n    //finished()\n    //active: bool\n    //entered()\n    //exited()\n}",
        "description": "StateMachine",
        "prefix": "StateMachine",
        "scope": "source.qml"
    },
    {
        "body": "StateMachineLoader{\n    //source: url\n    //stateMachine: ScxmlStateMachine\n}",
        "description": "StateMachineLoader",
        "prefix": "StateMachineLoader",
        "scope": "source.qml"
    },
    {
        "body": "StatusBar{\n    //contentItem: Item\n    //style: Component\n}",
        "description": "StatusBar",
        "prefix": "StatusBar",
        "scope": "source.qml"
    },
    {
        "body": "StatusBarStyle{\n    //background: Component\n    //panel: Component\n}",
        "description": "StatusBarStyle",
        "prefix": "StatusBarStyle",
        "scope": "source.qml"
    },
    {
        "body": "StatusIndicator{\n    //active: bool\n    //color: color\n    //on: alias(obsolete)\n}",
        "description": "StatusIndicator",
        "prefix": "StatusIndicator",
        "scope": "source.qml"
    },
    {
        "body": "StatusIndicatorStyle{\n    //color: color\n    //control: StatusIndicator\n    //indicator: Component\n}",
        "description": "StatusIndicatorStyle",
        "prefix": "StatusIndicatorStyle",
        "scope": "source.qml"
    },
    {
        "body": "StencilMask{\n    //backOutputMask: int\n    //frontOutputMask: int\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "StencilMask",
        "prefix": "StencilMask",
        "scope": "source.qml"
    },
    {
        "body": "StencilOperation{\n    //back: StencilOperationArguments\n    //front: StencilOperationArguments\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "StencilOperation",
        "prefix": "StencilOperation",
        "scope": "source.qml"
    },
    {
        "body": "StencilOperationArguments{\n    //allTestsPassOperation: enumeration\n    //depthTestFailureOperation: enumeration\n    //faceMode: enumeration\n    //stencilTestFailureOperation: enumeration\n    //objectName: string\n}",
        "description": "StencilOperationArguments",
        "prefix": "StencilOperationArguments",
        "scope": "source.qml"
    },
    {
        "body": "StencilTest{\n    //back: StencilTestArguments\n    //front: StencilTestArguments\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "StencilTest",
        "prefix": "StencilTest",
        "scope": "source.qml"
    },
    {
        "body": "StencilTestArguments{\n    //comparisonMask: int\n    //faceMode: enumeration\n    //referenceValue: int\n    //stencilFunction: enumeration\n    //objectName: string\n}",
        "description": "StencilTestArguments",
        "prefix": "StencilTestArguments",
        "scope": "source.qml"
    },
    {
        "body": "Store{\n    //restorePurchases()\n}",
        "description": "Store",
        "prefix": "Store",
        "scope": "source.qml"
    },
    {
        "body": "String{\n    \n}",
        "description": "String",
        "prefix": "String",
        "scope": "source.qml"
    },
    {
        "body": "Supplier{\n    //icon: PlaceIcon\n    //name: string\n    //supplier: QPlaceSupplier\n    //supplierId: string\n    //url: url\n}",
        "description": "Supplier",
        "prefix": "Supplier",
        "scope": "source.qml"
    },
    {
        "body": "Surface3D{\n    //axisX: ValueAxis3D\n    //axisY: ValueAxis3D\n    //axisZ: ValueAxis3D\n    //flipHorizontalGrid: bool\n    //selectedSeries: Surface3DSeries\n    //seriesList: list<Surface3DSeries>\n    //aspectRatio: real\n    //currentFps: int\n    //customItemList: list<Custom3DItem>\n    //horizontalAspectRatio: real\n    //inputHandler: AbstractInputHandler3D\n    //locale: locale\n    //margin: real\n    //measureFps: bool\n    //msaaSamples: int\n    //optimizationHints: AbstractGraph3D.OptimizationHints\n    //orthoProjection: bool\n    //polar: bool\n    //queriedGraphPosition: vector3d\n    //radialLabelOffset: real\n    //reflection: bool\n    //reflectivity: real\n    //renderingMode: AbstractGraph3D.RenderingMode\n    //scene: Scene3D\n    //selectedElement: AbstractGraph3D.ElementType\n    //selectionMode: AbstractGraph3D.SelectionMode\n    //shadowQuality: AbstractGraph3D.ShadowQuality\n    //shadowsSupported: bool\n    //theme: Theme3D\n}",
        "description": "Surface3D",
        "prefix": "Surface3D",
        "scope": "source.qml"
    },
    {
        "body": "Surface3DSeries{\n    //dataProxy: SurfaceDataProxy\n    //drawMode: DrawFlag\n    //flatShadingEnabled: bool\n    //flatShadingSupported: bool\n    //invalidSelectionPosition: point\n    //selectedPoint: point\n    //textureFile: string\n    //baseColor: color\n    //baseGradient: ColorGradient\n    //colorStyle: Theme3D.ColorStyle\n    //itemLabel: string\n    //itemLabelFormat: string\n    //itemLabelVisible: bool\n    //mesh: Abstract3DSeries.Mesh\n    //meshRotation: quaternion\n    //meshSmooth: bool\n    //multiHighlightColor: color\n    //multiHighlightGradient: ColorGradient\n    //name: string\n    //singleHighlightColor: color\n    //singleHighlightGradient: ColorGradient\n    //type: Abstract3DSeries.SeriesType\n    //userDefinedMesh: string\n    //visible: bool\n}",
        "description": "Surface3DSeries",
        "prefix": "Surface3DSeries",
        "scope": "source.qml"
    },
    {
        "body": "SurfaceDataProxy{\n    //columnCount: int\n    //rowCount: int\n    //series: Surface3DSeries\n    //type: AbstractDataProxy.DataType\n}",
        "description": "SurfaceDataProxy",
        "prefix": "SurfaceDataProxy",
        "scope": "source.qml"
    },
    {
        "body": "SwipeDelegate{\n    //onPressed : Bo: { }\n    //swipe.behind: Component\n    //swipe.behindItem: Item\n    //swipe.complete: bool\n    //swipe.enabled: bool\n    //swipe.left: Component\n    //swipe.leftItem: Item\n    //swipe.position: real\n    //swipe.right: Component\n    //swipe.rightItem: Item\n    //swipe.transition: Transition\n    //onClicked: { }\n    //voidswipe.close()\n    //voidswipe.closed()\n    //voidswipe.completed()\n    //voidswipe.open(enumerationside)\n    //voidswipe.opened()\n    //highlighted: bool\n    //action: Action\n    //autoExclusive: bool\n    //autoRepeat: bool\n    //autoRepeatDelay: int\n    //autoRepeatInterval: int\n    //checkable: bool\n    //checked: bool\n    //display: enumeration\n    //down: bool\n    //icon.color: color\n    //icon.height: int\n    //icon.name: string\n    //icon.source: url\n    //icon.width: int\n    //implicitIndicatorHeight: real\n    //implicitIndicatorWidth: real\n    //indicator: Item\n    //pressX: real\n    //pressY: real\n    //pressed: bool\n    //text: string\n    //canceled()\n    //clicked()\n    //doubleClicked()\n    //pressAndHold()\n    //pressed()\n    //released()\n    //toggled()\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "SwipeDelegate",
        "prefix": "SwipeDelegate",
        "scope": "source.qml"
    },
    {
        "body": "SwipeView{\n    //horizontal: bool\n    //onIndex : I: { }\n    //interactive: bool\n    //onIscurrentitem : Bo: { }\n    //onIsnextitem : Bo: { }\n    //onIspreviousitem : Bo: { }\n    //orientation: enumeration\n    //vertical: bool\n    //onView : Swipevi: { }\n    //contentChildren: list<Item>\n    //contentData: list<Object>\n    //contentHeight: real\n    //contentModel: model\n    //contentWidth: real\n    //count: int\n    //currentIndex: int\n    //currentItem: Item\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "SwipeView",
        "prefix": "SwipeView",
        "scope": "source.qml"
    },
    {
        "body": "Switch{\n    //position: real\n    //visualPosition: real\n    //action: Action\n    //autoExclusive: bool\n    //autoRepeat: bool\n    //autoRepeatDelay: int\n    //autoRepeatInterval: int\n    //checkable: bool\n    //checked: bool\n    //display: enumeration\n    //down: bool\n    //icon.color: color\n    //icon.height: int\n    //icon.name: string\n    //icon.source: url\n    //icon.width: int\n    //implicitIndicatorHeight: real\n    //implicitIndicatorWidth: real\n    //indicator: Item\n    //pressX: real\n    //pressY: real\n    //pressed: bool\n    //text: string\n    //canceled()\n    //clicked()\n    //doubleClicked()\n    //pressAndHold()\n    //pressed()\n    //released()\n    //toggled()\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "Switch",
        "prefix": "Switch",
        "scope": "source.qml"
    },
    {
        "body": "SwitchDelegate{\n    //position: real\n    //visualPosition: real\n    //highlighted: bool\n    //action: Action\n    //autoExclusive: bool\n    //autoRepeat: bool\n    //autoRepeatDelay: int\n    //autoRepeatInterval: int\n    //checkable: bool\n    //checked: bool\n    //display: enumeration\n    //down: bool\n    //icon.color: color\n    //icon.height: int\n    //icon.name: string\n    //icon.source: url\n    //icon.width: int\n    //implicitIndicatorHeight: real\n    //implicitIndicatorWidth: real\n    //indicator: Item\n    //pressX: real\n    //pressY: real\n    //pressed: bool\n    //text: string\n    //canceled()\n    //clicked()\n    //doubleClicked()\n    //pressAndHold()\n    //pressed()\n    //released()\n    //toggled()\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "SwitchDelegate",
        "prefix": "SwitchDelegate",
        "scope": "source.qml"
    },
    {
        "body": "SwitchStyle{\n    //groove: Component\n    //handle: Component\n}",
        "description": "SwitchStyle",
        "prefix": "SwitchStyle",
        "scope": "source.qml"
    },
    {
        "body": "SymbolModeKey{\n    //active: bool\n    //alternativeKeys: var\n    //displayText: string\n    //effectiveAlternativeKeys: var\n    //effectiveAlternativeKeysHighlightIndex: int\n    //functionKey: bool\n    //highlighted: bool\n    //key: int\n    //keyPanelDelegate: alias\n    //noKeyEvent: bool\n    //noModifier: bool\n    //pressed: bool\n    //repeat: bool\n    //showPreview: bool\n    //smallText: string\n    //smallTextVisible: bool\n    //soundEffect: url\n    //text: string\n    //uppercased: bool\n    //weight: real\n    //clicked()\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "SymbolModeKey",
        "prefix": "SymbolModeKey",
        "scope": "source.qml"
    },
    {
        "body": "SystemPalette{\n    //alternateBase: color\n    //base: color\n    //button: color\n    //buttonText: color\n    //colorGroup: enumeration\n    //dark: color\n    //highlight: color\n    //highlightedText: color\n    //light: color\n    //mid: color\n    //midlight: color\n    //shadow: color\n    //text: color\n    //window: color\n    //windowText: color\n}",
        "description": "SystemPalette",
        "prefix": "SystemPalette",
        "scope": "source.qml"
    },
    {
        "body": "Tab{\n    //title: string\n    //active: bool\n    //asynchronous: bool\n    //item: object\n    //progress: real\n    //source: url\n    //sourceComponent: Component\n    //status: enumeration\n    //loaded()\n    //setSource()\n}",
        "description": "Tab",
        "prefix": "Tab",
        "scope": "source.qml"
    },
    {
        "body": "TabBar{\n    //contentHeight: real\n    //contentWidth: real\n    //onIndex : I: { }\n    //onPosition : Enumerati: { }\n    //position: enumeration\n    //onTabbar : Tabb: { }\n    //contentChildren: list<Item>\n    //contentData: list<Object>\n    //contentHeight: real\n    //contentModel: model\n    //contentWidth: real\n    //count: int\n    //currentIndex: int\n    //currentItem: Item\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "TabBar",
        "prefix": "TabBar",
        "scope": "source.qml"
    },
    {
        "body": "TabButton{\n    //action: Action\n    //autoExclusive: bool\n    //autoRepeat: bool\n    //autoRepeatDelay: int\n    //autoRepeatInterval: int\n    //checkable: bool\n    //checked: bool\n    //display: enumeration\n    //down: bool\n    //icon.color: color\n    //icon.height: int\n    //icon.name: string\n    //icon.source: url\n    //icon.width: int\n    //implicitIndicatorHeight: real\n    //implicitIndicatorWidth: real\n    //indicator: Item\n    //pressX: real\n    //pressY: real\n    //pressed: bool\n    //text: string\n    //canceled()\n    //clicked()\n    //doubleClicked()\n    //pressAndHold()\n    //pressed()\n    //released()\n    //toggled()\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "TabButton",
        "prefix": "TabButton",
        "scope": "source.qml"
    },
    {
        "body": "TabView{\n    //contentItem: Item\n    //count: int\n    //currentIndex: int\n    //frameVisible: bool\n    //tabPosition: int\n    //tabsVisible: bool\n}",
        "description": "TabView",
        "prefix": "TabView",
        "scope": "source.qml"
    },
    {
        "body": "TabViewStyle{\n    //control: TabView\n    //frame: Component\n    //frameOverlap: int\n    //leftCorner: Component\n    //rightCorner: Component\n    //tab: Component\n    //tabBar: Component\n    //tabOverlap: int\n    //tabsAlignment: int\n    //tabsMovable: bool\n}",
        "description": "TabViewStyle",
        "prefix": "TabViewStyle",
        "scope": "source.qml"
    },
    {
        "body": "TableView{\n    //currentRow: int\n    //itemDelegate: Component\n    //model: model\n    //rowCount: int\n    //section.criteria: enumeration\n    //section.delegate: Component\n    //section.labelPositioning: enumeration\n    //section.property: string\n    //selection: Selection\n    //activated(introw)\n    //clicked(introw)\n    //doubleClicked(introw)\n    //pressAndHold(introw)\n    //contentItem: Item\n    //flickableItem: Item\n    //frameVisible: bool\n    //highlightOnFocus: bool\n    //horizontalScrollBarPolicy: enumeration\n    //style: Component\n    //verticalScrollBarPolicy: enumeration\n    //viewport: Item\n}",
        "description": "TableView",
        "prefix": "TableView",
        "scope": "source.qml"
    },
    {
        "body": "TableViewColumn{\n    //delegate: Component\n    //elideMode: int\n    //horizontalAlignment: int\n    //movable: bool\n    //resizable: bool\n    //role: string\n    //title: string\n    //visible: bool\n    //width: int\n    //objectName: string\n}",
        "description": "TableViewColumn",
        "prefix": "TableViewColumn",
        "scope": "source.qml"
    },
    {
        "body": "TableViewStyle{\n    //control: TableView\n    //headerDelegate: Component\n    //itemDelegate: Component\n    //rowDelegate: Component\n    //control: ScrollView\n    //corner: Component\n    //decrementControl: Component\n    //frame: Component\n    //handle: Component\n    //handleOverlap: int\n    //incrementControl: Component\n    //minimumHandleLength: int\n    //scrollBarBackground: Component\n    //scrollToClickedPosition: bool\n    //transientScrollBars: bool\n}",
        "description": "TableViewStyle",
        "prefix": "TableViewStyle",
        "scope": "source.qml"
    },
    {
        "body": "TapHandler{\n    //acceptedButtons: flags\n    //acceptedDevices: flags\n    //acceptedModifiers: flags\n    //acceptedPointerTypes: flags\n    //active: bool\n    //enabled: bool\n    //gesturePolicy: enumeration\n    //grabPermissions: flags\n    //longPressThreshold: real\n    //margin: real\n    //parent: Item\n    //point: HandlerPoint\n    //pressed: bool\n    //tapCount: int\n    //target: Item\n    //timeHeld: real\n    //canceled(EventPointpoint)\n    //doubleTapped()\n    //grabChanged(GrabTransitiontransition,EventPointpoint)\n    //longPressed()\n    //singleTapped()\n    //tapped()\n}",
        "description": "TapHandler",
        "prefix": "TapHandler",
        "scope": "source.qml"
    },
    {
        "body": "TapReading{\n    //doubleTap: bool\n    //tapDirection: TapDirection\n    //timestamp: quint64\n}",
        "description": "TapReading",
        "prefix": "TapReading",
        "scope": "source.qml"
    },
    {
        "body": "TapSensor{\n    //returnDoubleTapEvents: bool\n    //active: bool\n    //alwaysOn: bool\n    //availableDataRates: list<Range>\n    //axesOrientationMode: Sensor: : AxesOrientationMode\n    //bufferSize: int\n    //busy: bool\n    //connectedToBackend: bool\n    //currentOrientation: int\n    //dataRate: int\n    //description: string\n    //efficientBufferSize: int\n    //error: int\n    //identifier: string\n    //maxBufferSize: int\n    //outputRange: int\n    //outputRanges: list<OutputRange>\n    //reading: SensorReading\n    //skipDuplicates: bool\n    //type: string\n    //userOrientation: int\n}",
        "description": "TapSensor",
        "prefix": "TapSensor",
        "scope": "source.qml"
    },
    {
        "body": "TargetDirection{\n    //magnitude: real\n    //magnitudeVariation: real\n    //proportionalMagnitude: bool\n    //targetItem: Item\n    //targetVariation: real\n    //targetX: real\n    //targetY: real\n}",
        "description": "TargetDirection",
        "prefix": "TargetDirection",
        "scope": "source.qml"
    },
    {
        "body": "TaskbarButton{\n    //overlay.accessibleDescription: string\n    //overlay.iconSource: url\n    //progress.maximum: int\n    //progress.minimum: int\n    //progress.paused: bool\n    //progress.stopped: bool\n    //progress.value: int\n    //progress.visible: bool\n}",
        "description": "TaskbarButton",
        "prefix": "TaskbarButton",
        "scope": "source.qml"
    },
    {
        "body": "Technique{\n    //filterKeys: list<FilterKey>\n    //graphicsApiFilter: GraphicsApiFilter\n    //parameters: list<Parameter>\n    //renderPasses: list<RenderPass>\n}",
        "description": "Technique",
        "prefix": "Technique",
        "scope": "source.qml"
    },
    {
        "body": "TechniqueFilter{\n    //matchAll: list<FilterKey>\n    //parameters: list<Parameter>\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "TechniqueFilter",
        "prefix": "TechniqueFilter",
        "scope": "source.qml"
    },
    {
        "body": "TestCase{\n    //completed: bool\n    //name: string\n    //optional: bool\n    //running: bool\n    //when: bool\n    //windowShown: bool\n    //cleanup()\n    //cleanupTestCase()\n    //compare(actual,expected,message)\n    //expectFail(tag,message)\n    //expectFailContinue(tag,message)\n    //fail(message)\n    //fuzzyCompare(actual,expected,delta,message)\n    //ignoreWarning(message)\n    //init()\n    //initTestCase()\n    //keyClick(key,modifiers,delay)\n    //keyPress(key,modifiers,delay)\n    //keyRelease(key,modifiers,delay)\n    //keySequence(keySequence)\n    //mouseClick(item,x,y,button,modifiers,delay)\n    //mouseDoubleClick(item,x,y,button,modifiers,delay)\n    //mouseDoubleClickSequence(item,x,y,button,modifiers,delay)\n    //mouseDrag(item,x,y,dx,dy,button,modifiers,delay)\n    //mouseMove(item,x,y,delay)\n    //mousePress(item,x,y,button,modifiers,delay)\n    //mouseRelease(item,x,y,button,modifiers,delay)\n    //mouseWheel(item,x,y,xDelta,yDelta,button,modifiers,delay)\n    //skip(message)\n    //sleep(ms)\n    //tryCompare(obj,property,expected,timeout,message)\n    //tryVerify(function,timeout,message)\n    //verify(condition,message)\n    //wait(ms)\n    //waitForRendering(item,timeout)\n    //warn(message)\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "TestCase",
        "prefix": "TestCase",
        "scope": "source.qml"
    },
    {
        "body": "Text{\n    //advance: size\n    //baseUrl: url\n    //bottomPadding: real\n    //clip: bool\n    //color: color\n    //contentHeight: real\n    //contentWidth: real\n    //effectiveHorizontalAlignment: enumeration\n    //elide: enumeration\n    //font.bold: bool\n    //font.capitalization: enumeration\n    //font.family: string\n    //font.hintingPreference: enumeration\n    //font.italic: bool\n    //font.kerning: bool\n    //font.letterSpacing: real\n    //font.pixelSize: int\n    //font.pointSize: real\n    //font.preferShaping: bool\n    //font.strikeout: bool\n    //font.styleName: string\n    //font.underline: bool\n    //font.weight: enumeration\n    //font.wordSpacing: real\n    //fontInfo.bold: bool\n    //fontInfo.family: string\n    //fontInfo.italic: bool\n    //fontInfo.pixelSize: string\n    //fontInfo.pointSize: real\n    //fontInfo.styleName: string\n    //fontInfo.weight: int\n    //fontSizeMode: enumeration\n    //horizontalAlignment: enumeration\n    //hoveredLink: string\n    //leftPadding: real\n    //lineCount: int\n    //lineHeight: real\n    //lineHeightMode: enumeration\n    //linkColor: color\n    //maximumLineCount: int\n    //minimumPixelSize: int\n    //minimumPointSize: int\n    //padding: real\n    //renderType: enumeration\n    //rightPadding: real\n    //style: enumeration\n    //styleColor: color\n    //text: string\n    //textFormat: enumeration\n    //topPadding: real\n    //truncated: bool\n    //verticalAlignment: enumeration\n    //wrapMode: enumeration\n    //doLayout()(obsolete)\n    //forceLayout()\n    //lineLaidOut(objectline)\n    //linkActivated(stringlink)\n    //linkAt(realx,realy)\n    //linkHovered(stringlink)\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "Text",
        "prefix": "Text",
        "scope": "source.qml"
    },
    {
        "body": "TextArea{\n    //background: Item\n    //bottomInset: real\n    //onFlickable : Textar: { }\n    //focusReason: enumeration\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //leftInset: real\n    //palette: palette\n    //placeholderText: string\n    //placeholderTextColor: color\n    //rightInset: real\n    //topInset: real\n    //pressAndHold(MouseEventevent)\n    //pressed(MouseEventevent)\n    //released(MouseEventevent)\n    //activeFocusOnPress: bool\n    //baseUrl: url\n    //bottomPadding: real\n    //canPaste: bool\n    //canRedo: bool\n    //canUndo: bool\n    //color: color\n    //contentHeight: real\n    //contentWidth: real\n    //cursorDelegate: Component\n    //cursorPosition: int\n    //cursorRectangle: rectangle\n    //cursorVisible: bool\n    //effectiveHorizontalAlignment: enumeration\n    //font.bold: bool\n    //font.capitalization: enumeration\n    //font.family: string\n    //font.hintingPreference: enumeration\n    //font.italic: bool\n    //font.kerning: bool\n    //font.letterSpacing: real\n    //font.pixelSize: int\n    //font.pointSize: real\n    //font.preferShaping: bool\n    //font.strikeout: bool\n    //font.styleName: string\n    //font.underline: bool\n    //font.weight: enumeration\n    //font.wordSpacing: real\n    //horizontalAlignment: enumeration\n    //hoveredLink: string\n    //inputMethodComposing: bool\n    //inputMethodHints: enumeration\n    //leftPadding: real\n    //length: int\n    //lineCount: int\n    //mouseSelectionMode: enumeration\n    //overwriteMode: bool\n    //padding: real\n    //persistentSelection: bool\n    //preeditText: string\n    //readOnly: bool\n    //renderType: enumeration\n    //rightPadding: real\n    //selectByKeyboard: bool\n    //selectByMouse: bool\n    //selectedText: string\n    //selectedTextColor: color\n    //selectionColor: color\n    //selectionEnd: int\n    //selectionStart: int\n    //tabStopDistance: real\n    //text: string\n    //textDocument: TextDocument\n    //textFormat: enumeration\n    //textMargin: real\n    //topPadding: real\n    //verticalAlignment: enumeration\n    //wrapMode: enumeration\n    //append()\n    //clear()\n    //copy()\n    //cut()\n    //deselect()\n    //editingFinished()\n    //getFormattedText()\n    //getText()\n    //insert()\n    //isRightToLeft()\n    //linkActivated()\n    //linkAt()\n    //linkHovered()\n    //moveCursorSelection()\n    //paste()\n    //positionAt()\n    //positionToRectangle()\n    //redo()\n    //remove()\n    //select()\n    //selectAll()\n    //selectWord()\n    //undo()\n}",
        "description": "TextArea",
        "prefix": "TextArea",
        "scope": "source.qml"
    },
    {
        "body": "TextAreaStyle{\n    //backgroundColor: color\n    //control: TextArea\n    //font: font\n    //renderType: int\n    //selectedTextColor: color\n    //selectionColor: color\n    //textColor: color\n    //textMargin: real\n    //control: ScrollView\n    //corner: Component\n    //decrementControl: Component\n    //frame: Component\n    //handle: Component\n    //handleOverlap: int\n    //incrementControl: Component\n    //minimumHandleLength: int\n    //scrollBarBackground: Component\n    //scrollToClickedPosition: bool\n    //transientScrollBars: bool\n}",
        "description": "TextAreaStyle",
        "prefix": "TextAreaStyle",
        "scope": "source.qml"
    },
    {
        "body": "TextEdit{\n    //activeFocusOnPress: bool\n    //baseUrl: url\n    //bottomPadding: real\n    //canPaste: bool\n    //canRedo: bool\n    //canUndo: bool\n    //color: color\n    //contentHeight: real\n    //contentWidth: real\n    //cursorDelegate: Component\n    //cursorPosition: int\n    //cursorRectangle: rectangle\n    //cursorVisible: bool\n    //effectiveHorizontalAlignment: enumeration\n    //font.bold: bool\n    //font.capitalization: enumeration\n    //font.family: string\n    //font.hintingPreference: enumeration\n    //font.italic: bool\n    //font.kerning: bool\n    //font.letterSpacing: real\n    //font.pixelSize: int\n    //font.pointSize: real\n    //font.preferShaping: bool\n    //font.strikeout: bool\n    //font.styleName: string\n    //font.underline: bool\n    //font.weight: enumeration\n    //font.wordSpacing: real\n    //horizontalAlignment: enumeration\n    //hoveredLink: string\n    //inputMethodComposing: bool\n    //inputMethodHints: enumeration\n    //leftPadding: real\n    //length: int\n    //lineCount: int\n    //mouseSelectionMode: enumeration\n    //overwriteMode: bool\n    //padding: real\n    //persistentSelection: bool\n    //preeditText: string\n    //readOnly: bool\n    //renderType: enumeration\n    //rightPadding: real\n    //selectByKeyboard: bool\n    //selectByMouse: bool\n    //selectedText: string\n    //selectedTextColor: color\n    //selectionColor: color\n    //selectionEnd: int\n    //selectionStart: int\n    //tabStopDistance: real\n    //text: string\n    //textDocument: TextDocument\n    //textFormat: enumeration\n    //textMargin: real\n    //topPadding: real\n    //verticalAlignment: enumeration\n    //wrapMode: enumeration\n    //clear()\n    //copy()\n    //cut()\n    //deselect()\n    //editingFinished()\n    //insert(intposition,stringtext)\n    //isRightToLeft(intstart,intend)\n    //linkActivated(stringlink)\n    //linkAt(realx,realy)\n    //linkHovered(stringlink)\n    //moveCursorSelection(intposition,SelectionModemode=TextEdit.SelectCharacters)\n    //paste()\n    //redo()\n    //select(intstart,intend)\n    //selectAll()\n    //selectWord()\n    //undo()\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "TextEdit",
        "prefix": "TextEdit",
        "scope": "source.qml"
    },
    {
        "body": "TextField{\n    //background: Item\n    //bottomInset: real\n    //focusReason: enumeration\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //leftInset: real\n    //palette: palette\n    //placeholderText: string\n    //placeholderTextColor: color\n    //rightInset: real\n    //topInset: real\n    //pressAndHold(MouseEventevent)\n    //pressed(MouseEventevent)\n    //released(MouseEventevent)\n    //acceptableInput: bool\n    //activeFocusOnPress: bool\n    //autoScroll: bool\n    //bottomPadding: real\n    //canPaste: bool\n    //canRedo: bool\n    //canUndo: bool\n    //color: color\n    //contentHeight: real\n    //contentWidth: real\n    //cursorDelegate: Component\n    //cursorPosition: int\n    //cursorRectangle: rectangle\n    //cursorVisible: bool\n    //displayText: string\n    //echoMode: enumeration\n    //effectiveHorizontalAlignment: enumeration\n    //font.bold: bool\n    //font.capitalization: enumeration\n    //font.family: string\n    //font.hintingPreference: enumeration\n    //font.italic: bool\n    //font.kerning: bool\n    //font.letterSpacing: real\n    //font.pixelSize: int\n    //font.pointSize: real\n    //font.preferShaping: bool\n    //font.strikeout: bool\n    //font.styleName: string\n    //font.underline: bool\n    //font.weight: enumeration\n    //font.wordSpacing: real\n    //horizontalAlignment: enumeration\n    //inputMask: string\n    //inputMethodComposing: bool\n    //inputMethodHints: enumeration\n    //leftPadding: real\n    //length: int\n    //maximumLength: int\n    //mouseSelectionMode: enumeration\n    //overwriteMode: bool\n    //padding: real\n    //passwordCharacter: string\n    //passwordMaskDelay: int\n    //persistentSelection: bool\n    //preeditText: string\n    //readOnly: bool\n    //renderType: enumeration\n    //rightPadding: real\n    //selectByMouse: bool\n    //selectedText: string\n    //selectedTextColor: color\n    //selectionColor: color\n    //selectionEnd: int\n    //selectionStart: int\n    //text: string\n    //topPadding: real\n    //validator: Validator\n    //verticalAlignment: enumeration\n    //wrapMode: enumeration\n    //accepted()\n    //clear()\n    //copy()\n    //cut()\n    //deselect()\n    //editingFinished()\n    //ensureVisible()\n    //getText()\n    //insert()\n    //isRightToLeft()\n    //moveCursorSelection()\n    //paste()\n    //positionAt()\n    //positionToRectangle()\n    //redo()\n    //remove()\n    //select()\n    //selectAll()\n    //selectWord()\n    //textEdited()\n    //undo()\n}",
        "description": "TextField",
        "prefix": "TextField",
        "scope": "source.qml"
    },
    {
        "body": "TextFieldStyle{\n    //background: Component\n    //control: TextField\n    //font: font\n    //passwordCharacter: string\n    //placeholderTextColor: color\n    //renderType: int\n    //selectedTextColor: color\n    //selectionColor: color\n    //textColor: color\n}",
        "description": "TextFieldStyle",
        "prefix": "TextFieldStyle",
        "scope": "source.qml"
    },
    {
        "body": "TextInput{\n    //acceptableInput: bool\n    //activeFocusOnPress: bool\n    //autoScroll: bool\n    //bottomPadding: real\n    //canPaste: bool\n    //canRedo: bool\n    //canUndo: bool\n    //color: color\n    //contentHeight: real\n    //contentWidth: real\n    //cursorDelegate: Component\n    //cursorPosition: int\n    //cursorRectangle: rectangle\n    //cursorVisible: bool\n    //displayText: string\n    //echoMode: enumeration\n    //effectiveHorizontalAlignment: enumeration\n    //font.bold: bool\n    //font.capitalization: enumeration\n    //font.family: string\n    //font.hintingPreference: enumeration\n    //font.italic: bool\n    //font.kerning: bool\n    //font.letterSpacing: real\n    //font.pixelSize: int\n    //font.pointSize: real\n    //font.preferShaping: bool\n    //font.strikeout: bool\n    //font.styleName: string\n    //font.underline: bool\n    //font.weight: enumeration\n    //font.wordSpacing: real\n    //horizontalAlignment: enumeration\n    //inputMask: string\n    //inputMethodComposing: bool\n    //inputMethodHints: enumeration\n    //leftPadding: real\n    //length: int\n    //maximumLength: int\n    //mouseSelectionMode: enumeration\n    //overwriteMode: bool\n    //padding: real\n    //passwordCharacter: string\n    //passwordMaskDelay: int\n    //persistentSelection: bool\n    //preeditText: string\n    //readOnly: bool\n    //renderType: enumeration\n    //rightPadding: real\n    //selectByMouse: bool\n    //selectedText: string\n    //selectedTextColor: color\n    //selectionColor: color\n    //selectionEnd: int\n    //selectionStart: int\n    //text: string\n    //topPadding: real\n    //validator: Validator\n    //verticalAlignment: enumeration\n    //wrapMode: enumeration\n    //accepted()\n    //clear()\n    //copy()\n    //cut()\n    //deselect()\n    //editingFinished()\n    //ensureVisible(intposition)\n    //insert(intposition,stringtext)\n    //isRightToLeft(intstart,intend)\n    //moveCursorSelection(intposition,SelectionModemode=TextInput.SelectCharacters)\n    //paste()\n    //redo()\n    //remove(intstart,intend)\n    //select(intstart,intend)\n    //selectAll()\n    //selectWord()\n    //textEdited()\n    //undo()\n    //\n    //\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt(realx,realy)\n    //forceActiveFocus()\n    //forceActiveFocus(Qt: : FocusReasonreason)\n    //nextItemInFocusChain(boolforward)\n    //objectName: string\n}",
        "description": "TextInput",
        "prefix": "TextInput",
        "scope": "source.qml"
    },
    {
        "body": "TextMetrics{\n    //advanceWidth: real\n    //boundingRect: rect\n    //elide: enumeration\n    //elideWidth: real\n    //elidedText: string\n    //font: font\n    //height: real\n    //text: string\n    //tightBoundingRect: rect\n    //width: real\n}",
        "description": "TextMetrics",
        "prefix": "TextMetrics",
        "scope": "source.qml"
    },
    {
        "body": "TextureImage{\n    //errorString(): string\n    //height(): int\n    //imageState(): TextureImageState\n    //src(): url\n    //width(): int\n}",
        "description": "TextureImage",
        "prefix": "TextureImage",
        "scope": "source.qml"
    },
    {
        "body": "TextureImageFactory{\n    \n}",
        "description": "TextureImageFactory",
        "prefix": "TextureImageFactory",
        "scope": "source.qml"
    },
    {
        "body": "Theme3D{\n    //ambientLightStrength: real\n    //backgroundColor: color\n    //backgroundEnabled: bool\n    //baseColors: list<ThemeColor>\n    //baseGradients: list<ColorGradient>\n    //colorStyle: Theme3D.ColorStyle\n    //font: font\n    //gridEnabled: bool\n    //gridLineColor: color\n    //highlightLightStrength: real\n    //labelBackgroundColor: color\n    //labelBackgroundEnabled: bool\n    //labelBorderEnabled: bool\n    //labelTextColor: color\n    //lightColor: color\n    //lightStrength: real\n    //multiHighlightColor: color\n    //multiHighlightGradient: ColorGradient\n    //singleHighlightColor: color\n    //singleHighlightGradient: ColorGradient\n    //type: Theme3D.Theme\n    //windowColor: color\n}",
        "description": "Theme3D",
        "prefix": "Theme3D",
        "scope": "source.qml"
    },
    {
        "body": "ThemeColor{\n    //color: color\n}",
        "description": "ThemeColor",
        "prefix": "ThemeColor",
        "scope": "source.qml"
    },
    {
        "body": "ThresholdMask{\n    //cached: bool\n    //maskSource: variant\n    //source: variant\n    //spread: real\n    //threshold: real\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "ThresholdMask",
        "prefix": "ThresholdMask",
        "scope": "source.qml"
    },
    {
        "body": "ThumbnailToolBar{\n    //iconicLivePreviewSource: url\n    //iconicNotificationsEnabled: bool\n    //iconicThumbnailSource: url\n    //iconicLivePreviewRequested()\n    //iconicThumbnailRequested()\n}",
        "description": "ThumbnailToolBar",
        "prefix": "ThumbnailToolBar",
        "scope": "source.qml"
    },
    {
        "body": "ThumbnailToolButton{\n    //dismissOnClick: bool\n    //enabled: bool\n    //flat: bool\n    //iconSource: url\n    //interactive: bool\n    //tooltip: string\n    //visible: bool\n    //clicked()\n}",
        "description": "ThumbnailToolButton",
        "prefix": "ThumbnailToolButton",
        "scope": "source.qml"
    },
    {
        "body": "TiltReading{\n    //xRotation: qreal\n    //yRotation: qreal\n    //timestamp: quint64\n}",
        "description": "TiltReading",
        "prefix": "TiltReading",
        "scope": "source.qml"
    },
    {
        "body": "TiltSensor{\n    //calibrate()\n    //active: bool\n    //alwaysOn: bool\n    //availableDataRates: list<Range>\n    //axesOrientationMode: Sensor: : AxesOrientationMode\n    //bufferSize: int\n    //busy: bool\n    //connectedToBackend: bool\n    //currentOrientation: int\n    //dataRate: int\n    //description: string\n    //efficientBufferSize: int\n    //error: int\n    //identifier: string\n    //maxBufferSize: int\n    //outputRange: int\n    //outputRanges: list<OutputRange>\n    //reading: SensorReading\n    //skipDuplicates: bool\n    //type: string\n    //userOrientation: int\n}",
        "description": "TiltSensor",
        "prefix": "TiltSensor",
        "scope": "source.qml"
    },
    {
        "body": "TimeoutTransition{\n    //timeout: int\n    //senderObject: QObject\n    //signal: string\n    //sourceState: bool\n    //targetState: QAbstractState\n    //targetStates: list<QAbstractState>\n    //triggered()\n}",
        "description": "TimeoutTransition",
        "prefix": "TimeoutTransition",
        "scope": "source.qml"
    },
    {
        "body": "Timer{\n    //interval: int\n    //repeat: bool\n    //running: bool\n    //triggeredOnStart: bool\n    //restart()\n    //start()\n    //stop()\n    //triggered()\n}",
        "description": "Timer",
        "prefix": "Timer",
        "scope": "source.qml"
    },
    {
        "body": "ToggleButton{\n    //isDefault: bool\n    //menu: Menu\n}",
        "description": "ToggleButton",
        "prefix": "ToggleButton",
        "scope": "source.qml"
    },
    {
        "body": "ToggleButtonStyle{\n    //checkedDropShadowColor: color\n    //checkedGradient: Gradient\n    //control: ToggleButton\n    //inactiveGradient: Gradient\n    //uncheckedDropShadowColor: color\n    //uncheckedGradient: Gradient\n}",
        "description": "ToggleButtonStyle",
        "prefix": "ToggleButtonStyle",
        "scope": "source.qml"
    },
    {
        "body": "ToolBar{\n    //position: enumeration\n    //contentChildren: list<Item>\n    //contentData: list<Object>\n    //contentHeight: real\n    //contentWidth: real\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "ToolBar",
        "prefix": "ToolBar",
        "scope": "source.qml"
    },
    {
        "body": "ToolBarStyle{\n    //background: Component\n    //menuButton: Component\n    //panel: Component\n}",
        "description": "ToolBarStyle",
        "prefix": "ToolBarStyle",
        "scope": "source.qml"
    },
    {
        "body": "ToolButton{\n    //flat: bool\n    //highlighted: bool\n    //action: Action\n    //autoExclusive: bool\n    //autoRepeat: bool\n    //autoRepeatDelay: int\n    //autoRepeatInterval: int\n    //checkable: bool\n    //checked: bool\n    //display: enumeration\n    //down: bool\n    //icon.color: color\n    //icon.height: int\n    //icon.name: string\n    //icon.source: url\n    //icon.width: int\n    //implicitIndicatorHeight: real\n    //implicitIndicatorWidth: real\n    //indicator: Item\n    //pressX: real\n    //pressY: real\n    //pressed: bool\n    //text: string\n    //canceled()\n    //clicked()\n    //doubleClicked()\n    //pressAndHold()\n    //pressed()\n    //released()\n    //toggled()\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "ToolButton",
        "prefix": "ToolButton",
        "scope": "source.qml"
    },
    {
        "body": "ToolSeparator{\n    //horizontal: bool\n    //orientation: enumeration\n    //vertical: bool\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "ToolSeparator",
        "prefix": "ToolSeparator",
        "scope": "source.qml"
    },
    {
        "body": "ToolTip{\n    //onDelay : I: { }\n    //delay: int\n    //onText : Stri: { }\n    //text: string\n    //onTimeout : I: { }\n    //timeout: int\n    //onTooltip : Toolt: { }\n    //onVisible : Bo: { }\n    //onVoid Hide: { }\n    //onVoid Show(String Text,  Int Timeout = -: { }\n    //activeFocus: bool\n    //anchors.centerIn: Object\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomMargin: real\n    //bottomPadding: real\n    //clip: bool\n    //closePolicy: enumeration\n    //contentChildren: list<Item>\n    //contentData: list<Object>\n    //contentHeight: real\n    //contentItem: Item\n    //contentWidth: real\n    //dim: bool\n    //enabled: bool\n    //enter: Transition\n    //exit: Transition\n    //focus: bool\n    //font: font\n    //height: real\n    //horizontalPadding: real\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //leftInset: real\n    //leftMargin: real\n    //leftPadding: real\n    //locale: Locale\n    //margins: real\n    //mirrored: bool\n    //modal: bool\n    //opacity: real\n    //opened: bool\n    //padding: real\n    //palette: palette\n    //parent: Item\n    //rightInset: real\n    //rightMargin: real\n    //rightPadding: real\n    //scale: real\n    //spacing: real\n    //topInset: real\n    //topMargin: real\n    //topPadding: real\n    //transformOrigin: enumeration\n    //verticalPadding: real\n    //visible: bool\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //forceActiveFocus(reason=Qt.OtherFocusReason)\n    //objectName: string\n}",
        "description": "ToolTip",
        "prefix": "ToolTip",
        "scope": "source.qml"
    },
    {
        "body": "Torch{\n    //enabled: bool\n    //power: int\n}",
        "description": "Torch",
        "prefix": "Torch",
        "scope": "source.qml"
    },
    {
        "body": "TorusGeometry{\n    //indexAttribute: Attribute\n    //minorRadius: real\n    //normalAttribute: Attribute\n    //positionAttribute: Attribute\n    //radius: real\n    //rings: int\n    //slices: int\n    //texCoordAttribute: Attribute\n}",
        "description": "TorusGeometry",
        "prefix": "TorusGeometry",
        "scope": "source.qml"
    },
    {
        "body": "TorusMesh{\n    //minorRadius: real\n    //radius: real\n    //rings: int\n    //slices: int\n}",
        "description": "TorusMesh",
        "prefix": "TorusMesh",
        "scope": "source.qml"
    },
    {
        "body": "TouchEventSequence{\n    \n}",
        "description": "TouchEventSequence",
        "prefix": "TouchEventSequence",
        "scope": "source.qml"
    },
    {
        "body": "TouchInputHandler3D{\n    //rotationEnabled: bool\n    //selectionEnabled: bool\n    //zoomAtTargetEnabled: bool\n    //zoomEnabled: bool\n}",
        "description": "TouchInputHandler3D",
        "prefix": "TouchInputHandler3D",
        "scope": "source.qml"
    },
    {
        "body": "TouchPoint{\n    //area: rectangle(obsolete)\n    //ellipseDiameters: size\n    //pointId: int\n    //pressed: bool\n    //pressure: real\n    //previousX: real\n    //previousY: real\n    //rotation: real\n    //sceneX: real\n    //sceneY: real\n    //startX: real\n    //startY: real\n    //uniqueId: PointingDeviceUniqueId\n    //velocity: vector2d\n    //x: real\n    //y: real\n}",
        "description": "TouchPoint",
        "prefix": "TouchPoint",
        "scope": "source.qml"
    },
    {
        "body": "Trace{\n    //canceled: bool\n    //channels: list<strings>\n    //final: bool\n    //opacity: qreal\n    //traceId: int\n}",
        "description": "Trace",
        "prefix": "Trace",
        "scope": "source.qml"
    },
    {
        "body": "TraceCanvas{\n    //autoDestroy: bool\n    //autoDestroyDelay: int\n    //renderFunction: var\n    //trace: var\n    //renderSmoothedLine()\n    //available: bool\n    //canvasSize: size\n    //canvasWindow: rect(obsolete)\n    //context: object\n    //contextType: string\n    //renderStrategy: enumeration\n    //renderTarget: enumeration\n    //tileSize: size(obsolete)\n    //cancelRequestAnimationFrame()\n    //getContext()\n    //imageLoaded()\n    //isImageError()\n    //isImageLoaded()\n    //isImageLoading()\n    //loadImage()\n    //markDirty()\n    //paint()\n    //painted()\n    //requestAnimationFrame()\n    //requestPaint()\n    //save()\n    //toDataURL()\n    //unloadImage()\n}",
        "description": "TraceCanvas",
        "prefix": "TraceCanvas",
        "scope": "source.qml"
    },
    {
        "body": "TraceInputArea{\n    //boundingBox: rect\n    //canvasType: string\n    //horizontalRulers: var\n    //patternRecognitionMode: int\n    //verticalRulers: var\n    //maximumTouchPoints: int\n    //minimumTouchPoints: int\n    //mouseEnabled: bool\n    //touchPoints: list<TouchPoint>\n    //canceled()\n    //gestureStarted()\n    //pressed()\n    //released()\n    //touchUpdated()\n    //updated()\n}",
        "description": "TraceInputArea",
        "prefix": "TraceInputArea",
        "scope": "source.qml"
    },
    {
        "body": "TraceInputKey{\n    //boundingBox: alias\n    //canvasType: alias\n    //horizontalRulers: alias\n    //patternRecognitionMode: alias\n    //verticalRulers: alias\n    //weight: real\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "TraceInputKey",
        "prefix": "TraceInputKey",
        "scope": "source.qml"
    },
    {
        "body": "TraceInputKeyPanel{\n    //control: Item\n    //traceMargins: real\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "TraceInputKeyPanel",
        "prefix": "TraceInputKeyPanel",
        "scope": "source.qml"
    },
    {
        "body": "TrailEmitter{\n    //emitHeight: real\n    //emitRatePerParticle: real\n    //emitShape: Shape\n    //emitWidth: real\n    //follow: string\n    //velocityFromMovement: qreal\n    //emitFollowParticles(Arrayparticles,Particlefollowed)\n}",
        "description": "TrailEmitter",
        "prefix": "TrailEmitter",
        "scope": "source.qml"
    },
    {
        "body": "Transaction{\n    //errorString: string\n    //failureReason: enum\n    //orderId: string\n    //product: object\n    //status: enum\n    //timestamp: time\n}",
        "description": "Transaction",
        "prefix": "Transaction",
        "scope": "source.qml"
    },
    {
        "body": "Transform{\n    //matrix: matrix4x4\n    //rotation: quaternion\n    //rotationX: real\n    //rotationY: real\n    //rotationZ: real\n    //scale: real\n    //scale3D: vector3d\n    //translation: vector3d\n    //isShareable: bool\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "Transform",
        "prefix": "Transform",
        "scope": "source.qml"
    },
    {
        "body": "Transition{\n    //animations: list<Animation>\n    //enabled: bool\n    //from: string\n    //reversible: bool\n    //running: bool\n    //to: string\n}",
        "description": "Transition",
        "prefix": "Transition",
        "scope": "source.qml"
    },
    {
        "body": "Translate{\n    //x: real\n    //y: real\n}",
        "description": "Translate",
        "prefix": "Translate",
        "scope": "source.qml"
    },
    {
        "body": "TreeView{\n    //currentIndex: QModelIndex\n    //itemDelegate: Component\n    //model: QAbstractItemModel\n    //rootIndex: QModelIndex\n    //section.criteria: enumeration\n    //section.delegate: Component\n    //section.labelPositioning: enumeration\n    //section.property: string\n    //selection: ItemSelectionModel\n    //activated(QModelIndexindex)\n    //clicked(QModelIndexindex)\n    //collapsed(QModelIndexindex)\n    //doubleClicked(QModelIndexindex)\n    //expanded(QModelIndexindex)\n    //pressAndHold(QModelIndexindex)\n    //contentItem: Item\n    //flickableItem: Item\n    //frameVisible: bool\n    //highlightOnFocus: bool\n    //horizontalScrollBarPolicy: enumeration\n    //style: Component\n    //verticalScrollBarPolicy: enumeration\n    //viewport: Item\n}",
        "description": "TreeView",
        "prefix": "TreeView",
        "scope": "source.qml"
    },
    {
        "body": "TreeViewStyle{\n    //branchDelegate: Component\n    //control: TreeView\n    //headerDelegate: Component\n    //indentation: int\n    //itemDelegate: Component\n    //rowDelegate: Component\n    //control: ScrollView\n    //corner: Component\n    //decrementControl: Component\n    //frame: Component\n    //handle: Component\n    //handleOverlap: int\n    //incrementControl: Component\n    //minimumHandleLength: int\n    //scrollBarBackground: Component\n    //scrollToClickedPosition: bool\n    //transientScrollBars: bool\n}",
        "description": "TreeViewStyle",
        "prefix": "TreeViewStyle",
        "scope": "source.qml"
    },
    {
        "body": "Tumbler{\n    //count: int\n    //currentIndex: int\n    //currentItem: Item\n    //delegate: Component\n    //onDisplacement : Re: { }\n    //model: variant\n    //moving: bool\n    //onTumbler : Tumbl: { }\n    //visibleItemCount: int\n    //wrap: bool\n    //availableHeight: real\n    //availableWidth: real\n    //background: Item\n    //bottomInset: real\n    //bottomPadding: real\n    //contentItem: Item\n    //focusPolicy: enumeration\n    //focusReason: enumeration\n    //font: font\n    //horizontalPadding: real\n    //hoverEnabled: bool\n    //hovered: bool\n    //implicitBackgroundHeight: real\n    //implicitBackgroundWidth: real\n    //implicitContentHeight: real\n    //implicitContentWidth: real\n    //leftInset: real\n    //leftPadding: real\n    //locale: Locale\n    //mirrored: bool\n    //padding: real\n    //palette: palette\n    //rightInset: real\n    //rightPadding: real\n    //spacing: real\n    //topInset: real\n    //topPadding: real\n    //verticalPadding: real\n    //visualFocus: bool\n    //wheelEnabled: bool\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "Tumbler",
        "prefix": "Tumbler",
        "scope": "source.qml"
    },
    {
        "body": "TumblerColumn{\n    //activeFocus: bool\n    //columnForeground: Component\n    //currentIndex: int\n    //delegate: Component\n    //highlight: Component\n    //model: var\n    //role: string\n    //visible: bool\n    //width: real\n    //objectName: string\n}",
        "description": "TumblerColumn",
        "prefix": "TumblerColumn",
        "scope": "source.qml"
    },
    {
        "body": "TumblerStyle{\n    //background: Component\n    //columnForeground: Component\n    //control: Tumbler\n    //delegate: Component\n    //foreground: Component\n    //frame: Component\n    //highlight: Component\n    //separator: Component\n    //spacing: real(obsolete)\n    //visibleItemCount: int\n}",
        "description": "TumblerStyle",
        "prefix": "TumblerStyle",
        "scope": "source.qml"
    },
    {
        "body": "Turbulence{\n    //noiseSource: url\n    //strength: real\n    //enabled: bool\n    //groups: list<string>\n    //once: bool\n    //shape: Shape\n    //system: ParticleSystem\n    //whenCollidingWith: list<string>\n    //affected(realx,realy)\n}",
        "description": "Turbulence",
        "prefix": "Turbulence",
        "scope": "source.qml"
    },
    {
        "body": "UniformAnimator{\n    //uniform: string\n    //duration: int\n    //easing.amplitude: real\n    //easing.bezierCurve: list<real>\n    //easing.overshoot: real\n    //easing.period: real\n    //easing.type: enumeration\n    //from: real\n    //target: QtQuick: : Item\n    //to: real\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "UniformAnimator",
        "prefix": "UniformAnimator",
        "scope": "source.qml"
    },
    {
        "body": "User{\n    //name: string\n    //user: QPlaceUser\n    //userId: string\n}",
        "description": "User",
        "prefix": "User",
        "scope": "source.qml"
    },
    {
        "body": "VBarModelMapper{\n    //firstBarSetColumn: int\n    //firstRow: int\n    //lastBarSetColumn: int\n    //model: SomeModel\n    //rowCount: int\n    //series: AbstractBarSeries\n}",
        "description": "VBarModelMapper",
        "prefix": "VBarModelMapper",
        "scope": "source.qml"
    },
    {
        "body": "VBoxPlotModelMapper{\n    //firstBoxSetColumn: int\n    //firstRow: int\n    //lastBoxSetColumn: int\n    //model: SomeModel\n    //rowCount: int\n    //series: AbstractBarSeries\n}",
        "description": "VBoxPlotModelMapper",
        "prefix": "VBoxPlotModelMapper",
        "scope": "source.qml"
    },
    {
        "body": "VCandlestickModelMapper{\n    //closeRow: int\n    //firstSetColumn: int\n    //highRow: int\n    //lastSetColumn: int\n    //lowRow: int\n    //model: QAbstractItemModel\n    //openRow: int\n    //series: CandlestickSeries\n    //timestampRow: int\n}",
        "description": "VCandlestickModelMapper",
        "prefix": "VCandlestickModelMapper",
        "scope": "source.qml"
    },
    {
        "body": "VPieModelMapper{\n    //firstRow: int\n    //labelsColumn: int\n    //model: SomeModel\n    //rowCount: int\n    //series: PieSeries\n    //valuesColumn: int\n}",
        "description": "VPieModelMapper",
        "prefix": "VPieModelMapper",
        "scope": "source.qml"
    },
    {
        "body": "VXYModelMapper{\n    //firstRow: int\n    //model: SomeModel\n    //rowCount: int\n    //series: XYSeries\n    //xColumn: int\n    //yColumn: int\n}",
        "description": "VXYModelMapper",
        "prefix": "VXYModelMapper",
        "scope": "source.qml"
    },
    {
        "body": "ValueAxis{\n    //labelFormat: real\n    //max: real\n    //min: real\n    //minorTickCount: int\n    //tickAnchor: real\n    //tickCount: int\n    //tickInterval: real\n    //tickType: enumeration\n    //applyNiceNumbers()\n    //rangeChanged(stringmin,stringmax)\n    //alignment: alignment\n    //color: color\n    //gridLineColor: color\n    //gridVisible: bool\n    //labelsAngle: int\n    //labelsColor: color\n    //labelsFont: font\n    //labelsVisible: bool\n    //lineVisible: bool\n    //minorGridLineColor: color\n    //minorGridVisible: bool\n    //orientation: Qt.Orientation\n    //reverse: alignment\n    //shadesBorderColor: color\n    //shadesColor: color\n    //shadesVisible: bool\n    //titleFont: font\n    //titleText: string\n    //titleVisible: bool\n    //visible: bool\n}",
        "description": "ValueAxis",
        "prefix": "ValueAxis",
        "scope": "source.qml"
    },
    {
        "body": "ValueAxis3D{\n    //formatter: ValueAxis3DFormatter\n    //labelFormat: string\n    //reversed: bool\n    //segmentCount: int\n    //subSegmentCount: int\n    //autoAdjustRange: bool\n    //labelAutoRotation: real\n    //labels: list\n    //max: real\n    //min: real\n    //orientation: AbstractAxis3D.AxisOrientation\n    //title: string\n    //titleFixed: bool\n    //titleVisible: bool\n    //type: AbstractAxis3D.AxisType\n}",
        "description": "ValueAxis3D",
        "prefix": "ValueAxis3D",
        "scope": "source.qml"
    },
    {
        "body": "ValueAxis3DFormatter{\n    \n}",
        "description": "ValueAxis3DFormatter",
        "prefix": "ValueAxis3DFormatter",
        "scope": "source.qml"
    },
    {
        "body": "Vector3dAnimation{\n    //from: vector3d\n    //to: vector3d\n    //duration: int\n    //easing.amplitude: real\n    //easing.bezierCurve: list<real>\n    //easing.overshoot: real\n    //easing.period: real\n    //easing.type: enumeration\n    //exclude: list<Object>\n    //from: variant\n    //properties: string\n    //property: string\n    //target: Object\n    //targets: list<Object>\n    //to: variant\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "Vector3dAnimation",
        "prefix": "Vector3dAnimation",
        "scope": "source.qml"
    },
    {
        "body": "VertexBlendAnimation{\n    //interpolator: real\n    //morphTargets: list<MorphTarget>\n    //target: GeometryRenderer\n    //targetName: string\n    //targetPositions: list<real>\n    //animationName: string\n    //animationType: enumeration\n    //duration: real\n    //position: real\n}",
        "description": "VertexBlendAnimation",
        "prefix": "VertexBlendAnimation",
        "scope": "source.qml"
    },
    {
        "body": "Video{\n    //audioRole: enumeration\n    //autoLoad: bool\n    //autoPlay: bool\n    //availability: enumeration\n    //bufferProgress: real\n    //customAudioRole: string\n    //duration: int\n    //error: enumeration\n    //errorString: string\n    //fillMode: enumeration\n    //hasAudio: bool\n    //hasVideo: bool\n    //loops: int\n    //metaData: object\n    //muted: bool\n    //notifyInterval: int\n    //orientation: int\n    //playbackRate: real\n    //playbackState: enumeration\n    //playlist: Playlist\n    //position: int\n    //seekable: bool\n    //source: url\n    //status: enumeration\n    //volume: real\n    //pause()\n    //paused()\n    //play()\n    //playing()\n    //seek(offset)\n    //stop()\n    //stopped()\n    //supportedAudioRoles()\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "Video",
        "prefix": "Video",
        "scope": "source.qml"
    },
    {
        "body": "VideoOutput{\n    //autoOrientation: bool\n    //contentRect: rectangle\n    //fillMode: enumeration\n    //filters: list<object>\n    //orientation: int\n    //source: variant\n    //sourceRect: rectangle\n    //QPointFmapNormalizedPointToItem(constQPointF&point)\n}",
        "description": "VideoOutput",
        "prefix": "VideoOutput",
        "scope": "source.qml"
    },
    {
        "body": "ViewTransition{\n    //onDestination : Poi: { }\n    //onIndex : I: { }\n    //onItem : It: { }\n    //onTargetindexes : Li: { }\n    //onTargetitems : Li: { }\n}",
        "description": "ViewTransition",
        "prefix": "ViewTransition",
        "scope": "source.qml"
    },
    {
        "body": "Viewport{\n    //gamma: rect\n    //normalizedRect: rect\n    //childNodes: list<Node>\n    //data: list<QtQml: : QtObject>\n    //propertyTrackingOverrides: QJSValue\n}",
        "description": "Viewport",
        "prefix": "Viewport",
        "scope": "source.qml"
    },
    {
        "body": "VirtualKeyboardSettings{\n    //activeLocales: list<string>\n    //availableLocales: list<string>\n    //fullScreenMode: bool\n    //locale: string\n    //styleName: string\n    //wordCandidateList.alwaysVisible: bool\n    //wordCandidateList.autoHideDelay: int\n}",
        "description": "VirtualKeyboardSettings",
        "prefix": "VirtualKeyboardSettings",
        "scope": "source.qml"
    },
    {
        "body": "Wander{\n    //affectedParameter: AffectableParameter\n    //pace: real\n    //xVariance: real\n    //yVariance: real\n    //enabled: bool\n    //groups: list<string>\n    //once: bool\n    //shape: Shape\n    //system: ParticleSystem\n    //whenCollidingWith: list<string>\n    //affected(realx,realy)\n}",
        "description": "Wander",
        "prefix": "Wander",
        "scope": "source.qml"
    },
    {
        "body": "WavefrontMesh{\n    //lastError: enumeration\n    //projectionPlaneV: vector3d\n    //projectionPlaneW: vector3d\n    //source: url\n}",
        "description": "WavefrontMesh",
        "prefix": "WavefrontMesh",
        "scope": "source.qml"
    },
    {
        "body": "WaylandClient{\n    //compositor: WaylandCompositor\n    //groupId: int\n    //processId: int\n    //userId: int\n}",
        "description": "WaylandClient",
        "prefix": "WaylandClient",
        "scope": "source.qml"
    },
    {
        "body": "WaylandCompositor{\n    //created: bool\n    //defaultOutput: WaylandOutput\n    //defaultSeat: WaylandSeat\n    //extensions: list\n    //retainedSelection: bool\n    //socketName: string\n    //useHardwareIntegrationExtension: bool\n    //addSocketDescriptor(fd)\n    //destroyClient(client)\n    //destroyClientForSurface(surface)\n}",
        "description": "WaylandCompositor",
        "prefix": "WaylandCompositor",
        "scope": "source.qml"
    },
    {
        "body": "WaylandHardwareLayer{\n    //stackingLevel: int\n}",
        "description": "WaylandHardwareLayer",
        "prefix": "WaylandHardwareLayer",
        "scope": "source.qml"
    },
    {
        "body": "WaylandOutput{\n    //automaticFrameCallback: bool\n    //availableGeometry: rect\n    //compositor: WaylandCompositor\n    //geometry: rect\n    //manufacturer: string\n    //model: string\n    //physicalSize: size\n    //position: point\n    //scaleFactor: int\n    //sizeFollowsWindow: bool\n    //subpixel: enum\n    //transform: enum\n    //window: Window\n}",
        "description": "WaylandOutput",
        "prefix": "WaylandOutput",
        "scope": "source.qml"
    },
    {
        "body": "WaylandQuickItem{\n    //compositor: WaylandCompositor\n    //focusOnClick: bool\n    //origin: enum\n    //paintEnabled: bool\n    //sizeFollowsSurface: bool\n    //subsurfaceHandler: object\n    //surface: WaylandSurface\n    //setPrimary()\n}",
        "description": "WaylandQuickItem",
        "prefix": "WaylandQuickItem",
        "scope": "source.qml"
    },
    {
        "body": "WaylandSeat{\n    \n}",
        "description": "WaylandSeat",
        "prefix": "WaylandSeat",
        "scope": "source.qml"
    },
    {
        "body": "WaylandSurface{\n    //bufferScale: size\n    //client: WaylandClient\n    //contentOrientation: enum\n    //cursorSurface: bool\n    //hasContent: bool\n    //origin: enum\n    //size: size\n    //childAdded(WaylandSurfacechild)\n    //surfaceDestroyed()\n}",
        "description": "WaylandSurface",
        "prefix": "WaylandSurface",
        "scope": "source.qml"
    },
    {
        "body": "WaylandView{\n    //allowDiscardFrontBuffer: bool\n    //bufferLocked: bool\n    //output: WaylandOutput\n    //surface: WaylandSurface\n}",
        "description": "WaylandView",
        "prefix": "WaylandView",
        "scope": "source.qml"
    },
    {
        "body": "Waypoint{\n    //altitude: real\n    //bearing: real\n    //coordinate: coordinate\n    //latitude: real\n    //longitude: real\n    //metadata: VariantMap\n}",
        "description": "Waypoint",
        "prefix": "Waypoint",
        "scope": "source.qml"
    },
    {
        "body": "WebChannel{\n    //onId : Qstri: { }\n    //registeredObjects: QQmlListProperty<QObject>\n    //transports: QQmlListProperty<QObject>\n}",
        "description": "WebChannel",
        "prefix": "WebChannel",
        "scope": "source.qml"
    },
    {
        "body": "WebEngine{\n    //defaultProfile: WebEngineProfile\n    //settings: WebEngineSettings\n}",
        "description": "WebEngine",
        "prefix": "WebEngine",
        "scope": "source.qml"
    },
    {
        "body": "WebEngineAction{\n    //enabled: bool\n    //iconName: string\n    //text: int\n}",
        "description": "WebEngineAction",
        "prefix": "WebEngineAction",
        "scope": "source.qml"
    },
    {
        "body": "WebEngineCertificateError{\n    //description: string\n    //error: enumeration\n    //overridable: bool\n    //url: url\n}",
        "description": "WebEngineCertificateError",
        "prefix": "WebEngineCertificateError",
        "scope": "source.qml"
    },
    {
        "body": "WebEngineDownloadItem{\n    //id: int\n    //interruptReason: enumeration\n    //interruptReasonString: string\n    //isFinished: bool\n    //isPaused: bool\n    //isSavePageDownload: bool\n    //mimeType: string\n    //path: string\n    //receivedBytes: int\n    //savePageFormat: enumeration\n    //state: enumeration\n    //totalBytes: int\n    //type: enumeration(obsolete)\n    //view: bool\n}",
        "description": "WebEngineDownloadItem",
        "prefix": "WebEngineDownloadItem",
        "scope": "source.qml"
    },
    {
        "body": "WebEngineHistory{\n    //backItems: WebEngineHistoryListModel\n    //forwardItems: WebEngineHistoryListModel\n    //items: WebEngineHistoryListModel\n}",
        "description": "WebEngineHistory",
        "prefix": "WebEngineHistory",
        "scope": "source.qml"
    },
    {
        "body": "WebEngineHistoryListModel{\n    \n}",
        "description": "WebEngineHistoryListModel",
        "prefix": "WebEngineHistoryListModel",
        "scope": "source.qml"
    },
    {
        "body": "WebEngineLoadRequest{\n    //errorCode: int\n    //errorDomain: enumeration\n    //errorString: string\n    //status: enumeration\n    //url: url\n}",
        "description": "WebEngineLoadRequest",
        "prefix": "WebEngineLoadRequest",
        "scope": "source.qml"
    },
    {
        "body": "WebEngineNavigationRequest{\n    //action: enumeration\n    //isMainFrame: bool\n    //navigationType: enumeration\n    //url: url\n}",
        "description": "WebEngineNavigationRequest",
        "prefix": "WebEngineNavigationRequest",
        "scope": "source.qml"
    },
    {
        "body": "WebEngineNewViewRequest{\n    //destination: WebEngineView: : NewViewDestination\n    //requestedUrl: QUrl\n    //userInitiated: bool\n    //openIn(WebEngineViewview)\n}",
        "description": "WebEngineNewViewRequest",
        "prefix": "WebEngineNewViewRequest",
        "scope": "source.qml"
    },
    {
        "body": "WebEngineProfile{\n    //cachePath: string\n    //httpAcceptLanguage: string\n    //httpCacheMaximumSize: int\n    //httpCacheType: enumeration\n    //httpUserAgent: string\n    //offTheRecord: bool\n    //persistentCookiesPolicy: enumeration\n    //persistentStoragePath: string\n    //spellCheckEnabled: bool\n    //spellCheckLanguages: list<string>\n    //storageName: string\n    //userScripts: list<WebEngineScript>\n    //downloadFinished(WebEngineDownloadItemdownload)\n    //downloadRequested(WebEngineDownloadItemdownload)\n}",
        "description": "WebEngineProfile",
        "prefix": "WebEngineProfile",
        "scope": "source.qml"
    },
    {
        "body": "WebEngineScript{\n    //injectionPoint: enumeration\n    //name: string\n    //runOnSubframes: int\n    //sourceCode: string\n    //sourceUrl: url\n    //worldId: enumeration\n}",
        "description": "WebEngineScript",
        "prefix": "WebEngineScript",
        "scope": "source.qml"
    },
    {
        "body": "WebEngineSettings{\n    //accelerated2dCanvasEnabled: bool\n    //allowGeolocationOnInsecureOrigins: bool\n    //allowRunningInsecureContent: bool\n    //allowWindowActivationFromJavaScript: bool\n    //autoLoadIconsForPage: bool\n    //autoLoadImages: bool\n    //defaultTextEncoding: string\n    //dnsPrefetchEnabled: bool\n    //errorPageEnabled: bool\n    //focusOnNavigationEnabled: bool\n    //fullscreenSupportEnabled: bool\n    //hyperlinkAuditingEnabled: bool\n    //javascriptCanAccessClipboard: bool\n    //javascriptCanOpenWindows: bool\n    //javascriptCanPaste: bool\n    //javascriptEnabled: bool\n    //linksIncludedInFocusChain: bool\n    //localContentCanAccessFileUrls: bool\n    //localContentCanAccessRemoteUrls: bool\n    //localStorageEnabled: bool\n    //playbackRequiresUserGesture: bool\n    //pluginsEnabled: bool\n    //printElementBackgrounds: bool\n    //screenCaptureEnabled: bool\n    //showScrollBars: bool\n    //spatialNavigationEnabled: bool\n    //touchIconsEnabled: bool\n    //unknownUrlSchemePolicy: WebEngineSettings: : UnknownUrlSchemePolicy\n    //webGLEnabled: bool\n    //webRTCPublicInterfacesOnly: bool\n}",
        "description": "WebEngineSettings",
        "prefix": "WebEngineSettings",
        "scope": "source.qml"
    },
    {
        "body": "WebEngineView{\n    //ErrorDomain: enumeration\n    //Feature: enumeration\n    //FindFlags: enumeration\n    //JavaScriptConsoleMessageLevel: enumeration\n    //LoadStatus: enumeration\n    //NewViewDestination: enumeration\n    //PrintedPageOrientation: enumeration\n    //PrintedPageSizeId: enumeration\n    //RenderProcessTerminationStatus: enumeration\n    //WebAction: enumeration\n    //activeFocusOnPress: bool\n    //audioMuted: bool\n    //backgroundColor: bool\n    //canGoBack: bool\n    //canGoForward: bool\n    //contentsSize: size\n    //devToolsView: WebEngineView\n    //icon: url\n    //inspectedView: WebEngineView\n    //isFullScreen: bool\n    //loadProgress: int\n    //loading: bool\n    //navigationHistory: WebEngineHistory\n    //profile: WebEngineProfile\n    //recentlyAudible: bool\n    //scrollPosition: point\n    //settings: WebEngineSettings\n    //title: string\n    //url: url\n    //userScripts: list<WebEngineScript>\n    //webChannel: QQmlWebChannel\n    //webChannelWorld: int\n    //zoomFactor: real\n    //activeFocusOnPressChanged(boolactiveFocusOnPress)\n    //audioMutedChanged(boolmuted)\n    //authenticationDialogRequested(AuthenticationDialogRequestrequest)\n    //backgroundColorChanged()\n    //certificateError(WebEngineCertificateErrorerror)\n    //colorDialogRequested(ColorDialogRequestrequest)\n    //contextMenuRequested(ContextMenuRequestrequest)\n    //featurePermissionRequested(urlsecurityOrigin,Featurefeature)\n    //fileDialogRequested(FileDialogRequestrequest)\n    //formValidationMessageRequested(FormValidationMessageRequestrequest)(obsolete)\n    //fullScreenRequested(FullScreenRequestrequest)\n    //geometryChangeRequested(rectgeometry,rectframeGeometry)\n    //javaScriptConsoleMessage(JavaScriptConsoleMessageLevellevel,stringmessage,intlineNumber,stringsourceID)\n    //javaScriptDialogRequested(JavaScriptDialogRequestrequest)\n    //linkHovered(urlhoveredUrl)\n    //loadingChanged(WebEngineLoadRequestloadRequest)\n    //navigationRequested(WebEngineNavigationRequestrequest)\n    //newViewRequested(WebEngineNewViewRequestrequest)\n    //pdfPrintingFinished(stringfilePath,boolsuccess)\n    //printRequest()\n    //quotaRequested(QuotaRequestrequest)\n    //recentlyAudibleChanged(boolrecentlyAudible)\n    //registerProtocolHandlerRequested(RegisterProtocolHandlerRequestrequest)\n    //renderProcessTerminated(RenderProcessTerminationStatusterminationStatus,intexitCode)\n    //wasRecentlyAudibleChanged(boolwasRecentlyAudible)\n    //windowCloseRequested()\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "WebEngineView",
        "prefix": "WebEngineView",
        "scope": "source.qml"
    },
    {
        "body": "WebSocket{\n    //active: bool\n    //errorString: QString\n    //status: Status\n    //url: QUrl\n    //binaryMessageReceived(QStringmessage)\n    //statusChanged(Statusstatus)\n    //textMessageReceived(QStringmessage)\n}",
        "description": "WebSocket",
        "prefix": "WebSocket",
        "scope": "source.qml"
    },
    {
        "body": "WebSocketServer{\n    //accept: bool\n    //errorString: QString\n    //host: QString\n    //listen: bool\n    //name: QString\n    //port: int\n    //url: QUrl\n    //clientConnected(WebSocketwebSocket)\n}",
        "description": "WebSocketServer",
        "prefix": "WebSocketServer",
        "scope": "source.qml"
    },
    {
        "body": "WebView{\n    //canGoBack: bool\n    //canGoForward: bool\n    //loadProgress: int\n    //loading: bool\n    //title: string\n    //url: url\n    //loadingChanged(WebViewLoadRequestloadRequest)\n}",
        "description": "WebView",
        "prefix": "WebView",
        "scope": "source.qml"
    },
    {
        "body": "WebViewLoadRequest{\n    //errorString: string\n    //status: enumeration\n    //url: url\n}",
        "description": "WebViewLoadRequest",
        "prefix": "WebViewLoadRequest",
        "scope": "source.qml"
    },
    {
        "body": "WheelEvent{\n    //accepted: bool\n    //angleDelta: Point\n    //buttons: int\n    //modifiers: Modifiers\n    //x: int\n    //y: int\n}",
        "description": "WheelEvent",
        "prefix": "WheelEvent",
        "scope": "source.qml"
    },
    {
        "body": "Window{\n    //onActive : Bo: { }\n    //active: bool\n    //onActivefocusitem : It: { }\n    //activeFocusItem: Item\n    //color: color\n    //contentItem: Item\n    //onContentitem : It: { }\n    //contentOrientation: Qt: : ScreenOrientation\n    //data: list<Object>\n    //flags: Qt: : WindowFlags\n    //height: int\n    //onHeight : I: { }\n    //maximumHeight: int\n    //maximumWidth: int\n    //minimumHeight: int\n    //minimumWidth: int\n    //modality: Qt: : WindowModality\n    //opacity: real\n    //screen: variant\n    //title: string\n    //onVisibility : Qwindow::Visibili: { }\n    //visibility: QWindow: : Visibility\n    //visible: bool\n    //width: int\n    //onWidth : I: { }\n    //onWindow : Wind: { }\n    //x: int\n    //y: int\n    //alert(intmsec)\n    //close()\n    //closing(CloseEventclose)\n    //hide()\n    //lower()\n    //raise()\n    //requestActivate()\n    //show()\n    //showFullScreen()\n    //showMaximized()\n    //showMinimized()\n    //showNormal()\n}",
        "description": "Window",
        "prefix": "Window",
        "scope": "source.qml"
    },
    {
        "body": "WlShell{\n    \n}",
        "description": "WlShell",
        "prefix": "WlShell",
        "scope": "source.qml"
    },
    {
        "body": "WlShellSurface{\n    //className: string\n    //shell: WlShell\n    //surface: WaylandSurface\n    //title: string\n    //windowType: enum\n}",
        "description": "WlShellSurface",
        "prefix": "WlShellSurface",
        "scope": "source.qml"
    },
    {
        "body": "WorkerScript{\n    //source: url\n    //message(jsobjectmsg)\n    //sendMessage(jsobjectmessage)\n}",
        "description": "WorkerScript",
        "prefix": "WorkerScript",
        "scope": "source.qml"
    },
    {
        "body": "XAnimator{\n    //duration: int\n    //easing.amplitude: real\n    //easing.bezierCurve: list<real>\n    //easing.overshoot: real\n    //easing.period: real\n    //easing.type: enumeration\n    //from: real\n    //target: QtQuick: : Item\n    //to: real\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "XAnimator",
        "prefix": "XAnimator",
        "scope": "source.qml"
    },
    {
        "body": "XYPoint{\n    //x: real\n    //y: real\n}",
        "description": "XYPoint",
        "prefix": "XYPoint",
        "scope": "source.qml"
    },
    {
        "body": "XYSeries{\n    //axisAngular: AbstractAxis\n    //axisRadial: AbstractAxis\n    //axisX: AbstractAxis\n    //axisXTop: AbstractAxis\n    //axisY: AbstractAxis\n    //axisYRight: AbstractAxis\n    //color: color\n    //pointLabelsClipping: bool\n    //pointLabelsColor: font\n    //pointLabelsFont: font\n    //pointLabelsFormat: string\n    //pointLabelsVisible: bool\n    //pointsVisible: bool\n    //append(realx,realy)\n    //clicked(pointpoint)\n    //doubleClicked(pointpoint)\n    //hovered(pointpoint,boolstate)\n    //insert(intindex,realx,realy)\n    //pointAdded(intindex)\n    //pointRemoved(intindex)\n    //pointReplaced(intindex)\n    //pointsRemoved(intindex,intcount)\n    //pointsReplaced()\n    //pressed(pointpoint)\n    //released(pointpoint)\n    //remove(realx,realy)\n    //remove(intindex)\n    //removePoints(intindex,intcount)\n    //replace(realoldX,realoldY,realnewX,realnewY)\n    //name: string\n    //opacity: real\n    //type: enumeration\n    //useOpenGL: bool\n    //visible: bool\n}",
        "description": "XYSeries",
        "prefix": "XYSeries",
        "scope": "source.qml"
    },
    {
        "body": "XdgDecorationManagerV1{\n    //preferredMode: string\n}",
        "description": "XdgDecorationManagerV1",
        "prefix": "XdgDecorationManagerV1",
        "scope": "source.qml"
    },
    {
        "body": "XdgPopup{\n    //anchorEdges: enumeration\n    //anchorRect: rect\n    //configuredGeometry: rect\n    //flipConstraints: enumeration\n    //gravityEdges: rect\n    //offset: point\n    //parentXdgSurface: XdgSurface\n    //positionerSize: size\n    //resizeConstraints: enumeration\n    //slideConstraints: enumeration\n    //unconstrainedPosition: point\n    //xdgSurface: XdgSurface\n}",
        "description": "XdgPopup",
        "prefix": "XdgPopup",
        "scope": "source.qml"
    },
    {
        "body": "XdgPopupV5{\n    //parentSurface: WaylandSurface\n    //position: point\n    //shell: XdgShellV5\n    //surface: WaylandSurface\n}",
        "description": "XdgPopupV5",
        "prefix": "XdgPopupV5",
        "scope": "source.qml"
    },
    {
        "body": "XdgPopupV6{\n    //anchorEdges: enumeration\n    //anchorRect: rect\n    //configuredGeometry: rect\n    //flipConstraints: enumeration\n    //gravityEdges: rect\n    //offset: point\n    //parentXdgSurface: XdgSurfaceV6\n    //positionerSize: size\n    //resizeConstraints: enumeration\n    //slideConstraints: enumeration\n    //unconstrainedPosition: point\n    //xdgSurface: XdgSurfaceV6\n}",
        "description": "XdgPopupV6",
        "prefix": "XdgPopupV6",
        "scope": "source.qml"
    },
    {
        "body": "XdgShell{\n    //pong(intserial)\n    //popupCreated(XdgPopuppopup,XdgSurfacexdgSurface)\n    //toplevelCreated(XdgTopleveltoplevel,XdgSurfacexdgSurface)\n    //xdgSurfaceCreated(XdgSurfacexdgSurface)\n}",
        "description": "XdgShell",
        "prefix": "XdgShell",
        "scope": "source.qml"
    },
    {
        "body": "XdgShellV5{\n    \n}",
        "description": "XdgShellV5",
        "prefix": "XdgShellV5",
        "scope": "source.qml"
    },
    {
        "body": "XdgShellV6{\n    //pong(intserial)\n    //popupCreated(XdgPopupV6popup,XdgSurfaceV6xdgSurface)\n    //toplevelCreated(XdgToplevelV6toplevel,XdgSurfaceV6xdgSurface)\n    //xdgSurfaceCreated(XdgSurfaceV6xdgSurface)\n}",
        "description": "XdgShellV6",
        "prefix": "XdgShellV6",
        "scope": "source.qml"
    },
    {
        "body": "XdgSurface{\n    //popup: XdgPopup\n    //shell: XdgShell\n    //surface: WaylandSurface\n    //toplevel: XdgToplevel\n    //windowGeometry: rect\n    //windowType: enum\n}",
        "description": "XdgSurface",
        "prefix": "XdgSurface",
        "scope": "source.qml"
    },
    {
        "body": "XdgSurfaceV5{\n    //parentSurface: XdgSurfaceV5\n    //shell: XdgShellV5\n    //surface: WaylandSurface\n    //title: string\n    //windowType: enumeration\n    //setTopLevel()\n    //setTransient()\n}",
        "description": "XdgSurfaceV5",
        "prefix": "XdgSurfaceV5",
        "scope": "source.qml"
    },
    {
        "body": "XdgSurfaceV6{\n    //popup: XdgPopupV6\n    //shell: XdgShellV6\n    //surface: WaylandSurface\n    //toplevel: XdgToplevelV6\n    //windowGeometry: rect\n    //windowType: enum\n}",
        "description": "XdgSurfaceV6",
        "prefix": "XdgSurfaceV6",
        "scope": "source.qml"
    },
    {
        "body": "XdgToplevel{\n    //activated: bool\n    //appId: string\n    //decorationMode: enumeration\n    //fullscreen: bool\n    //maxSize: size\n    //maximized: bool\n    //minSize: size\n    //parentToplevel: XdgToplevel\n    //resizing: bool\n    //title: string\n    //xdgSurface: XdgSurface\n}",
        "description": "XdgToplevel",
        "prefix": "XdgToplevel",
        "scope": "source.qml"
    },
    {
        "body": "XdgToplevelV6{\n    //activated: bool\n    //appId: string\n    //fullscreen: bool\n    //maxSize: size\n    //maximized: bool\n    //minSize: size\n    //parentToplevel: XdgToplevelV6\n    //resizing: bool\n    //title: string\n}",
        "description": "XdgToplevelV6",
        "prefix": "XdgToplevelV6",
        "scope": "source.qml"
    },
    {
        "body": "XmlListModel{\n    //count: int\n    //namespaceDeclarations: string\n    //progress: real\n    //query: string\n    //roles: list<XmlRole>\n    //source: url\n    //status: enumeration\n    //xml: string\n    //errorString()\n    //reload()\n}",
        "description": "XmlListModel",
        "prefix": "XmlListModel",
        "scope": "source.qml"
    },
    {
        "body": "XmlRole{\n    //isKey: bool\n    //name: string\n    //query: string\n}",
        "description": "XmlRole",
        "prefix": "XmlRole",
        "scope": "source.qml"
    },
    {
        "body": "YAnimator{\n    //duration: int\n    //easing.amplitude: real\n    //easing.bezierCurve: list<real>\n    //easing.overshoot: real\n    //easing.period: real\n    //easing.type: enumeration\n    //from: real\n    //target: QtQuick: : Item\n    //to: real\n    //alwaysRunToEnd: bool\n    //loops: int\n    //paused: bool\n    //running: bool\n    //complete()\n    //finished()\n    //pause()\n    //restart()\n    //resume()\n    //start()\n    //started()\n    //stop()\n    //stopped()\n}",
        "description": "YAnimator",
        "prefix": "YAnimator",
        "scope": "source.qml"
    },
    {
        "body": "ZoomBlur{\n    //cached: bool\n    //horizontalOffset: real\n    //length: real\n    //samples: int\n    //source: variant\n    //transparentBorder: bool\n    //verticalOffset: real\n    //activeFocus: bool\n    //activeFocusOnTab: bool\n    //anchors.alignWhenCentered: bool\n    //anchors.baseline: AnchorLine\n    //anchors.baselineOffset: real\n    //anchors.bottom: AnchorLine\n    //anchors.bottomMargin: real\n    //anchors.centerIn: Item\n    //anchors.fill: Item\n    //anchors.horizontalCenter: AnchorLine\n    //anchors.horizontalCenterOffset: real\n    //anchors.left: AnchorLine\n    //anchors.leftMargin: real\n    //anchors.margins: real\n    //anchors.right: AnchorLine\n    //anchors.rightMargin: real\n    //anchors.top: AnchorLine\n    //anchors.topMargin: real\n    //anchors.verticalCenter: AnchorLine\n    //anchors.verticalCenterOffset: real\n    //antialiasing: bool\n    //baselineOffset: int\n    //children: list<Item>\n    //childrenRect.height: real\n    //childrenRect.width: real\n    //childrenRect.x: real\n    //childrenRect.y: real\n    //clip: bool\n    //containmentMask: QObject*\n    //data: list<Object>\n    //enabled: bool\n    //focus: bool\n    //height: real\n    //implicitHeight: real\n    //implicitWidth: real\n    //layer.effect: Component\n    //layer.enabled: bool\n    //layer.format: enumeration\n    //layer.mipmap: bool\n    //layer.samplerName: string\n    //layer.samples: enumeration\n    //layer.smooth: bool\n    //layer.sourceRect: rect\n    //layer.textureMirroring: enumeration\n    //layer.textureSize: size\n    //layer.wrapMode: enumeration\n    //opacity: real\n    //parent: Item\n    //resources: list<Object>\n    //rotation: real\n    //scale: real\n    //smooth: bool\n    //state: string\n    //states: list<State>\n    //transform: list<Transform>\n    //transformOrigin: enumeration\n    //transitions: list<Transition>\n    //visible: bool\n    //visibleChildren: list<Item>\n    //width: real\n    //x: real\n    //y: real\n    //z: real\n    //childAt()\n    //contains()\n    //forceActiveFocus()\n    //forceActiveFocus()\n    //grabToImage()\n    //mapFromGlobal()\n    //mapFromItem()\n    //mapFromItem()\n    //mapToGlobal()\n    //mapToItem()\n    //mapToItem()\n    //nextItemInFocusChain()\n}",
        "description": "ZoomBlur",
        "prefix": "ZoomBlur",
        "scope": "source.qml"
    }
]

const qtQuickBody = [
{
        "body": "\nproperty alias ${1:name}: ${2:val}\n",
        "description": "QML property alias",
        "prefix": "alias",
        "scope": "source.qml"
    },
    {
        "body": "\nanchors.${1}: ${2:parent}.${3}\n",
        "description": "(simple)",
        "prefix": "anchors",
        "scope": "source.qml"
    },
    {
        "body": "\nanchors.left: ${1:parent}.left\nanchors.top: ${1:parent}.top\nanchors.right: ${1:parent}.right\nanchors.bottom: ${1:parent}.bottom\n",
        "description": "(all sides)",
        "prefix": "anchors",
        "scope": "source.qml"
    },
    {
        "body": "\nanchors.centerIn: ${1:parent}\n",
        "description": "centerIn",
        "prefix": "anchors.centerIn",
        "scope": "source.qml"
    },
    {
        "body": "\nanchors.fill: ${1:parent}\n",
        "description": "fill",
        "prefix": "anchors.fill",
        "scope": "source.qml"
    },
    {
        "body": "\nanchors.horizontalCenter: ${1:parent}.horizontalCenter\n",
        "description": "horizontal",
        "prefix": "anchors.horizontalCenter",
        "scope": "source.qml"
    },
    {
        "body": "\nanchors.margins: ${1:0}\n",
        "description": "margins",
        "prefix": "anchors.margins",
        "scope": "source.qml"
    },
    {
        "body": "\nanchors.verticalCenter: ${1:parent}.verticalCenter\n",
        "description": "vertical",
        "prefix": "anchors.verticalCenter",
        "scope": "source.qml"
    },
    {
        "body": "bool{\n    \n}",
        "description": "bool",
        "prefix": "bool",
        "scope": "source.qml"
    },
   {
        "body": "color{\n    \n}",
        "description": "color",
        "prefix": "color",
        "scope": "source.qml"
    },
    {
        "body": "coordinate{\n    \n}",
        "description": "coordinate",
        "prefix": "coordinate",
        "scope": "source.qml"
    },
    {
        "body": "date{\n    \n}",
        "description": "date",
        "prefix": "date",
        "scope": "source.qml"
    },
    {
        "body": "double{\n    \n}",
        "description": "double",
        "prefix": "double",
        "scope": "source.qml"
    },
    {
        "body": "enumeration{\n    \n}",
        "description": "enumeration",
        "prefix": "enumeration",
        "scope": "source.qml"
    },
    {
        "body": "font{\n    \n}",
        "description": "font",
        "prefix": "font",
        "scope": "source.qml"
    },
    {
        "body": "function ${1:function_name}(${2:argument}) {\n    ${0:// body...}\n}",
        "description": "function() {}",
        "prefix": "function",
        "scope": "source.qml"
    },
    {
        "body": "geocircle{\n    \n}",
        "description": "geocircle",
        "prefix": "geocircle",
        "scope": "source.qml"
    },
    {
        "body": "geopath{\n    \n}",
        "description": "geopath",
        "prefix": "geopath",
        "scope": "source.qml"
    },
    {
        "body": "geopolygon{\n    \n}",
        "description": "geopolygon",
        "prefix": "geopolygon",
        "scope": "source.qml"
    },
    {
        "body": "georectangle{\n    \n}",
        "description": "georectangle",
        "prefix": "georectangle",
        "scope": "source.qml"
    },
    {
        "body": "geoshape{\n    \n}",
        "description": "geoshape",
        "prefix": "geoshape",
        "scope": "source.qml"
    },
    {
        "body": "id: ",
        "description": "id",
        "prefix": "id",
        "scope": "source.qml"
    },
    {
        "body": "int{\n    \n}",
        "description": "int",
        "prefix": "int",
        "scope": "source.qml"
    },
    {
        "body": "\nLayout.fillWidth: ${1:true}\nLayout.fillHeight: ${2:true}\n",
        "description": "(all)",
        "prefix": "layout",
        "scope": "source.qml"
    },
    {
        "body": "\nLayout.fillHeight: ${1:true}\n",
        "description": "height",
        "prefix": "layout.fillHeight",
        "scope": "source.qml"
    },
    {
        "body": "\nLayout.fillWidth: ${1:true}\n",
        "description": "width",
        "prefix": "layout.fillWidth",
        "scope": "source.qml"
    },
    {
        "body": "list{\n    \n}",
        "description": "list",
        "prefix": "list",
        "scope": "source.qml"
    },
    {
        "body": "matrix4x4{\n    \n}",
        "description": "matrix4x4",
        "prefix": "matrix4x4",
        "scope": "source.qml"
    },
    {
        "body": "mediaplayer-qml-dynamic{\n    \n}",
        "description": "mediaplayer-qml-dynamic",
        "prefix": "mediaplayer-qml-dynamic",
        "scope": "source.qml"
    },
    {
        "body": "palette{\n    \n}",
        "description": "palette",
        "prefix": "palette",
        "scope": "source.qml"
    },
    {
        "body": "point{\n    \n}",
        "description": "point",
        "prefix": "point",
        "scope": "source.qml"
    },
    {
        "body": "property ${1:var} ${2:name}\n",
        "description": "QML property",
        "prefix": "property",
        "scope": "source.qml"
    },
    {
        "body": "quaternion{\n    \n}",
        "description": "quaternion",
        "prefix": "quaternion",
        "scope": "source.qml"
    },
    {
        "body": "real{\n    \n}",
        "description": "real",
        "prefix": "real",
        "scope": "source.qml"
    },
    {
        "body": "rect{\n    \n}",
        "description": "rect",
        "prefix": "rect",
        "scope": "source.qml"
    },
    {
        "body": "size{\n    \n}",
        "description": "size",
        "prefix": "size",
        "scope": "source.qml"
    },
    {
        "body": "string{\n    \n}",
        "description": "string",
        "prefix": "string",
        "scope": "source.qml"
    },
    {
        "body": "url{\n    \n}",
        "description": "url",
        "prefix": "url",
        "scope": "source.qml"
    },
    {
        "body": "var{\n    \n}",
        "description": "var",
        "prefix": "var",
        "scope": "source.qml"
    },
    {
        "body": "variant{\n    \n}",
        "description": "variant",
        "prefix": "variant",
        "scope": "source.qml"
    },
    {
        "body": "vector2d{\n    \n}",
        "description": "vector2d",
        "prefix": "vector2d",
        "scope": "source.qml"
    },
    {
        "body": "vector3d{\n    \n}",
        "description": "vector3d",
        "prefix": "vector3d",
        "scope": "source.qml"
    },
    {
        "body": "vector4d{\n    \n}",
        "description": "vector4d",
        "prefix": "vector4d",
        "scope": "source.qml"
    }
]