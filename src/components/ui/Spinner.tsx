interface SpinnerProps {
    src: string;
    size?: 'sm' | 'md' | 'lg';
    alt?: string;
    className?: string;
}

export function Spinner({
    src,
    size = 'md',
    alt = 'Carregando...',
    className = "",
}: SpinnerProps) {

    const sizes = {
        sm: 'w-12 h-12',
        md: 'w-22 h-22',
        lg: 'w-36 h-36',
    };

    return (
        <div>
            <img src={src} alt={alt} className={`animate-spin ${sizes[size]} ${className}`} />
        </div>
    );
}