import {
  HiShieldCheck,
  HiLightningBolt,
  HiChartBar,
  HiUsers,
  HiGlobeAlt,
} from 'react-icons/hi'

export default function AboutPage() {
  const features = [
    {
      icon: <HiShieldCheck />,
      title: 'الأمن الرقمي',
      description: 'حماية شاملة للأنظمة والبيانات من التهديدات السيبرانية',
    },
    {
      icon: <HiLightningBolt />,
      title: 'الذكاء الاصطناعي',
      description: 'استخدام أحدث تقنيات الذكاء الاصطناعي للتحليل والتنبؤ',
    },
    {
      icon: <HiChartBar />,
      title: 'التحليل السلوكي',
      description: 'تحليل متقدم للأنماط السلوكية وإنشاء هويات رقمية فريدة',
    },
    {
      icon: <HiUsers />,
      title: 'التكامل',
      description: 'ربط البيانات من مختلف المنصات الحكومية والخاصة',
    },
  ]

  const objectives = [
    'تعزيز الأمن السيبراني الوطني من خلال التقنيات المتقدمة',
    'التحليل السلوكي والتنبؤ بالتهديدات قبل حدوثها',
    'توفير شفافية في قرارات الذكاء الاصطناعي (Explainable AI)',
    'حماية بيانات المستخدمين والأنظمة الحكومية',
    'تحسين تجربة المستخدم مع الحفاظ على أعلى معايير الأمان',
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">حول Absher Neuron 2.0</h1>
          <p className="text-xl text-primary-light max-w-3xl mx-auto">
            المنظومة العصبية الوطنية للتنبؤ الأمني والهوية السلوكية
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* System Description */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">نظرة عامة</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Absher Neuron</strong> هو نظام ذكاء اصطناعي يهدف إلى تعزيز الأمن الرقمي
              الوطني عبر التحليل السلوكي والتنبؤ بالتهديدات. يستخدم النظام تقنيات متقدمة في
              التعلم الآلي وتحليل البيانات لإنشاء هوية سلوكية رقمية فريدة لكل مستخدم، مما
              يسمح باكتشاف أي نشاط غير طبيعي أو مشبوه في الوقت الفعلي.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              يتميز النظام بقدرته على ربط البيانات من مختلف المنصات الحكومية والخاصة (نفاذ،
              توكلنا، البنوك، الاتصالات، IoT) لتوفير تحليل شامل ومتكامل. كما يوفر النظام
              شفافية كاملة في قرارات الذكاء الاصطناعي من خلال شرح واضح للتحليلات والتوصيات.
            </p>
          </div>

          {/* Features */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">الميزات الرئيسية</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-2xl flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Objectives */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">الأهداف</h2>
            <ul className="space-y-4">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">✓</span>
                  <span className="text-lg text-gray-700">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hackathon Info */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl shadow-md p-8 border-2 border-primary/20">
            <div className="flex items-center gap-4 mb-6">
              <HiGlobeAlt className="text-primary text-4xl" />
              <h2 className="text-3xl font-bold text-gray-900">مشروع هاثون</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              هذا المشروع تم تطويره كجزء من مشاركة في هاثون تقني يهدف إلى تطوير حلول مبتكرة
              للأمن السيبراني. يمثل <strong>Absher Neuron 2.0</strong> رؤية مستقبلية لكيفية
              استخدام الذكاء الاصطناعي في حماية الأمن الرقمي الوطني.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              النظام مصمم ليكون قابلاً للتطوير والتكامل مع البنية التحتية الحالية، مع الحفاظ
              على أعلى معايير الأمان والخصوصية. نحن ملتزمون بتطوير حلول أمنية متقدمة تساهم
              في تعزيز الأمن السيبراني في المملكة العربية السعودية.
            </p>
          </div>

          {/* Contact/Info */}
          <div className="bg-white rounded-xl shadow-md p-8 mt-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">للمزيد من المعلومات</h3>
            <p className="text-gray-600 mb-4">
              هذا هو إصدار MVP (Minimum Viable Product) للمشروع. سيتم تطوير النظام بشكل كامل
              لاحقاً مع إضافة المزيد من الميزات والتكامل مع الأنظمة الحالية.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-semibold">
                نظام أمني معتمد
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-lg font-semibold">
                ذكاء اصطناعي متقدم
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

