'use client';
import Image from "next/image";
import Link from "next/link";
import { Rocket, Play, Share2 } from "lucide-react";
import TitlePageMember from "@/src/components/members/title-page";
import { useAuth } from "@/src/contexts/AuthContexts";
import profile from "@assets/profile.png";

export default function ProfilePage() {
    const { user } = useAuth();
    
    const actionButtons = [
        { label: "Trocar senha", bgColor: "#379E7C", href: "/dashboard/trocar-senha" },
        { label: "Fale com suporte", bgColor: "#FF9D1D", href: "/dashboard/suporte" },
        { label: "Editar perfil", bgColor: "#5F4008", href: "/dashboard/editar-perfil" }
    ];

    return (
        <div>
            {/* Título da página - Responsivo */}
            <div className="mt-4 sm:mt-7">
                <TitlePageMember
                    text="Perfil de usuário"
                    description={`ID: ${user?.publicId}`}
                />
            </div>

            {/* VERSÃO MOBILE - Card simplificado */}
            <div className="flex sm:hidden relative rounded-3xl px-4 py-6 mt-6 shadow-md bg-linear-to-r from-[#2B7FFF] to-[#4E8AD0]">
                
                {/* Imagem flutuante à esquerda (aumentada no mobile) */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <div className="w-28 h-28 rounded-full bg-white/30 border-4 border-white overflow-hidden">
                        <Image 
                            src={profile} 
                            alt="Foto de perfil"
                            width={112}
                            height={112}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Conteúdo mobile */}
                <div className="pl-32 w-full">
                    {/* Informações do usuário */}
                    <div className="text-white">
                        <h2 className="text-lg font-semibold mb-1">Luciano Mendez</h2>
                        <div className="bg-blue-300/60 rounded-3xl text-white text-xs font-semibold flex justify-center items-center p-1.5 w-32 gap-1 mb-1">
                            <Rocket size={14} />
                            Nível 05
                        </div>
                        <p className="text-xs">página broche de ouro</p>
                    </div>

                    {/* Data de ingresso e botões simplificados */}
                    <div className="mt-3">
                        <p className="text-white text-xs mb-2">Ingresso em 2026</p>
                        <div className="flex items-center gap-2">
                            <button className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/40 transition-colors cursor-pointer">
                                <Share2 size={16} className="text-white" />
                            </button>
                            <button className="bg-white text-blue-600 font-semibold py-2 px-5 rounded-3xl flex items-center hover:bg-gray-50 transition-colors text-sm">
                                <Play size={16} />
                                <span className="ml-2">Iniciar</span>
                            </button>
                        </div>
                    </div>

                    {/* Barra de progresso mobile */}
                    <div className="relative w-full bg-white/30 rounded-full h-4 overflow-hidden mt-4">
                        <div 
                            className="bg-white rounded-full h-full flex items-center justify-between px-3 transition-all duration-300" 
                            style={{ width: '80%' }}
                        >
                            <span className="text-black text-[10px] font-medium truncate">Progresso</span>
                            <span className="text-black text-[10px] font-medium whitespace-nowrap">5679/6000</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* VERSÃO DESKTOP - Card original preservado */}
            <div className="hidden sm:block relative rounded-3xl md:rounded-4xl px-12 py-12 mt-9 shadow-md bg-linear-to-r from-[#2B7FFF] to-[#4E8AD0]">
                
                {/* Imagem aumentada no desktop */}
                <div className="absolute left-12 top-1/2 -translate-y-1/2">
                    <div className="w-46 h-46 rounded-full bg-white/30 border-6 border-white overflow-hidden">
                        <Image 
                            src={profile} 
                            alt="Foto de perfil"
                            width={184}
                            height={184}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Ajuste no espaçamento para acomodar a imagem maior */}
                <div className="pl-54">
                    <div className="flex justify-between items-center">
                        <div className="text-white">
                            <h2 className="text-3xl font-semibold mb-3">Luciano Mendez</h2>
                            <div className="bg-blue-300/60 rounded-3xl text-white text-sm font-semibold flex justify-center items-center p-2 w-44 gap-2 mb-3">
                                <Rocket size={22} />
                                Nível 05
                            </div>
                            <span className="font-medium">
                                <span className="font-bold">Página</span> Broche de ouro
                            </span>
                        </div>

                        <div className="text-right">
                            <p className="text-white text-base mb-2">Ingresso em 2026</p>
                            <div className="flex items-center gap-4">
                                <button className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/40 transition-colors cursor-pointer">
                                    <Share2 size={24} className="text-white" />
                                </button>
                                <button className="bg-white text-[#1D87FF] font-semibold py-4 px-12 rounded-3xl flex items-center hover:bg-gray-50 transition-colors whitespace-nowrap">
                                    <Play size={24} />
                                    <span className="ml-3 text-base">Iniciar Leitura</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full bg-white/30 rounded-full h-6 overflow-hidden mt-8">
                        <div 
                            className="bg-white rounded-full h-full flex items-center justify-between px-6 transition-all duration-300" 
                            style={{ width: '80%' }}
                        >
                            <span className="text-black text-sm font-medium">Progresso de nível</span>
                            <span className="text-black text-sm font-medium">5679 XP / 6000 XP</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Botões de ação transformados em links */}
            <div className="rounded-3xl md:rounded-2lg p-3 sm:p-4 mt-6 sm:mt-9 shadow bg-white flex flex-col sm:flex-row gap-2 sm:gap-22">
                {actionButtons.map((button, index) => (
                    <Link 
                        key={index}
                        href={button.href}
                        className="rounded-xl py-2 sm:py-4 text-white cursor-pointer hover:opacity-90 transition-opacity flex-1 text-center text-sm sm:text-base"
                        style={{ backgroundColor: button.bgColor }}
                    >
                        {button.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}