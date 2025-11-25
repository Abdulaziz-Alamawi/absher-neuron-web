'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import ProtectedRoute from '@/components/ProtectedRoute'
import { hasCitizenMonitorFlag, setCitizenMonitorFlag, getThreatLevel } from '@/lib/auth'
import { HiShieldCheck, HiOutlineInformationCircle } from 'react-icons/hi'

const services = [
  { title: 'الهوية الرقمية', description: 'إدارة الهوية الوطنية، التصاريح، وبيانات الدخول.' },
  { title: 'الجوازات', description: 'تجديد الجواز، تتبع السفر، وإدارة التأشيرات.' },
  { title: 'الرخص', description: 'إصدار وتجديد رخص القيادة والمركبات.' },
  { title: 'الحالة المدنية', description: 'سجل الأسرة، شهادات الميلاد، والوفاة.' },
  { title: 'الاستعلامات', description: 'متابعة الطلبات الحكومية والمعاملات الجارية.' },
  { title: 'الخدمات الإلكترونية', description: 'حزمة خدمات أبشر المتنوعة في منصة واحدة.' },
]

function CitizenDashboardContent() {
  const [showMonitorBanner, setShowMonitorBanner] = useState(false)
  const [threatLevel, setThreatLevelView] = useState(() => getThreatLevel())

  useEffect(() => {
    setShowMonitorBanner(hasCitizenMonitorFlag())
  }, [])

  const handleDismiss = () => {
    setCitizenMonitorFlag(false)
    setShowMonitorBanner(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <header>
          <p className="text-sm text-gray-500">Absher Neuron › المواطن</p>
          <h1 className="text-3xl font-bold text-gray-900 mt-1">لوحة الخدمات للمواطن</h1>
          <p className="text-gray-600 mt-2">
            واجهة تحاكي خدمات أبشر الرسمية مع مراقبة ذكية للتهديدات الأمنية.
          </p>
        </header>

        {showMonitorBanner && (
          <div className="bg-white border border-yellow-200 rounded-2xl p-5 shadow flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <HiOutlineInformationCircle className="text-yellow-600 text-3xl" />
              <div>
                <p className="font-semibold text-gray-900">🔒 حسابك تحت مراقبة أمان ذكية</p>
                <p className="text-sm text-gray-600">
                  ما زال الفريق الأمني يراقب نشاط الحساب حتى يتم التأكد من استقرار السلوك.
                </p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-sm text-primary font-semibold hover:text-primary-dark"
            >
              فهمت ذلك، أخفِ التنبيه
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold text-gray-900">{service.title}</h2>
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">قريباً</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <button className="text-sm font-semibold text-primary hover:text-primary-dark">
                استعراض الخدمة
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <HiShieldCheck className="text-primary text-2xl" />
            <h3 className="text-xl font-semibold text-gray-900">حالة التهديد الحالية</h3>
          </div>
          <p className="text-gray-600 mb-4">
            يتم تحديث مستوى التهديد بناءً على التحليل السلوكي المتواصل في Absher Neuron.
          </p>
          <div className="flex flex-wrap gap-3">
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                threatLevel === 'HIGH'
                  ? 'bg-red-100 text-red-700'
                  : threatLevel === 'MEDIUM'
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-green-100 text-green-700'
              }`}
            >
              {threatLevel === 'HIGH'
                ? 'تم تعليق العمليات مؤقتًا'
                : threatLevel === 'MEDIUM'
                ? 'حسابك تحت مراقبة أمان'
                : 'الوضع آمن'}
            </span>
            <Link href="/security-check" className="text-sm text-primary font-semibold">
              إعادة تنفيذ خطوات التحقق
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CitizenDashboardPage() {
  return (
    <ProtectedRoute requiredRole="citizen">
      <CitizenDashboardContent />
    </ProtectedRoute>
  )
}

