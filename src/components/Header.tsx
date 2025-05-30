
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { supportedLngs } from '@/i18n'; // Import supported languages config
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI Button
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'; // Assuming Shadcn UI Dropdown
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'; // Assuming Shadcn UI Sheet for mobile
import { Menu, X } from 'lucide-react'; // Icons for mobile menu

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentLang = i18n.language.split('-')[0]; // Get base language code

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMobileMenuOpen(false); // Close mobile menu on language change
  };

  const renderLanguageSwitcher = (isMobile = false) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={`font-medium ${isMobile ? 'w-full justify-start px-2 py-1.5 text-base' : 'px-2'}`}>
          {currentLang.toUpperCase()}
          {/* Add chevron down icon if desired */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={isMobile ? 'start' : 'end'}>
        <DropdownMenuLabel>{t('header.language_switcher_title')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {Object.entries(supportedLngs).map(([code, name]) => (
          <DropdownMenuItem key={code} onSelect={() => changeLanguage(code)} disabled={currentLang === code}>
            <span className="w-6 mr-2 font-medium">{code.toUpperCase()}</span> {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const renderNavLinks = (isMobile = false) => (
    <>
      {/* Solutions Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className={`font-medium ${isMobile ? 'w-full justify-start px-2 py-1.5 text-base' : 'px-2'}`}>{t('common.solutions')}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>{t('header.solutions_dropdown_title')}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* Add solution items here, using Link and t() */}
          <DropdownMenuItem asChild><Link href={`/${currentLang}/google-ads`}><Image src="/assets/images/google-h.svg" alt="Google Ads" width={16} height={16} className="mr-2" />{t('header.google_ads')}</Link></DropdownMenuItem>
          <DropdownMenuItem asChild><Link href={`/${currentLang}/facebook-ads`}><Image src="/assets/images/Facebook-h.svg" alt="Facebook Ads" width={16} height={16} className="mr-2" />{t('header.facebook_ads')}</Link></DropdownMenuItem>
          {/* ... Add other solutions ... */}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Integrations Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className={`font-medium ${isMobile ? 'w-full justify-start px-2 py-1.5 text-base' : 'px-2'}`}>{t('common.integrations')}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>{t('header.integrations_dropdown_title')}</DropdownMenuLabel>
          <DropdownMenuSeparator />
           {/* Add integration items here, using Link and t() */}
           <DropdownMenuItem asChild><Link href={`/${currentLang}/shopify`}><Image src="https://app.shown.io/platforms/platform_icon_5.svg" alt="Shopify" width={16} height={16} className="mr-2" />{t('header.shopify')}</Link></DropdownMenuItem>
           {/* ... Add other integrations ... */}
           <DropdownMenuItem asChild><Link href={`/${currentLang}/integrations`}><Image src="/assets/images/Plug.svg" alt="Integrations" width={16} height={16} className="mr-2" />{t('header.all_integrations_link')}</Link></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Resources Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className={`font-medium ${isMobile ? 'w-full justify-start px-2 py-1.5 text-base' : 'px-2'}`}>{t('common.resources')}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>{t('header.resources_dropdown_title')}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild><a href="https://shown.featurebase.app/roadmap" target="_blank" rel="noreferrer nofollow">{t('header.product_roadmap')}</a></DropdownMenuItem>
          <DropdownMenuItem asChild><a href="https://help.shown.io/" target="_blank" rel="noreferrer">{t('header.support_center')}</a></DropdownMenuItem>
          <DropdownMenuItem asChild><Link href={`/${currentLang}/contact`}>{t('header.contact_us')}</Link></DropdownMenuItem>
          <DropdownMenuItem asChild><Link href="/blog">{t('header.blog')}</Link></DropdownMenuItem> {/* Assuming blog is not localized for now */}
        </DropdownMenuContent>
      </DropdownMenu>

      <Link href={`/${currentLang}/pricing`} className={`font-medium text-gray-700 hover:text-blue-600 ${isMobile ? 'block px-2 py-1.5 text-base' : 'px-2'}`}>
        {t('common.pricing')}
      </Link>
    </>
  );

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 md:py-6 bg-gradient-to-b from-white/80 via-white/50 to-transparent">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${currentLang}`} className="flex-shrink-0">
            <Image src="/assets/images/logo.svg" alt="Shown Logo" width={120} height={35} priority />
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-xs">
                <div className="flex justify-between items-center mb-6">
                  <Link href={`/${currentLang}`} className="flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
                     <Image src="/assets/images/logo.svg" alt="Shown Logo" width={100} height={29} />
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <div className="flex flex-col space-y-2">
                  {renderNavLinks(true)}
                  <hr className="my-2"/>
                  {renderLanguageSwitcher(true)}
                  <Link href={`https://app.shown.io/login?lang=${currentLang}`} className="block px-2 py-1.5 text-base font-medium text-gray-700 hover:text-blue-600">
                    {t('common.login')}
                  </Link>
                  <Button asChild className="w-full mt-4">
                    <a href={`https://app.shown.io/create-account?lang=${currentLang}`}>{t('common.get_started')}</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            <div className="flex space-x-1 lg:space-x-2">
              {renderNavLinks(false)}
            </div>
            <div className="flex items-center space-x-2 lg:space-x-3">
              {renderLanguageSwitcher(false)}
              <Link href={`https://app.shown.io/login?lang=${currentLang}`} className="text-gray-700 hover:text-blue-600 font-medium px-2">
                {t('common.login')}
              </Link>
              <Button asChild size="sm">
                <a href={`https://app.shown.io/create-account?lang=${currentLang}`}>{t('common.get_started')}</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

