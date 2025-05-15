export const mainNavigation = [
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ] as const;
  
  export const footerServices = [
    { label: 'YouTube Management', href: '/services/youtube' },
    { label: 'SEO Optimization', href: '/services/seo' },
    { label: 'Graphic Design', href: '/services/design' },
    { label: 'Content Strategy', href: '/services/content' },
  ] as const;
  
  export const footerCompany = [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ] as const;
  
  export const footerLinkGroups = [
    {
      title: 'Services',
      links: footerServices,
    },
    {
      title: 'Company',
      links: footerCompany,
    },
  ] as const; 