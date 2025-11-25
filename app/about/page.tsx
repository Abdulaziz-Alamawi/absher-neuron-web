'use client'

import {
  HiShieldCheck,
  HiLightningBolt,
  HiChartBar,
  HiUsers,
  HiGlobeAlt,
  HiTemplate,
  HiFingerPrint,
  HiLockClosed,
} from 'react-icons/hi'

const conceptLayers = [
  {
    title: '🧩 الهوية الرقمية السلوكية',
    description:
      'بناء نموذج سلوكي فريد لكل مستخدم اعتماداً على طريقة الكتابة، سرعة التفاعل، الأجهزة الموثوقة، والموقع الجغرافي.',
    example: 'يُطلب Face ID من نفاذ عند رصد تغيير واضح في سرعة الكتابة.',
    data: 'تفاعل أبشر، بصمة الأجهزة، حركة المؤشر.',
  },
  {
    title: '🕵️‍♂️ استخبارات التهديدات الوطنية',
    description:
      'طبقة ربط وطنية تجمع بيانات نفاذ، توكلنا، البنوك، الاتصالات، وإنترنت الأشياء لاكتشاف الروابط المخفية.',
    example: 'كشف خمسة حسابات مرتبطة بنفس الجهاز ونفس المعاملات البنكية.',
    data: 'سجلات الدخول، أجهزة SIM، الشبكات المصرفية، حساسات IoT.',
  },
  {
    title: '🏛️ الإشراف والحوكمة',
    description:
      'Explainable AI، سجل تدقيق غير قابل للتعديل، وإدارة تصعيد الحوادث حسب مستوى الخطورة.',
    example: 'تنبيه مع شرح قرار الذكاء الاصطناعي يُرسل لمركز العمليات.',
    data: 'لوحات القيادة، سجلات التدقيق، تقارير الامتثال.',
  },
]

const useCases = [
  {
    title: 'محاولة احتيال بنكي',
    steps: ['تغيير رقم جوال من دولة أخرى', 'السلوك غير معتاد + جهاز جديد', 'إيقاف العملية + طلب Face ID'],
  },
  {
    title: 'جهاز مفقود/مسروق',
    steps: ['تسجيل دخول من جهاز معروف', 'نمط كتابة مختلف', 'خفض نقاط الثقة + وضع مراقبة'],
  },
  {
    title: 'شبكة حسابات مترابطة',
    steps: ['5 حسابات بنفس الجهاز', 'ذكاء التهديدات يربط الأدلة', 'تصعيد تلقائي لمركز الأمن الوطني'],
  },
]

const technicalStack = [
  { title: 'الواجهة الأمامية', details: 'Next.js 14, React, Tailwind CSS, RTL Ready' },
  { title: 'طبقة الذكاء الاصطناعي', details: 'نماذج تعلم آلي لسلوك المستخدم، مراقبة الأجهزة، تحليل المواقع' },
  { title: 'التكاملات', details: 'API Layer تربط أبشر مع نفاذ، توكلنا، البنوك، الاتصالات، IoT' },
]

const privacyPrinciples = [
  'البيانات تُعالج داخل البنية التحتية الوطنية وتخضع لضوابط الحكومة الرقمية.',
  'تركيز على الأنماط المجمّعة وليس البيانات الشخصية الخام.',
  'Explainable AI يضمن مبررات واضحة لكل قرار.',
  'سجل تدقيق غير قابل للتعديل لكل إجراء أمني.',
]

