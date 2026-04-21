import { Zap } from "lucide-react";
import profile from "@assets/profile.png";
import Image from "next/image";

export default function MelhoresDoRankingBox() {
    const rankingData = [
        {
            posicao: 2,
            nome: "Luciano Mendes",
            xp: "2.375 XP",
            tipo: "prata",
        },
        {
            posicao: 1,
            nome: "Lucas Ferreira",
            xp: "2.400 XP",
            tipo: "ouro",
        },
        {
            posicao: 3,
            nome: "Maria Luiza",
            xp: "2.122 XP",
            tipo: "bronze",
        },
    ];

    const getDadosPorPosicao = (posicao: number) => {
        return rankingData.find(item => item.posicao === posicao);
    };

    return (
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-end gap-4 sm:gap-2 md:gap-3 lg:gap-4 mb-6 sm:mb-8 md:mb-10 pt-3 sm:pt-5 md:pt-7">
            
            <div className="flex sm:hidden w-full bg-white border border-[#868686] rounded-2xl shadow-lg p-3 items-center gap-3">
                <div className="flex items-center gap-3 flex-1">
                    <div className="w-12 h-12 rounded-full border-4 border-[#FFF200] shadow-lg overflow-hidden shrink-0">
                        <Image 
                            src={profile} 
                            alt="Foto de Lucas Ferreira"
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <span className="font-bold text-gray-800 text-sm">{getDadosPorPosicao(1)?.nome}</span>
                        <div className="flex items-center gap-1 mt-0.5">
                            <Zap className="w-3 h-3 text-[#FF701D]" />
                            <span className="font-bold text-xs text-[#FF701D]">{getDadosPorPosicao(1)?.xp}</span>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FFF200] text-[#FF701D] text-xs font-bold px-3 py-1 rounded-full border border-[#FF701D]">
                    1º
                </div>
            </div>

            <div className="flex sm:hidden w-full bg-white border border-[#868686] rounded-2xl shadow-lg p-3 items-center gap-3">
                <div className="flex items-center gap-3 flex-1">
                    <div className="w-12 h-12 rounded-full border-4 border-[#C1C0C0] shadow-lg overflow-hidden shrink-0">
                        <Image 
                            src={profile} 
                            alt="Foto de Luciano Mendes"
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <span className="font-bold text-gray-800 text-sm">{getDadosPorPosicao(2)?.nome}</span>
                        <div className="flex items-center gap-1 mt-0.5">
                            <Zap className="w-3 h-3 text-[#1D87FF]" />
                            <span className="font-bold text-xs text-[#1D87FF]">{getDadosPorPosicao(2)?.xp}</span>
                        </div>
                    </div>
                </div>
                <div className="bg-[#D9D9D9] text-[#606060] text-xs font-bold px-3 py-1 rounded-full border border-[#606060]">
                    2º
                </div>
            </div>

            <div className="flex sm:hidden w-full bg-white border border-[#868686] rounded-2xl shadow-lg p-3 items-center gap-3">
                <div className="flex items-center gap-3 flex-1">
                    <div className="w-12 h-12 rounded-full border-4 border-[#E4B6A3] shadow-lg overflow-hidden shrink-0">
                        <Image 
                            src={profile} 
                            alt="Foto de Maria Luiza"
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <span className="font-bold text-gray-800 text-sm">{getDadosPorPosicao(3)?.nome}</span>
                        <div className="flex items-center gap-1 mt-0.5">
                            <Zap className="w-3 h-3 text-[#1D87FF]" />
                            <span className="font-bold text-xs text-[#1D87FF]">{getDadosPorPosicao(3)?.xp}</span>
                        </div>
                    </div>
                </div>
                <div className="bg-[#E4B6A3] text-[#FF701D] text-xs font-bold px-3 py-1 rounded-full border border-[#FF701D]">
                    3º
                </div>
            </div>

            <div className="hidden sm:flex flex-row justify-center items-end gap-2 md:gap-3 lg:gap-4 w-full">

                <div className="relative flex flex-col items-center sm:-mt-12 md:-mt-16 order-1 sm:order-2">
                    <div className="bg-white border border-[#868686] rounded-2xl sm:rounded-3xl md:rounded-4xl p-4 sm:p-5 md:p-8 lg:p-10 shadow-lg w-auto pt-8 sm:pt-10 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-16 lg:pb-20">
                        <div className="w-20 h-20 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-30 lg:h-30 rounded-full flex items-center justify-center border-4 sm:border-6 md:border-8 border-[#FFF200] shadow-lg overflow-hidden">
                            <Image 
                                src={profile} 
                                alt="Foto de Lucas Ferreira"
                                width={96}
                                height={96}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        <div className="ml-3 sm:ml-5 md:ml-6 lg:ml-7.5">
                            <span className="bg-[#FFF200] text-[#FF701D] border-[#FF701D] text-xs sm:text-sm font-bold px-4 sm:px-5 md:px-6 lg:px-7 py-0.5 sm:py-1 rounded-lg border relative bottom-3 sm:bottom-4 md:bottom-5 right-0.5 sm:right-1">
                                1º
                            </span>
                        </div>
                        
                        <div className="relative top-2 sm:top-3 md:top-4 max-w-24 sm:max-w-28 md:max-w-32 lg:max-w-37.5">
                            <div className="mb-1 sm:mb-2 relative bottom-3 sm:bottom-4 md:bottom-5 text-center">
                                <span className="font-bold text-gray-800 text-xs sm:text-sm whitespace-nowrap block text-center">
                                    {getDadosPorPosicao(1)?.nome}
                                </span>
                            </div>
                            
                            <div className="relative bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 bg-[#FFF20080] border-[#FF701D] rounded-xl sm:rounded-2xl shadow-sm px-2 sm:px-2.5 md:px-3 py-0.5 border">
                                <div className="flex items-center justify-center gap-0.5 sm:gap-1">
                                    <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#FF701D]" />
                                    <span className="font-bold text-xs sm:text-sm text-[#FF701D]">{getDadosPorPosicao(1)?.xp}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative right-0 sm:right-4 md:right-6 lg:right-8 flex flex-col items-center order-2 sm:order-1">
                    <div className="bg-white border border-[#868686] rounded-2xl sm:rounded-3xl md:rounded-4xl p-4 sm:p-5 md:p-8 lg:p-10 shadow-lg w-auto">
                        <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-23 md:h-23 lg:w-26 lg:h-26 rounded-full flex items-center justify-center border-4 sm:border-6 md:border-8 border-[#C1C0C0] shadow-lg overflow-hidden ml-0.5">
                            <Image 
                                src={profile} 
                                alt="Foto de Luciano Mendes"
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        <div className="ml-2 sm:ml-3 md:ml-4 lg:ml-5.5">
                            <span className="bg-[#D9D9D9] text-[#606060] text-xs sm:text-sm font-bold px-3 sm:px-5 md:px-6 lg:px-7 py-0.5 sm:py-1 rounded-lg border border-[#606060] relative bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 right-0.5 sm:right-1">
                                2º
                            </span>
                        </div>
                        
                        <div className="relative top-2 sm:top-3 md:top-4 max-w-20 sm:max-w-28 md:max-w-32 lg:max-w-37.5">
                            <div className="mb-1 sm:mb-2 relative bottom-3 sm:bottom-4 md:bottom-5 text-center">
                                <span className="font-bold text-gray-800 text-xs sm:text-sm whitespace-nowrap block text-center">
                                    {getDadosPorPosicao(2)?.nome}
                                </span>
                            </div>
                            
                            <div className="relative bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 bg-[#1D87FF26] border-[#1D87FF] rounded-xl sm:rounded-2xl shadow-sm px-1.5 sm:px-2 md:px-3 py-0.5 border">
                                <div className="flex items-center justify-center gap-0.5 sm:gap-1 text-[#1D87FF]">
                                    <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                                    <span className="font-bold text-xs sm:text-sm">{getDadosPorPosicao(2)?.xp}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative left-0 sm:left-4 md:left-6 lg:left-8 flex flex-col items-center order-3">
                    <div className="bg-white border border-[#868686] rounded-2xl sm:rounded-3xl md:rounded-4xl p-4 sm:p-5 md:p-8 lg:p-10 shadow-lg w-auto">
                        <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-23 md:h-23 lg:w-26 lg:h-26 rounded-full flex items-center justify-center border-4 sm:border-6 md:border-8 border-[#E4B6A3] shadow-lg overflow-hidden">
                            <Image 
                                src={profile} 
                                alt="Foto de Maria Luiza"
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        <div className="ml-2 sm:ml-3 md:ml-4 lg:ml-5">
                            <span className="bg-[#E4B6A3] text-[#FF701D] text-xs sm:text-sm font-bold px-3 sm:px-5 md:px-6 lg:px-7 py-0.5 sm:py-1 rounded-lg border border-[#FF701D] relative bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 right-0.5 sm:right-1">
                                3º
                            </span>
                        </div>
                        
                        <div className="relative top-2 sm:top-3 md:top-4 max-w-20 sm:max-w-28 md:max-w-32 lg:max-w-37.5">
                            <div className="mb-1 sm:mb-2 relative bottom-3 sm:bottom-4 md:bottom-5 text-center">
                                <span className="font-bold text-gray-800 text-xs sm:text-sm whitespace-nowrap block text-center">
                                    {getDadosPorPosicao(3)?.nome}
                                </span>
                            </div>
                            
                            <div className="relative bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 bg-[#1D87FF26] border-[#1D87FF] rounded-xl sm:rounded-2xl shadow-sm px-1.5 sm:px-2 md:px-3 py-0.5 border">
                                <div className="flex items-center justify-center gap-0.5 sm:gap-1 text-[#1D87FF]">
                                    <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                                    <span className="font-bold text-xs sm:text-sm">{getDadosPorPosicao(3)?.xp}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}