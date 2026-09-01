import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../features/auth/hooks/useAuth";

export function PublicRoutes() {
    const { isAuthenticated, isLoading } = useAuth();

    if(isLoading) {
        return <div>Loading...</div>;
    }

    if(isAuthenticated) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
}
