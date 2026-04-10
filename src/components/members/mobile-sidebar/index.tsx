'use client'

import { useState } from "react";
import { PLATFORM_NAME } from "@/src/constants";
import { HomeIcon, ListIcon, PlayIcon } from "lucide-react";
import Image from "next/image";
import ProfileDefault from '@assets/profile.png'
import { Sidebar } from "../sidebar";


export default function SidebarMobile() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Top bar */}
            <div className="bg-white border-b border-gray-200 p-4 flex justify-between md:hidden">
                <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => setOpen(true)}
                >
                    <ListIcon />
                    <span className="text-blue-500 font-semibold">{PLATFORM_NAME}</span>
                </div>
            </div>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`
                    fixed top-0 left-0 h-full w-72 bg-white z-50 p-4
                    transform transition-transform duration-300
                    ${open ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                <Sidebar />
            </div>

            {/* Bottom nav */}
            <div className="bg-white w-full py-3 px-2 flex justify-around items-center fixed bottom-0 left-0 z-10 border-t border-gray-200 md:hidden">
                <a href="#" className="flex flex-col items-center flex-1">
                    <HomeIcon />
                    <span className="text-[12px]">Início</span>
                </a>

                <a href="#" className="flex flex-col items-center flex-1">
                    <div className="bg-blue-500 w-full p-2 rounded-lg flex gap-1 items-center justify-center">
                        <PlayIcon color="white" size={20} />
                        <span className="text-[11px] text-white font-medium">
                            Nova Leitura
                        </span>
                    </div>
                </a>

                <a href="#" className="flex flex-col items-center flex-1">
                    <Image
                        src={ProfileDefault}
                        alt="perfil"
                        width={30}
                        height={30}
                        className="rounded-full"
                    />
                    <span className="text-[12px]">Você</span>
                </a>
            </div>
        </>
    );
}