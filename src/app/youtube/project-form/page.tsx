'use client';

import ProjectForm from '@/components/forms/project-form';

export default function YouTubeProjectFormPage() {
  // load the same format from localStorage
  const selections = JSON.parse(localStorage.getItem('projectSelections') || '[]');
  const subtotal  = parseFloat(localStorage.getItem('projectSubtotal') || '0');

  return (
    <div className="flex">
      {/* Sidebar & summary */}
      <aside className="w-1/3 p-6 border-r sticky top-0 h-screen">
        <h2 className="text-xl font-semibold mb-4">Your Plan</h2>
        {selections.map((sel: any) => (
          <div key={sel.id} className="mb-4">
            <span className="font-medium">{sel.id}</span>
            <div>${subtotal.toFixed(2)}</div>
          </div>
        ))}
      </aside>

      {/* Form */}
      <main className="flex-1 p-6">
        <ProjectForm selections={selections} subtotal={subtotal} />
      </main>
    </div>
  );
}
