import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="content-wrapper">
        {children}
      </div>
    </section>
  );
} 