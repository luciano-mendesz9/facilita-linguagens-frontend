'use client';
import { useAuth } from "@/src/contexts/AuthContexts";
import user, { GlobeLockIcon, PlayIcon } from "lucide-react";
import MensageMotivational from "@/src/components/old-pages/parts-dashboard/mensagemMotivaional";
import LogoutButton from "@/src/components/old-pages/parts-dashboard/logOut";
import { LayoutDashboard, FileClock, Trophy, CircleStar, Shapes, UserPen, LogOutIcon, } from "lucide-react";
import Line from "@/src/components/members/line";
import SidebarMobile from "@members-components/mobile-sidebar";
import Image from "next/image";
import UserProfile from '@assets/profile.png';
import { usePathname } from "next/navigation";

export const menuItems = [
    { id: 1, title: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { id: 2, title: "Nova Leitura", icon: PlayIcon, path: "/dashboard/start-reading" },
    { id: 3, title: "Histórico de Leitura", icon: FileClock, path: "/dashboard/reading-history" },
    { id: 4, title: "Ranking", icon: FileClock, path: "/dashboard/ranking" },
    //{ id: 3, title: "Troféus", icon: Trophy, path: "/trofes" },
    ///{ id: 4, title: "Conquistas", icon: CircleStar, path: "/conquistas" },
    //{ id: 5, title: "Desafios", icon: Shapes, path: "/desafios" },
    { id: 6, title: "Perfil", icon: UserPen, path: "/dashboard/profile" }
];

export function Sidebar() {
    const { user } = useAuth();
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname.endsWith(path)//pathname === path || pathname.startsWith(path + "/");
    };

    return (
        <>
            <div className="flex items-center">
                <Image
                    width={50}
                    height={50}
                    src={UserProfile}
                    alt="Perfil de usuário"
                />
                <div className="relative  ml-4">
                    <span className=" font-semibold">{user?.firstName} {user?.lastName ?? `${user?.lastName}`}</span> <br />
                    <div className="text-sm">
                        <span>Nível 5</span> - <span>Broche de Ouro</span>
                    </div>
                </div>
            </div>

            <h2 className="text-center mt-6 mb-5 font-semibold text-blue-500">
                Facilita Linguagens
            </h2>

            <Line />

            {/* <ul className="mt-4 ">
                {menuItems.map((item) => (
                    <li key={item.id} className="group">
                        <a href={item.path} className="flex items-center gap-2 text-gray-500 font-medium group-hover:text-blue-500 border border-gray-400 p-2.5 rounded-[15px] mt-2 text-[15px]">
                            <item.icon color="gray" size={20} />
                            {item.title}
                        </a>
                    </li>
                ))}

                {user?.isCollaborator && (
                    <li key={'admin'} className="group">
                        <a href={'/admin'} className="flex items-center gap-2 text-gray-500 font-medium group-hover:text-blue-500 border border-gray-400 p-2.5 rounded-[15px] mt-2 text-[15px]">
                            <GlobeLockIcon color="gray" size={20} />
                            {'Painel Admin'}
                        </a>
                    </li>
                )}

            </ul> */}

            <ul className="mt-4">
                {menuItems.map((item) => {
                    const active = isActive(item.path);

                    return (
                        <li key={item.id}>
                            <a
                                href={item.path}
                                className={`
            flex items-center gap-2 font-medium border p-2.5 rounded-[15px] mt-2 text-[15px] transition-colors
            ${active
                                        ? "bg-blue-100 text-blue-500 border-2 border-blue-300"
                                        : "text-gray-500 border-gray-400 hover:text-blue-500 hover:bg-blue-50"}
          `}
                            >
                                <item.icon
                                    size={20}
                                    className={active ? "text-blue-500" : "text-gray-500"}
                                />
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>

            <div className="absolute bottom-3 w-full float">
                <span className="">
                    <MensageMotivational
                        margin="mr-7"
                        message="Talvez seu primeiro passo não te leve onde você já quer chegar, mas com certeza, ele já te dirá o lugar!"
                    />
                </span>
                <span className="">
                    <LogoutButton
                        icon={LogOutIcon}
                        text="Sair"
                        padding="p-2"
                        margin="mt-2"
                        width="w-62" />
                </span>
            </div>
        </>
    )
}

export default function SidebarMember() {

    return (
        <>
            <div className="bg-white h-full w-85 p-4 border-r border-gray-300 relative md:block hidden ">
                <Sidebar />
            </div>
            <SidebarMobile />
        </>
    )
}