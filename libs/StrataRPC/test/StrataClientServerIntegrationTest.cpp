#include "StrataClientServerIntegrationTest.h"

using strata::strataRPC::Message;

void StrataClientServerIntegrationTest::waitForZmqMessages(int delay)
{
    QTimer timer;
    timer.setSingleShot(true);
    timer.start(delay);
    do {
        QCoreApplication::processEvents(QEventLoop::WaitForMoreEvents);
    } while (timer.isActive());
}

void StrataClientServerIntegrationTest::testSingleClient()
{
    // variables to verify That handlers got executed.
    bool serverRecviedRegisterClient = false;
    bool serverRecievedUnregisterClient = false;
    bool serverReceivedExampleCommand1 = false;
    bool serverReceivedExampleCommand2 = false;
    bool serverReceivedErrorCommand = false;
    bool serverReceivedPlatformMessage = false;

    bool clientRecievedUnregisterClient = false;
    bool clientReceivedExampleCommand1 = false;
    bool clientReceivedExampleCommand2Response = false;
    bool clientReceivedExampleCommand2Notification = false;
    bool clientReceivedErrorCommand = false;
    bool clientReceivedPlatformMessage = false;
    bool clientReceivedPlatformNotification = false;
    bool clientReceivedServerNotification = false;

    StrataServer server(address_, false);
    StrataClient client(address_);

    // Server handlers
    server.registerHandler("register_client",
                           [&server, &serverRecviedRegisterClient](const Message &message) {
                               serverRecviedRegisterClient = true;
                               server.notifyClient(message, {{"handler_name", "register_client"}},
                                                   strata::strataRPC::ResponseType::Response);
                           });

    server.registerHandler(
        "unregister", [&server, &serverRecievedUnregisterClient](const Message &message) {
            serverRecievedUnregisterClient = true;
            server.notifyClient(message, {}, strata::strataRPC::ResponseType::Response);
        });

    server.registerHandler(
        "example_command_sends_response",
        [&server, &serverReceivedExampleCommand1](const Message &message) {
            serverReceivedExampleCommand1 = true;
            server.notifyClient(message,
                                {{"handler_name", "example_command_sends_response"}, {"test", 1}},
                                strata::strataRPC::ResponseType::Response);
        });

    server.registerHandler("example_command_sends_response_and_notification",
                           [&server, &serverReceivedExampleCommand2](const Message &message) {
                               serverReceivedExampleCommand2 = true;
                               server.notifyClient(message, {{"message_type", "response"}},
                                                   strata::strataRPC::ResponseType::Response);
                               server.notifyClient(message, {{"message_type", "notification"}},
                                                   strata::strataRPC::ResponseType::Notification);
                           });

    server.registerHandler("example_command_sends_error",
                           [&server, &serverReceivedErrorCommand](const Message &message) {
                               serverReceivedErrorCommand = true;
                               server.notifyClient(message, {{"message_type", "error"}},
                                                   strata::strataRPC::ResponseType::Error);
                           });

    server.registerHandler(
        "platform_message", [&server, &serverReceivedPlatformMessage](const Message &message) {
            serverReceivedPlatformMessage = true;
            server.notifyClient(message, {{"device_id", 100}, {"message", {}}},
                                strata::strataRPC::ResponseType::Notification);
            server.notifyClient(message, {{"device_id", 100}, {"message", {}}},
                                strata::strataRPC::ResponseType::PlatformMessage);
        });

    // Client Handlers
    QSignalSpy ClientConnectedSignalSpy(&client, &StrataClient::clientConnected);

    client.registerHandler("unregister", [&clientRecievedUnregisterClient](const QJsonObject &) {
        // This should not be called.
        clientRecievedUnregisterClient = true;
        QFAIL_("Client already disconnected.");
    });

    client.registerHandler(
        "example_command_sends_response_and_notification",
        [&clientReceivedExampleCommand2Notification](const QJsonObject &payload) {
            QVERIFY_(payload.value("message_type") == "notification");
            if (payload.value("message_type") == "notification") {
                clientReceivedExampleCommand2Notification = true;
            }
        });

    // verify messageType
    client.registerHandler("platform_message",
                           [&clientReceivedPlatformMessage](const QJsonObject &) {
                               clientReceivedPlatformMessage = true;
                           });

    client.registerHandler("platform_notification",
                           [&clientReceivedPlatformNotification](const QJsonObject &) {
                               clientReceivedPlatformNotification = true;
                           });

    client.registerHandler("server_notification",
                           [&clientReceivedServerNotification](const QJsonObject &) {
                               clientReceivedServerNotification = true;
                           });

    QVERIFY_(server.initializeServer());
    client.connectServer();
    waitForZmqMessages();

    {
        auto deferredRequest =
            client.sendRequest("example_command_sends_response", {{"key", "value"}});
        QVERIFY_(deferredRequest != nullptr);
        connect(deferredRequest, &strata::strataRPC::DeferredRequest::finishedSuccessfully, this,
                [&clientReceivedExampleCommand1](const QJsonObject &payload) {
                    clientReceivedExampleCommand1 = true;
                    QVERIFY_(true == payload.contains("handler_name"));
                    QVERIFY_(true == payload.value("handler_name").isString());
                    QCOMPARE_(payload.value("handler_name").toString(),
                              "example_command_sends_response");
                });
        waitForZmqMessages();
    }
    {
        auto deferredRequest = client.sendRequest("example_command_sends_response_and_notification",
                                                  {{"key", "value"}});
        QVERIFY_(deferredRequest != nullptr);
        connect(deferredRequest, &strata::strataRPC::DeferredRequest::finishedSuccessfully, this,
                [&clientReceivedExampleCommand2Response](const QJsonObject &payload) {
                    QVERIFY_(payload.value("message_type") == "response");
                    if (payload.value("message_type") == "response") {
                        clientReceivedExampleCommand2Response = true;
                    }
                });
        waitForZmqMessages();
    }
    {
        auto deferredRequest =
            client.sendRequest("example_command_sends_error", {{"key", "value"}});
        QVERIFY_(deferredRequest != nullptr);
        connect(deferredRequest, &strata::strataRPC::DeferredRequest::finishedWithError, this,
                [&clientReceivedErrorCommand](const QJsonObject &payload) {
                    clientReceivedErrorCommand = true;
                    QVERIFY_(true == payload.contains("message_type"));
                    QVERIFY_(true == payload.value("message_type").isString());
                    QCOMPARE_(payload.value("message_type").toString(), "error");
                });
        waitForZmqMessages();
    }
    {
        auto deferredRequest = client.sendRequest(
            "platform_message", {{"device_id", 2020}, {"message", "json string!"}});
        QVERIFY_(deferredRequest != nullptr);
        waitForZmqMessages();
    }

    server.notifyAllClients("server_notification", {{"list", "of platforms"}});
    waitForZmqMessages();

    client.disconnectServer();
    waitForZmqMessages();

    QVERIFY_(serverRecviedRegisterClient);
    QVERIFY_(serverRecievedUnregisterClient);
    QVERIFY_(serverReceivedExampleCommand1);
    QVERIFY_(serverReceivedExampleCommand2);
    QVERIFY_(serverReceivedErrorCommand);
    QVERIFY_(serverReceivedPlatformMessage);

    QCOMPARE_(ClientConnectedSignalSpy.count(), 1);
    QVERIFY_(clientReceivedExampleCommand1);
    QVERIFY_(clientReceivedExampleCommand2Response);
    QVERIFY_(clientReceivedExampleCommand2Notification);
    QVERIFY_(clientReceivedErrorCommand);
    QVERIFY_(clientReceivedPlatformMessage);
    QVERIFY_(clientReceivedPlatformNotification);
    QVERIFY_(clientReceivedServerNotification);
    QVERIFY_(false == clientRecievedUnregisterClient);
}

