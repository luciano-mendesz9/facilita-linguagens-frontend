import { BookOpenCheck, Clock} from "lucide-react";
import StatusProgres from "@/src/components/old-pages/parts-dashboard/status-progress/index";

export default function StatusProgressBox(){
    /*
    function formatTime(seconds: number) {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        const result = hrs !== 0? `${hrs}h ${mins}m`: `${mins}m ${secs}s`
        return result;
    }
    */
    
    // Array com todos os status
    const statusItems = [
        {
            id: 1,
            icon: BookOpenCheck,
            tipoDoStatus: "Textos Lidos",
            valorDoStatus: 0,
            text: "",
            iconColor: "text-blue-600",
            bgIconColor: "bg-blue-200",
            borderIconColor: "border-blue-600"
        },
        {
            id: 2,
            icon: Clock,
            tipoDoStatus: "Tempo Total",
            valorDoStatus: 0,
            text: "h",
            iconColor: "text-pink-600",
            bgIconColor: "bg-pink-200",
            borderIconColor: "border-pink-600"
        },
        {
            id: 3,
            icon: BookOpenCheck,
            tipoDoStatus: "Generos Vistos",
            valorDoStatus: 2,
            text: "",
            iconColor: "text-orange-600",
            bgIconColor: "bg-orange-200",
            borderIconColor: "border-orange-600"
        }
    ];
    
    return(
        <div className="grid gap-4 sm:gap-8 lg:gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center font-semibold mt-8 mb-8">
            {statusItems.map((item) => (
                <StatusProgres
                    key={item.id}
                    icon={item.icon}
                    tipoDoStatus={item.tipoDoStatus}
                    valorDoStatus={item.valorDoStatus}
                    text={item.text}
                    iconColor={item.iconColor}
                    bgIconColor={item.bgIconColor}
                    borderIconColor={item.borderIconColor}
                />
            ))}
        </div>
    );
}