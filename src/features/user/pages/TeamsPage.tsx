import { Section } from "@/components/parts/Section";
import { Banner } from "@/components/ui/Banner";
import { Table } from "@/components/ui/Table";

interface User {
  id: number;
  name: string;
  role: string;
}
 
const columns: { key: keyof User; label: string }[] = [
  { key: "name", label: "Nome" },
  { key: "role", label: "Cargo" },
  { key: "category", label: "Equipe" },
];
 
const data: User[] = [
  { id: 1, name: "Ana Souza", role: "Designer", category: "Futebol 2D" },
  { id: 2, name: "Bruno Lima", role: "Dev", category: "Futebol 2D" },
];

export function TeamsPage() {
    return (
        <div className="flex-1 flex flex-col">
            <Section className="my-8">
                <Banner accent="Equipes" title="Equipes e Membros" description="Confira as equipes e os seus respectivos membros." />
            </Section>
            <Section className="flex-1">
                <Table columns={columns} data={data}/>
            </Section>
        </div>
    )
}