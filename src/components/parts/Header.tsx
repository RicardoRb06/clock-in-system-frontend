import icon from '@/assets/icons/logoBranca.svg';
import { Text } from '@/components/ui/Text';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import type React from 'react';
import { Button } from '../ui/Button';

interface HeaderProps {
    scheme: "scheme-1" | "scheme-2" | "scheme-3" | "scheme-4";
    children?: React.ReactNode;
}

export function Header({ scheme = "scheme-1", children }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={`${scheme} w-full bg-scheme-bg relative`}>
            <div className="h-18 w-full p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src={icon} alt="Logo" className="h-12 w-auto object-contain" />
                    <Text scheme={scheme} variant="title">
                        IFNITE
                    </Text>
                </div>

                <div className="hidden md:flex items-center gap-3">
                    {children}
                </div>

                <Button 
                    variant="linkAlternative"
                    className="md:hidden flex items-center justify-center p-2"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-scheme-bg flex flex-col items-stretch gap-2 p-4 shadow-md z-50">
                    {children}
                </div>
            )}
        </header>
    );
}