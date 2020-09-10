#include "CmdGetFirmwareInfo.h"
#include "DeviceOperationsConstants.h"

#include <CommandValidator.h>

namespace strata::device::command {

CmdGetFirmwareInfo::CmdGetFirmwareInfo(const device::DevicePtr& device, bool requireResponse) :
    BaseDeviceCommand(device, QStringLiteral("get_firmware_info")), requireResponse_(requireResponse) { }

QByteArray CmdGetFirmwareInfo::message() {
    return QByteArray("{\"cmd\":\"get_firmware_info\",\"payload\":{}}");
}

bool CmdGetFirmwareInfo::processNotification(rapidjson::Document& doc) {
    if (CommandValidator::validateNotification(CommandValidator::JsonType::getFirmwareInfoNotif, doc)) {
        const rapidjson::Value& payload = doc[JSON_NOTIFICATION][JSON_PAYLOAD];
        const rapidjson::Value& bootloader = payload[JSON_BOOTLOADER];
        const rapidjson::Value& application = payload[JSON_APPLICATION];

        result_ = CommandResult::Failure;
        if (bootloader.MemberCount() > 0) {  // JSON_BOOTLOADER object has some members -> it is not empty
            setDeviceProperties(nullptr, nullptr, nullptr, bootloader[JSON_VERSION].GetString(), "");
            result_ = CommandResult::Done;
        }
        if (application.MemberCount() > 0) {  // JSON_APPLICATION object has some members -> it is not empty
            setDeviceProperties(nullptr, nullptr, nullptr, nullptr, application[JSON_VERSION].GetString());
            result_ = CommandResult::Done;
        }
        return true;
    } else {
        return false;
    }
}

void CmdGetFirmwareInfo::onTimeout() {
    if (requireResponse_) {
        result_ = CommandResult::InProgress;
    } else {
        setDeviceProperties(nullptr, nullptr, nullptr, nullptr, "");
        result_ = CommandResult::Done;
    }
}

}  // namespace
