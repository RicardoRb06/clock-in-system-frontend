import { Text } from './Text';
interface CardProps {
    data: string;
    title: string;
    description: string;
    className?: string;
}

export function Card({data, title, description, className = ""}: CardProps){
    return (
        <div className={`w-full min-h-[200px] p-6 flex flex-col justify-between bg-scheme-bg-secondary border border-scheme-accent rounded-md ${className}`}>
            <Text variant="title" className="text-5xl tracking-tight">{data}</Text>
            <div>
                <Text variant="title">{title}</Text>
                <Text variant="body">{description}</Text>
            </div>
        </div>
    )
}