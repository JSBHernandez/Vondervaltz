"use client";

import Link from 'next/link';
import Image from 'next/image'; // Importa el componente Image de Next.js

const FloatingWhatsAppButton: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=573204032120&text=%C2%A1%20Quiero%20mi%20P%C3%A1gina%20Web%20ya%20mismo%20!%F0%9F%92%BB";
  // Asegúrate de que el nombre del archivo coincida exactamente con el que tienes en public/
  // Por ejemplo, si tu imagen está en public/whatsicon.png
  const iconPath = "/whats.png"; // Next.js sirve los archivos de /public desde la raíz '/'

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50
                 bg-green-500 hover:bg-green-600 // Mantendremos el fondo verde para el botón
                 p-3 md:p-3.5 // Ajusta el padding si es necesario para la imagen
                 rounded-full
                 flex items-center justify-center
                 shadow-xl hover:shadow-2xl
                 transition-all duration-300 ease-in-out
                 transform hover:scale-110
                 animate-subtle-pulse" // O la animación que prefieras
    >
      <div className="relative w-7 h-7 md:w-8 md:h-8"> {/* Contenedor para la imagen */}
        <Image
          src={iconPath}
          alt="WhatsApp Icon"
          layout="fill" // Hace que la imagen llene el contenedor
          objectFit="contain" // Asegura que toda la imagen sea visible sin ser recortada, o usa 'cover' si prefieres
          priority // Opcional: si consideras que es un elemento importante de carga rápida
        />
      </div>
    </Link>
  );
};

export default FloatingWhatsAppButton;