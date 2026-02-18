import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    const whatsappText = encodeURIComponent(`Hi, I'm ${name}. Email: ${email}, Phone: ${phone}. Message: ${message}`);
    window.open(`https://wa.me/201234567890?text=${whatsappText}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-tourism">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="section-title">Book Your <span className="gold-text">Adventure</span></h2>
          <p className="section-subtitle mt-4">Ready to explore? Send us a message and we'll plan your perfect trip.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { key: "name", label: "Your Name", type: "text" },
              { key: "email", label: "Email Address", type: "email" },
              { key: "phone", label: "Phone Number", type: "tel" },
            ].map(({ key, label, type }) => (
              <div key={key} className="relative group">
                <input
                  type={type}
                  required
                  value={formData[key as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                  placeholder={label}
                  maxLength={key === "name" ? 100 : key === "email" ? 255 : 30}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                />
              </div>
            ))}
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Your Message"
              rows={4}
              maxLength={1000}
              className="w-full px-4 py-3 rounded-lg border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300 resize-none"
            />
            <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2 py-4">
              <Send size={18} />
              Send Message
            </button>
          </form>

          <div className="flex flex-col justify-center space-y-8">
            {[
              { icon: Phone, label: "Phone", value: "+20 123 456 7890", href: "tel:+201234567890" },
              { icon: Mail, label: "Email", value: "info@fayedtravel.com", href: "mailto:info@fayedtravel.com" },
              { icon: MapPin, label: "Location", value: "Hurghada, Red Sea, Egypt", href: "#" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={20} className="text-dark" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <p className="font-semibold text-foreground">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
