import {
  Calendar as CalendarIcon,
  Home as HomeIcon,
  Inbox as InboxIcon,
  Search as SearchIcon,
  Settings as SettingsIcon,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
 } from '@shadcn/sidebar';


// Menu items.
const items = [
  {
    title: 'Home',
    url: '#',
    icon: HomeIcon,
  },
  {
    title: 'Inbox',
    url: '#',
    icon: InboxIcon,
  },
  {
    title: 'Calendar',
    url: '#',
    icon: CalendarIcon,
  },
  {
    title: 'Search',
    url: '#',
    icon: SearchIcon,
  },
  {
    title: 'Settings',
    url: '#',
    icon: SettingsIcon,
  },
]

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
export default AppSidebar;