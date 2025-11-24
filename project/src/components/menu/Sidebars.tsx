import { useAuthStore } from "../../auth/useAuthStore";
// Importa los componentes de shadcn/ui
import {
    Sidebar,
    SidebarContent,
    SidebarProvider,
    SidebarRail,
    SidebarInset,
    SidebarTrigger,
    SidebarFooter,
} from "@/components/ui/sidebar"
import { Separator } from "@radix-ui/react-dropdown-menu";
import NavFooter from "./NavFooter";
import NavMain from "./NavMain";

export default function Sidebars() {

    /*const [open, setOpen] = useState(false)*/
    const menu = useAuthStore(state => state.menu);

    return (
        <>
            <SidebarProvider>
                <Sidebar collapsible="icon"
                    className="bg-neutral-100 text-neutral-800 border-r">
                    <SidebarContent>
                        <NavMain menu={menu} />
                    </SidebarContent>
                    <SidebarFooter>
                        <NavFooter />
                    </SidebarFooter>
                    <SidebarRail />
                </Sidebar>
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator
                                className="mr-2 data-[orientation=vertical]:h-4"
                            />
                        </div>
                    </header>
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}