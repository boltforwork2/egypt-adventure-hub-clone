import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import type { Tour } from "@/data/tours";

interface TourCardProps {
  tour: Tour;
  index: number;
}

const TourCard = ({ tour, index }: TourCardProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`card-tourism group cursor-pointer transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden h-48 sm:h-56">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Badge className="absolute top-3 left-3 bg-gold text-dark border-none text-xs font-semibold">
          {tour.locationBadge}
        </Badge>
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-heading font-bold mb-2 group-hover:text-gold transition-colors duration-300 line-clamp-1">
          {tour.title}
        </h3>
        <div className="flex items-center gap-3 sm:gap-4 text-muted-foreground text-xs mb-3">
          <span className="flex items-center gap-1"><Clock size={14} /> {tour.duration}</span>
          <span className="flex items-center gap-1"><MapPin size={14} /> {tour.location}</span>
        </div>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">{tour.description}</p>
        <Link
          to={`/tour/${tour.id}`}
          className="inline-flex items-center text-sm font-semibold text-gold hover:text-gold-dark transition-colors duration-300 py-2"
        >
          View Details
          <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
