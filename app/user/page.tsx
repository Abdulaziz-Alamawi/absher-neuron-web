'use client'

import { useState } from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'
import RiskBadge from '@/components/RiskBadge'
import { mockUserRisk } from '@/lib/mockData'
import Link from 'next/link'
import {
  HiShieldCheck,
  HiBell,
  HiArrowRight,
  HiDeviceMobile,
  HiCamera,
  HiWifi,
  HiInformationCircle,
} from 'react-icons/hi'

const verificationSteps = [
  {
    title: 'التحقق من الجهاز',
    description: 'مطابقة بصمة الجهاز مع الأجهزة الموثوقة سابقاً.',
    icon: <HiDeviceMobile className="text-xl" />,
  },
  {
    title: 'التحقق ببصمة الوجه',
    description: 'طلب Face ID عبر نفاذ للتأكد من هوية المستخدم.',
    icon: <HiCamera className="text-xl" />,
  },
  {
    title: 'التحقق من الشبكة',
    description: 'مراجعة موقع الشبكة وسجل الاتصال للتأكد من خلوه من المخاطر.',
    icon: <HiWifi className="text-xl" />,
  },
]

type VerificationStatus = 'blocked' | 'success' | 'failed'

function CitizenView() {
  const [status, setStatus] = useState<VerificationStatus>('blocked')

  const resultMessage =
    status === 'success'
      ? { title: 'تم التحقق بنجاح', body: 'يمكنك الآن متابعة استخدام خدمات أبشر بأمان.' }
      : status === 'failed'
      ? {
          title: 'فشل التحقق',
          body: 'سيتم التواصل معك من الفريق المختص للتأكد من سلامة حسابك وإعادة التفعيل.',
        }
      : {
          title: 'تم إيقاف العملية مؤقتاً للتحقق',
          body: 'نحتاج لتنفيذ خطوات حماية إضافية قبل السماح بإكمال العملية.',
        }

  const stepState = (index: number) => {
    if (status === 'blocked') return index === 0 ? 'current' : 'pending'
    if (status === 'success') return 'completed'
    return index === 0 ? 'warning' : 'pending'
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-red-100">
          <div className="flex items-center gap-3 text-red-600 mb-4">
            <HiInformationCircle className="text-2xl" />
            <h1 className="text-2xl font-bold">{resultMessage.title}</h1>
          </div>
          <p className="text-gray-600 mb-4">{resultMessage.body}</p>
          <div className="flex flex-wrap gap-3 text-sm text-gray-500">
            <span className="px-3 py-1 rounded-full bg-red-50 text-red-700 font-semibold">
              رقم الحالة: SEC-90821
            </span>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
              جلسة المواطن
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 border-r-4 border-primary space-y-4">
          <div className="flex items-center gap-3">
            <HiShieldCheck className="text-primary text-2xl" />
            <h2 className="text-xl font-semibold text-gray-900">الوضع الأمني لحسابك</h2>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <RiskBadge level={mockUserRisk.riskLevel} score={mockUserRisk.score} showScore />
            <p className="text-sm text-gray-600">
              يتم تحديث الهوية السلوكية باستمرار. أي انحراف عن النمط الطبيعي يوقف العملية لحمايتك.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 border border-gray-100 space-y-6">
          <div className="flex items-center gap-3">
            <HiBell className="text-primary text-2xl" />
            <h2 className="text-xl font-semibold text-gray-900">خطوات التحقق التكيفية</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {verificationSteps.map((step, index) => {
              const currentState = stepState(index)
              const stateStyles =
                currentState === 'completed'
                  ? 'border-green-200 bg-green-50 text-green-700'
                  : currentState === 'current'
                  ? 'border-primary bg-primary/5 text-primary'
                  : currentState === 'warning'
                  ? 'border-red-200 bg-red-50 text-red-600'
                  : 'border-gray-200 text-gray-600'

              return (
                <div key={step.title} className={`rounded-2xl border ${stateStyles} p-4 space-y-2`}>
                  <div className="flex items-center gap-2 font-semibold">
                    {step.icon}
                    <span>{step.title}</span>
                  </div>
                  <p className="text-sm">{step.description}</p>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setStatus('success')}
              className="flex-1 bg-primary text-white rounded-xl py-3 font-semibold shadow hover:bg-primary-dark transition"
            >
              تم التحقق
            </button>
            <button
              onClick={() => setStatus('failed')}
              className="flex-1 border border-red-300 text-red-600 rounded-xl py-3 font-semibold hover:bg-red-50 transition"
            >
              فشل التحقق
            </button>
            <button
              onClick={() => setStatus('blocked')}
              className="flex-1 border border-gray-200 text-gray-700 rounded-xl py-3 font-semibold hover:bg-gray-50 transition"
            >
              إعادة المحاولة
            </button>
          </div>
        </div>

        {status !== 'blocked' && (
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">ما الخطوة التالية؟</h3>
            {status === 'success' ? (
              <p className="text-gray-600">
                تم تحرير الجلسة بنجاح. يمكنك العودة إلى خدمات أبشر، أو التوجه مباشرة للوحة التحكم
                لاستعراض تفاصيل الأمان.
              </p>
            ) : (
              <p className="text-gray-600">
                تم رفع الحالة لمركز أمن الهوية. سيقوم الفريق بالتواصل معك عبر القنوات الرسمية
                خلال دقائق للتأكد من سلامة الحساب.
              </p>
            )}
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark"
              >
                <HiArrowRight />
                الانتقال للوحة التحكم
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                العودة للصفحة الرئيسية
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function CitizenPage() {
  return (
    <ProtectedRoute>
      <CitizenView />
    </ProtectedRoute>
  )
}

