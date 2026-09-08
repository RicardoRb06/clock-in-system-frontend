import { Header } from "../parts/header";
import { Footer } from '../parts/Footer';
import { Button } from '../ui/Button';
import { Outlet } from "react-router-dom";
import { Section } from "../parts/Section";

export function UserLayout(){
    return(
        <div className="min-h-screen flex flex-col">
            <Header scheme="scheme-2">
                <Button variant="linkAlternative">Página inicial</Button>
                <Button variant="linkAlternative">Minhas horas</Button>
                <Button variant="linkAlternative">Tarefas</Button>
                <Button variant="linkAlternative">Equipes</Button>
            </Header>
            <Section className="flex-1">
                <Outlet />
            </Section>
            <Footer scheme="scheme-2"/>
        </div>
    )
}