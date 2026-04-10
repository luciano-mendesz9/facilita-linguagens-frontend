'use client';
import StartReadBox from "@/src/components/old-pages/parts-dashboard/advanceBox/page";
import FrequenciaDeLeiturasBox from "@/src/components/old-pages/parts-dashboard/frequenciaLeituraBox/index";
import StatusProgressBox from "@/src/components/old-pages/parts-dashboard/status-progressBox";
import LeiturasRecentesBox from "@/src/components/old-pages/parts-dashboard/leituras-recentesBox";
import LevelDoUsuario from "@/src/components/old-pages/parts-dashboard/levelUserBox";

export default function Dashboard() {

    return (
        <div>
            <StartReadBox indexRanking={1}/>
            <FrequenciaDeLeiturasBox />
            <StatusProgressBox />

            <div className="flex md:flex-row flex-col-reverse flex-2 gap-2 mb-7">
                <LeiturasRecentesBox />
                <LevelDoUsuario />
            </div>
        </div>
    )
}