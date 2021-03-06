/*
 * Copyright (c) 2018-2021 onsemi.
 *
 * All rights reserved. This software and/or documentation is licensed by onsemi under
 * limited terms and conditions. The terms and conditions pertaining to the software and/or
 * documentation are available at http://www.onsemi.com/site/pdf/ONSEMI_T&C.pdf (“onsemi Standard
 * Terms and Conditions of Sale, Section 8 Software”).
 */
#pragma once

#include <PlatformManager.h>
#include "SciPlatformModel.h"
#include "SciMockDeviceModel.h"

#include <QObject>

class SciModel : public QObject
{
    Q_OBJECT
    Q_DISABLE_COPY(SciModel)

    Q_PROPERTY(strata::PlatformManager* platformManager READ platformManager CONSTANT)
    Q_PROPERTY(SciMockDeviceModel* mockDeviceModel READ mockDeviceModel CONSTANT)
    Q_PROPERTY(SciPlatformModel* platformModel READ platformModel CONSTANT)

public:
    explicit SciModel(QObject *parent = nullptr);
    virtual ~SciModel();

    strata::PlatformManager* platformManager();
    SciMockDeviceModel* mockDeviceModel();
    SciPlatformModel* platformModel();

private:
    strata::PlatformManager platformManager_;
    SciMockDeviceModel mockDeviceModel_;
    SciPlatformModel platformModel_;
};
