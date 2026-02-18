import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", country: "United Kingdom", rating: 5, text: "The snorkeling trip was absolutely magical! The crew was professional and the coral reefs were breathtaking. Best experience in Hurghada!" },
  { name: "Hans W.", country: "Germany", rating: 5, text: "We booked the desert safari with Fayed Travel — the quad biking and sunset camel ride were unforgettable. Highly recommend!" },
  { name: "Maria L.", country: "Italy", rating: 5, text: "Our Luxor day trip was perfectly organized. The guide was incredibly knowledgeable and the temples were awe-inspiring. A must-do!" },
  { name: "James R.", country: "Australia", rating: 5, text: "From booking to the actual trip, everything was seamless. Great prices, friendly team, and amazing experiences. 10/10!" },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-muted">
      <div className="container-tourism">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="section-title">What Our <span className="gold-text">Guests Say</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} />
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
