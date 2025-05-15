import { Youtube, Instagram, Twitter, Linkedin } from 'lucide-react';

export const socialLinks = [
  { 
    icon: Youtube, 
    href: 'https://youtube.com', 
    label: 'YouTube',
    color: '#FF0000'
  },
  { 
    icon: Instagram, 
    href: 'https://instagram.com', 
    label: 'Instagram',
    color: '#E4405F'
  },
  { 
    icon: Twitter, 
    href: 'https://twitter.com', 
    label: 'Twitter',
    color: '#1DA1F2'
  },
  { 
    icon: Linkedin, 
    href: 'https://linkedin.com', 
    label: 'LinkedIn',
    color: '#0A66C2'
  },
] as const; 