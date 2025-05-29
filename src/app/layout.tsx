import type { Metadata } from "next";
import { Exo_2, Roboto_Mono } from "next/font/google"; // Importa las fuentes
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

// Configuración de fuentes de Google
const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-exo2", // CSS Variable para usar en Tailwind
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  variable: "--font-roboto-mono", // CSS Variable
});

export const metadata: Metadata = {
  title: "Vondervaltz | Innovación y Desarrollo Digital",
  description: "Vondervaltz - Creamos soluciones de software futuristas y de alto impacto. Servicios de desarrollo web, móvil y consultoría tecnológica.",
  // Añade más metadatos relevantes aquí (OpenGraph, Twitter cards, etc.)
  keywords: "desarrollo web, desarrollo móvil, Next.js, TypeScript, Tailwind CSS, Vondervaltz, software, tecnología, portafolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${exo2.variable} ${robotoMono.variable} scroll-smooth`}>
      <body className="bg-brand-dark text-brand-light-text antialiased selection:bg-brand-blue selection:text-white">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}