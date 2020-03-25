
<#
.SYNOPSIS
Strata Developer Studio installer test script

.DESCRIPTION
This is the automated installer test script for the master test plan
https://ons-sec.atlassian.net/wiki/spaces/SPYG/pages/775848204/Master+test+plan+checklist#Installer

.INPUTS SDSInstallerPath
Mandatory. If not being passed as an arugment to the secript you will be prompted to choose the path

.OUTPUTS
Result of the installer test

.NOTES
Version:        1.0
Creation Date:  03/10/2020

.PARAMETER SDSInstallerPath
 The path of Strata Developer Studio installer that will be tested
#>
function Test-SDSInstaller {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory=$True, Position=0)]
        [string]$SDSInstallerPath
    )

    $SDSInstallerLogFile = ".\SDSInstallerLog.log"
    $SDSUninstallFile = "$SDSRootDir\unins"
    $SDSIniFile = "$env:AppData\ON Semiconductor\Strata Developer Studio.ini"
    $SDSControlViewsDir = "$SDSRootDir\views"

    $HCSIniFile = "$env:AppData\ON Semiconductor\hcs.ini"
    $HCSDbDir = "$HCSAppDataDir\db\strata_db\*"

    $VisualRedistDisplayName = "Microsoft Visual C++ 2017 X64 Additional Runtime - 14.16"
    $FTDIDriverDisplayName = "Windows Driver Package - FTDI CDM Driver Package - VCP Driver (08/16/2017 2.12.28)"


    #-----------------------------------------------------------[Functions]------------------------------------------------------------

    ## Remove Strata Developer Studio, Visual C++ 64x Tools, and FTDI Driver if already installed
    ## FTDI name: Windows Driver Package - FTDI CDM Driver Package
    ## Visual C++ name: Microsoft Visual C++ 2017 X64 Additional Runtime - 14.16.27033
    function Uninstall-SDSAndItsComponents {
        try {
            $SDSUninstallerPath =  Get-ChildItem "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\" | ForEach-Object { get-ItemProperty $_.PSPath } `
                                    | where-Object { $_ -match "strata*" } | Select-Object UninstallString
            if ($SDSUninstallerPath -match [regex]::Escape($SDSUninstallFile)) {
                $FTDIUininstallerPath =  Get-ChildItem "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\" | ForEach-Object { get-ItemProperty $_.PSPath } `
                                        | where-Object { $_ -match "ftdi*" } | Select-Object UninstallString
                $VisualRedistUninstallerPath = Get-ChildItem "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\" | ForEach-Object { get-ItemProperty $_.PSPath } `
                                                | where-Object { $_ -match "strata*" } | Select-Object InstallLocation
                $SDSUninstallerPath = $SDSUninstallerPath.UninstallString -replace "/I","" -replace "`"",""
                $FTDIUininstallerPath = $FTDIUininstallerPath.UninstallString -replace "/I",""
                $VisualRedistUninstallerPath = $VisualRedistUninstallerPath.InstallLocation + "vc_redist.x64.exe" -replace "/I",""
                
                ## for ftdi driver you will get something like this in some cases 
                ## C:\PROGRA~1\DIFX\4A7292F75FEBBD3C\dpinst-amd64.exe /u C:\WINDOWS\System32\DriverStore\FileRepository\ftdiport.inf_amd64_90039b7dbf236588\ftdiport.inf
                ## C:\PROGRA~1\DIFX\4A7292F75FEBBD3C\dpinst-amd64.exe /u C:\WINDOWS\System32\DriverStore\FileRepository\ftdibus.inf_amd64_49b3e24305b20ada\ftdibus.inf
                ## and we need to remove both in oreder to remove ftdi driver compeletly
                if($FTDIUininstallerPath) {
                    Write-Host "Uninstalling Windows Driver Package - FTDI CDM Driver Package"
                    $FTDIUininstallerPath = $FTDIUininstallerPath.split()
                    if ($FTDIUininstallerPath.Length -gt 3) {
                        $counter = 2
                        while ($counter -lt 6) {
                        Start-Process -FilePath "`"$($FTDIUininstallerPath[$counter-2])`"" -ArgumentList "$($FTDIUininstallerPath[$counter-1])", `
                                    "$($FTDIUininstallerPath[$counter])", "/q" -Wait
                        $counter = $counter + 3 
                        }
                        Write-Host "Done"
                    } else {
                        Write-Host "Uninstalling Windows Driver Package - FTDI CDM Driver Package"
                        Start-Process -FilePath "$($FTDIUininstallerPath[0])" -ArgumentList "$($FTDIUininstallerPath[1])", "$($FTDIUininstallerPath[2])", "/q" -Wait
                        Write-Host "Done"
                    }
                } else {
                    Write-Host "FTDI has not been installed using Strata installer"
                }
                if($VisualRedistUninstallerPath) {
                    Write-Host "Uninstalling Microsoft Visual C++ 2017 X64"
                    Start-Process -FilePath "`"$VisualRedistUninstallerPath`"" -ArgumentList "/uninstall", "/quiet" -Wait
                    Write-Host "Done"
                } else {
                    Write-Host "Microsoft Visual C++ 2017 X64 is not installed"
                }
                Write-Host "Uninstalling Strata Developer Studio"
                Start-Process -FilePath "`"$SDSUninstallerPath`"" -ArgumentList "/VERYSILENT" -Wait
                Write-Host "Done"

            } else {
                Write-Host "Strata Developer Studio is not installed"
            }
        }
        catch {
            Exit-TestScript -1 "Error uninstalling Strata Developer Studio and its components. `n       $_"
        }
    }

    function Uninstall-SDS {
        Write-Host "Uninstalling Strata Developer Studio"
            try {
            $SDSUninstallerPath =  Get-ChildItem "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\" | ForEach-Object { get-ItemProperty $_.PSPath } `
                                | where-Object { $_ -match "strata*" } | Select-Object UninstallString
            if ($SDSUninstallerPath) {
                $SDSUninstallerPath = $SDSUninstallerPath.UninstallString -replace "/I","" -replace "`"",""
                Start-Process -FilePath "`"$SDSUninstallerPath`"" -ArgumentList "/VERYSILENT" -Wait
                Write-Host "Done"
            } else {
                Write-Host "Strata Developer Studio is not installed"
            }
        }
        catch {
            Exit-TestScript -1 "Error Uninstalling Strata Developer Studio. `n       $_"
        }
    }
    function Install-SDS {
        Write-Host "Installing Strata Developer Studio"
        Try {
            Start-Process -FilePath "`"$SDSInstallerPath`"" -ArgumentList "/SP- /SUPPRESSMSGBOXES /LOG=$SDSInstallerLogFile /VERYSILENT /NORESTART /CLOSEAPPLICATIONS" -Wait
        }
        Catch {
            Exit-TestScript -1 "Error installing Strata Developer Studio. `n       $_"
        }
        Write-Host "Done"
    }

    function Test-SDSInstallation {
        try {
            $VisualRedistInstalledDisplayName = Get-ChildItem "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\" | ForEach-Object { get-ItemProperty $_.PSPath } `
                                                | Where-Object { $_ -match [regex]::Escape("Microsoft Visual C++ 2017 X64 Additional Runtime") } | Select-Object DisplayName
            $VisualRedistInstalledDisplayName = $VisualRedistInstalledDisplayName.DisplayName -replace "/I",""
            $FTDIDriverInstalledDisplayName = Get-ChildItem "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\" | ForEach-Object { get-ItemProperty $_.PSPath } `
                                            | Where-Object { $_ -match "ftdi*" } | Select-Object DisplayName
            $FTDIDriverInstalledDisplayName = $FTDIDriverInstalledDisplayName.DisplayName -replace "/I", ""
            $SDSVersion = Get-ChildItem "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\" | ForEach-Object { get-ItemProperty $_.PSPath } `
                        | Where-Object { $_ -match ("Strata*") } | Select-Object DisplayName
            $SDSVersion = $SDSVersion.DisplayName -replace "/I",""
            $SDSInstallerVersion = Select-String -Path $SDSInstallerLogFile -Pattern "Installing Strata Developer Studio v(\d+)\.(\d+)\.(\d+)(.*)" | ForEach-Object {$_.Matches } `
                                | ForEach-Object {$_.Value}
            $SDSInstallerVersion = $SDSInstallerVersion -replace "Installing ",""

            if ( $VisualRedistInstalledDisplayName -match [regex]::Escape($VisualRedistDisplayName) ) {
                Write-Host -ForegroundColor Green "Pass: Microsoft Visual C++ 2017 X64 is installed"
            } else {
                Write-Host -ForegroundColor Red "Fail: Microsoft Visual C++ 2017 X64 is not installed" 
            }

            if ( $FTDIDriverInstalledDisplayName -eq $FTDIDriverDisplayName ) {
                Write-Host -ForegroundColor Green "Pass: FTDI Driver is installed"
            } else {
                Write-Host -ForegroundColor Yellow "Warning: FTDI Driver is not installed by Strata installer, it probably got installed by Windows" 
            }

            if ( Test-path $SDSExecFile ) {
                Write-Host -ForegroundColor Green "Pass: Strata Developer Studio executables is under the specified location by the installer"
            } else {
                Write-Host -ForegroundColor Red "Fail: Strata Developer Studio executables is not under the specified location by the installer." 
            }

            if ( Test-Path $SDSControlViewsDir -PathType Container ) {
                Write-Host -ForegroundColor Green "Pass: Control Views are located in $SDSControlViewsDir"
            } else {
                Write-Host -ForegroundColor Red "Fail: Control Views are not located in $SDSControlViewsDir" 
            }

            if ($SDSVersion -eq $SDSInstallerVersion) {
                Write-Host -ForegroundColor Green  "Pass: $SDSVersion UI Version matches $SDSInstallerVersion the installer version"
            } else {
                Write-Host -ForegroundColor Red  "Fail: $SDSVersion Version doesn't matches $SDSInstallerVersion the installer version"
            }
        }
        catch {
            Exit-TestScript -1 "Installation test failed. `n       $_"
        }
    }

    function Test-SDSCleanUninstallation {
        Write-Host "`nStarting Clean Installation Test`n"
        Uninstall-SDSAndItsComponents
        Install-SDS
        Test-SDSInstallation
        Write-Host "`nEnd of Clean Installation Test`n"
    }
    function Test-SDSDirtyInstallationWithoutUninstallation {
        Write-Host "`nStarting Dirty Installation Test Rejecting Uninstall Prompt`n"
        # necessary to generate hcs database
        Start-HCSAndWait(5)
        Stop-HCS
        Install-SDS
        Test-SDSInstallation
        try {
            if (! (Test-Path "$HCSDbDir") ) {
                Write-Host -ForegroundColor Green  "Pass: HSC database has been deleted"
            } else {
                Write-Host -ForegroundColor Red  "Fail: HSC database has not been deleted"
            }
        }
        catch {
            Exit-TestScript -1 "Ditry installation without uninstallation failed. `n       $_"
        }
        Write-Host "`nEnd of Dirty Installation Test Rejecting Uninstall Prompt`n"
    }

    function Test-SDSDirtyInstallationWithUninstallation {
        Write-Host "`nStarting Dirty Installation Test Accepting Uninstall Prompt`n"
        Test-SDSUninstallation
        Install-SDS
        Test-SDSInstallation
        Write-Host "`nEnd of Dirty Installation Test Accepting Uninstall Prompt`n"
    }

    function Test-SDSUninstallation {
        Write-Host "`nStarting Uninstallation Test`n"
        # necessary to generate Strata Developer Studio.ini file
        Start-SDSAndWait(5)
        Stop-SDS
        Stop-HCS
        Uninstall-SDS
        try {
            if (! (Test-Path $SDSExecFile) ) {
                Write-Host -ForegroundColor Green  "Pass: Strata Developer Studio executables has been successfuly removed"
            } else {
                Write-Host -ForegroundColor Red  "Fail: Strata Developer Studio executables has not been successfuly removed"
            }  
            if (! (Test-Path $SDSControlViewsDir) ) {
                Write-Host -ForegroundColor Green  "Pass: $SDSControlViewsDir has been successfuly removed"
            } else {
                Write-Host -ForegroundColor Red  "Fail: $SDSControlViewsDir has not been successfuly removed"
            }
            if (! (Test-Path $HCSAppDataDir) ) {
                Write-Host -ForegroundColor Green  "Pass: $HCSAppDataDir has been successfuly removed"
            } else {
                Write-Host -ForegroundColor Red  "Fail: $HCSAppDataDir has not been successfuly removed"
            }
            if (! (Test-Path $HCSIniFile) ) {
                Write-Host -ForegroundColor Green  "Pass: $HCSIniFile has been successfuly removed"
            } else {
                Write-Host -ForegroundColor Red  "Fail: $HCSIniFile has not been successfuly removed"
            }
            if (! (Test-Path $SDSIniFile) ) {
                Write-Host -ForegroundColor Green  "Pass: $SDSIniFile has been successfuly removed"
            } else {
                Write-Host -ForegroundColor Red  "Fail: $SDSIniFile has not been successfuly removed"
            }
        }
        catch {
            Exit-TestScript -1 "Uninstallation test failed. `n       $_"
        }
        Write-Host "`nEnd of Uninstallation Test`n"
    }

    Write-Host "`nStarting Strata Installer test script`n"

    Test-SDSCleanUninstallation
    Test-SDSDirtyInstallationWithoutUninstallation
    Test-SDSDirtyInstallationWithUninstallation

    Write-Host "`nStrata installer test completed.`n`n"
}
