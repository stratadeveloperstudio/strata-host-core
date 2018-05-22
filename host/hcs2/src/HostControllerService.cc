/**
******************************************************************************
* @file host-controller-service [Host Controller Service]
* @author Prasanth Vivek
* $Rev: 1 $
* $Date: 2018-02-06
* @brief Host Controller Service for interaction between client[UI], platform
        and cloud
******************************************************************************

* @copyright Copyright 2018 On Semiconductor
*/

#include "HostControllerService.h"

using namespace rapidjson;
using namespace std;

AttachmentObserver::AttachmentObserver(void *client_socket,void *client_id_list)
{
    PDEBUG(PRINT_DEBUG,"Attaching the nimbus observer");
    client_connector_ = (Connector *)client_socket;
    client_list_ = (clientList *)client_id_list;
}

void AttachmentObserver::DocumentChangeCallback(jsonString jsonBody) {
    clientList::iterator client_list_iterator = client_list_->begin();
    while(client_list_iterator != client_list_->end()) {
        client_connector_->setDealerID(*client_list_iterator);
        client_connector_->send(jsonBody);
        // [prasanth] : comment the following PDEBUG for faster performance.
        // use it for debugging
        // PDEBUG(PRINT_DEBUG,"[hcs to hcc]%s",jsonBody);
        client_list_iterator++;
    }
}
/******************************************************************************/
/*                                core functions                              */
/******************************************************************************/
// @f constructor
// @b gets the config file name and assigns the value to proper variables
//
// arguments:
//  IN: config file name
//   set : socket address
//
//  OUT:
//   void
//
//  ERROR:
//    exits if socket cannot be opened or incorrect socket address
//
HostControllerService::HostControllerService(string configuration_file)
{
    // config file parsing
    configuration_ = new ParseConfig(configuration_file);
    cout<<"************************************************************\n";
    cout<<"CONFIG: \n"<< *configuration_ <<std::endl;
    if(PRINT_DEBUG > 0) {
        cout<< "Console print is enabled\n";
    }
    else {
        cout<< "Console print is disabled\n";
    }
    cout<<"************************************************************\n";
    //[TODO] [prasanth] : rename the terms and variables in config file and
    // parseconfig.cpp for easy understanding
    hcs_server_address_ = configuration_->GetSubscriberAddress();
    hcs_remote_address_ = configuration_->GetRemoteAddress();
    // get the dealer id for remote socket connection
    dealer_remote_socket_id_ = configuration_->GetDealerSocketID();
    // creating the nimbus object
    database_ = new Nimbus();
    // initializing the connectors
    client_connector_ = connector_factory_->getConnector("client");
    serial_connector_ = connector_factory_->getConnector("platform");
    remote_connector_ = connector_factory_->getConnector("remote");
}

// @f init
// @b initialises the zmq context, socket, nimbus and serial
//
// arguments:
//  IN:
//   open : service socket
//  OUT:
//   void
//
//  ERROR:
//    exits if socket cannot be opened or incorrect socket address
//
HcsError HostControllerService::init()
{
    // zmq context creation
    socket_context_ = new(zmq::context_t);
    // opening the client socket to connect with UI
    client_connector_->open(hcs_server_address_);
    // registering the observer to the database
    // // TODO [prasanth] NIMBUS integration **Needs better organisation
    AttachmentObserver blobObserver((void *)client_connector_, (void *)&clientList);
    database_->Register(&blobObserver);
    // // openeing the socket to talk with the remote server
    remote_connector_->setDealerID(dealer_remote_socket_id_);
    remote_connector_->open(hcs_remote_address_);
    // [TODO]: [prasanth] the following lines are used to handle the serial connect/disconnect
    // This method will be removed once we get the serial to socket stuff in
    port_disconnected_ = true;
    setEventLoop();
    // [TODO] [prasanth] : This function run is coded in this, since the libevent dynamic
    //addtion of event is not implemented successfully in hcs
    while((int)run());

    HcsError error = HcsError::NO_ERROR;
    return error;
}

// @f run
// @b adds service callback to the event loop and starts it
//
// arguments:
//  IN:
//
//  OUT:
//   HcsError number
//
//  ERROR:
//    exits if events cannot be dispatched or cannot be added to the base
//

