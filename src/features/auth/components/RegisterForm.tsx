import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import { Text } from "../../../components/ui/Text"
import { useRegister } from '../hooks/useRegister';
import { Select } from '../../../components/ui/Select';

const categoryOptions = [
    { value: "NONE", label: "Nenhum"},
    { value: "COMBAT", label: "Combate"},
    { value: "MARKETING", label: "Marketing"},
    { value: "LINE_CHASER", label: "Seguidor de Linha"},
    { value: "SOCCER_2D", label: "Simulação de Futebol 2D"},
    { value: "SUMO", label: "Sumô"},
];

export function RegisterForm() {
    const [name, setName] =  useState('');
    const [nameError, setNameError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordConfirmError, setPasswordConfirmError] = useState('');
    const [category, setCategory] = useState<string | null>(null);
    const navigate = useNavigate();

    const { executeRegister, loading, error } = useRegister();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let valid = true;

        if(!name.trim()) {
            setNameError("Nome é obrigatório");
            valid = false;
        } else {
            setNameError("")
        }

        if(!category) {
            setCategory("NONE");
        }

        if(!password.trim()){
            setPasswordError("Senha é obrigatória");
            valid = false;
        } else {
            setPasswordError("");
        }

        if(password !== passwordConfirm){
            setPasswordConfirmError("As senhas não são iguais");
            valid = false;
        } else {
            setPasswordConfirmError("");
        }

        if(!valid){
            return;
        }

        const response = await executeRegister(name, password, category);

        if(response.success){
            navigate("/");
        }
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            <Input
                label="Nome"
                id="name"
                name="name"
                value={name}
                error={nameError}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
            />

            <Select
                label="Equipe"
                options={categoryOptions}
                onChange={setCategory}
                value={category}
            />

            <Input
                label="Senha"
                id="password"
                name="password"
                type="password"
                value={password}
                error={passwordError}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
            />

            <Input
                label="Confirme sua senha"
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                value={passwordConfirm}
                error={passwordConfirmError}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                placeholder="Digite sua senha"
            />

            {error && <Text variant="error">{error}</Text>}
            <Button type="submit" disabled={loading}>
                {loading ? "Criando Conta ..." : "Criar Conta"}
            </Button>
        </form>
    );
}