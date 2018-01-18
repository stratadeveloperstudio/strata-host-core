/*
 * HostControllerService.cpp
 *
 *  Created on: Aug 14, 2017
 *      Author: abhishek
 */

#include "HostControllerService.h"
#include <csignal>
#include "rapidjson/document.h"

using namespace std;
using namespace rapidjson;

AttachmentObserver::AttachmentObserver(void *hostP)
{
    host = (host_packet *)hostP;
}

void AttachmentObserver::DocumentChangeCallback(jsonString jsonBody) {
	 Connector::messageProperty message;
     message.message = jsonBody;
     host->service->sendNotification(message,host->notify);
}

HostControllerService::HostControllerService(std::string configuration_file)
{
    configuration_ = new ParseConfig(configuration_file);
    cout << "CONFIG: \n" << *configuration_ << endl;

    conObj = new ConnectFactory;
    context = new(zmq::context_t);

    // TODO rename variables "notifyAll" and "commandAck" to something more reasonable
    // subscribers_socket_
    // command_socket_

    notifyAll = new zmq::socket_t(*context,ZMQ_PUB);
    commandAck = new zmq::socket_t(*context,ZMQ_ROUTER);

    subscription_address_ = configuration_->GetSubscriberAddress ();
    notifyAll->bind(subscription_address_.c_str());
    size_t raw_size = 256;
    uint8_t id [256];
    // assigning the simulation state
    simulation_ = configuration_->IsSimulatedPlatform();
    // creating stream socket for non zmq tcp sockets and only for simulation
    if(simulation_) {
     simulationQemuSocket = new zmq::socket_t(*context,ZMQ_STREAM);
      // Prasanth: Port number hardcoded for initial version
      simulationQemuSocket->connect("tcp://localhost:7777");
      platformConnect = false;
      hostP.simulationOnly = simulationQemuSocket;
    }
    // TODO rename variable "hostP" what on earth is this supposed to help with?
    hostP.notify = notifyAll;

    command_address_ = configuration_->GetCommandAddress ();
    commandAck->bind(command_address_.c_str());

    // TODO [ian] rename variable "hostP" wtf is "hostP"?
    hostP.command = commandAck;

    // open and observe database events
    database_ = new Nimbus();
    database_->Open(NIMBUS_TEST_PLATFORM_JSON);
}

HostControllerService::~HostControllerService() {}

/*!
 * \brief
 * 		 parse the received JSON from HostControllerClient
 * 		 verify if the command is supported and respond back
 */
bool HostControllerService::verifyReceiveCommand(string command, string *response)
{

    // TODO [ian] violates message architecture design.
    // SEE: https://ons-sec.atlassian.net/wiki/spaces/SPYG/pages/3178509/Messaging+Architecture
    //    1) parse for valid json
    //    2) create and send JSON ack
    //
    //   it does NOT filter if the command itself is valid !
    //
    // COMMAND:
    //   {
    //       ”cmd” : ”platform_id_request”,
    //        “payload”:  {0}
    //   }
    //
    //   parse for valid json
    //
    //  ACK
    // {
    //    ”ack”: {
    //        ”cmd” : ”platform_id_request”,
    //        “response_verbose” : ”Command Valid”,
    //        ”return_value” : true
    //    }
    //

    // TODO [ian] rewrite in rapidjson
    StaticJsonBuffer<2000> jsonBuffer;
    StaticJsonBuffer<2000> tempBuf;
    StaticJsonBuffer<2000> returnBuffer;

    JsonObject& root = jsonBuffer.parseObject(command.c_str());
    JsonObject& returnRoot = tempBuf.createObject();
    JsonObject& retBuf = returnBuffer.createObject();

    printf("verifyReceiveCommand cmd=%s\n",command.c_str());

    if(!root.success()) {

        printf("PARSING UNSUCCESSFUL CHECK JSON BUFFER SIZE %s\n",command.c_str());
        return "Unsuccessful";
    }

    if(root.containsKey("events")) {

        string event = root["events"][0];

        if(!event.compare("ALL_EVENTS")) {

            returnRoot["cmd"]="register_event_notification";
            returnRoot["response_verbose"]="command_valid";
            returnRoot["return_value"]=true;
            retBuf["ack"]=returnRoot;

            //Convert json to string
            retBuf.printTo(*response);
            return true;
        } else {

            returnRoot["cmd"]="register_event_notification";
            returnRoot["response_verbose"]="command_valid";
            returnRoot["port_existence"]=false;
            retBuf["nack"]=returnRoot;
            retBuf.printTo(*response);
            return false;
        }
    } else if(root.containsKey("cmd")) {
        printf("verifyReceiveCommand cmd=%s\n",command.c_str());

        if(root["cmd"] == "request_platform_id") {
            root.printTo(*response);
            return true;
        }
        else if(root["cmd"] == "request_usb_pd_output_voltage") {
            root.printTo(*response);
            return true;
        }else if(root["cmd"] == "request_redriver_signal_loss") {
            root.printTo(*response);
            return true;
        }else if(root["cmd"] == "request_redriver_count") {
            root.printTo(*response);
            return true;
        }
        else {

            return false;
        }
    } else {

        returnRoot["cmd"]="not_recognised";
        returnRoot["response_verbose"]="command_invalid";
        returnRoot["update_interval"]=1000;
        retBuf["nack"]=returnRoot;
        retBuf.printTo(*response);
        return false;
    }
    return false;
}

