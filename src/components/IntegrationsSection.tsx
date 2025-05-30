import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// TODO: Integrate i18next for translations
// TODO: Add AOS or similar for animations (ensure initialization)

const IntegrationsSection = () => {
  return (
    // Adjusted padding and added relative positioning for background
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Logos - Positioned absolutely, adjusted opacity */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        {/* Desktop Logos - Updated Image props */}
        <Image 
          src="/assets/images/int-logos.svg" // Confirmed path
          alt="Integration logos background" 
          fill={true} // Use fill instead of layout
          style={{ objectFit: 'cover' }} // Use style for objectFit
          className="hidden md:block"
          priority={false} // Optional: set priority if needed
        />
        {/* Mobile Logos - Updated Image props */}
        <Image 
          src="/assets/images/int-logos-m.svg" // Confirmed path
          alt="Integration logos background mobile"
          fill={true} // Use fill instead of layout
          style={{ objectFit: 'cover' }} // Use style for objectFit
          className="md:hidden"
          priority={false} // Optional: set priority if needed
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading - Adjusted spacing and gradient */}
        <div className="text-center mb-10 md:mb-12" data-aos="zoom-in">
          <h2 
            className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-gray-900 mb-4 leading-tight"
          >
            استيراد الأصول ذات الصلة <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">مع التكامل</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            قم بدمج تطبيقاتك المختلفة ومزامنة جميع أصولك القيمة، مثل قوائم البريد الإلكتروني وقوائم المنتجات، لإنشاء إعلانات مربحة.
          </p>
        </div>

        {/* CTA Button - Adjusted styling */}
        <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
          <Link 
            href="/ar/integrations" // TODO: Create this page or update link
            className="sbtn bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-7 rounded-lg text-lg inline-block shadow-md transition duration-300"
          >
            عرض جميع التكاملات
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;

