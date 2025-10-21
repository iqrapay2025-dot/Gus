import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Language } from '../translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Fallback to English for missing translations
  const getTranslations = () => {
    const langTranslations = translations[language];
    const enTranslations = translations.en;
    
    // Deep merge with English as fallback
    return new Proxy(langTranslations, {
      get(target: any, prop: string) {
        if (target[prop] !== undefined) {
          // If the property exists, check if it's an object that needs deep fallback
          if (typeof target[prop] === 'object' && !Array.isArray(target[prop])) {
            return new Proxy(target[prop], {
              get(subTarget: any, subProp: string) {
                return subTarget[subProp] !== undefined ? subTarget[subProp] : enTranslations[prop]?.[subProp];
              }
            });
          }
          return target[prop];
        }
        return enTranslations[prop];
      }
    });
  };

  const t = getTranslations() as typeof translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
