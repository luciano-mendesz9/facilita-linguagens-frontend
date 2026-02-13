'use client';

import { useState } from "react";
import PopUp from "../members/pop-up";
import { SearchIcon } from "lucide-react";
import UserType from "@/src/types/user.type";
import Image from "next/image";

import Profile from '@assets/profile.png'
import { getUserByEmail } from "@/src/functions";

export default function AdminAddCollaboratorPopup({ closeAction }: { closeAction: () => void }) {

    const [formOpened, setFormOpened] = useState<'search-email' | 'create-account'>('search-email');
    const [userFounded, setUserFounded] = useState<UserType | null>(null);
    const [notfound, setNotFound] = useState(false);
    const [email, setEmail] = useState('admin@email.com');

    async function fetchUser() {
        setNotFound(false);
        if (!email) return alert('Preencha o campo de e-mail.')
        const user = await getUserByEmail({ email });

        if (!user) {
            setNotFound(true);
        }

        setUserFounded(user);
    }

    return (
        <PopUp actionClose={closeAction} header={{
            title: 'Adicionar Colaborador', desc: 'Conceda acesso a um novo membro da equipe.'
        }}>
            <div className="bg-gray-200 p-3 w-[60%] m-auto mt-10 flex rounded-[10px] gap-2">
                <button
                    onClick={() => setFormOpened('search-email')}
                    className={`flex-1 ${formOpened === "search-email" ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600 hover:bg-gray-400'} p-3 rounded-[10px]  font-medium cursor-pointer`}>Buscar por E-mail</button>
                <button
                    onClick={() => setFormOpened('create-account')}
                    className={`flex-1 ${formOpened === "create-account" ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600 hover:bg-gray-400'} p-3 rounded-[10px]  font-medium cursor-pointer`}>Criar Conta</button>
            </div>

            {formOpened === 'search-email' && (
                <>
                    <p className="text-[14px] text-center mt-7 text-gray-700"><strong>ATENÇÃO: </strong>O colaborador precisa já estar devidamente cadastrado na plataforma para que seja possível adicioná-lo como membro parte da equipe administrativa. Se não houver conta, clique em 'Criar Conta' acima.</p>

                    <div className="flex items-start mt-10 flex-col">
                        {userFounded && (
                            <div className=" w-full flex gap-5 items-center">
                                <Image alt="Image de Perfil" src={Profile} width={100} className="rounded-full" />
                                <div className="flex flex-col">
                                    <span><strong>Nome: </strong>{userFounded.firstName} {userFounded.lastName}</span>
                                    <span><strong>E-mail: </strong>{userFounded.email}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span><strong>Status: </strong>{userFounded.status === 'ACTIVE' ? 'Conta ativa' : userFounded.status === 'PENDING' ? 'Conta pendente de verificação' : userFounded.status === 'BLOCKED' ? 'Conta bloqueada' : 'Conta inativa'}</span>
                                    <span><strong>Colaborador: </strong>{userFounded.isCollaborator ? 'Sim' : 'Não'}</span>
                                </div>
                            </div>
                        )}
                        <form className="w-full mt-5">
                            <div className="flex items-center gap-2">
                                <input type="email" className="outline-blue-500 w-full max-w-100 p-2 border border-gray-500 rounded-md" placeholder="E-mail de usuário" />
                                <button
                                type="button"
                                    onClick={fetchUser}
                                    className="text-white cursor-pointer hover:bg-blue-600 flex items-center gap-2 bg-blue-500 py-2 px-4 rounded-md">
                                    <SearchIcon size={18} />
                                    Buscar
                                </button>
                            </div>
                            {notfound && <span className="text-[14px] text-red-400 font-medium">Usário não encontrado</span>}
                            {userFounded && userFounded.isCollaborator && <span className="text-[14px] text-red-400 font-medium">Essa conta já está vinculada à equipe. <br /></span>}
                            {userFounded && (userFounded.status === 'BLOCKED' || userFounded?.status === 'INACTIVE') && <span className="text-[14px] text-red-400 font-medium">Essa conta já está bloqueada ou inativa.</span>}
                        </form>

                    </div>
                </>
            )}
        </PopUp>
    )
}