interface RiskBadgeProps {
  level: 'Low' | 'Medium' | 'High'
  score?: number
  showScore?: boolean
}

export default function RiskBadge({ level, score, showScore = false }: RiskBadgeProps) {
  const getRiskConfig = () => {
    switch (level) {
      case 'Low':
        return {
          label: 'منخفض',
          bgColor: 'bg-green-100',
          textColor: 'text-green-800',
          borderColor: 'border-green-300',
          icon: '✓',
        }
      case 'Medium':
        return {
          label: 'متوسط',
          bgColor: 'bg-yellow-100',
          textColor: 'text-yellow-800',
          borderColor: 'border-yellow-300',
          icon: '⚠',
        }
      case 'High':
        return {
          label: 'عالي',
          bgColor: 'bg-red-100',
          textColor: 'text-red-800',
          borderColor: 'border-red-300',
          icon: '🔴',
        }
      default:
        return {
          label: 'غير محدد',
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-800',
          borderColor: 'border-gray-300',
          icon: '?',
        }
    }
  }

  const config = getRiskConfig()

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 ${config.bgColor} ${config.textColor} ${config.borderColor} font-semibold`}
    >
      <span className="text-lg">{config.icon}</span>
      <span>{config.label}</span>
      {showScore && score !== undefined && (
        <span className="text-sm opacity-75">({(score * 100).toFixed(0)}%)</span>
      )}
    </div>
  )
}

