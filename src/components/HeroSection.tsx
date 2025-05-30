import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// TODO: Integrate i18next for translations
// TODO: Implement video modal functionality
// TODO: Copy assets (images) to public folder

const HeroSection = () => {
  return (
    <section className="hero relative bg-gradient-to-b from-blue-600 to-blue-800 text-white pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      {/* Background elements - Adapt or replace with Tailwind equivalents */}
      {/* <img src="/assets/images/gradpath.png" className="gradpath" /> */}
      {/* <img src="/assets/images/gradpathtwo.png" className="gradpathtwo" /> */}

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-up">
            تحسين الإعلانات بالذكاء الاصطناعي <span className="text-yellow-300">لتحقيق أقصى عائد استثمار</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90" data-aos="fade-up" data-aos-delay="100">
            أنشئ حملات إعلانية مربحة عبر Google و Facebook و Instagram و Microsoft و X و LinkedIn و TikTok و YouTube باستخدام منصة Shown.io المدعومة بالذكاء الاصطناعي.
          </p>
          <div className="hero-cta mb-8" data-aos="fade-up" data-aos-delay="200">
            <Link href="https://app.shown.io/create-account?lang=ar" className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-3 px-8 rounded-md text-lg inline-block mr-4 mb-4 md:mb-0">
              ابدأ مجانًا
            </Link>
            <a href="#demo-video" className="border border-white hover:bg-white hover:text-blue-800 text-white font-bold py-3 px-8 rounded-md text-lg inline-block">
              {/* TODO: Add play icon */}
              شاهد العرض التوضيحي
            </a>
          </div>
          <div className="flex justify-center items-center space-x-2 text-sm opacity-80" data-aos="fade-up" data-aos-delay="300">
            {/* Replace with actual partner logo if available */}
            {/* <img src="/assets/images/Google_Ads_logo.svg" alt="Google Ads Logo" width="24" height="24" /> */}
            <span>شريك جوجل المميز <span className="font-semibold">2025</span></span>
          </div>
        </div>

        {/* Below CTA Image/Video Placeholder */}
        <div className="below-cta-img relative mt-12 md:mt-16" data-aos="fade-up" data-aos-delay="400">
          <div className="image mx-auto text-center relative max-w-4xl" id="demo-video">
            {/* Ensure image is in public folder */}
            <Image 
              src="/assets/images/home-video.png" 
              alt="shown.io demo video" 
              width={1000} 
              height={563} // Adjust height based on actual image aspect ratio
              className="rounded-lg shadow-xl"
            />
            {/* Video Play Button - TODO: Implement Modal Trigger */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button type="button" className="play-btn bg-white/30 backdrop-blur-sm rounded-full p-4 hover:bg-white/50 transition duration-300">
                {/* Placeholder for Play Icon */}
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

