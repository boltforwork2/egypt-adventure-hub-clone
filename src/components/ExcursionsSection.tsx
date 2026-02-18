import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import TourCard from "@/components/TourCard";
import { seaTours, safariTours, culturalTours } from "@/data/tours";

const ExcursionsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: ref2, isVisible: vis2 } = useScrollAnimation();
  const { ref: ref3, isVisible: vis3 } = useScrollAnimation();
  const { ref: ref4, isVisible: vis4 } = useScrollAnimation();

  return (
    <section id="excursions" className="section-padding bg-background">
      <div className="container-tourism">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Our Tours & Excursions</p>
          <h2 className="section-title">Unforgettable <span className="gold-text">Adventures</span> Await</h2>
          <p className="section-subtitle mt-4">From the depths of the Red Sea to the golden sands of the Sahara — all tours depart from Hurghada.</p>
        </div>

        {/* Sea Trips */}
        <div id="sea" ref={ref2} className={`mb-16 transition-all duration-700 ${vis2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
            🌊 Hurghada Sea Trips
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {seaTours.map((tour, i) => (
              <TourCard key={tour.id} tour={tour} index={i} />
            ))}
          </div>
        </div>

        {/* Safari Trips */}
        <div id="safari" ref={ref3} className={`mb-16 transition-all duration-700 ${vis3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h3 className="text-2xl font-heading font-bold mb-8">
            🐪 Hurghada Safari Trips
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {safariTours.map((tour, i) => (
              <TourCard key={tour.id} tour={tour} index={i} />
            ))}
          </div>
        </div>

        {/* Cultural Trips */}
        <div id="cultural" ref={ref4} className={`transition-all duration-700 ${vis4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h3 className="text-2xl font-heading font-bold mb-8">
            🏛️ Luxor & Cairo Trips (From Hurghada)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {culturalTours.map((tour, i) => (
              <TourCard key={tour.id} tour={tour} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcursionsSection;
