import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTAButton() {
  return (
    <Link
      href="/contact"
      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-inverted hover:bg-primary-hover transition-colors text-body font-medium"
    >
      Get Started
      <ArrowRight className="ml-2 w-5 h-5" />
    </Link>
  );
} 