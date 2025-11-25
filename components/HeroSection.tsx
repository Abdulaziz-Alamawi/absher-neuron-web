'use client'

import Link from 'next/link'

interface HeroCTA {
  label: string
  href?: string
  variant?: 'primary' | 'outline'
  onClick?: () => void
}

interface HeroSectionProps {
  title: string
  subtitle: string
  description?: string
  showCTA?: boolean
  ctas?: HeroCTA[]
}

export default function HeroSection({
  title,
  subtitle,
  description,
  showCTA = false,
  ctas,
}: HeroSectionProps) {
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
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
              {(ctas && ctas.length > 0
                ? ctas
                : [
                    { label: 'شاهد لوحة التحكم', href: '/dashboard', variant: 'primary' as const },
                    {
                      label: 'كيف يعمل؟',
                      variant: 'outline' as const,
                      onClick: () => scrollToSection('how-it-works'),
                    },
                  ]
              ).map((cta, index) =>
                cta.href ? (
                  <Link
                    key={`${cta.label}-${index}`}
                    href={cta.href}
                    className={`px-8 py-3 rounded-lg font-semibold text-center shadow-lg transition-colors ${
                      cta.variant === 'outline'
                        ? 'bg-transparent border-2 border-white text-white hover:bg-white/10'
                        : 'bg-white text-primary hover:bg-gray-100'
                    }`}
                  >
                    {cta.label}
                  </Link>
                ) : (
                  <button
                    key={`${cta.label}-${index}`}
                    onClick={cta.onClick}
                    className={`px-8 py-3 rounded-lg font-semibold shadow-lg transition-colors ${
                      cta.variant === 'outline'
                        ? 'bg-transparent border-2 border-white text-white hover:bg-white/10'
                        : 'bg-white text-primary hover:bg-gray-100'
                    }`}
                  >
                    {cta.label}
                  </button>
                ),
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

