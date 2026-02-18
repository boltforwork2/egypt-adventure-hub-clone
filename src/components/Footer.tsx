import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/#home" },
    { label: "Sea Trips", href: "/#sea" },
    { label: "Safari", href: "/#safari" },
    { label: "Luxor & Cairo", href: "/#cultural" },
    { label: "About Us", href: "/#why-us" },
    { label: "Contact", href: "/#contact" },
  ];

  const socials = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-dark text-background/80 pt-16 pb-8">
      <div className="container-tourism">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-heading font-bold text-background mb-4">
              <span className="text-gold">Fayed</span> International Travel
            </h3>
            <p className="text-sm leading-relaxed text-background/60">
              Your trusted partner for unforgettable Hurghada adventures. Sea trips, desert safaris, and day trips to Luxor & Cairo.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-background mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="block text-sm text-background/60 hover:text-gold transition-colors duration-300">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-bold text-background mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all duration-300 hover:scale-110"
                  aria-label="Social media"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Fayed International Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
