import { siteConfig } from '@/constants/site';

export default function Copyright() {
  return (
    <div className="text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Agency. All rights reserved.
    </div>
  );
} 