void StrataClientServerIntegrationTest::testMultipleClients()
{
    bool serverRecievedClient1Register = false;
    bool serverRecievedClient2Register = false;
    bool client1ReceivedServerResponse = false;
    bool client1ReceivedServerBroadcast = false;
    bool client2ReceivedServerResponse = false;
    bool client2ReceivedServerBroadcast = false;

    StrataServer server(address_, false);
    StrataClient client_1(address_, "client_1");
    StrataClient client_2(address_, "client_2");

    QSignalSpy clientConnectedSignalSpy_1(&client_1, &StrataClient::clientConnected);
    QSignalSpy clientConnectedSignalSpy_2(&client_2, &StrataClient::clientConnected);

    server.registerHandler("register_client",
                           [&server, &serverRecievedClient1Register,
                            &serverRecievedClient2Register](const Message &message) {
                               if (message.clientID == "client_1") {
                                   serverRecievedClient1Register = true;
                                   server.notifyClient(message, {{"destination", "client_1"}},
                                                       strata::strataRPC::ResponseType::Response);
                               } else if (message.clientID == "client_2") {
                                   serverRecievedClient2Register = true;
                                   server.notifyClient(message, {{"destination", "client_2"}},
                                                       strata::strataRPC::ResponseType::Response);
                               }
                           });

    client_1.registerHandler(
        "register_client", [&client1ReceivedServerResponse](const QJsonObject &message) {
            if (message.contains("destination") && message["destination"] == "client_1") {
                client1ReceivedServerResponse = true;
            } else {
                QFAIL_("Server responded to the wrong client");
            }
        });

    client_2.registerHandler(
        "register_client", [&client2ReceivedServerResponse](const QJsonObject &message) {
            if (message.contains("destination") && message["destination"] == "client_2") {
                client2ReceivedServerResponse = true;
            } else {
                QFAIL_("Server responded to the wrong client");
            }
        });

    client_1.registerHandler("broadcasted_message",
                             [&client1ReceivedServerBroadcast](const QJsonObject &) {
                                 client1ReceivedServerBroadcast = true;
                             });

    client_2.registerHandler("broadcasted_message",
                             [&client2ReceivedServerBroadcast](const QJsonObject &) {
                                 client2ReceivedServerBroadcast = true;
                             });

    QVERIFY_(server.initializeServer());
    client_1.connectServer();
    client_2.connectServer();
    waitForZmqMessages();

    QVERIFY_(serverRecievedClient1Register);
    QVERIFY_(serverRecievedClient2Register);
    QCOMPARE_(clientConnectedSignalSpy_1.count(), 1);
    QCOMPARE_(clientConnectedSignalSpy_2.count(), 1);

    server.notifyAllClients("broadcasted_message", {{"message", "message to all clients."}});
    waitForZmqMessages();

    QVERIFY_(client1ReceivedServerBroadcast);
    QVERIFY_(client2ReceivedServerBroadcast);
}

