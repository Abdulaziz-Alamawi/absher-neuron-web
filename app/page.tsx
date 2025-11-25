'use client'

import Link from 'next/link'
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
  HiSparkles,
  HiCursorClick,
} from 'react-icons/hi'

const services = [
  {
    icon: <HiShieldCheck />,
    title: 'الهوية السلوكية الرقمية',
    description:
      'بصمة سلوكية فريدة لكل مستخدم تعتمد على سرعة الكتابة، الأجهزة الموثوقة، والموقع الجغرافي.',
    example: 'يرصد تغيير نمط الكتابة ويطلب Face ID من نفاذ قبل السماح بإكمال الخدمة.',
  },
  {
    icon: <HiChartBar />,
    title: 'استخبارات التهديدات الوطنية',
    description:
      'ربط بيانات نفاذ، توكلنا، البنوك، الاتصالات وIoT لإظهار العلاقات المشبوهة بين الحسابات.',
    example: 'يكتشف أن خمسة حسابات تستخدم نفس الجهاز ويرفع تنبيه لشبكة احتيال.',
  },
  {
    icon: <HiLightningBolt />,
    title: 'استجابة تلقائية ذكية',
    description:
      'قرارات فورية: إيقاف، تحقق إضافي، أو تصعيد لمركز العمليات اعتماداً على مستوى الخطورة.',
    example: 'محاولة “Impossible Travel” توقف الجلسة وتطلب تحقق حيوي قبل الاستمرار.',
  },
  {
    icon: <HiEye />,
    title: 'لوحات قيادة تفاعلية',
    description:
      'لوحات Dashboards ومؤشرات حية للمستخدمين والمحللين مع سجل تدقيق قابل للتتبع.',
    example: 'محلل الأمن يشغّل محاكاة هجوم ويشاهد تغير نقاط الثقة في ثوانٍ.',
  },
]

const workflowSteps = [
  {
    step: '1',
    title: 'مراقبة السلوك',
    description: 'جمع نقاط السلوك لحظياً من أبشر، نفاذ، الأجهزة، الشبكات، والمعاملات المالية.',
  },
  {
    step: '2',
    title: 'تحليل وذكاء تنبؤي',
    description: 'محرك AI يقارن مع الهوية السلوكية ويستدعي استخبارات التهديدات الوطنية.',
  },
  {
    step: '3',
    title: 'تفعيل القرار',
    description: 'تنبيه، تحقق إضافي، أو إيقاف فوري مع إرسال مبررات القرار للحوكمة.',
  },
]

const differentiators = [
  {
    title: 'الأمن التقليدي',
    icon: <HiLockClosed className="text-gray-400 text-3xl" />,
    points: ['كلمة مرور + OTP فقط', 'لا يوجد مراقبة بعد تسجيل الدخول', 'غياب الذكاء التنبؤي'],
  },
  {
    title: 'Absher Neuron 2.0',
    icon: <HiSparkles className="text-primary text-3xl" />,
    points: [
      'هوية سلوكية حية تتحدّث كل ثانية',
      'ربط وطني بين الأجهزة، الحسابات، والمواقع',
      'ذكاء اصطناعي يسبق الهجوم ويتخذ قراراً مبرراً',
    ],
  },
]

const benefits = [
  {
    icon: <HiLockClosed />,
    title: 'للمستخدمين',
    items: ['تنبيهات فورية لأي سلوك غير معتاد', 'جلسات آمنة حتى لو تسرّبت كلمة المرور', 'تجربة تحقق مريحة تعتمد على الثقة السلوكية'],
  },
  {
    icon: <HiCog />,
    title: 'للجهات الحكومية',
    items: ['خفض الاحتيال العابر للمنصات', 'تصعيد ذكي للحوادث حسب الخطورة', 'تفسير كامل لقرارات الذكاء الاصطناعي وسجل تدقيق لا يُعدّل'],
  },
]

const architectureFlow = [
  {
    label: 'مصادر البيانات',
    details: ['نفاذ / أبشر', 'البنوك والاتصالات', 'أجهزة وإنترنت الأشياء'],
  },
  {
    label: 'Absher Neuron Core',
    details: ['محرك الهوية السلوكية', 'ذكاء التهديدات الوطنية', 'قرارات Explainable AI'],
  },
  {
    label: 'المخرجات',
    details: ['لوحات التحكم', 'التنبيهات وAPIs', 'التكامل مع الجهات'],
  },
]

