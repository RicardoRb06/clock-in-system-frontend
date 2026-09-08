import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'primaryAlternative' | 'secondary' | 'secondaryAlternative' | 'link' | 'linkAlternative';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  
    const baseStyles =
    "font-inter text-base font-medium normal-case tracking-[0.01em] px-4 py-2.5 rounded-md transition-colors duration-200 ease-in-out cursor-pointer";

    const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-hover",

    primaryAlternative:
      "bg-white text-neutral hover:bg-neutral/10",

    secondary:
      "bg-transparent text-primary border border-neutral/25 hover:bg-primary/5",

    secondaryAlternative:
      "bg-transparent text-white border border-white/25 hover:bg-white/10",

    link:
      "bg-transparent text-neutral border-0 rounded-none px-0 py-0 hover:text-primary",

    linkAlternative:
      "bg-transparent text-white border-0 rounded-none px-0 py-0 hover:text-primary",
  };

    const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}