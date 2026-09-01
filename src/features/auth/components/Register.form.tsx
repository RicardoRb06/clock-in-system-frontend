import { useNavigate } from "react-router-dom"
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import { Text } from "../../../components/ui/Text"
import { useRegister } from '../hooks/useRegister';
import { Select } from '../../../components/ui/Select';
import { useRegisterForm } from '../hooks/useRegisterForm';
import { categoryOptions } from "../types/category";

export function RegisterForm() {
    const navigate = useNavigate();

    const {data, errors, updateField, validate} = useRegisterForm();
    const { executeRegister, loading, error } = useRegister();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(!validate()){
            return;
        }

        const category = data.category === "NONE" ? null : data.category;

        const response = await executeRegister(data.name, data.password, category);

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
                value={data.name}
                error={errors.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="Digite seu nome"
            />

            <Select
                label="Equipe"
                options={categoryOptions}
                onChange={(e) => updateField("category", e)}
                value={data.category}
            />

            <Input
                label="Senha"
                id="password"
                name="password"
                type="password"
                value={data.password}
                error={errors.password}
                onChange={(e) => updateField("password", e.target.value)}
                placeholder="Digite sua senha"
            />

            <Input
                label="Confirme sua senha"
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                value={data.passwordConfirm}
                error={errors.passwordConfirm}
                onChange={(e) => updateField("passwordConfirm", e.target.value)}
                placeholder="Digite sua senha"
            />

            {error && <Text variant="error">{error}</Text>}
            <Button type="submit" disabled={loading}>
                {loading ? "Criando Conta ..." : "Criar Conta"}
            </Button>
        </form>
    );
}