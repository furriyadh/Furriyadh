import React from 'react';
import Image from 'next/image';

// TODO: Integrate i18next for translations
// TODO: Fetch testimonials dynamically or from a data source
// TODO: Use Shadcn/UI Card component for styling

const Testimonials = () => {
  // Placeholder data - replace with actual data
  const testimonials = [
    {
      id: 1,
      text: 'بدأت باستخدام Shown لعملي وأنا راضٍ جدًا. شكر خاص لفريق الدعم لمساعدتي!',
      author: 'Brenton Miller',
      image: '/assets/images/pricing/test1.png', // Assuming images are copied to public/assets/images/pricing
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
    <section className="testimonials py-4 mb-5 mt-4">
      <div className="container mx-auto px-4">
        {/* Trustpilot section - Adapt based on original HTML (lines ~260-270) */}
        <div className="text-center mb-12" data-aos="fade-in">
          {/* Desktop version */}
          <Image src="/assets/images/reviews.svg" alt="Reviews" width={300} height={50} className="hidden md:block mx-auto" />
          {/* Mobile version */}
          <p className="md:hidden text-xl font-medium">Shown is rated <span className="text-purple-600">Excellent</span></p>
          <Image src="/assets/images/trustpilot-m.svg" alt="Trustpilot Mobile" width={150} height={40} className="md:hidden mx-auto mt-2" />
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center" data-aos="fade-in">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="border p-6 rounded-lg shadow-md bg-white">
              {/* Assuming stars image is consistent */}
              <Image src="/assets/images/pricing/stars.svg" alt="Rating stars" width={100} height={20} className="mb-3" />
              <p className="text-gray-700 text-base mb-4">{testimonial.text}</p>
              <div className="flex items-center mt-auto">
                <Image src={testimonial.image} alt={testimonial.author} width={40} height={40} className="rounded-full" />
                <h6 className="mb-0 ml-3 font-semibold text-gray-800">{testimonial.author}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

