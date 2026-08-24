import { useState } from "react";

interface RegisterFormData {
    name: string;
    category: string | null;
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
        } 
        
        if(!data.passwordConfirm.trim()){
            newErrors.passwordConfirm = "As senhas não são iguais";
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