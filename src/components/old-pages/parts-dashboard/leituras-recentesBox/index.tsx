import { BookOpenCheck, Clock, FileChartColumnIncreasing, ChevronRight, Tag } from "lucide-react";
import TitlePageMember from "@/src/components/members/title-page";
import RecentsReading from "@/src/components/old-pages/parts-dashboard/leituras-recentes";

export default function LeiturasRecentesBox
() {
  
    // Array com todas as leituras recentes
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
                <nav className="bg-white rounded-t-4xl p-4 px-10 mt-2 ">
                    <div className="flex justify-between items-center">
                        <span className="text-[18px] font-semibold">
                             Leituras Recentes
                        </span>
                        <span className="text-blue-500 font-medium">
                            <a href=""
                                target="_self"
                                className="hover:underline">
                                Ver todas
                            </a>
                        </span>
                    </div>
                </nav>

                <div className="bg-white rounded-b-4xl md:p-5 p-2 ">
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
            </div>
    )
}