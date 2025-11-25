'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import ProtectedRoute from '@/components/ProtectedRoute'
import {
  getThreatLevel,
  setThreatLevel,
  setCitizenMonitorFlag,
  ThreatLevel,
} from '@/lib/auth'
import { HiCheckCircle, HiOutlineExclamation, HiRefresh } from 'react-icons/hi'

const verificationSteps = [
  {
    id: 'device',
    title: 'التحقق من الجهاز الموثوق',
    description: 'مطابقة بصمة الجهاز مع الأجهزة المسجلة سابقاً.',
  },
  {
    id: 'bio',
    title: 'التحقق بالبصمة أو الوجه',
    description: 'طلب بصمة الإصبع أو بصمة الوجه عبر التطبيق.',
  },
  {
    id: 'location',
    title: 'التحقق من الموقع الجغرافي',
    description: 'تحليل الموقع الحالي ومقارنته بالمواقع الموثوقة للحساب.',
  },
]

const levelCopy: Record<ThreatLevel, { title: string; tone: string; bg: string }> = {
  LOW: { title: 'الوضع آمن', tone: 'text-green-700', bg: 'bg-green-50' },
  MEDIUM: { title: 'حسابك تحت مراقبة أمان', tone: 'text-yellow-700', bg: 'bg-yellow-50' },
  HIGH: { title: 'تم تعليق العمليات مؤقتًا', tone: 'text-red-700', bg: 'bg-red-50' },
}

function SecurityCheckContent() {
  const router = useRouter()
  const [processingStep, setProcessingStep] = useState<string | null>(null)
  const [stepState, setStepState] = useState<Record<string, boolean>>({})
  const [threatLevel, setLevel] = useState<ThreatLevel>(() => getThreatLevel())

  const completedAll = useMemo(
    () => verificationSteps.every((step) => stepState[step.id]),
    [stepState],
  )

  const handleStep = (id: string) => {
    if (processingStep || stepState[id]) return
    setProcessingStep(id)
    setTimeout(() => {
      setStepState((prev) => ({ ...prev, [id]: true }))
      setProcessingStep(null)
      if (id === 'device') {
        setLevel('MEDIUM')
        setThreatLevel('MEDIUM')
      }
    }, 900)
  }

  const handleSuccess = () => {
    setThreatLevel('LOW')
    setCitizenMonitorFlag(true)
    router.push('/citizen-dashboard')
  }

  const handleFailure = () => {
    setThreatLevel('HIGH')
    router.push('/access-denied')
  }

  const activeLevel = levelCopy[threatLevel]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl shadow-lg border border-red-100 p-6">
          <div className="flex items-start gap-3 text-red-600">
            <HiOutlineExclamation className="text-3xl flex-shrink-0" />
            <div>
              <p className="font-bold text-lg">⚠️ تم رصد نشاط غير مألوف على حسابك</p>
              <p className="text-sm text-gray-600">
                تم إيقاف جميع العمليات مؤقتًا حتى يتم التأكد من هويتك. الرجاء إتمام الخطوات
                التالية.
              </p>
            </div>
          </div>
          <div className={`mt-4 rounded-xl p-4 flex items-center gap-3 ${activeLevel.bg}`}>
            <HiCheckCircle className={`${activeLevel.tone} text-2xl`} />
            <div>
              <p className={`font-semibold ${activeLevel.tone}`}>{activeLevel.title}</p>
              <p className="text-sm text-gray-600">
                يتم تحديث مؤشر التهديد لحظيًا بناءً على خطوات التحقق التي تكملها.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {verificationSteps.map((step) => (
            <button
              key={step.id}
              onClick={() => handleStep(step.id)}
              disabled={!!processingStep || stepState[step.id]}
              className={`text-right rounded-2xl border p-4 shadow-sm transition ${
                stepState[step.id]
                  ? 'border-green-200 bg-green-50 text-green-700'
                  : 'border-gray-200 bg-white hover:border-primary'
              }`}
            >
              <p className="font-semibold text-lg mb-2">{step.title}</p>
              <p className="text-sm text-gray-600">{step.description}</p>
              {processingStep === step.id && (
                <p className="text-xs text-primary mt-2">جارٍ التحقق...</p>
              )}
              {stepState[step.id] && (
                <p className="text-xs text-green-700 mt-2">✓ تم التحقق من هذه الخطوة</p>
              )}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow p-6 space-y-4 border border-gray-100">
          <p className="text-gray-700">
            أكمل الخطوات الثلاث قبل الاستمرار. يمكنك أيضًا إعادة تشغيل الفحص إذا لاحظت نشاطاً غير
            عادي.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleSuccess}
              disabled={!completedAll}
              className="flex-1 min-w-[200px] bg-primary text-white rounded-xl py-3 font-semibold shadow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              إنهاء التحقق والانتقال للخدمات
            </button>
            <button
              onClick={handleFailure}
              className="flex-1 min-w-[200px] border border-red-300 text-red-600 rounded-xl py-3 font-semibold hover:bg-red-50 transition"
            >
              فشل التحقق
            </button>
            <button
              onClick={() => {
                setStepState({})
                setThreatLevel('HIGH')
                setLevel('HIGH')
              }}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              <HiRefresh />
              إعادة خطوات التحقق
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SecurityCheckPage() {
  return (
    <ProtectedRoute requiredRole="citizen">
      <SecurityCheckContent />
    </ProtectedRoute>
  )
}

