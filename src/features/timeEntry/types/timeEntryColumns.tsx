import { Button } from '@/components/ui/Button';
import type { Column } from '@/components/ui/Table';
import type { AuthUser } from '@/features/auth/types/user';
import { Lock } from 'lucide-react';

interface TimeEntryColumnsOptions {
    columnLabel: string;
    buttonLabel: string;
    onAction: (user: AuthUser) => void;
}

export function timeEntryColumns({ buttonLabel, onAction}: TimeEntryColumnsOptions): Column<AuthUser>[] {
    return [
        {
            key: "name",
            label: "Nome",
            render: (user) => user._name,
        },
        {
            key: "category",
            label: "Equipe",
            render: (user) => user._category ?? "Nenhuma",
        },
        {
            key: "role",
            label: "Cargo",
            render: (user) => user._role,
        },
        {
            key: "hours",
            label: "Ver Horas",
            render: () => (<Button variant="link"><Lock /></Button>),
        },
        {
            key: "timeEntry",
            label: "Ponto",
            render: () => (<Button onClick={() => onAction(user)}>{buttonLabel}</Button>),
        },
    ]
};