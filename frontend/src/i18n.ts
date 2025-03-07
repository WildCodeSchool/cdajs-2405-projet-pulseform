import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

const options = {
  fallbackLng: "en",
  ns: ["translation"],
  defaultNS: "translation",
  order: ["navigator", "cookie"],

  debug: false,
  loadPath: `${import.meta.env.VITE_URL_TRAD}/locales/{{lng}}/{{ns}}.json`,
  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ",",
    format: (value: string, format: string | undefined) => {
      if (format === "uppercase") return (value as string).toUpperCase();
      return value.toString();
    },
  },
  react: {
    useSuspense: false,
  },
  detection: {
    order: ["navigator", "cookie"],
    lookupQuerystring: "lng",
  },
};

i18n
  .use(XHR) // Load translations via XHR
  .use(LanguageDetector) // Detect the user's language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init(options);

export default i18n;
