import type{ ComponentPropsWithoutRef, ElementType } from 'react';

interface TextProps extends ComponentPropsWithoutRef<'p'> {
    as?: ElementType,
    variant?: 'title' | 'subtitle' | 'body' | 'caption',

}

const variants = {
    title: 'text-2xl font-bold text-primary',
    subtitle: 'text-lg font-semibold text-gray-700',
    body: 'text-base font-normal text-gray-600',
    caption: 'text-sm text-gray-400',
};

export function Text({
    as: Component = 'p',
    variant = 'body',
    children = '',
    className = '',
    ...props
}: TextProps) {

    return (
        <Component className={variants[variant]} {...props}>
            {children}
        </Component>
    );
}