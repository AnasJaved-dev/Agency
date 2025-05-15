'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check } from 'lucide-react';

interface Plan {
  name: string;
  monthly: number;
  description: string;
  features: string[];
  popular: boolean;
}

export function YouTubePricingSection() {
  const router = useRouter();
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans: Plan[] = [
    {
      name: 'Starter',
      monthly: 349,
      description: 'Perfect for new creators',
      features: [
        'Channel Audit & Strategy',
        'SEO Optimization (5 videos)',
        'Thumbnail Design (5 videos)',
        'Basic Analytics Report',
        'Email Support',
      ],
      popular: false,
    },
    {
      name: 'Growth',
      monthly: 699,
      description: 'For growing channels',
      features: [
        'Everything in Starter',
        'SEO Optimization (15 videos)',
        'Thumbnail Design (15 videos)',
        'Advanced Analytics',
        'Competitor Analysis',
        'Priority Support',
        'Monthly Strategy Call',
      ],
      popular: true,
    },
    {
      name: 'Pro',
      monthly: 1199,
      description: 'For established creators',
      features: [
        'Everything in Growth',
        'Unlimited SEO Optimization',
        'Unlimited Thumbnail Design',
        'Custom Channel Art',
        'Video Script Review',
        '24/7 Priority Support',
        'Weekly Strategy Calls',
        'Custom Growth Strategy',
      ],
      popular: false,
    },
  ];

  // Calculate the displayed price
  const getPrice = (plan: Plan) => {
    if (isAnnual) {
      // 15% off for paying a year up front
      const annualTotal = plan.monthly * 12 * 0.85;
      return Math.round(annualTotal);
    }
    return plan.monthly;
  };

  const handleGetStarted = (plan: Plan) => {
    // Store the plan and price in localStorage
    localStorage.setItem(
      'projectSelections',
      JSON.stringify([{ id: plan.name.toLowerCase(), extraDesigns: 0, extraRevisions: 0 }])
    );
    localStorage.setItem('projectSubtotal', JSON.stringify(getPrice(plan)));
    router.push('/youtube/project-form');
  };

  return (
    <section className="py-24 bg-white">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">YouTube Growth Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan to accelerate your YouTube channel growth
          </p>

          {/* Toggle */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex rounded-lg border border-gray-200 p-1">
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  !isAnnual ? 'bg-indigo-600 text-white' : 'text-gray-600'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  isAnnual ? 'bg-indigo-600 text-white' : 'text-gray-600'
                }`}
              >
                Annual (Save 15%)
              </button>
            </div>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const price = getPrice(plan);
            const suffix = isAnnual ? '/year' : '/month';
            const isSelected = selectedPlan === plan.name;

            return (
              <div
                key={plan.name}
                onClick={() => setSelectedPlan(plan.name)}
                className={`
                  p-6 rounded-2xl border-2 flex flex-col cursor-pointer transition
                  ${isSelected
                    ? 'border-indigo-600 bg-indigo-50'
                    : plan.popular
                    ? 'border-indigo-600'
                    : 'border-gray-200'}
                `}
              >
                {plan.popular && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-indigo-600 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>

                {/* FEATURES */}
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-indigo-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* PRICE */}
                <div className="mb-6">
                  <span className="text-4xl font-bold">${price}</span>
                  <span className="text-gray-600">{suffix}</span>
                </div>

                {/* GET STARTED */}
                <button
                  type="button"
                  onClick={() => handleGetStarted(plan)}
                  className={`
                    w-full py-3 px-4 rounded-lg font-medium transition
                    ${plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}
                  `}
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
