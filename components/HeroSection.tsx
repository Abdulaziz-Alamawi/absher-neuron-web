import Link from 'next/link'

interface HeroSectionProps {
  title: string
  subtitle: string
  showCTA?: boolean
}

export default function HeroSection({ title, subtitle, showCTA = false }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl text-primary-light mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
          {showCTA && (
            <div className="flex justify-center gap-4">
              <Link
                href="/dashboard"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                ابدأ الآن
              </Link>
              <Link
                href="/about"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                اعرف المزيد
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

