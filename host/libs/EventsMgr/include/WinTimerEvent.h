#ifndef STRATA_EVENTS_MGR_WIN_TIMER_EVENT_H__
#define STRATA_EVENTS_MGR_WIN_TIMER_EVENT_H__

#if defined(_WIN32)

#include <functional>
#define WIN32_LEAN_AND_MEAN
#include <windows.h>

#include "EvEventBase.h"

namespace spyglass {

class WinTimerEvent : public EvEventBase
{
public:
    WinTimerEvent();
    virtual ~WinTimerEvent();

    /**
     * Creates timer event with specified time
     * @param timeInMs specified time to signal
     * @return returns true when succeeded, otherwise false
     */
    bool create(unsigned int timeInMs);

    /**
     * Restarts the timer
     */
    void restartTimer();

    /**
     * returns handle to the wait event
     */
    virtual ev_handle_t getWaitHandle();

    virtual bool activate(int evFlags);
    virtual void deactivate();

private:
    bool setTimer();

private:
    HANDLE hTimer_;
    unsigned int timeInMs_;
    bool active_;
};

}; //namespace

#endif //_WIN32

#endif //STRATA_EVENTS_MGR_WIN_TIMER_EVENT_H__
