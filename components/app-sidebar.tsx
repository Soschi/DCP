"use client"
import * as React from "react"
import { LayoutDashboard, Library, Settings, SearchCode, User } from "lucide-react"
import favicon from "../public/favicon.ico"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ModeToggle } from "./theme-toggle"


const contentitems = [{
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
},
{
    title: "Data Viewer",
    url: "/dataviewer",
    icon: SearchCode,
},
{
    title: "Library",
    url: "#",
    icon: Library,
},
]

const footeritems = [{
    title: "Settings",
    url: "#",
    icon: Settings,
},
{
    title: "Account",
    url: "#",
    icon: User,
}
]

export function AppSidebar() {


    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="/" className="flex items-center gap-2">
                                <img src={"favicon.ico"} alt="DCP favicon" className="h-5 w-5" />
                                <span><b>Data Collection Presentor</b></span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Tools</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {contentitems.map((item) => (
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
            <SidebarFooter>
                <SidebarContent>
                    <SidebarMenu>
                        <ModeToggle />
                        {footeritems.map((item) => (
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
                </SidebarContent>
            </SidebarFooter>
        </Sidebar>
    )
}