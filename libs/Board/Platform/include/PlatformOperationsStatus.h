#pragma once

#include <climits>

namespace strata::platform::operation {

// special values of status for platform operation finished() signal
constexpr int DEFAULT_STATUS(INT_MIN);
constexpr int ALREADY_IN_BOOTLOADER(1);
constexpr int NO_FIRMWARE(-100);
constexpr int BACKUP_STARTED(-101);
constexpr int FLASH_STARTED(-102);
constexpr int FIRMWARE_UNABLE_START(-103);
constexpr int SET_PLATFORM_ID_FAILED(-200);
constexpr int PLATFORM_ID_ALREADY_SET(-201);
constexpr int BOARD_NOT_CONNECTED_TO_CONTROLLER(-202);

}
