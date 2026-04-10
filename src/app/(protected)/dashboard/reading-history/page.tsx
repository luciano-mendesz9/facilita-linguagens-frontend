'use client';
import WhiteBoxAdmin from "@/src/components/admin/white-box";
import Button from "@/src/components/members/button";
import TitlePageMember from "@/src/components/members/title-page";
import LeiturasRecentes from "@/src/components/old-pages/parts-dashboard/leituras-recentes";
import { MONTHS } from "@/src/constants";
import { getGenres } from "@/src/functions";
import { DataGenreType } from "@/src/types/datas.types";
import { TagIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ReadingHistoryPage() {
    const [genres, setGenres] = useState<DataGenreType[] | null>(null);

    useEffect(() => {
        const fetch = async () => {
            const data = await getGenres({});
            setGenres(data);
        }

        fetch();
    }, [])

    return (
        <div>
            <div className=" flex items-center justify-between mb-10 md:flex-row flex-col">
                <TitlePageMember
                    text="Histórico de Leitura"
                    description="Abaixo você encontra uma tabela com até os 100 textos mais recentes que você leu"
                />

                <Button styles="md:block hidden" title="Iniciar nova leitura" />
            </div>
            <WhiteBoxAdmin>
                <div className="flex items-center justify-between gap-3 flex-col md:flex-row">
                    <select className="border border-gray-600 p-2.5 rounded-lg w-full md:text-[16px] text-[14px]" name="month" id="month">
                        <option value="all">Todos os Meses</option>
                        {MONTHS.map(month => <option key={month} value={month.toLowerCase()}>{month}</option>)}
                    </select>
                    <select className="border border-gray-600 p-2.5 rounded-lg w-full md:text-[16px] text-[14px]" name="genre" id="genre">
                        <option value="all">Todos os Gêneros</option>
                        {genres && genres.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
                    </select>
                    <select className="border border-gray-600 p-2.5 rounded-lg w-full md:text-[16px] text-[14px]" name="genre" id="genre">
                        <option value="all">Questôes Certas & Erradas</option>
                        <option value="wrong">Somente erradas</option>
                        <option value="correct">Somente certas</option>
                    </select>
                    <Button styles="w-full" title="Filtrar" />
                </div>
            </WhiteBoxAdmin>
            <br />
            <WhiteBoxAdmin>
                <LeiturasRecentes
                    date="12 de Janeiro de 2026"
                    showDate
                    icon={TagIcon}
                />
                <LeiturasRecentes
                    icon={TagIcon}
                />
            </WhiteBoxAdmin>
        </div>
    )

}