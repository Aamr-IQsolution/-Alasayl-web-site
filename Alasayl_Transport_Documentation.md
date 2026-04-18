---
title: التوثيق الكامل - موقع Alasayl Transport
date: 2025-04-16
category: مشروع
tags:
  - nextjs
  - website
  - alasayl
  - transport
  - pwa
  - documentation
status: قيد التطوير
priority: عاجل
version: 1.0.0
---

# 🚀 التوثيق الكامل لموقع Alasayl Transport

> [!info] نظرة عامة
> موقع احترافي لشركة Alasayl F للنقليات في هولندا - Modern Professional Hybrid Design مع دعم 3 لغات و PWA.

---

## 📑 فهرس المحتويات

- [[#معلومات المشروع]]
- [[#التقنيات المستخدمة]]
- [[#هيكل المشروع]]
- [[#نظام الألوان والتصميم]]
- [[#الصفحات والأقسام]]
- [[#المكونات الأساسية]]
- [[#نظام اللغات]]
- [[#نظام الإيميلات]]
- [[#إعدادات PWA]]
- [[#SEO والأداء]]
- [[#النشر والاستضافة]]
- [[#قائمة المهام]]

---

## 📋 معلومات المشروع

### بيانات الشركة

| البيان | القيمة |
|--------|--------|
| **الاسم التجاري** | Alasayl F |
| **رقم السجل التجاري (KvK)** | 93558422 |
| **رقم الفرع** | 000059090642 |
| **رمز النشاط (SBI)** | 4941 - نقل البضائع على الطرق |
| **القيد القانوني** | لا يشمل نقل الأثاث المنزلي |
| **المقر** | Sleedoornstraat 23, 6101MS Echt, Netherlands |
| **الهاتف** | 0622665522 |
| **البريد الإلكتروني** | fissalgghh@gmail.com |
| **ساعات العمل** | 7:00 - 18:00 (6 أيام، عدا الأحد) |

### معلومات الأسطول

- **عدد السيارات:** +15 سيارة
- **الأنواع:**
  - Mercedes-Benz Sprinter v4 (شاحنات كبيرة)
  - Mercedes-Benz Vito (شاحنات صغيرة)

### الشركاء الرئيسيون

1. **Amazon** - شراكة منذ سنتين، أسطول سيارات، خبرة طويلة
2. **DHL** - شريك موثوق
3. **Spoota** - تطوير تطبيق Lead-the-way-yz خاص

### نطاق الخدمات

- **المناطق:** ليمبورخ، هولندا
- **التوسع:** بدء الخدمات في الخليج العربي والمملكة العربية السعودية
- **العملاء:** شركات (B2B) وأفراد (B2C)
- **الخدمات:**
  - نقل الطرود
  - نقل البضائع التجارية
  - توزيع الجرائد
  - خدمات عاجلة

---

## 🛠️ التقنيات المستخدمة

### Frontend Stack

```javascript
{
  "framework": "Next.js 14",
  "language": "TypeScript",
  "styling": "Tailwind CSS",
  "runtime": "App Router (RSC)",
  "deployment": "Vercel"
}
```

### المكتبات الأساسية

| الفئة | المكتبة | الإصدار | الاستخدام |
|------|---------|---------|-----------|
| **Framework** | next | ^14.x | الإطار الأساسي |
| **Language** | typescript | ^5.x | لغة البرمجة |
| **Styling** | tailwindcss | ^3.x | التصميم |
| **i18n** | next-intl | ^3.x | تعدد اللغات |
| **Email** | resend | ^3.x | إرسال الإيميلات |
| **Email Templates** | react-email | ^2.x | قوالب الإيميلات |
| **Forms** | react-hook-form | ^7.x | إدارة النماذج |
| **Validation** | zod | ^3.x | التحقق من البيانات |
| **PWA** | next-pwa | ^5.x | تطبيق ويب تقدمي |
| **Icons** | lucide-react | ^0.x | الأيقونات |
| **Carousel** | swiper | ^11.x | عرض الصور |
| **Maps** | @react-google-maps/api | ^2.x | خرائط جوجل |
| **Analytics** | @next/third-parties | ^14.x | Google Analytics |
| **Utils** | clsx, tailwind-merge | latest | مساعدات CSS |
| **Date** | date-fns | ^3.x | التعامل مع التواريخ |

### أدوات التطوير

```json
{
  "devDependencies": {
    "@types/react": "^18.x",
    "@types/node": "^20.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x",
    "eslint": "^8.x",
    "eslint-config-next": "^14.x"
  }
}
```

---

## 📁 هيكل المشروع

### البنية الكاملة

```
alasayl-transport/
├── public/
│   ├── images/
│   │   ├── logo/
│   │   │   ├── logo-full.png
│   │   │   └── logo-icon.png
│   │   ├── hero/
│   │   │   ├── hero-main.jpg
│   │   │   └── hero-alt.jpg
│   │   ├── fleet/
│   │   │   ├── sprinter-*.jpg
│   │   │   └── vito-*.jpg
│   │   ├── team/
│   │   │   └── driver-*.jpg
│   │   └── partners/
│   │       ├── amazon-logo.png
│   │       ├── dhl-logo.png
│   │       └── spoota-logo.png
│   ├── icons/
│   │   ├── icon-72x72.png
│   │   ├── icon-96x96.png
│   │   ├── icon-128x128.png
│   │   ├── icon-144x144.png
│   │   ├── icon-152x152.png
│   │   ├── icon-192x192.png
│   │   ├── icon-384x384.png
│   │   └── icon-512x512.png
│   ├── manifest.json
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── services/
│   │   │   │   └── page.tsx
│   │   │   ├── fleet/
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   └── careers/
│   │   │       └── page.tsx
│   │   ├── api/
│   │   │   ├── send-quote/
│   │   │   │   └── route.ts
│   │   │   ├── send-contact/
│   │   │   │   └── route.ts
│   │   │   └── send-application/
│   │   │       └── route.ts
│   │   └── layout.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── NewsBar.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── PartnersSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── FleetGallery.tsx
│   │   ├── forms/
│   │   │   ├── QuoteForm.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   └── CareerForm.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       ├── Textarea.tsx
│   │       ├── Select.tsx
│   │       └── Loading.tsx
│   │
│   ├── lib/
│   │   ├── email.ts
│   │   ├── utils.ts
│   │   └── constants.ts
│   │
│   ├── emails/
│   │   ├── QuoteRequestEmail.tsx
│   │   ├── ContactEmail.tsx
│   │   └── JobApplicationEmail.tsx
│   │
│   ├── i18n/
│   │   ├── request.ts
│   │   └── routing.ts
│   │
│   ├── messages/
│   │   ├── nl.json
│   │   ├── ar.json
│   │   └── en.json
│   │
│   └── types/
│       ├── index.ts
│       └── forms.ts
│
├── .env.local
├── .env.example
├── .gitignore
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

> [!tip] ملاحظة
> راجع [[Alasayl_Images_Requirements]] للتفاصيل الكاملة عن الصور المطلوبة.

---

## 🎨 نظام الألوان والتصميم

### الألوان الرسمية

```css
:root {
  /* Primary Colors */
  --color-primary: #1a2b52;        /* الأزرق الداكن */
  --color-secondary: #ff8c42;      /* البرتقالي */
  
  /* Neutral Colors */
  --color-white: #ffffff;
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
  
  /* Semantic Colors */
  --color-success: #10b981;
  --color-error: #ef4444;
  --color-warning: #f59e0b;
  --color-info: #3b82f6;
}
```

### Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a2b52',
          dark: '#141f3d',
          light: '#2a3b62',
        },
        secondary: {
          DEFAULT: '#ff8c42',
          dark: '#e67a32',
          light: '#ffa562',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        arabic: ['Cairo', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

export default config
```

### فلسفة التصميم

**Modern-Professional Hybrid:**

1. **البساطة (Minimal):**
   - ✅ مسافات بيضاء كافية
   - ✅ تصميم نظيف وواضح
   - ✅ نصوص سهلة القراءة
   - ✅ تركيز على المحتوى

2. **الاحترافية (Corporate):**
   - ✅ ألوان الشركة الرسمية
   - ✅ عرض معلومات KvK بوضوح
   - ✅ تصميم موثوق ورسمي
   - ✅ اتساق في جميع العناصر

3. **العصرية (Modern):**
   - ✅ تأثيرات Hover سلسة
   - ✅ Animations خفيفة
   - ✅ تصميم متجاوب ممتاز
   - ✅ تجربة مستخدم حديثة

4. **دعم RTL (RTL Support):**
   - ✅ استخدام `dir="ltr"` لأرقام الهواتف لضمان العرض الصحيح في الواجهة العربية.
   - ✅ توافق الأيقونات والمسافات مع اتجاه النص العربي.

### نقاط التوقف (Breakpoints)

| الجهاز | العرض | الاستخدام |
|--------|-------|-----------|
| **Mobile** | < 768px | التركيز الأساسي |
| **Tablet** | 768px - 1024px | متوسط |
| **Desktop** | > 1024px | واسع |
| **Large Desktop** | > 1280px | كبير جداً |

---

## 📄 الصفحات والأقسام

### خريطة الموقع

```
الصفحات الرئيسية:
├── / (الصفحة الرئيسية)
├── /about (عن الشركة)
├── /services (الخدمات)
├── /fleet (الأسطول)
├── /contact (اتصل بنا)
└── /careers (التوظيف)

الصفحات الإدارية:
└── /api
    ├── /send-quote
    ├── /send-contact
    └── /send-application
```

---

### 1️⃣ الصفحة الرئيسية (Homepage)

**المسار:** `/` أو `/[locale]`

#### الأقسام:

##### A. Hero Section

**المحتوى:**
- **العنوان الرئيسي (NL):** "Betrouwbaar Goederenvervoer in Nederland"
- **العنوان الفرعي:** "Professionele transportdiensten met meer dan 15 voertuigen, gespecialiseerd in pakketbezorging en vrachtvervoer."
- **الخلفية:** فيديو خلفية كامل (`/images/videos/hero-video.mp4`) مع طبقة تعتيم متدرجة (Dark Overlay) لضمان وضوح النصوص.
- **أزرار CTA:**
  - `"Vraag Offerte Aan"` → يوجه لـ `/contact#quote`
  - `"Over Ons"` → يوجه لـ `/about`
- **أزرار التواصل السريع:**
  - WhatsApp: `https://wa.me/31622665522`
  - Phone: `tel:+31622665522` (مع تثبيت الاتجاه `dir="ltr"` للغات RTL)

**المكون:** `HeroSection.tsx`
- **ملاحظة تصميمية:** تم إضافة `drop-shadow-lg` للعناوين وتأثيرات `backdrop-blur` للأزرار الثانوية.

---

##### B. Services Section

**المحتوى:** 4 بطاقات خدمات

| الخدمة | الأيقونة | الوصف |
|--------|----------|-------|
| **نقل الطرود** | 📦 Package | خدمات توصيل سريعة وموثوقة للطرود |
| **نقل البضائع** | 🚚 Truck | نقل البضائع التجارية بجميع الأحجام |
| **توزيع الجرائد** | 📰 Newspaper | توزيع يومي للجرائد والمطبوعات |
| **خدمات عاجلة** | ⚡ Zap | توصيل عاجل في نفس اليوم |

**المكون:** `ServicesSection.tsx`

**زر الإجراء:** `"Bekijk Alle Diensten"` → `/services`

---

##### C. Stats Section (الأرقام والإحصائيات)

**المحتوى:**

```
+15          |  +2 سنوات    |  6 أيام      |  3
سيارة       |  مع Amazon   |  في الأسبوع  |  شركاء
في الأسطول  |              |              |  رئيسيين
```

**المكون:** `StatsSection.tsx`

---

##### D. Partners Section

**المحتوى:**

**Amazon:**
- اللوجو: amazon-logo.png
- النص: "شراكة منذ سنتين مع Amazon - أسطول سيارات كامل - خبرة طويلة في معالجة المشاكل بإحترافية"

**DHL:**
- اللوجو: dhl-logo.png
- النص: "شريك موثوق في خدمات النقل السريع"

**Spoota:**
- اللوجو: spoota-logo.png
- النص: "تطوير تطبيق Lead-the-way-yz خاص بالتوصيل من قبل شركة الأصايل"
- (اختياري: عرض screenshots من التطبيق)

**المكون:** `PartnersSection.tsx`

---

##### E. Testimonials Section

**المحتوى:** 3 شهادات عملاء مع صور حقيقية.

**نموذج الشهادة:**
```json
{
  "id": 1,
  "name": "Jan de Vries",
  "company": "ABC Logistics",
  "rating": 5,
  "text": "testimonial1.text",
  "image": "/images/testimonial/testimonial-1.png"
}
```

**المكون:** `TestimonialsSection.tsx`
- **ملاحظة:** تم استبدال نظام الحروف الأولى (Initials) بنظام صور حقيقية باستخدام مكون `Image` من Next.js لتحسين الأداء والمظهر، مع إضافة إطار دائري `rounded-full border-2`.

---

##### F. Fleet Gallery (معرض الأسطول)

**المحتوى:** Carousel يعرض صور الشاحنات

**الصور:**
- sprinter-side.jpg
- sprinter-front.jpg
- sprinter-action.jpg
- vito-side.jpg
- vito-urban.jpg

**المكون:** `FleetGallery.tsx`

**زر الإجراء:** `"Bekijk Onze Vloot"` → `/fleet`

##### G. AxonXcode Announcement

**المحتوى:** قسم تعريفي بشراكة الأصايل مع شركة AxonXcode لعام 2025.

**العناصر:**
- **البادئة:** "NEW 2025" / "جديد 2025".
- **اللوجو:** `axonxcode-logo-medium.png` مع تأثير نبض `animate-pulse-slow`.
- **المميزات:** شبكة مميزات (Features Grid) تعرض 4 نقاط قوة.
- **التصميم:** خلفية متدرجة حديثة (Cyan to Magenta) مع تأثيرات `blur` و `backdrop-blur`.

**المكون:** `AxonXcodeAnnouncement.tsx`

---

### 2️⃣ صفحة عن الشركة (About)

**المسار:** `/about`

#### الأقسام:

##### A. معلومات الشركة

**المحتوى:**

```
Alasayl F - Betrouwbaar Transportbedrijf

Over Ons:
Alasayl Transport is een professioneel transportbedrijf gevestigd 
in Echt, Limburg. Met meer dan 15 voertuigen en jarenlange 
ervaring bieden wij betrouwbare goederenvervoer diensten in 
heel Nederland.

Bedrijfsgegevens:
• KvK nummer: 93558422
• SBI code: 4941 - Goederenvervoer over de weg
• Vestigingsadres: Sleedoornstraat 23, 6101MS Echt
• Gespecialiseerd in commercieel transport (geen verhuizingen)
```

##### B. مهمتنا ورؤيتنا

**المحتوى:**

```
Onze Missie:
Het leveren van betrouwbare en efficiënte transportdiensten 
die de verwachtingen van onze klanten overtreffen.

Onze Visie:
Een toonaangevende transportpartner worden in Nederland 
en daarbuiten, met uitbreiding naar internationale markten.
```

##### C. الأسطول

**المحتوى:**

```
Onze Vloot:

Mercedes-Benz Sprinter v4:
• Grote laadruimte voor commerciële vracht
• Moderne en goed onderhouden voertuigen
• Geschikt voor grote leveringen

Mercedes-Benz Vito:
• Compacte bestelwagens voor stadsverkeer
• Ideaal voor pakketbezorging
• Wendbaar en zuinig

Totaal: Meer dan 15 voertuigen beschikbaar
```

##### D. الفريق

**المحتوى:**
- صور الفريق (grid layout)
- نص: "Ons team van professionele chauffeurs staat klaar om uw goederen veilig en op tijd te leveren."

##### E. التوسع

**المحتوى:**

```
🚀 Uitbreiding naar Nieuwe Markten

Alasayl Transport breidt uit! We zijn begonnen met het 
leveren van onze diensten in het Midden-Oosten en 
Saudi-Arabië, waarmee we onze internationale aanwezigheid 
versterken.
```

---

### 3️⃣ صفحة الخدمات (Services)

**المسار:** `/services`

#### الخدمات المفصلة:

##### 1. نقل الطرود (Pakketbezorging)

**المحتوى:**

```
Pakketbezorging

Beschrijving:
Snelle en betrouwbare pakketbezorging voor bedrijven 
en particulieren.

Kenmerken:
• Same-day levering mogelijk
• Track & trace systeem
• Zorgvuldige behandeling
• Flexibele ophaal- en aflevertijden

Voertuigen:
Mercedes-Benz Vito en Sprinter

Tarieven:
Vraag een offerte aan voor op maat gemaakte prijzen.
```

##### 2. نقل البضائع التجارية (Commercieel Vrachtvervoer)

**المحتوى:**

```
Commercieel Vrachtvervoer

Beschrijving:
Professioneel transport van commerciële goederen 
voor bedrijven.

Kenmerken:
• Verschillende voertuigformaten beschikbaar
• Capaciteit tot [X] kg
• Ervaren chauffeurs
• Verzekerde transporten

Geschikt voor:
• Bouwmaterialen
• Handelsgoederen
• Groothandel leveringen
• Industriële producten
```

##### 3. توزيع الجرائد (Krantenlevering)

**المحتوى:**

```
Krantenlevering

Beschrijving:
Dagelijkse distributie van kranten en tijdschriften.

Kenmerken:
• Vroege ochtend leveringen
• Betrouwbare schema's
• Weerbestendige service
• Ervaring met media distributie

Partners:
We werken samen met toonaangevende distributeurs.
```

##### 4. خدمات عاجلة (Spoedleveringen)

**المحتوى:**

```
Spoedleveringen

Beschrijving:
Dringende leveringen op korte termijn.

Kenmerken:
• Same-day service
• Directe ophaling
• Real-time communicatie
• 6 dagen per week beschikbaar

Reactietijd:
Binnen 2 uur na aanvraag.
```

#### معلومات إضافية:

**ساعات العمل:**
```
Maandag - Zaterdag: 07:00 - 18:00
Zondag: Gesloten
```

**المناطق المخدومة:**
```
• Heel Limburg
• Hele Nederland
• Internationale routes (in ontwikkeling)
```

**أنواع البضائع:**
```
✅ Commerciële goederen
✅ Paketten en pakketten
✅ Kranten en tijdschriften
✅ Handelswaren

❌ Geen verhuizingen (huisraad)
```

---

### 4️⃣ صفحة الأسطول (Fleet)

**المسار:** `/fleet`

#### المحتوى:

##### A. نظرة عامة

```
Onze Vloot

Met meer dan 15 moderne voertuigen van Mercedes-Benz 
bieden wij flexibele transportoplossingen voor elke 
behoefte. Al onze voertuigen worden regelmatig 
onderhouden en voldoen aan de hoogste normen.
```

##### B. Mercedes-Benz Sprinter v4

**المواصفات:**

```
Mercedes-Benz Sprinter v4

Specificaties:
• Laadvermogen: [X] kg
• Laadruimte: [L] x [B] x [H] cm
• Motortype: Diesel
• Emissieklasse: Euro 6

Toepassingen:
• Grote commerciële leveringen
• Bulktransport
• Lange afstandsritten
• Meerdere afleverpunten

Aantal beschikbaar: [X] voertuigen
```

**الصور:**
- sprinter-side.jpg
- sprinter-front.jpg
- sprinter-action.jpg
- sprinter-interior.jpg

##### C. Mercedes-Benz Vito

**المواصفات:**

```
Mercedes-Benz Vito

Specificaties:
• Laadvermogen: [X] kg
• Laadruimte: [L] x [B] x [H] cm
• Motortype: Diesel
• Emissieklasse: Euro 6

Toepassingen:
• Pakketbezorging
• Stadsverkeer
• Snelle leveringen
• Kleine tot middelgrote vracht

Aantal beschikbaar: [X] voertuigen
```

**الصور:**
- vito-side.jpg
- vito-urban.jpg

##### D. الصيانة والجودة

```
Onderhoud & Kwaliteit

• Regelmatige technische controles
• Professioneel onderhoud
• Schone en goed onderhouden voertuigen
• GPS tracking systeem
• Verzekerde transporten
```

---

### 5️⃣ صفحة اتصل بنا (Contact)

**المسار:** `/contact`

#### الأقسام:

##### A. معلومات الاتصال

```
Neem Contact Op

Adres:
Sleedoornstraat 23
6101MS Echt
Nederland

Telefoon: 0622665522
E-mail: fissalgghh@gmail.com

Openingstijden:
Maandag - Zaterdag: 07:00 - 18:00
Zondag: Gesloten
```

**أزرار التواصل المباشر:**
- 📱 WhatsApp
- 📞 Bel Direct
- 📧 Email
- 👥 Facebook

##### B. خريطة Google Maps

**الإعدادات:**
```javascript
{
  center: { lat: 51.1050, lng: 5.8753 },
  zoom: 15,
  marker: "Alasayl Transport - Sleedoornstraat 23, Echt"
}
```

**المكون:** استخدام `@react-google-maps/api`

##### C. نموذج طلب عرض سعر

**الحقول:**

| الحقل | النوع | مطلوب | Validation |
|-------|------|-------|------------|
| **الاسم الكامل** | text | ✅ | min: 2 chars |
| **البريد الإلكتروني** | email | ✅ | valid email |
| **رقم الجوال** | tel | ✅ | format: NL phone |
| **العنوان الكامل** | text | ✅ | min: 5 chars |
| **نوع البضاعة** | text | ✅ | min: 3 chars |
| **الوزن التقريبي (kg)** | number | ✅ | min: 1 |
| **نقطة الاستلام** | text | ✅ | min: 5 chars |
| **نقطة التسليم** | text | ✅ | min: 5 chars |
| **تاريخ النقل** | date | ✅ | future date |
| **نوع الخدمة** | select | ✅ | Normal / Urgent |
| **ملاحظات إضافية** | textarea | ❌ | max: 500 chars |

**زر الإرسال:** `"Verstuur Aanvraag"`

**بعد الإرسال:**
- رسالة تأكيد: "✅ Bedankt! We nemen zo snel mogelijk contact met u op."
- الإيميل يُرسل إلى: `fissalgghh@gmail.com`
- Reply-To: إيميل العميل

**المكون:** `QuoteForm.tsx`

##### D. نموذج تواصل عادي

**الحقول:**

| الحقل | النوع | مطلوب |
|-------|------|-------|
| **الاسم** | text | ✅ |
| **البريد الإلكتروني** | email | ✅ |
| **الجوال** | tel | ✅ |
| **الرسالة** | textarea | ✅ |

**زر الإرسال:** `"Verstuur Bericht"`

**المكون:** `ContactForm.tsx`

---

### 6️⃣ صفحة التوظيف (Careers)

**المسار:** `/careers`

#### المحتوى:

##### A. مقدمة

```
Werken Bij Alasayl Transport

Word Deel van Ons Team!

Bij Alasayl Transport zoeken we gemotiveerde professionals 
die willen bijdragen aan onze groei. We bieden een dynamische 
werkomgeving met goede arbeidsvoorwaarden en doorgroeimogelijkheden.
```

##### B. الوظائف المتاحة

**الوظيفة الحالية: سائق (Chauffeur)**

```
Chauffeur / Bezorger

Functieomschrijving:
We zoeken betrouwbare chauffeurs voor onze groeiende vloot.

Vereisten:
• Geldig rijbewijs categorie B (minimaal)
• Ervaring met bestelwagens
• Goede kennis van Nederlandse wegen
• Klantvriendelijke instelling
• Flexibele werkhouding

Wij bieden:
• Competitief salaris
• Moderne voertuigen (Mercedes-Benz)
• Vaste werkdagen (6 dagen per week)
• Professionele werkomgeving
• Doorgroeimogelijkheden
```

##### C. نموذج التقديم

**الحقول:**

| الحقل | النوع | مطلوب |
|-------|------|-------|
| **الاسم الكامل** | text | ✅ |
| **البريد الإلكتروني** | email | ✅ |
| **رقم الجوال** | tel | ✅ |
| **الوظيفة المطلوبة** | select | ✅ |
| **السيرة الذاتية (CV)** | file (PDF) | ✅ |
| **رسالة تعريفية** | textarea | ❌ |

**الوظيفة المتاحة (Select Options):**
- Chauffeur / Bezorger

**قيود رفع الملفات:**
- النوع: PDF فقط
- الحجم: max 5MB
- التخزين: سيتم تحديده لاحقاً (Supabase Storage / Vercel Blob)

**زر الإرسال:** `"Solliciteer Nu"`

**بعد الإرسال:**
- رسالة: "✅ Uw sollicitatie is ontvangen! We nemen spoedig contact met u op."
- الإيميل + CV يُرسل إلى: `fissalgghh@gmail.com`

**المكون:** `CareerForm.tsx`

---

## 🧩 المكونات الأساسية

### Layout Components

#### 1. Header

**المسار:** `src/components/layout/Header.tsx`

**المحتويات:**

```
┌─────────────────────────────────────────────┐
│ [Logo]  Home  About  Services  Fleet       │
│         Contact  Careers    [NL|EN|AR]     │
│                             [📱] [📞]      │
└─────────────────────────────────────────────┘
```

**العناصر:**
- اللوجو (يسار) - يوجه لـ `/`
- القائمة الرئيسية (وسط)
- Language Switcher (يمين)
- أزرار التواصل السريع (يمين)

**للموبايل:**
- Hamburger Menu
- قائمة منسدلة (Slide-in من اليمين)

**الحالات:**
- Sticky header عند التمرير
- تغيير الخلفية عند التمرير (شفاف → أبيض)
- Active state للصفحة الحالية

---

#### 2. Footer

**المسار:** `src/components/layout/Footer.tsx`

**التصميم:**

```
┌───────────────────────────────────────────────────────┐
│  [Logo]              Snelle Links    Diensten        │
│  Korte beschrijving  • Home          • Pakket        │
│  [Social Icons]      • About         • Vracht        │
│                      • Contact       • Kranten       │
│                                                       │
│  Contact Info                                         │
│  📍 Sleedoornstraat 23, Echt                         │
│  📞 0622665522                                        │
│  📧 fissalgghh@gmail.com                             │
│  🕐 Ma-Za: 07:00-18:00                               │
│                                                       │
│  ─────────────────────────────────────────────────   │
│  © 2025 Alasayl F | KvK: 93558422                   │
└───────────────────────────────────────────────────────┘
```

**الأعمدة:**

**عمود 1 - الشركة:**
- اللوجو
- نص مختصر (2-3 جمل)
- أيقونات التواصل الاجتماعي:
  - Facebook
  - WhatsApp
  - Email

**عمود 2 - روابط سريعة:**
- Home
- Over Ons
- Diensten
- Vloot
- Contact
- Werken Bij Ons

**عمود 3 - الخدمات:**
- Pakketbezorging
- Commercieel Transport
- Krantenlevering
- Spoedleveringen

**عمود 4 - معلومات التواصل:**
- العنوان الكامل
- الهاتف (قابل للنقر)
- الإيميل (قابل للنقر)
- ساعات العمل

**أسفل الفوتر:**
- حقوق النشر
- KvK Number
- روابط (Privacy / Terms) - اختياري لاحقاً

---

#### 3. NewsBar (شريط الأخبار)

**المسار:** `src/components/layout/NewsBar.tsx`

**الموقع:** أعلى الصفحة (فوق Header)

**التصميم:**
```
🚀 Alasayl Transport breidt uit! We starten diensten in het Midden-Oosten... | 🤝 Partners: Amazon, DHL, Spoota
← ─────────────────────────────────────────────────────────────────────────
```

**المحتوى المتحرك (بحسب اللغة):**

**هولندي:**
```
🚀 Alasayl Transport breidt uit! We starten nu onze diensten in het Midden-Oosten en Saudi-Arabië | 🤝 Samenwerking met Amazon, DHL en Spoota
```

**عربي:**
```
🚀 الأصايل للنقليات تتوسع! نبدأ الآن خدماتنا في الخليج العربي والسعودية | 🤝 شراكة مع أمازون، DHL وسبوتا
```

**إنجليزي:**
```
🚀 Alasayl Transport is expanding! Starting services in Middle East and Saudi Arabia | 🤝 Partnership with Amazon, DHL and Spoota
```

**الخصائص:**
- خلفية: `#ff8c42` (البرتقالي)
- نص: أبيض
- حركة: scroll من اليمين لليسار (continuous loop)
- سرعة: بطيئة (40-60 ثانية للدورة)

---

#### 4. MobileMenu

**المسار:** `src/components/layout/MobileMenu.tsx`

**الوظيفة:**
- قائمة منسدلة للموبايل
- تظهر عند النقر على Hamburger
- Animation: slide من اليمين
- Overlay شفاف على الخلفية

**المحتويات:**
- جميع روابط القائمة
- Language Switcher
- أزرار التواصل
- زر Close

---

### UI Components

#### Button Component

**المسار:** `src/components/ui/Button.tsx`

**الأنواع:**

```typescript
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'
```

**الأنماط:**

| Variant | الاستخدام | الخلفية | النص |
|---------|-----------|---------|------|
| **primary** | الإجراءات الأساسية | #1a2b52 | white |
| **secondary** | الإجراءات الثانوية | #ff8c42 | white |
| **outline** | إجراءات خفيفة | transparent | primary |
| **ghost** | روابط | transparent | gray-700 |

**المثال:**
```tsx
<Button variant="primary" size="lg">
  Vraag Offerte Aan
</Button>
```

---

#### Card Component

**المسار:** `src/components/ui/Card.tsx`

**الخصائص:**
- خلفية بيضاء
- ظل خفيف: `shadow-md`
- حدود دائرية: `rounded-lg`
- Padding: `p-6`
- Hover: `shadow-lg` (ارتفاع الظل)

---

#### Input / Textarea / Select

**المسار:** `src/components/ui/`

**التصميم الموحد:**
- حدود: `border-gray-300`
- Focus: `border-primary ring-primary`
- حدود دائرية: `rounded-md`
- Font: `text-base`
- Padding: `px-4 py-2`

**حالات الخطأ:**
- حدود: `border-error`
- نص الخطأ: `text-error text-sm mt-1`

---

## 🌍 نظام اللغات (i18n)

### الإعداد

**المكتبة:** `next-intl`

**اللغات المدعومة:**
- `nl` - الهولندية (افتراضي)
- `ar` - العربية
- `en` - الإنجليزية

### هيكل الملفات

```
src/
├── i18n/
│   ├── request.ts
│   └── routing.ts
└── messages/
    ├── nl.json
    ├── ar.json
    └── en.json
```

### إعدادات Routing

**المسار:** `src/i18n/routing.ts`

```typescript
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['nl', 'ar', 'en'],
  defaultLocale: 'nl',
  localePrefix: 'as-needed'
})
```

### ملفات الترجمة

#### nl.json (هولندي)

**الأقسام الرئيسية:**

```json
{
  "navigation": {
    "home": "Home",
    "about": "Over Ons",
    "services": "Diensten",
    "fleet": "Vloot",
    "contact": "Contact",
    "careers": "Werken Bij Ons"
  },
  
  "hero": {
    "title": "Betrouwbaar Goederenvervoer in Nederland",
    "subtitle": "Professionele transportdiensten met meer dan 15 voertuigen",
    "ctaPrimary": "Vraag Offerte Aan",
    "ctaSecondary": "Over Ons"
  },
  
  "services": {
    "title": "Onze Diensten",
    "packages": {
      "title": "Pakketbezorging",
      "description": "Snelle en betrouwbare pakketbezorging"
    },
    "freight": {
      "title": "Commercieel Transport",
      "description": "Professioneel vrachtvervoer"
    },
    "newspapers": {
      "title": "Krantenlevering",
      "description": "Dagelijkse distributie"
    },
    "urgent": {
      "title": "Spoedleveringen",
      "description": "Same-day service"
    }
  },
  
  "contact": {
    "title": "Neem Contact Op",
    "form": {
      "name": "Volledige Naam",
      "email": "E-mailadres",
      "phone": "Telefoonnummer",
      "address": "Volledig Adres",
      "cargoType": "Type Goederen",
      "weight": "Geschat Gewicht (kg)",
      "pickup": "Ophaallocatie",
      "delivery": "Afleverlocatie",
      "date": "Transportdatum",
      "serviceType": "Type Service",
      "serviceNormal": "Normaal",
      "serviceUrgent": "Spoed",
      "notes": "Extra Opmerkingen",
      "submit": "Verstuur Aanvraag",
      "success": "Bedankt! We nemen spoedig contact op.",
      "error": "Er ging iets mis. Probeer opnieuw."
    }
  },
  
  "footer": {
    "company": "Bedrijf",
    "quickLinks": "Snelle Links",
    "services": "Diensten",
    "contactInfo": "Contact",
    "copyright": "© 2025 Alasayl F. Alle rechten voorbehouden.",
    "kvk": "KvK: 93558422"
  }
}
```

#### ar.json (عربي)

**الأقسام الرئيسية:**

```json
{
  "navigation": {
    "home": "الرئيسية",
    "about": "عن الشركة",
    "services": "الخدمات",
    "fleet": "الأسطول",
    "contact": "اتصل بنا",
    "careers": "التوظيف"
  },
  
  "hero": {
    "title": "نقليات موثوقة في هولندا",
    "subtitle": "خدمات نقل احترافية مع أكثر من 15 سيارة",
    "ctaPrimary": "طلب عرض سعر",
    "ctaSecondary": "عن الشركة"
  },
  
  "services": {
    "title": "خدماتنا",
    "packages": {
      "title": "نقل الطرود",
      "description": "توصيل سريع وموثوق للطرود"
    },
    "freight": {
      "title": "نقل البضائع التجارية",
      "description": "نقل احترافي للبضائع"
    },
    "newspapers": {
      "title": "توزيع الجرائد",
      "description": "توزيع يومي"
    },
    "urgent": {
      "title": "الخدمات العاجلة",
      "description": "خدمة في نفس اليوم"
    }
  },
  
  "contact": {
    "title": "اتصل بنا",
    "form": {
      "name": "الاسم الكامل",
      "email": "البريد الإلكتروني",
      "phone": "رقم الجوال",
      "address": "العنوان الكامل",
      "cargoType": "نوع البضاعة",
      "weight": "الوزن التقريبي (كجم)",
      "pickup": "نقطة الاستلام",
      "delivery": "نقطة التسليم",
      "date": "تاريخ النقل",
      "serviceType": "نوع الخدمة",
      "serviceNormal": "عادي",
      "serviceUrgent": "عاجل",
      "notes": "ملاحظات إضافية",
      "submit": "إرسال الطلب",
      "success": "شكراً! سنتواصل معك قريباً.",
      "error": "حدث خطأ. يرجى المحاولة مرة أخرى."
    }
  },
  
  "footer": {
    "company": "الشركة",
    "quickLinks": "روابط سريعة",
    "services": "الخدمات",
    "contactInfo": "التواصل",
    "copyright": "© 2025 الأصايل. جميع الحقوق محفوظة.",
    "kvk": "رقم السجل التجاري: 93558422"
  }
}
```

#### en.json (إنجليزي)

**الأقسام الرئيسية:**

```json
{
  "navigation": {
    "home": "Home",
    "about": "About Us",
    "services": "Services",
    "fleet": "Fleet",
    "contact": "Contact",
    "careers": "Careers"
  },
  
  "hero": {
    "title": "Reliable Freight Transport in the Netherlands",
    "subtitle": "Professional transport services with over 15 vehicles",
    "ctaPrimary": "Request Quote",
    "ctaSecondary": "About Us"
  },
  
  "services": {
    "title": "Our Services",
    "packages": {
      "title": "Parcel Delivery",
      "description": "Fast and reliable parcel delivery"
    },
    "freight": {
      "title": "Commercial Freight",
      "description": "Professional cargo transport"
    },
    "newspapers": {
      "title": "Newspaper Distribution",
      "description": "Daily distribution"
    },
    "urgent": {
      "title": "Express Services",
      "description": "Same-day service"
    }
  },
  
  "contact": {
    "title": "Contact Us",
    "form": {
      "name": "Full Name",
      "email": "Email Address",
      "phone": "Phone Number",
      "address": "Full Address",
      "cargoType": "Cargo Type",
      "weight": "Estimated Weight (kg)",
      "pickup": "Pickup Location",
      "delivery": "Delivery Location",
      "date": "Transport Date",
      "serviceType": "Service Type",
      "serviceNormal": "Normal",
      "serviceUrgent": "Urgent",
      "notes": "Additional Notes",
      "submit": "Submit Request",
      "success": "Thank you! We'll contact you soon.",
      "error": "Something went wrong. Please try again."
    }
  },
  
  "footer": {
    "company": "Company",
    "quickLinks": "Quick Links",
    "services": "Services",
    "contactInfo": "Contact",
    "copyright": "© 2025 Alasayl F. All rights reserved.",
    "kvk": "Chamber of Commerce: 93558422"
  }
}
```

### استخدام الترجمات

**في المكونات:**

```tsx
import { useTranslations } from 'next-intl'

export default function HomePage() {
  const t = useTranslations('hero')
  
  return (
    <h1>{t('title')}</h1>
  )
}
```

### اتجاه النص (RTL/LTR)

**للعربية:**
```tsx
<html dir={locale === 'ar' ? 'rtl' : 'ltr'}>
```

**الخطوط:**
- اللاتينية (NL, EN): `font-sans` (Inter)
- العربية: `font-arabic` (Cairo)

---

## 📧 نظام الإيميلات

### الإعداد

**الخدمة:** Resend  
**From Email:** `onboarding@resend.dev`  
**To Email:** `fissalgghh@gmail.com`

### المتغيرات البيئية

```bash
# .env.local
RESEND_API_KEY=re_xxxxxxxxxx
COMPANY_EMAIL=fissalgghh@gmail.com
FROM_EMAIL=onboarding@resend.dev
```

### API Routes

#### 1. إرسال طلب عرض السعر

**المسار:** `src/app/api/send-quote/route.ts`

**الوظيفة:**
- استقبال بيانات نموذج Quote Request
- التحقق من البيانات (Zod validation)
- إرسال إيميل إلى الشركة
- إرجاع استجابة

**البيانات المستقبلة:**

```typescript
interface QuoteFormData {
  name: string
  email: string
  phone: string
  address: string
  cargoType: string
  weight: number
  pickupLocation: string
  deliveryLocation: string
  transportDate: string
  serviceType: 'normal' | 'urgent'
  notes?: string
}
```

**الإيميل المُرسل:**
- **Subject:** `Nieuwe Offerte Aanvraag - ${name}`
- **Reply-To:** إيميل العميل
- **Template:** QuoteRequestEmail.tsx

---

#### 2. إرسال رسالة تواصل

**المسار:** `src/app/api/send-contact/route.ts`

**البيانات:**

```typescript
interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}
```

**الإيميل:**
- **Subject:** `Nieuw Bericht via Website - ${name}`
- **Template:** ContactEmail.tsx

---

#### 3. إرسال طلب توظيف

**المسار:** `src/app/api/send-application/route.ts`

**البيانات:**

```typescript
interface JobApplicationData {
  name: string
  email: string
  phone: string
  position: string
  cvFile: File // PDF
  coverLetter?: string
}
```

**الإيميل:**
- **Subject:** `Nieuwe Sollicitatie - ${position} - ${name}`
- **Attachment:** CV (PDF)
- **Template:** JobApplicationEmail.tsx

**معالجة الملف:**
1. رفع الـ CV إلى تخزين مؤقت
2. الحصول على URL
3. إرفاقه في الإيميل
4. (اختياري) حفظ في Supabase Storage لاحقاً

---

### Email Templates (React Email)

**المسار:** `src/emails/`

#### QuoteRequestEmail.tsx

**التصميم:**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      /* ألوان الشركة */
      .primary { color: #1a2b52; }
      .secondary { color: #ff8c42; }
    </style>
  </head>
  <body>
    <div style="max-width: 600px; margin: auto; font-family: sans-serif;">
      
      <!-- Header -->
      <div style="background: #1a2b52; padding: 20px; text-align: center;">
        <img src="logo.png" alt="Alasayl" height="50" />
        <h1 style="color: white; margin: 10px 0;">Nieuwe Offerte Aanvraag</h1>
      </div>
      
      <!-- Content -->
      <div style="padding: 30px; background: #f9fafb;">
        
        <h2>Klantgegevens:</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td><strong>Naam:</strong></td>
            <td>{name}</td>
          </tr>
          <tr>
            <td><strong>E-mail:</strong></td>
            <td>{email}</td>
          </tr>
          <tr>
            <td><strong>Telefoon:</strong></td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td><strong>Adres:</strong></td>
            <td>{address}</td>
          </tr>
        </table>
        
        <h2>Transportdetails:</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td><strong>Type Goederen:</strong></td>
            <td>{cargoType}</td>
          </tr>
          <tr>
            <td><strong>Gewicht:</strong></td>
            <td>{weight} kg</td>
          </tr>
          <tr>
            <td><strong>Ophalen van:</strong></td>
            <td>{pickupLocation}</td>
          </tr>
          <tr>
            <td><strong>Afleveren bij:</strong></td>
            <td>{deliveryLocation}</td>
          </tr>
          <tr>
            <td><strong>Datum:</strong></td>
            <td>{transportDate}</td>
          </tr>
          <tr>
            <td><strong>Type Service:</strong></td>
            <td>{serviceType === 'urgent' ? '🚨 Spoed' : '✅ Normaal'}</td>
          </tr>
        </table>
        
        {notes && (
          <>
            <h2>Extra Opmerkingen:</h2>
            <p>{notes}</p>
          </>
        )}
        
        <!-- CTA Button -->
        <div style="margin-top: 30px; text-align: center;">
          <a href="mailto:{email}" 
             style="background: #ff8c42; color: white; padding: 12px 30px; 
                    text-decoration: none; border-radius: 5px; display: inline-block;">
            Reageer op Deze Aanvraag
          </a>
        </div>
        
      </div>
      
      <!-- Footer -->
      <div style="background: #1a2b52; color: white; padding: 20px; text-align: center;">
        <p>Alasayl Transport</p>
        <p>Sleedoornstraat 23, 6101MS Echt</p>
        <p>0622665522 | fissalgghh@gmail.com</p>
      </div>
      
    </div>
  </body>
</html>
```

#### ContactEmail.tsx

**مشابه للقالب أعلاه** لكن بحقول أقل (Name, Email, Phone, Message)

#### JobApplicationEmail.tsx

**يتضمن:**
- معلومات المتقدم
- الوظيفة المطلوبة
- رابط تحميل الـ CV
- رسالة تعريفية (إن وجدت)

---

## ⚙️ إعدادات PWA

### التثبيت

```bash
npm install next-pwa
```

### next.config.js

```javascript
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts',
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 365 * 24 * 60 * 60 // 1 year
        }
      }
    },
    {
      urlPattern: /\.(?:jpg|jpeg|png|svg|gif|webp)$/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 64,
          maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
        }
      }
    },
    {
      urlPattern: /^https:\/\/api\.*/i,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        expiration: {
          maxEntries: 16,
          maxAgeSeconds: 24 * 60 * 60 // 1 day
        }
      }
    }
  ]
})

module.exports = withPWA({
  // Next.js config
})
```

### manifest.json

**المسار:** `public/manifest.json`

```json
{
  "name": "Alasayl Transport - Betrouwbaar Goederenvervoer",
  "short_name": "Alasayl",
  "description": "Professionele transportdiensten in Nederland met meer dan 15 voertuigen. Pakketbezorging, commercieel transport en spoedleveringen.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#1a2b52",
  "orientation": "portrait",
  "scope": "/",
  "lang": "nl",
  "dir": "ltr",
  "categories": ["business", "logistics", "transport"],
  "icons": [
    {
      "src": "/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "screenshots": [
    {
      "src": "/screenshots/desktop-1.png",
      "sizes": "1920x1080",
      "type": "image/png",
      "form_factor": "wide"
    },
    {
      "src": "/screenshots/mobile-1.png",
      "sizes": "750x1334",
      "type": "image/png",
      "form_factor": "narrow"
    }
  ]
}
```

### توليد الأيقونات

**الأدوات:**
- [PWA Asset Generator](https://github.com/elegantapp/pwa-asset-generator)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

**الأمر:**
```bash
npx pwa-asset-generator public/images/logo/logo-full.png public/icons --background "#1a2b52" --padding "10%"
```

**المقاسات المطلوبة:**
- 72x72
- 96x96
- 128x128
- 144x144
- 152x152
- 192x192
- 384x384
- 512x512

### Offline Page (اختياري)

**المسار:** `src/app/offline/page.tsx`

```tsx
export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Geen Internetverbinding
        </h1>
        <p className="text-gray-600 mb-6">
          Controleer uw verbinding en probeer opnieuw.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="btn-primary"
        >
          Opnieuw Proberen
        </button>
      </div>
    </div>
  )
}
```

---

## 🎯 SEO والأداء

### Metadata Configuration

**المسار:** `src/app/[locale]/layout.tsx`

```typescript
import { Metadata } from 'next'

export async function generateMetadata({ params }): Promise<Metadata> {
  const { locale } = params
  
  const titles = {
    nl: 'Alasayl Transport - Betrouwbaar Goederenvervoer in Nederland',
    ar: 'الأصايل للنقليات - نقل موثوق في هولندا',
    en: 'Alasayl Transport - Reliable Freight in the Netherlands'
  }
  
  const descriptions = {
    nl: 'Professionele transportdiensten met 15+ voertuigen. Pakketbezorging, commercieel transport en spoedleveringen in Limburg en heel Nederland.',
    ar: 'خدمات نقل احترافية مع أكثر من 15 سيارة. توصيل طرود، نقل تجاري وخدمات عاجلة في ليمبورخ وهولندا.',
    en: 'Professional transport services with 15+ vehicles. Parcel delivery, commercial freight and express services in Limburg and Netherlands.'
  }
  
  return {
    title: titles[locale] || titles.nl,
    description: descriptions[locale] || descriptions.nl,
    keywords: [
      'transport', 'goederenvervoer', 'pakketbezorging', 'courier',
      'Limburg', 'Echt', 'Netherlands', 'delivery', 'logistics',
      'Mercedes Sprinter', 'spoedleveringen'
    ],
    authors: [{ name: 'Alasayl F' }],
    openGraph: {
      type: 'website',
      locale: locale === 'nl' ? 'nl_NL' : locale === 'ar' ? 'ar_SA' : 'en_US',
      url: `https://yourdomain.vercel.app/${locale}`,
      siteName: 'Alasayl Transport',
      title: titles[locale],
      description: descriptions[locale],
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Alasayl Transport'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale],
      description: descriptions[locale],
      images: ['/images/og-image.jpg']
    },
    alternates: {
      canonical: `https://yourdomain.vercel.app/${locale}`,
      languages: {
        'nl': '/nl',
        'ar': '/ar',
        'en': '/en'
      }
    },
    verification: {
      // سيتم إضافته لاحقاً
      google: 'your-google-verification-code',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      }
    }
  }
}
```

### Structured Data (JSON-LD)

**المسار:** `src/components/StructuredData.tsx`

```typescript
export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Alasayl F",
    "legalName": "Alasayl F",
    "url": "https://yourdomain.vercel.app",
    "logo": "https://yourdomain.vercel.app/images/logo/logo-full.png",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sleedoornstraat 23",
      "addressLocality": "Echt",
      "postalCode": "6101MS",
      "addressCountry": "NL"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+31-6-22665522",
      "contactType": "Customer Service",
      "email": "fissalgghh@gmail.com",
      "availableLanguage": ["nl", "en", "ar"]
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61574394300956"
    ]
  }
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://yourdomain.vercel.app",
    "name": "Alasayl Transport",
    "image": "https://yourdomain.vercel.app/images/logo/logo-full.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sleedoornstraat 23",
      "addressLocality": "Echt",
      "addressRegion": "Limburg",
      "postalCode": "6101MS",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.1050,
      "longitude": 5.8753
    },
    "telephone": "+31-6-22665522",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:00",
        "closes": "18:00"
      }
    ]
  }
  
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Freight Transport",
    "provider": {
      "@type": "Organization",
      "name": "Alasayl F"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Netherlands"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Transport Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Parcel Delivery"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Freight"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Express Delivery"
          }
        }
      ]
    }
  }
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}
```

### Google Analytics

**التثبيت:**

```bash
npm install @next/third-parties
```

**الاستخدام:**

```typescript
// src/app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      </body>
    </html>
  )
}
```

**تتبع الأحداث:**

```typescript
// Event tracking example
import { sendGAEvent } from '@next/third-parties/google'

function QuoteForm() {
  const handleSubmit = async (data) => {
    // Send form
    await sendQuote(data)
    
    // Track event
    sendGAEvent('event', 'quote_submitted', {
      service_type: data.serviceType,
      weight: data.weight
    })
  }
}
```

**الأحداث المهمة:**
- `quote_submitted` - إرسال طلب عرض سعر
- `contact_submitted` - إرسال نموذج تواصل
- `job_application` - إرسال طلب توظيف
- `whatsapp_click` - النقر على WhatsApp
- `phone_click` - النقر على الهاتف
- `language_change` - تغيير اللغة

### تحسين الأداء

**الصور:**
```typescript
import Image from 'next/image'

<Image
  src="/images/hero/hero-main.jpg"
  alt="Alasayl Transport"
  width={1920}
  height={1080}
  priority // للصور المهمة فقط
  quality={85}
  placeholder="blur"
/>
```

**الخطوط:**
```typescript
// src/app/layout.tsx
import { Inter, Cairo } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const cairo = Cairo({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-cairo'
})
```

**Code Splitting:**
```typescript
import dynamic from 'next/dynamic'

const FleetGallery = dynamic(() => import('@/components/home/FleetGallery'), {
  loading: () => <LoadingSkeleton />,
  ssr: false // إذا لم يكن مطلوباً SSR
})
```

---

## 🚀 النشر والاستضافة

### Vercel Deployment

#### 1. ربط Repository

```bash
# تسجيل الدخول لـ Vercel
vercel login

# ربط المشروع
vercel link

# نشر
vercel --prod
```

#### 2. المتغيرات البيئية

**في Vercel Dashboard:**

```
Settings → Environment Variables

Production:
├── RESEND_API_KEY=re_xxxx
├── COMPANY_EMAIL=fissalgghh@gmail.com
├── FROM_EMAIL=onboarding@resend.dev
├── NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=xxx (اختياري)
└── NEXT_PUBLIC_GA_MEASUREMENT_ID=G-xxx (اختياري)
```

#### 3. إعدادات Build

```
Framework Preset: Next.js
Build Command: next build
Output Directory: .next
Install Command: npm install
Development Command: next dev
```

#### 4. الدومين

**الدومين المؤقت:**
```
https://alasayl-transport.vercel.app
```

**دومين مخصص (لاحقاً):**
```
Settings → Domains → Add Domain
```

**إعداد DNS:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### إعدادات Git

**.gitignore:**

```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# PWA
**/public/sw.js
**/public/workbox-*.js
**/public/worker-*.js
**/public/sw.js.map
**/public/workbox-*.js.map
**/public/worker-*.js.map
```

---

## ✅ قائمة المهام (Roadmap)

### المرحلة 1: الإعداد الأولي (أسبوع 1)

- [ ] إنشاء مشروع Next.js 14 بـ TypeScript
- [ ] تثبيت جميع المكتبات المطلوبة
- [ ] إعداد Tailwind CSS مع الألوان المخصصة
- [ ] إعداد نظام اللغات (next-intl)
- [ ] إنشاء هيكل المجلدات الكامل
- [ ] إعداد ملفات الـ configuration
- [ ] إنشاء `.env.example`

### المرحلة 2: المكونات الأساسية (أسبوع 1-2)

- [ ] Header Component
  - [ ] Desktop navigation
  - [ ] Mobile menu (Hamburger)
  - [ ] Language switcher
  - [ ] Contact buttons
- [ ] Footer Component
  - [ ] 4 columns layout
  - [ ] Social icons
  - [ ] Company info
- [ ] NewsBar Component
  - [ ] Scrolling animation
  - [ ] Multi-language content
- [ ] UI Components
  - [ ] Button (4 variants)
  - [ ] Card
  - [ ] Input / Textarea / Select
  - [ ] Loading states

### المرحلة 3: الصفحة الرئيسية (أسبوع 2)

- [x] Hero Section
  - [x] فيديو خلفية (Video Background)
  - [x] Heading + subheading مع ظلال
  - [x] CTA buttons مع تأثيرات hover
  - [x] Quick contact buttons مع دعم RTL
- [ ] Services Section
  - [ ] 4 service cards
  - [ ] Icons (Lucide)
  - [ ] Hover effects
- [ ] Stats Section
  - [ ] 4 stats cards
  - [ ] Animation on scroll
- [ ] Partners Section
  - [ ] 3 partner logos
  - [ ] Descriptions
  - [ ] Grid layout
- [x] Testimonials Section
  - [x] Carousel (Swiper)
  - [x] استخدام صور حقيقية (Next Image)
  - [x] Star ratings
- [ ] Fleet Gallery
  - [ ] Image carousel
  - [ ] 5-6 vehicle images
  - [ ] Navigation arrows
- [x] AxonXcode Announcement Section

### المرحلة 4: الصفحات الأخرى (أسبوع 2-3)

- [ ] About Page
  - [ ] Company info section
  - [ ] Mission & vision
  - [ ] Fleet overview
  - [ ] Team photos
  - [ ] Expansion info
- [ ] Services Page
  - [ ] 4 detailed service sections
  - [ ] Service hours
  - [ ] Coverage areas
  - [ ] Cargo types
- [ ] Fleet Page
  - [ ] Sprinter details + specs
  - [ ] Vito details + specs
  - [ ] Image galleries
  - [ ] Maintenance info
- [ ] Contact Page
  - [ ] Contact info display
  - [ ] Google Maps integration
  - [ ] Quote request form
  - [ ] Contact form
- [ ] Careers Page
  - [ ] Job description
  - [ ] Application form
  - [ ] File upload (CV)

### المرحلة 5: النماذج والـ APIs (أسبوع 3)

- [ ] Quote Request Form
  - [ ] All 11 fields
  - [ ] Validation (Zod)
  - [ ] Date picker
  - [ ] Success/error messages
- [ ] Contact Form
  - [ ] 4 fields
  - [ ] Validation
  - [ ] Messages
- [ ] Career Application Form
  - [ ] 6 fields
  - [ ] File upload (PDF only, max 5MB)
  - [ ] Validation
- [ ] API Routes
  - [ ] `/api/send-quote`
  - [ ] `/api/send-contact`
  - [ ] `/api/send-application`
- [ ] Email Templates (React Email)
  - [ ] QuoteRequestEmail.tsx
  - [ ] ContactEmail.tsx
  - [ ] JobApplicationEmail.tsx
- [ ] Resend Integration
  - [ ] Setup account
  - [ ] Configure API key
  - [ ] Test emails

### المرحلة 6: المحتوى والترجمات (أسبوع 3-4)

- [ ] كتابة المحتوى الهولندي
  - [ ] Navigation
  - [ ] Homepage
  - [ ] About
  - [ ] Services
  - [ ] Fleet
  - [ ] Contact
  - [ ] Careers
  - [ ] Footer
  - [ ] Forms
- [ ] الترجمة للعربية
  - [ ] جميع الأقسام
  - [ ] RTL support
  - [ ] Arabic font
- [ ] الترجمة للإنجليزية
  - [ ] جميع الأقسام
- [ ] استبدال Placeholders
  - [ ] نصوص نهائية
  - [ ] تدقيق لغوي

### المرحلة 7: PWA (أسبوع 4)

- [ ] إعداد manifest.json
  - [ ] App name & description
  - [ ] Colors & theme
  - [ ] Icons array
- [ ] توليد الأيقونات
  - [ ] 8 مقاسات مختلفة
  - [ ] Maskable icons
- [ ] إعداد Service Worker
  - [ ] Caching strategies
  - [ ] Runtime caching
- [ ] Offline Page (اختياري)
- [ ] اختبار PWA
  - [ ] Lighthouse
  - [ ] Install prompt
  - [ ] Offline functionality

### المرحلة 8: التحسينات (أسبوع 4-5)

- [ ] SEO Metadata
  - [ ] Title & description (كل صفحة)
  - [ ] OpenGraph tags
  - [ ] Twitter cards
  - [ ] Canonical URLs
  - [ ] hreflang tags
- [ ] Structured Data (JSON-LD)
  - [ ] Organization schema
  - [ ] LocalBusiness schema
  - [ ] Service schema
  - [ ] BreadcrumbList
- [ ] Google Analytics
  - [ ] Setup GA4
  - [ ] Install tracking code
  - [ ] Event tracking
  - [ ] Test events
- [ ] Performance Optimization
  - [ ] Image optimization
  - [ ] Font optimization
  - [ ] Code splitting
  - [ ] Bundle analysis
- [ ] Responsive Testing
  - [ ] Mobile (< 768px)
  - [ ] Tablet (768-1024px)
  - [ ] Desktop (> 1024px)
  - [ ] Multiple browsers

### المرحلة 9: الاختبارات (أسبوع 5)

- [ ] اختبار النماذج
  - [ ] Validation rules
  - [ ] Error messages
  - [ ] Success messages
  - [ ] Email delivery
- [ ] اختبار تبديل اللغات
  - [ ] NL → AR → EN
  - [ ] RTL/LTR switching
  - [ ] Font switching
  - [ ] URL structure
- [ ] اختبار التواصل
  - [ ] WhatsApp link
  - [ ] Phone link
  - [ ] Email links
  - [ ] Facebook link
- [ ] اختبار الأداء
  - [ ] Lighthouse score (>90)
  - [ ] PageSpeed Insights
  - [ ] Load times
  - [ ] Core Web Vitals
- [ ] اختبار PWA
  - [ ] Install on mobile
  - [ ] Offline mode
  - [ ] Icons display
  - [ ] Manifest validation
- [ ] Cross-browser Testing
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
- [ ] اختبار الأمان
  - [ ] HTTPS
  - [ ] Form security
  - [ ] API security

### المرحلة 10: النشر (أسبوع 5)

- [ ] إعداد Vercel Project
  - [ ] Link repository
  - [ ] Configure build settings
- [ ] إضافة المتغيرات البيئية
  - [ ] RESEND_API_KEY
  - [ ] COMPANY_EMAIL
  - [ ] FROM_EMAIL
  - [ ] GA_MEASUREMENT_ID
  - [ ] GOOGLE_MAPS_API_KEY
- [ ] Deploy أول نسخة
  - [ ] Preview deployment
  - [ ] Test on staging
- [ ] اختبار Production
  - [ ] All features working
  - [ ] Forms sending emails
  - [ ] PWA installing
  - [ ] Analytics tracking
- [ ] إعداد Custom Domain (لاحقاً)
  - [ ] Purchase domain
  - [ ] Configure DNS
  - [ ] SSL certificate
  - [ ] Redirect setup

### المرحلة 11: ما بعد الإطلاق (مستمر)

- [ ] مراقبة الأداء
  - [ ] Analytics review
  - [ ] Error monitoring
  - [ ] User feedback
- [ ] تحديث المحتوى
  - [ ] صور حقيقية للفريق
  - [ ] شهادات عملاء حقيقية
  - [ ] أخبار الشركة
- [ ] تحسينات مستمرة
  - [ ] SEO optimization
  - [ ] Performance tweaks
  - [ ] Bug fixes
- [ ] ميزات مستقبلية
  - [ ] Blog section
  - [ ] Track & trace system
  - [ ] Customer dashboard
  - [ ] Online booking system
  - [ ] قاعدة بيانات (Supabase)

---

## 📊 معايير النجاح

### الأداء

- [ ] Lighthouse Performance Score > 90
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.8s
- [ ] Cumulative Layout Shift < 0.1

### SEO

- [ ] Lighthouse SEO Score > 95
- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] All images have alt text
- [ ] Valid structured data

### Accessibility

- [ ] Lighthouse Accessibility Score > 95
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Proper heading hierarchy
- [ ] Sufficient color contrast

### PWA

- [ ] Lighthouse PWA Score = 100
- [ ] Installable on mobile/desktop
- [ ] Works offline
- [ ] Fast load times

---

## 🔗 روابط مرجعية

- [[Alasayl_Images_Requirements]] - قائمة الصور المطلوبة
- [[Design_System]] - نظام التصميم والألوان
- [[API_Documentation]] - توثيق الـ APIs
- [[Deployment_Guide]] - دليل النشر

---

## 📝 ملاحظات مهمة

> [!warning] قبل البدء
> - تأكد من توفر اللوجو بصيغة PNG شفافة عالية الدقة
> - سجّل حساب على Resend واحصل على API Key
> - جهّز حساب Google Analytics (اختياري)
> - راجع [[Alasayl_Images_Requirements]] لقائمة الصور الكاملة

> [!tip] أفضل الممارسات
> - اختبر على جهاز موبايل حقيقي (ليس فقط DevTools)
> - استخدم صور حقيقية بدل placeholders عند الإمكان
> - اطلب feedback من مستخدمين حقيقيين
> - راقب Analytics بانتظام بعد الإطلاق

> [!info] للمستقبل
> - فكر في إضافة نظام تتبع الشحنات (Track & Trace)
> - فكر في Dashboard للعملاء
> - فكر في نظام حجز أونلاين
> - فكر في Blog للـ SEO

---

**تم إعداد هذه الوثيقة بتاريخ:** 16 أبريل 2025  
**آخر تحديث:** 16 أبريل 2025  
**الإصدار:** 1.0.0  
**الحالة:** قيد التطوير  

---

#nextjs #website #alasayl #transport #documentation #pwa #multilingual
