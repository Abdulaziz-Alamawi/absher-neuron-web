'use client'

import Link from 'next/link'
import { HiOutlineBan, HiArrowRight } from 'react-icons/hi'

export default function AccessDeniedPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl border border-red-100 p-10 text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center">
            <HiOutlineBan className="text-4xl" />
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold text-red-700 mb-2">❗لم يتم التحقق من هويتك</p>
          <p className="text-gray-600">
            تم تعليق الوصول إلى حسابك، وتم رفع الحالة للقسم الأمني. سيتم التواصل معك عبر القنوات
            الرسمية خلال وقت قصير لاستكمال إجراءات التحقق.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Link
            href="/login"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            <HiArrowRight />
            العودة لتسجيل الدخول
          </Link>
          <Link
            href="/"
            className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold"
          >
            الصفحة الرئيسية
          </Link>
        </div>
        <p className="text-xs text-gray-500">
          رقم الحالة المرجعية: SEC-LOCK-204 | يمكنك التواصل مع مركز الأمن الرقمي لمزيد من
          المعلومات.
        </p>
      </div>
    </div>
  )
}

