import { Text } from './Text';

interface BannerProps {
    scheme: "scheme-1" | "scheme-2" | "scheme-3" | "scheme-4";
    accent?: string;
    title?: string;
    description?: string;
    className?: string;
}

export function Banner ({scheme = 'scheme-1', accent, title, description, className = ''}: BannerProps){
    return(
        <div className={`${scheme} flex flex-col gap-1${className}`}>
            <Text variant="accent" className="text-[16px] font-semibold">{accent}</Text>
            <Text variant="title" className="text-[40px]">{title}</Text>
            <Text variant="body" className="text-l text-neutral-800 mt-1">{description}</Text>
        </div>
    )
}