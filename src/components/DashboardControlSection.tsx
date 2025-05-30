import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// TODO: Integrate i18next for translations
// TODO: Add AOS or similar for animations (ensure initialization)

const DashboardControlSection = () => {
  return (
    // Adjusted padding
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading - Adjusted spacing and gradient */}
        <div className="text-center mb-14 md:mb-20">
          <h2 
            className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-gray-900 mb-4 leading-tight"
            data-aos="fade-up"
          >
            ابقَ مسيطرًا <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">مع لوحة التحكم الشاملة</span>
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed"
            data-aos="fade-up" data-aos-delay="100"
          >
            اطلع على أداء حملاتك الإعلانية أو استورد حملاتك الحالية للحصول على مصدر بيانات موحد. قارن بين القنوات والحملات والإعلانات بنظرة سريعة.
          </p>
          {/* CTA Button - Adjusted styling */}
          <div data-aos="fade-up" data-aos-delay="200">
            <Link 
              href="https://app.shown.io/create-account?lang=ar" 
              className="sbtn bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-7 rounded-lg text-lg inline-block shadow-md transition duration-300 app-link"
            >
              أنشئ حساباً مجانياً
            </Link>
          </div>
        </div>

        {/* Content Row (Two Columns) - Adjusted gap and card styling */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column (Larger) - Adjusted card styling */}
          <div className="md:col-span-7" data-aos="fade-right">
            <div className="bg-gray-50 rounded-xl shadow-md p-6 md:p-8 h-full flex flex-col border border-gray-100">
              {/* Image - Adjusted size and margin */}
              <div className="mb-6">
                <Image 
                  src="/assets/images/cont-1.svg" // Confirmed path
                  alt="Campaign Performance Overview"
                  width={500} // Adjusted size
                  height={300} 
                  className="rounded-lg mx-auto md:mx-0 object-contain"
                />
              </div>
              {/* Text - Adjusted font size and spacing */}
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">اطلع على أداء حملاتك...</h3>
              <p className="text-gray-600 text-base flex-grow leading-relaxed">
                أنشئ حملاتك من لوحة التحكم، وادِرها، واحصل على نظرة عامة على أدائها وقنواتها.
              </p>
            </div>
          </div>

          {/* Right Column (Smaller) - Adjusted card styling */}
          <div className="md:col-span-5" data-aos="fade-left" data-aos-delay="100">
            <div className="bg-gray-50 rounded-xl shadow-md p-6 md:p-8 h-full flex flex-col border border-gray-100">
               {/* Image - Adjusted size and margin */}
               <div className="mb-6">
                <Image 
                  src="/assets/images/cont-2.svg" // Confirmed path
                  alt="Data-Driven Decisions"
                  width={350} // Adjusted size
                  height={210} 
                  className="rounded-lg mx-auto md:mx-0 object-contain"
                />
              </div>
              {/* Text - Adjusted font size and spacing */}
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">... واتخذ قرارات أفضل مدعومة بالبيانات</h3>
              <p className="text-gray-600 text-base flex-grow leading-relaxed">
                راقب أداء حملاتك واحصل على رؤى تفصيلية حول كل منها.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardControlSection;

