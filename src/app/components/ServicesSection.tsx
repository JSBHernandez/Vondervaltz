"use client"; // Para animaciones en scroll con Intersection Observer

import { useEffect, useRef, useState } from 'react';
import type { ServiceItem } from '@/types';

// Placeholder para iconos (puedes usar SVGs o una librería)
const PlaceholderIcon = () => (
  <svg className="w-12 h-12 text-brand-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </svg>
);


const servicesData: ServiceItem[] = [
  {
    id: 'web',
    icon: 'code', 
    title: 'Desarrollo Web Avanzado',
    description: 'Aplicaciones web modernas, rápidas y escalables con las últimas tecnologías y frameworks (Next.js, React, Node.js).',
  },
  {
    id: 'mobile',
    icon: 'mobile',
    title: 'Aplicaciones Móviles Nativas e Híbridas',
    description: 'Experiencias móviles fluidas y de alto rendimiento Android y WebView.',
  },
  {
    id: 'uiux',
    icon: 'design',
    title: 'Diseño UI/UX Futurista',
    description: 'Interfaces atractivas con un enfoque en la experiencia del usuario, tendencias mas allá de lo común y 100% personalizadas.',
  },
  {
    id: 'ai',
    icon: 'ai',
    title: 'Soluciones con IA',
    description: 'Integración de inteligencia artificial para optimizar procesos y crear productos innovadores.',
  },
];

const ServiceCard: React.FC<{ item: ServiceItem, isVisible: boolean }> = ({ item, isVisible }) => {
  return (
    <div
      className={`bg-brand-dark-secondary p-8 rounded-xl shadow-xl hover:shadow-glow-blue transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="flex justify-center md:justify-start">
        <PlaceholderIcon />
      </div>
      <h3 className="text-2xl font-semibold text-brand-blue-light mb-3 mt-2">{item.title}</h3>
      <p className="text-brand-muted-text leading-relaxed">{item.description}</p>
    </div>
  );
};


const ServicesSection: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<Record<string, boolean>>({});
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({ ...prev, [entry.target.id]: true }));
            observer.unobserve(entry.target); // Opcional: para animar solo una vez
          }
        });
      },
      { threshold: 0.1 } // El 10% del elemento debe ser visible
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [servicesData]);


  return (
    <section id="services" className="py-20 md:py-28 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-subtitle">
          Transformamos ideas en realidad digital con tu propio enfoque personalizado e identidad de marca.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {servicesData.map((service, index) => (
            <div key={service.id} id={`service-${service.id}`} ref={el => { cardRefs.current[index] = el; }}>
              <ServiceCard item={service} isVisible={!!visibleCards[`service-${service.id}`]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;