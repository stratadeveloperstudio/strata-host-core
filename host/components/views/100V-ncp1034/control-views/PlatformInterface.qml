import QtQuick 2.12

import "qrc:/js/core_platform_interface.js" as CorePlatformInterface

Item {
    id: platformInterface

    // -------------------------------------------------------------------
    // UI Control States
    //


    // -------------------------------------------------------------------
    // Incoming Notification Messages
    //
    // Define and document incoming notification messages here.
    //
    // The property name *must* match the associated notification value.
    // Sets UI Control State when changed.

    //
    property var control_states : {
        "buck_enabled": true, //true or false (boolean)
        "ldo_enabled": true,  //true or false (boolean)
        "dac_enabled": true,  //true or false (boolean)
        "rt_mode": 0,         //0 (100kHz) or 1 (adjustable) (integer)
        "ss_set": 2,          //1 = 1ms, 2 = 5.5ms, 3 = 11ms, 4 = 15.5ms (integer)
        "vout_set": 12.0,     //float in range 5 - 24
    }

    property var pg_vin: {
        "value": true
    }

    property var pg_vout: {
        "value": true
    }

    property var pg_vcc: {
        "value": true
    }

    property var temp_alert: {
        "value": true
    }

    property var periodic_telemetry: {
        "vin": 60.00,       //Input voltage (VIN) [V] (float 2 decimals)
        "vout": 12.00,      //Ouput voltage (VOUT) [V]  (float 2 decimals)
        "vcc": 12.00,       //VCC voltage (VCC) [V] (float 2 decimals)
        "iin": 0.200,       //Input current (I_IN) [A] (float 3 decimals)
        "iout": 1.000,      //Output current (I_OUT) [A] (float 3 decimals)
        "icc": 5.00,        //VCC current (I_CC) [A] (float 2 decimals)
        "pin": 12.00,       //Input power [W] (float 2 decimals)
        "pout": 12.00,      //Output power [W] (float 2 decimals)
        "eff": 90.0,        //Buck efficiency [%] (float 1 decimal)
        "pvcc": 0.000,      //LDO output power [W] (float 3 decimals)
        "ploss_vcc": 0.000, //LDO power loss [W] (float 3 decimals)
        "board_temp": 23.0, //Board temperature [degC] (float 1 decimal)
        "ldo_temp": 23.0    //LDO temperature [degC] (float 1 decimals)
    }


    // -------------------------------------------------------------------
    // Outgoing Commands
    //
    // Define and document platform commands here.
    //
    // Built-in functions:
    //   update(): sets properties and sends command in one call
    //   set():    can set single or multiple properties before sending to platform
    //   send():   sends current command
    //   show():   console logs current command and properties

    // @command: motor_running_command
    // @description: sends motor running command to platform
    //
    property var get_status_command : ({
                                           "cmd":"get_status",
                                           "payload": { },

                                           update: function () {
                                               CorePlatformInterface.send(this)
                                           },

                                           send: function () { CorePlatformInterface.send(this) },
                                           show: function () { CorePlatformInterface.show(this) }
                                       })


    property var enable_buck : ({
                                    "cmd" : "enable_buck",
                                    "payload": {
                                        "value": true	// default value
                                    },

                                    update: function (value) {
                                        this.set(value)
                                        this.send(this)
                                    },
                                    set: function (value) {
                                        this.payload.value = value
                                    },
                                    send: function () { CorePlatformInterface.send(this) },
                                    show: function () { CorePlatformInterface.show(this) }
                                })

    property var enable_ldo : ({
                                   "cmd" : "enable_ldo",
                                   "payload": {
                                       "value": true	// default value
                                   },

                                   update: function (value) {
                                       this.set(value)
                                       this.send(this)
                                   },
                                   set: function (value) {
                                       this.payload.value = value
                                   },
                                   send: function () { CorePlatformInterface.send(this) },
                                   show: function () { CorePlatformInterface.show(this) }
                               })
    property var enable_dac : ({
                                   "cmd" : "enable_dac",
                                   "payload": {
                                       "value": true	// default value
                                   },

                                   update: function (value) {
                                       this.set(value)
                                       this.send(this)
                                   },
                                   set: function (value) {
                                       this.payload.value = value
                                   },
                                   send: function () { CorePlatformInterface.send(this) },
                                   show: function () { CorePlatformInterface.show(this) }
                               })
    property var set_rt_mode : ({
                                    "cmd" : "set_rt_mode",
                                    "payload": {
                                        "value": 0	// default value
                                    },

                                    update: function (value) {
                                        this.set(value)
                                        this.send(this)
                                    },
                                    set: function (value) {
                                        this.payload.value = value
                                    },
                                    send: function () { CorePlatformInterface.send(this) },
                                    show: function () { CorePlatformInterface.show(this) }
                                })
    property var set_ss : ({
                               "cmd" : "set_ss",
                               "payload": {
                                   "value": 1	// default value
                               },

                               update: function (value) {
                                   this.set(value)
                                   this.send(this)
                               },
                               set: function (value) {
                                   this.payload.value = value
                               },
                               send: function () { CorePlatformInterface.send(this) },
                               show: function () { CorePlatformInterface.show(this) }
                           })

    property var set_vout : ({
                                 "cmd" : "set_vout",
                                 "payload": {
                                     "value": 12.0	// default value
                                 },

                                 update: function (value) {
                                     this.set(value)
                                     this.send(this)
                                 },
                                 set: function (value) {
                                     this.payload.value = value
                                 },
                                 send: function () { CorePlatformInterface.send(this) },
                                 show: function () { CorePlatformInterface.show(this) }
                             })


    // -------------------------------------------------------------------
    // Listens to message notifications coming from CoreInterface.cpp
    // Forward messages to core_platform_interface.js to process

    Connections {
        target: coreInterface
        onNotification: {
            CorePlatformInterface.data_source_handler(payload)
        }
    }
}
