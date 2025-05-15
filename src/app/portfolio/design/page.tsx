'use client';

import { useState } from 'react';
import { CategoryBar } from '@/components/portfolio/CategoryBar';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { ITEMS } from '@/data/items';

export default function PortfolioDesignPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const filtered = selected
    ? ITEMS.filter((item) => item.category === selected)
    : ITEMS;

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      {/* sidebar */}
      <div className="w-60 shrink-0">
        <CategoryBar selected={selected} onSelect={setSelected} />
      </div>

      {/* wrapper now handles padding */}
      <div className="flex-1 p-4">
        <PortfolioGrid items={filtered} />
      </div>
    </div>
  );
}
