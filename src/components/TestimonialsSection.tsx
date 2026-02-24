import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslations();

  const testimonials = t('sections.testimonials.reviews', { returnObjects: true }) as Array<{
    name: string;
    country: string;
    text: string;
  }>;

  return (
    <section className="section-padding bg-muted">
      <div className="container-tourism">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">{t('sections.testimonials.subtitle')}</p>
          <h2 className="section-title">{t('sections.testimonials.title')} <span className="gold-text">{t('sections.testimonials.titleHighlight')}</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.name} name={testimonial.name} country={testimonial.country} rating={5} text={testimonial.text} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, country, rating, text, index }: { name: string; country: string; rating: number; text: string; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-card rounded-2xl p-6 border border-border/50 transition-all duration-700 hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        boxShadow: "0 1px 3px 0 hsl(220 20% 10% / 0.06)",
      }}
    >
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-gold text-gold" />
        ))}
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic font-light">"{text}"</p>
      <div className="pt-4 border-t border-border/50">
        <p className="font-heading font-semibold text-foreground text-sm">{name}</p>
        <p className="text-muted-foreground text-xs mt-0.5 tracking-wide">{country}</p>
      </div>
    </div>
  );
};

export default TestimonialsSection;
