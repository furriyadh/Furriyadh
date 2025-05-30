// Configuration for i18next
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

export const supportedLngs = {
  en: "English",
  ar: "العربية",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  id: "Indonesian",
  it: "Italiano",
  nl: "Nederlands",
  pt: "Português",
  ru: "Русский",
  tr: "Türkçe",
};

i18n
  // Load translation using http -> see /public/locales
  // Learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // Detect user language
  // Learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // Init i18next
  // Learn more: https://www.i18next.com/overview/configuration-options
  .init({
    debug: process.env.NODE_ENV === "development", // Enable debug output in development
    fallbackLng: "en", // Use English if detected language is not available
    supportedLngs: Object.keys(supportedLngs),
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    detection: {
      // Order and from where user language should be detected
      order: ["path", "querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag", "subdomain"],
      // Keys or params to lookup language from
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
      lookupSessionStorage: "i18nextLng",
      lookupFromPathIndex: 0, // Detect language from the first segment of the URL path (e.g., /en/page)
      // Caches detected language
      caches: ["localStorage", "cookie"],
      excludeCacheFor: ["cimode"], // Languages to not persist (cookie, localStorage)
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Path to translation files
    },
  });

export default i18n;

