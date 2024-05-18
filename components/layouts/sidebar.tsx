"use client"
import { Each } from "@/utils/Each";
import { Assessment, Dashboard, People } from "@mui/icons-material";

const menuItems = [
    {
        name: "Dashboard",
        icon: <Dashboard />,
    },
    {
        name: "Users",
        icon: <People />,
    },
    {
        name: "Reports",
        icon: <Assessment />,
    },
];


export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul>
                <Each of={menuItems} render={(item: any, index: any) => 
                    <li>{item.icon} <span>{item.name}</span></li>} 
                />
            </ul>
        </aside>
    );
};