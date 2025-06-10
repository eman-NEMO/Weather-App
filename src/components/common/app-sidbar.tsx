import {CloudSunRain, HeartPlus ,MapPin } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Favorite",
    url: "#",
    icon: HeartPlus,
  },
  {
    title: "Map",
    url: "#",
    icon: MapPin,
  },

]

export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon"    >
      <SidebarContent >
        <SidebarGroup>
          <SidebarGroupLabel >
            Application
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu >
               
              
           
   
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