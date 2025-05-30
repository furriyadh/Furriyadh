import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// TODO: Integrate i18next for translations

const Footer = () => {
  // Define footer links structure for easier management
  const footerLinks = {
    company: [
      { href: '/ar/about', text: 'من نحن' },
      { href: '/ar/careers', text: 'الوظائف' },
      { href: 'https://www.notion.so/instaon/Press-kit-9c892852a97549c8a0eb24707e25507d', text: 'الصحافة والإعلام', target: '_blank', rel: 'noreferrer' },
      { href: '/ar/contact', text: 'تواصل معنا' },
      { href: '/blog', text: 'المدونة' },
    ],
    product: [
      { href: '/ar/integrations', text: 'التكاملات' },
      { href: '/ar/pricing', text: 'الأسعار' },
      { href: '/ar/partners', text: 'برنامج الشركاء' },
      { href: '/ar/api', text: 'واجهة برمجة التطبيقات المعروضة' },
      { href: 'https://shown.featurebase.app/roadmap', text: 'خارطة طريق المنتج', target: '_blank', rel: 'noreferrer nofollow' },
    ],
    solutions: [
      { href: '/ar/google-ads', text: 'Google Ads' },
      { href: '/ar/facebook-ads', text: 'Facebook Ads' },
      { href: '/ar/instagram-ads', text: 'Instagram Ads' },
      { href: '/ar/microsoft-ads', text: 'Microsoft Ads' },
      { href: '/ar/twitter-ads', text: 'Twitter Ads' }, // Assuming X Ads is Twitter Ads
    ],
  };

  const socialLinks = [
    { href: 'https://twitter.com/shown_io', src: '/assets/images/Twitter.svg', alt: 'Twitter' },
    { href: 'https://www.facebook.com/shown.ads', src: '/assets/images/Facebook.svg', alt: 'Facebook' },
    { href: 'https://www.linkedin.com/company/shown-ads', src: '/assets/images/linkedin.svg', alt: 'LinkedIn' },
    { href: 'https://www.instagram.com/shown.io/', src: '/assets/images/instagram.svg', alt: 'Instagram' },
  ];

  return (
    // Adjusted padding and background color
    <footer className="bg-[#0F172A] text-gray-400 py-14 md:py-20">
      <div className="container mx-auto px-4">
        {/* Adjusted grid layout and spacing */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-10 mb-12">
          {/* Column 1: Logo and Social - Adjusted column span and spacing */}
          <div className="col-span-2 md:col-span-3">
            <Link href="/ar" className="inline-block mb-6">
              {/* Ensure logo path is correct and size matches original */}
              <Image src="/assets/images/logo.svg" alt="Shown Logo" width={130} height={35} />
            </Link>
            {/* Adjusted social icon size and spacing */}
            <div className="flex space-x-4 space-x-reverse">
              {socialLinks.map((link) => (
                <a key={link.alt} href={link.href} target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                  <Image src={link.src} alt={`${link.alt} logo`} width={24} height={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Product Links - Adjusted column span and text styling */}
          <div className="md:col-span-3">
            <h5 className="text-white font-semibold mb-4 text-base">المنتج</h5>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.text}>
                  <Link href={link.href} target={link.target} rel={link.rel} className="text-sm hover:text-white transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links - Adjusted column span and text styling */}
          <div className="md:col-span-3">
            <h5 className="text-white font-semibold mb-4 text-base">الشركة</h5>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.text}>
                  <Link href={link.href} target={link.target} rel={link.rel} className="text-sm hover:text-white transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Solutions Links - Adjusted column span and text styling */}
          <div className="md:col-span-3">
            <h5 className="text-white font-semibold mb-4 text-base">الحلول</h5>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.text}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer Row - Adjusted spacing and text size */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()}, Shown. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2">
            <Link href="/ar/cookies" className="hover:text-white transition-colors">سياسة ملفات تعريف الارتباط</Link>
            <Link href="/ar/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
            <Link href="/ar/terms" className="hover:text-white transition-colors">شروط الاستخدام</Link>
            <a href="https://help.shown.io/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">مركز الدعم</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

