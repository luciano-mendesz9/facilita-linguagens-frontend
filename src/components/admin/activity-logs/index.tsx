import Image from "next/image";
import WhiteBoxAdmin from "../white-box";

import ProfileImage from '@assets/profile.png';
import { MONTHS } from "@/src/constants";

const data = [
    {
        name: 'João Silva',
        role: 'Desenvolvedor',
        action: 'Criou um novo usuário',
        date: '2024-06-01 14:30'
    },
    {
        name: 'João Silva',
        role: 'Desenvolvedor',
        action: 'Criou um novo usuário',
        date: '2024-06-01 14:30'
    },
    {
        name: 'João Silva',
        role: 'Desenvolvedor',
        action: 'Criou um novo usuário',
        date: '2024-06-01 14:30'
    },
    {
        name: 'João Silva',
        role: 'Desenvolvedor',
        action: 'Criou um novo usuário',
        date: '2024-06-01 14:30'
    },
    {
        name: 'João Silva',
        role: 'Desenvolvedor',
        action: 'Criou um novo usuário',
        date: '2024-06-01 14:30'
    },
    {
        name: 'João Silva',
        role: 'Desenvolvedor',
        action: 'Criou um novo usuário',
        date: '2024-06-01 14:30'
    },
    {
        name: 'João Silva',
        role: 'Desenvolvedor',
        action: 'Criou um novo usuário',
        date: '2024-06-01 14:30'
    },
    {
        name: 'João Silva',
        role: 'Desenvolvedor',
        action: 'Criou um novo usuário',
        date: '2024-06-01 14:30'
    },
    {
        name: 'João Silva',
        role: 'Desenvolvedor',
        action: 'Criou um novo usuário',
        date: '2024-06-01 14:30'
    },
]

function ActionRow({ name, role, action, date }: { name: string; role: string; action: string; date: string }) {
    return (
        <div className="flex items-center justify-between pt-3 pb-3 border-b pl-3 pr-3 border-b-gray-400">
            <div className="flex items-center gap-2">
                <Image
                    src={ProfileImage}
                    alt="Imagem de perfil"
                    height={50}
                    className="rounded-full"
                />
                <div className="flex flex-col">
                    <span className="font-semibold">{name}</span>
                    <span className="text-[12px] text-gray-500">{role}</span>
                </div>
            </div>
            <span className="text-gray-900">{action}</span>
            <span className="text-gray-500">{date}</span>
        </div>
    )
}

export default function ActivityLogsAdmin() {
    return (
        <WhiteBoxAdmin>
            <div className="border border-gray-400 p-3 rounded-lg flex items-center justify-between">
                <span className="text-[18px] font-semibold">Histórico de Atividade Administrativas</span>
                <div className="flex items-center gap-2">
                    <select name="months" id="months" className="w-80 p-3 rounded-lg border border-gray-400" >
                        <option value="all">Todos os Meses</option>
                        {MONTHS.map((month, index) => (
                            <option key={index} value={month.toLowerCase()}>{month}</option>
                        ))}
                    </select>
                    <select name="admins" id="admins" className="w-80 p-3 rounded-lg border border-gray-400" >
                        <option value="all">Todos os Admins</option>
                    </select>
                </div>
            </div>
            <div className="border border-gray-400 p-3 rounded-lg mt-3 max-h-100 overflow-y-auto">
                {data.length === 0 ? <span>Não há históricos</span> : data.map((item, index) => (
                    <ActionRow key={index}
                        name={item.name}
                        role={item.role}
                        action={item.action}
                        date={item.date}
                    />
                ))}
            </div>
        </WhiteBoxAdmin>
    )
}