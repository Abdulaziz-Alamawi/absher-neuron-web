'use client'

import Link from 'next/link'
import { HiArrowRight, HiShieldCheck, HiUserGroup, HiLightningBolt } from 'react-icons/hi'

const scenarios = [
  {
    title: 'محاولة احتيال بنكي عبر أبشر',
    description:
      'المستخدم يحاول تحديث رقم الجوال من دولة مختلفة. النظام يجمع إشارات سلوكية ويمنع العملية قبل اكتمالها.',
    steps: [
      'النظام يلاحظ جهازاً جديداً + موقعاً غير منطقي.',
      'هوية سلوكية مختلفة (سرعة كتابة، نمط مؤشر).',
      'Absher Neuron يوقف العملية، يطلب Face ID من نفاذ، ويرسل تنبيه لمركز العمليات.',
    ],
    impact: ['تم منع التحويل الوهمي قبل حدوثه', 'تجربة المستخدم الشرعي لم تتأثر'],
  },
  {
    title: 'استغلال جهاز مفقود',
    description:
      'المهاجم يمتلك جهاز الضحية ويحاول الدخول. السلوك لا يطابق الهوية الرقمية فتنخفض نقاط الثقة فوراً.',
    steps: [
      'تسجيل دخول من جهاز معروف ولكن نمط كتابة مختلف 80٪.',
      'النظام يخفض نقاط الثقة ويدخل الحساب في وضع مراقبة.',
      'يتم تفعيل تحقق إضافي وإخطار المستخدم بوجود خطر.',
    ],
    impact: ['يتم حماية الحساب حتى لو كلمة المرور معروفة', 'سجل تدقيق يوثق القرار كاملاً'],
  },
  {
    title: 'كشف شبكة احتيال',
    description:
      'خمسة حسابات تستخدم نفس الجهاز ونفس طريقة التصفح. الذكاء الوطني يربط الأدلة ويصعد الحالة تلقائياً.',
    steps: [
      'Absher Neuron يربط بين الحسابات المتكررة والأجهزة المستخدمة.',
      'طبقة استخبارات التهديدات تتبادل البيانات مع البنوك والاتصالات.',
      'يتم توليد Alert ذكي مع توصية بإيقاف الحسابات والتحقيق.',
    ],
    impact: ['كشف الشبكة قبل تنفيذ أي عملية', 'توجيه واضح لفريق الاستجابة'],
  },
]

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-white/70">Use Cases</p>
          <h1 className="text-4xl md:text-5xl font-bold">سيناريوهات الاستخدام</h1>
          <p className="text-lg text-white/85 max-w-3xl">
            ثلاث قصص حقيقية تشرح كيف تحمي Absher Neuron 2.0 الهوية الرقمية قبل وقوع الحوادث.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {scenarios.map((scenario) => (
            <article key={scenario.title} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-primary text-sm font-semibold uppercase tracking-widest">
                  <HiShieldCheck />
                  Absher Neuron Response
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{scenario.title}</h2>
                <p className="text-gray-600 leading-relaxed">{scenario.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 rounded-xl border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">خطوات الكشف</h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                      {scenario.steps.map((step) => (
                        <li key={step} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl border border-primary/10 p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">النتيجة</h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                      {scenario.impact.map((result) => (
                        <li key={result} className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}

          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-1 space-y-3">
                <p className="text-primary font-semibold">جاهز للتجربة؟</p>
                <h3 className="text-2xl font-bold text-gray-900">شغّل محاكاة الهجوم من لوحة التحكم</h3>
                <p className="text-gray-600">
                  جرّب زر «تشغيل محاكاة هجوم» في /dashboard لتلاحظ كيف تتغير نقاط الثقة وعدد التنبيهات وفلترة الزمن خلال ثوانٍ.
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow-lg hover:bg-primary-dark"
                >
                  <HiLightningBolt />
                  افتح لوحة التحكم
                </Link>
                <Link
                  href="/security"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary text-primary font-semibold hover:bg-primary/10"
                >
                  <HiUserGroup />
                  راقب مركز الأمن
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500">
            جميع الأمثلة معلومات محاكاة للعرض ضمن هاكاثون Absher Neuron 2.0.
          </div>
        </div>
      </section>
    </div>
  )
}

