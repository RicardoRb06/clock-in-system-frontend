import { createContext, useEffect, useState, type ReactNode } from "react";
import type { AuthUser } from "../types/user";
import { me } from "../api/authApi";

interface AuthContextData {
    user: AuthUser | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    refreshUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    async function loadUser() {
        try {
            const user = await me();

            setUser(user);
        } catch {
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        loadUser();
    }, []);

    const value: AuthContextData = {
        user, 
        isAuthenticated: user !== null,
        isLoading,
        refreshUser: loadUser,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}