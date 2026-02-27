// 'use client';

// import HeaderTitleAdmin from "@/src/components/admin/header-title";
// import WhiteBoxAdmin from "@/src/components/admin/white-box";
// import Button from "@/src/components/members/button";
// import Line from "@/src/components/members/line";
// import StatusBadge from "@/src/components/members/status-badge";
// import { DataGenreType, DataTextType } from "@/src/types/datas.types";
// import { CircleUserIcon, EyeIcon, PencilIcon, TagIcon, Trash2Icon } from "lucide-react";
// import { useState } from "react";

// export default function Attachments() {

//     const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
//     const [genres, setGenres] = useState<DataGenreType[]>([
//         { color: '#e705c5', createAt: '12/12', creatorName: 'Luciano', id: 1, name: 'Romance', totalTexts: 10 },
//         { color: '#4d05e7', createAt: '23/12', creatorName: 'Ryan', id: 2, name: 'Poema', totalTexts: 10 },
//         { color: '#3f2607', createAt: '24/12', creatorName: 'Gabriel', id: 3, name: 'Artigo', totalTexts: 10 },
//         { color: '#ad8a0a', createAt: '25/12', creatorName: 'Rita', id: 4, name: 'Aventura', totalTexts: 10 },
//     ]);


//     const [texts, setTexts] = useState<DataTextType[]>([
//         { createdAt: '23 de Janeiro, 20h43', genreId: 1, isImageOnly: false, publicId: '01', title: 'O Patinho Feio' },
//         { createdAt: '23 de Janeiro, 20h43', genreId: 2, isImageOnly: false, publicId: '02', title: 'Gabriela, a Donzela' }
//     ]);

//     const [isLoading, setIsLoading] = useState(false);

//     const handleSelectItem = (checked: boolean, id: string) => {
//         setSelectedIds((prev) => {
//             const next = new Set(prev);

//             if (checked) {
//                 next.add(id);
//             } else {
//                 next.delete(id);
//             }

//             return next;
//         });
//     };

//     return (
//         <div className="overflow-y-auto h-screen">
//             <HeaderTitleAdmin
//                 title="Gerenciador de Anexos"
//                 desc="Cadastre ou edite textos e gêneros textuais no sistema. Para cadastrar QUESTÕES ao texto, clique no ícone de edição."
//             />

//             <div className="flex items-center gap-5 mt-5">
//                 <Button styles="w-65 h-16" bgColor="bg-green-600" title="+ adicionar texto" />
//                 <Button styles="w-65 h-16" bgColor="bg-indigo-600" title="+ adicionar gênero" />
//             </div>

//             <div className="flex items-start mt-10 gap-5">
//                 <div className="flex-5">
//                     <WhiteBoxAdmin>
//                         <div className="flex items-center justify-between mb-5">
//                             <h2 className="text-[20px] font-semibold">Textos Anexados</h2>
//                             <button
//                                 style={{ cursor: 'no-drop' }}
//                                 className="flex items-center gap-3 bg-gray-300 px-5 py-2 rounded-md text-gray-500 font-medium"

//                             >
//                                 DELETAR SELECIONADOS
//                                 <Trash2Icon />
//                             </button>
//                         </div>
//                         <Line />
//                         <br />
//                         {!texts || texts.length === 0 ? <p className="text-[14px] text-gray-600 text-center">{isLoading ? 'Buscando textos, aguarde...' : 'Não há textos anexados'}</p> : (
//                             <div className="flex flex-col gap-7">
//                                 {texts.map((text, i) => (
//                                     <div key={i} className="flex items-center">
//                                         <div className="flex items-center gap-2 flex-2">
//                                             <input
//                                                 type="checkbox"
//                                                 id={text.publicId}
//                                                 checked={selectedIds.has(text.publicId)}
//                                                 onChange={(e) => handleSelectItem(e.target.checked, text.publicId)}
//                                             />
//                                             <label className="cursor-pointer text-[18px] font-medium" htmlFor={text.publicId}>{text.title}</label>
//                                         </div>
//                                         <div className="flex-1 flex justify-center">
//                                             <StatusBadge color={genres.filter(g => g.id === text.genreId)[0].color} title={genres.filter(g => g.id === text.genreId)[0].name} />
//                                         </div>
//                                         <span className="flex-1 text-[14px] text-gray-500">{text.createdAt as string}</span>

