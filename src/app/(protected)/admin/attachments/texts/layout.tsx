'use client';

import { useAdminControllScreen } from "@/src/contexts/HidenAdminComponentsContext";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {

    const { setShowComponents } = useAdminControllScreen();

    useEffect(() => setShowComponents(false), [])

    return children
}