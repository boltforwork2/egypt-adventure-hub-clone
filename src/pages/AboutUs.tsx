import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";
import { Shield, Users, Award, Globe, Briefcase, Heart } from "lucide-react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const services = [
    { icon: Shield, title: "Hotel Reservations", description: "Carefully selected accommodations to suit every budget and preference" },
    { icon: Users, title: "Airport Transfers", description: "Reliable and comfortable transportation from arrival to departure" },
    { icon: Globe, title: "Private & Group Tours", description: "Tailored experiences with expert local guides" },
    { icon: Award, title: "Sea Trips & Snorkeling", description: "Explore the stunning Red Sea marine life" },
    { icon: Briefcase, title: "Desert Safari Adventures", description: "Thrilling journeys across Egypt's golden landscapes" },
    { icon: Heart, title: "Customized Travel Packages", description: "Personalized itineraries designed around your dreams" },
  ];

  const values = [
    "Deliver professional service at every touchpoint",
    "Ensure safety and comfort throughout your journey",
    "Create unforgettable memories in Egypt",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sand/40 to-background" />
        <div className="container-tourism max-w-5xl relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 text-center leading-tight">
            Welcome to <span className="gold-text">Fayed International Travel Agency</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for unforgettable travel experiences in Egypt
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 md:py-24 bg-sand/20">
        <div className="container-tourism max-w-4xl">
          <div className="bg-white/60 backdrop-blur-sm border border-gold/10 rounded-2xl p-8 md:p-12 shadow-sm">
            <p className="text-lg md:text-xl text-foreground leading-relaxed text-center">
              Fayed International Travel Agency is an Egyptian travel company specialized in organizing tours and travel services across Egypt.
              We offer unforgettable experiences in the <span className="font-semibold text-gold">Red Sea</span>, <span className="font-semibold text-gold">Cairo</span>, <span className="font-semibold text-gold">Luxor</span>, <span className="font-semibold text-gold">Aswan</span>, and <span className="font-semibold text-gold">desert safari</span> destinations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-tourism max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive travel solutions designed to exceed your expectations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gold/5 to-sand/10 border border-gold/15 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:border-gold/30"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International & B2B Cooperation */}
      <section className="py-16 md:py-24 bg-sand/20">
        <div className="container-tourism max-w-5xl">
          <div className="bg-white/60 backdrop-blur-sm border border-gold/10 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                International <span className="gold-text">Partnership</span>
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
            </div>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-lg text-foreground leading-relaxed">
                  We operate as an <span className="font-semibold">official tourism representative in Egypt</span>, committed to the highest standards of service and professionalism
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-lg text-foreground leading-relaxed">
                  We proudly cooperate with <span className="font-semibold">international travel partners</span> through our dedicated B2B services
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-lg text-foreground leading-relaxed">
                  Our services are tailored for <span className="font-semibold">European and international markets</span>, ensuring seamless experiences for global travelers
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-lg text-foreground leading-relaxed">
                  We focus on <span className="font-semibold">reliability, consistency, and service quality</span> to build lasting partnerships
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-tourism max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Mission</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>
          <div className="space-y-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gold/8 to-sand/10 border border-gold/15 rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-gold" />
                  </div>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 md:py-24 bg-sand/20">
        <div className="container-tourism max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/8 to-sand/15" />
            <div className="relative z-10 p-10 md:p-16 text-center">
              <p className="text-xl md:text-2xl font-heading text-foreground leading-relaxed mb-6">
                At Fayed International Travel Agency, we believe that travel is more than just a trip — it is an experience.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Let us turn your journey into a memory you will never forget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutUs;
