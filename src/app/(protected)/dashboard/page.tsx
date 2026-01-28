'use client';
import { useAuth } from "@/src/contexts/AuthContexts";
import TitlePageMember from "@members-components/title-page";

export default function Dashboard() {

    const { user } = useAuth();

    return (
        <div>
            <TitlePageMember text={"Dashboard"} />
            Bem-vindo(a), {user?.firstName}
        </div>
    )
}