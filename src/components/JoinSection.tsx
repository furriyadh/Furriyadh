import React from 'react';
import Link from 'next/link';

// TODO: Integrate i18next for translations
// TODO: Add AOS or similar for animations (ensure initialization)

const JoinSection = () => {
  return (
    // Adjusted background gradient and padding
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F3F6FF] relative z-10">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="text-center max-w-2xl mx-auto">
          {/* Section Heading - Adjusted font size, spacing, and gradient */}
          <h2 
            className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-gray-900 mb-4 leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">انضم إلى 20,000 شركة صغيرة</span><br/>
            على Shown
          </h2>
          {/* Subheading - Adjusted text size and spacing */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            انضم إلى مجتمعنا النابض بالحياة واختبر الفرق. افتح فرص نمو تساعد على ارتقاء عملك للمستوى التالي.
          </p>
          {/* CTA Button - Adjusted styling */}
          <div>
            <Link 
              href="https://app.shown.io/create-account?lang=ar" 
              className="sbtn bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-7 rounded-lg text-lg inline-block shadow-md transition duration-300 app-link"
            >
              أنشئ حساباً مجانياً
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;

