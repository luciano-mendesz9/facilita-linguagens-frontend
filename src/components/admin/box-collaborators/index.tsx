'use client';
import Image from "next/image";
import WhiteBoxAdmin from "../white-box";

import ProfileImage from '@assets/profile.png';
import { SearchIcon, SettingsIcon } from "lucide-react";
import StatusBadge from "../../members/status-badge";
import { useAuth } from "@/src/contexts/AuthContexts";
import UserType from "@/src/types/user.type";
import { useDatabase } from "@/src/contexts/DatabaseContext";
import { useMemo, useState } from "react";


function ActionRow({ admin }: { admin: UserType }) {

    const { user } = useAuth();

    const status = admin.status === 'ACTIVE' ? 'success' : admin.status === 'PENDING' ? 'warning' : admin.status === 'BLOCKED' ? 'error' : undefined;

    return (
        <div className="flex items-center justify-between pt-3 pb-3 border-b pl-3 pr-3 border-b-gray-400">
            <div className="flex items-center gap-2 flex-1">
                <Image
                    src={ProfileImage}
                    alt="Imagem de perfil"
                    height={50}
                    className="rounded-full"
                />
                <div className="flex flex-col">
                    <span className="font-semibold">{admin.firstName} {admin.lastName}</span>
                    <span className="text-[12px] text-gray-500">{admin.email}</span>
                </div>
            </div>
            <StatusBadge title={admin.status} type={status} />
            <span className="text-gray-900 flex flex-1 justify-center">{admin.status === 'PENDING' ? <span>-</span> : <a href="#" className="underline">Acessar Histórico de Atividade</a>}</span>
            {user?.isSuperAdmin && (
                <button className="cursor-pointer">
                    <SettingsIcon color="white" size={36} className="bg-blue-500 p-1 rounded-md hover:bg-blue-700" />
                </button>
            )}
        </div>
    )
}

export default function BoxCollaboratorsAdmin() {

    const { collaborators, isLoading } = useDatabase();
    const [search, setSearch] = useState('');

    // 🔥 Lista filtrada
    const filteredCollaborators = useMemo(() => {
        return collaborators.filter((admin) =>
            admin.email.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, collaborators]);

    return (
        <WhiteBoxAdmin>
            <div className="border border-gray-400 p-3 rounded-lg flex items-center justify-between">
                <span className="text-[18px] font-semibold">Colaboradores</span>

                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 text-gray-700 bg-white pl-4 p-2 rounded-2xl border border-gray-400">
                        <SearchIcon />
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Buscar usuário por email"
                            className="outline-none p-2 w-100"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="border border-gray-400 p-3 rounded-lg mt-3 max-h-100 overflow-y-auto">
                {filteredCollaborators.length === 0 ? (
                    <span>
                        {isLoading ? 'Carregando...' : 'Nenhum colaborador encontrado'}
                    </span>
                ) : (
                    filteredCollaborators.map((collaborator, index) => (
                        <ActionRow
                            key={index}
                            admin={collaborator}
                        />
                    ))
                )}
            </div>
        </WhiteBoxAdmin>
    )
}
