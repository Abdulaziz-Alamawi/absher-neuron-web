'use client'

import { useMemo, useState } from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'
import StatsCard from '@/components/StatsCard'
import AlertsTable from '@/components/AlertsTable'
import { mockAlerts, mockSecurityStats } from '@/lib/mockData'
import {
  HiExclamationCircle,
  HiClock,
  HiTrendingUp,
  HiShieldCheck,
} from 'react-icons/hi'

type RiskFilter = 'All' | 'High' | 'Medium' | 'Low'

const threatTrend = [
  { label: 'الأحد', value: 30 },
  { label: 'الاثنين', value: 45 },
  { label: 'الثلاثاء', value: 28 },
  { label: 'الأربعاء', value: 60 },
  { label: 'الخميس', value: 40 },
  { label: 'الجمعة', value: 22 },
  { label: 'السبت', value: 35 },
]

const topRegions = [
  { region: 'الرياض', score: 92 },
  { region: 'جدة', score: 81 },
  { region: 'الدمام', score: 74 },
  { region: 'المدينة المنورة', score: 63 },
  { region: 'أبها', score: 54 },
]

const topDevices = [
  { device: 'Windows • Chrome', risk: 'High' },
  { device: 'Android • Edge', risk: 'Medium' },
  { device: 'iOS • Safari', risk: 'Medium' },
  { device: 'macOS • Chrome', risk: 'Low' },
  { device: 'Linux • Firefox', risk: 'Low' },
]

const governanceLog = [
  {
    timestamp: '25 نوفمبر 12:40',
    action: 'إيقاف جلسة',
    level: 'عالٍ',
    owner: 'محلل SOC',
    result: 'تم تحويل الحالة لمركز العمليات',
  },
  {
    timestamp: '25 نوفمبر 10:15',
    action: 'طلب تحقق إضافي',
    level: 'متوسط',
    owner: 'النظام',
    result: 'تمت المصادقة عبر Face ID',
  },
  {
    timestamp: '24 نوفمبر 20:10',
    action: 'مراجعة نشاط',
    level: 'منخفض',
    owner: 'محلل الأمن',
    result: 'تم إغلاق البلاغ',
  },
]

const heatmapZones = [
  { zone: 'المنطقة الوسطى', intensity: 'High' },
  { zone: 'المنطقة الغربية', intensity: 'Medium' },
  { zone: 'المنطقة الشرقية', intensity: 'High' },
  { zone: 'المنطقة الجنوبية', intensity: 'Low' },
  { zone: 'المنطقة الشمالية', intensity: 'Low' },
  { zone: 'المدينة الرقمية', intensity: 'Medium' },
  { zone: 'المنافذ الحدودية', intensity: 'High' },
  { zone: 'المناطق الساحلية', intensity: 'Medium' },
]

