import { CheckCircle2 } from 'lucide-react';
import { pricingPackages, customItems } from '@/constants/pricing';
import { Button } from '@/components/ui/button';

export default function PricingSection() {
  return (
    <section className="section-wrapper section-spacing bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing, Real Results</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose a plan or build your own – we're flexible.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* YouTube Packages */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-primary">🎯</span> YouTube Management
            </h3>
            <div className="grid gap-6">
              {pricingPackages
                .filter(pkg => pkg.category === 'youtube')
                .map(pkg => (
                  <div key={pkg.id} className="p-6 rounded-lg border border-border bg-background shadow-sm">
                    <h4 className="text-xl font-semibold mb-2">{pkg.title}</h4>
                    <p className="text-muted-foreground mb-4">{pkg.price}</p>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="default" className="w-full">Get Started</Button>
                  </div>
                ))}
            </div>
          </div>

          {/* Design Packages */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-secondary">🎨</span> Graphic Design
            </h3>
            <div className="grid gap-6">
              {pricingPackages
                .filter(pkg => pkg.category === 'design')
                .map(pkg => (
                  <div key={pkg.id} className="p-6 rounded-lg border border-border bg-background shadow-sm">
                    <h4 className="text-xl font-semibold mb-2">{pkg.title}</h4>
                    <p className="text-muted-foreground mb-4">{pkg.price}</p>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="default" className="w-full">Get Started</Button>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Custom Services */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-2xl font-semibold mb-4">Need Something Custom?</h3>
          <p className="text-muted-foreground mb-8">
            Not every project fits a package. We offer à la carte services tailored to your needs.
          </p>

          {/* Custom Item Pricing Table */}
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-4 font-medium text-left">Service</th>
                  <th className="p-4 font-medium text-left">Starting Price</th>
                </tr>
              </thead>
              <tbody>
                {customItems.map((item, index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="p-4">{item.service}</td>
                    <td className="p-4 font-medium">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Custom Quote CTA */}
          <div className="mt-8 text-center">
            <Button variant="outline">Request a Custom Quote</Button>
          </div>
        </div>
      </div>
    </section>
  );
} 