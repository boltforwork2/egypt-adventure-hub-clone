# Translation System Documentation

## Overview
This document describes the i18n (internationalization) infrastructure for Fayed International Travel website.

## Current Status
✅ Translation infrastructure installed and configured
✅ English translation file created (`src/i18n/locales/en.json`)
✅ Global language state management ready
⚠️ Components NOT yet refactored to use translations
⚠️ Language switcher NOT yet implemented

## System Architecture

### 1. Core Libraries
- **i18next**: Core translation library
- **react-i18next**: React bindings for i18next
- **i18next-browser-languagedetector**: Automatic language detection

### 2. File Structure
```
src/
├── i18n/
│   ├── config.ts              # i18n configuration
│   └── locales/
│       └── en.json            # English translations (base)
├── contexts/
│   └── LanguageContext.tsx    # Global language state
└── hooks/
    └── useTranslations.ts     # Translation helper hook
```

### 3. Configuration
Location: `src/i18n/config.ts`

Default language: **English (en)**
Fallback language: **English (en)**
Storage: localStorage

## English Translation File
Location: `src/i18n/locales/en.json`

Contains all website text organized by:
- **hero**: Hero section content
- **nav**: Navigation menu items
- **sections**: All main sections (excursions, why choose us, gallery, etc.)
- **tour**: Tour detail page content
- **footer**: Footer content
- **aboutUs**: About Us page content
- **b2b**: B2B page content
- **common**: Common/shared text

## Global State Management
Location: `src/contexts/LanguageContext.tsx`

### Available Functions:
```typescript
const { language, changeLanguage, availableLanguages } = useLanguage();
```

- `language`: Current active language (default: 'en')
- `changeLanguage(lang)`: Function to change language
- `availableLanguages`: Array of supported languages (currently: ['en'])

## Helper Hook
Location: `src/hooks/useTranslations.ts`

### Usage:
```typescript
import { useTranslations } from '@/hooks/useTranslations';

const { t, currentLanguage, changeLanguage } = useTranslations();
```

## Adding New Languages (Future)

### Step 1: Create translation file
Create `src/i18n/locales/{language-code}.json`

Example: `src/i18n/locales/de.json` for German

### Step 2: Import in config
```typescript
// src/i18n/config.ts
import de from './locales/de.json';

i18n.init({
  resources: {
    en: { translation: en },
    de: { translation: de }, // Add new language
  },
  // ...
});
```

### Step 3: Update available languages
```typescript
// src/contexts/LanguageContext.tsx
const availableLanguages = ['en', 'de']; // Add new language code
```

## Next Steps (NOT DONE YET)

### Phase 2: Component Refactoring
Replace hardcoded text with translation keys:
```typescript
// Before:
<h1>Discover Egypt with Fayed International Travel</h1>

// After:
<h1>{t('hero.title')} {t('hero.companyName')}</h1>
```

### Phase 3: Language Switcher
Add UI component to allow users to change language:
```typescript
<select onChange={(e) => changeLanguage(e.target.value)}>
  {availableLanguages.map(lang => (
    <option key={lang} value={lang}>{lang.toUpperCase()}</option>
  ))}
</select>
```

## Important Notes

⚠️ **DO NOT modify translation keys in en.json without updating corresponding text in other language files**

⚠️ **ALWAYS keep English as fallback language**

⚠️ **Test all languages after adding new translations**

## Verification

To verify the system is working:
1. Build succeeds: ✅ (tested)
2. Website loads without errors: ✅
3. English text displays correctly: ✅
4. No visual changes: ✅

## Support

For questions about the translation system, refer to:
- [i18next documentation](https://www.i18next.com/)
- [react-i18next documentation](https://react.i18next.com/)
