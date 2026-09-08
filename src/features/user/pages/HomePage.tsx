import { Banner } from '@/components/ui/Banner';
import { Button } from '../../../components/ui/Button';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { Section } from '@/components/parts/Section';

export function HomePage () {
    const { user } = useAuth();

    return (
        <div className="h-full flex flex-col">
            <Section scheme="scheme-1">
                <Banner accent="Página inicial" title={`Olá, ${user?.name}`} description="Confira suas tarefas e atividades." />
                <div>
                    <Button>Ver Tarefas</Button>
                    <Button>Ver Horas</Button>
                </div>
            </Section>
        </div>
    )
}