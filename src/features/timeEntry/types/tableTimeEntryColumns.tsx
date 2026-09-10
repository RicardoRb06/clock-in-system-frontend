import { Button } from '@/components/ui/Button';
import type { Column } from '@/components/ui/Table';
import type { AuthUser } from '@/features/auth/types/user';

export const timeEntryColumns: Column<AuthUser>[] = [
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
        render: () => (<Button>Ver horas</Button>),
    },
    {
        key: "timeEntry",
        label: "Abrir/Fechar Ponto",
        render: () => (<Button>Ver horas</Button>),
    },
];