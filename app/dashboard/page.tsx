'use client'

import ProtectedRoute from '@/components/ProtectedRoute'
import RiskBadge from '@/components/RiskBadge'
import StatsCard from '@/components/StatsCard'
import AlertsTable from '@/components/AlertsTable'
import Timeline from '@/components/Timeline'
import { mockUserRisk, mockAlerts, mockTimelineEvents } from '@/lib/mockData'
import {
  HiShieldCheck,
  HiExclamationCircle,
  HiClock,
  HiTrendingUp,
} from 'react-icons/hi'

function DashboardContent() {
  const userAlerts = mockAlerts.filter((alert) => alert.riskLevel !== 'Low').slice(0, 5)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">لوحة التحكم</h1>
          <p className="text-gray-600">مراقبة حالة الأمان والأنشطة الأخيرة</p>
        </div>

        {/* Risk Score Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border-r-4 border-primary">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">تقييم المخاطر الحالي</h2>
              <p className="text-gray-600 mb-4">
                آخر تحديث: {new Date(mockUserRisk.lastUpdated).toLocaleDateString('ar-SA')}
              </p>
              <div className="flex items-center gap-4">
                <RiskBadge level={mockUserRisk.riskLevel} score={mockUserRisk.score} showScore />
                <div className="w-64 bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${
                      mockUserRisk.riskLevel === 'High'
                        ? 'bg-red-500'
                        : mockUserRisk.riskLevel === 'Medium'
                        ? 'bg-yellow-500'
                        : 'bg-green-500'
                    }`}
                    style={{ width: `${mockUserRisk.score * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            {mockUserRisk.riskLevel !== 'Low' && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center gap-2 text-yellow-800 mb-2">
                  <HiExclamationCircle size={20} />
                  <span className="font-semibold">تنبيه</span>
                </div>
                <p className="text-sm text-yellow-700">
                  تم اكتشاف بعض الأنشطة غير المعتادة. يرجى مراجعة التنبيهات أدناه.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Top Factors */}
        {mockUserRisk.topFactors.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">العوامل الرئيسية</h3>
            <ul className="space-y-2">
              {mockUserRisk.topFactors.map((factor, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <span className="text-primary">•</span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="التنبيهات النشطة"
            value={userAlerts.length}
            icon={<HiExclamationCircle />}
            color="red"
          />
          <StatsCard
            title="آخر نشاط"
            value="منذ ساعتين"
            icon={<HiClock />}
            color="primary"
          />
          <StatsCard
            title="مستوى الأمان"
            value={mockUserRisk.riskLevel === 'Low' ? 'آمن' : 'يحتاج مراجعة'}
            icon={<HiShieldCheck />}
            color={mockUserRisk.riskLevel === 'Low' ? 'green' : 'yellow'}
          />
          <StatsCard
            title="نقاط الثقة"
            value={`${((1 - mockUserRisk.score) * 100).toFixed(0)}%`}
            icon={<HiTrendingUp />}
            color="accent"
          />
        </div>

        {/* Alerts and Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">التنبيهات الأخيرة</h2>
            <AlertsTable alerts={userAlerts} showActions={true} />
          </div>
          <div>
            <Timeline events={mockTimelineEvents} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}

