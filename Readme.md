# Strata Host Core
Strata Host Core contains all the applications and dependencies necessary for Strata Developer Studio.
## Requirements

### Windows
    * Git Bash >= 2.28.0
    * CMake >= 3.19
    * Qt5 5.12.xx
    * Visual Studio Build Tools 2017
    * OpenSSL (can be installed through Qt installer)
### MacOS
    * Xcode and Command Line Tools
    * Git >= 2.28.0
    * Qt5 5.12.xx
    * CMake >= 3.19
    * OpenSSL

## Qt5 installation

Download and install Qt5 version 5.12.xx

The following Qt5 components are required:

### Windows
* MSVC 2017 64-bit
* Qt Charts
* Qt WebEngin
* Qt Developer and Designer Tools -> OpenSSL Toolkit

### MacOS
* macOS 
* Qt Charts
* Qt WebEngin

## Build Instructions

Building through CLI:

  ### Windows 
    make sure Qt directory is added to the path
    if not, follow the instructions below:
    - From the start menu, search for `edit the system environment variables`
    - Click Environment Variables
    - Add the following to user variables Path
    `<QT installation directory>\5.12.xx\msvc2017_64\bin`
    `<QT installation directory>\Tools\OpenSSL\Win_x64\bin`
    - Create a new user environment variable
        variable name: `Qt_DIR`
        variable value: `<QT installation directory>\5.12.xx\msvc2017_64\lib\cmake\Qt5`

    In addition, make sure that other tools in the requirements section are properly installed
    and added to the path if needed.

    Open `Command Prompt`, navigate to Strata Host Core root directory and run `bootstrap-host.bat`

  ### MacOS
    make sure Qt directory is added into the path
    if not, open `Terminal` and run the following command:
    ```
    export PATH=$PATH:<QT installed directory>/5.12.xx/clang_64/bin
    ```

    In addition, make sure that other tools in the requirements section are properly installed
    and added to the path if needed.

    open `Terminal`, navigate to Strata Host Core root directory and run `bootstrap-host.sh`

Building through Qt Creator:
  
  * Make sure that you have updated/cloned Strata Host Core submodules by running the following commands
    ```
    cd <Strata Host Core cloned path>
    git submodule update --init --recursive
    ```
  * Open Qt Creator 
  * Projects -> Open -> select `CMakeLists.txt` under root directory of Strata Host Core
  * For project configuration make sure to select Qt 5.12.xx
  * Build/Run the project


## Contributions
You may contribute in various ways such as reporting a bug, open a PR, or share your thoughts.

For pull requests, please follow the steps below:
  * Keep it simple.
  * Keep it consistence with the design.
  * Follow C++ style guidelines found in `.clang-format` under root directory of Strata Host Core.

TBD - if there is any other input from legal team.
## License
TBD - legal team