import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// TODO: Integrate i18next for translations
// TODO: Implement dropdowns using Shadcn/UI or similar
// TODO: Fetch actual language options and links dynamically
// TODO: Style mobile navigation toggle

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="bg-transparent py-4 md:p-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/ar" className="navbar-brand">
            {/* Assuming logo is moved to public/assets/images/ */}
            <Image src="/assets/images/shownlogo.png" alt="Shown Logo" width={100} height={30} />
          </Link>
          <button
            className="navbar-toggler md:hidden" // Basic Tailwind for mobile toggle
            type="button"
            // TODO: Add state and onClick handler for mobile menu toggle
            aria-label="Toggle navigation"
          >
            {/* TODO: Replace with appropriate icons (e.g., from lucide-react) */}
            <i className="fas fa-bars"></i> {/* Placeholder */} 
            <i className="fas fa-times hidden"></i> {/* Placeholder */} 
          </button>
          <div className="hidden md:flex md:items-center md:space-x-6" id="navbarSupportedContent">
            {/* Desktop Navigation */}
            <ul className="navbar-nav flex space-x-6">
              {/* Solutions Dropdown */}
              <li className="nav-item dropdown">
                {/* TODO: Implement Dropdown component */}
                <a className="nav-link dropdown-toggle text-white hover:text-gray-300" href="#" role="button">
                  الحلول
                </a>
                {/* Dropdown Content - Placeholder */}
              </li>
              {/* Integrations Dropdown */}
              <li className="nav-item dropdown">
                {/* TODO: Implement Dropdown component */}
                <a className="nav-link dropdown-toggle text-white hover:text-gray-300" href="#" role="button">
                  التكاملات
                </a>
                {/* Dropdown Content - Placeholder */}
              </li>
              {/* Resources Dropdown */}
              <li className="nav-item dropdown">
                {/* TODO: Implement Dropdown component */}
                <a className="nav-link dropdown-toggle text-white hover:text-gray-300" href="#" role="button">
                  الموارد
                </a>
                {/* Dropdown Content - Placeholder */}
              </li>
              <li className="nav-item">
                <Link href="/ar/pricing" className="nav-link text-white hover:text-gray-300">
                  الأسعار
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav flex items-center space-x-4 ml-auto">
              {/* Language Dropdown */}
              <li className="nav-item dropdown lang-dropdown">
                 {/* TODO: Implement Language Dropdown component */}
                <a className="nav-link dropdown-toggle text-white hover:text-gray-300" href="#" role="button">
                  AR
                </a>
                {/* Dropdown Content - Placeholder */}
              </li>
              <li className="nav-item">
                <a className="nav-link text-white hover:text-gray-300" href="https://app.shown.io/login?lang=ar">
                  تسجيل الدخول
                </a>
              </li>
              <li className="nav-item">
                <a href="https://app.shown.io/create-account?lang=ar" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  ابدأ الآن
                </a>
              </li>
            </ul>
          </div>
          {/* TODO: Add Mobile Navigation Menu (conditionally rendered) */}
        </div>
      </nav>
    </header>
  );
};

export default Header;

