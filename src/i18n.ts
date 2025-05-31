import {getRequestConfig} from 'next-intl/server';
 
// Corrected syntax: removed extra parentheses around {locale}
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  // Provide a static fallback message configuration object by importing the JSON file
  // Ensure the path to the locale files is correct relative to this file (src/i18n.ts)
  try {
    return {
      messages: (await import(`./i18n/locales/${locale}.json`)).default
    };
  } catch (error) {
    console.error(`Could not load locale messages for ${locale}:`, error);
    // Optionally return fallback messages or rethrow the error
    // For simplicity, returning an empty object, but you might want a better strategy
    return { messages: {} }; 
  }
});
