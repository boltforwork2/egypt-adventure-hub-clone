import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";
import { Shield, Users, Award, Globe, Briefcase, Heart } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

const AboutUs = () => {
  const { t } = useTranslations();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const services = [
    { icon: Shield, title: t("aboutUs.services.hotelReservations"), description: t("aboutUs.services.hotelReservationsDesc") },
    { icon: Users, title: t("aboutUs.services.airportTransfers"), description: t("aboutUs.services.airportTransfersDesc") },
    { icon: Globe, title: t("aboutUs.services.privateTours"), description: t("aboutUs.services.privateToursDesc") },
    { icon: Award, title: t("aboutUs.services.seaTrips"), description: t("aboutUs.services.seaTripsDesc") },
    { icon: Briefcase, title: t("aboutUs.services.desertSafari"), description: t("aboutUs.services.desertSafariDesc") },
    { icon: Heart, title: t("aboutUs.services.customPackages"), description: t("aboutUs.services.customPackagesDesc") },
  ];

  const values = [
    t("aboutUs.mission.value1"),
    t("aboutUs.mission.value2"),
    t("aboutUs.mission.value3"),
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(35, 40%, 97%)" }}>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sand/30 to-transparent" />
        <div className="container-tourism max-w-5xl relative z-10 px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 text-center leading-tight">
            {t("aboutUs.title")} <span className="gold-text">{t("aboutUs.titleHighlight")}</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            {t("aboutUs.subtitle")}
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-10 sm:py-12 md:py-16 bg-background/40">
        <div className="container-tourism max-w-4xl px-6">
          <div className="bg-white/70 backdrop-blur-sm border border-gold/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
            <p className="text-base md:text-lg text-foreground leading-relaxed text-left">
              {t("aboutUs.intro").split(/(\bRed Sea\b|\bCairo\b|\bLuxor\b|\bAswan\b|\bdesert safari\b)/g).map((text, index) =>
                /(\bRed Sea\b|\bCairo\b|\bLuxor\b|\bAswan\b|\bdesert safari\b)/g.test(text) ?
                  <span key={index} className="font-semibold text-gold">{text}</span> :
                  text
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container-tourism max-w-6xl px-6">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3">{t("aboutUs.services.title")}</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full mb-3" />
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              {t("aboutUs.services.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm border border-gold/15 rounded-xl p-5 transition-all duration-300 hover:shadow-md hover:border-gold/30"
              >
                <div className="w-11 h-11 rounded-lg bg-gold/15 flex items-center justify-center mb-3">
                  <service.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-base font-heading font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-left">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International & B2B Cooperation */}
      <section className="py-10 sm:py-12 md:py-16 bg-background/40">
        <div className="container-tourism max-w-5xl px-6">
          <div className="bg-white/70 backdrop-blur-sm border border-gold/10 rounded-2xl p-6 sm:p-8 md:p-10">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3">
                {t("aboutUs.partnership.title")} <span className="gold-text">{t("aboutUs.partnership.titleHighlight")}</span>
              </h2>
              <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
            </div>
            <div className="space-y-5 max-w-3xl mx-auto">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-base md:text-lg text-foreground leading-relaxed text-left">
                  {t("aboutUs.partnership.point1").split(/(<span>|<\/span>)/).map((text, index) => {
                    if (text === "<span>") return null;
                    if (text === "</span>") return null;
                    const spanMatch = t("aboutUs.partnership.point1").match(/(.+?)<span>(.+?)<\/span>(.+)/);
                    if (!spanMatch) return t("aboutUs.partnership.point1");
                    return text;
                  })}
                  {t("aboutUs.partnership.point1").includes("official tourism representative") && (
                    <>We operate as an <span className="font-semibold">official tourism representative in Egypt</span>, committed to the highest standards of service and professionalism</>
                  )}
                  {!t("aboutUs.partnership.point1").includes("official tourism representative") && t("aboutUs.partnership.point1")}
                </p>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-base md:text-lg text-foreground leading-relaxed text-left">
                  {t("aboutUs.partnership.point2").split(/(\bofficial tourism representative in Egypt\b|\binternational travel partners\b|\bEuropean and international markets\b|\breliability, consistency, and service quality\b)/g).map((text, index) => {
                    if (/(official tourism representative in Egypt|international travel partners|European and international markets|reliability, consistency, and service quality)/g.test(text)) {
                      return <span key={index} className="font-semibold">{text}</span>;
                    }
                    return text;
                  })}
                </p>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-base md:text-lg text-foreground leading-relaxed text-left">
                  {t("aboutUs.partnership.point3").split(/(\bofficial tourism representative in Egypt\b|\binternational travel partners\b|\bEuropean and international markets\b|\breliability, consistency, and service quality\b)/g).map((text, index) => {
                    if (/(official tourism representative in Egypt|international travel partners|European and international markets|reliability, consistency, and service quality)/g.test(text)) {
                      return <span key={index} className="font-semibold">{text}</span>;
                    }
                    return text;
                  })}
                </p>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-base md:text-lg text-foreground leading-relaxed text-left">
                  {t("aboutUs.partnership.point4").split(/(\bofficial tourism representative in Egypt\b|\binternational travel partners\b|\bEuropean and international markets\b|\breliability, consistency, and service quality\b)/g).map((text, index) => {
                    if (/(official tourism representative in Egypt|international travel partners|European and international markets|reliability, consistency, and service quality)/g.test(text)) {
                      return <span key={index} className="font-semibold">{text}</span>;
                    }
                    return text;
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container-tourism max-w-4xl px-6">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3">{t("aboutUs.mission.title")}</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          </div>
          <div className="space-y-5">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm border border-gold/15 rounded-xl p-5 sm:p-6 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-gold" />
                  </div>
                  <p className="text-base md:text-lg text-foreground leading-relaxed text-left">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-10 sm:py-12 md:py-16 bg-background/40">
        <div className="container-tourism max-w-4xl px-6">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/8 to-sand/15" />
            <div className="relative z-10 p-6 sm:p-8 md:p-12">
              <p className="text-lg sm:text-xl md:text-2xl font-heading text-foreground leading-relaxed mb-4 text-left">
                {t("aboutUs.closing.text1")}
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-left">
                {t("aboutUs.closing.text2")}
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
