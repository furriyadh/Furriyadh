import React from 'react';
import Image from 'next/image';

// TODO: Integrate i18next for translations
// TODO: Add AOS or similar for animations (ensure initialization)
// TODO: Implement hover effect to show GIFs if desired (like data-h attribute in original)

const OptimizationSection = () => {
  const optimizationFeatures = [
    {
      title: 'إيقاف وتحسين الكلمات المفتاحية',
      image: '/assets/images/opt-1e.png', // Confirmed path
      gif: '/assets/images/home-2.gif' // Optional GIF for hover effect
    },
    {
      title: 'إنشاء إعلانات جديدة للاختبار A/B',
      image: '/assets/images/opt-2.png', // Confirmed path
      gif: '/assets/images/home-3.gif'
    },
    {
      title: 'اقتراح استهداف جديد',
      image: '/assets/images/opt-3.png', // Confirmed path
      gif: '/assets/images/opt-3.png' // Original uses same image for hover
    }
  ];

  return (
    // Adjusted padding and background gradient to match original
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F3F6FF]">
      <div className="container mx-auto px-4">
        {/* Section Heading - Adjusted spacing and gradient */}
        <div className="text-center mb-14 md:mb-20">
          <h2 
            className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-gray-900 mb-4 leading-tight"
            data-aos="fade-up"
          >
            احصل على تحسين إعلاناتك <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">24/7</span>
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up" data-aos-delay="100"
          >
            سيقوم Shown بتحسين إعلاناتك على مدار الساعة على جميع القنوات. من إيقاف الكلمات المفتاحية غير الناجحة، وإنشاء إعلانات جديدة للاختبار A/B أو اقتراح استهداف جديد، يغطي Shown كل ذلك.
          </p>
        </div>

        {/* Optimization Features Grid - Adjusted card styling, image size, and spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {optimizationFeatures.map((feature, index) => (
            <div 
              key={index}
              // Refined card styling: padding, shadow, border
              className="bg-white rounded-xl shadow-md overflow-hidden text-center p-6 md:p-8 transition-shadow duration-300 hover:shadow-lg border border-gray-100"
              data-aos="fade-up" 
              data-aos-delay={100 * (index + 1)}
            >
              {/* Image - Adjusted size and margin */}
              <div className="mb-6 flex justify-center">
                <Image 
                  src={feature.image} 
                  alt={feature.title}
                  width={280} // Adjusted size to match original better
                  height={180} // Adjusted size based on aspect ratio
                  className="rounded-lg object-contain"
                />
              </div>
              {/* Title - Adjusted text size and margin */}
              <h3 className="text-xl font-semibold text-gray-800 mt-2">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OptimizationSection;

