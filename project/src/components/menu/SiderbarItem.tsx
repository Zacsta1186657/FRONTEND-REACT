import { ChevronRight } from "lucide-react";
import { IconMap } from "./menu-icons";

interface MenuItemProps {
    item: any;
}

export function SidebarItem({ item }: MenuItemProps) {

    const Icon = IconMap[item.icon?.toLowerCase()] ?? null;

    return (
        <>
            {/*<SidebarMenuButton tooltip={item.title}>
                <Link to={item.url ?? "#"} style={{ paddingLeft: padding }}>
                    {Icon && <Icon className="mr-2 h-4 w-4" />} 
                    <span>{item.title}</span>
                </Link>*/}
            {Icon && <Icon className="mr-2 h-4 w-4" />}
            <span>{item.title}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            {/*</SidebarMenuButton>*/}
        </>
    );
}