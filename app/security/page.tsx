'use client'

import { useState } from 'react'
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

export default function SecurityDashboard() {
  const [riskFilter, setRiskFilter] = useState<RiskFilter>('All')

  const filteredAlerts =
    riskFilter === 'All'
      ? mockAlerts
      : mockAlerts.filter((alert) => alert.riskLevel === riskFilter)

  const highRiskCount = mockAlerts.filter((a) => a.riskLevel === 'High').length
  const mediumRiskCount = mockAlerts.filter((a) => a.riskLevel === 'Medium').length
  const lowRiskCount = mockAlerts.filter((a) => a.riskLevel === 'Low').length

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">لوحة تحكم محلل الأمن</h1>
          <p className="text-gray-600">مراقبة شاملة للتهديدات الأمنية والأنشطة المشبوهة</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

        {/* Risk Distribution */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
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
                  style={{
                    width: `${(highRiskCount / mockAlerts.length) * 100}%`,
                  }}
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
                  style={{
                    width: `${(mediumRiskCount / mockAlerts.length) * 100}%`,
                  }}
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
                  style={{
                    width: `${(lowRiskCount / mockAlerts.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Alerts Table */}
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
          <AlertsTable alerts={filteredAlerts} showActions={true} />
        </div>
      </div>
    </div>
  )
}

