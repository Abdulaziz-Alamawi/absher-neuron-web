import Link from 'next/link'
import { HiShieldCheck, HiMail, HiPhone } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 space-x-reverse mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-bold">Absher Neuron 2.0</span>
            </div>
            <p className="text-gray-400 text-sm">
              المنظومة العصبية الوطنية للتنبؤ الأمني والهوية السلوكية
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                  لوحة التحكم
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-400 hover:text-white transition-colors">
                  لوحة الأمن
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  حول النظام
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">معلومات التواصل</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 space-x-reverse text-gray-400">
                <HiShieldCheck className="text-primary" />
                <span className="text-sm">نظام أمني معتمد</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse text-gray-400">
                <HiMail className="text-primary" />
                <span className="text-sm">info@absher-neuron.sa</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse text-gray-400">
                <HiPhone className="text-primary" />
                <span className="text-sm">920000000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 Absher Neuron 2.0. جميع الحقوق محفوظة.</p>
          <p className="mt-2">مشروع هاثون - نظام ذكاء اصطناعي للأمن الرقمي الوطني</p>
        </div>
      </div>
    </footer>
  )
}

