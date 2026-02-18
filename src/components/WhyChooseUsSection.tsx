import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, DollarSign, HeartHandshake, Award, Headphones } from "lucide-react";

const reasons = [
  { icon: HeartHandshake, title: "Professional Guides", description: "Experienced, certified local guides who bring Egypt to life." },
  { icon: DollarSign, title: "Best Prices", description: "Competitive pricing with no hidden fees. Value guaranteed." },
  { icon: Shield, title: "Safe Trips", description: "Your safety is our top priority with fully insured adventures." },
  { icon: Award, title: "High-Quality Service", description: "Premium equipment, comfortable transport, and attention to detail." },
  { icon: Headphones, title: "24/7 Support", description: "Round-the-clock assistance whenever you need us." },
];

const WhyChooseUsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why-us" className="section-padding" style={{ background: "linear-gradient(180deg, hsl(220 20% 10%) 0%, hsl(220 15% 15%) 100%)" }}>
      <div className="container-tourism">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
          <h2 className="section-title text-background">Your Trusted <span className="gold-text">Travel Partner</span></h2>
          <p className="text-background/60 text-lg mt-4 max-w-2xl mx-auto">We go above and beyond to make your Egyptian adventure extraordinary.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} {...reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReasonCard = ({ icon: Icon, title, description, index }: { icon: React.ElementType; title: string; description: string; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group text-center p-6 rounded-2xl border border-background/10 hover:border-gold/30 bg-background/5 backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
        <Icon size={24} className="text-dark" />
      </div>
      <h3 className="font-heading font-bold text-background mb-2">{title}</h3>
      <p className="text-background/60 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default WhyChooseUsSection;