//                                         <div className="flex flex-1 items-center gap-1">
//                                             <button
//                                                 className="h-10 rounded-lg bg-orange-400 w-10 cursor-pointer hover:bg-orange-500 flex items-center justify-center"
//                                             >
//                                                 <CircleUserIcon color="white" />
//                                             </button>
//                                             <button
//                                                 className="h-10 rounded-lg bg-indigo-600 w-10 cursor-pointer hover:bg-indigo-900 flex items-center justify-center"
//                                             >
//                                                 <EyeIcon color="white" />
//                                             </button>
//                                             <button
//                                                 className="h-10 rounded-lg bg-green-600 w-10 cursor-pointer hover:bg-green-800 flex items-center justify-center"
//                                             >
//                                                 <PencilIcon color="white" />
//                                             </button>
//                                             <button
//                                                 className="h-10 rounded-lg bg-red-400 w-10 cursor-pointer hover:bg-red-700 flex items-center justify-center"
//                                             >
//                                                 <Trash2Icon color="white" />
//                                             </button>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </WhiteBoxAdmin>
//                 </div>
//                 <div className="flex-2">
//                     <WhiteBoxAdmin>
//                         <div className="flex items-center flex-col">
//                             <h1 className="text-[20px] font-semibold">Gêneros Textuais</h1>
//                             <span className="text-center text-[12.5px] text-gray-600 mb-3"><strong>OBS:</strong> Clique em uma das opções para editá-las</span>
//                         </div>
//                         <Line />
//                         <br />

//                         {!genres || genres.length === 0 ? <p className="text-[14px] text-gray-600 text-center">{isLoading ? 'Buscando gêneros, aguarde...' : 'Não há gêneros anexados'}</p> : (
//                             <div className="flex gap-3 flex-col h-80     overflow-y-auto">
//                                 {genres.map((genre, i) => (
//                                     <button key={i} className="bg-gray-200 flex justify-between items-center p-2 py-3 rounded-lg hover:bg-gray-400">
//                                         <div className="flex flex-col items-start">
//                                             <span className="font-semibold">{genre.name} - 0 Textos</span>
//                                             <span className="text-gray-500 text-[12px]">De {genre.creatorName} | {`${genre.createAt}`}</span>
//                                         </div>
//                                         <TagIcon color="white" className={`bg-[${genre.color}] w-8 h-8 p-1 rounded-full`} />
//                                     </button>
//                                 ))}
//                             </div>
//                         )}

//                     </WhiteBoxAdmin>
//                 </div>

//             </div>
//         </div>
//     )
// }

'use client';

import HeaderTitleAdmin from "@/src/components/admin/header-title";
import WhiteBoxAdmin from "@/src/components/admin/white-box";
import Button from "@/src/components/members/button";
import Line from "@/src/components/members/line";
import StatusBadge from "@/src/components/members/status-badge";
import { DataGenreType, DataTextType } from "@/src/types/datas.types";
import { CircleUserIcon, EyeIcon, PencilIcon, TagIcon, Trash2Icon } from "lucide-react";
import { memo, useCallback, useMemo, useState } from "react";

type TextViewModel = {
    publicId: string;
    title: string;
    createdAt: string;
    genreName: string;
    genreColor: string;
};

type TextRowProps = {
    text: TextViewModel;
    checked: boolean;
    onSelect: (checked: boolean, id: string) => void;
};

const TextRow = memo(({ text, checked, onSelect }: TextRowProps) => {
    return (
        <div className="flex items-center">
            <div className="flex items-center gap-2 flex-2">
                <input
                    type="checkbox"
                    id={text.publicId}
                    checked={checked}
                    onChange={(e) => onSelect(e.target.checked, text.publicId)}
                />
                <label
                    className="cursor-pointer text-[18px] font-medium"
                    htmlFor={text.publicId}
                >
                    {text.title}
                </label>
            </div>

            <div className="flex-1 flex justify-center">
                <StatusBadge
                    color={text.genreColor}
                    title={text.genreName}
                />
            </div>

            <span className="flex-1 text-[14px] text-gray-500">
                {text.createdAt}
            </span>

            <div className="flex flex-1 items-center gap-1">
                <button className="h-10 rounded-lg bg-orange-400 w-10 cursor-pointer hover:bg-orange-500 flex items-center justify-center">
                    <CircleUserIcon color="white" />
                </button>
                <button className="h-10 rounded-lg bg-indigo-600 w-10 cursor-pointer hover:bg-indigo-900 flex items-center justify-center">
                    <EyeIcon color="white" />
                </button>
                <button className="h-10 rounded-lg bg-green-600 w-10 cursor-pointer hover:bg-green-800 flex items-center justify-center">
                    <PencilIcon color="white" />
                </button>
                <button className="h-10 rounded-lg bg-red-400 w-10 cursor-pointer hover:bg-red-700 flex items-center justify-center">
                    <Trash2Icon color="white" />
                </button>
            </div>
        </div>
    );
});

