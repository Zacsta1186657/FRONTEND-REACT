import { useState } from "react";
import api from "../api/axiosClient";
import { useNavigate } from "react-router-dom";

export interface RegisterRequest {
    username: string;
    password: string;
    roles?: string;
}

export interface ApiResponse {
    message: string;
}

const Register = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState<RegisterRequest>({
        username: "",
        password: "",
        roles: ""
    });

    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await api.post<ApiResponse>(
                "/auth/register",
                form,
                { headers: { "Content-Type": "application/json" } }
            );

            setMessage(response.data.message ?? "Registro exitoso ✔");

            setTimeout(() => {
                navigate("/login");
            }, 1500);
        } catch (error: any) {
            setMessage(error.response?.data ?? "Error al registrar ❌");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ width: "350px", margin: "50px auto" }}>
            <h2>Crear Cuenta</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Usuario"
                    value={form.username}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={form.password}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="roles"
                    placeholder="Roles (opcional)"
                    value={form.roles}
                    onChange={handleChange}
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Registrando..." : "Registrar"}
                </button>
            </form>

            {message && (
                <p style={{ marginTop: "10px", fontWeight: "bold" }}>
                    {message}
                </p>
            )}
        </div>
    );
};

export default Register;
