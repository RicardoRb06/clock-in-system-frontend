import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../features/auth/hooks/useAuth";
import type { Role } from "../../features/auth/types/roles";
import { LoadingPage } from "../../pages/loading";

interface RoleRouterProps {
    allowedRoles: Role;
}

export function RoleRoute({ allowedRoles }: RoleRouterProps) {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <LoadingPage />;
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" />;
    }

    return <Outlet />;
}
