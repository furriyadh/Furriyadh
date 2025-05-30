
'use client'; // Add this directive for client-side hooks like useState

import React from 'react';

// TODO: Integrate i18next for translations
// TODO: Implement actual form submission logic (e.g., API route)
// TODO: Use Shadcn/UI Input and Button components

const Newsletter = () => {
  // Basic form state handling (can be enhanced)
  const [email, setEmail] = React.useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add form submission logic here
    console.log('Newsletter submitted with email:', email);
    // Reset email or show success message
    setEmail(''); 
  };

  return (
    <section className="inner-hero inner-last-section relative z-10 py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-xl">
        <form onSubmit={handleSubmit}>
          <div className="mb-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold capitalize mb-2 text-gray-900">
              اشترك في النشرة الإخبارية
            </h2>
            <p className="text-gray-600">
              تعرف على آخر الميزات والأخبار والمقالات من Shown. لا يوجد بريد مزعج، نعدك.
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="sr-only">
              البريد الإلكتروني
            </label>
            <input
              type="email" // Changed type to email for better validation
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              id="email"
              name="email"
              placeholder="أدخل عنوان بريدك الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required // Added basic required validation
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
          >
            اشترك
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

