'use client';

import WhiteBoxAdmin from "@/src/components/admin/white-box";
import Line from "@/src/components/members/line";
import { useDatabase } from "@/src/contexts/DatabaseContext";
import { formatPrismaDate } from "@/src/functions/date";
import { DataGenreType } from "@/src/types/datas.types";
import { TagIcon } from "lucide-react";
import { useState } from "react";

export default function GenresDataBox({ setAddGenrePopuOn }: { setAddGenrePopuOn: (value: boolean) => void }) {

    const { genres } = useDatabase();
    const [genreForEditing, setGenreForEditing] = useState<DataGenreType | null>(null);
    const [isLoading] = useState(false);

    return (
        <WhiteBoxAdmin>
            <div className="flex items-center flex-col">
                <h1 className="text-[20px] font-semibold">Gêneros Textuais</h1>
                <span className="text-center text-[12.5px] text-gray-600 mb-3">
                    <strong>OBS:</strong> Clique em uma das opções para editá-las
                </span>
            </div>

            <Line />
            <br />

            {!genres.length ? (
                <p className="text-[14px] text-gray-600 text-center">
                    {isLoading ? 'Buscando gêneros, aguarde...' : 'Não há gêneros anexados'}
                </p>
            ) : (
                <div className="flex gap-3 flex-col h-80 overflow-y-auto">
                    {genres.map(genre => (
                        <button
                            key={genre.id}
                            className="bg-gray-200 flex justify-between items-center p-2 py-3 rounded-lg hover:bg-gray-400"
                            onClick={() => {
                                setGenreForEditing(genre);
                                setAddGenrePopuOn(true);
                            }}
                        >
                            <div className="flex flex-col items-start">
                                <span className="font-semibold">
                                    {genre.name} - {genre.totalTexts} Textos
                                </span>
                                <span className="text-gray-500 text-[12px]">
                                    De {genre.creatorName} | {formatPrismaDate(genre.createdAt, '.').date}
                                </span>
                            </div>

                            <div
                                style={{ backgroundColor: genre.color === '#fff' || genre.color === '#ffffff' ? '#007bff' : genre.color }}
                                className="w-8 h-8 rounded-full flex items-center justify-center"
                            >
                                <TagIcon color="white" className="w-5 h-5" />
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </WhiteBoxAdmin>
    )

}