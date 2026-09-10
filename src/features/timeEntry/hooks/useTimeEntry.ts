import { useState } from 'react';
import type { AuthUser } from '../../auth/types/user';
import { clockIn, clockOut } from '../api/timeEntryApi';

interface UseTimeEntryProps {
    onClockIn?: (user: AuthUser) => void;
    onClockOut?: (user: AuthUser) => void;
}

export function useTimeEntry({ onClockIn, onClockOut }: UseTimeEntryProps = {}) {
    const [ error, setError ] = useState("");
    const [ loading, setLoading ] = useState(false);

    async function clockInUser(user: AuthUser) {
        try {
            setLoading(true);
            await clockIn({ userId: user._id });

            onClockIn?.(user);

            return { success: true }
        } catch {
            setError("Não foi possível abrir o ponto");

            return { success: false }
        } finally {
            setLoading(false);
        }
    }

    async function clockOutUser(user: AuthUser) {
        try {
            setLoading(true);
            await clockOut({ userId: user._id });

            onClockOut?.(user);

            return { success: true }
        } catch {
            setError("Não foi possível fechar o ponto");

            return { success: false }
        } finally {
            setLoading(false);
        }
    }
    
    return {
        error,
        loading,
        clockInUser,
        clockOutUser
    }
}