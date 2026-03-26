'use client';
import { useAuth } from "@/src/contexts/AuthContexts";
import StartReadBox from "@/src/components/old-pages/parts-dashboard/advanceBox/page";
import FrequenciaDeLeiturasBox from "@/src/components/old-pages/parts-dashboard/frequenciaLeituraBox/index";
import StatusProgressBox from "@/src/components/old-pages/parts-dashboard/status-progressBox";
import LeiturasRecentesBox from "@/src/components/old-pages/parts-dashboard/leituras-recentesBox";
import LevelDoUsuario from "@/src/components/old-pages/parts-dashboard/levelUserBox";
import SimpleInsightBox from "@/src/components/old-pages/parts-dashboard/simpleBox/page";

import { BookOpenCheck, Clock, FileChartColumnIncreasing, ChevronRight, LucideIcon, Tag } from "lucide-react";

export default function Dashboard() {

    const { user } = useAuth();

    return (
        <div>
            <StartReadBox />
            <FrequenciaDeLeiturasBox />
            <StatusProgressBox />

            <div className="flex flex-2 gap-2 mb-7">
                <LeiturasRecentesBox />
                <LevelDoUsuario />
            </div>
        </div>
    )
}