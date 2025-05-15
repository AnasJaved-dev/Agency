'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'thumbnail', label: 'Thumbnails' },
  { id: 'social', label: 'Social Media' },
  { id: 'branding', label: 'Branding' },
  { id: 'logo', label: 'Logo Design' },
  { id: 'packaging', label: 'Packaging' },
  { id: 'web', label: 'Web Design' },
  { id: 'print', label: 'Print Design' },
  { id: 'merchandise', label: 'Merchandise' },
];

export function PortfolioNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';

  return (
    <nav className="p-4">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={`/portfolio/design${category.id === 'all' ? '' : `?category=${category.id}`}`}
              className={cn(
                'block px-4 py-2 rounded-lg transition-colors',
                currentCategory === category.id
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-50'
              )}
            >
              {category.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
} 