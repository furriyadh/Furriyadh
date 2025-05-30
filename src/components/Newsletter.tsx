
'use client'; // Needed for form handling (useState, etc.)

import React, { useState } from 'react';

// TODO: Integrate i18next for translations
// TODO: Implement actual form submission logic (e.g., API call)
// TODO: Add form validation and feedback (success/error messages)

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder for submission logic
    console.log('Submitting email:', email);
    // Reset email or show success message
    setEmail(''); 
  };

  return (
    // Adjusted background and padding to match original section
    <section className="py-16 md:py-20 bg-[#F3F6FF] relative z-10">
      <div className="container mx-auto px-4">
        {/* Adjusted card styling: padding, shadow, border-radius */}
        <div className="max-w-xl mx-auto text-center bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
          {/* Heading - Adjusted font size and margin */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            اشترك في النشرة الإخبارية
          </h2>
          {/* Subheading - Adjusted text size and margin */}
          <p className="text-gray-600 mb-6 text-base leading-relaxed">
            تعرف على آخر الميزات والأخبار والمقالات من Shown. لا يوجد بريد مزعج، نعدك.
          </p>
          {/* Form - Adjusted spacing */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            {/* Email Input - Adjusted styling for closer match */}
            <input 
              type="email" 
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="أدخل عنوان بريدك الإلكتروني"
              required
              className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent text-base shadow-sm"
              aria-label="البريد الإلكتروني"
            />
            {/* Submit Button - Adjusted styling for closer match */}
            <button 
              type="submit"
              className="sbtn bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-base transition duration-300 shadow-md whitespace-nowrap"
            >
              اشترك
            </button>
          </form>
          {/* TODO: Add success/error message area */} 
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

