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
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sand/40 to-background" />
        <div className="container-tourism max-w-5xl relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 text-center leading-tight">
            B2B Partnership <span className="gold-text">Egypt Ground Handling & DMC Services</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            Your trusted local executing partner in Egypt
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-sand/20">
        <div className="container-tourism max-w-4xl">
          <div className="bg-white/60 backdrop-blur-sm border border-gold/10 rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="space-y-6 text-center">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                We are a professional Egypt-based tour operator and ground handling partner providing reliable B2B services for international travel agencies and tour operators.
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                As a local executing agent in Egypt, we specialize in delivering high-quality travel services for European markets, ensuring smooth operations, competitive rates, and excellent client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-tourism max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Who We Are</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>
          <div className="bg-gradient-to-br from-gold/8 to-sand/20 border border-gold/15 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-foreground leading-relaxed mb-8 text-center">
              We act as a trusted local representative and executing partner in Egypt, offering full destination management services (DMC) with strong operational control on the ground.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-3 flex-shrink-0" />
                <p className="text-foreground font-medium">Professional coordination</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-3 flex-shrink-0" />
                <p className="text-foreground font-medium">On-time transfers</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-3 flex-shrink-0" />
                <p className="text-foreground font-medium">Multilingual tour assistance</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-3 flex-shrink-0" />
                <p className="text-foreground font-medium">High service standards</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-3 flex-shrink-0" />
                <p className="text-foreground font-medium">Transparent pricing</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-3 flex-shrink-0" />
                <p className="text-foreground font-medium">Direct management control</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our B2B Services */}
      <section className="py-16 md:py-24 bg-sand/20">
        <div className="container-tourism max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our B2B Services in Egypt</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solutions tailored for international travel partners
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {b2bServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm border border-gold/10 rounded-lg p-5 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-tourism max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Partner With Us?</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gold/5 to-sand/10 border border-gold/15 rounded-xl p-6 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center mb-4">
                  <advantage.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperation & CTA */}
      <section className="py-16 md:py-24 bg-sand/20">
        <div className="container-tourism max-w-4xl">
          <div className="bg-white/60 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 md:p-12">
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-foreground leading-relaxed text-center">
                We focus exclusively on bringing foreign clients to Egypt and operating their programs professionally from arrival to departure.
              </p>
              <div className="border-t border-gold/20 pt-8">
                <p className="text-center text-lg font-heading font-bold text-foreground mb-6">
                  "If you are looking for a reliable local partner in Egypt to handle your clients with care and professionalism, we are ready for cooperation on a B2B basis."
                </p>
                <p className="text-center text-muted-foreground text-base">
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
