import { create } from "zustand";
import api from "../api/axiosClient";

// ---- Definir tipos ----
export interface User {
    id: number;
    username: string;
    // Puedes agregar más campos según tu backend
}

export interface Menu {
    title: string;
    url?: string | null;
    icon: string;
    requiredPermissions: string[];
    children?: Menu[] | null;
}

export interface AuthState {
    user: User | null;
    menu: Menu[];    // Si tienes un modelo de menú lo tipamos luego
    isAuthenticated: boolean | null; // null = loading
    login: (username: string, password: string) => Promise<void>;
    loadMenu: () => Promise<void>;
    checkAuth: () => Promise<void>;
    logout: () => Promise<void>;
}

// ---- Valor Global ----
export const useAuthStore = create<AuthState>(set => ({
    user: null,
    menu: [],
    isAuthenticated: null,
    login: async (username: string, password: string) => {
        await api.post("/auth/login", { username, password });
        await useAuthStore.getState().checkAuth(); // cargar usuario después del login
    },
    loadMenu: async () => {
        const res = await api.get("/menu");
        console.log(res.data)
        set({ menu: res.data });
    },
    // 👇 Esto verifica si hay cookie válida
    checkAuth: async () => {
        try {
            const res = await api.get("/auth/me"); // backend devuelve info usuario si token válido
            set({ user: res.data, isAuthenticated: true });
        } catch {
            set({ user: null, isAuthenticated: false });
        }
    },
    logout: async () => {
        await api.post("/auth/logout");
        set({ user: null, menu: [], isAuthenticated: false });
    },
}));