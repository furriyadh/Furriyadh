import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // قائمة بجميع اللغات المدعومة
  locales: ['en', 'ar'],

  // اللغة الافتراضية المستخدمة إذا لم يتم تحديد لغة
  defaultLocale: 'en'
});

export const config = {
  // تطابق فقط المسارات التي تحتاج إلى تدويل (Internationalization)
  // استبعد المسارات التي لا تحتاج لترجمة مثل ملفات الصور أو واجهات برمجة التطبيقات
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
