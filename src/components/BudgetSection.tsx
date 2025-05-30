import React from 'react';
import Image from 'next/image';

// TODO: Integrate i18next for translations
// TODO: Copy assets (images, gifs) to public folder

const BudgetSection = () => {
  return (
    <section className="section-7 py-12 md:py-20 my-8 md:my-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-center lg:text-start">
          {/* Text Column */}
          <div className="lg:col-span-5" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
              إدارة جميع الميزانيات من مكان واحد
            </h2>
            <p className="text-lg text-gray-600">
              مع رصيد Shown، يمكنك إدارة الميزانيات على جميع المنصات الإعلانية بسهولة وكسب رصيد إضافي مع كل عملية إنفاق.
            </p>
          </div>
          {/* Image Column */}
          <div className="lg:col-span-7 relative text-end" data-aos="zoom-out-left" data-aos-delay="250">
            {/* Ensure images/gifs are in public folder */}
            <Image 
              src="/assets/images/baln-count-e.svg" 
              alt="Balance Counter Background" 
              width={600} // Adjust width as needed
              height={400} // Adjust height as needed
              className="inline-block max-w-full h-auto pr-[10%]" // Adjusted padding-right approximation
            />
            <Image 
              src="/assets/images/home-4ee.gif" 
              alt="Balance Counter Animation" 
              width={600} // Adjust width as needed
              height={400} // Adjust height as needed
              className="absolute end-0 bottom-0 max-w-full h-auto" 
              unoptimized // Necessary for GIFs with next/image
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetSection;