const useCasesPreview = [
  {
    icon: <HiExclamationCircle />,
    title: 'محاولة احتيال بنكي',
    description:
      'مستخدم يحاول تحديث رقم جوال من دولة مختلفة. النظام يوقف العملية، يطلب Face ID، ويرسل تنبيه.',
  },
  {
    icon: <HiUsers />,
    title: 'شبكة حسابات مزيفة',
    description:
      'خمسة حسابات بنفس الجهاز والنمط. يتم تخفيض الثقة وإحالة الحالة لمركز العمليات الوطني.',
  },
  {
    icon: <HiLocationMarker />,
    title: 'جهاز مفقود',
    description:
      'تسجيل دخول من جهاز معروف لكن سلوك الكتابة مختلف. يتم إدخال الحساب في وضع المراقبة.',
  },
]

export default function Home() {
  return (
    <div>
      <HeroSection
        title="Absher Neuron 2.0 – نحمي قبل أن يحدث"
        subtitle="هوية سلوكية + استخبارات وطنية + AI تفاعلي"
        description="منصة وطنية تتنبأ بالتهديدات قبل وقوعها، تربط بين أبشر ونفاذ وتوكلنا وقطاعات المال والاتصالات لرؤية موحدة لحركة المستخدم والأجهزة."
        showCTA
        ctas={[
          { label: 'شاهد نموذج لوحة التحكم', href: '/dashboard' },
          { label: 'جرّب سيناريو الهجوم', href: '/use-cases', variant: 'outline' },
        ]}
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ميزات النظام الأساسية</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              كل طبقة صممت لتوثّق الهوية السلوكية، تتوقع التهديد، وتتصرف تلقائياً مع تبرير القرار.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-12 md:py-16 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-2">كيف يعمل في ٣ خطوات؟</p>
            <h2 className="text-3xl font-bold text-gray-900">من السلوك إلى القرار خلال ثوانٍ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workflowSteps.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl shadow-lg p-8 border-r-4 border-primary relative overflow-hidden"
              >
                <span className="absolute top-6 -right-6 text-7xl font-black text-primary/10">{item.step}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 shadow-lg border border-primary/10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">لماذا يختلف عن الأمن التقليدي؟</h3>
              <div className="space-y-6">
                {differentiators.map((diff) => (
                  <div key={diff.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      {diff.icon}
                      <h4 className="text-lg font-semibold text-gray-900">{diff.title}</h4>
                    </div>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      {diff.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">مخطط هيكل المنظومة</h3>
              <p className="text-gray-600">
                رسم تخطيطي مبسط يوضح رحلة البيانات من المصادر إلى القرارات، مع إبراز أن Absher Neuron يعمل طبقاتياً.
              </p>
              <div className="bg-gray-50 rounded-2xl border border-dashed border-primary/40 p-6">
                <div className="flex flex-col lg:flex-row items-stretch gap-4">
                  {architectureFlow.map((block, index) => (
                    <div key={block.label} className="flex-1 bg-white rounded-xl shadow p-5 border border-gray-100">
                      <p className="text-sm font-semibold text-primary mb-2">
                        {index === 0
                          ? 'Data Sources'
                          : index === 1
                          ? 'Neuron Core'
                          : 'Outputs'}
                      </p>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">{block.label}</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {block.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center text-xs text-gray-500">
                  Data Sources → Absher Neuron Core → Dashboards / Alerts / APIs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold mb-2">حالات استخدام حقيقية</p>
            <h2 className="text-3xl font-bold text-gray-900">كيف يتصرف النظام في الميدان؟</h2>
            <p className="text-gray-600 mt-3">شاهد السيناريو الكامل عبر صفحة «Use Cases» الجديدة.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCasesPreview.map((useCase) => (
              <div key={useCase.title} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/use-cases"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-10 py-3 rounded-xl font-semibold shadow-lg hover:bg-primary-dark transition-colors"
            >
              <HiCursorClick />
              استعرض السيناريوهات الكاملة
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">قيمة واضحة للمستخدم والجهات</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-gradient-to-br from-primary/5 to-primary/15 rounded-2xl shadow-lg p-8 border border-primary/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white text-3xl">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{benefit.title}</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  {benefit.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="uppercase tracking-widest text-white/70 text-sm">Absher Neuron 2.0</p>
          <h2 className="text-3xl md:text-4xl font-bold">جرّب المحاكاة الآن</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            انتقل إلى لوحة التحكم، طبّق فلاتر الزمن، وشغّل محاكاة الهجوم لتشاهد كيف تتغير نقاط الثقة والتنبيهات فوراً.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/dashboard"
              className="bg-white text-primary px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-100"
            >
              افتح لوحة التحكم
            </Link>
            <Link
              href="/security"
              className="border border-white/50 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10"
            >
              راقب مركز الاستخبارات
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

