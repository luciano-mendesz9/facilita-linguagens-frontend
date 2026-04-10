import React from "react";
import SidebarMember from "@members-components/sidebar";

export default function LayoutDashboard({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex flex-col md:flex-row w-full h-screen bg-[#f9f9f9]">
            <SidebarMember />
            <div className="w-full max-w-425 pt-10 pr-5 pl-10 h-auto overflow-auto">
                {children}
                <div className="md:hidden block">
                    <br /><br /><br /><br />
                </div>
            </div>
        </div>
    )
}