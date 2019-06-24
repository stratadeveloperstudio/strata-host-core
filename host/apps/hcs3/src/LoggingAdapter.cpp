
#include "LoggingAdapter.h"

#include "logging/LoggingQtCategories.h"
#include <QString>
#include <QLoggingCategory>

LoggingAdapter::LoggingAdapter(const char* log_category)
{
    category_ = new QLoggingCategory(log_category);
}

LoggingAdapter::~LoggingAdapter()
{
    delete category_;
}

void LoggingAdapter::Log(LogLevel level, const std::string& log_text)
{
    const QLoggingCategory& logCategory = *category_;

    switch(level)
    {
        case eLvlDebug:
            qCDebug(logCategory) << QString::fromStdString(log_text);
            break;

        case eLvlInfo:
            qCInfo(logCategory) << QString::fromStdString(log_text);
            break;

        case eLvlWarning:
            qCWarning(logCategory) << QString::fromStdString(log_text);
            break;

        case eLvlCritical:
            qCCritical(logCategory) << QString::fromStdString(log_text);
            break;

        default:
            Q_ASSERT(false);
            break;
    }
}