TextRow.displayName = 'TextRow';

export default function Attachments() {

    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

    const [genres] = useState<DataGenreType[]>([
        { color: '#e705c5', createAt: '12/12', creatorName: 'Luciano', id: 1, name: 'Romance', totalTexts: 10 },
        { color: '#4d05e7', createAt: '23/12', creatorName: 'Ryan', id: 2, name: 'Poema', totalTexts: 10 },
        { color: '#3f2607', createAt: '24/12', creatorName: 'Gabriel', id: 3, name: 'Artigo', totalTexts: 10 },
        { color: '#ad8a0a', createAt: '25/12', creatorName: 'Rita', id: 4, name: 'Aventura', totalTexts: 10 },
    ]);

    const [texts] = useState<DataTextType[]>([
        { createdAt: '23 de Janeiro, 20h43', genreId: 1, isImageOnly: false, publicId: '01', title: 'O Patinho Feio' },
        { createdAt: '23 de Janeiro, 20h43', genreId: 2, isImageOnly: false, publicId: '02', title: 'Gabriela, a Donzela' }
    ]);

    const [isLoading] = useState(false);

    // 🔥 O(1) lookup
    const genresMap = useMemo(() => {
        const map = new Map<number, DataGenreType>();

        for (const genre of genres) {
            map.set(genre.id, genre);
        }

        return map;
    }, [genres]);

    // 🔥 ViewModel (join sem custo no render)
    const textsView = useMemo<TextViewModel[]>(() => {
        return texts.map(text => {
            const genre = genresMap.get(text.genreId);

            return {
                publicId: text.publicId,
                title: text.title,
                createdAt: text.createdAt as string,
                genreName: genre?.name ?? 'Sem gênero',
                genreColor: genre?.color ?? '#ccc'
            };
        });
    }, [texts, genresMap]);

    const handleSelectItem = useCallback((checked: boolean, id: string) => {
        setSelectedIds(prev => {
            const next = new Set(prev);
            checked ? next.add(id) : next.delete(id);
            return next;
        });
    }, []);

    return (
        <div className="overflow-y-auto h-screen">
            <HeaderTitleAdmin
                title="Gerenciador de Anexos"
                desc="Cadastre ou edite textos e gêneros textuais no sistema. Para cadastrar QUESTÕES ao texto, clique no ícone de edição."
            />

            <div className="flex items-center gap-5 mt-5">
                <Button styles="w-65 h-16" bgColor="bg-green-600" title="+ adicionar texto" />
                <Button styles="w-65 h-16" bgColor="bg-indigo-600" title="+ adicionar gênero" />
            </div>

            <div className="flex items-start mt-10 gap-5">
                <div className="flex-5">
                    <WhiteBoxAdmin>
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="text-[20px] font-semibold">Textos Anexados</h2>
                            <button
                                style={{ cursor: 'no-drop' }}
                                className="flex items-center gap-3 bg-gray-300 px-5 py-2 rounded-md text-gray-500 font-medium"
                            >
                                DELETAR SELECIONADOS
                                <Trash2Icon />
                            </button>
                        </div>

                        <Line />
                        <br />

                        {!textsView.length ? (
                            <p className="text-[14px] text-gray-600 text-center">
                                {isLoading ? 'Buscando textos, aguarde...' : 'Não há textos anexados'}
                            </p>
                        ) : (
                            <div className="flex flex-col gap-7">
                                {textsView.map(text => (
                                    <TextRow
                                        key={text.publicId}
                                        text={text}
                                        checked={selectedIds.has(text.publicId)}
                                        onSelect={handleSelectItem}
                                    />
                                ))}
                            </div>
                        )}
                    </WhiteBoxAdmin>
                </div>

                <div className="flex-2">
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
                                    >
                                        <div className="flex flex-col items-start">
                                            <span className="font-semibold">
                                                {genre.name} - {genre.totalTexts} Textos
                                            </span>
                                            <span className="text-gray-500 text-[12px]">
                                                De {genre.creatorName} | {genre.createAt as string}
                                            </span>
                                        </div>

                                        <div
                                            style={{ backgroundColor: genre.color }}
                                            className="w-8 h-8 rounded-full flex items-center justify-center"
                                        >
                                            <TagIcon color="white" className="w-5 h-5" />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </WhiteBoxAdmin>
                </div>
            </div>
        </div>
    );
}