// [TODO] [prasanth] : This function run is coded in this, since the libevent dynamic
//addtion of event is not implemented successfully in hcs
HcsError HostControllerService::run()
{
    while(!openPlatform()) {
        sleep(0.2);
    }
    PDEBUG(PRINT_DEBUG,"\033[1;32mPlatform detected\033[0m\n");
    initializePlatform(); // init serial config
    port_disconnected_ = false;
    event_base_loopbreak(event_loop_base_);
    setEventLoop();

    HcsError error = HcsError::EVENT_BASE_FAILURE;
    return error;
}

HcsError HostControllerService::setEventLoop()
{
    // get the platform list from the discovery service
    // [TODO] [Prasanth] : Should be added dynamically
    addToLocalPlatformList(discovery_service_.getPlatforms());
    string platformList ;
    getPlatformListJson(platformList);
    platform_details simulated_usb_pd,simulated_motor_vortex,sim_usb;
    simulated_usb_pd.platform_uuid = "P2.2018.1.1.0.0.c9060ff8-5c5e-4295-b95a-d857ee9a3671";
    simulated_usb_pd.platform_verbose = "USB PD Load Board";
    simulated_usb_pd.connection_status = "view";

    simulated_motor_vortex.platform_uuid = "motorvortex1";
    simulated_motor_vortex.platform_verbose = "Vortex Fountain Motor Platform Board";
    simulated_motor_vortex.connection_status = "view";

    sim_usb.platform_uuid = "P2.2017.1.1.0.0.cbde0519-0f42-4431-a379-caee4a1494af";
    sim_usb.platform_verbose = "USB PD";
    sim_usb.connection_status = "view";

    platform_uuid_.push_back(simulated_usb_pd);  // for testing alone
    platform_uuid_.push_back(simulated_motor_vortex);
    platform_uuid_.push_back(sim_usb);
    std::list<string>::iterator client_list_iterator = clientList.begin();
    while(client_list_iterator != clientList.end()) {
        client_connector_->setDealerID(*client_list_iterator);
        client_connector_->send(platformList);
        PDEBUG(PRINT_DEBUG,"[hcs to hcc]%s",platformList.c_str());
        client_list_iterator++;
    }
    PDEBUG(PRINT_DEBUG,"Starting the event");
    // creating a periodic event for test case
    event_loop_base_ = event_base_new();
    if (!event_loop_base_) {
        PDEBUG(PRINT_DEBUG,"Could not create event base");

        HcsError error = HcsError::EVENT_BASE_FAILURE;
        return error;
    }

    struct event *periodic_event = event_new(event_loop_base_, -1, EV_TIMEOUT
                        | EV_PERSIST, HostControllerService::testCallback,this);
    timeval seconds = {1, 0};
    event_add(periodic_event, &seconds);

    // [prasanth] : Always add the serial port handling to event loop before socket
    // the socket event loop
    if(!port_disconnected_) {
#ifdef _WIN32
        struct event *platform_handler = event_new(event_loop_base_,serial_connector_->getFileDescriptor(), EV_READ | EV_WRITE | EV_PERSIST,
                                HostControllerService::platformCallback,this);
#else
        struct event *platform_handler = event_new(event_loop_base_,serial_connector_->getFileDescriptor(), EV_READ  | EV_PERSIST,
                                        HostControllerService::platformCallback,this);
#endif
        event_add(platform_handler,NULL);
    }
    //
    // adding the service handler callback to the event loop
    struct event *service_handler = event_new(event_loop_base_,client_connector_->getFileDescriptor(),
                        EV_READ | EV_WRITE | EV_PERSIST ,
                        HostControllerService::serviceCallback,this);
    event_add(service_handler,NULL);
    //
    // // remote handler
    struct event *remote_handler = event_new(event_loop_base_,remote_connector_->getFileDescriptor(),
                        EV_READ | EV_WRITE | EV_PERSIST ,
                        HostControllerService::remoteCallback,this);
    event_add(remote_handler,NULL);

    // dispatch all the events
    int event_base = event_base_dispatch(event_loop_base_);
    if(event_base == 0) {
      HcsError error = HcsError::NO_ERROR;
      return error;
    }
    else {
      PDEBUG(PRINT_DEBUG,"Base Failure");
      HcsError error = HcsError::EVENT_BASE_FAILURE;
      return error;
    }
}

