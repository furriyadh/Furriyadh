// src/app/page.tsx
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

// يجب أن تكون الدالة async لاستخدام await
export default async function Home() {
  // استخدام await لانتظار نتيجة Promise التي تُرجعها headers()
  const headersList = await headers(); 
  const acceptLanguage = headersList.get('accept-language') || '';
  
  // تحديد اللغة المناسبة (العربية أو الإنجليزية)
  const preferredLanguage = acceptLanguage.includes('ar') ? 'ar' : 'en';
  
  // توجيه المستخدم إلى المسار المناسب
  redirect(`/${preferredLanguage}`);
}
