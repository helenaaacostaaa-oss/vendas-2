
import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'hero' | 'heroGhost' | 'ghost' | 'outline' | 'sm';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      hero: "bg-primary text-primary-foreground shadow-[var(--shadow-glow-red)] hover:bg-primary/90 rounded-full font-bold uppercase tracking-wider",
      heroGhost: "border-2 border-primary text-primary hover:bg-primary/10 rounded-full font-bold uppercase tracking-wider",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      sm: "h-8 rounded-md px-3 text-xs"
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-12 rounded-full px-8",
      icon: "h-9 w-9",
    };

    const variantStyles = variants[variant as keyof typeof variants] || variants.default;
    const sizeStyles = sizes[size as keyof typeof sizes] || sizes.default;

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