/******************************************************************************/
/*                         event callback functions                           */
/******************************************************************************/
// @f testCallback
// @b periodic callback to test the libevent callback
//
// arguments:
//  IN: since it is a static function, this * is passed as input to variable args
//
//  OUT:
//   void
//
void HostControllerService::testCallback(evutil_socket_t fd, short what, void* args)
{
    // creating a periodic event for test case
    HostControllerService *hcs = (HostControllerService*)args;
    if(hcs->port_disconnected_) {
        if(hcs->serial_connector_->isPlatformAvailable()) {
            event_base_loopbreak(hcs->event_loop_base_);
          }
    }
}

/******************************************************************************/
/*                         event callback functions                           */
/******************************************************************************/
// @f service socket callback
// @b will be invoked when the service socket reads a message
//
// arguments:
//  IN: since it is a static function, this * is passed as input to variable args
//
//  OUT:
//   void
//
void HostControllerService::serviceCallback(evutil_socket_t fd, short what, void* args)
{
    // [TODO] [prasanth] This is just a test case. will clean this as we proceed
    HostControllerService *hcs = (HostControllerService*)args;
    string dealer_id;
    string read_message;
    if(hcs->client_connector_->read(read_message)) {
        dealer_id = hcs->client_connector_->getDealerID();
        if(!hcs->clientExistInList(dealer_id)) {
            PDEBUG(PRINT_DEBUG,"Adding new client to list");
            hcs->clientList.push_back(dealer_id);
        }
        Document service_command;
        if (service_command.Parse(read_message.c_str()).HasParseError()) {
            PDEBUG(PRINT_DEBUG,"ERROR: json parse error!");
        }

        // TODO [ian] add this to a "command_filter" map to add more then just "db::cmd"
        if( service_command.HasMember("db::cmd") ) {
            // [TODO] [prasanth] : verify with Abe. Removing Open after nimbus initialization causes seg fault on this command
            // Hence commeneted out
            // if ( hcs->database_->Command( read_message.c_str() ) != NO_ERRORS ){
            //     PDEBUG(PRINT_DEBUG,"ERROR: database failed failed!");
            // }
        }
        else if( service_command.HasMember("hcs::cmd") ) {
            hcs->parseHCSCommands(read_message);
        }
        else if(hcs->platform_client_mapping_.empty() || !hcs->clientExists(dealer_id)) {
            std::vector<string> selected_platform_info = hcs->initialCommandDispatch(dealer_id,read_message);
            // strictly for testing alone
            if(!(selected_platform_info[0] == "NONE")) {
                // need to change the following lines to support struct
                std::vector<string> map_element;
                map_element.insert(map_element.begin(),selected_platform_info[0]);
                map_element.insert(map_element.begin()+1,selected_platform_info[1]);
                hcs->platform_client_mapping_.emplace(map_element,dealer_id);
                // constructing JSON for the database to open the channel based on selected platform
                Document document;
                document.SetObject();
                Document::AllocatorType& allocator = document.GetAllocator();
                Value platform_id(selected_platform_info[0].c_str(),allocator);
                Value payload_object;
                payload_object.SetObject();
                payload_object.AddMember("db_name",platform_id,allocator);
                document.AddMember("db::payload",payload_object,allocator);
                document.AddMember("db::cmd","open",allocator);
                StringBuffer strbuf;
                Writer<StringBuffer> writer(strbuf);
                document.Accept(writer);
                PDEBUG(PRINT_DEBUG,"db::cmd %s\n",strbuf.GetString());
                // sending the command to NIMBUS
                if ( hcs->database_->Command( strbuf.GetString() ) != NO_ERRORS ){
                    PDEBUG(PRINT_DEBUG,"ERROR: database failed failed!");
                }
                PDEBUG(PRINT_DEBUG,"adding the %s uuid to multimap\n",selected_platform_info[0].c_str());
            }
        } else {
            PDEBUG(PRINT_DEBUG,"Dispatching message to platform/s\n");
            hcs->disptachMessageToPlatforms(dealer_id,read_message);
        }
    }
}

// @f remote socket callback
// @b will be invoked when the service socket reads a message
//
// arguments:
//  IN: since it is a static function, this * is passed as input to variable args
//
//  OUT:
//   void
//
void HostControllerService::remoteCallback(evutil_socket_t fd, short what, void* args)
{
    // [TODO] [prasanth] This is just a test case. will clean this as we proceed
    HostControllerService *hcs = (HostControllerService*)args;
    string read_message;
    if (hcs->remote_connector_->read(read_message)) {
        PDEBUG(PRINT_DEBUG,"remote message read %s",read_message.c_str());
        hcs->remoteRouting(read_message);
    }
}

