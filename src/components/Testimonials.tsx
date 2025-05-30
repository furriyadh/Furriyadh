import React from 'react';
import Image from 'next/image';

// TODO: Integrate i18next for translations
// TODO: Fetch testimonials dynamically or from a data source
// TODO: Use Shadcn/UI Card component for styling if desired
// TODO: Add AOS or similar for animations (ensure initialization)

const Testimonials = () => {
  // Placeholder data - replace with actual data or fetch dynamically
  const testimonials = [
    {
      id: 1,
      text: 'بدأت باستخدام Shown لعملي وأنا راضٍ جدًا. شكر خاص لفريق الدعم لمساعدتي!',
      author: 'Brenton Miller',
      image: '/assets/images/pricing/test1.png', 
    },
    {
      id: 2,
      text: 'يشبه Shown خبير التسويق الرقمي الذي يجلس بجانبي ويوفر علي الوقت من خلال القيام بكل الأعمال اليدوية!',
      author: 'Alexander Skibinskiy',
      image: '/assets/images/pricing/test2.png',
    },
    {
      id: 3,
      text: 'استخدمت Shown للإعلان عن عملي الذي أقوم به بمفردي. حققت نتائج ممتازة وأنا سعيد بالأداة الآلية وخطة الدعم.',
      author: 'Baptiste Michiels',
      image: '/assets/images/pricing/test3.png',
    },
  ];

  return (
    // Adjusted padding to match original site spacing more closely
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Trustpilot section - Adjusted image size and margin */}
        <div className="text-center mb-14 md:mb-20" data-aos="fade-in">
          {/* Using the specific Trustpilot image from the original assets */}
          <Image 
            src="/assets/images/reviews.svg" // Confirmed path
            alt="Shown.io Trustpilot Rating" 
            width={300} // Adjusted width to better match original
            height={50} // Adjusted height based on aspect ratio
            className="mx-auto"
          />
        </div>

        {/* Testimonial Cards - Adjusted styling for closer match */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          data-aos="fade-up" data-aos-delay="100"
         >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              // Refined card styling: padding, shadow, border-radius
              className="bg-white rounded-lg shadow-md p-6 flex flex-col border border-gray-100"
            >
              {/* Star rating image - Adjusted margin */}
              <Image 
                src="/assets/images/pricing/stars.svg" 
                alt="5 Star Rating" 
                width={90} // Slightly adjusted size
                height={18}
                className="mb-4"
              />
              {/* Testimonial text - Adjusted text size, color, and margin */}
              <p className="text-gray-600 text-base mb-5 flex-grow leading-relaxed">{testimonial.text}</p>
              {/* Author section - Adjusted spacing and text size */}
              <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  width={36} // Slightly adjusted size
                  height={36} 
                  className="rounded-full mr-3"
                />
                {/* Adjusted author name styling */}
                <h6 className="font-semibold text-sm text-gray-800 ms-1">{testimonial.author}</h6> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

