import { useState, useEffect, useRef } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Language {
  code: string;
  label: string;
  flagCode: string;
}

const LanguageSwitcher = ({ scrolled, isNonHomePage }: { scrolled: boolean; isNonHomePage: boolean }) => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const languages: Language[] = [
    { code: "en", label: "English", flagCode: "gb" },
    { code: "de", label: "German", flagCode: "de" },
    { code: "fr", label: "French", flagCode: "fr" },
    { code: 'it', label: "Italian", flagCode: "it" },
    { code: 'pl', label: "Polish", flagCode: "pl" },
    { code: 'ro', label: "Romanian", flagCode: "ro" },
    { code: 'hu', label: "Hurgarian", flagCode: "hu" },
    { code: 'ru', label: "Russian", flagCode: "ru" },
    { code: 'cs', label: "Czech", flagCode: "cs" },
    { code: 'sr', label: "Serbian", flagCode: "sr" }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-lg transition-colors duration-200 hover:bg-background/10 flex items-center gap-2 ${
          scrolled || isNonHomePage ? "text-foreground/80 hover:text-gold" : "text-background/90 hover:text-gold"
        }`}
        aria-label="Change language"
        title="Change language"
      >
        <Globe size={20} />
        {currentLanguage && (
          <img
            src={`/flags/${currentLanguage.flagCode}.svg`}
            alt={`${currentLanguage.label} flag`}
            className="w-5 h-3.5 rounded-sm object-cover"
          />
        )}
        <span className="text-xs font-medium uppercase">{language}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 z-50">
          <div className="bg-background border border-border/50 rounded-xl shadow-lg py-2 animate-fade-in max-h-60 sm:max-h-96 md:max-h-none overflow-y-auto md:overflow-y-visible">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-all duration-200 flex items-center gap-3 ${
                  language === lang.code
                    ? "bg-muted text-gold"
                    : "text-foreground/80 hover:bg-muted hover:text-gold"
                }`}
              >
                <img
                  src={`/flags/${lang.flagCode}.svg`}
                  alt={`${lang.label} flag`}
                  className="w-5 h-3.5 rounded-sm object-cover flex-shrink-0"
                />
                <span>{lang.label} ({lang.code.toUpperCase()})</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