void StrataClientServerIntegrationTest::testCallbacks()
{
    int waitZmqDelay = 50;
    bool gotErrorCallback = false;
    bool gotResultCallback = false;

    StrataServer server(address_);
    StrataClient client(address_);

    server.registerHandler("test_error_callback", [&server](const Message &message) {
        server.notifyClient(message, QJsonObject{}, strata::strataRPC::ResponseType::Error);
    });

    server.registerHandler("test_result_callback", [&server](const Message &message) {
        server.notifyClient(message, QJsonObject{}, strata::strataRPC::ResponseType::Response);
    });

    QVERIFY_(server.initializeServer());
    QVERIFY_(client.connectServer());

    {
        auto deferredRequest = client.sendRequest("test_error_callback", QJsonObject{});

        connect(deferredRequest, &strata::strataRPC::DeferredRequest::finishedWithError, this,
                [&gotErrorCallback](const QJsonObject &) { gotErrorCallback = true; });

        waitForZmqMessages(waitZmqDelay);
        QVERIFY_(gotErrorCallback);
    }

    {
        auto deferredRequest = client.sendRequest("test_result_callback", QJsonObject{});

        connect(deferredRequest, &strata::strataRPC::DeferredRequest::finishedSuccessfully, this,
                [&gotResultCallback](const QJsonObject &) { gotResultCallback = true; });

        waitForZmqMessages(waitZmqDelay);
        QVERIFY_(gotResultCallback);
    }
}