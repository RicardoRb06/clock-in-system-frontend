import { Outlet } from 'react-router-dom';
import { Header } from '../parts/Header';
import { Button } from '../ui/Button';
import { Footer } from '../parts/Footer';

export function TestLayout() {
    return (
        <div>
            <Header scheme="scheme-2">
                <Button variant="linkAlternative">Aperte aqui</Button>
                <Button variant="linkAlternative">Aperte aqui</Button>
                <Button variant="linkAlternative">Aperte aqui</Button>
            </Header>
            <Outlet />
            <Footer scheme="scheme-2" />
        </div>
    );
}