// @f platform serial callback
// @b will be invoked when the platform writes a message
//
// arguments:
//  IN: since it is a static function, this * is passed as input to variable args
//
//  OUT:
//   void
//
void HostControllerService::platformCallback(evutil_socket_t fd, short what, void* args)
{
    // [TODO] [prasanth] This is just a test case. will clean this as we proceed
    HostControllerService *hcs = (HostControllerService*)args;
    string read_message = hcs->platformRead();
    if(read_message != "") {
        PDEBUG(PRINT_DEBUG,"message being read %s\n",read_message.c_str());
        // [TODO] [prasanth] change the map value for platform from string to structure
        hcs->checkPlatformExist(read_message);
        //[TODO] [prasanth]: send data to the data bridge through multimap handle
        // for now we are restricting the send to platform only with remote dealer id "h1"
        if(hcs->dealer_remote_socket_id_ == "h1") {
            hcs->remote_connector_->send(read_message);
        }
    }
}

/******************************************************************************/
/*                              utility functions                              */
/******************************************************************************/

// @f openPlatform
// @b checks the serial device in the vector assigned from the config file and opens them
//
// arguments:
//  IN:
//
//  OUT: true, if device is connected
//       false, if device is not connected
//
//
bool HostControllerService::openPlatform()
{
    string platform_port_name;
    if(serial_connector_->open(platform_port_name)) {
        port_disconnected_ = false;
        return true;
    }
    return false;
}

// @f initializeSerial
// @b after opening the serial port, this function configures the serial port
//
// arguments:
//  IN:
//
//  OUT:
//
//
void HostControllerService::initializePlatform()
{
    platform_details simulated_usb_pd,simulated_motor_vortex,sim_usb;
    simulated_usb_pd.platform_uuid = "P2.2018.1.1.0.0.c9060ff8-5c5e-4295-b95a-d857ee9a3671";
    simulated_usb_pd.platform_verbose = "USB PD Load Board";
    simulated_usb_pd.connection_status = "view";

    simulated_motor_vortex.platform_uuid = "motorvortex1";
    simulated_motor_vortex.platform_verbose = "Vortex Fountain Motor Platform Board";
    simulated_motor_vortex.connection_status = "view";

    sim_usb.platform_uuid = "P2.2017.1.1.0.0.cbde0519-0f42-4431-a379-caee4a1494af";
    sim_usb.platform_verbose = "USB PD";
    sim_usb.connection_status = "view";
    platform_uuid_.push_back(simulated_usb_pd);  // for testing alone
    platform_uuid_.push_back(simulated_motor_vortex);
    platform_uuid_.push_back(sim_usb);
    parseAndGetPlatformId();
}

// @f commandDispatch
// @b gets the json encoded string from client and then dispatches it
//
// arguments:
//  IN: json command from client
//
//  OUT:
//
//
std::vector<string> HostControllerService::initialCommandDispatch(const std::string& dealer_id,const std::string& command)
{
    // [TODO]: [prasanth] should be removed after bod demo
    std::vector<string> selected_platform;
    selected_platform.insert(selected_platform.begin(),"NONE");
    selected_platform.insert(selected_platform.begin()+1,"NONE");
    string board_name,remote_status ;
    client_connector_->setDealerID(dealer_id);
    Document service_command;
    // [TODO] [prasanth] : needs better organization
    if (service_command.Parse(command.c_str()).HasParseError()) {
        PDEBUG(PRINT_DEBUG,"ERROR: json parse error!\n");
        return selected_platform;
    }
    // state machine using switch statements
    string platformList;
    CommandDispatcherMessages message = stringHash(service_command["cmd"].GetString());
    switch(message) {
        case CommandDispatcherMessages::REQUEST_HCS_STATUS:
                                            client_connector_->send(JSON_SINGLE_OBJECT
                                                ("hcs::notification","hcs_active"));
                                            break;
        case CommandDispatcherMessages::REGISTER_CLIENT:
        case CommandDispatcherMessages::REQUEST_AVAILABLE_PLATFORMS:
                                            PDEBUG(PRINT_DEBUG,"Sending the list of available platform");
                                            getPlatformListJson(platformList);
                                            client_connector_->send(platformList);
                                            break;
        case CommandDispatcherMessages::PLATFORM_SELECT:
                                            PDEBUG(PRINT_DEBUG,"The client has selected a platform");
                                            board_name = service_command["platform_uuid"].GetString();
                                            remote_status = service_command["remote"].GetString();
                                            selected_platform.insert(selected_platform.begin(),board_name);
                                            selected_platform.insert(selected_platform.begin()+1,remote_status);
                                            return selected_platform;
    }
    return selected_platform;
}

