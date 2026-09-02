import { useState } from "react";
import type { Category } from "../types/category";

interface RegisterFormData {
    name: string;
    category: Category | null;
    password: string;
    passwordConfirm: string;
}

interface RegisterFormErrors {
    name?: string;
    password?: string;
    passwordConfirm?: string;
}

export function useRegisterForm() {
    const [data, setData] = useState<RegisterFormData>({
        name: "",
        password: "",
        passwordConfirm: "",
        category: null,
    })

    const [errors, setErrors] = useState<RegisterFormErrors>({});

    function updateField<K extends keyof RegisterFormData>(field: K, value: RegisterFormData[K]) {
        setData((previous) => ({
            ...previous,
            [field]: value,
        }));
    }

    function validate() {
        const newErrors: RegisterFormErrors = {};

        if(!data.name.trim()) {
            newErrors.name = "Nome é obrigatório";
        }

        if(!data.password.trim()){
            newErrors.password = "Senha é obrigatória";
        } else if(data.password.trim().length < 8){
            newErrors.password = "Senha deve ter no mínimo 8 caracteres"
        } else if(data.password.trim().length > 64){
            newErrors.password = "Senha deve ter no máximo 64 caracteres"
        }
        
        if(!data.passwordConfirm.trim()){
            newErrors.passwordConfirm = "Confirmação de senha é obrigatória";
        } else if(data.password !== data.passwordConfirm) {
            newErrors.passwordConfirm = "As senhas não são iguais";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    return {
        data,
        errors, 
        updateField,
        validate,
    }
}