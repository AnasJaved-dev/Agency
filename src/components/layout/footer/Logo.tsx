import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="inline-block">
      <span className="text-2xl font-bold text-foreground">Agency</span>
    </Link>
  );
} 