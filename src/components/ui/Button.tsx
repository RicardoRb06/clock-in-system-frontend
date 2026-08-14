import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
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
    "inline-flex items-center justify-center rounded-md font-medium disabled:pointer-events-none disabled:opacity-50";

    const variants = {
    primary:
      "bg-primary text-white hover:bg-secondary",

    secondary:
      "bg-white text-primary hover:bg-gray-100",
    };

    const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
            {...props}
        >
            {children}
        </button>
    );
}