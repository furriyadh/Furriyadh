import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// TODO: Integrate i18next for translations
// TODO: Fetch links dynamically or from a config file
// TODO: Add actual social media icons (e.g., lucide-react)

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="footer-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Column 1: Logo and Social */}
            <div>
              {/* Assuming logo is moved to public/assets/images/ */}
              <Image src="/assets/images/logo.svg" alt="Shown Logo" width={150} height={40} className="mb-4" />
              <div className="footer-social mt-4 flex space-x-3">
                {/* Replace with actual icons */}
                <a href="https://twitter.com/shown_io" target="_blank" rel="noreferrer" className="hover:text-white"><Image src="/assets/images/Twitter.svg" alt="Twitter" width={28} height={28} /></a>
                <a href="https://www.facebook.com/shown.ads" target="_blank" rel="noreferrer" className="hover:text-white"><Image src="/assets/images/Facebook.svg" alt="Facebook" width={28} height={28} /></a>
                <a href="https://www.linkedin.com/company/shown-ads" target="_blank" rel="noreferrer" className="hover:text-white"><Image src="/assets/images/linkedin.svg" alt="LinkedIn" width={28} height={28} /></a>
                <a href="https://www.instagram.com/shown.io/" target="_blank" rel="noreferrer" className="hover:text-white"><Image src="/assets/images/instagram.svg" alt="Instagram" width={28} height={28} /></a>
              </div>
            </div>

            {/* Column 2: Links */}
            <div>
              <h5 className="font-semibold text-white mb-3">المنتج</h5>
              <ul className="footer-links space-y-2">
                <li><Link href="/ar/integrations" className="hover:text-white">التكاملات</Link></li>
                <li><Link href="/ar/pricing" className="hover:text-white">الأسعار</Link></li>
                <li><Link href="/ar/partners" className="hover:text-white">برنامج الشركاء</Link></li>
                <li><Link href="/ar/api" className="hover:text-white">واجهة برمجة التطبيقات</Link></li>
                <li><a href="https://shown.featurebase.app/roadmap" target="_blank" rel="noreferrer nofollow" className="hover:text-white">خارطة طريق المنتج</a></li>
              </ul>
            </div>

            {/* Column 3: Links */}
            <div>
              <h5 className="font-semibold text-white mb-3">الشركة</h5>
              <ul className="footer-links space-y-2">
                <li><Link href="/ar/about" className="hover:text-white">من نحن</Link></li>
                <li><Link href="/ar/careers" className="hover:text-white">الوظائف</Link></li>
                <li><a href="https://www.notion.so/instaon/Press-kit-9c892852a97549c8a0eb24707e25507d" target="_blank" rel="noreferrer" className="hover:text-white">الصحافة والإعلام</a></li>
                <li><Link href="/ar/contact" className="hover:text-white">تواصل معنا</Link></li>
                <li><Link href="/blog" className="hover:text-white">المدونة</Link></li>
              </ul>
            </div>

            {/* Column 4: Links */}
            <div>
              <h5 className="font-semibold text-white mb-3">الحلول</h5>
              <ul className="footer-links space-y-2">
                <li><Link href="/ar/google-ads" className="hover:text-white">Google Ads</Link></li>
                <li><Link href="/ar/facebook-ads" className="hover:text-white">Facebook Ads</Link></li>
                <li><Link href="/ar/instagram-ads" className="hover:text-white">Instagram Ads</Link></li>
                <li><Link href="/ar/microsoft-ads" className="hover:text-white">Microsoft Ads</Link></li>
                <li><Link href="/ar/twitter-ads" className="hover:text-white">X (Twitter) Ads</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="footer-text mb-4 md:mb-0">&copy; {new Date().getFullYear()}, Shown. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2">
              <Link href="/ar/cookies" className="hover:text-white">سياسة ملفات تعريف الارتباط</Link>
              <Link href="/ar/privacy" className="hover:text-white">سياسة الخصوصية</Link>
              <Link href="/ar/terms" className="hover:text-white">شروط الاستخدام</Link>
              <a href="https://help.shown.io/" target="_blank" rel="noreferrer" className="hover:text-white">مركز الدعم</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

