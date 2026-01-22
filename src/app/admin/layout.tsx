'use client';

import { useAuth } from "@/src/contexts/AuthContexts";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LayoutAdmin({ children }: { children: React.ReactNode }) {

    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user || !user.isCollaborator) {
            router.replace('/not-found')
        }
    }, [user, router])

    return children;
}