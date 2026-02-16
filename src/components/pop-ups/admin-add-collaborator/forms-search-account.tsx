'use client';
import { useState } from "react";
import UserType from "@/src/types/user.type";
import { getUserByEmail } from "@/src/functions";
import Image from "next/image";
import Profile from '@assets/profile.png';
import { SearchIcon, TrashIcon } from "lucide-react";
import Button from "../../members/button";
import PermissionComponents from "./permissions-component";
import { sendAdminLinkRequest } from "./actions";
import { useRouter } from "next/navigation";

export default function FormsSearchAccount() {
    const [isLoading, setIsLoading] = useState(false);

    const [emailSearch, setEmailSearch] = useState('');
    const [searching, setSearching] = useState(false);
    const [userFound, setUserFound] = useState<UserType | null>(null);
    const [notFound, setNotFound] = useState(false);

    const router = useRouter();

    async function handleSearchUser() {

        if (!emailSearch || searching || userFound) return;

        setSearching(true);
        setNotFound(false);

        const user = await getUserByEmail({ email: emailSearch });

        if (!user) {
            setNotFound(true);
            setSearching(false);
            return;
        }

        setUserFound(user);
        setSearching(false);
    }


    function discardUser() {
        setUserFound(null);
        setEmailSearch('');
        setNotFound(false);
    }


    function getUserError() {
        if (!userFound) return null;

        if (userFound.isCollaborator)
            return 'Essa conta já está vinculada à equipe.';

        if (userFound.status === 'BLOCKED' || userFound.status === 'INACTIVE')
            return 'Essa conta está bloqueada ou inativa.';

        return null;
    }

    async function addCollaborator() {

        if (!userFound) return;
        setIsLoading(true);
        const res = await sendAdminLinkRequest({
            data: {
                isCreateAccount: false,
                user: {
                    email: userFound.email,
                    firstName: userFound.firstName,
                    lastName: userFound.lastName
                },
                config: {
                    permissions: [],
                    isSuperAdmin: true,
                    role: 'DESENVOLVEDOR'
                }
            }
        })

        setIsLoading(false)
        if (!res) {
            return alert('Ocorreu um erro inesperado! Se o erro persistir, solicite ajuda dos desenvolvedores.')
        }

        router.refresh();

    }

    return (
        <div className="w-[60%] m-auto mt-5">

            <p className="text-[14px] text-center mt-7 text-gray-700 mb-10">
                <strong>ATENÇÃO: </strong>
                O colaborador precisa já possuir uma conta cadastrada na plataforma
                para ser adicionado à equipe administrativa. Ele/a receberá um e-mail informando
                esta ação.
            </p>

            <div className="flex items-center gap-2">

                <input
                    type="email"
                    value={emailSearch}
                    disabled={!!userFound}
                    onChange={(e) => setEmailSearch(e.target.value)}
                    placeholder="E-mail do usuário"
                    className="outline-blue-500 w-full p-3 border-2 border-gray-400 rounded-md"
                />

                {!userFound ? (
                    <button
                        type="button"
                        onClick={handleSearchUser}
                        disabled={!emailSearch || !emailSearch.includes('@') || !emailSearch.includes('.com') || searching}
                        className={`
                        flex items-center gap-2 px-4 py-3 rounded-md text-white
                        ${!emailSearch || !emailSearch.includes('@') || !emailSearch.includes('.com') || searching
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-500 hover:bg-blue-600 cursor-pointer'}
                    `}
                    >
                        <SearchIcon size={18} />
                        {searching ? 'Buscando...' : 'Buscar'}
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={discardUser}
                        className="flex items-center gap-2 px-4 py-3 rounded-md text-white bg-red-500 hover:bg-red-600"
                    >
                        <TrashIcon size={18} />
                        Descartar
                    </button>
                )}

            </div>

            {notFound && (
                <span className="text-sm text-red-400 mt-2 block">
                    Usuário não encontrado.
                </span>
            )}

            {userFound && (
                <div className="flex gap-5 items-center mt-6 border p-4 rounded-md bg-gray-100">

                    <Image
                        src={Profile}
                        alt="Perfil"
                        width={80}
                        className="rounded-full"
                    />

                    <div className="flex flex-col text-sm">
                        <span><strong>Nome:</strong> {userFound.firstName} {userFound.lastName}</span>
                        <span><strong>Email:</strong> {userFound.email}</span>
                        <span>
                            <strong>Status:</strong> {
                                userFound.status === 'ACTIVE' ? 'Conta ativa' :
                                    userFound.status === 'PENDING' ? 'Pendente de verificação' :
                                        userFound.status === 'BLOCKED' ? 'Bloqueada' :
                                            'Inativa'
                            }
                        </span>
                        <span>
                            <strong>Colaborador:</strong> {userFound.isCollaborator ? 'Sim' : 'Não'}
                        </span>

                        {getUserError() && (
                            <span className="text-red-400 mt-2">
                                {getUserError()}
                            </span>
                        )}
                    </div>

                </div>
            )}

            {userFound && !userFound.isCollaborator && (
                <div className="w-full mt-3">
                    <PermissionComponents />
                    <Button
                        disabled={isLoading}
                        styles="w-full mt-5"
                        action={addCollaborator}
                        title={isLoading ? 'Vinculando Conta...' : "Vincular Conta aos Colaboradores"}
                    />
                </div>
            )}

        </div>
    )
}