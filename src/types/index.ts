export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  icon?: string; // Podría ser una clase de icono o un path SVG
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // Placeholder, o path a imagen en /public
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export interface SocialLink {
  name: string;
  icon: React.ReactNode; // Para SVGs o componentes de icono
  url: string;
}