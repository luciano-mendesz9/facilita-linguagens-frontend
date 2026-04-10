'use client';
import TitlePageMember from "@/src/components/members/title-page";
import { useAuth } from "@/src/contexts/AuthContexts";

export default function ProfilePage() {
    const { user } = useAuth();
    return (
        <div>
            <TitlePageMember
                text="Perfil de usuário"
                description={`ID: ${user?.publicId}`}
            />
        </div>
    )
}