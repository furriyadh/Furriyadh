import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import type {AbstractIntlMessages} from 'next-intl';

// تحديد نوع الرسائل
type Messages = AbstractIntlMessages;

// قائمة اللغات المدعومة
const locales = ['en', 'ar'];

export default getRequestConfig(async ({locale}) => {
  // التحقق من أن اللغة المطلوبة مدعومة
  if (!locales.includes(locale as any)) notFound();

  try {
    // استيراد ملف اللغة المطلوب ديناميكياً
    // تأكد من أن المسار صحيح بالنسبة لموقع هذا الملف
    const module: { default: Messages } = await import(`./i18n/locales/${locale}.json`);
    return {
      messages: module.default
    };
  } catch (error) {
    console.error(`Could not load locale messages for ${locale}:`, error);

    // محاولة تحميل اللغة الإنجليزية كلغة احتياطية
    if (locale !== 'en') { // تجنب المحاولة مرتين إذا كانت اللغة المطلوبة هي الإنجليزية أصلاً
      console.log('Attempting to load fallback locale: en');
      try {
        const fallbackModule: { default: Messages } = await import(`./i18n/locales/en.json`);
        return {
          messages: fallbackModule.default
        };
      } catch (fallbackError) {
        console.error(`Could not load fallback locale messages (en):`, fallbackError);
      }
    }

    // إذا فشل كل شيء، أظهر خطأ أو صفحة 404
    notFound(); // أو يمكنك رمي خطأ throw new Error(...);
  }
});
