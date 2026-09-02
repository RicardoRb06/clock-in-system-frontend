import { useState } from "react";

interface LoginFormData {
    name: string;
    password: string;
}

interface LoginFormErrors {
    name?: string;
    password?: string;
}

export function useLoginForm() {
    const [data, setData] = useState<LoginFormData>({
        name: "",
        password: "",
   });

   const [errors, setErrors] = useState<LoginFormErrors>({});

   function updateField<K extends keyof LoginFormData>(field: K, value: LoginFormData[K]) {
        setData((previous) => ({
            ...previous,
            [field]: value,
        }));
    }

    function validate() {
        const newErrors: LoginFormErrors = {};

        if(!data.name.trim()){
            newErrors.name = "Nome é obrigatório";
        }

        if(!data.password.trim()){
            newErrors.password = "Senha é obrigatória";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    return { 
        data,
        errors, 
        updateField,
        validate,
    };
}