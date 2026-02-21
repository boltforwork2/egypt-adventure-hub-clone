import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/#home", type: "link" },
  {
    label: "Trips",
    type: "dropdown",
    items: [
      { label: "Sea Trips", href: "/#sea" },
      { label: "Safari", href: "/#safari" },
      { label: "City & Leisure", href: "/#leisure" },
      { label: "Luxor & Cairo", href: "/#cultural" },
    ],
  },
  { label: "Why Choose Us", href: "/#why-us", type: "link" },
  { label: "About Us", href: "/about", type: "link" },
  { label: "B2B System", href: "/b2b", type: "link" },
  { label: "Gallery", href: "/#gallery", type: "link" },
  { label: "Contact", href: "/#contact", type: "link" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setMobileDropdownOpen(false);

    if (href.startsWith("/#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const id = href.replace("/#", "");
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-background/97 backdrop-blur-lg border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-tourism flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-heading font-bold tracking-tight">
            <span className={scrolled ? "gold-text" : "text-gold"}>Fayed</span>{" "}
            <span className={scrolled ? "text-foreground" : "text-background"}>
              International Travel
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            if (link.type === "dropdown") {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`text-sm font-medium transition-colors duration-200 hover:text-gold relative flex items-center gap-1 ${
                      scrolled ? "text-foreground/80" : "text-background/90"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border/50 rounded-xl shadow-lg py-2 animate-fade-in">
                      {link.items?.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={() => handleNavClick(item.href)}
                          className="block px-4 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-gold transition-all duration-200"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-gold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-200 hover:after:w-full ${
                  scrolled ? "text-foreground/80" : "text-background/90"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a href="/#contact" className="btn-gold text-sm px-6 py-2.5">
            Book Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-lg transition-colors duration-200 hover:bg-background/10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className={scrolled ? "text-foreground" : "text-background"} size={22} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-background"} size={22} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-background border-t border-border shadow-lg animate-fade-in">
          <nav className="container-tourism py-5 flex flex-col gap-1">
            {navLinks.map((link) => {
              if (link.type === "dropdown") {
                return (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className="w-full text-left text-foreground/80 font-medium py-2.5 px-2 rounded-lg hover:bg-muted hover:text-gold transition-all duration-200 flex items-center justify-between"
                    >
                      {link.label}
                      <ChevronDown size={16} className={`transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileDropdownOpen && (
                      <div className="pl-4 mt-1 space-y-1">
                        {link.items?.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            onClick={() => handleNavClick(item.href)}
                            className="block text-foreground/70 font-medium py-2 px-2 rounded-lg hover:bg-muted hover:text-gold transition-all duration-200 text-sm"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-foreground/80 font-medium py-2.5 px-2 rounded-lg hover:bg-muted hover:text-gold transition-all duration-200"
                >
                  {link.label}
                </a>
              );
            })}
            <a href="/#contact" className="btn-gold text-center mt-3 py-3" onClick={() => setMenuOpen(false)}>
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