/*
 * \brief :
 *      callback function to to handle service side requests
 */

// TODO FIXME [ian] better way to hand back the Host Controller Service "this" pointer
//     typical solution is to use a macro such as below for older C function pointer only interfaces
//
//     #define CONNECTOR_EVENT_HANDLER(_class_, _cb_, _member_) \
//		static bool _cb_(ConnectorHandle* handle, ConnectorMessage* message, void* ctx) { \
//	          _class_ *self = static_cast<_class_ *>(ctx); \
//	          bool rv = self->_member_(handle, message,ctx);   \
//	          return rv;  } \
//	     bool _member_(ConnectorHandle* handle, ConnectorMessage* message, void* ctx);
// USAGE:
// 	CONNECTOR_EVENT_HANDLER(Connector, setVoltageCallback, setVoltageCommand);


void callbackServiceHandler(evutil_socket_t fd ,short what, void* hostP) {

    HostControllerService::host_packet *host = (HostControllerService::host_packet *)hostP;
    HostControllerService *obj= host->hcs;
    zmq::socket_t *send = host->command;
    zmq::socket_t *simulationReceive = host->simulationOnly;

    uint8_t id [256];
    size_t id_size = 256;
    bool success;

    unsigned int     zmq_events;
    size_t           zmq_events_size  = sizeof(zmq_events);

    if(obj->simulation_) {
        simulationReceive->getsockopt(ZMQ_IDENTITY,&id,&id_size);
    }

    Connector::messageProperty message = host->service->receive(host->command);
    if(!message.message.compare("DISCONNECTED")) {   // TODO [ian] why would a "platform" command be in "service" handler?
        cout << "Platform Disconnect detected " <<endl;
        event_base_loopbreak(host->base);
    }

    // TODO FIXME [ian] no idea what verifyReceiveCommand is doing ... removing ...

    host->service->sendAck(message, host->command);
    cout << "SERVICE_MESSAGE: " << message.message << endl;

    // intercept db:: commands and forward to Nimbus
    // {
    //    "db::cmd":"connect_data_source",
    //            "db::payload":{
    //        "type":"documents"
    //    }
    // }

    Document service_command;
    if (service_command.Parse(message.message.c_str()).HasParseError()) {
        cout << "ERROR: json parse error!\n";
    }

    // TODO [ian] add this to a "command_filter" map to add more then just "db::cmd"
    if( service_command.HasMember("db::cmd") ) {

        printf("FILTER: %s\n", message.message.c_str());

        if ( host->hcs->database_->Command( message.message.c_str() ) != NO_ERRORS ){
            printf("ERROR: database failed failed!");
        }
    }
    else {

        // forward message to platform
        if (!obj->simulation_) {
            success = host->platform->sendNotification(message,host->hcs);
        }
        else {
            success = host->simulation->emulatorSend(message,simulationReceive);
        }

        if(success == true) {
            string log = "<--- To Platform = " + message.message;
            cout << "<--- To Platform = " << message.message <<endl;
        }
        else {
            cout << "Message send to platform failed " <<endl;
        }
    }

    send->getsockopt(ZMQ_EVENTS, &zmq_events, &zmq_events_size);
}

