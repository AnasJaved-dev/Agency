import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      {/* Replace with your actual logo */}
      <div className="w-10 h-10 bg-primary rounded-lg" />
      <span className="text-heading-3 text-foreground">Agency</span>
    </Link>
  );
} 