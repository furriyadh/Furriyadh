import { NextIntlClientProvider, useMessages } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

// يمكن تعريف اللغات هنا أو استيرادها من مكان مشترك
const locales = ['en', 'ar'];

// دالة لجلب الرسائل (يمكن وضعها هنا أو في i18n.ts إذا أردت)
// تأكد من أن المسار صحيح بالنسبة لموقع هذا الملف
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

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  // التحقق من أن اللغة مدعومة
  if (!locales.includes(locale)) {
    notFound();
  }

  // جلب الرسائل للغة الحالية
  const messages = await getMessages(locale);

  // تحديد اتجاه اللغة
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body>
        {/* توفير الرسائل للمكونات الفرعية (مهم جداً!) */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* يمكنك إضافة مكونات التخطيط المشتركة هنا مثل Header, Footer */} 
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

