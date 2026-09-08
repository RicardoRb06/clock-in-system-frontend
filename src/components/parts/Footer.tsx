import icon from '@/assets/icons/logoBranca.svg';
import { Text } from '../ui/Text';
import { Button } from '../ui/Button';


interface FooterProps {
    scheme: "scheme-1" | "scheme-2" | "scheme-3" | "scheme-4";
}

export function Footer({ scheme = "scheme-1" }: FooterProps) {
    return (
        <footer className={`${scheme} w-full bg-scheme-bg border-t border-scheme-border`}>
            <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <img src={icon} alt="Logo" className="h-10 w-auto object-contain" />
                    <Text scheme={scheme} variant="title">
                        IFNITE
                    </Text>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="linkAlternative" onClick={() => window.open('https://www.instagram.com/ifnite_/', '_blank', 'noopener,noreferrer')}>Instagram</Button>
                    <Button variant="linkAlternative" onClick={() => window.open('https://github.com/IFnite-Robotica', '_blank', 'noopener,noreferrer')}>Github</Button>
                </div>
            </div>

            <div className="border-t border-scheme-border">
                <div className="max-w-7xl mx-auto p-4 flex items-center justify-center">
                    <Text scheme={scheme} variant="body" className="text-sm opacity-70">
                        Desenvolvido pela equipe de Simulação de Futebol 2D
                    </Text>
                </div>
            </div>
        </footer>
    );
}