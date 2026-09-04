import { Navigate } from "react-router-dom";
import { useAuth } from "../../features/auth/hooks/useAuth";

export function RoleRedirect() {
    const { user } = useAuth();

    if(!user) {
        return <Navigate to="/login" />;
    }

    if(user.role === "USER") {
    }

    if(user.role === "ADMIN") {
    }

    if(user.role === "MODERATOR") {
    }

    if(user.role === "TIME_CLOCK") {
        return <Navigate to="/time-entry" replace />;
    }
}