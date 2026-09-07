import icon from '@/assets/icons/logoBranca.svg';
import { Text } from '@/components/ui/Text';
import { Button } from '../ui/Button';

interface HeaderProps {
    userName: string;
    showLogoutOnly?: boolean;
}

export function Header({ userName, showLogoutOnly = false }: HeaderProps) {
    return (
        <header className="w-full h-18 bg-white border-b border-gray-200 p-4 flex items-center justify-between  shadow-sm">
            <div className="flex items-center gap-3">
                <img src={icon} alt="Logo" className="h-14 w-auto object-contain" />
                <Text variant="title" className="text-2xl">
                    IFNITE
                </Text>
            </div>
        </header>
    );
}