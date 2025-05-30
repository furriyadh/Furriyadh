import React from 'react';
import Image from 'next/image';

// TODO: Integrate i18next for translations
// TODO: Add AOS or similar for animations (ensure initialization)

const BudgetSection = () => {
  return (
    // Adjusted background gradient and padding to match original
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#F3F6FF] to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          {/* Left Column (Text) - Adjusted text alignment and spacing */}
          <div className="lg:w-5/12 text-center lg:text-right order-2 lg:order-1" data-aos="fade-right">
            <h2 
              className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-gray-900 mb-5 leading-tight"
            >
              إدارة جميع الميزانيات <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">من مكان واحد</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              مع رصيد Shown، يمكنك إدارة الميزانيات على جميع المنصات الإعلانية بسهولة وكسب رصيد إضافي مع كل عملية إنفاق.
            </p>
          </div>

          {/* Right Column (Image/Animation) - Adjusted image paths and positioning */}
          <div className="lg:w-7/12 relative order-1 lg:order-2" data-aos="zoom-in-left" data-aos-delay="100">
            {/* Static background image - Ensure path is correct */}
            <Image 
              src="/assets/images/baln-count-e.svg" // Confirmed path
              alt="Budget management background element"
              width={700} 
              height={450} 
              className="w-full max-w-2xl mx-auto lg:mx-0 lg:ml-auto object-contain"
            />
            {/* Animated GIF overlay - Positioned absolutely, ensure path is correct */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image 
                src="/assets/images/home-4ee.gif" // Confirmed path
                alt="Budget counter animation"
                width={600} // Adjusted size for better overlay
                height={380} 
                unoptimized // Important for GIFs
                className="max-w-[85%] md:max-w-[80%] lg:max-w-[75%] mt-2 md:mt-0" // Fine-tuned positioning
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetSection;

