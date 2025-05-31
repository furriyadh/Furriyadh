import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// تحميل الخطوط
const inter = Inter({ subsets: ['latin'] });

// تحديد اللغات المدعومة
const locales = ['ar', 'en'];

// استيراد ملفات الترجمة
async function getMessages(locale: string) {
  try {
    return (await import(`../../i18n/locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // التحقق من دعم اللغة
  if (!locales.includes(locale)) notFound();
  
  // الحصول على ملفات الترجمة
  const messages = await getMessages(locale);
  
  // تحديد اتجاه الصفحة بناءً على اللغة
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  
  return (
    <html lang={locale} dir={dir}>
      <head>
        {/* إضافة الخطوط والأيقونات */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
        
        {/* إضافة سكريبت AOS للتأثيرات الحركية */}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" async></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              AOS.init();
            });
          `
        }} />
      </body>
    </html>
  );
}