void heartBeatPeriodicEvent(evutil_socket_t fd ,short what, void* hostP) {

  HostControllerService::host_packet *host = (HostControllerService::host_packet *)hostP;
  HostControllerService *obj= host->hcs;
  zmq::socket_t *simulationReceive = host->simulationOnly;
  Connector::messageProperty message;

  if (obj->platformConnect){
      message.message="{\"notification\":{\"value\":\"platform_connection_change_notification\",\"payload\":{\"status\":\"connected\"}}}";
  }
  else {
    message.message="{\"notification\":{\"value\":\"platform_connection_change_notification\",\"payload\":{\"status\":\"disconnected\"}}}";
  }
  host->service->sendNotification(message,host->notify);
  obj->platformConnect = false;
}

/*
 * \brief :
 *    Function to handle notification from platform
 */
void HostControllerService::callbackPlatformHandler(void* hostP) {

    HostControllerService::host_packet *host = (HostControllerService::host_packet *)hostP;
    HostControllerService *obj = host->hcs;
    zmq::socket_t *notify = host->notify;
    zmq::socket_t *simulationReceive = host->simulationOnly;
    Connector::messageProperty message;
    if(!simulation_){
       sp_new_event_set(&ev);
	     sp_add_port_events(ev, platform_socket_, SP_EVENT_RX_READY);
    }

    while(1) {
      if(simulation_) {
      message = host->simulation->emulatorReceive(simulationReceive);
      if (!message.message.empty()) {
          platformConnect = true;
      }

      string tempMessage = message.message;
      // cout<< "received new line size "<<stringSize<<"   "<<message.message.size()<<endl;
      // cout << "Emulator receive "<<message.message<<endl;

      istringstream iss(message.message);
      while ( getline( iss,message.message, '\n' ) ) {
          host->service->sendNotification(message,host->notify);
          cout << "Emulator receive "<<message.message<<endl;
      }

    }
    else {
        message = host->platform->receive((void *)host->hcs);
        if(!message.message.compare("DISCONNECTED")) {
            cout << "Platform disconnected " <<endl;

            host->hcs->platform_ = connected_state::DISCONNECTED;

            // TODO : ian : clean this up. move to a static string or construct the json message
            message.message="{\"notification\":{\"value\":\"platform_connection_change_notification\",\"payload\":{\"status\":\"disconnected\"}}}";

            host->service->sendNotification(message,host->notify);
            sp_close(platform_socket_);

            //Signal
            zmq::context_t context(1);
            zmq::socket_t signal(context,ZMQ_DEALER);
            signal.setsockopt(ZMQ_IDENTITY,"BREAK");
            signal.connect("tcp://127.0.0.1:5564");
            s_send(signal,"DISCONNECTED");
            return ;
        }
        else {
            if(!host->service->sendNotification(message,host->notify)) {
                string log = "Notification to UI Failed = " + message.message ;
                cout << "Notification to UI Failed = " << message.message <<endl;
            }
        }
    }
}
}

/*!
 * \brief :
 *    Open serial port to platform
 */
bool HostControllerService::openPlatformSocket() {

#if __linux__
    error = sp_get_port_by_name("/dev/ttyUSB0",&platform_socket_);
#elif _WIN32
    error = sp_get_port_by_name("COM7",&platform_socket_);
#elif __APPLE__
    error = sp_get_port_by_name("/dev/tty.usbserial-DB00VFHS",&platform_socket_);
#endif

    if(error == SP_OK) {

        error = sp_open(platform_socket_, SP_MODE_READ_WRITE);
        if(error == SP_OK) {
            cout << "Serial PORT OPEN SUCCESS "<<endl;
            Connector::messageProperty message;
            message.message="{\"notification\":{\"value\":\"platform_connection_change_notification\",\"payload\":{\"status\":\"connected\"}}}";
            hostP.service->sendNotification(message,hostP.notify);
            return true;
        } else {
            cout << "SERIAL PORT OPEN FAILED "<<endl;
            return false;
        }
    } else {
        cout << "REQUESTED PORT NOT PRESENT "<<endl;
        return false;
    }
}

