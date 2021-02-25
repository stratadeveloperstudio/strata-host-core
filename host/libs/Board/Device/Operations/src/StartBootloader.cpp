#include <Device/Operations/StartBootloader.h>
#include <DeviceOperationsStatus.h>
#include "Commands/include/DeviceCommands.h"
#include "DeviceOperationsConstants.h"

#include "logging/LoggingQtCategories.h"

namespace strata::device::operation {

using command::CmdRequestPlatformId;
using command::CmdGetFirmwareInfo;
using command::CmdStartBootloader;
using command::CommandResult;

StartBootloader::StartBootloader(const device::DevicePtr& device) :
    BaseDeviceOperation(device, Type::StartBootloader)
{
    commandList_.reserve(5);

    // BaseDeviceOperation member device_ must be used as a parameter for commands!
    commandList_.emplace_back(std::make_unique<CmdGetFirmwareInfo>(device_, true, MAX_GET_FW_INFO_RETRIES)); // 0
    commandList_.emplace_back(std::make_unique<CmdRequestPlatformId>(device_));      // 1
    commandList_.emplace_back(std::make_unique<CmdStartBootloader>(device_));        // 2
    commandList_.emplace_back(std::make_unique<CmdGetFirmwareInfo>(device_, true));  // 3
    commandList_.emplace_back(std::make_unique<CmdRequestPlatformId>(device_));      // 4

    currentCommand_ = commandList_.end();

    // Before calling 'start_bootloader' command, we need to check if board is already
    // in bootloader mode. If so, we skip rest of commands in command list and set
    // data for 'finished' signal to ALREADY_IN_BOOTLOADER. This is done by modifications
    // in method skipCommands().
    beforeStartBootloader_ = commandList_.begin() + 1;
    postCommandHandler_ = std::bind(&StartBootloader::skipCommands, this, std::placeholders::_1, std::placeholders::_2);
}

void StartBootloader::setWaitTime(const std::chrono::milliseconds &waitTime)
{
    std::vector<std::unique_ptr<command::BaseDeviceCommand>>::iterator iterator;
    for (iterator = commandList_.begin(); iterator != commandList_.end(); iterator++) {
        CmdStartBootloader *cmd = dynamic_cast<CmdStartBootloader*>(iterator->get());
        if (cmd != nullptr) {
            cmd->setWaitTime(waitTime);
        }
    }
}

void StartBootloader::skipCommands(CommandResult& result, int& status)
{
    if ((currentCommand_ == beforeStartBootloader_) && (result == CommandResult::Done)) {
        if (BaseDeviceOperation::bootloaderMode() == true) {
            // skip rest of commands - set result to 'FinaliseOperation'
            result = CommandResult::FinaliseOperation;
            // set status for 'finished' signal
            status = ALREADY_IN_BOOTLOADER;
            qCInfo(logCategoryDeviceOperations) << device_ << "Platform already in bootloader mode.";
        }
    }
}

}  // namespace
