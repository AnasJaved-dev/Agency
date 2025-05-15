'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function GraphicDesignPricing() {
  const router = useRouter();
  const DESIGN_SURCHARGE = 10; // per extra design
  const REVISION_SURCHARGE = 5; // per extra revision

  const services = [
    { id: 'thumbnail', name: 'YouTube Thumbnails', basePrice: 15, pitch: 'Boost your CTR with custom thumbnails', features: ['1 design', 'Clickbait + clean options', 'PNG, PSD', '1–2 days', '2 revisions'] },
    { id: 'post', name: 'Social Media Posts', basePrice: 12, pitch: 'Engagement-driven post templates', features: ['Platform sizes', 'Editable PSD/Canva', '2–4 days', '2 revisions'] },
    { id: 'ads', name: 'Ads (Static/Animated)', basePrice: 25, pitch: 'Scroll-stopping ad creatives', features: ['All sizes', 'JPG/PNG/GIF/MP4', '2–5 days', '2 revisions'] },
    { id: 'poster', name: 'Posters', basePrice: 30, pitch: 'Print & digital posters', features: ['Custom size', 'PDF/PNG', '2–3 days', '2 revisions'] },
  ];

  // State: includes custom options + selection flag
  const [customOptions, setCustomOptions] = useState(
    services.reduce((acc, s) => {
      acc[s.id] = { extraDesigns: 0, extraRevisions: 0, selected: false, expanded: false };
      return acc;
    }, {} as Record<string, { extraDesigns: number; extraRevisions: number; selected: boolean; expanded: boolean }>)
  );

  // Toggle selection for a service
  const toggleSelect = (id: string) => {
    setCustomOptions(prev => ({
      ...prev,
      [id]: { ...prev[id], selected: !prev[id].selected },
    }));
  };

  // Toggle expansion of customization options
  const toggleExpand = (id: string) => {
    setCustomOptions(prev => ({
      ...prev,
      [id]: { ...prev[id], expanded: !prev[id].expanded },
    }));
  };

  // Change extra designs or revisions count
  const changeOption = (id: string, field: 'extraDesigns' | 'extraRevisions', delta: number) => {
    setCustomOptions(prev => {
      const value = Math.max(0, prev[id][field] + delta);
      return { ...prev, [id]: { ...prev[id], [field]: value } };
    });
  };

  // Continue to project details form
  const handleContinue = () => {
    const selectedServices = Object.entries(customOptions)
      .filter(([_, opts]) => opts.selected)
      .map(([id, opts]) => ({ id, ...opts }));
    localStorage.setItem('projectSelections', JSON.stringify(selectedServices));
    router.push('design/project-form');
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Our Services & Pricing
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Select services and customize extras, then continue to provide your project details.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {services.map(s => {
            const opts = customOptions[s.id];
            const totalPrice = s.basePrice + opts.extraDesigns * DESIGN_SURCHARGE + opts.extraRevisions * REVISION_SURCHARGE;
            return (
              <div key={s.id} className="p-4 xl:w-1/3 md:w-1/2 w-full">
                <div className={`h-full p-6 rounded-lg border-2 ${opts.selected ? 'border-indigo-500' : 'border-gray-300'} flex flex-col relative overflow-hidden`}>
                  <label className="absolute top-4 right-4 flex items-center">
                    <input
                      type="checkbox"
                      checked={opts.selected}
                      onChange={() => toggleSelect(s.id)}
                      className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                  </label>
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                    {s.name.toUpperCase()}
                  </h2>
                  <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span>${totalPrice}</span>
                  </h1>
                  <p className="text-gray-600 mb-4 text-sm">{s.pitch}</p>
                  {s.features.map((feat, i) => (
                    <p key={i} className="flex items-center text-gray-600 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      {feat}
                    </p>
                  ))}
                  <button onClick={() => toggleExpand(s.id)} className="mt-2 text-indigo-500 text-sm focus:outline-none">
                    {opts.expanded ? 'Hide options' : 'Customize +'}
                  </button>
                  {opts.expanded && (
                    <div className="mt-4 space-y-4">
                      {/* Extra designs */}
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Extra designs (+${DESIGN_SURCHARGE} each)</span>
                        <div className="flex items-center space-x-2">
                          <button onClick={() => changeOption(s.id, 'extraDesigns', -1)} className="px-2 py-1 border rounded">-</button>
                          <span>{opts.extraDesigns}</span>
                          <button onClick={() => changeOption(s.id, 'extraDesigns', 1)} className="px-2 py-1 border rounded">+</button>
                        </div>
                      </div>
                      {/* Extra revisions */}
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Extra revisions (+${REVISION_SURCHARGE} each)</span>
                        <div className="flex items-center space-x-2">
                          <button onClick={() => changeOption(s.id, 'extraRevisions', -1)} className="px-2 py-1 border rounded">-</button>
                          <span>{opts.extraRevisions}</span>
                          <button onClick={() => changeOption(s.id, 'extraRevisions', 1)} className="px-2 py-1 border rounded">+</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/* Continue button leading to form */}
        <div className="mt-8 flex justify-center">
          <button onClick={handleContinue} className="text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none font-medium rounded-lg text-lg px-6 py-3">
            Continue to Project Details
          </button>
        </div>
      </div>
    </section>
  );
}
