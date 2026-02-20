import { useParams, Link, useNavigate } from "react-router-dom";
import { tours } from "@/data/tours";
import { Clock, MapPin, CheckCircle, ArrowLeft, MessageCircle, Mail, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState, useEffect } from "react";

const TourDetail = () => {
  const { tourId } = useParams<{ tourId: string }>();
  const tour = tours.find((t) => t.id === tourId);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [tourId]);

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "instant" });
    navigate("/");
  };

  if (!tour) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-heading font-bold mb-4">Tour Not Found</h1>
          <Link to="/" className="btn-gold">Back to Home</Link>
        </div>
      </div>
    );
  }

  const whatsappMsg = encodeURIComponent(`Hello, I would like to inquire about ${tour.title} from Hurghada.`);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[42vh] sm:h-[52vh] md:h-[60vh] flex items-end overflow-hidden">
        <img src={tour.image} alt={tour.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/35 to-transparent" />
        <div className="relative z-10 container-tourism pb-10 sm:pb-14 text-background">
          <a
            href="/"
            onClick={handleBackClick}
            className="inline-flex items-center gap-1.5 text-background/70 hover:text-background mb-4 transition-colors text-sm font-medium cursor-pointer"
          >
            <ArrowLeft size={15} /> Back to All Tours
          </a>
          {tour.locationBadges && tour.locationBadges.length > 1 ? (
            <div className="flex gap-2 mb-3">
              {tour.locationBadges.map((badge, idx) => (
                <Badge key={idx} className="bg-gold/90 text-dark border-none text-xs font-semibold tracking-wide">
                  {badge}
                </Badge>
              ))}
            </div>
          ) : (
            <Badge className="bg-gold/90 text-dark border-none mb-3 text-xs font-semibold tracking-wide">{tour.locationBadge}</Badge>
          )}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-3 leading-tight">{tour.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-background/75 text-sm">
            <span className="flex items-center gap-1.5"><Clock size={15} /> {tour.duration}</span>
            <span className="flex items-center gap-1.5"><MapPin size={15} /> {tour.location}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-tourism max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-xl font-heading font-bold mb-3 tracking-tight">About This Tour</h2>
                <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold mb-4 tracking-tight">What's Included</h2>
                <ul className="space-y-2.5">
                  {tour.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-gold flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {tour.galleryImages.length > 0 && (
                <div>
                  <h2 className="text-xl font-heading font-bold mb-4 tracking-tight">Gallery</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {tour.galleryImages.map((img, i) => (
                      <div
                        key={i}
                        onClick={() => setLightbox(i)}
                        className="relative overflow-hidden rounded-xl h-36 cursor-pointer group border border-border/40"
                      >
                        <img src={img} alt={`${tour.title} gallery ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                        <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-muted/50 border border-border/60 rounded-2xl p-5 sm:p-6 space-y-4 lg:sticky lg:top-28">
                <h3 className="text-base font-heading font-bold text-center">Interested in this tour?</h3>
                <a
                  href={`https://wa.me/201122424531?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full flex items-center justify-center gap-2 py-3.5"
                >
                  <MessageCircle size={16} />
                  Book via WhatsApp
                </a>
                <a
                  href="/#contact"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-200 border border-border text-foreground hover:border-gold hover:text-gold"
                >
                  <Mail size={16} />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-dark/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-background/80 hover:text-background transition-colors" onClick={() => setLightbox(null)} aria-label="Close">
            <X size={28} />
          </button>
          <img
            src={tour.galleryImages[lightbox]}
            alt={tour.title}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TourDetail;
