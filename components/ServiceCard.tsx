'use client'

import { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  example?: string
}

export default function ServiceCard({ icon, title, description, example }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100 h-full flex flex-col">
      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary text-3xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-3 flex-grow">{description}</p>
      {example && (
        <div className="mt-auto pt-3 border-t border-gray-200">
          <p className="text-sm text-gray-500 italic">
            <span className="font-semibold text-primary">مثال:</span> {example}
          </p>
        </div>
      )}
    </div>
  )
}

