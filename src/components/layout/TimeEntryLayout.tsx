import { Outlet } from "react-router-dom";
import { Header } from "../parts/Header";
import { Footer } from '../parts/Footer';
import { Button } from "../ui/Button";
import { useAuth } from "@/features/auth/hooks/useAuth";

export function TimeEntryLayout() {
    const { logout } = useAuth()

    return (
        <div className="min-h-dvh flex flex-col">
            <Header scheme="scheme-2">
                <Button variant="linkAlternative" onClick={() => logout()}>Sair</Button>
            </Header>
            <Outlet />
            <Footer scheme="scheme-2"/>
        </div>
    );
}