// @f disptachMessageToPlatforms
// @b gets the json encoded string from client and then dispatches it to the corresponding platform/s
//
// arguments:
//  IN: client_id and the message from client
//
//  OUT: true if success,
//       false if failure
//
bool HostControllerService::disptachMessageToPlatforms(const std::string& dealer_id,const std::string& read_message)
{
    for(multimap_iterator_= platform_client_mapping_.begin();multimap_iterator_!=
                            platform_client_mapping_.end();multimap_iterator_++) {
        if (multimap_iterator_->second == dealer_id) {
            // the following printing is strictly for testing only
            PDEBUG(PRINT_DEBUG,"\033[1;4;31m[%s<-%s]\033[0m: %s\n",multimap_iterator_->first[0].c_str(),dealer_id.c_str(),read_message.c_str());
            Document service_command;
            if(!read_message.empty()) {
                if (service_command.Parse(read_message.c_str()).HasParseError()) {
                    PDEBUG(PRINT_DEBUG,"ERROR: json parse error!\n");
                    return false;
                }
            }
            if(service_command.HasMember("cmd")) {
                string command = service_command["cmd"].GetString();
                if(multimap_iterator_->first[1] == "connected") {
                    PDEBUG(PRINT_DEBUG,"\033[1;4;31mlocal write %s\033[0m\n",multimap_iterator_->first[1].c_str());
                    if(serial_connector_->send(read_message)) {
                        PDEBUG(PRINT_DEBUG,"\033[1;4;33mWrite success %s\033[0m",read_message.c_str());
                    }
                }
                else if(multimap_iterator_->first[1] == "remote") {
                    PDEBUG(PRINT_DEBUG,"\033[1;4;31mlocal write %s\033[0m\n",multimap_iterator_->first[1].c_str());
                    remote_connector_->send(read_message);
                }
            }
        }
    }
    return false;
}

// @f stringHash
// @b gets the command object's value and returns the appropriate hash(enum) number
//
// arguments:
//  IN: json command object's key as string
//
//  OUT: hash(enum) for the string
//
//
CommandDispatcherMessages HostControllerService::stringHash(const std::string& command)
{
    CommandDispatcherMessages message;
    if(command == "request_hcs_status") {
        message = CommandDispatcherMessages::REQUEST_HCS_STATUS;
        return message;
    } else if (command == "request_available_platforms") {
        message = CommandDispatcherMessages::REQUEST_AVAILABLE_PLATFORMS;
        return message;
    } else if (command == "platform_select") {
        message = CommandDispatcherMessages::PLATFORM_SELECT;
        return message;
    } else if (command == "register_client") {
        message = CommandDispatcherMessages::REGISTER_CLIENT;
        return message;
    } else {
        message = CommandDispatcherMessages::COMMAND_NOT_FOUND;
        return message;
    }
}

//[TODO] [prasanth] create some class for this function
// @f parseAndGetPlatformId
// @b gets the json encoded string parses and returns the platform ID
//
// arguments:
//  IN: json encoded string {!!! Expects only the platform id}
//
//  OUT: bool true if it has platform id else false
//
//
bool HostControllerService::parseAndGetPlatformId()
{
    PDEBUG(PRINT_DEBUG,"parseAndGetPlatformId\n");
    platform_details platform;
    platform.platform_uuid = serial_connector_->getPlatformUUID();
    platform.platform_verbose = serial_connector_->getDealerID();
    platform.connection_status = "connected";
    platform_uuid_.push_back(platform);
    if((!clientExists("remote"))&&(dealer_remote_socket_id_== "h1")) {
        std::vector<string> map_element;
        map_element.insert(map_element.begin(),platform.platform_verbose);
        map_element.insert(map_element.begin()+1,"connected");
        PDEBUG(PRINT_DEBUG,"[remote routing ] added into map");
        platform_client_mapping_.emplace(map_element,"remote");
        g_platform_uuid_ = platform.platform_verbose;
    }
}

