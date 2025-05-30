import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// TODO: Integrate i18next for translations
// TODO: Copy assets (images) to public folder
// TODO: Use Shadcn/UI Card component for styling items

const DashboardSection = () => {
  return (
    <section className="section-6 py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4" data-aos="fade-up">
          ابقَ مسيطرًا <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">مع لوحة التحكم الشاملة</span>
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-10" data-aos="fade-in">
          اطلع على أداء حملاتك الإعلانية أو استورد حملاتك الحالية للحصول على مصدر بيانات موحد. قارن بين القنوات والحملات والإعلانات بنظرة سريعة.
        </p>
        <div className="text-center mb-12" data-aos="fade-in">
          <Link href="https://app.shown.io/create-account?lang=ar" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md text-lg inline-block">
            أنشئ حساباً مجانياً
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-10 pt-4">
          {/* Left Column */}
          <div className="md:col-span-7" data-aos="fade-right">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 h-full">
              {/* Ensure image is in public folder */}
              <Image src="/assets/images/cont-1.svg" alt="Campaign Performance" width={80} height={80} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">اطلع على أداء حملاتك...</h3>
              <p className="text-gray-600">
                أنشئ حملاتك من لوحة التحكم، وادِرها، واحصل على نظرة عامة على أدائها وقنواتها.
              </p>
            </div>
          </div>
          {/* Right Column */}
          <div className="md:col-span-5" data-aos="fade-left">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 h-full">
              {/* Ensure image is in public folder */}
              <Image src="/assets/images/cont-2.svg" alt="Data-driven Decisions" width={80} height={80} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">... واتخذ قرارات أفضل مدعومة بالبيانات</h3>
              <p className="text-gray-600">
                راقب أداء حملاتك واحصل على رؤى تفصيلية حول كل منها.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;

