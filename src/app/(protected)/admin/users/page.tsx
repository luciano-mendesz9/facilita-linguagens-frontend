'use client';

import { useEffect, useState } from "react";
import Button from "@/src/components/members/button";
import StatusBadge from "@/src/components/members/status-badge";
import ProfileUser from '@assets/profile.png';
import HeaderTitleAdmin from "@/src/components/admin/header-title";
import WhiteBoxAdmin from "@/src/components/admin/white-box";
import { EllipsisIcon } from "lucide-react";

type User = {
    id: number;
    publicId: string;
    email: string;
    firstName: string;
    lastName: string;
    image?: string;
    status: string;
    createdAt: string;
};

type Response = {
    data: User[];
    nextCursor: number | null;
    hasMore: boolean;
};

export default function UsersTable() {

    const [users, setUsers] = useState<User[]>([]);
    const [cursor, setCursor] = useState<number | null>(null);
    const [hasMore, setHasMore] = useState(true);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchUsers = async (cursorParam: number | null) => {
        try {
            setLoading(true);
            setError(false);

            const url = new URL('/api/users', window.location.origin);

            if (cursorParam !== null) {
                url.searchParams.append('cursor', String(cursorParam));
            }

            const res = await fetch(url.toString());

            if (!res.ok) {
                throw new Error('Erro na requisição');
            }

            const data: Response = await res.json();

            setUsers(prev => [...prev, ...data.data]);
            setCursor(data.nextCursor);
            setHasMore(data.hasMore);

        } catch (err) {
            console.error(err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    // primeira carga
    useEffect(() => {
        fetchUsers(null);
    }, []);

    return (
        <div>
            <div className="flex items-center justify-between">
                <HeaderTitleAdmin
                    title="Listagem de Clientes"
                    desc="Gerencie permissões, atividade e status de contas."
                />

                <Button
                    title="+ adicionar usuário"
                    bgColor="bg-green-600"
                    action={() => { }}
                />
            </div>

            <WhiteBoxAdmin>
                <div className="w-full">

                    {/* HEADER */}
                    <div className="grid grid-cols-[60px_1fr_180px_180px_160px_60px] pb-3 border-b text-sm font-semibold text-gray-600">
                        <span>#</span>
                        <span>Usuário</span>
                        <span>Acesso de conta</span>
                        <span>Assinatura</span>
                        <span>Data de entrada</span>
                        <span></span>
                    </div>

                    {/* LISTA */}
                    <div className="flex flex-col">

                        {/* LOADING INICIAL */}
                        {loading && users.length === 0 && (
                            <div className="py-6 text-center text-gray-500">
                                Carregando usuários...
                            </div>
                        )}

                        {/* ERRO */}
                        {error && users.length === 0 && (
                            <div className="py-6 text-center text-red-500">
                                Erro ao carregar usuários
                            </div>
                        )}

                        {/* USERS */}
                        {users.map((user, index) => (
                            <div
                                key={user.id}
                                className="grid grid-cols-[60px_1fr_180px_180px_160px_60px] items-center py-4 text-sm"
                            >
                                <span>{index + 1}</span>

                                <div className="flex items-center gap-3">
                                    <img
                                        src={user.image || ProfileUser.src}
                                        className="w-10 h-10 rounded-full"
                                        alt="profile"
                                    />

                                    <div className="flex flex-col">
                                        <span className="font-medium text-gray-800">
                                            {user.firstName} {user.lastName}
                                        </span>
                                        <span className="text-gray-500 text-xs">
                                            {user.email}
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <StatusBadge
                                        title={user.status === 'ACTIVE' ? 'ativo' : user.status === 'PENDING' ? 'pedente': 'bloqueado'}
                                        type={user.status === 'ACTIVE' ? 'success' : user.status === 'PENDING' ? 'warning': 'error'}
                                    />
                                </div>

                                <div>
                                    <StatusBadge title="—" type="error" />
                                </div>

                                <span className="text-gray-600">
                                    {new Date(user.createdAt).toLocaleDateString('pt-BR')}
                                </span>

                                <button className="w-8 h-8 rounded-md hover:bg-gray-100 flex items-center justify-center">
                                    <EllipsisIcon size={18} />
                                </button>
                            </div>
                        ))}

                        {/* ERRO LOAD MORE */}
                        {error && users.length > 0 && (
                            <div className="py-4 text-center text-red-500">
                                Erro ao carregar mais usuários
                            </div>
                        )}
                    </div>

                    {/* LOAD MORE */}
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={() => fetchUsers(cursor)}
                            disabled={!hasMore || loading}
                            style={{cursor: !hasMore ? 'no-drop' : 'pointer'}}
                            className="px-4 py-2 text-sm rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                        >
                            {loading
                                ? "Carregando..."
                                : hasMore
                                    ? "Carregar mais"
                                    : "Sem mais usuários"}
                        </button>
                    </div>
                </div>
            </WhiteBoxAdmin>
            <br /> <br /> <br /> <br /> <br /> <br />
        </div>
    );
}