import { useState } from "react";
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import { Text } from "../../../components/ui/Text"

export function LoginForm() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className="flex flex-col gap-5">
            <div className="mb-2">
                <Text variant="title">IFNITE</Text>
            </div>

            <div className="flex flex-col">
                <label htmlFor="name">
                    <Text variant="body">Nome</Text>
                </label>

                <Input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="username"
                    placeholder="Digite seu nome"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="password">
                    <Text variant="body">Senha</Text>
                </label>

                <Input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    placeholder="Digite sua senha"
                />
            </div>

            <div className="flex flex-row gap-3 pt-2">
                <Button type="submit">
                    Entrar
                </Button>

                <Button type="button">
                    Criar conta
                </Button>
            </div>
        </form>
    );
}