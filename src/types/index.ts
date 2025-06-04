export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  icon?: string; 
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string; 
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export interface SocialLink {
  name: string;
  icon: React.ReactNode; 
  url: string;
}