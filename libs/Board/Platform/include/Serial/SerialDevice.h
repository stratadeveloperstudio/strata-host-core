/*
 * Copyright (c) 2018-2021 onsemi.
 *
 * All rights reserved. This software and/or documentation is licensed by onsemi under
 * limited terms and conditions. The terms and conditions pertaining to the software and/or
 * documentation are available at http://www.onsemi.com/site/pdf/ONSEMI_T&C.pdf (“onsemi Standard
 * Terms and Conditions of Sale, Section 8 Software”).
 */
#ifndef SERIAL_DEVICE_H
#define SERIAL_DEVICE_H

#include <string>
#include <memory>

#include <Device.h>

#include <QSerialPort>
#include <QTimer>

namespace strata::device {

class SerialDevice : public Device
{
    Q_OBJECT
    Q_DISABLE_COPY(SerialDevice)

public:
    typedef std::unique_ptr<QSerialPort> SerialPortPtr;

    /**
     * SerialDevice constructor
     * @param deviceId device ID
     * @param name device name
     * @param openRetries count of retries if 'open()' fails; default = 0, unlimited = -1 (negative number)
     */
    SerialDevice(const QByteArray& deviceId, const QString& name, int openRetries = 0);

    /**
     * SerialDevice constructor
     * @param deviceId device ID
     * @param name device name
     * @param port already existing serial port
     * @param openRetries count of retries if 'open()' fails; default = 0, unlimited = -1 (negative number)
     */
    SerialDevice(const QByteArray& deviceId, const QString& name, SerialPortPtr&& port, int openRetries = 0);

    /**
     * SerialDevice destructor
     */
    ~SerialDevice() override;

    /**
     * Open serial port.
     * Emits opened() on success or deviceError(DeviceFailedToOpen, ...) on failure.
     */
    virtual void open() override;

    /**
     * Close serial port.
     */
    virtual void close() override;

    /**
     * Establish connection with serial port.
     * @param portName system name of serial port
     * @return SerialPortPtr if connection was established and port is open, nullptr otherwise
     */
    static SerialPortPtr establishPort(const QString& portName);

    /**
     * Creates unique hash for serial device, based on port name.
     * Will be used to generate device ID.
     * @param portName system name of serial port.
     * @return unique hash.
     */
    static QByteArray createUniqueHash(const QString& portName);

    /**
     * Send message to serial device. Emits messageSent.
     * @param data message to be written to device
     * @return serial number of the sent message
     */
    virtual unsigned sendMessage(const QByteArray& data) override;

    /**
     * Check if serial device is connected (communication with it is possible - device
     * is plugged to computer and serial port is open).
     * @return true if device is connected, otherwise false
     */
    virtual bool isConnected() const override;

    /**
     * Reset receiving messages from device - clear internal buffer
     * for receiving from serial port (drop any data (parts of message) in it).
     */
    virtual void resetReceiving() override;

    /**
     * Set count of retries if 'open()' fails.
     * @param retries retries count (default = 0), -1 (negative number) = unlimited
     */
    void setOpenRetries(int retries);

private slots:
    void readMessage();
    void handleError(QSerialPort::SerialPortError error);

private:
    void initSerialDevice(int openRetries);

    SerialPortPtr serialPort_;
    std::string readBuffer_;  // std::string keeps allocated memory after clear(), this is why read_buffer_ is std::string

    bool connected_;

    QTimer openRetryTimer_;
    int openRetries_;
};

}  // namespace

#endif
