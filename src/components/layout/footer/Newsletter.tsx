'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Newsletter() {
  return (
    <div className="w-full md:w-auto">
      <form className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          className="h-10 min-w-[280px]"
        />
        <Button type="submit" className="h-10 whitespace-nowrap">
          Subscribe
        </Button>
      </form>
    </div>
  );
} 