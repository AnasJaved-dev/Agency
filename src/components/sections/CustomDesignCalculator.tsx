'use client';

import { useState } from 'react';

type DesignType = 'thumbnail' | 'post' | 'banner' | 'logo';

interface DesignOption {
  id: string;
  name: string;
  basePrice: number;
  sizes: {
    id: string;
    name: string;
    price: number;
  }[];
  revisions: {
    id: string;
    name: string;
    price: number;
  }[];
  addons: {
    id: string;
    name: string;
    price: number;
    description: string;
  }[];
}

const designOptions: Record<DesignType, DesignOption> = {
  thumbnail: {
    id: 'thumbnail',
    name: 'YouTube Thumbnail',
    basePrice: 49,
    sizes: [
      { id: 'standard', name: 'Standard (1280x720)', price: 0 },
      { id: 'custom', name: 'Custom Size', price: 10 }
    ],
    revisions: [
      { id: 'basic', name: '2 Revisions', price: 0 },
      { id: 'standard', name: '3 Revisions', price: 15 },
      { id: 'premium', name: 'Unlimited Revisions', price: 30 }
    ],
    addons: [
      { id: 'rush', name: 'Rush Delivery (24h)', price: 25, description: 'Get your design within 24 hours' },
      { id: 'source', name: 'Source Files', price: 20, description: 'Get all source files (PSD, AI)' },
      { id: 'animation', name: 'Simple Animation', price: 40, description: 'Add basic animation to your thumbnail' }
    ]
  },
  post: {
    id: 'post',
    name: 'Social Media Post',
    basePrice: 39,
    sizes: [
      { id: 'instagram', name: 'Instagram Post (1080x1080)', price: 0 },
      { id: 'facebook', name: 'Facebook Post (1200x630)', price: 0 },
      { id: 'twitter', name: 'Twitter Post (1200x675)', price: 0 },
      { id: 'custom', name: 'Custom Size', price: 10 }
    ],
    revisions: [
      { id: 'basic', name: '2 Revisions', price: 0 },
      { id: 'standard', name: '3 Revisions', price: 10 },
      { id: 'premium', name: 'Unlimited Revisions', price: 20 }
    ],
    addons: [
      { id: 'rush', name: 'Rush Delivery (24h)', price: 20, description: 'Get your design within 24 hours' },
      { id: 'source', name: 'Source Files', price: 15, description: 'Get all source files (PSD, AI)' },
      { id: 'carousel', name: 'Carousel Post (3 slides)', price: 30, description: 'Create a 3-slide carousel post' }
    ]
  },
  banner: {
    id: 'banner',
    name: 'Channel Banner',
    basePrice: 89,
    sizes: [
      { id: 'youtube', name: 'YouTube Banner (2560x1440)', price: 0 },
      { id: 'twitch', name: 'Twitch Banner (1920x480)', price: 0 },
      { id: 'custom', name: 'Custom Size', price: 15 }
    ],
    revisions: [
      { id: 'basic', name: '2 Revisions', price: 0 },
      { id: 'standard', name: '3 Revisions', price: 20 },
      { id: 'premium', name: 'Unlimited Revisions', price: 40 }
    ],
    addons: [
      { id: 'rush', name: 'Rush Delivery (24h)', price: 30, description: 'Get your design within 24 hours' },
      { id: 'source', name: 'Source Files', price: 25, description: 'Get all source files (PSD, AI)' },
      { id: 'animated', name: 'Animated Banner', price: 60, description: 'Add animation to your banner' }
    ]
  },
  logo: {
    id: 'logo',
    name: 'Logo Design',
    basePrice: 299,
    sizes: [
      { id: 'standard', name: 'Standard Package', price: 0 },
      { id: 'premium', name: 'Premium Package', price: 50 }
    ],
    revisions: [
      { id: 'basic', name: '3 Revisions', price: 0 },
      { id: 'standard', name: '5 Revisions', price: 50 },
      { id: 'premium', name: 'Unlimited Revisions', price: 100 }
    ],
    addons: [
      { id: 'rush', name: 'Rush Delivery (48h)', price: 50, description: 'Get your logo within 48 hours' },
      { id: 'source', name: 'Source Files', price: 40, description: 'Get all source files (AI, EPS, SVG)' },
      { id: 'branding', name: 'Basic Branding Guide', price: 80, description: 'Get a basic branding guide with your logo' }
    ]
  }
};

