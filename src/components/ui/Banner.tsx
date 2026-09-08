import { Text } from './Text';

interface BannerProps {
    accent?: string;
    title?: string;
    description?: string;
    className?: string;
}

export function Banner ({ accent, title, description, className = ''}: BannerProps){
    return(
        <div className={`flex flex-col ${className}`}>
            <Text variant="accent" className="text-[16px] font-semibold leading-none">{accent}</Text>
            <Text variant="title" className="text-[40px] leading-tight">{title}</Text>
            <Text variant="body" className="text-l text-neutral-800 mt-4">{description}</Text>
        </div>
    )
}