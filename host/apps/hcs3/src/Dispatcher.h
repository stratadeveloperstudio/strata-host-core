
#ifndef HOST_HCS_DISPATCHER_H__
#define HOST_HCS_DISPATCHER_H__

#include <string>
#include <mutex>
#include <deque>
#include <atomic>
#include <functional>

#include <rapidjson/document.h>

struct PlatformMessage
{
    enum MessageType {
        eMsgUnknown = 0,
        eMsgPlatformDisconnected,
        eMsgPlatformMessage,

        eMsgClientMessage,
        eMsgCouchbaseMessage,
    };

    // New BoardManager uses int for connection ID.
    // Previous implementation used string (which was stored in field from_client)
    struct ConnID {
        int conn_id;
        bool is_set;
    };

    MessageType msg_type;
    std::string from_client;
    ConnID from_connectionId;
    std::string message;
    rapidjson::Document* msg_document;

    // constructor
    PlatformMessage();
};


class HCS_Dispatcher final
{
public:
    HCS_Dispatcher();
    ~HCS_Dispatcher();

    /**
     * sets message handler callback
     * @param callback
     */
    void setMsgHandler(std::function<void(const PlatformMessage& )> callback);

//    void registerHandler();
//    void unregisterHandler();

    /**
     * adds a message to the message queue
     * @param msg message to add
     */
    void addMessage(const PlatformMessage& msg);

    /**
     * Dispatch messages (loop)
     */
    void dispatch();

    /**
     * Stops the dispatch message loop. This should be called from other thread
     */
    void stop();

private:
    int waitForMessage(PlatformMessage& msg, unsigned int timeout);

private:

    //message queue
    std::mutex event_list_mutex_;
    std::deque<PlatformMessage> events_list_;
    std::condition_variable event_list_cv_;
    std::atomic_bool stop_{false};

    std::function<void(const PlatformMessage& )> callback_;
};

#endif //HOST_HCS_DISPATCHER_H__
