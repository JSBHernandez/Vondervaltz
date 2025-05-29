// src/app/components/HeroSection.tsx
import Link from "next/link";
import Image from "next/image"; // Asegúrate de que Image esté importado

// Ya no necesitamos FloatingShape, así que puedes eliminar su definición
// o comentarla si la quieres guardar para el futuro.

const HeroSection: React.FC = () => {
  // Define la ruta a tu imagen principal para el Hero
  const heroImagePath = "/abstract31g.png"; // CAMBIA ESTO por la ruta a tu imagen

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      {/* Fondo con resplandor (opcional, puedes quitarlo si tu imagen ya tiene fondo) */}
      <div className="absolute inset-0 bg-hero-glow-background z-0"></div>

      {/* Contenedor principal del layout */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Columna de Texto (Izquierda) */}
          <div className="text-center md:text-left animate-slide-in-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="block text-brand-light-text">Bienvenido a</span>
              <span className="block text-brand-accent">Vondervaltz</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-brand-muted-text max-w-xl mx-auto md:mx-0 mb-10">
              Creamos experiencias digitales futuristas y soluciones de software que impulsan la innovación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="#portfolio" className="btn-primary text-lg px-10 py-4">
                Explorar Proyectos
              </Link>
            </div>
          </div>

          {/* Columna Visual (Derecha) - Con una sola Imagen */}
          <div className="relative h-72 md:h-[450px] lg:h-[500px] flex items-center justify-center animate-slide-in-right">
            {/* Contenedor para la imagen */}
            <div className="w-full h-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
              <Image
                src={heroImagePath}
                alt="Visualización de Vondervaltz" // Cambia el alt text
                width={600} // Ancho intrínseco de tu imagen
                height={500} // Alto intrínseco de tu imagen
                className="object-contain w-full h-full rounded-lg shadow-xl" // 'object-contain' para que se vea completa
                priority // Recomendado para imágenes LCP (Largest Contentful Paint)
              />
            </div>
          </div>
        </div>
      </div>

      {/* Flecha para scroll down (opcional, si la quieres mantener) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
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