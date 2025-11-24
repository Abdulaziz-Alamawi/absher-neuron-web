'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import RiskBadge from '@/components/RiskBadge'
import { mockAlerts } from '@/lib/mockData'
import {
  HiClock,
  HiLocationMarker,
  HiDeviceMobile,
  HiGlobeAlt,
  HiChip,
  HiShieldCheck,
} from 'react-icons/hi'
import { use } from 'react'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default function AlertDetailsPage({ params }: PageProps) {
  const { id } = use(params)
  const alert = mockAlerts.find((a) => a.id === id)

  if (!alert) {
    notFound()
  }

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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/security"
            className="text-primary hover:text-primary-dark mb-4 inline-block"
          >
            ← العودة إلى لوحة الأمن
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">تفاصيل التنبيه</h1>
              <p className="text-gray-600">رقم التنبيه: {alert.id}</p>
            </div>
            <RiskBadge level={alert.riskLevel} />
          </div>
        </div>

        {/* Alert Info Card */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">معلومات التنبيه</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <HiClock className="text-gray-400" size={20} />
              <div>
                <p className="text-sm text-gray-500">الوقت</p>
                <p className="font-medium text-gray-900">{formatDate(alert.timestamp)}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <HiLocationMarker className="text-gray-400" size={20} />
              <div>
                <p className="text-sm text-gray-500">الموقع</p>
                <p className="font-medium text-gray-900">{alert.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <HiDeviceMobile className="text-gray-400" size={20} />
              <div>
                <p className="text-sm text-gray-500">الجهاز</p>
                <p className="font-medium text-gray-900">{alert.device}</p>
              </div>
            </div>
            {alert.ip && (
              <div className="flex items-center gap-3">
                <HiGlobeAlt className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500">عنوان IP</p>
                  <p className="font-medium text-gray-900">{alert.ip}</p>
                </div>
              </div>
            )}
            {alert.os && (
              <div className="flex items-center gap-3">
                <HiChip className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500">نظام التشغيل</p>
                  <p className="font-medium text-gray-900">{alert.os}</p>
                </div>
              </div>
            )}
            {alert.browser && (
              <div className="flex items-center gap-3">
                <HiGlobeAlt className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500">المتصفح</p>
                  <p className="font-medium text-gray-900">{alert.browser}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Reason */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">سبب التنبيه</h2>
          <p className="text-gray-700 leading-relaxed">{alert.reason}</p>
        </div>

        {/* Behavioral Reasoning */}
        {alert.behavioralReasoning && (
          <div className="bg-blue-50 border-r-4 border-blue-500 rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <HiShieldCheck className="text-blue-500" />
              التحليل السلوكي
            </h2>
            <p className="text-gray-700 leading-relaxed">{alert.behavioralReasoning}</p>
          </div>
        )}

        {/* AI Explanation */}
        {alert.aiExplanation && (
          <div className="bg-purple-50 border-r-4 border-purple-500 rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">شرح قرار الذكاء الاصطناعي</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{alert.aiExplanation}</p>
            <div className="bg-white rounded-lg p-4 mt-4">
              <p className="text-sm text-gray-600 mb-2">
                <strong>مستوى الثقة:</strong> 95%
              </p>
              <p className="text-sm text-gray-600">
                <strong>النموذج المستخدم:</strong> Behavioral Pattern Analysis v2.1
              </p>
            </div>
          </div>
        )}

        {/* Recommended Actions */}
        {alert.recommendedActions && alert.recommendedActions.length > 0 && (
          <div className="bg-yellow-50 border-r-4 border-yellow-500 rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">الإجراءات الموصى بها</h2>
            <ul className="space-y-2">
              {alert.recommendedActions.map((action, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span className="text-gray-700">{action}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Event History */}
        {alert.eventHistory && alert.eventHistory.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">سجل الأحداث</h2>
            <div className="space-y-4">
              {alert.eventHistory.map((event) => (
                <div
                  key={event.id}
                  className="border-r-4 border-gray-200 pr-4 pl-4 py-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{event.action}</h3>
                    <span className="text-sm text-gray-500">{formatDate(event.timestamp)}</span>
                  </div>
                  <p className="text-sm text-gray-600">{event.details}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

