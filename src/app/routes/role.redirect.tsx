import { Navigate } from "react-router-dom";
import { useAuth } from "../../features/auth/hooks/useAuth";

export function RoleRedirect() {
    const { user } = useAuth();
    
    if(!user) {
        return <Navigate to="/login" />;
    }

    if(user.role === "user" || user.role === "admin" || user.role === "moderator") {
        return <Navigate to="/homepage" />;
    }

    if(user.role === "time clock") {
        return <Navigate to="/time-entry" replace />;
    }

    return <Navigate to="/unauthorized" replace />;
}