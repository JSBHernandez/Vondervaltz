import Link from 'next/link';
import type { SocialLink } from '@/types'; // Reutilizamos el tipo si es necesario

// Puedes reutilizar los iconos de ContactSection o definirlos aquí
const GithubIconMini = () => ( /* ... SVG ... */ <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>);
const LinkedinIconMini = () => ( /* ... SVG ... */ <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>);


const footerSocialLinks: SocialLink[] = [
  { name: 'GitHub', icon: <GithubIconMini />, url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', icon: <LinkedinIconMini />, url: 'https://linkedin.com/in/yourprofile' },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark-secondary border-t border-gray-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Columna 1: Logo y Copyright */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold text-brand-accent hover:opacity-80 transition-opacity">
              Vondervaltz
            </Link>
            <p className="text-sm text-brand-muted-text mt-2">
              © {currentYear} Vondervaltz. Todos los derechos reservados.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos (opcional) */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-brand-blue-light mb-3">Navegación</h3>
            <ul className="space-y-2">
              <li><Link href="#hero" className="text-brand-muted-text hover:text-brand-blue transition-colors">Inicio</Link></li>
              <li><Link href="#services" className="text-brand-muted-text hover:text-brand-blue transition-colors">Servicios</Link></li>
              <li><Link href="#portfolio" className="text-brand-muted-text hover:text-brand-blue transition-colors">Portafolio</Link></li>
              <li><Link href="#contact" className="text-brand-muted-text hover:text-brand-blue transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-brand-blue-light mb-3">Síguenos</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {footerSocialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Vondervaltz en ${link.name}`}
                  className="text-brand-muted-text hover:text-brand-accent transition-colors"
                >
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-700/30 text-center text-xs text-gray-500">
            <p>Diseñado y desarrollado con <span className="text-brand-accent"> pasión</span> por Vondervaltz.</p>
            {/* <p>Construido con Next.js, TypeScript y Tailwind CSS.</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;