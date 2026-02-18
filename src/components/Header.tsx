import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Sea Trips", href: "/#sea" },
  { label: "Safari", href: "/#safari" },
  { label: "Luxor & Cairo", href: "/#cultural" },
  { label: "About Us", href: "/#why-us" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (location.pathname !== "/" && href.startsWith("/#")) {
      return;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-tourism flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-heading font-bold">
            <span className={scrolled ? "gold-text" : "text-gold"}>Fayed</span>{" "}
            <span className={scrolled ? "text-foreground" : "text-background"}>
              International Travel
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium transition-colors duration-300 hover:text-gold ${
                scrolled ? "text-foreground" : "text-background"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="/#contact" className="btn-gold text-sm">
            Book Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className={scrolled ? "text-foreground" : "text-background"} size={24} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-background"} size={24} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <nav className="container-tourism py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-foreground font-medium py-2 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="/#contact" className="btn-gold text-center mt-2" onClick={() => setMenuOpen(false)}>
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
