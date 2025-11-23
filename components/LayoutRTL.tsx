'use client'

import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutRTLProps {
  children: React.ReactNode
}

export default function LayoutRTL({ children }: LayoutRTLProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

