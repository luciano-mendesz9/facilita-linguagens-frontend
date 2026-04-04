'use client';
import TopbarAdmin from "@admins-components/topbar";
import SidebarAdmin from "@admins-components/sidebar";
import { DatabaseProvider } from "@/src/contexts/DatabaseContext";
import { useAdminControllScreen } from "@/src/contexts/HidenAdminComponentsContext";
import { useEffect } from "react";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
export default function LayoutAdmin({ children }: { children: React.ReactNode }) {

    const { showComponents, setShowComponents } = useAdminControllScreen();

    useEffect(() => {
        const currentUrl = window.location.pathname;

        if (currentUrl.startsWith('/admin/attachments/texts/')) {
            setShowComponents(false);
        } else {
            setShowComponents(true)
        }
    }, [showComponents])


    return (
        <div className="relative h-full p-8 overflow-hidden">
            <div className="fixed inset-0 -z-10">
                <div className="h-[55vh] bg-linear-to-tr from-blue-600 to-blue-400" />
                <div className="h-[45vh] bg-gray-100" />
            </div>
            <DatabaseProvider>
                {showComponents ? (
                    <>
                        <TopbarAdmin />

                        <div className="h-full w-full flex items-start gap-8 mt-12">
                            <SidebarAdmin />

                            <div className="w-full h-full overflow-auto hide-scrollbar">
                                <QueryClientProvider client={queryClient}>
                                    {children}
                                </QueryClientProvider>
                            </div>
                        </div>
                    </>
                ) : children}
            </DatabaseProvider>

        </div>
    );
}

