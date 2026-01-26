'use client';

import { useAuth } from "@/src/contexts/AuthContexts";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import TopbarAdmin from "@admins-components/topbar";
import SidebarAdmin from "@admins-components/sidebar";

export default function LayoutAdmin({ children }: { children: React.ReactNode }) {

    const { user } = useAuth();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(/*true*/false);

    // useEffect(() => {
    //     if (!user || !user.isCollaborator) {
    //         return router.replace('/not-found')
    //     }

    //     setIsLoading(false);

    // }, [user, router])

    if (isLoading) return

    return (
        <div className="relative h-full p-8">
            <div className="fixed inset-0 -z-10">
                <div className="h-[55vh] bg-linear-to-tr from-blue-600 to-blue-400" />
                <div className="h-[45vh] bg-gray-100" />
            </div>

            <TopbarAdmin />

            <div className="h-full w-full flex items-start gap-8 mt-8">
                <SidebarAdmin />

                <div className="w-full h-auto">
                    {children}
                </div>
            </div>

        </div>
    );
}

