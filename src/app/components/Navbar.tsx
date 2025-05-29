"use client"; // Necesario para el estado de apertura/cierre del menú móvil

import Link from "next/link";
import { useState, useEffect } from "react";
import type { NavItem } from "@/types"; // Asegúrate que la ruta a types es correcta

// Iconos SVG simples para el menú (puedes reemplazarlos con una librería de iconos)
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems: NavItem[] = [
    { label: "Inicio", href: "#hero" },
    { label: "Servicios", href: "#services" },
    { label: "Portafolio", href: "#portfolio" },
    { label: "Contacto", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark-secondary/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center h-12">
          <img
          src="/vlogo.png"
          alt="Vondervaltz Logo"
          className="h-18 w-auto object-contain"
          />
          </Link>

          {/* Navegación Desktop */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-brand-light-text hover:text-brand-blue-light px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-light-text hover:text-brand-blue-light focus:outline-none p-2"
              aria-label="Abrir menú"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark-secondary/95 backdrop-blur-sm pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                className="text-brand-light-text hover:text-brand-blue-light block px-3 py-2 rounded-md text-base font-medium transition-colors w-full text-center"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;