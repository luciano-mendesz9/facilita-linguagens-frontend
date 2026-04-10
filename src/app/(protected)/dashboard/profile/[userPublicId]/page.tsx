'use client';
import TitlePageMember from "@members-components/title-page";
import { useParams } from "next/navigation";

export default function ProfilePage() {
    const { userPublicId } = useParams();

    return (
        <div>
            <TitlePageMember
                text="Perfil de usuário"
                description={`ID: ${userPublicId}`}
            />
        </div>
    )
}