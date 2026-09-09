import { Header } from "../parts/header";
import { Footer } from '../parts/Footer';
import { Button } from '../ui/Button';
import { Outlet, useNavigate } from "react-router-dom";

export function UserLayout(){
    const navigate = useNavigate();

    return(
        <div className="min-h-dvh flex flex-col">
            <Header scheme="scheme-2">
                <Button variant="linkAlternative" onClick={() => navigate("/homepage")}>Página inicial</Button>
                <Button variant="linkAlternative" onClick={() => navigate("/hours")}>Minhas horas</Button>
                <Button variant="linkAlternative" onClick={() => navigate("/tasks")}>Tarefas</Button>
                <Button variant="linkAlternative" onClick={() => navigate("/Teams")}>Equipes</Button>
            </Header>
            <Outlet />
            <Footer scheme="scheme-2"/>
        </div>
    )
}