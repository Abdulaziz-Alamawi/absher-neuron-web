'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getUserRole, isAuthenticated, UserRole } from '@/lib/auth'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: UserRole
  redirectTo?: string
}

export default function ProtectedRoute({
  children,
  requiredRole,
  redirectTo = requiredRole === 'analyst' ? '/analyst-login' : '/login',
}: ProtectedRouteProps) {
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push(redirectTo)
      return
    }

    if (requiredRole && getUserRole() !== requiredRole) {
      router.push(redirectTo)
    }
  }, [redirectTo, requiredRole, router])

  if (!isAuthenticated()) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">جاري التحميل...</p>
        </div>
      </div>
    )
  }

  if (requiredRole && getUserRole() !== requiredRole) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">جارٍ التحقق من الصلاحيات...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}









