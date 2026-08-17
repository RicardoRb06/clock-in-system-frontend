import { useState } from "react";
import { login } from "../api/authApi.ts"

export function useLogin() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const executeLogin = async (name: string, password: string) => {
        try{
            setLoading(true);
            setError(null);

            const response = await login({name, password});

            return response;

        } catch(error) {
            setError("Não foi possível realizar o login.");
            throw error;
        } finally {
            setLoading(false);
        }
    }

    return {
        executeLogin,
        loading, 
        error,
    }
}