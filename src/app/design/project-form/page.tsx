// File: src/app/design/project-form/page.tsx

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProjectForm from '@/components/forms/project-form';

interface Selection {
  id: string;
  extraDesigns: number;
  extraRevisions: number;
}

interface ServiceInfo {
  id: string;
  name: string;
  basePrice: number;
}

const SERVICE_CATALOG: Record<string, ServiceInfo> = {
  thumbnail: { id: 'thumbnail', name: 'YouTube Thumbnails', basePrice: 15 },
  post: { id: 'post', name: 'Social Media Posts', basePrice: 12 },
  ads: { id: 'ads', name: 'Ads (Static/Animated)', basePrice: 25 },
  poster: { id: 'poster', name: 'Posters', basePrice: 30 },
};

export default function ProjectFormPage() {
  const router = useRouter();
  const [selections, setSelections] = useState<Selection[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem('projectSelections');
    if (!raw) {
      router.push('/design');
      return;
    }
    try {
      setSelections(JSON.parse(raw));
    } catch {
      router.push('/design');
    }
  }, [router]);

  const subtotal = selections.reduce((sum, sel) => {
    const info = SERVICE_CATALOG[sel.id];
    const extras = sel.extraDesigns * 10 + sel.extraRevisions * 5;
    return sum + info.basePrice + extras;
  }, 0);

  return (
    <div className="container mx-auto px-5 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Summary */}
        <aside className="lg:w-1/3 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Your Selection</h2>
          <ul className="space-y-3">
            {selections.map((sel) => {
              const info = SERVICE_CATALOG[sel.id];
              const extras = sel.extraDesigns * 10 + sel.extraRevisions * 5;
              const price = info.basePrice + extras;
              return (
                <li key={sel.id} className="flex justify-between">
                  <span>
                    {info.name} × 1
                    {sel.extraDesigns > 0 && <em> +{sel.extraDesigns} designs</em>}
                    {sel.extraRevisions > 0 && <em> +{sel.extraRevisions} revs</em>}
                  </span>
                  <span>${price}</span>
                </li>
              );
            })}
          </ul>
          <div className="border-t mt-4 pt-4 font-bold flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <button
            onClick={() => router.push('/design')}
            className="mt-6 text-indigo-500 underline"
          >
            Edit Selections
          </button>
        </aside>

        {/* Project Form Component */}
        <div className="lg:w-2/3">
          <ProjectForm subtotal={subtotal} selections={selections} />
        </div>
      </div>
    </div>
  );
}
