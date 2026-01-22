'use client';

import { useAuth } from "@/src/contexts/AuthContexts";
import { redirect } from "next/navigation";

export default function LayoutLogin({ children }: { children: React.ReactNode }) {

    const {user} = useAuth();
    if(user) return redirect('/dashboard');

    return (
        <div className="flex justify-center items-center w-full h-screen bg-gray-100">
            {children}
        </div>
    )

}