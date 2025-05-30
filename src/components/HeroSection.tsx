import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// TODO: Integrate i18next for translations
// TODO: Implement video modal functionality (if the original had one)
// TODO: Add AOS or similar for animations (ensure initialization in layout/page)

const HeroSection = () => {
  return (
    <section 
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
      // Apply the specific gradient background from the original site
      style={{
        background: 'linear-gradient(180deg, #F3F6FF 0%, #E1E9FF 100%)'
      }}
    >
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center max-w-3xl mx-auto">
          {/* Heading - Adjusted font size, weight, line height, and spacing */}
          <h1 
            className="text-4xl md:text-5xl lg:text-[54px] font-extrabold mb-4 leading-tight text-gray-900"
            data-aos="fade-up"
          >
            دع الذكاء الاصطناعي يدير إعلاناتك <br />
            ويجذب <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">المزيد من العملاء</span> بسهولة.
          </h1>
          {/* Subheading - Adjusted text size and spacing */}
          <p 
            className="text-lg text-gray-600 mb-8 max-w-xl mx-auto"
            data-aos="fade-up" data-aos-delay="100"
          >
            أطلق إعلاناتك بسهولة على جميع القنوات الرئيسية، شاهدها تُحسَّن تلقائيًا واحصل على أفضل النتائج لعملك.
          </p>
          
          {/* CTA Button - Adjusted padding, font size, and added original class 'sbtn' if it carries specific styles */}
          <div className="hero-cta mb-6" data-aos="fade-up" data-aos-delay="200">
            <Link 
              href="https://app.shown.io/create-account?lang=ar" 
              className="sbtn bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-7 rounded-lg text-lg inline-block shadow-md transition duration-300 app-link"
            >
              أنشئ حساباً مجانياً
            </Link>
          </div>

          {/* Registration count and Partner badge - Adjusted spacing and added partner logo */}
          <div 
            className="text-sm text-gray-500 mb-10" 
            data-aos="fade-up" data-aos-delay="300"
          >
            1171 شركة تم تسجيلها الأسبوع الماضي!
            <div className="flex justify-center items-center mt-4">
              {/* Using the actual partner logo image */}
              <Image 
                src="/assets/images/google-premier-partner-2024.png" // Ensure this path is correct
                alt="Google Premier Partner 2025" 
                width={180} // Adjust size as needed
                height={45} // Adjust size as needed
              />
            </div>
          </div>
        </div>

        {/* Dashboard Image - Adjusted margin-top and ensured correct image */}
        <div 
          className="relative mt-4 md:mt-8 max-w-5xl mx-auto" 
          data-aos="fade-up" data-aos-delay="400"
        >
          <Image 
            src="/assets/images/home-1e2.png" // Confirmed image source
            alt="Shown.io Dashboard Preview" 
            width={1100} 
            height={650} 
            className="rounded-lg shadow-xl mx-auto"
            priority 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

