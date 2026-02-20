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

  return (
    <div
      ref={ref}
      className={`card-tourism group cursor-pointer transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative h-52">
        <TourImageSlider images={sliderImages} alt={tour.title} className="h-52" />
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
          <span className="flex items-center gap-1.5"><Clock size={13} /> {tour.duration}</span>
          <span className="flex items-center gap-1.5"><MapPin size={13} /> {tour.location}</span>
        </div>
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
