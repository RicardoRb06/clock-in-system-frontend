import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../features/auth/hooks/useAuth";
import { LoadingPage } from "../../pages/loading";

export function ProtectedRoutes() {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <LoadingPage />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}