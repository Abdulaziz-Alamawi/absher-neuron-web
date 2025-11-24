'use client'

import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import {
  HiShieldCheck,
  HiChartBar,
  HiLightningBolt,
  HiEye,
  HiLockClosed,
  HiCog,
  HiDocumentText,
  HiExclamationCircle,
  HiUsers,
  HiLocationMarker,
} from 'react-icons/hi'

export default function Home() {
  const services = [
    {
      icon: <HiShieldCheck />,
      title: 'الهوية السلوكية الرقمية',
      description:
        'إنشاء هوية سلوكية فريدة لكل مستخدم بناءً على أنماط الاستخدام والتفاعل مع الأنظمة المختلفة',
      example: 'يلاحظ تغيّر طريقة كتابة المستخدم أو جهاز جديد غير معتاد فيفعّل تحقق إضافي',
    },
    {
      icon: <HiChartBar />,
      title: 'التحليل التنبؤي',
      description:
        'استخدام تقنيات الذكاء الاصطناعي للتنبؤ بالتهديدات الأمنية قبل حدوثها وحماية الأنظمة بشكل استباقي',
      example: 'تحليل الأنماط السلوكية للتنبؤ باحتمالية محاولة اختراق قبل حدوثها',
    },
    {
      icon: <HiLightningBolt />,
      title: 'كشف الأنشطة المشبوهة',
      description:
        'رصد وتحليل أي أنشطة غير طبيعية أو مشبوهة في الوقت الفعلي مع إرسال تنبيهات فورية',
      example: 'دخول من دولتين مختلفتين في وقت قصير → يرفع مستوى التهديد',
    },
    {
      icon: <HiEye />,
      title: 'التكامل مع المنصات',
      description:
        'ربط البيانات من مختلف المنصات الحكومية (نفاذ، توكلنا، البنوك، الاتصالات) لتحليل شامل',
      example: 'ربط بيانات من نفاذ وتوكلنا والبنوك لاكتشاف أنماط احتيال متعددة المنصات',
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
        title="Absher Neuron 2.0 – نحمي قبل أن يحدث"
        subtitle="نحمي قبل أن يحدث"
        description="نظام وطني للتنبؤ بالتهديدات الأمنية وحماية الهوية الرقمية السلوكية داخل منظومة أبشر"
        showCTA={true}
      />

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
              ميزات النظام
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              نظام متكامل يستخدم أحدث تقنيات الذكاء الاصطناعي لحماية الأمن الرقمي
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                example={service.example}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-12 md:py-16 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
              كيف يعمل النظام
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              عملية بسيطة وفعالة لضمان أقصى درجات الحماية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border-r-4 border-primary relative"
              >
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {item.step}
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Layers Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
              🧠 طبقات Absher Neuron 2.0
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              بنية متكاملة من ثلاث طبقات أساسية لضمان أقصى درجات الحماية والشفافية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 border-r-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white text-3xl mb-6">
                <HiShieldCheck />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">طبقة الهوية السلوكية</h3>
              <p className="text-gray-700 leading-relaxed">
                بناء بصمة سلوكية فريدة لكل مستخدم بناءً على سرعة التفاعل، نوع الجهاز، الموقع
                الجغرافي، أنماط الكتابة، وأوقات الاستخدام المعتادة.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg p-8 border-r-4 border-purple-500">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center text-white text-3xl mb-6">
                <HiChartBar />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                طبقة استخبارات التهديدات الوطنية
              </h3>
              <p className="text-gray-700 leading-relaxed">
                ربط بيانات من نفاذ، توكلنا، البنوك، الاتصالات، وإنترنت الأشياء (IoT) لتحليل
                شامل ومتكامل يكشف الأنماط المشبوهة عبر المنصات.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg p-8 border-r-4 border-green-500">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center text-white text-3xl mb-6">
                <HiDocumentText />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">طبقة الإشراف والحوكمة</h3>
              <p className="text-gray-700 leading-relaxed">
                سجل تدقيق كامل، تفسير قرارات الذكاء الاصطناعي (Explainable AI)، وإدارة الحوادث
                الأمنية مع إمكانية التتبع والمراجعة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
              سيناريوهات الاستخدام
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              حالات حقيقية توضح قيمة النظام في حماية الأمن الرقمي الوطني
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center text-red-600 text-2xl mb-4">
                <HiExclamationCircle />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                كشف محاولة اختراق حساب مواطن
              </h3>
              <p className="text-gray-600 leading-relaxed">
                النظام يكتشف محاولة تسجيل دخول من جهاز جديد في موقع جغرافي مختلف مع تغيّر في
                أنماط الكتابة، فيفعّل تحقق إضافي ويرسل تنبيه فوري للمستخدم.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 text-2xl mb-4">
                <HiUsers />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                اكتشاف شبكة احتيال متعددة المنصات
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ربط بيانات من نفاذ وتوكلنا والبنوك يكشف أنماط مشبوهة: حسابات متعددة تستخدم نفس
                الأجهزة وعناوين IP، مما يشير إلى شبكة احتيال منظمة.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-2xl mb-4">
                <HiLocationMarker />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                تنبيه جهة حكومية عن نشاط غير طبيعي
              </h3>
              <p className="text-gray-600 leading-relaxed">
                تحليل الأنشطة في منطقة جغرافية معينة يكشف زيادة غير طبيعية في محاولات الوصول
                المشبوهة، فيتم إرسال تنبيه للجهة الحكومية المختصة لاتخاذ إجراءات استباقية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
              فوائد للمستخدمين والجهات الحكومية
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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

