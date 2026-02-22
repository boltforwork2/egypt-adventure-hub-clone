import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";
import { CheckCircle2, Zap, Globe, Users, TrendingUp, Shield } from "lucide-react";

const B2B = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const b2bServices = [
    "Airport transfers (private & group)",
    "Hotel bookings (3–5 stars & luxury resorts)",
    "Daily excursions in Hurghada, Cairo & Luxor",
    "Red Sea boat trips & snorkeling tours",
    "Desert safari & quad adventures",
    "Cultural tours & historical programs",
    "Custom-made packages",
    "VIP services upon request",
  ];

  const advantages = [
    { icon: TrendingUp, title: "Competitive NET Rates", description: "Best pricing for travel agency partners" },
    { icon: Zap, title: "Fast Response & Support", description: "Dedicated B2B support team ready to assist" },
    { icon: Globe, title: "Flexible Payment Terms", description: "Tailored payment solutions for partners" },
    { icon: Users, title: "European Market Experience", description: "Proven expertise with international clients" },
    { icon: Shield, title: "Strong Supplier Network", description: "Reliable local partner connections" },
    { icon: CheckCircle2, title: "Reliable Execution", description: "On-ground professional service guarantee" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(35, 40%, 97%)" }}>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sand/30 to-transparent" />
        <div className="container-tourism max-w-5xl relative z-10 px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 text-center leading-tight">
            B2B Partnership <span className="gold-text">Egypt Ground Handling & DMC Services</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            Your trusted local executing partner in Egypt
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-background/40">
        <div className="container-tourism max-w-4xl px-6">
          <div className="bg-white/70 backdrop-blur-sm border border-gold/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
            <div className="space-y-5">
              <p className="text-base md:text-lg text-foreground leading-relaxed text-left">
                We are a professional Egypt-based tour operator and ground handling partner providing reliable B2B services for international travel agencies and tour operators.
              </p>
              <p className="text-base md:text-lg text-foreground leading-relaxed text-left">
                As a local executing agent in Egypt, we specialize in delivering high-quality travel services for European markets, ensuring smooth operations, competitive rates, and excellent client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container-tourism max-w-5xl px-6">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3">Who We Are</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-gold/15 rounded-2xl p-6 sm:p-8 md:p-10">
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-6 text-left">
              We act as a trusted local representative and executing partner in Egypt, offering full destination management services (DMC) with strong operational control on the ground.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-foreground text-sm font-medium">Professional coordination</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-foreground text-sm font-medium">On-time transfers</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-foreground text-sm font-medium">Multilingual tour assistance</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-foreground text-sm font-medium">High service standards</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-foreground text-sm font-medium">Transparent pricing</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-foreground text-sm font-medium">Direct management control</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our B2B Services */}
      <section className="py-10 sm:py-12 md:py-16 bg-background/40">
        <div className="container-tourism max-w-5xl px-6">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3">Our B2B Services in Egypt</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Comprehensive solutions tailored for international travel partners
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {b2bServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm border border-gold/10 rounded-lg p-4 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container-tourism max-w-6xl px-6">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3">Why Partner With Us?</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm border border-gold/15 rounded-xl p-5 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-11 h-11 rounded-lg bg-gold/15 flex items-center justify-center mb-3">
                  <advantage.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-base font-heading font-bold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-left">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperation & CTA */}
      <section className="py-10 sm:py-12 md:py-16 bg-background/40">
        <div className="container-tourism max-w-4xl px-6">
          <div className="bg-white/70 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 sm:p-8 md:p-10">
            <div className="space-y-6">
              <p className="text-base md:text-lg text-foreground leading-relaxed text-left">
                We focus exclusively on bringing foreign clients to Egypt and operating their programs professionally from arrival to departure.
              </p>
              <div className="border-t border-gold/20 pt-6">
                <p className="text-left text-base md:text-lg font-heading font-bold text-foreground mb-4">
                  "If you are looking for a reliable local partner in Egypt to handle your clients with care and professionalism, we are ready for cooperation on a B2B basis."
                </p>
                <p className="text-left text-muted-foreground text-sm md:text-base">
                  Contact us for our B2B rate list and partnership proposal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default B2B;
