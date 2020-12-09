import QtQuick 2.12
import QtQuick.Controls 2.12
import tech.strata.common 1.0


/******************************************************************
  * File auto-generated by PlatformInterfaceGenerator on 2020-12-07 18:47:40.532 UTC-08:00
******************************************************************/

PlatformInterfaceBase {
    id: platformInterface
    apiVersion: 2

    property alias notifications: notifications
    property alias commands: commands

    /******************************************************************
      * NOTIFICATIONS
    ******************************************************************/

    QtObject {
        id: notifications

        // @notification: my_cmd_simple_periodic
        // @property adc_read: double
        // @property io_read: bool
        // @property random_float: double
        // @property toggle_bool: bool
        property QtObject my_cmd_simple_periodic: QtObject {
            property double adc_read: 0.0
            property bool io_read: false
            property double random_float: 0.0
            property bool toggle_bool: false
        }

    }


    property var my_cmd_simple_periodic : {
        "adc_read":	1,		//in Volts
        "io_read": false,      //in Volts
        "random_float":	0,    	//in mA
        "toggle_bool": false,     	//in mA

    }


    /******************************************************************
      * COMMANDS
    ******************************************************************/

    QtObject {
        id: commands
        // @command my_cmd_simple
        // @property dac: double
        // @property io: bool
        property var my_cmd_simple: ({
            "cmd": "my_cmd_simple",
            "payload": {
                "dac": 0.0,
                "io": false
            },
            update: function (dac,io) {
                this.set(dac,io)
                this.send(this)
            },
            set: function (dac,io) {
                this.payload.dac = dac
                this.payload.io = io
            },
            send: function () { platformInterface.send(this) }
        })

        // @command my_cmd_simple_periodic_update
        // @property interval: int
        // @property run_count: int
        // @property run_state: bool
        property var my_cmd_simple_periodic_update: ({
            "cmd": "my_cmd_simple_periodic_update",
            "payload": {
                "interval": 0,
                "run_count": 0,
                "run_state": false
            },
            update: function (interval,run_count,run_state) {
                this.set(interval,run_count,run_state)
                this.send(this)
            },
            set: function (interval,run_count,run_state) {
                this.payload.interval = interval
                this.payload.run_count = run_count
                this.payload.run_state = run_state
            },
            send: function () { platformInterface.send(this) }
        })

        // @command my_cmd_i2c
        property var my_cmd_i2c: ({
            "cmd": "my_cmd_i2c",
            update: function () {
                this.send(this)
            },
            send: function () { platformInterface.send(this) }
        })

    }
}
