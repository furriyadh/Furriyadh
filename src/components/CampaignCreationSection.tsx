import React from 'react';
import Image from 'next/image';

// TODO: Integrate i18next for translations
// TODO: Add AOS or similar for animations (ensure initialization)

const CampaignCreationSection = () => {
  return (
    // Adjusted padding and background
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading - Adjusted spacing and gradient */}
        <h2 
          className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-center text-gray-900 mb-14 md:mb-20 leading-tight"
          data-aos="fade-up"
        >
          إنشاء حملات إعلانية مربحة <br />
          في دقائق <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">بسهولة</span>
        </h2>

        {/* First Row: Effortless Ads - Adjusted spacing and alignment */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24" data-aos="fade-in">
          {/* Left Column (Image) - Ensured correct image and size */}
          <div className="md:w-1/2 flex justify-center order-1 md:order-2">
            <Image 
              src="/assets/images/efforts.png" // Confirmed image path
              alt="Effortless Ad Creation Illustration" 
              width={500} // Adjusted size
              height={380} 
              className="max-w-full h-auto"
            />
          </div>
          {/* Right Column (Text) - Adjusted text alignment and spacing */}
          <div className="md:w-1/2 text-center md:text-right order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">إعلانات عالية الأداء. بكل سهولة.</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              أنشئ حملاتك الإعلانية مثل أكبر العلامات التجارية في دقائق. اكتشف قوة الأتمتة.
            </p>
          </div>
        </div>

        {/* Second Row: Features - Adjusted card styling, spacing, and image sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Feature 1: Shown does the work */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center text-center md:text-right border border-gray-100" data-aos="fade-up">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 order-1 md:order-2">
              <Image 
                src="/assets/images/s4-r2-c1.png" // Confirmed image path
                alt="AI doing the work illustration" 
                width={120} // Adjusted size
                height={120} 
              />
            </div>
            <div className="order-2 md:order-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Shown يقوم بكل العمل نيابة عنك.</h3>
              <p className="text-gray-600 text-base">
                يتولى Shown كل شيء، من استهداف الإعلانات وكتابة النصوص إلى إنشاء المواد الإعلانية.
              </p>
            </div>
          </div>

          {/* Feature 2: Publish everywhere */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center text-center md:text-right border border-gray-100" data-aos="fade-up" data-aos-delay="100">
             <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 order-1 md:order-2">
              <Image 
                src="/assets/images/social.png" // Confirmed image path
                alt="Publish across platforms illustration" 
                width={120} // Adjusted size
                height={120} 
              />
            </div>
            <div className="order-2 md:order-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">انشر على جميع المنصات الإعلانية الرئيسية.</h3>
              <p className="text-gray-600 text-base">
                ندعم جميع المنصات الإعلانية الرئيسية لجلب أفضل عائد على الاستثمار.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignCreationSection;

