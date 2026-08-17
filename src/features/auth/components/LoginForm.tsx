import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom"
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import { Text } from "../../../components/ui/Text"

export function LoginForm() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { executeLogin, loading, error } = useLogin();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await executeLogin(name, password);

        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
                <Button type="submit" disabled={loading}>
                    {loading ? "Entrando ..." : "Entrar"}
                </Button>

                <Button type="button" onClick={() => navigate("/register")}>
                    Criar conta
                </Button>
            </div>
        </form>
    );
}