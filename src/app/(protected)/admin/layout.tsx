'use client';

import TopbarAdmin from "@admins-components/topbar";
import SidebarAdmin from "@admins-components/sidebar";

export default function LayoutAdmin({ children }: { children: React.ReactNode }) {

    return (
        <div className="relative h-full p-8 overflow-hidden">
            <div className="fixed inset-0 -z-10">
                <div className="h-[55vh] bg-linear-to-tr from-blue-600 to-blue-400" />
                <div className="h-[45vh] bg-gray-100" />
            </div>

            <TopbarAdmin />

            <div className="h-full w-full flex items-start gap-8 mt-12">
                <SidebarAdmin />

                <div className="w-full h-full overflow-auto hide-scrollbar">
                    {children}
                </div>
            </div>

        </div>
    );
}

