import { Youtube, Palette } from 'lucide-react';

export interface Service {
  id: string;
  icon: React.ElementType;
  iconBg: string;
  title: string;
  subtitle: string;
  items: string[];
  href: string;
  linkColor: string;
  checkColor: string;
}

export const services: Service[] = [
  {
    id: 'youtube',
    icon: Youtube,
    iconBg: 'bg-primary/10',
    title: 'YouTube Management & SEO',
    subtitle: 'Grow faster with expert YouTube strategy',
    items: [
      'Full YouTube channel management',
      'Keyword research and optimization',
      'SEO-friendly titles, tags, descriptions',
      'Eye-catching thumbnails',
      'Content planning and scheduling',
    ],
    href: '/services/youtube',
    linkColor: 'text-primary',
    checkColor: 'text-primary',
  },
  {
    id: 'graphic-design',
    icon: Palette,
    iconBg: 'bg-secondary/10',
    title: 'Graphic Design',
    subtitle: 'Designs that grab attention and build identity',
    items: [
      'YouTube thumbnails',
      'Social media posts',
      'Posters and flyers',
      'Business cards',
      'Custom graphics for branding',
    ],
    href: '/services/graphic-design',
    linkColor: 'text-secondary',
    checkColor: 'text-secondary',
  },
]; 