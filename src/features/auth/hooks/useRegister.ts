import { useState } from 'react';
import { register } from '../api/authApi.ts'

export function useRegister() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const executeRegister = async (name: string, password: string, category: string | null) => {
        try {
            setLoading(true);
            setError(null);

            const response = await register({name, password, category});

            return {success: true, data: response};
        } catch (e){
            setError("Não foi possível registrar usuário");
            return {success: false, error: error }
        } finally {
            setLoading(false)
        }
    }

    return {
        executeRegister,
        loading,
        error,
    }
}