import React, { createContext, useContext, useState, useEffect } from "react";
import enTranslations from "../locales/en.json";
import frTranslations from "../locales/fr.json";

const translations: Record<string, any> = {
  en: enTranslations,
  fr: frTranslations,
};

type Language = "en" | "fr";

interface I18nContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string, options?: any) => any;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  // Load language from localStorage if available
  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "fr")) {
      setLanguage(savedLang);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string, options?: any): any => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        value = undefined;
        break;
      }
    }

    if (value === undefined) {
      return options?.defaultValue || key;
    }

    return value;
  };

  return (
    <I18nContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }

  return {
    t: context.t,
    i18n: {
      language: context.language,
      changeLanguage: context.changeLanguage,
    },
  };
};
