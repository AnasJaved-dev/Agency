import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-primary text-inverted hover:bg-[var(--color-primary-hover)]': variant === 'default',
            'border border-border bg-background hover:bg-gray-50 hover:text-primary hover:border-primary': variant === 'outline',
            'hover:bg-gray-50 hover:text-primary': variant === 'ghost',
            'h-10 px-4 py-2 text-body': size === 'default',
            'h-9 px-3 text-body-sm': size === 'sm',
            'h-11 px-8 text-body-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button }; 