import { Youtube, Palette } from 'lucide-react';

export interface PricingPackage {
  id: string;
  title: string;
  price: string;
  features: string[];
  icon: React.ElementType;
  category: 'youtube' | 'design';
}

export interface CustomItem {
  service: string;
  price: string;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: 'youtube-starter',
    title: 'Starter Plan',
    price: '$199/month',
    features: [
      'Channel Audit',
      'Keyword Research',
      '4 Video SEO/Month',
    ],
    icon: Youtube,
    category: 'youtube',
  },
  {
    id: 'youtube-growth',
    title: 'Growth Plan',
    price: '$399/month',
    features: [
      'Everything in Starter',
      '8 Video SEO/Month',
      'Content Strategy',
      'Competitor Analysis',
    ],
    icon: Youtube,
    category: 'youtube',
  },
  {
    id: 'youtube-full',
    title: 'Full Management',
    price: '$799/month',
    features: [
      'Everything in Growth',
      'Unlimited Video SEO',
      'Channel Optimization',
      'Performance Reports',
    ],
    icon: Youtube,
    category: 'youtube',
  },
  {
    id: 'design-thumbnail',
    title: 'Thumbnail Pack',
    price: '$20/thumbnail',
    features: [
      'Custom Design',
      '2 Revisions',
      'HD Export',
    ],
    icon: Palette,
    category: 'design',
  },
  {
    id: 'design-social',
    title: 'Social Pack',
    price: '$199/month',
    features: [
      '8 Social Posts',
      'Custom Graphics',
      'Brand Consistency',
    ],
    icon: Palette,
    category: 'design',
  },
  {
    id: 'design-branding',
    title: 'Branding Kit',
    price: '$499',
    features: [
      'Logo Design',
      'Color Palette',
      'Brand Guidelines',
      'Social Templates',
    ],
    icon: Palette,
    category: 'design',
  },
];

export const customItems: CustomItem[] = [
  { service: 'YouTube Thumbnail', price: '$20' },
  { service: 'Channel Banner', price: '$80' },
  { service: 'Logo Design', price: '$150' },
  { service: '1 Video SEO Optimization', price: '$30' },
  { service: 'Social Media Post', price: '$25' },
]; 