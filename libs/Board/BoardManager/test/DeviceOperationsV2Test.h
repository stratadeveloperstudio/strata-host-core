#pragma once

#include <rapidjson/document.h>
#include <QObject>
#include <Device/Mock/MockDevice.h>
#include <Device/Operations/Flash.h>

#include "QtTest.h"

namespace strata::device::operation {
class BaseDeviceOperation;
enum class Result : int;
}

class DeviceOperationsV2Test : public QObject
{
    Q_OBJECT

private slots:
    // test init/teardown
    void initTestCase();
    void cleanupTestCase();
    void init();
    void cleanup();

    // tests
    void identifyEmbeddedApplicationTest();
    void identifyAssistedApplicationTest();

    void identifyEmbeddedBootloaderTest();
    void identifyAssistedBootloaderTest();

    void identifyAssistedNoBoardTest();

    void switchToBootloaderAndBackEmbeddedTest();
    void switchToBootloaderAndBackAssistedTest();

    void cancelOperationEmbeddedTest();
    void cancelOperationAssistedTest();

    void noResponseEmbeddedTest();
    void noResponseAssistedTest();

    void invalidValueV2Test();

    void flashFirmwareTest();
    void flashBootloaderTest();

    void flashResendChunkTest();
    void flashMemoryErrorTest();
    void flashInvalidCmdSequenceTest();
    void flashInvalidValueTest();
    void cancelFlashOperationTest();
    void startFlashInvalidTest();

protected slots:
    void handleOperationFinished(strata::device::operation::Result result, int, QString);
    void handleFlashPartialStatus(int status);

private:
    static void printJsonDoc(rapidjson::Document &doc);
    static void verifyMessage(const QByteArray &msg, const QByteArray &expectedJson);

    void connectHandlers(strata::device::operation::BaseDeviceOperation* operation);
    void connectFlashHandlers(strata::device::operation::BaseDeviceOperation* operation);

    std::shared_ptr<strata::device::mock::MockDevice> device_;
    QSharedPointer<strata::device::operation::BaseDeviceOperation> deviceOperation_;
    QSharedPointer<strata::device::operation::Flash> flashOperation_;

    QByteArray dataForChunkSize(int chunkSize);

    void flashPartialStatusTest(strata::device::mock::MockResponse response, int status);

    int operationErrorCount_ = 0;
    int operationFinishedCount_ = 0;
    int operationTimeoutCount_ = 0;
    int operationFailureCount_ = 0;
    int flashPartialStatusCount_ = 0;
};