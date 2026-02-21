import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import TourImageSlider from "@/components/TourImageSlider";
import type { Tour } from "@/data/tours";

interface TourCardProps {
  tour: Tour;
  index: number;
}

const TourCard = ({ tour, index }: TourCardProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const navigate = useNavigate();

  const handleViewDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "instant" });
    navigate(`/tour/${tour.id}`);
  };

  const sliderImages = tour.galleryImages.length > 0 ? tour.galleryImages : [tour.image];
  const isTransferService = tour.id === "airport-transfer-hurghada";

  const renderPriceInContent = () => {
    if (tour.priceAdults !== undefined) {
      return (
        <div className="text-sm space-y-1 mb-3">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Adults:</span>
            <span className="font-bold text-gold">€{tour.priceAdults}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Children:</span>
            <span className="font-bold text-gold">Free</span>
          </div>
        </div>
      );
    }

    if (tour.priceHurghada !== undefined && tour.priceElGouna !== undefined) {
      return (
        <div className="text-sm space-y-1 mb-3">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Hurghada:</span>
            <span className="font-bold text-gold">€{tour.priceHurghada}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">El Gouna:</span>
            <span className="font-bold text-gold">€{tour.priceElGouna}</span>
          </div>
        </div>
      );
    }

    if (tour.transportPrices && Object.keys(tour.transportPrices).length > 0) {
      return (
        <div className="text-sm space-y-1 mb-3">
          {Object.entries(tour.transportPrices).map(([option, price]) => (
            <div key={option} className="flex items-center justify-between">
              <span className="text-muted-foreground">{option}:</span>
              <span className="font-bold text-gold">€{price}</span>
            </div>
          ))}
        </div>
      );
    }

    if (tour.price !== undefined) {
      return (
        <div className="mb-3 flex items-baseline justify-end">
          <span className="text-lg font-bold text-gold">€{tour.price}</span>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      ref={ref}
      className={`card-tourism group cursor-pointer transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative h-52">
        {isTransferService ? (
          <img src={tour.image} alt={tour.title} className="w-full h-52 object-cover" loading="eager" />
        ) : (
          <TourImageSlider images={sliderImages} alt={tour.title} className="h-52" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        {tour.locationBadges && tour.locationBadges.length > 1 ? (
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
            {tour.locationBadges.map((badge, idx) => (
              <Badge key={idx} className="bg-gold/90 text-dark border-none text-xs font-semibold tracking-wide backdrop-blur-sm">
                {badge}
              </Badge>
            ))}
          </div>
        ) : (
          <Badge className="absolute top-3 left-3 z-10 bg-gold/90 text-dark border-none text-xs font-semibold tracking-wide backdrop-blur-sm">
            {tour.locationBadge}
          </Badge>
        )}
      </div>
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg font-heading font-bold mb-2 group-hover:text-gold transition-colors duration-300 line-clamp-1 leading-snug">
          {tour.title}
        </h3>
        <div className="flex items-center gap-4 text-muted-foreground text-xs mb-3">
          <span className="flex items-center gap-1.5 whitespace-nowrap"><Clock size={13} /> {tour.duration}</span>
          <span className="flex items-center gap-1.5"><MapPin size={13} /> {tour.location}</span>
        </div>
        {renderPriceInContent()}
        <p className="text-muted-foreground text-sm mb-5 leading-relaxed line-clamp-2 flex-1">{tour.description}</p>
        <a
          href={`/tour/${tour.id}`}
          onClick={handleViewDetails}
          className="inline-flex items-center text-sm font-semibold text-gold hover:text-gold-dark transition-colors duration-200 group/link"
        >
          View Details
          <svg className="ml-1.5 w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default TourCard;
