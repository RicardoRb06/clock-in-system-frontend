import { Table } from '@/components/ui/Table';
import { Section } from '../../../components/parts/Section';
import { timeEntryColumns } from '../types/timeEntryColumns';
import { useUsers } from '@/features/user/hooks/useUsers';
import { Banner } from '@/components/ui/Banner';
import { useTimeClock } from '../hooks/useTimeClock';
import { useTimeEntry } from '../hooks/useTimeEntry';
import SearchBar from '@/components/ui/SearchBar';
import { useMemo, useState } from 'react';

export function TimeEntryPage() {
    const [search, setSearch] = useState('');
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

    const handleSearch = (value: string) => {
        setSearch(value);
    };

    const filteredClosedUsers = useMemo(() => {
        const query = search.trim().toLowerCase();

        if (!query) {
            return closedUsers;
        }

        return closedUsers.filter((user) =>
            user._name.toLowerCase().includes(query)
        );
    }, [closedUsers, search]);

    return (
        <div className="flex-1 flex flex-col">
            <Section>
                <Banner accent="Tabela de pontos" title="Pontos abertos" description="Procure pelo seu nome na tabela para fechar seu ponto."/>
                <Table columns={timeEntryColumns({ buttonLabel: "Fechar Ponto", onAction: clockOutUser})} data={openUsers} className="mt-8"/>
            </Section>
            <Section scheme="scheme-3" className="flex-1">
                <div className="flex w-full justify-between items-end">
                    <Banner accent="Tabela de membros" title="Pontos fechados" description="Procure pelo seu nome na tabela ou pesquise para abrir seu ponto."/>
                    <SearchBar onSearch={handleSearch}/>
                </div>
                <Table columns={timeEntryColumns({ buttonLabel: "Abrir Ponto", onAction: clockInUser})} data={filteredClosedUsers} className="mt-8"/>
            </Section>
        </div>
    );
}