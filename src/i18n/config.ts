import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ar',
    supportedLngs: ['ar', 'en'],
    debug: process.env.NODE_ENV !== 'production',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'cookie', 'navigator'],
      lookupFromPathIndex: 0,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
