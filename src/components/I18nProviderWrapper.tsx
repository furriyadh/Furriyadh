'use client';

import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '@/i18n'; // Adjust the import path if necessary
import { useEffect } from 'react';

// Define language directions
const languageDirections: { [key: string]: 'ltr' | 'rtl' } = {
  en: 'ltr',
  ar: 'rtl',
  de: 'ltr',
  es: 'ltr',
  fr: 'ltr',
  id: 'ltr',
  it: 'ltr',
  nl: 'ltr',
  pt: 'ltr',
  ru: 'ltr',
  tr: 'ltr',
};

// Client component to handle directionality
function DirectionalitySetter() {
  const { i18n: i18nInstance } = useTranslation();

  useEffect(() => {
    const currentLang = i18nInstance.language.split('-')[0]; // Get base language code (e.g., 'en' from 'en-US')
    const direction = languageDirections[currentLang] || 'ltr'; // Default to LTR
    document.documentElement.dir = direction;
    document.documentElement.lang = currentLang;
  }, [i18nInstance.language]);

  return null; // This component doesn't render anything itself
}

export default function I18nProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <DirectionalitySetter />
      {children}
    </I18nextProvider>
  );
}

