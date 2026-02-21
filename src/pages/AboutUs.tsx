import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="section-padding pt-32">
        <div className="container-tourism max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-center">
            About <span className="gold-text">Fayed International Travel</span>
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-12">
            Content coming soon...
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutUs;
