'use client'

import { useMemo, useState } from 'react'
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
  HiSparkles,
  HiPlay,
} from 'react-icons/hi'

const timeRanges = [
  { id: '24h', label: 'آخر 24 ساعة', multiplier: 1, lastActivity: 'منذ ساعتين' },
  { id: '7d', label: 'آخر أسبوع', multiplier: 1.4, lastActivity: 'قبل يوم' },
  { id: '30d', label: 'آخر شهر', multiplier: 2, lastActivity: 'قبل 5 أيام' },
]

function DashboardContent() {
  const [selectedRange, setSelectedRange] = useState<'24h' | '7d' | '30d'>('24h')
  const [simulateAttack, setSimulateAttack] = useState(false)
  const [showScenario, setShowScenario] = useState(false)

  const userAlerts = useMemo(
    () => mockAlerts.filter((alert) => alert.riskLevel !== 'Low').slice(0, 5),
    [],
  )

  const rangeConfig = timeRanges.find((range) => range.id === selectedRange)!

  const riskView = simulateAttack
    ? {
        ...mockUserRisk,
        riskLevel: 'High' as const,
        score: Math.min(mockUserRisk.score + 0.2, 0.95),
        topFactors: [
          'Impossible travel within 8 minutes',
          'تسجيل دخول من جهاز جديد + سلوك كتابة مختلف',
          'ارتباط مع شبكة احتيال وطنية',
        ],
      }
    : mockUserRisk

  const alertsForRange = useMemo(() => {
    const count = Math.max(1, Math.round(userAlerts.length * rangeConfig.multiplier))
    return Array.from({ length: count }).map((_, index) => userAlerts[index % userAlerts.length])
  }, [rangeConfig.multiplier, userAlerts])

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">لوحة التحكم</h1>
            <p className="text-gray-600">
              تحكم كامل في الهوية السلوكية والتنبيهات مع محاكاة هجمات فورية.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {timeRanges.map((range) => (
              <button
                key={range.id}
                onClick={() => setSelectedRange(range.id as '24h' | '7d' | '30d')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                  selectedRange === range.id
                    ? 'bg-primary text-white shadow'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-6 border-r-4 border-primary space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">تقييم المخاطر الحالي</h2>
              <p className="text-gray-600 mb-4">
                آخر تحديث:{' '}
                {new Date(riskView.lastUpdated).toLocaleDateString('ar-SA', {
                  day: 'numeric',
                  month: 'long',
                })}
              </p>
              <div className="flex items-center gap-4">
                <RiskBadge level={riskView.riskLevel} score={riskView.score} showScore />
                <div className="w-64 bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${
                      riskView.riskLevel === 'High'
                        ? 'bg-red-500'
                        : riskView.riskLevel === 'Medium'
                        ? 'bg-yellow-500'
                        : 'bg-green-500'
                    }`}
                    style={{ width: `${riskView.score * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowScenario(true)}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
              >
                <HiSparkles />
                عرض سيناريو المحاكاة
              </button>
              <button
                onClick={() => setSimulateAttack((prev) => !prev)}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold text-white transition-colors ${
                  simulateAttack ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary-dark'
                }`}
              >
                <HiPlay className="text-lg" />
                {simulateAttack ? 'إيقاف المحاكاة' : 'تشغيل محاكاة هجوم'}
              </button>
            </div>
          </div>
          {simulateAttack && (
            <div className="bg-red-50 border border-red-100 rounded-lg p-4 text-sm text-red-700">
              وضع المحاكاة مفعّل: القيم المعروضة وهمية لتوضيح كيف تتغير نقاط الثقة وعدد التنبيهات عند اكتشاف
              Impossible Travel.
            </div>
          )}
        </div>

        {riskView.topFactors.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">العوامل الرئيسية</h3>
            <ul className="space-y-2">
              {riskView.topFactors.map((factor, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <span className="text-primary">•</span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="التنبيهات النشطة"
            value={alertsForRange.length}
            icon={<HiExclamationCircle />}
            color="red"
          />
          <StatsCard title="آخر نشاط" value={rangeConfig.lastActivity} icon={<HiClock />} color="primary" />
          <StatsCard
            title="مستوى الأمان"
            value={
              riskView.riskLevel === 'Low'
                ? 'آمن'
                : riskView.riskLevel === 'Medium'
                ? 'يحتاج متابعة'
                : 'خطر'
            }
            icon={<HiShieldCheck />}
            color={riskView.riskLevel === 'Low' ? 'green' : riskView.riskLevel === 'Medium' ? 'yellow' : 'red'}
          />
          <StatsCard
            title="نقاط الثقة"
            value={`${((1 - riskView.score) * 100).toFixed(0)}%`}
            icon={<HiTrendingUp />}
            color="accent"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">التنبيهات الأخيرة</h2>
              <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                {rangeConfig.label}
              </span>
            </div>
            <AlertsTable alerts={alertsForRange} showActions />
          </div>
          <div>
            <Timeline events={mockTimelineEvents} />
          </div>
        </div>
      </div>

      {showScenario && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">سيناريو Impossible Travel</h3>
              <button onClick={() => setShowScenario(false)} className="text-gray-400 hover:text-gray-600">
                ×
              </button>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              يسجل المستخدم دخوله من الرياض، وبعد 8 دقائق فقط تظهر محاولة من لندن على جهاز جديد. يتم إيقاف الجلسة، طلب Face ID، وإرسال تنبيه للوحة الأمن.
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• مؤشر السرعة: تغير بنسبة 65%</li>
              <li>• موقع جغرافي بعيد + جهاز غير معروف</li>
              <li>• توصية الذكاء الاصطناعي: إيقاف فوري + مراجعة الأنشطة الـ 24 ساعة الماضية</li>
            </ul>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowScenario(false)}
                className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-800"
              >
                إغلاق
              </button>
              <button
                onClick={() => {
                  setShowScenario(false)
                  setSimulateAttack(true)
                }}
                className="px-4 py-2 text-sm font-semibold bg-primary text-white rounded-lg"
              >
                شغّل المحاكاة الآن
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Dashboard() {
  return (
    <ProtectedRoute requiredRole="analyst">
      <DashboardContent />
    </ProtectedRoute>
  )
}

