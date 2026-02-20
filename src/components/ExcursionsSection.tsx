import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import TourCard from "@/components/TourCard";
import { seaTours, safariTours, leisureTours, culturalTours, serviceTours } from "@/data/tours";

const WaveIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12c2-3.5 4-3.5 6 0s4 3.5 6 0 4-3.5 6 0" />
    <path d="M2 17c2-3.5 4-3.5 6 0s4 3.5 6 0 4-3.5 6 0" />
    <path d="M2 7c2-3.5 4-3.5 6 0s4 3.5 6 0 4-3.5 6 0" />
  </svg>
);

const DesertIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20h20" />
    <path d="M5 20c.5-5 2.5-9 5-10" />
    <path d="M10 10c.5-2.5 1.5-4.5 2-5.5.5 1 1.5 3 2 5.5" />
    <path d="M14 10c2.5 1 4.5 5 5 10" />
    <circle cx="17" cy="5" r="1.5" />
  </svg>
);

const LeisureIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const TempleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" />
    <path d="M5 21V8" />
    <path d="M19 21V8" />
    <path d="M12 21V14" />
    <path d="M2 8h20" />
    <path d="M5 8V5l7-3 7 3v3" />
    <path d="M10 14h4" />
  </svg>
);

const TransferIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 6v6" />
    <path d="M15 6v6" />
    <path d="M2 12h19.6" />
    <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </svg>
);

const SectionHeading = ({ icon: Icon, title }: { icon: React.FC; title: string }) => (
  <div className="flex items-center gap-3 mb-10">
    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gold/10 text-gold flex-shrink-0">
      <Icon />
    </span>
    <h3 className="text-2xl font-heading font-bold tracking-tight">{title}</h3>
    <div className="flex-1 h-px bg-border ml-2" />
  </div>
);

const ExcursionsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: ref2, isVisible: vis2 } = useScrollAnimation();
  const { ref: ref3, isVisible: vis3 } = useScrollAnimation();
  const { ref: ref4, isVisible: vis4 } = useScrollAnimation();
  const { ref: ref5, isVisible: vis5 } = useScrollAnimation();
  const { ref: ref6, isVisible: vis6 } = useScrollAnimation();

  return (
    <section id="excursions" className="section-padding bg-background">
      <div className="container-tourism">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Our Tours & Excursions</p>
          <h2 className="section-title">Unforgettable <span className="gold-text">Adventures</span> Await</h2>
          <p className="section-subtitle mt-4">From the depths of the Red Sea to the golden sands of the Sahara — all tours depart from Hurghada.</p>
        </div>

        <div id="sea" ref={ref2} className={`mb-16 transition-all duration-700 ${vis2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <SectionHeading icon={WaveIcon} title="Hurghada Sea Trips" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {seaTours.map((tour, i) => (
              <TourCard key={tour.id} tour={tour} index={i} />
            ))}
          </div>
        </div>

        <div id="safari" ref={ref3} className={`mb-16 transition-all duration-700 ${vis3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <SectionHeading icon={DesertIcon} title="Hurghada Safari Trips" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {safariTours.map((tour, i) => (
              <TourCard key={tour.id} tour={tour} index={i} />
            ))}
          </div>
        </div>

        <div id="leisure" ref={ref4} className={`mb-16 transition-all duration-700 ${vis4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <SectionHeading icon={LeisureIcon} title="City & Leisure Tours – Hurghada" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leisureTours.map((tour, i) => (
              <TourCard key={tour.id} tour={tour} index={i} />
            ))}
          </div>
        </div>

        <div id="cultural" ref={ref5} className={`mb-16 transition-all duration-700 ${vis5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <SectionHeading icon={TempleIcon} title="Luxor & Cairo Trips (From Hurghada)" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturalTours.map((tour, i) => (
              <TourCard key={tour.id} tour={tour} index={i} />
            ))}
          </div>
        </div>

        <div id="services" ref={ref6} className={`transition-all duration-700 ${vis6 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <SectionHeading icon={TransferIcon} title="Transfer Services" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceTours.map((tour, i) => (
              <TourCard key={tour.id} tour={tour} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcursionsSection;
