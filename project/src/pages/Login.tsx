import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../auth/useAuthStore";

export default function Login() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const login = useAuthStore(state => state.login);
    const loadMenu = useAuthStore(state => state.loadMenu);
    const navigate = useNavigate();

    const handleSubmit = async () => {

        try {
            await login(username, password);
            await loadMenu();
            navigate("/dashboard");
        } catch {
            alert("Credenciales incorrectas");
        }
    }

    return (
        <div style={{ margin: 50 }}>
            <h2>Login</h2>

            <input type="text" placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="button" onClick={() => handleSubmit()} >Ingresar</button>

            <button type="button" name="btnRegister" onClick={() => navigate("/register")}>Crear Cuenta</button>
        </div >
    )
}