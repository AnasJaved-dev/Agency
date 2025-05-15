export interface PortfolioItem {
    id: string;
    category: string;
    title: string;
    imgSrc: string;
    href: string;
  }
  
  export const ITEMS: PortfolioItem[] = [
    {
      id: 'thumb-01',
      category: 'thumbnails',
      title: 'Minimalist YouTube Thumbnail',
      imgSrc: '/images/thumb-01.png',
      href: '#',
    },
    {
      id: 'poster-01',
      category: 'posters',
      title: 'Event Poster',
      imgSrc: '/images/thumb-01.png',
      href: '#',
    },
    {
      id: 'banner-01',
      category: 'banners',
      title: 'Web Banner',
      imgSrc: '/images/thumb-01.png',
      href: '#',
    },
  ];
  