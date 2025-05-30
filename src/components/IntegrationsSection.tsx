import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// TODO: Integrate i18next for translations
// TODO: Copy assets (images) to public folder

const IntegrationsSection = () => {
  return (
    <section className="section-8 py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Logos - Ensure images are in public folder */}
      <div className="absolute inset-x-0 top-0 opacity-10 z-0">
        <Image 
          src="/assets/images/int-logos.svg" 
          alt="Integration Logos Background" 
          width={1920} // Adjust width as needed
          height={300} // Adjust height as needed
          className="w-full h-auto hidden md:block"
        />
        <Image 
          src="/assets/images/int-logos-m.svg" 
          alt="Integration Logos Background Mobile" 
          width={768} // Adjust width as needed
          height={200} // Adjust height as needed
          className="w-full h-auto md:hidden"
        />
      </div>

      <div className="container mx-auto px-4 my-8 md:my-16 relative z-10" data-aos="zoom-in">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-gray-900">
          استيراد الأصول ذات الصلة <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">مع التكامل</span>
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-10">
          قم بدمج تطبيقاتك المختلفة ومزامنة جميع أصولك القيمة، مثل قوائم البريد الإلكتروني وقوائم المنتجات، لإنشاء إعلانات مربحة.
        </p>
        <div className="text-center mt-8">
          <Link href="/ar/integrations" className="border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-bold py-3 px-8 rounded-md text-lg inline-block transition duration-300">
            عرض جميع التكاملات
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;

