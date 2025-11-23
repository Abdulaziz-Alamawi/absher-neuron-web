import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'
import LayoutRTL from '@/components/LayoutRTL'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cairo',
})

export const metadata: Metadata = {
  title: 'Absher Neuron 2.0 - المنظومة العصبية الوطنية للتنبؤ الأمني',
  description: 'نظام ذكاء اصطناعي لتعزيز الأمن الرقمي الوطني عبر التحليل السلوكي والتنبؤ بالتهديدات',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-arabic antialiased">
        <LayoutRTL>{children}</LayoutRTL>
      </body>
    </html>
  )
}