export function CustomDesignCalculator() {
  const [selectedType, setSelectedType] = useState<DesignType>('thumbnail');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedRevision, setSelectedRevision] = useState('');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);

  const currentDesign = designOptions[selectedType];

  const calculateTotal = () => {
    let total = currentDesign.basePrice;

    // Add size price
    const size = currentDesign.sizes.find(s => s.id === selectedSize);
    if (size) total += size.price;

    // Add revision price
    const revision = currentDesign.revisions.find(r => r.id === selectedRevision);
    if (revision) total += revision.price;

    // Add addon prices
    selectedAddons.forEach(addonId => {
      const addon = currentDesign.addons.find(a => a.id === addonId);
      if (addon) total += addon.price;
    });

    return total * quantity;
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Custom Design Calculator</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Customize your design exactly how you want it
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Options */}
            <div className="space-y-8">
              {/* Design Type Selection */}
              <div>
                <h3 className="text-lg font-medium mb-4">Select Design Type</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.values(designOptions).map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedType(option.id as DesignType)}
                      className={`p-4 rounded-lg border-2 text-left ${
                        selectedType === option.id
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'border-gray-200 hover:border-indigo-200'
                      }`}
                    >
                      <div className="font-medium">{option.name}</div>
                      <div className="text-sm text-gray-500">From ${option.basePrice}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-lg font-medium mb-4">Select Size</h3>
                <div className="space-y-3">
                  {currentDesign.sizes.map((size) => (
                    <label
                      key={size.id}
                      className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-indigo-200 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="size"
                        value={size.id}
                        checked={selectedSize === size.id}
                        onChange={(e) => setSelectedSize(e.target.value)}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      />
                      <div className="ml-3">
                        <div className="font-medium">{size.name}</div>
                        {size.price > 0 && (
                          <div className="text-sm text-gray-500">+${size.price}</div>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Revision Selection */}
              <div>
                <h3 className="text-lg font-medium mb-4">Select Revisions</h3>
                <div className="space-y-3">
                  {currentDesign.revisions.map((revision) => (
                    <label
                      key={revision.id}
                      className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-indigo-200 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="revision"
                        value={revision.id}
                        checked={selectedRevision === revision.id}
                        onChange={(e) => setSelectedRevision(e.target.value)}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      />
                      <div className="ml-3">
                        <div className="font-medium">{revision.name}</div>
                        {revision.price > 0 && (
                          <div className="text-sm text-gray-500">+${revision.price}</div>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Addons Selection */}
              <div>
                <h3 className="text-lg font-medium mb-4">Select Addons</h3>
                <div className="space-y-3">
                  {currentDesign.addons.map((addon) => (
                    <label
                      key={addon.id}
                      className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-indigo-200 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedAddons.includes(addon.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedAddons([...selectedAddons, addon.id]);
                          } else {
                            setSelectedAddons(selectedAddons.filter(id => id !== addon.id));
                          }
                        }}
                        className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <div className="ml-3">
                        <div className="font-medium">{addon.name}</div>
                        <div className="text-sm text-gray-500">{addon.description}</div>
                        <div className="text-sm text-indigo-600">+${addon.price}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div>
                <h3 className="text-lg font-medium mb-4">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="text-xl font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Summary */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Base Price</span>
                  <span>${currentDesign.basePrice}</span>
                </div>
                
                {selectedSize && (
                  <div className="flex justify-between text-gray-600">
                    <span>Size</span>
                    <span>+${currentDesign.sizes.find(s => s.id === selectedSize)?.price || 0}</span>
                  </div>
                )}
                
                {selectedRevision && (
                  <div className="flex justify-between text-gray-600">
                    <span>Revisions</span>
                    <span>+${currentDesign.revisions.find(r => r.id === selectedRevision)?.price || 0}</span>
                  </div>
                )}
                
                {selectedAddons.map(addonId => {
                  const addon = currentDesign.addons.find(a => a.id === addonId);
                  return addon ? (
                    <div key={addonId} className="flex justify-between text-gray-600">
                      <span>{addon.name}</span>
                      <span>+${addon.price}</span>
                    </div>
                  ) : null;
                })}
                
                {quantity > 1 && (
                  <div className="flex justify-between text-gray-600">
                    <span>Quantity</span>
                    <span>x{quantity}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>${calculateTotal()}</span>
                </div>
              </div>

              <button
                className="w-full mt-6 bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 