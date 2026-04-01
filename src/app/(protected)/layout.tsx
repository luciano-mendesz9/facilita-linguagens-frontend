import { AuthProvider } from "@/src/contexts/AuthContexts";
import { HidenAdminComponentsProvider } from "@/src/contexts/HidenAdminComponentsContext";
import { getUser } from "@/src/functions";

export default async function LayoutProtectedRoutes({ children }: { children: React.ReactNode }) {
    const user = await getUser();

    return (
        <AuthProvider initialUser={user}>
            <HidenAdminComponentsProvider>
                {children}
            </HidenAdminComponentsProvider>
        </AuthProvider>
    )
} 