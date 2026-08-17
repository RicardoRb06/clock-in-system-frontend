import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom"
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import { Text } from "../../../components/ui/Text"

export function LoginForm() {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const { executeLogin, loading, error } = useLogin();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let valid = true;

        if(!name.trim()){
            setNameError("Nome é obrigatório");
            valid = false;
        } else {
            setNameError("")
        }

        if(!password.trim()){
            setPasswordError("Senha é obrigatória");
            valid = false;
        } else {
            setPasswordError("");
        }

        if(!valid){
            return;
        }

        const response = await executeLogin(name, password);

        if(response.success){
            navigate("/");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <label htmlFor="name">
                    <Text variant="body">Nome</Text>
                </label>

                <Input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    error={nameError}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="username"
                    placeholder="Digite seu nome"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="password">
                    <Text variant="body">Senha</Text>
                </label>

                <Input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    error={passwordError}
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
            {error && <Text variant="error">{error}</Text>}
        </form>
    );
}