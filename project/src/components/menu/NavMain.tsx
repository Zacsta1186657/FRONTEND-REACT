
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from '../ui/sidebar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import type { Menu } from '@/auth/useAuthStore'
import { SidebarItem } from './SiderbarItem'

function NavMain({ menu, }: {
    menu: {
        title: string
        url?: string | null
        icon: string
        requiredPermissions: string[]
        children?: Menu[] | null
    }[]
}) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                {menu.map((item, i) => (
                    <Collapsible
                        key={i}
                        asChild
                        defaultOpen={true}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                                {/*<SidebarItem item={item} />*/}
                                <SidebarMenuButton tooltip={item.title}>
                                    <SidebarItem item={item} />
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <SidebarMenuSub>
                                    {item.children?.map((subItem, x) => (
                                        <SidebarMenuSubItem key={x}>
                                            <SidebarMenuSubButton asChild>
                                                {/*<Link to={subItem.url ?? "#"}>
                                                                    <span>{subItem.title}</span>
                                                                </Link>*/}
                                                <span>{subItem.title}</span>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}

export default NavMain