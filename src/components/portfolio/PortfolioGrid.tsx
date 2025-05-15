import Link from 'next/link';
import Image from 'next/image';
import { PortfolioItem } from '@/data/items';
import styles from './PortfolioGrid.module.css';

interface PortfolioGridProps {
  items: PortfolioItem[];
}

export function PortfolioGrid({ items }: PortfolioGridProps) {
  if (items.length === 0) {
    return (
      <main className="flex-1 text-gray-500 flex items-center justify-center">
        No items found for this category.
      </main>
    );
  }

  return (
    <main className={styles.gridContainer}>
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="block border rounded-lg overflow-hidden hover:shadow-lg transition bg-white"
        >
          <Image
            src={item.imgSrc}
            alt={item.title}
            width={400}
            height={300}
            className="object-cover w-full h-48"
          />
          <div className="p-2 text-center font-medium">{item.title}</div>
        </Link>
      ))}
    </main>
  );
}
