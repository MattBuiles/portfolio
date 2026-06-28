import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

const LanguageContext = createContext(null);

const STORAGE_KEY = 'mb_lang';
const DEFAULT_LANG = 'en';

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_LANG;
    return window.localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((current) => (current === 'en' ? 'es' : 'en'));
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};

// Pick from a bilingual object { en, es } with fallback chain.
export const pick = (value, lang) => {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  if (typeof value !== 'object') return String(value);
  return value[lang] ?? value.en ?? value.es ?? '';
};