/*!
 * \brief:
 *    Initialzes serial port configuration to match platform
 */
void HostControllerService::initPlatformSocket() {

    error = sp_set_stopbits(platform_socket_,1);

    if(error == SP_OK ) {

        cout << "stop bit set length = 1" <<endl;
    }

    error = sp_set_bits(platform_socket_,8);

    if(error == SP_OK ) {

        cout << "data bit length = 8" <<endl;
    }

    error = sp_set_rts(platform_socket_,SP_RTS_OFF);
    if(error == SP_OK ) {

        cout << "rts disabled" <<endl;
    }

    error = sp_set_baudrate(platform_socket_,115200);
    if(error == SP_OK ) {

        cout << "baud rate = 9600" <<endl;
    }

    error= sp_set_dtr(platform_socket_,SP_DTR_OFF);
    if(error == SP_OK ) {

        cout << "dts disabled" <<endl;
    }

    error= sp_set_parity(platform_socket_,SP_PARITY_NONE );
    if(error == SP_OK ) {

        cout << "parity bit = NONE" <<endl;
    }

    error = sp_set_cts(platform_socket_,SP_CTS_IGNORE );
    if(error == SP_OK ) {

        cout << "cts = IGNORE" <<endl;
    }

}

// @f wait
// @b start host controller service and wait for events
//
connected_state HostControllerService::wait()
{
    Connector *cons = conObj->getServiceTypeObject("SERVICE");
    hostP.service = cons;

    if(simulation_) {
      hostP.simulation = conObj->getServiceTypeObject("SERVICE");
    }

    Connector *conp = conObj->getServiceTypeObject("PLATFORM");
    hostP.platform = conp;

    // TODO [prasanth] NIMBUS integration **Needs better organisation
    AttachmentObserver blobObserver((void *)&hostP);
    database_->Register(&blobObserver);

    string cmd = "{\"cmd\":\"request_platform_id\",\"Host_OS\":\"Linux\"}";

    if(!simulation_) {
        while(!openPlatformSocket()) {
            cout << "Waiting for Board to get Connected" <<endl;
            this_thread::sleep_for(std::chrono::milliseconds(2000));
        }

        initPlatformSocket();
        Connector::messageProperty message;
        message.message=cmd;
        conp->sendNotification(message,this);
    }

#ifndef _WIN32
    int sockService=0;
    size_t size_sockService = sizeof(sockService);

#else
    unsigned long long int sockService=0;
    size_t size_sockService = sizeof(sockService);

#endif

    hostP.command->getsockopt(ZMQ_FD, &sockService, &size_sockService);

    hostP.hcs = this;

    struct event_base *base = event_base_new();
    hostP.base = base;

    thread t(&HostControllerService::callbackPlatformHandler,this,(void *)&hostP);

	//EV_ET says its edge triggered. EV_READ and EV_WRITE are both
	//needed when event is added else it doesn't function properly
	//As libevent READ and WRITE functionality is affected by edge triggered events.
#ifndef __APPLE__
        struct event *service = event_new(base, sockService,EV_READ | EV_ET | EV_PERSIST,callbackServiceHandler,(void*)&hostP);
#else
        struct event *service = event_new(base, sockService ,
                        EV_READ | EV_ET | EV_PERSIST ,
                        callbackServiceHandler,(void *)&hostP);
#endif

	if (event_base_set(base,service) <0 ) {
        cout << "Event BASE SET SERVICE FAILED " << endl;
    }

    if(event_add(service,NULL) <0 ) {
        cout << "Event SERVICE ADD FAILED " << endl;
    }
    if(simulation_) {
        struct event *heartBeatSimulationEvent = event_new(base, -1, EV_TIMEOUT | EV_PERSIST, heartBeatPeriodicEvent,(void *)&hostP);
        timeval twoSec = {1, 0};
        if(event_add(heartBeatSimulationEvent, &twoSec)<0) {
            cout<< "Periodic event add service failed\n";
        }
    }

    event_base_dispatch(base);
    t.join();

    cout << "returning " <<endl;
    return platform_;
}
