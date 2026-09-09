import { Banner } from '@/components/ui/Banner';
import { Button } from '../../../components/ui/Button';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { Section } from '@/components/parts/Section';
import { Card } from '@/components/ui/Card';
import { useNavigate } from 'react-router-dom';

export function HomePage () {
    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="flex-1 flex flex-col">
            <Section scheme="scheme-1" className="my-8">
                <Banner accent="Página inicial" title={`Olá, ${user?.name}`} description="Confira suas horas e atividades." />
                <div className="flex gap-4 mt-4">
                    <Button onClick={() => navigate("/tasks")}>Ver Tarefas</Button>
                    <Button onClick={() => navigate("/hours")}>Ver Horas</Button>
                </div>
            </Section>
            <Section scheme="scheme-3" className="flex-1">
                <Banner accent="Visão geral" title="Resumo" description="Acompanhe suas horas mensais e suas tarefas." />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 w-full">
                    <Card data="15h 45m" title="Horas" description="Horas alcançadas no mês"/>
                    <Card data="2" title="Tarefas pendentes" description="Atividades aguardando início."/>
                    <Card data="1" title="Tarefas atrasadas" description="Atividades além do prazo."/>
                    <Card data="8" title="Tarefas concluidas" description="Atividades finalizadas."/>
                </div>
            </Section>
        </div>
    )
}