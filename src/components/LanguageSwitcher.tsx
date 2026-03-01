import { useState, useEffect, useRef } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Language {
  code: string;
  label: string;
  flag: string;
}

const flagMap: Record<string, string> = {
  en: "/flags/gb.svg",
  de: "/flags/de.svg",
  fr: "/flags/fr.svg",
  it: "/flags/it.svg",
  pl: "/flags/pl.svg",
  ro: "/flags/ro.svg",
  hu: "/flags/hu.svg",
  ru: "/flags/ru.svg",
  cs: "/flags/cs.svg",
  sr: "/flags/sr.svg",
};

const LanguageSwitcher = ({ scrolled, isNonHomePage }: { scrolled: boolean; isNonHomePage: boolean }) => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const languages: Language[] = [
    { code: "en", label: "English", flag: flagMap.en },
    { code: "de", label: "German", flag: flagMap.de },
    { code: "fr", label: "French", flag: flagMap.fr },
    { code: "it", label: "Italian", flag: flagMap.it },
    { code: "pl", label: "Polish", flag: flagMap.pl },
    { code: "ro", label: "Romanian", flag: flagMap.ro },
    { code: "hu", label: "Hungarian", flag: flagMap.hu },
    { code: "ru", label: "Russian", flag: flagMap.ru },
    { code: "cs", label: "Czech", flag: flagMap.cs },
    { code: "sr", label: "Serbian", flag: flagMap.sr },
  ];

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

  const currentLanguage = languages.find((lang) => lang.code === language);

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
        {currentLanguage && (
          <img src={currentLanguage.flag} alt={currentLanguage.label} className="w-5 h-5 rounded-sm object-cover" />
        )}
        <span className="text-xs font-medium uppercase">{language}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 z-50">
          <div className="bg-background border border-border/50 rounded-xl shadow-lg overflow-hidden animate-fade-in">
            <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gold/20 scrollbar-track-background/5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 flex items-center gap-3 ${
                    language === lang.code
                      ? "bg-muted text-gold"
                      : "text-foreground/80 hover:bg-muted hover:text-gold"
                  }`}
                >
                  <img src={lang.flag} alt={lang.label} className="w-5 h-5 rounded-sm object-cover flex-shrink-0" />
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
