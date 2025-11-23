import { HiCheckCircle, HiExclamationCircle, HiXCircle } from 'react-icons/hi'

interface TimelineEvent {
  id: string
  timestamp: string
  title: string
  description: string
  type: 'success' | 'warning' | 'error' | 'info'
}

interface TimelineProps {
  events: TimelineEvent[]
}

export default function Timeline({ events }: TimelineProps) {
  const getIcon = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'success':
        return <HiCheckCircle className="text-green-500" size={24} />
      case 'warning':
        return <HiExclamationCircle className="text-yellow-500" size={24} />
      case 'error':
        return <HiXCircle className="text-red-500" size={24} />
      default:
        return <HiCheckCircle className="text-blue-500" size={24} />
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('ar-SA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date)
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">سجل الأنشطة الأخيرة</h3>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute right-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={event.id} className="relative flex items-start gap-4">
              {/* Icon */}
              <div className="relative z-10 flex-shrink-0 bg-white rounded-full p-1">
                {getIcon(event.type)}
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-semibold text-gray-900">{event.title}</h4>
                  <span className="text-xs text-gray-500">{formatDate(event.timestamp)}</span>
                </div>
                <p className="text-sm text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

