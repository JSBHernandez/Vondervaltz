import type { Metadata } from "next";
import { Exo_2, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton"; // <-- Importa el nuevo componente

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-exo2",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Vondervaltz | Innovación y Desarrollo Digital",
  description: "Vondervaltz - Creamos soluciones de software futuristas y de alto impacto. Servicios de desarrollo web, móvil y consultoría tecnológica.",
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
        <FloatingWhatsAppButton /> 
      </body>
    </html>
  );
}