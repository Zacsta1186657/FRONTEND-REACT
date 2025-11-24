import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Admin from "../pages/Admin";
import ProtectedRoute from "../components/ProtectedRoute";
import Sidebars from "../components/menu/Sidebars";
import Register from "../pages/Register";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/login" element={<Login />} />
                <Route path="register" element={<Register />} />

                <Route path="/*" element={
                    <ProtectedRoute>
                        <div style={{ display: "flex" }}>
                            <Sidebars />
                            <div style={{ padding: 20 }}>
                                <Routes>
                                    <Route path="dashboard" element={<Dashboard />} />
                                    <Route path="users" element={<Users />} />
                                    <Route path="admin" element={<Admin />} />
                                </Routes>
                            </div>
                        </div>
                    </ProtectedRoute>
                } />
            </Routes>
        </BrowserRouter>
    );
}
