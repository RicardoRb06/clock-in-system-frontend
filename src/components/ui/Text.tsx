import type{ ComponentPropsWithoutRef, ElementType } from 'react';

interface TextProps extends ComponentPropsWithoutRef<'p'> {
    as?: ElementType,
    scheme?: "scheme-1" | "scheme-2" | "scheme-3" | "scheme-4",
    variant?: 'title' | 'body' | 'accent' | 'caption' | 'error',

}

const variants = {
    title: 'text-2xl text-scheme-title font-semibold',
    body: 'text-base text-scheme-text',
    accent: 'text-lg text-scheme-accent',
    caption: 'text-sm text-scheme-text',
    error: 'text-sm text-red-500',
};

export function Text({
    as: Component = 'p',
    variant = 'body',
    scheme = 'scheme-1',
    children = '',
    className = '',
    ...props
}: TextProps) {

    return (
        <Component className={`${variants[variant]} ${scheme} ${className}`} {...props}>
            {children}
        </Component>
    );
}