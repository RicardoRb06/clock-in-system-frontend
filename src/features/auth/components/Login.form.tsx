import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom"
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import { Text } from "../../../components/ui/Text"
import { useLoginForm } from "../hooks/useLoginForm";

export function LoginForm() {
    const navigate = useNavigate();

    const { data, errors, updateField, validate } = useLoginForm();
    const { executeLogin, loading, error } = useLogin();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(!validate()){
            return;
        }

        const response = await executeLogin(data.name, data.password);

        if(response.success){
            navigate("/");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
                label="Nome"
                id="name"
                name="name"
                value={data.name}
                error={errors.name}
                onChange={(e) => updateField("name", e.target.value)}
                autoComplete="username"
                placeholder="Digite seu nome"
            />

            <Input
                label="Senha"
                id="password"
                name="password"
                type="password"
                value={data.password}
                error={errors.password}
                onChange={(e) => updateField("password", e.target.value)}
                autoComplete="current-password"
                placeholder="Digite sua senha"
            />

            {error && <Text variant="error">{error}</Text>}
            <Button type="submit" disabled={loading}>
                {loading ? "Entrando ..." : "Entrar"}
            </Button>
        </form>
    );
}