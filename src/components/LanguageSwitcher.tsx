import { useState, useEffect, useRef } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Language {
  code: string;
  label: string;
}

const LanguageSwitcher = ({ scrolled, isNonHomePage }: { scrolled: boolean; isNonHomePage: boolean }) => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const languages: Language[] = [
    { code: "en", label: "English" },
    { code: "de", label: "German" },
    { code: "fr", label: "French" },
    { code: 'it', label: "Italian"},
    { code: 'pl', label: "Polish"}
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

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-lg transition-colors duration-200 hover:bg-background/10 flex items-center gap-1.5 ${
          scrolled || isNonHomePage ? "text-foreground/80 hover:text-gold" : "text-background/90 hover:text-gold"
        }`}
        aria-label="Change language"
        title="Change language"
      >
        <Globe size={20} />
        <span className="text-xs font-medium uppercase">{language}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40">
          <div className="bg-background border border-border/50 rounded-xl shadow-lg py-2 animate-fade-in">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  language === lang.code
                    ? "bg-muted text-gold"
                    : "text-foreground/80 hover:bg-muted hover:text-gold"
                }`}
              >
                {lang.label} ({lang.code.toUpperCase()})
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