// @f parseHCSCommands
// @b gets the json encoded string parses and routes to the appropriate routine
//
// arguments:
//  IN: json encoded string {!!! Expects only the HCS spedific commands}
//
void HostControllerService::parseHCSCommands(const string &hcs_message)
{
    PDEBUG(PRINT_DEBUG,"parsing the commands for HCS from client %s\n",hcs_message.c_str());
    Document hcs_command;
    if (hcs_command.Parse(hcs_message.c_str()).HasParseError()) {
        PDEBUG(PRINT_DEBUG,"json failed\n");
        return;
    }
    else if(!(strcmp(hcs_command["hcs::cmd"].GetString(),"disconnect_platform"))) {
        PDEBUG(PRINT_DEBUG,"User has requested to disconnect from platform\n");
        platform_client_mapping_.clear();
    }
}
// @f addToLocalPlatformList
// @b checks the list of available platforms and adds the new platforms to the list from Discovery Service
//
// arguments:
//  IN: disc service list of platforms
//
//  OUT:
//
void HostControllerService::addToLocalPlatformList(remote_platforms remote_platform)
{
    platform_details platform;
    platform.platform_uuid = remote_platform[0].platform_uuid;
    platform.platform_verbose = remote_platform[0].platform_verbose;
    platform.connection_status = "remote";
    platform_uuid_.push_back(platform);
}

/******************************************************************************/
/*               potential connector factory functions                        */
/******************************************************************************/
// @f platform read
// @b does a serial read from the global member platform_socket_
//
// arguments:
//  IN:
//
//  OUT: returns the received message
//
//
string HostControllerService::platformRead()
{
    string notification;
    if (serial_connector_->read(notification)) {
        return notification;
    }
    else {
        platformDisconnectRoutine();
        return "NULL";
    }
}

void HostControllerService::platformDisconnectRoutine ()
{
    PDEBUG(PRINT_DEBUG,"Platform Disconnected\n");
    port_disconnected_ = true;
    sendDisconnecttoUI();
    platform_uuid_.clear();
    platform_client_mapping_.clear();

    string platformList ;
    getPlatformListJson(platformList);
    platform_details simulated_usb_pd,simulated_motor_vortex,sim_usb;
    simulated_usb_pd.platform_uuid = "P2.2018.1.1.0.0.c9060ff8-5c5e-4295-b95a-d857ee9a3671";
    simulated_usb_pd.platform_verbose = "USB PD Load Board";
    simulated_usb_pd.connection_status = "view";

    simulated_motor_vortex.platform_uuid = "motorvortex1";
    simulated_motor_vortex.platform_verbose = "Vortex Fountain Motor Platform Board";
    simulated_motor_vortex.connection_status = "view";

    sim_usb.platform_uuid = "P2.2017.1.1.0.0.cbde0519-0f42-4431-a379-caee4a1494af";
    sim_usb.platform_verbose = "USB PD";
    sim_usb.connection_status = "view";

    platform_uuid_.push_back(simulated_usb_pd);  // for testing alone
    platform_uuid_.push_back(simulated_motor_vortex);
    platform_uuid_.push_back(sim_usb);
    std::list<string>::iterator client_list_iterator = clientList.begin();
    while(client_list_iterator != clientList.end()) {
        client_connector_->setDealerID(*client_list_iterator);
        client_connector_->send(platformList);
        PDEBUG(PRINT_DEBUG,"[hcs to hcc]%s",platformList.c_str());
        client_list_iterator++;
    }
    event_base_loopbreak(event_loop_base_);
    port_disconnected_ = true;
    setEventLoop();
}


void HostControllerService::sendDisconnecttoUI()
{
    std::list<string>::iterator client_list_iterator = clientList.begin();
    string disconnect_message = "{\"notification\":{\"value\":\"platform_connection_change_notification\",\"payload\":{\"status\":\"disconnected\"}}}";
    while(client_list_iterator != clientList.end()) {
        client_connector_->setDealerID(*client_list_iterator);
        client_connector_->send(disconnect_message);
        client_list_iterator++;
    }
}

