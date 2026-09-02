import { useState } from "react";
import { login } from "../api/authApi.ts"
import { useAuth } from "./useAuth.ts";

export function useLogin() {
    const { refreshUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const executeLogin = async (name: string, password: string) => {
        try{
            setLoading(true);
            setError(null);

            const response = await login({name, password});

            await refreshUser();

            return {success: true, data: response};

        } catch(error) {
            setError("Não foi possível realizar o login.");
            return {success: false};
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