'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import DropdownMenu from './DropdownMenu'; // adjust path if needed

const navItems = [
  { href: '/', label: 'Home' },
  // We'll inject DropdownMenu in place of 'Services'
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-8">
      {navItems.slice(0, 2).map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'text-body text-muted-foreground hover:text-primary transition-colors',
            pathname === item.href && 'text-primary font-medium'
          )}
        >
          {item.label}
        </Link>
      ))}

      {/* Inject Services Dropdown at index 2 */}
      <DropdownMenu />

      {navItems.slice(2).map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'text-body text-muted-foreground hover:text-primary transition-colors',
            pathname === item.href && 'text-primary font-medium'
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