// @f getPlatformListJson
// @b uses RapidJSON to create json message with list of available platforms
//
// arguments:
//  IN: string pointer that will store the platform list
//
//  OUT:
//
//
void HostControllerService::getPlatformListJson(string &list)
{
    // document is the root of a json message
    Document document;
    // define the document as an object rather than an array
    document.SetObject();
    Value array(kArrayType);
    Document::AllocatorType& allocator = document.GetAllocator();
    // traversing through the list
    for(auto platform_list_iterator = platform_uuid_.begin(); platform_list_iterator
                                != platform_uuid_.end();platform_list_iterator++) {
        platform_details platform = *platform_list_iterator;
        Value json_verbose(platform.platform_verbose.c_str(),allocator);
        Value json_uuid(platform.platform_uuid.c_str(),allocator);
        Value json_connection_status(platform.connection_status.c_str(),allocator);
        Value array_object;
        array_object.SetObject();

        array_object.AddMember("verbose",json_verbose,allocator);
        array_object.AddMember("uuid",json_uuid,allocator);
        array_object.AddMember("connection",json_connection_status,allocator);
        array.PushBack(array_object,allocator);
    }
    Value nested_object;
    nested_object.SetObject();
    nested_object.AddMember("list",array,allocator);
    document.AddMember("hcs::notification",nested_object,allocator);
    StringBuffer strbuf;
    Writer<StringBuffer> writer(strbuf);
    document.Accept(writer);
    list = strbuf.GetString();
}

/******************************************************************************/
/*                              checker functions                              */
/******************************************************************************/
// @f clientExists
// @b returns the true if client exits
//
// arguments:
//  IN: client/dealer socket identifier
//
//  OUT:
//   true if it exists in map and false if it does not
//
bool HostControllerService::clientExists(const string& client_identifier)
{
    bool does_client_exist;
    multimap_iterator_ = platform_client_mapping_.begin();
    while(multimap_iterator_ != platform_client_mapping_.end()) {
        does_client_exist = (multimap_iterator_->second == client_identifier);
        if(does_client_exist) {
            break;
        }
        multimap_iterator_++;
    }
    return does_client_exist;
}

// @f clientExistsinList
// @b returns the true if client exits in the list
//
// arguments:
//  IN: client/dealer socket identifier
//
//  OUT:
//   true if it exists in list and false if it does not
//
bool HostControllerService::clientExistInList(const string& client_identifier)
{
    bool does_client_exist;
    std::list<string>::iterator client_list_iterator = clientList.begin();
    while(client_list_iterator != clientList.end()) {
        does_client_exist = (*client_list_iterator == client_identifier);
        if(does_client_exist) {
            break;
        }
        client_list_iterator++;
    }
    return does_client_exist;
}

// @f checkPlatformExist
// @b returns the true if client exits
//
// arguments:
//  IN: client/dealer socket identifier
//
//  OUT:
//   true if it exists in map and false if it does not
//
bool HostControllerService::checkPlatformExist(const std::string& message)
{
    multimap_iterator_ = platform_client_mapping_.begin();
    while(multimap_iterator_ != platform_client_mapping_.end()) {
        bool does_platform_exist = false;
        std::vector<string> map_uuid = multimap_iterator_->first;
        string dealer_id;
        dealer_id = multimap_iterator_->second;
        if(!message.empty()) {
          client_connector_->setDealerID(dealer_id);
          client_connector_->send(message);
        }
        multimap_iterator_++;
    }
    return true;
}

void HostControllerService::remoteRouting(const std::string& message)
{
    string dealer_id;
    multimap_iterator_ = platform_client_mapping_.begin();
    if(message.empty()) {
        return;
    }
    while(multimap_iterator_ != platform_client_mapping_.end()) {
        bool does_platform_exist = false;
        std::vector<string> map_uuid = multimap_iterator_->first;
        string dealer_id = multimap_iterator_->second;
        dealer_id = multimap_iterator_->second;
        if(map_uuid[1] == "remote") {
            client_connector_->setDealerID(dealer_id);
            client_connector_->send(message);
        } else if ((map_uuid[1] == "connected") && (dealer_id == "remote")) {
            PDEBUG(PRINT_DEBUG,"Inside remote writing %s with dealer id %s",message.c_str(),dealer_id.c_str());
            serial_connector_->send(message);
        }
        multimap_iterator_++;
    }
}
