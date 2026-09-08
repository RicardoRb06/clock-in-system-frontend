import icon from '@/assets/icons/logoBranca.svg';
import { Text } from '@/components/ui/Text';
import type React from 'react';

interface HeaderProps {
    scheme: "scheme-1" | "scheme-2" | "scheme-3" | "scheme-4";
    children?: React.ReactNode;
}

export function Header({ scheme = "scheme-1", children }: HeaderProps) {
    return (
        <header className={`${scheme} w-full h-18 bg-scheme-bg p-4 flex items-center justify-between `}>
            <div className="flex items-center gap-3">
                <img src={icon} alt="Logo" className="h-12 w-auto object-contain" />
                <Text scheme={scheme} variant="title" className="text-2xl">
                    IFNITE
                </Text>
            </div>
            <div>
                {children}
            </div>
        </header>
    );
}