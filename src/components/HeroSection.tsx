const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg" alt="Hurghada Red Sea coast aerial view" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-background mb-6 animate-fade-up">
          Discover Egypt with{" "}
          <span className="text-gold">Fayed International Travel</span>
        </h1>
        <p className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto mb-10 animate-fade-in-delay font-light leading-relaxed">
          Explore the crystal-clear Red Sea, ride through the Sahara Desert, and uncover the ancient wonders of Luxor — all with expert guides by your side.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay">
          <a href="#excursions" className="btn-gold text-base px-10 py-4">
            Explore Trips
          </a>
          <a href="#contact" className="btn-outline-light text-base px-10 py-4">
            Contact Us
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-background/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-background/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
