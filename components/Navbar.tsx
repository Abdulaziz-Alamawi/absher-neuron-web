'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { isAuthenticated, logout } from '@/lib/auth'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    setAuthenticated(isAuthenticated())
  }, [pathname])

  const handleLogout = () => {
    logout()
    setAuthenticated(false)
    router.push('/')
  }

  const navItems = [
    { href: '/', label: 'الرئيسية' },
    { href: '/dashboard', label: 'لوحة التحكم' },
    { href: '/security', label: 'لوحة الأمن' },
    { href: '/about', label: 'حول النظام' },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-xl font-bold text-primary">Absher Neuron</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
            {authenticated ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                تسجيل الخروج
              </button>
            ) : (
              <Link
                href="/login"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/login')
                    ? 'bg-primary text-white'
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}
              >
                تسجيل الدخول
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              {authenticated ? (
                <button
                  onClick={() => {
                    handleLogout()
                    setIsOpen(false)
                  }}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-center bg-red-500 text-white hover:bg-red-600 transition-colors"
                >
                  تسجيل الخروج
                </button>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium text-center ${
                    isActive('/login')
                      ? 'bg-primary text-white'
                      : 'bg-primary text-white hover:bg-primary-dark'
                  }`}
                >
                  تسجيل الدخول
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

