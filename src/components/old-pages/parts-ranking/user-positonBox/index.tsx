import { Zap, ChevronRight } from "lucide-react";
import profile from "@assets/profile.png";
import Image from "next/image";

export default function UserPositon(){
    return(
        <div className="bottom-5 left-55 right-0 z-50 mx-auto px-2 sm:px-4 bg-[#1D87FF] rounded-3xl sm:rounded-4xl shadow-xl py-2 sm:py-1 w-full max-w-full">
            
            <div className="flex sm:hidden items-center justify-between gap-3">
                <span className="text-white text-xl font-bold ml-4">2º</span>

                <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center overflow-hidden shrink-0">
                    <Image 
                        src={profile} 
                        alt="Foto de perfil"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                    />
                </div>

                <p className="text-white/90 text-xs font-medium">
                    Faltam <strong className="text-white">126 XP</strong>
                </p>
            </div>

            <div className="hidden sm:flex items-center justify-between gap-1">
                <div className="flex flex-col items-center min-w-20 px-7 shrink-0 -ml-3">
                    <span className="text-white/90 text-xs font-semibold mb-0.5">Sua posição</span>
                    <span className="text-white text-2xl font-bold">2º</span>
                </div>

                <div className="h-15 w-px bg-white/30 mx-0 shrink-0 mr-7"></div>
                
                <div className="flex items-center gap-3 flex-1 min-w-0 -ml-2">
                    <div className="w-13 h-13 rounded-full bg-white/30 flex items-center justify-center overflow-hidden shrink-0">
                        <Image 
                            src={profile} 
                            alt="Foto de perfil"
                            width={52}
                            height={52}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    <div className="min-w-0 flex-1">
                        <h3 className="text-white text-base font-bold truncate">
                            Você (Luciano Mendes - 33CHAR)
                        </h3>
                        
                        <div className="flex items-center gap-1.5 mt-0.5 text-white text-sm whitespace-nowrap">
                            <span>Explorador</span>
                            <span>-</span>
                            <span>2.375 XP</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col shrink-0 mr-2">
                    <div className="mb-1.5">
                        <p className="text-white/90 text-sm font-medium whitespace-nowrap">
                            Faltam <strong>126 XP</strong> para ultrapassar <span>#1°</span>
                        </p>
                    </div>
                    
                    <div className="h-2.5 bg-black/40 rounded-full overflow-hidden" style={{ width: 'auto', minWidth: '200px' }}>
                        <div 
                            className="h-full bg-white rounded-full"
                            style={{ width: '87%' }}
                        ></div>
                    </div>
                </div>

                <div className="min-w-0 shrink-0">
                    <button className="w-50 bg-white text-[#1D87FF] font-bold py-3 px-6 rounded-3xl shadow-lg flex items-center text-left gap-2 relative">
                        <span className="text-sm">Iniciar Leitura</span>
                        <span className="absolute right-2"><ChevronRight/></span>
                    </button>
                </div>
            </div>
        </div>
    );
}