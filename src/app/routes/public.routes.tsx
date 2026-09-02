import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../features/auth/hooks/useAuth";
import { LoadingPage } from "../../pages/loading";

export function PublicRoutes() {
    const { isAuthenticated, isLoading } = useAuth();

    if(isLoading) {
        return <LoadingPage />;
    }

    if(isAuthenticated) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
}
