import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../auth/useAuthStore";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
    children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { isAuthenticated, checkAuth } = useAuthStore();

    useEffect(() => {
        // Si aún no sabemos si está autenticado, preguntamos al backend
        if (isAuthenticated === null) {
            checkAuth();
        }
    }, [isAuthenticated, checkAuth]);

    // 👇 Estado inicial: todavía no sabemos si el backend ya autentico
    if (isAuthenticated === null) {
        return <div>Cargando...</div>; // puedes usar skeleton o spinner
    }

    // 👇 Si no está autenticado, redirigir
    if (isAuthenticated === false) {
        return <Navigate to="/login" replace />;
    }

    // 👇 Si está autenticado, mostrar componente protegido
    return <>{children}</>;
}