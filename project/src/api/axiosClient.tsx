import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7180/api", //Cambiar si tu backend usa otro puerto
    withCredentials: true,
});

//Interceptor: Agrega token automaticamente
/*api.interceptors.request.use(config => {
    const token = localStorage.getItem("access_token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});*/

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status == 401) {
            console.warn("🔐 Token expirado o inválido. Cerrando sesión...");

            // redirigir al login
            window.location.href = "/login";
        }

        return Promise.reject(error);
    }
)

export default api;