const teamHighlights = ['بحث أمني', 'تصميم تجربة المستخدم', 'نمذجة سلوك المستخدم', 'هندسة أنظمة الذكاء الاصطناعي']

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-white/70">Absher Neuron Architecture</p>
          <h1 className="text-4xl md:text-5xl font-bold">هيكل المنظومة العصبية – 3 طبقات رئيسية</h1>
          <p className="text-lg text-white/85 max-w-3xl mx-auto">
            نربط المستخدم وAbsher Neuron والأنظمة الوطنية الأخرى (نفاذ، توكلنا، البنوك، الاتصالات، IoT) في رسم معماري واحد.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-primary/10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">طبقات Absher Neuron</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {conceptLayers.map((layer) => (
                <div key={layer.title} className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{layer.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{layer.description}</p>
                  <div className="text-sm text-gray-500 mb-2">
                    <strong className="text-primary">مثال:</strong> {layer.example}
                  </div>
                  <p className="text-xs text-gray-500">
                    <strong>البيانات:</strong> {layer.data}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">مخطط معماري مبسط</h2>
                <p className="text-gray-600 leading-relaxed">
                  يعرض المخطط العلاقة بين المستخدم وAbsher Neuron والأنظمة الوطنية الأخرى. البيانات تتحرك من المصادر إلى Absher Neuron Core ثم إلى لوحات التحكم والتنبيهات وواجهات التكامل.
                </p>
                <p className="text-sm text-gray-500">Data Sources → Absher Neuron Core → Dashboards / Alerts / APIs</p>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-gray-50 border-2 border-dashed border-primary/30 rounded-2xl p-6">
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <p className="text-sm text-primary font-semibold mb-1">المستخدم + الأنظمة الأخرى</p>
                      <p className="text-gray-600 text-sm">نفاذ • توكلنا • البنوك • الاتصالات • IoT</p>
                    </div>
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-4 shadow-sm border border-primary/20">
                      <p className="text-sm font-semibold text-primary-dark mb-1">Absher Neuron Core</p>
                      <p className="text-gray-700 text-sm">هوية سلوكية • استخبارات تهديدات • Explainable AI</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <p className="text-sm text-primary font-semibold mb-1">المخرجات</p>
                      <p className="text-gray-600 text-sm">لوحات التحكم • التنبيهات • APIs للجهات</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <HiTemplate className="text-primary text-3xl" />
              <h2 className="text-3xl font-bold text-gray-900">حالات استخدام</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases.map((useCase) => (
                <div key={useCase.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                  <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
                    {useCase.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <HiFingerPrint className="text-primary text-3xl" />
              <h2 className="text-3xl font-bold text-gray-900">البنية التقنية</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {technicalStack.map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl shadow-md p-8 border border-primary/20">
            <div className="flex items-center gap-4 mb-6">
              <HiLockClosed className="text-primary text-3xl" />
              <h2 className="text-3xl font-bold text-gray-900">الخصوصية والحوكمة</h2>
            </div>
            <ul className="space-y-4">
              {privacyPrinciples.map((principle) => (
                <li key={principle} className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">✓</span>
                  <p className="text-gray-700">{principle}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <HiUsers className="text-primary text-3xl" />
              <h2 className="text-3xl font-bold text-gray-900">الفريق</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              فريق من 5 مهتمين بالأمن السيبراني والذكاء الاصطناعي والسحابة يعمل على بناء MVP واقعي يوضح كيف يمكن حماية الهوية الرقمية الوطنية عبر الذكاء الاصطناعي التنبؤي.
            </p>
            <div className="flex flex-wrap gap-3">
              {teamHighlights.map((highlight) => (
                <span key={highlight} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl shadow-md p-8 border border-primary/20">
            <div className="flex items-center gap-4 mb-6">
              <HiGlobeAlt className="text-primary text-3xl" />
              <h2 className="text-3xl font-bold text-gray-900">مشروع هاكاثون</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              هذا مشروع MVP لعرضه في هاكاثون الأمن السيبراني. جميع البيانات المعروضة وهمية لغرض المحاكاة وإظهار كيف يمكن للمنصة أن تعمل عند التكامل مع الأنظمة الوطنية.
            </p>
            <p className="text-sm text-gray-500">
              النسخة الحالية توضح الفكرة بنسبة 1000% قبل تنفيذ التكاملات الفعلية.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

