import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/constants/services';

export default function ServicesSection() {
  return (
    <section className="section-wrapper section-spacing bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Expert solutions to help your content and brand stand out
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  iconBg,
  title,
  subtitle,
  items,
  href,
  linkColor,
  checkColor,
}: {
  icon: React.ElementType;
  iconBg: string;
  title: string;
  subtitle: string;
  items: string[];
  href: string;
  linkColor: string;
  checkColor: string;
}) {
  return (
    <div className="flex flex-col p-6 rounded-lg bg-background border-border border shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-lg ${iconBg}`}>
          <Icon className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      <ul className="space-y-4 mb-6" role="list">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle2 className={`w-5 h-5 ${checkColor} mt-0.5 flex-shrink-0`} />
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={`inline-flex items-center font-medium hover:underline mt-auto ${linkColor}`}
      >
        Learn More →
      </Link>
    </div>
  );
}
