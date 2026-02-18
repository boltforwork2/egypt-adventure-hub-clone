import { useParams, Link } from "react-router-dom";
import { tours } from "@/data/tours";
import { Clock, MapPin, CheckCircle, ArrowLeft, MessageCircle, Mail, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";

const TourDetail = () => {
  const { tourId } = useParams<{ tourId: string }>();
  const tour = tours.find((t) => t.id === tourId);
  const [lightbox, setLightbox] = useState<number | null>(null);

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
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] flex items-end overflow-hidden">
        <img src={tour.image} alt={tour.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent" />
        <div className="relative z-10 container-tourism pb-8 sm:pb-12 text-background">
          <Link to="/" className="inline-flex items-center gap-2 text-background/70 hover:text-background mb-3 sm:mb-4 transition-colors text-sm">
            <ArrowLeft size={16} /> Back to All Tours
          </Link>
          <Badge className="bg-gold text-dark border-none mb-2 sm:mb-3">{tour.locationBadge}</Badge>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-2 sm:mb-3">{tour.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-background/80 text-sm">
            <span className="flex items-center gap-1"><Clock size={16} /> {tour.duration}</span>
            <span className="flex items-center gap-1"><MapPin size={16} /> {tour.location}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-tourism max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">About This Tour</h2>
                <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">What's Included</h2>
                <ul className="space-y-3">
                  {tour.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-gold flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {tour.galleryImages.length > 0 && (
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-4">Gallery</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {tour.galleryImages.map((img, i) => (
                      <div
                        key={i}
                        onClick={() => setLightbox(i)}
                        className="relative overflow-hidden rounded-xl h-36 cursor-pointer group"
                      >
                        <img src={img} alt={`${tour.title} gallery ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                        <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-muted rounded-2xl p-5 sm:p-6 space-y-5 lg:sticky lg:top-28">
                <h3 className="text-lg font-heading font-bold text-center">Interested in this tour?</h3>
                <a
                  href={`https://wa.me/201234567890?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full flex items-center justify-center gap-2 py-4"
                >
                  <MessageCircle size={18} />
                  Book via WhatsApp
                </a>
                <a
                  href="/#contact"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 border-2 border-border text-foreground hover:border-gold hover:text-gold"
                >
                  <Mail size={18} />
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
            <X size={32} />
          </button>
          <img
            src={tour.galleryImages[lightbox]}
            alt={tour.title}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-scale-in"
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
