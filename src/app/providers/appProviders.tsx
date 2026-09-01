import type { ReactNode } from "react";
import { AuthProvider } from "../../features/auth/context/auth.context";

interface appProvidersProps {
    children: ReactNode;
}

export function AppProviders({ children }: appProvidersProps) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}