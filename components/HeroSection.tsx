'use client'

import Link from 'next/link'

interface HeroSectionProps {
  title: string
  subtitle: string
  description?: string
  showCTA?: boolean
}

export default function HeroSection({ title, subtitle, description, showCTA = false }: HeroSectionProps) {
  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-primary-light mb-4 max-w-3xl mx-auto font-semibold">
            {subtitle}
          </p>
          {description && (
            <p className="text-base md:text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              {description}
            </p>
          )}
          {showCTA && (
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link
                href="/dashboard"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center shadow-lg"
              >
                ابدأ الآن
              </Link>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                اعرف المزيد
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

