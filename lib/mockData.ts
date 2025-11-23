// Mock data for development

export interface UserRisk {
  userId: string
  riskLevel: 'Low' | 'Medium' | 'High'
  score: number
  lastUpdated: string
  topFactors: string[]
}

export interface Alert {
  id: string
  riskLevel: 'Low' | 'Medium' | 'High'
  timestamp: string
  location: string
  device: string
  reason: string
  ip?: string
  os?: string
  browser?: string
  behavioralReasoning?: string
  aiExplanation?: string
  recommendedActions?: string[]
  eventHistory?: EventHistoryItem[]
}

export interface EventHistoryItem {
  id: string
  timestamp: string
  action: string
  details: string
}

export interface TimelineEvent {
  id: string
  timestamp: string
  title: string
  description: string
  type: 'success' | 'warning' | 'error' | 'info'
}

// Mock User Risk Data
export const mockUserRisk: UserRisk = {
  userId: '1234567890',
  riskLevel: 'Medium',
  score: 0.67,
  lastUpdated: '2025-11-24T10:15:00Z',
  topFactors: ['Login from new device', 'Unusual login time (03:15 AM)'],
}

// Mock Alerts Data
export const mockAlerts: Alert[] = [
  {
    id: 'ALR-0001',
    riskLevel: 'High',
    timestamp: '2025-11-23T21:10:00Z',
    location: 'Riyadh, SA',
    device: 'Windows • Chrome',
    reason: 'Impossible travel detected',
    ip: '192.168.1.100',
    os: 'Windows 11',
    browser: 'Chrome 120.0',
    behavioralReasoning:
      'تم اكتشاف محاولة تسجيل دخول من موقع جغرافي بعيد جداً عن آخر موقع معروف في وقت قصير جداً، مما يشير إلى احتمال اختراق الحساب.',
    aiExplanation:
      'النموذج حدد أنماطاً غير طبيعية في حركة المستخدم. آخر تسجيل دخول كان من الرياض في الساعة 10:00 صباحاً، بينما هذه المحاولة من جدة في الساعة 9:10 مساءً. المسافة والوقت لا يسمحان بالسفر الطبيعي.',
    recommendedActions: [
      'تأكيد هوية المستخدم عبر رسالة نصية',
      'طلب تغيير كلمة المرور',
      'مراجعة جميع الأنشطة الأخيرة',
      'إبلاغ المستخدم بالتنبيه',
    ],
    eventHistory: [
      {
        id: 'EVT-001',
        timestamp: '2025-11-23T21:10:00Z',
        action: 'Login Attempt',
        details: 'محاولة تسجيل دخول من جدة',
      },
      {
        id: 'EVT-002',
        timestamp: '2025-11-23T10:00:00Z',
        action: 'Successful Login',
        details: 'تسجيل دخول ناجح من الرياض',
      },
    ],
  },
  {
    id: 'ALR-0002',
    riskLevel: 'Medium',
    timestamp: '2025-11-23T15:30:00Z',
    location: 'Riyadh, SA',
    device: 'iPhone • Safari',
    reason: 'Unusual login time',
    ip: '192.168.1.101',
    os: 'iOS 17.1',
    browser: 'Safari',
    behavioralReasoning:
      'تم اكتشاف تسجيل دخول في وقت غير معتاد بالنسبة للمستخدم. عادة ما يسجل المستخدم دخوله خلال ساعات العمل، بينما هذه المحاولة كانت في الساعة 3:30 صباحاً.',
    aiExplanation:
      'تحليل الأنماط السلوكية يظهر أن المستخدم عادة ما يصل إلى حسابه بين الساعة 8 صباحاً و 6 مساءً. هذه المحاولة خارج النمط المعتاد بنسبة 95%.',
    recommendedActions: [
      'إرسال تنبيه للمستخدم',
      'طلب تأكيد إضافي',
      'مراقبة الأنشطة القادمة',
    ],
  },
  {
    id: 'ALR-0003',
    riskLevel: 'Low',
    timestamp: '2025-11-22T12:00:00Z',
    location: 'Riyadh, SA',
    device: 'Windows • Edge',
    reason: 'New device detected',
    ip: '192.168.1.102',
    os: 'Windows 10',
    browser: 'Edge 119.0',
  },
]

// Mock Timeline Events
export const mockTimelineEvents: TimelineEvent[] = [
  {
    id: 'TL-001',
    timestamp: '2025-11-24T10:15:00Z',
    title: 'تحديث تقييم المخاطر',
    description: 'تم تحديث مستوى المخاطر إلى متوسط بناءً على تحليل الأنشطة الأخيرة',
    type: 'warning',
  },
  {
    id: 'TL-002',
    timestamp: '2025-11-23T21:10:00Z',
    title: 'تنبيه أمني',
    description: 'تم اكتشاف نشاط مشبوه - محاولة تسجيل دخول من موقع جغرافي جديد',
    type: 'error',
  },
  {
    id: 'TL-003',
    timestamp: '2025-11-23T15:30:00Z',
    title: 'تسجيل دخول غير معتاد',
    description: 'تم تسجيل الدخول في وقت غير معتاد بالنسبة للمستخدم',
    type: 'warning',
  },
  {
    id: 'TL-004',
    timestamp: '2025-11-22T12:00:00Z',
    title: 'جهاز جديد',
    description: 'تم اكتشاف جهاز جديد - Windows • Edge',
    type: 'info',
  },
  {
    id: 'TL-005',
    timestamp: '2025-11-22T08:00:00Z',
    title: 'تسجيل دخول ناجح',
    description: 'تم تسجيل الدخول بنجاح من الجهاز المعتاد',
    type: 'success',
  },
]

// Mock Security Dashboard Stats
export const mockSecurityStats = {
  highRiskAccounts: 23,
  alerts24h: 156,
  totalAlerts: 1247,
  resolvedAlerts: 1023,
}

