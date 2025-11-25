'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { HiShieldCheck, HiEye, HiEyeOff, HiLockClosed, HiUser } from 'react-icons/hi'
import { isAuthenticated, setAuthenticated, setUserRole, setThreatLevel, setCitizenMonitorFlag } from '@/lib/auth'

export default function AnalystLoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isAuthenticated()) {
      router.push('/security-analyst')
    }
  }, [router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setAuthenticated(true)
      setUserRole('analyst')
      setThreatLevel('MEDIUM')
      setCitizenMonitorFlag(false)
      router.push('/security-analyst')
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-primary/5 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="flex justify-center items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-3xl">N</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary">لوحة المحلل الأمني</h1>
              <p className="text-sm text-gray-600">الوصول مخصص لفريق الأمن فقط</p>
            </div>
          </Link>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">تسجيل دخول المحلل الأمني</h2>
          <p className="text-gray-600 text-sm">يُسمح بعرض بيانات الأمن ومؤشرات المخاطر فقط.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                اسم المستخدم
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                  <HiUser />
                </span>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="block w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="security.ops"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                كلمة المرور
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                  <HiLockClosed />
                </span>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pr-10 pl-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <HiEyeOff className="h-5 w-5" /> : <HiEye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center gap-2 py-3 px-4 rounded-lg text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
            >
              {isLoading ? 'جاري التحقق من الهوية...' : 'دخول لوحة الأمن'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200 text-xs text-gray-500 space-y-2">
            <p>
              لا تعرض هذه الواجهة أي بيانات شخصية، وتقتصر على مراقبة سلوك الحسابات والمؤشرات العامة.
            </p>
            <p>
              تحتاج للدخول كمواطن؟{' '}
              <Link href="/login" className="text-primary font-semibold">
                انتقل إلى تسجيل دخول المواطنين
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

