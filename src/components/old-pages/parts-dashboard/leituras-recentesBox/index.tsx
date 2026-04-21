import { BookOpenCheck, Clock, FileChartColumnIncreasing, ChevronRight, Tag } from "lucide-react";
import TitlePageMember from "@/src/components/members/title-page";
import RecentsReading from "@/src/components/old-pages/parts-dashboard/leituras-recentes";
import StatusBadge from "@/src/components/members/status-badge";

export default function LeiturasRecentesBox() {
  
    const recentReadings = [
        {
            id: 1,
            icon: Tag,
            tituloDoTexto: "O Sapo e o Boi",
            autorDoTexto: "Fernando Alfredo",
            generoDoTexto: "Conto",
            bgIconColor: "bg-blue-100",
            iconColor: "text-blue-600",
            borderIconColor: "border-blue-600"
        },
        {
            id: 2,
            icon: Tag,
            tituloDoTexto: "O Maquinário",
            autorDoTexto: "Mariana Brandão",
            generoDoTexto: "Conto",
            bgIconColor: "bg-blue-100",
            iconColor: "text-blue-600",
            borderIconColor: "border-blue-600"
        },
        {
            id: 3,
            icon: Tag,
            tituloDoTexto: 'Apenas um "oi"',
            autorDoTexto: "Mariana Brandão",
            generoDoTexto: "Conto",
            bgIconColor: "bg-pink-100",
            iconColor: "text-pink-600",
            borderIconColor: "border-pink-600"
        }
    ];
  
    return (
        <div className="border border-gray-300 rounded-4xl w-full h-full lg:flex-2 shadow-md">
            
            <nav className="hidden sm:block bg-white rounded-t-4xl p-4 px-10 mt-2">
                <div className="flex justify-between items-center">
                    <span className="text-[18px] font-semibold">
                        Leituras Recentes
                    </span>
                    <span className="text-blue-500 font-medium">
                        <a href="/dashboard/reading-history"
                            target="_self"
                            className="hover:underline">
                            Ver todas
                        </a>
                    </span>
                </div>
            </nav>

            <nav className="flex sm:hidden bg-white rounded-t-4xl p-3 px-4 mt-2">
                <div className="flex justify-between items-center w-full">
                    <span className="text-[14px] font-semibold">
                        Leituras Recentes
                    </span>
                    <span className="text-blue-500 font-medium text-xs">
                        <a href="/dashboard/reading-history"
                            target="_self"
                            className="hover:underline">
                            Ver todas
                        </a>
                    </span>
                </div>
            </nav>

            <div className="hidden sm:block bg-white rounded-b-4xl md:p-5 p-2">
                <div className="space-y-3">
                    {recentReadings.map((reading) => (
                        <RecentsReading
                            key={reading.id}
                            icon={reading.icon}
                            iconSize={27}
                            tituloDoTexto={reading.tituloDoTexto}
                            autorDoTexto={reading.autorDoTexto}
                            generoDoTexto={reading.generoDoTexto}
                            bgIconColor={reading.bgIconColor}
                            iconColor={reading.iconColor}
                            borderIconColor={reading.borderIconColor}
                        />
                    ))}
                </div>
            </div>

            <div className="flex sm:hidden bg-white rounded-b-4xl p-2">
                <div className="space-y-2 w-full">
                    {recentReadings.map((reading) => (
                        <div key={reading.id} className="flex flex-col gap-2 p-2 rounded-lg border border-gray-100 hover:bg-blue-50 transition-colors cursor-pointer">
                            
                            <div className="flex items-center justify-between w-full">
                                <StatusBadge 
                                    title="Acertou a questão"
                                    type="success"
                                />
                                <ChevronRight size={18} className="text-gray-500" />
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <div className={`shrink-0 border ${reading.borderIconColor} rounded-full ${reading.bgIconColor} flex items-center justify-center h-10 w-10`}>
                                    <reading.icon size={18} className={reading.iconColor} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <span className="font-semibold text-gray-900 text-sm block truncate">
                                        {reading.tituloDoTexto} - {reading.autorDoTexto}
                                    </span>
                                    <span className="text-xs text-gray-500 block mt-0.5">
                                        <strong>Gênero:</strong> {reading.generoDoTexto}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}