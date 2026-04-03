'use client'
// import HeaderTitleAdmin from "@/src/components/admin/header-title";
// import WhiteBoxAdmin from "@/src/components/admin/white-box";
import Button from "@/src/components/members/button";
//import StatusBadge from "@/src/components/members/status-badge";
// import ProfileUser from '@assets/profile.png';

// export default function UsersList() {
//     return (
//         <div>
//             <div className="flex items-center justify-between">
//                 <HeaderTitleAdmin
//                     title="Listagem de Clientes"
//                     desc="Gerencie permissões, atividade e status de contas."
//                 />

//                 <Button
//                     title="+ adicionar usuário"
//                     bgColor="bg-green-600"
//                     action={() => { }}
//                 />

//             </div>
//             <WhiteBoxAdmin>
//                 <div></div>
//             </WhiteBoxAdmin>
//         </div>
//     )
// }



import { useState } from "react";
import StatusBadge from "@/src/components/members/status-badge";
import ProfileUser from '@assets/profile.png';
import HeaderTitleAdmin from "@/src/components/admin/header-title";
import WhiteBoxAdmin from "@/src/components/admin/white-box";
import { EllipsisIcon } from "lucide-react";

type User = {
    id: number;
    name: string;
    email: string;
    accountStatus: 'ATIVO' | 'INATIVO';
    subscription: 'ABERTA' | 'FECHADA';
    createdAt: string;
};

const mockUsers: User[] = [
    {
        id: 1,
        name: "Maria Fernanda Nunes",
        email: "mariafernunes@gmail.com",
        accountStatus: "ATIVO",
        subscription: "FECHADA",
        createdAt: "23-03-2026"
    },
    {
        id: 2,
        name: "Marcos Antônio",
        email: "marantony@gmail.com",
        accountStatus: "ATIVO",
        subscription: "ABERTA",
        createdAt: "23-03-2026"
    },
    {
        id: 3,
        name: "Cleumar de Jesus",
        email: "clemm98293@gmail.com",
        accountStatus: "ATIVO",
        subscription: "FECHADA",
        createdAt: "23-03-2026"
    }
];


export default function UsersTable() {
    const [users, setUsers] = useState<User[]>(mockUsers);

    const loadMore = () => {
        // simulação (depois você chama sua API e concatena)
        const newUsers = mockUsers.map(user => ({
            ...user,
            id: Math.random()
        }));

        setUsers(prev => [...prev, ...newUsers]);
    };

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
                    <div className="flex flex-col ">
                        {users.map((user, index) => (
                            <div
                                key={user.id}
                                className="grid grid-cols-[60px_1fr_180px_180px_160px_60px] items-center py-4 text-sm"
                            >
                                {/* ID */}
                                <span>{index + 1}</span>

                                {/* USER */}
                                <div className="flex items-center gap-3">
                                    <img
                                        src={ProfileUser.src}
                                        className="w-10 h-10 rounded-full"
                                        alt="profile"
                                    />

                                    <div className="flex flex-col">
                                        <span className="font-medium text-gray-800">
                                            {user.name}
                                        </span>
                                        <span className="text-gray-500 text-xs">
                                            {user.email}
                                        </span>
                                    </div>
                                </div>

                                {/* STATUS CONTA */}
                                <div>
                                    <StatusBadge
                                        title={user.accountStatus}
                                        type={user.accountStatus === 'ATIVO' ? 'success' : 'error'}
                                    />
                                </div>
                                {/* ASSINATURA */}
                                <div>
                                    <StatusBadge
                                        title={user.subscription}
                                        type={user.subscription === 'ABERTA' ? 'success' : 'error'}
                                    />
                                </div>

                                {/* DATA */}
                                <span className="text-gray-600">
                                    {user.createdAt}
                                </span>

                                {/* AÇÕES */}
                                <button className="w-8 h-8 rounded-md hover:bg-gray-100 flex items-center justify-center">
                                    <EllipsisIcon />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* LOAD MORE */}
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={loadMore}
                            className="px-4 py-2 text-sm rounded-md bg-gray-100 hover:bg-gray-200"
                        >
                            Carregar mais
                        </button>
                    </div>
                </div>
            </WhiteBoxAdmin>
        </div>
    );
}