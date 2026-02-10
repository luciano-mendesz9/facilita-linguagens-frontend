import Image from "next/image";
import { PLATFORM_NAME } from "@/src/constants";
import { LogOutIcon, SearchIcon } from "lucide-react";

import ProfileImage from '@assets/profile.png';

export default function TopbarAdmin() {
    return (
        <div className="flex sticky top-4 justify-between items-center" >
            <div className="flex flex-col">
                <span className="text-2xl font-semibold text-white">{PLATFORM_NAME.toUpperCase()}</span>
                <span className="text-[#ffffffd0]">Área Administrativa</span>
            </div>

            <div className="flex items-center gap-3">
                <form action="#" className="flex items-center gap-2 text-white bg-[#00000034] pl-4 p-2 rounded-2xl">
                    <SearchIcon />
                    <input type="email" name="search" id="search" required
                        placeholder="Buscar usuário por email"
                        className="outline-none p-2 w-100"
                    />
                </form>
                <Image
                    src={ProfileImage}
                    alt="Imagem de perfil"
                    height={60}
                    className="rounded-full border-3 border-white"
                />

                <button className="cursor-pointer hover:text-yellow-300 text-white">
                    <LogOutIcon size={36} />
                </button>
            </div>
        </div>
    )
}