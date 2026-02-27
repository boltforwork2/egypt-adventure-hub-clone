import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import it from './locales/it.json';
import pl from './locales/pl.json';
import ro from './locales/ro.json';
import hu from './locales/hu.json';
import ru from './locales/ru.json';
import cs from './locales/cs.json';
import sr from './locales/sr.json';


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      de: {
        translation: de,
      },
      fr: {
        translation: fr,
      },
      it: {
        translation: it,
      },
      pl: {
        translation: pl,
      },
      ro: {
        translation: ro,
      },
      hu: {
        translation: hu,
      },
      ru: {
        translation: ru,
      },
      cs: {
        translation: cs,
      },
      sr: {
        translation: sr,
      },
    },
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
