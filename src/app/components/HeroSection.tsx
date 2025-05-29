import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-futuristic">
      {/* Opcional: Elemento de fondo animado o estático muy sutil */}
      {/* <div className="absolute inset-0 opacity-10"> ... </div> */}

      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-brand-light-text animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Bienvenido a</span>
          <span className="block text-brand-accent animate-fade-in-up" style={{ animationDelay: '0.5s' }}>Vondervaltz</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-brand-muted-text max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          Creamos experiencias digitales futuristas y soluciones de software que impulsan la innovación.
        </p>
        <div className="space-x-0 space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
          <Link href="#portfolio" className="btn-primary text-lg">
            Explorar Proyectos
          </Link>
          <Link href="#contact" className="btn-secondary text-lg">
            Contactar
          </Link>
        </div>
      </div>
      {/* Flecha para scroll down (opcional) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <Link href="#services" aria-label="Ir a servicios">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brand-blue-light hover:text-brand-accent transition-colors">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;