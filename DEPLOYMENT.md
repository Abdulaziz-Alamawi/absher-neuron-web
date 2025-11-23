# دليل نشر الموقع

## الطريقة 1: Vercel (الأسهل والأسرع) ⭐ موصى به

### الخطوات:

1. **إنشاء حساب على Vercel:**
   - اذهب إلى [vercel.com](https://vercel.com)
   - سجل دخول بحساب GitHub أو Google

2. **رفع المشروع:**
   - اضغط على "New Project"
   - اختر المستودع (Repository) من GitHub أو ارفع الملفات مباشرة
   - Vercel سيكتشف تلقائياً أنه مشروع Next.js

3. **الإعدادات:**
   - Framework Preset: Next.js (سيتم اكتشافه تلقائياً)
   - Build Command: `npm run build` (افتراضي)
   - Output Directory: `.next` (افتراضي)
   - Install Command: `npm install` (افتراضي)

4. **النشر:**
   - اضغط "Deploy"
   - انتظر دقيقة أو دقيقتين
   - ستحصل على رابط مثل: `https://absher-neuron-web.vercel.app`

### المميزات:
- ✅ مجاني تماماً
- ✅ HTTPS تلقائياً
- ✅ تحديث تلقائي عند الـ Push
- ✅ سريع جداً
- ✅ دعم RTL كامل

---

## الطريقة 2: Netlify

### الخطوات:

1. **إنشاء حساب على Netlify:**
   - اذهب إلى [netlify.com](https://netlify.com)
   - سجل دخول بحساب GitHub

2. **رفع المشروع:**
   - اضغط "Add new site" → "Import an existing project"
   - اختر المستودع من GitHub
   - أو اسحب وأفلت مجلد المشروع

3. **إعدادات البناء:**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. **ملف netlify.toml (اختياري):**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   ```

---

## الطريقة 3: ngrok (للعرض المؤقت السريع)

### للاختبار السريع مع الآخرين:

1. **تثبيت ngrok:**
   ```bash
   npm install -g ngrok
   ```
   أو حمّل من [ngrok.com](https://ngrok.com)

2. **تشغيل الموقع محلياً:**
   ```bash
   npm run dev
   ```

3. **في نافذة Terminal جديدة، شغّل:**
   ```bash
   ngrok http 3000
   ```

4. **ستحصل على رابط مثل:**
   ```
   https://abc123.ngrok.io
   ```
   - شارك هذا الرابط مع الآخرين
   - ⚠️ الرابط يتغير في كل مرة تشغّل ngrok (في النسخة المجانية)

---

## الطريقة 4: GitHub Pages (أصعب قليلاً)

يتطلب تعديلات إضافية لأن Next.js يحتاج Server-Side Rendering.

---

## نصائح مهمة:

### قبل النشر:
1. تأكد من أن الموقع يعمل محلياً بدون أخطاء
2. اختبر جميع الصفحات
3. تأكد من أن الروابط تعمل

### بعد النشر:
1. اختبر الموقع على الرابط الجديد
2. اختبر على الجوال
3. تأكد من أن RTL يعمل بشكل صحيح

---

## روابط سريعة:

- **Vercel:** https://vercel.com
- **Netlify:** https://netlify.com
- **ngrok:** https://ngrok.com

---

## مثال على رابط نهائي:

بعد النشر على Vercel، سيكون الرابط مثل:
```
https://absher-neuron-web.vercel.app
```

يمكنك مشاركة هذا الرابط مع أي شخص!

