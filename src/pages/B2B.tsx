import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";

const B2B = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="section-padding pt-32">
        <div className="container-tourism max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-center">
            <span className="gold-text">B2B System</span>
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-12">
            Partner portal coming soon...
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default B2B;
