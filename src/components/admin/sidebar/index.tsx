'use client'

import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboardIcon, PaperclipIcon, SquareDashedMousePointerIcon, UserCogIcon } from "lucide-react";

const routes = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboardIcon },
    { name: 'Anexos', path: '/admin/attachments', icon: PaperclipIcon },
    { name: 'Colaboradores', path: '/admin/collaborators', icon: UserCogIcon },
    { name: 'Acessar Plataforma', path: '/dashboard', icon: SquareDashedMousePointerIcon },
]

export default function SidebarAdmin() {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div className="bg-white w-50 h-[85%] p-4 rounded-2xl sticky top-20 shadow-[0_0_20px_-5px_rgba(0,0,0,0.25)] flex flex-col items-start gap-3 overflow-y-auto">
            {routes.map((route, index) => {
                const isActive = pathname === route.path

                return (
                    <button
                        onClick={() => router.push(route.path)}
                        key={index}
                        className={`
              flex flex-col items-center justify-center w-full p-5 rounded-2xl
              transition-colors  cursor-pointer gap-2
              ${isActive
                                ? 'bg-[#24558D] text-white'
                                : 'bg-transparent text-gray-600 hover:bg-gray-100'
                            }
            `}
                    >
                        <route.icon
                            className={isActive ? 'text-white' : 'text-gray-600'}
                        />
                        <span>{route.name}</span>
                    </button>
                )
            })}
        </div>
    )
}
