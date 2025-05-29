"use client"; // Para animaciones en scroll

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { PortfolioItem } from '@/types';

// Datos de ejemplo para el portafolio
const portfolioData: PortfolioItem[] = [
  {
    id: 'proj1',
    title: 'Proyecto Cygnus X-1',
    description: 'Plataforma de visualización de datos cósmicos con renderizado 3D en tiempo real.',
    imageUrl: '/images/portfolio/placeholder-1.jpg', // Reemplaza con tus imágenes en /public/images/portfolio/
    tags: ['Next.js', 'Three.js', 'API REST', 'TypeScript'],
    liveUrl: '#',
  },
  {
    id: 'proj2',
    title: 'Nova Dashboard',
    description: 'Dashboard analítico para fintech, enfocado en seguridad y performance.',
    imageUrl: '/images/portfolio/placeholder-2.jpg',
    tags: ['React', 'D3.js', 'Node.js', 'GraphQL'],
    sourceUrl: '#',
  },
  {
    id: 'proj3',
    title: 'Aurora Mobile Suite',
    description: 'Aplicación móvil para gestión de energía inteligente en hogares.',
    imageUrl: '/images/portfolio/placeholder-3.jpg',
    tags: ['React Native', 'Firebase', 'IoT'],
    liveUrl: '#',
  },
  {
    id: 'proj4',
    title: 'Quantum Leap Engine',
    description: 'Motor de simulación para computación cuántica (conceptual).',
    imageUrl: '/images/portfolio/placeholder-4.jpg',
    tags: ['Python', 'Qiskit', 'AI', 'Research'],
  },
];

const PortfolioCard: React.FC<{ item: PortfolioItem, isVisible: boolean }> = ({ item, isVisible }) => {
  return (
    <div
      className={`group relative bg-brand-dark-secondary rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-glow-accent ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: isVisible ? `${Math.random() * 0.3}s` : '0s' }} // Staggered animation
    >
      <Image
        src={item.imageUrl}
        alt={item.title}
        width={600}
        height={400}
        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-brand-blue-light mb-2">{item.title}</h3>
        <p className="text-brand-muted-text text-sm mb-4 h-20 overflow-hidden">{item.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-700 text-brand-accent px-2 py-1 rounded-full font-mono">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          {item.liveUrl && (
            <Link href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-blue-light transition-colors text-sm font-semibold">
              Ver Demo →
            </Link>
          )}
          {item.sourceUrl && (
            <Link href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-blue-light transition-colors text-sm font-semibold">
              Ver Código →
            </Link>
          )}
        </div>
      </div>
      {/* Overlay sutil para el hover */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
    </div>
  );
};

const PortfolioSection: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<Record<string, boolean>>({});
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({ ...prev, [entry.target.id]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [portfolioData]);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-gradient-to-b from-brand-dark to-brand-dark-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Nuestro Trabajo</h2>
        <p className="section-subtitle">
          Proyectos que demuestran nuestra pasión por la tecnología y el diseño de vanguardia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {portfolioData.map((project, index) => (
             <div key={project.id} id={`portfolio-${project.id}`} ref={el => { cardRefs.current[index] = el; }}>
              <PortfolioCard item={project} isVisible={!!visibleCards[`portfolio-${project.id}`]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;