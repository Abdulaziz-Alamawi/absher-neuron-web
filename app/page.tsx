import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import {
  HiShieldCheck,
  HiChartBar,
  HiLightningBolt,
  HiEye,
  HiLockClosed,
  HiCog,
} from 'react-icons/hi'

export default function Home() {
  const services = [
    {
      icon: <HiShieldCheck />,
      title: 'الهوية السلوكية الرقمية',
      description:
        'إنشاء هوية سلوكية فريدة لكل مستخدم بناءً على أنماط الاستخدام والتفاعل مع الأنظمة المختلفة',
    },
    {
      icon: <HiChartBar />,
      title: 'التحليل التنبؤي',
      description:
        'استخدام تقنيات الذكاء الاصطناعي للتنبؤ بالتهديدات الأمنية قبل حدوثها وحماية الأنظمة بشكل استباقي',
    },
    {
      icon: <HiLightningBolt />,
      title: 'كشف الأنشطة المشبوهة',
      description:
        'رصد وتحليل أي أنشطة غير طبيعية أو مشبوهة في الوقت الفعلي مع إرسال تنبيهات فورية',
    },
    {
      icon: <HiEye />,
      title: 'التكامل مع المنصات',
      description:
        'ربط البيانات من مختلف المنصات الحكومية (نفاذ، توكلنا، البنوك، الاتصالات) لتحليل شامل',
    },
  ]

  const howItWorks = [
    {
      step: '1',
      title: 'جمع البيانات',
      description: 'جمع بيانات الاستخدام والتفاعل من مختلف المنصات والأنظمة',
    },
    {
      step: '2',
      title: 'التحليل السلوكي',
      description: 'تحليل الأنماط السلوكية وإنشاء بصمة رقمية فريدة لكل مستخدم',
    },
    {
      step: '3',
      title: 'التنبؤ بالتهديدات',
      description: 'استخدام نماذج الذكاء الاصطناعي للتنبؤ بالتهديدات المحتملة',
    },
    {
      step: '4',
      title: 'اتخاذ الإجراءات',
      description: 'إرسال تنبيهات فورية واتخاذ إجراءات أمنية تلقائية عند الحاجة',
    },
  ]

  const benefits = [
    {
      icon: <HiLockClosed />,
      title: 'للمستخدمين',
      items: [
        'حماية أفضل لحساباتهم الشخصية',
        'تنبيهات فورية عند أي نشاط مشبوه',
        'شفافية في تقييم المخاطر',
        'تجربة استخدام آمنة وموثوقة',
      ],
    },
    {
      icon: <HiCog />,
      title: 'للجهات الحكومية',
      items: [
        'تحسين الأمن السيبراني الوطني',
        'تقليل حالات الاحتيال والاختراق',
        'اتخاذ قرارات أمنية مدعومة بالبيانات',
        'توفير موارد أمنية بشكل أكثر كفاءة',
      ],
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Absher Neuron 2.0"
        subtitle="نحمي قبل أن يحدث."
        showCTA={true}
      />

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ميزات النظام
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نظام متكامل يستخدم أحدث تقنيات الذكاء الاصطناعي لحماية الأمن الرقمي
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              كيف يعمل النظام
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              عملية بسيطة وفعالة لضمان أقصى درجات الحماية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border-r-4 border-primary"
              >
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              فوائد للمستخدمين والجهات الحكومية
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl shadow-lg p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-white text-3xl">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{benefit.title}</h3>
                </div>
                <ul className="space-y-3">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

