import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X } from "lucide-react";
import divingImg from "@/assets/diving.jpg";
import snorkelingImg from "@/assets/snorkeling.jpg";
import islandImg from "@/assets/island.jpg";
import quadBikeImg from "@/assets/quad-bike.jpg";
import camelRideImg from "@/assets/camel-ride.jpg";
import luxorImg from "@/assets/luxor-temple.jpg";
import coralReefImg from "@/assets/coral-reef.jpg";
import boatTripImg from "@/assets/boat-trip.jpg";
import jeepSafariImg from "@/assets/jeep-safari.jpg";

const images = [
  { src: divingImg, alt: "Scuba diving in Red Sea" },
  { src: islandImg, alt: "Paradise island trip" },
  { src: quadBikeImg, alt: "Quad bike desert safari" },
  { src: luxorImg, alt: "Luxor Temple" },
  { src: snorkelingImg, alt: "Snorkeling adventure" },
  { src: coralReefImg, alt: "Coral reef exploration" },
  { src: boatTripImg, alt: "Boat trip on Red Sea" },
  { src: camelRideImg, alt: "Camel ride at sunset" },
  { src: jeepSafariImg, alt: "Jeep desert safari" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="section-padding bg-background">
        <div className="container-tourism">
          <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Gallery</p>
            <h2 className="section-title">Moments from <span className="gold-text">Our Adventures</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <GalleryItem key={i} {...img} index={i} onClick={() => setLightbox(i)} />
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-dark/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-background/80 hover:text-background transition-colors" onClick={() => setLightbox(null)} aria-label="Close">
            <X size={32} />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

const GalleryItem = ({ src, alt, index, onClick }: { src: string; alt: string; index: number; onClick: () => void }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl cursor-pointer group transition-all duration-700 ${
        index === 0 || index === 4 ? "row-span-2 h-full" : "h-48 md:h-56"
      } ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
      <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-all duration-500 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
          <svg className="w-5 h-5 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
