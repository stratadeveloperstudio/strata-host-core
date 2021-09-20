import QtQuick 2.12
import QtQml 2.12
import QtQuick.Layouts 1.12
import tech.strata.sgwidgets 1.0
import tech.strata.signals 1.0

Loader {
    id: payloadDelegateRoot

    property string type: modelData.type
    property string name: modelData.name === undefined ? index : modelData.name
    property var value: modelData.value

    sourceComponent: switch(type) {
                        case sdsModel.platformInterfaceGenerator.TYPE_INT: typeInput
                            break;
                        case sdsModel.platformInterfaceGenerator.TYPE_BOOL: typeBool
                            break;
                        case sdsModel.platformInterfaceGenerator.TYPE_STRING: typeInput
                            break;
                        case sdsModel.platformInterfaceGenerator.TYPE_DOUBLE: typeInput
                            break;
                        case sdsModel.platformInterfaceGenerator.TYPE_ARRAY_STATIC: typeStaticProperty
                            break;
                        case sdsModel.platformInterfaceGenerator.TYPE_OBJECT_STATIC: typeStaticProperty
                            break;
                        case sdsModel.platformInterfaceGenerator.TYPE_ARRAY_DYNAMIC: typeDynamicProperty
                            break;
                        case sdsModel.platformInterfaceGenerator.TYPE_OBJECT_DYNAMIC: typeDynamicProperty
                            break;
                        default: typeInput
    }

    Component {
        id: typeInput

        PayloadInput {
            name: payloadDelegateRoot.name
            type: payloadDelegateRoot.type
            value: payloadDelegateRoot.value

            Component.onCompleted: {
                update()
                initialized = true
            }

            onValueChanged: {
                if (initialized) {
                    update()
                }
            }

            function update() {
                const keyValue = {}
                let defaultVal = value
                switch(type) {
                    case "int": defaultVal = Number(defaultVal)
                        break
                    case "double": defaultVal = Number(defaultVal)
                        break
                }
                keyValue[name] = defaultVal
                debugDelegateRoot.updatePartialPayload(keyValue)
            }
        }
    }

    Component {
        id: typeBool

        PayloadSwitch {
            name: payloadDelegateRoot.name
            value: payloadDelegateRoot.value

            Component.onCompleted: {
                update()
                initialized = true
            }

            onValueChanged: {
                if (initialized) {
                    update()
                }
            }

            function update() {
                const keyValue = {}
                keyValue[name] = value
                debugDelegateRoot.updatePartialPayload(keyValue)
            }
        }
    }

    Component {
        id: typeStaticProperty

        PayloadStaticObjectArray {
            name: payloadDelegateRoot.name
            value: payloadDelegateRoot.value
            isArray: payloadDelegateRoot.type !== sdsModel.platformInterfaceGenerator.TYPE_OBJECT_STATIC
        }
    }

    Component {
        id: typeDynamicProperty

        PayloadDynamicObjectArray {
            name: payloadDelegateRoot.name
            isArray: type !== sdsModel.platformInterfaceGenerator.TYPE_OBJECT_DYNAMIC
        }
    }
}