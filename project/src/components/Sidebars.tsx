import { useAuthStore } from "../auth/useAuthStore";
import { Link } from "react-router-dom";

// Importa los componentes de shadcn/ui
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarProvider,
} from "@/components/ui/sidebar"

export default function Sidebars() {

    const menu = useAuthStore(state => state.menu);

    return (
        <>
            <SidebarProvider>
                <div className="flex h-screen">
                    <Sidebar>
                        <SidebarContent>
                            <SidebarGroup>
                                <SidebarGroupLabel>Menú</SidebarGroupLabel>

                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {menu.map((item, i) => {
                                            return (
                                                <SidebarMenuItem key={i}>
                                                    <SidebarMenuButton asChild>
                                                        <Link to={item.url}>
                                                            <span>{item.title}</span>
                                                        </Link>
                                                    </SidebarMenuButton>
                                                </SidebarMenuItem>
                                            )
                                        })}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                        </SidebarContent>
                    </Sidebar>
                </div>
            </SidebarProvider>
        </>
    )
}