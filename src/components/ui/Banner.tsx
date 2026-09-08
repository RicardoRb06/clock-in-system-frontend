import { Text } from './Text';

interface BannerProps {
    accent?: string;
    title?: string;
    description?: string;
    className?: string;
}

export function Banner ({ accent, title, description, className = ''}: BannerProps){
    return(
        <div className={`flex flex-col gap-1${className}`}>
            <Text variant="accent" className="text-[16px] font-semibold">{accent}</Text>
            <Text variant="title" className="text-[40px]">{title}</Text>
            <Text variant="body" className="text-l text-neutral-800 mt-1">{description}</Text>
        </div>
    )
}