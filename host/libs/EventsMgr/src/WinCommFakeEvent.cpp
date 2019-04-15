
#include "WinCommFakeEvent.h"

namespace spyglass {

WinCommFakeEvent::WinCommFakeEvent() : WinEventBase(3), hEvent_(NULL), act_flags_(0)
{

}

WinCommFakeEvent::~WinCommFakeEvent()
{
    if (hEvent_ != NULL) {
        ::CloseHandle(hEvent_);
    }
}

bool WinCommFakeEvent::create()
{
    hEvent_ = ::CreateEvent(NULL, TRUE, FALSE, NULL);
    if(hEvent_ == NULL)
        return false;

    return true;
}

ev2_handle_t WinCommFakeEvent::getWaitHandle()
{
    return hEvent_;
}

bool WinCommFakeEvent::activate(int evFlags)
{
    act_flags_ = evFlags;
    if (act_flags_ != 0) {
        ::SetEvent(hEvent_);
    }
    else {
        ::ResetEvent(hEvent_);
    }

    return true;
}

void WinCommFakeEvent::deactivate()
{
    if (hEvent_ == NULL) {
        return;
    }

    ::ResetEvent(hEvent_);
}

int WinCommFakeEvent::getEventStateFlags() const
{
    return act_flags_;
}


} //namespace spyglass
