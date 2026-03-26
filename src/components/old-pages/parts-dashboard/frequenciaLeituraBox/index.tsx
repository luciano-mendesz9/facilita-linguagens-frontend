import { Book, BookOpen } from "lucide-react";
import TitlePageMember from "@/src/components/members/title-page";


type DayStatus = "DONE" | "LOST" | "UNAVAIBLE";

interface DaysOfAttendeance {
    box: DayStatus;
}

export default function FrequenciaDeLeiturasBox() {

    const days: DaysOfAttendeance[] = [
        { box: "DONE" }, { box: "DONE" }, { box: "DONE" }, { box: "DONE" }, { box: "LOST" },
        { box: "LOST" }, { box: "DONE" }, { box: "DONE" }, { box: "DONE" }, { box: "DONE" },
        { box: "DONE" }, { box: "DONE" }, { box: "LOST" }, { box: "DONE" }, { box: "LOST" },
        { box: "DONE" }, { box: "UNAVAIBLE" }, { box: "UNAVAIBLE" }, { box: "UNAVAIBLE" }, { box: "UNAVAIBLE" },
        { box: "UNAVAIBLE" }, { box: "UNAVAIBLE" }, { box: "UNAVAIBLE" }, { box: "UNAVAIBLE" }, { box: "UNAVAIBLE" },
        { box: "UNAVAIBLE" }, { box: "UNAVAIBLE" }, { box: "UNAVAIBLE" }, { box: "UNAVAIBLE" }, { box: "UNAVAIBLE" }
    ];

    const statusToColor = {
        "DONE": "bg-blue-500",
        "LOST": "bg-red-400",
        "UNAVAIBLE": "bg-gray-400"
    };

    const stats = {
        done: days.filter(d => d.box === "DONE").length,
        lost: days.filter(d => d.box === "LOST").length,
        unavaible: days.filter(d => d.box === "UNAVAIBLE").length
    };

    return (
        <div className="w-full ">
            <div className="flex items-center justify-between mb-2">
                <span className="text-base">
                    <h1 className="text-[18px] font-semibold">Frequência de Leituras</h1>
                </span>
                <span className="text-blue-500 font-bold">{stats.done}/30 dias</span>
            </div>

            <div className="flex w-full gap-0.5">
                {days.map((day, index) => (
                    <div
                        key={index}
                        className={`flex-1 h-9 flex items-center justify-center ${statusToColor[day.box]} ${index === 0 ? 'rounded-l-full' :
                                index === days.length - 1 ? 'rounded-r-full' : ''
                            }`}
                        title={`Dia ${index + 1}`}
                    >
                        {day.box === "DONE" && (
                            <BookOpen className="text-white" size={14} />
                        )}
                        {day.box === "LOST" && (
                            <Book className="text-white" size={14} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}