import React from "react";
import { Link } from "react-router";
import ThemeTogglerTwo from "@/components/common/ThemeTogglerTwo";
import GridShape from "@/components/common/GridShape";
import { BoxesIcon } from "lucide-react";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
            <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
                {children}
                <div className="relative hidden w-full lg:w-1/2 overflow-hidden dark:bg-white/5 lg:grid">
                    
                    {/* Imagen de fondo */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('../../images/gestion-auth.jpg')" }}
                    />

                    {/* Overlay de color */}
                    <div className="absolute inset-0 bg-blue-600/40 dark:bg-black/40"></div>

                    {/*<div className="relative flex items-center justify-center z-1">
                        <div className="flex flex-col items-center max-w-xs">
                            <Link to="/" className="block mb-4">
                                <BoxesIcon className="w-24 h-24" />
                            </Link>
                            <p className="text-center text-3xl text-white dark:text-white/60">
                                Sistema de Gestión Operacional - CRONOS
                            </p>
                        </div>
                    </div>*/}
                </div>
                <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
                    <ThemeTogglerTwo />
                </div>
            </div>
        </div>
    );
}
