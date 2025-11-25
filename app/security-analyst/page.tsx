'use client'

import ProtectedRoute from '@/components/ProtectedRoute'
import {
  HiFire,
  HiLocationMarker,
  HiDeviceMobile,
  HiViewBoards,
  HiChartSquareBar,
} from 'react-icons/hi'

const threatSummary = [
  { label: 'حسابات عالية الخطورة', value: 32, tone: 'text-red-600', bg: 'bg-red-50' },
  { label: 'محاولات دخول مشبوهة / 24 ساعة', value: 148, tone: 'text-yellow-600', bg: 'bg-yellow-50' },
  { label: 'أجهزة جديدة تحتاج مراجعة', value: 27, tone: 'text-primary', bg: 'bg-primary/10' },
]

const recentAttempts = [
  { id: 'ALR-5021', location: 'الرياض، السعودية', device: 'iOS • Safari', risk: 'High' },
  { id: 'ALR-5022', location: 'برلين، ألمانيا', device: 'Windows • Chrome', risk: 'Medium' },
  { id: 'ALR-5023', location: 'جدة، السعودية', device: 'Android • Edge', risk: 'Low' },
]

const alerts = [
  { type: 'Impossible Travel', accounts: 4, status: 'مفتوح' },
  { type: 'تعدد أجهزة', accounts: 12, status: 'قيد التحقيق' },
  { type: 'مشاركة هوية', accounts: 2, status: 'تم التصعيد' },
]

const activityLog = [
  { time: '12:40', action: 'إيقاف جلسة', owner: 'SOC-03', result: 'تم التحويل لمركز أمن الهوية' },
  { time: '11:25', action: 'تفعيل تحقق متعدد', owner: 'النظام', result: 'تم إبلاغ المواطن' },
  { time: '10:10', action: 'مراجعة أجهزة', owner: 'SOC-01', result: 'تم قبول الجهاز' },
]

function SecurityAnalystContent() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        <header>
          <p className="text-sm text-gray-400">Absher Neuron › لوحة المحلل الأمني</p>
          <h1 className="text-3xl font-bold text-gray-900 mt-1">مركز مراقبة التهديدات</h1>
          <p className="text-gray-600 mt-2">
            هذه الواجهة تعرض مؤشرات أمنية فقط ولا تحتوي على بيانات شخصية أو معاملات مدنية.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {threatSummary.map((item) => (
            <div
              key={item.label}
              className={`rounded-2xl border ${item.bg} ${item.tone} p-5 shadow-sm flex flex-col gap-2`}
            >
              <p className="text-sm">{item.label}</p>
              <p className="text-3xl font-bold">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <HiFire className="text-red-500 text-2xl" />
              <h2 className="text-xl font-semibold text-gray-900">آخر محاولات الدخول</h2>
            </div>
            <div className="space-y-4">
              {recentAttempts.map((attempt) => (
                <div key={attempt.id} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-semibold text-gray-900">{attempt.id}</p>
                    <p className="text-gray-500 flex items-center gap-1">
                      <HiLocationMarker className="text-gray-400" />
                      {attempt.location}
                    </p>
                    <p className="text-gray-500 flex items-center gap-1">
                      <HiDeviceMobile className="text-gray-400" />
                      {attempt.device}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      attempt.risk === 'High'
                        ? 'bg-red-100 text-red-700'
                        : attempt.risk === 'Medium'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {attempt.risk}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <HiViewBoards className="text-primary text-2xl" />
              <h2 className="text-xl font-semibold text-gray-900">قائمة التنبيهات</h2>
            </div>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.type} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-semibold text-gray-900">{alert.type}</p>
                    <p className="text-gray-500">الحسابات المتأثرة: {alert.accounts}</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {alert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <HiChartSquareBar className="text-primary text-2xl" />
            <h2 className="text-xl font-semibold text-gray-900">سجل النشاط الأمني</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-right">
              <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
                <tr>
                  <th className="px-4 py-2">الوقت</th>
                  <th className="px-4 py-2">الإجراء</th>
                  <th className="px-4 py-2">منفذ الإجراء</th>
                  <th className="px-4 py-2">النتيجة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {activityLog.map((log) => (
                  <tr key={`${log.time}-${log.action}`} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-600">{log.time}</td>
                    <td className="px-4 py-3 font-semibold text-gray-900">{log.action}</td>
                    <td className="px-4 py-3 text-gray-600">{log.owner}</td>
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

export default function SecurityAnalystPage() {
  return (
    <ProtectedRoute requiredRole="analyst">
      <SecurityAnalystContent />
    </ProtectedRoute>
  )
}