function SecurityDashboardContent() {
  const [riskFilter, setRiskFilter] = useState<RiskFilter>('All')

  const filteredAlerts = useMemo(
    () =>
      riskFilter === 'All'
        ? mockAlerts
        : mockAlerts.filter((alert) => alert.riskLevel === riskFilter),
    [riskFilter],
  )

  const highRiskCount = mockAlerts.filter((a) => a.riskLevel === 'High').length
  const mediumRiskCount = mockAlerts.filter((a) => a.riskLevel === 'Medium').length
  const lowRiskCount = mockAlerts.filter((a) => a.riskLevel === 'Low').length

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">لوحة تحكم محلل الأمن</h1>
          <p className="text-gray-600">مراقبة شاملة للتهديدات والقرارات الحوكمية.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="حسابات عالية الخطورة"
            value={mockSecurityStats.highRiskAccounts}
            icon={<HiExclamationCircle />}
            color="red"
            trend={{ value: 12, isPositive: false }}
          />
          <StatsCard
            title="تنبيهات آخر 24 ساعة"
            value={mockSecurityStats.alerts24h}
            icon={<HiClock />}
            color="yellow"
            trend={{ value: 8, isPositive: true }}
          />
          <StatsCard
            title="إجمالي التنبيهات"
            value={mockSecurityStats.totalAlerts}
            icon={<HiTrendingUp />}
            color="primary"
          />
          <StatsCard
            title="تنبيهات محلولة"
            value={mockSecurityStats.resolvedAlerts}
            icon={<HiShieldCheck />}
            color="green"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">توزيع مستويات الخطورة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-red-800 font-semibold">عالي</span>
                  <span className="text-2xl font-bold text-red-700">{highRiskCount}</span>
                </div>
                <div className="w-full bg-red-200 rounded-full h-2">
                  <div
                    className="bg-red-600 h-2 rounded-full"
                    style={{ width: `${(highRiskCount / mockAlerts.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-yellow-800 font-semibold">متوسط</span>
                  <span className="text-2xl font-bold text-yellow-700">{mediumRiskCount}</span>
                </div>
                <div className="w-full bg-yellow-200 rounded-full h-2">
                  <div
                    className="bg-yellow-600 h-2 rounded-full"
                    style={{ width: `${(mediumRiskCount / mockAlerts.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-800 font-semibold">منخفض</span>
                  <span className="text-2xl font-bold text-green-700">{lowRiskCount}</span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${(lowRiskCount / mockAlerts.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">منحنى مستوى التهديد الأسبوعي</h2>
            <div className="flex items-end gap-3 h-48">
              {threatTrend.map((day) => (
                <div key={day.label} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-primary/60 to-primary"
                    style={{ height: `${day.value * 2}px` }}
                  ></div>
                  <span className="text-xs text-gray-500 mt-2">{day.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">أعلى 5 مناطق خطورة</h2>
            <ul className="space-y-3">
              {topRegions.map((region) => (
                <li key={region.region} className="flex items-center justify-between">
                  <span className="text-gray-700">{region.region}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-40 bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{ width: `${region.score}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{region.score}%</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">أكثر الأجهزة والمنصات خطورة</h2>
            <div className="space-y-3">
              {topDevices.map((device) => (
                <div
                  key={device.device}
                  className="flex items-center justify-between bg-gray-50 rounded-lg p-3 border border-gray-100"
                >
                  <span className="text-gray-700 text-sm">{device.device}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      device.risk === 'High'
                        ? 'bg-red-100 text-red-700'
                        : device.risk === 'Medium'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {device.risk}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">خريطة حرارية للمناطق</h2>
          <p className="text-sm text-gray-500 mb-4">
            تمثيل بصري سريع يوضح تركز المخاطر في المناطق بدون الحاجة لخرائط فعلية داخل الواجهة.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {heatmapZones.map((zone) => (
              <div
                key={zone.zone}
                className={`rounded-2xl p-4 text-center text-sm font-semibold text-white shadow ${
                  zone.intensity === 'High'
                    ? 'bg-gradient-to-br from-red-500 to-red-600'
                    : zone.intensity === 'Medium'
                    ? 'bg-gradient-to-br from-yellow-500 to-amber-500'
                    : 'bg-gradient-to-br from-green-500 to-emerald-500'
                }`}
              >
                <p>{zone.zone}</p>
                <p className="text-xs text-white/80 mt-1">{zone.intensity}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">التنبيهات الأمنية</h2>
            <div className="flex gap-2">
              {(['All', 'High', 'Medium', 'Low'] as RiskFilter[]).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setRiskFilter(filter)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    riskFilter === filter
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter === 'All'
                    ? 'الكل'
                    : filter === 'High'
                    ? 'عالي'
                    : filter === 'Medium'
                    ? 'متوسط'
                    : 'منخفض'}
                </button>
              ))}
            </div>
          </div>
          <AlertsTable alerts={filteredAlerts} showActions />
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">سجل الحوكمة والتدقيق</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-500 uppercase text-xs">
                  <th className="px-4 py-3 text-right">التاريخ والوقت</th>
                  <th className="px-4 py-3 text-right">الإجراء</th>
                  <th className="px-4 py-3 text-right">مستوى الخطورة</th>
                  <th className="px-4 py-3 text-right">تم بواسطة</th>
                  <th className="px-4 py-3 text-right">النتيجة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {governanceLog.map((log) => (
                  <tr key={log.timestamp} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700">{log.timestamp}</td>
                    <td className="px-4 py-3 text-gray-700">{log.action}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          log.level === 'عالٍ'
                            ? 'bg-red-100 text-red-700'
                            : log.level === 'متوسط'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-green-100 text-green-700'
                        }`}
                      >
                        {log.level}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-700">{log.owner}</td>
                    <td className="px-4 py-3 text-gray-500">{log.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SecurityDashboard() {
  return (
    <ProtectedRoute requiredRole="analyst">
      <SecurityDashboardContent />
    </ProtectedRoute>
  )
}

