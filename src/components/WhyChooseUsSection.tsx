import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, DollarSign, HeartHandshake, Award, Headphones } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

const WhyChooseUsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslations();

  const reasons = [
    { icon: HeartHandshake, title: t('sections.whyChooseUs.professionalGuides'), description: t('sections.whyChooseUs.professionalGuidesDesc') },
    { icon: DollarSign, title: t('sections.whyChooseUs.bestPrices'), description: t('sections.whyChooseUs.bestPricesDesc') },
    { icon: Shield, title: t('sections.whyChooseUs.safeTrips'), description: t('sections.whyChooseUs.safeTripsDesc') },
    { icon: Award, title: t('sections.whyChooseUs.highQuality'), description: t('sections.whyChooseUs.highQualityDesc') },
    { icon: Headphones, title: t('sections.whyChooseUs.support247'), description: t('sections.whyChooseUs.support247Desc') },
  ];

  return (
    <section id="why-us" className="section-padding" style={{ background: "linear-gradient(180deg, hsl(220 20% 10%) 0%, hsl(220 15% 15%) 100%)" }}>
      <div className="container-tourism">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">{t('sections.whyChooseUs.subtitle')}</p>
          <h2 className="section-title text-background">{t('sections.whyChooseUs.title')} <span className="gold-text">{t('sections.whyChooseUs.titleHighlight')}</span></h2>
          <p className="text-background/60 text-lg mt-4 max-w-2xl mx-auto">{t('sections.whyChooseUs.description')}</p>
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
