import { Button } from '../components/ui/Button';

export function TestPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-pageBg">
            <Button variant="primary">Aperte aqui</Button>
            <Button variant="primaryAlternative">Aperte aqui</Button>
            <Button variant="secondary">Aperte aqui</Button>
            <Button variant="secondaryAlternative">Aperte aqui</Button>
            <Button variant="link">Aperte aqui</Button>
            <Button variant="linkAlternative">Aperte aqui</Button>
        </div>
    );
}