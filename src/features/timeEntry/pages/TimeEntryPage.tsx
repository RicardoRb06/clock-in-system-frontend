import { Table } from '@/components/ui/Table';
import { Section } from '../../../components/parts/Section';
import { timeEntryColumns } from '../types/timeEntryColumns';
import { useUsers } from '@/features/user/hooks/useUsers';
import { Banner } from '@/components/ui/Banner';
import { useTimeClock } from '../hooks/useTimeClock';
import { useTimeEntry } from '../hooks/useTimeEntry';

export function TimeEntryPage() {
    const { users, updateUser } = useUsers()
    const { openUsers, closedUsers } = useTimeClock(users);
    const { clockInUser, clockOutUser} = useTimeEntry({
        onClockIn: (user) => {
            updateUser(user._id, {
                _isWorking: true,
            });
        },

        onClockOut: (user) => {
            updateUser(user._id, {
                _isWorking: false,
            });
        },
    });

    return (
        <div className="flex-1 flex flex-col">
            <Section>
                <Banner accent="Tabela de pontos" title="Pontos abertos" description="Procure pelo seu nome na tabela para fechar seu ponto."/>
                <Table columns={timeEntryColumns({ buttonLabel: "Fechar Ponto", onAction: clockOutUser})} data={openUsers} className="mt-4"/>
            </Section>
            <Section scheme="scheme-3" className="flex-1">
                <Banner accent="Tabela de membros" title="Pontos fechados" description="Procure pelo seu nome na tabela ou pesquise para abrir seu ponto."/>
                <Table columns={timeEntryColumns({ buttonLabel: "Abrir Ponto", onAction: clockInUser})} data={closedUsers} className="mt-4"/>
            </Section>
        </div>
    );
}