'use client';

import { CATEGORIES } from '@/data/categories';

interface CategoryBarProps {
  selected: string | null;
  onSelect: (id: string | null) => void;
}

export function CategoryBar({ selected, onSelect }: CategoryBarProps) {
  return (
    <aside className="w-48 p-4 border-r bg-gray-50">
      <button
        className={`block mb-2 text-left w-full ${selected === null ? 'font-bold text-blue-600' : ''}`}
        onClick={() => onSelect(null)}
        aria-pressed={selected === null}
      >
        All
      </button>
      {CATEGORIES.map(({ id, label }) => (
        <button
          key={id}
          className={`block mb-2 text-left w-full ${selected === id ? 'font-bold text-blue-600' : ''}`}
          onClick={() => onSelect(id)}
          aria-pressed={selected === id}
        >
          {label}
        </button>
      ))}
    </aside>
  );
}
