'use client';
import { useEffect, useState } from "react";
import LeiturasRecentesBox from"@/src/components/old-pages/parts-dashboard/leituras-recentesBox";
import LevelDoUsuario from"@/src/components/old-pages/parts-dashboard/levelUserBox";


export default function SimpleInsightBox() {
    return (

        <section className="mt-8">
            <div className="flex flex-col lg:flex-row gap-6 pb-7 px-4">
                <LeiturasRecentesBox/>
                <LevelDoUsuario/>
            </div>
        </section>
    );
}