import Link from 'next/link'
import RiskBadge from './RiskBadge'
import { HiClock, HiLocationMarker, HiDeviceMobile } from 'react-icons/hi'

interface Alert {
  id: string
  riskLevel: 'Low' | 'Medium' | 'High'
  timestamp: string
  location: string
  device: string
  reason: string
}

interface AlertsTableProps {
  alerts: Alert[]
  showActions?: boolean
}

export default function AlertsTable({ alerts, showActions = true }: AlertsTableProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date)
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                رقم التنبيه
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                مستوى الخطورة
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                الوقت
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                الموقع
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                الجهاز
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                السبب
              </th>
              {showActions && (
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  الإجراءات
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {alerts.length === 0 ? (
              <tr>
                <td
                  colSpan={showActions ? 7 : 6}
                  className="px-6 py-8 text-center text-gray-500"
                >
                  لا توجد تنبيهات
                </td>
              </tr>
            ) : (
              alerts.map((alert) => (
                <tr key={alert.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">{alert.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <RiskBadge level={alert.riskLevel} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <HiClock className="text-gray-400" />
                      <span>{formatDate(alert.timestamp)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <HiLocationMarker className="text-gray-400" />
                      <span>{alert.location}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <HiDeviceMobile className="text-gray-400" />
                      <span>{alert.device}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{alert.reason}</span>
                  </td>
                  {showActions && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link
                        href={`/alerts/${alert.id}`}
                        className="text-primary hover:text-primary-dark transition-colors"
                      >
                        عرض التفاصيل
                      </Link>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

