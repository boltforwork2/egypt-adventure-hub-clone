import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";
import { CheckCircle2, Zap, Globe, Users, TrendingUp, Shield } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

const B2B = () => {
  const { t } = useTranslations();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const b2bServices = [
    t("b2b.services.list.airportTransfers"),
    t("b2b.services.list.hotelBookings"),
    t("b2b.services.list.dailyExcursions"),
    t("b2b.services.list.boatTrips"),
    t("b2b.services.list.desertSafari"),
    t("b2b.services.list.culturalTours"),
    t("b2b.services.list.customPackages"),
    t("b2b.services.list.vipServices"),
  ];

  const advantages = [
    { icon: TrendingUp, title: t("b2b.advantages.competitiveRates"), description: t("b2b.advantages.competitiveRatesDesc") },
    { icon: Zap, title: t("b2b.advantages.fastResponse"), description: t("b2b.advantages.fastResponseDesc") },
    { icon: Globe, title: t("b2b.advantages.flexiblePayment"), description: t("b2b.advantages.flexiblePaymentDesc") },
    { icon: Users, title: t("b2b.advantages.europeanExperience"), description: t("b2b.advantages.europeanExperienceDesc") },
    { icon: Shield, title: t("b2b.advantages.supplierNetwork"), description: t("b2b.advantages.supplierNetworkDesc") },
    { icon: CheckCircle2, title: t("b2b.advantages.reliableExecution"), description: t("b2b.advantages.reliableExecutionDesc") },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(35, 40%, 97%)" }}>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sand/30 to-transparent" />
        <div className="container-tourism max-w-5xl relative z-10 px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 text-center leading-tight">
            {t("b2b.title")} <span className="gold-text">{t("b2b.titleHighlight")}</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            {t("b2b.subtitle")}
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-background/40">
        <div className="container-tourism max-w-4xl px-6">
          <div className="bg-white/70 backdrop-blur-sm border border-gold/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
            <div className="space-y-5">
              <p className="text-base md:text-lg text-foreground leading-relaxed text-left">
                {t("b2b.intro1")}
              </p>
              <p className="text-base md:text-lg text-foreground leading-relaxed text-left">
                {t("b2b.intro2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container-tourism max-w-5xl px-6">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3">{t("b2b.whoWeAre.title")}</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-gold/15 rounded-2xl p-6 sm:p-8 md:p-10">
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-6 text-left">
              {t("b2b.whoWeAre.description")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-foreground text-sm font-medium">{t("b2b.whoWeAre.points.coordination")}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-foreground text-sm font-medium">{t("b2b.whoWeAre.points.transfers")}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-foreground text-sm font-medium">{t("b2b.whoWeAre.points.assistance")}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-foreground text-sm font-medium">{t("b2b.whoWeAre.points.standards")}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-foreground text-sm font-medium">{t("b2b.whoWeAre.points.pricing")}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-foreground text-sm font-medium">{t("b2b.whoWeAre.points.management")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our B2B Services */}
      <section className="py-10 sm:py-12 md:py-16 bg-background/40">
        <div className="container-tourism max-w-5xl px-6">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3">{t("b2b.services.title")}</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              {t("b2b.services.subtitle")}
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3">{t("b2b.advantages.title")}</h2>
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
                {t("b2b.cooperation.text1")}
              </p>
              <div className="border-t border-gold/20 pt-6">
                <p className="text-left text-base md:text-lg font-heading font-bold text-foreground mb-4">
                  "{t("b2b.cooperation.quote")}"
                </p>
                <p className="text-left text-muted-foreground text-sm md:text-base">
                  {t("b2b.cooperation.contactPrompt")}
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
