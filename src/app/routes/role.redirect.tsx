import { Navigate } from "react-router-dom";
import { useAuth } from "../../features/auth/hooks/useAuth";

export function RoleRedirect() {
    const { user } = useAuth();
    
    if(!user) {
        return <Navigate to="/login" />;
    }

    if(user.role === "user") {
        return <Navigate to="/homepage" />;
    }

    if(user.role === "admin") {
        return <div>Página de administrador</div>;
    }

    if(user.role === "moderator") {
        return <div>Página de moderador</div>;
    }

    if(user.role === "time clock") {
        return <Navigate to="/time-entry" replace />;
    }

    return <Navigate to="/unauthorized" replace />;
}