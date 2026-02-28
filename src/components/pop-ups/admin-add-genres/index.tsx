// 'use client';

// import { useState } from "react";
// import PopUp from "../../members/pop-up";
// import { DataGenreType } from "@/src/types/datas.types";
// import Button from "../../members/button";

// type Props = {
//     closeAction: () => void;
//     genres: DataGenreType[];
//     isCreateGenre: boolean
//     genreForEditing: DataGenreType | null
// }

// export default function AdminAddGenrePopup({ closeAction, genres, isCreateGenre, genreForEditing }: Props) {

//     const [genreEdit, setGenreEdit] = useState<DataGenreType | null>(genreForEditing);
//     const [genreName, setGenreName] = useState<string>(genreEdit ? genreEdit.name : '');
//     const [color, setColor] = useState<string>(genreEdit ? genreEdit.color : '#fff');

//     return (
//         <PopUp actionClose={closeAction} header={{
//             title: isCreateGenre ? 'Adicionar Gênero Textual' : 'Editar Gênero ' + genreEdit?.name,
//             desc: isCreateGenre ? 'campos com * são obrigatórios' : 'campos com * são obrigatórios | Criado por ' + genreEdit?.creatorName
//         }}>
//             <div className="w-190 flex items-start gap-4">
//                 <div className="flex-3 mt-10.5">
//                     <div>
//                         <label className="text-[15px] font-medium" htmlFor="genre-name">Nome do Gênero *:</label>
//                         <input
//                             type="text"
//                             placeholder="Ex: Poema"
//                             className="border border-gray-500 rounded-lg w-full mt-1 p-2"
//                             onChange={(e) => setGenreName(e.target.value)}
//                             value={genreEdit?.name}
//                         />
//                     </div>
//                     <div className="mt-4 flex flex-col">
//                         <label className="text-[15px] font-medium" htmlFor="genre-name">Cor de Identificação *: ({color})</label>
//                         <div className="p-1 border mt-3 border-gray-500 h-20 w-50 roundel">
//                             <input type="color" value={genreEdit?.color || '#fff'} onChange={(e) => setColor(e.target.value)} className="w-full h-full border-white border-8" />
//                         </div>
//                     </div>
//                     <Button styles="w-full mt-8" bgColor="bg-green-600" title="salvar gênero textual" />
//                     <Button styles="w-full mt-5" disabled={!genreEdit ? true : false} bgColor="bg-red-600" title="deletar gênero" />
//                 </div>
//                 <div className="p-3 flex-2">
//                     <div className="flex flex-col">
//                         <span className="text-[18px] font-semibold">Gêneros Cadastrados</span>
//                         <span className="text-[12px] text-gray-600"><strong>Obs:</strong> clique em uma opção para  editá-la</span>

//                         <div className="h-85 w-full border-2 border-gray-300 rounded-2xl mt-3 p-3 px-5 overflow-y-auto">
//                             {genres.map((genre, i) => (
//                                 <button onClick={() => setGenreEdit(genre)} key={i} className="flex justify-between items-center rounded-lg hover:bg-gray-200 p-2 w-full">
//                                     <span className="font-semibold">{genre.name}</span>
//                                     <div style={{ backgroundColor: `${genre.color}` }} className={`w-5 h-5 rounded-full`}></div>
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </PopUp>
//     )
// }

'use client';

import { useEffect, useMemo, useState } from "react";
import PopUp from "../../members/pop-up";
import { DataGenreType } from "@/src/types/datas.types";
import Button from "../../members/button";

type Props = {
    closeAction: () => void;
    genres: DataGenreType[];
    isCreateGenre: boolean;
    genreForEditing: DataGenreType | null;
}

type GenreForm = {
    id?: number;
    name: string;
    color: string;
    creatorName?: string;
    createAt?: string | Date;
}

const EMPTY_FORM: GenreForm = {
    name: '',
    color: '#ffffff'
}

export default function AdminAddGenrePopup({
    closeAction,
    genres,
    isCreateGenre,
    genreForEditing
}: Props) {

    const [form, setForm] = useState<GenreForm>(EMPTY_FORM);

    useEffect(() => {
        if (genreForEditing) {
            setForm({
                id: genreForEditing.id,
                name: genreForEditing.name,
                color: genreForEditing.color,
                creatorName: genreForEditing.creatorName,
                createAt: genreForEditing.createAt

            });
        } else {
            setForm(EMPTY_FORM);
        }
    }, [genreForEditing, isCreateGenre]);

    const isEditing = useMemo(() => !!form.id, [form.id]);

    const handleChange = (field: keyof GenreForm, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    return (
        <PopUp
            actionClose={closeAction}
            header={{
                title: isEditing
                    ? `Editar Gênero ${form?.name}`
                    : 'Adicionar Gênero Textual',
                desc: isEditing
                    ? `Criado por ${form?.creatorName} | ${form.createAt}`
                    : 'campos com * são obrigatórios'
            }}
        >
            <div className="w-190 flex items-start gap-4">

                {/* FORM */}
                <div className="flex-3 mt-10.5">

                    <label className="text-[15px] font-medium">
                        Nome do Gênero *:
                    </label>

                    <input
                        type="text"
                        placeholder="Ex: Poema"
                        className="border border-gray-500 rounded-lg w-full mt-1 p-2"
                        value={form.name}
                        onChange={(e) =>
                            handleChange('name', e.target.value)
                        }
                    />

                    <div className="mt-4 flex flex-col">
                        <label className="text-[15px] font-medium">
                            Cor de Identificação *: ({form.color})
                        </label>

                        <div className="p-1 border mt-3 border-gray-500 h-20 w-50 rounded-lg">
                            <input
                                type="color"
                                value={form.color}
                                onChange={(e) =>
                                    handleChange('color', e.target.value)
                                }
                                className="w-full h-full border-white border-8"
                            />
                        </div>
                    </div>

                    <Button
                        styles="w-full mt-8"
                        bgColor="bg-green-600"
                        title={isEditing ? "Atualizar gênero" : "Salvar gênero"}
                    />

                    <Button
                        styles="w-full mt-5"
                        disabled={!isEditing}
                        bgColor="bg-red-600"
                        title="Deletar gênero"
                    />

                </div>

                {/* LIST */}
                <div className="p-3 flex-2">

                    <div className="flex flex-col">
                        <span className="text-[18px] font-semibold">Gêneros Cadastrados</span>
                        <span className="text-[12px] text-gray-600"><strong>Obs:</strong> clique em uma opção para  editá-la</span>
                    </div>

                    <div className="h-85 w-full border-2 border-gray-300 rounded-2xl mt-3 p-3 px-5 overflow-y-auto">

                        {genres.map((genre) => (
                            <button
                                key={genre.id}
                                onClick={() =>
                                    setForm({
                                        id: genre.id,
                                        name: genre.name,
                                        color: genre.color,
                                        creatorName: genre.creatorName,
                                        createAt: genre.createAt
                                    })
                                }
                                className="flex justify-between items-center rounded-lg hover:bg-gray-200 p-2 w-full"
                            >
                                <span className="font-semibold">
                                    {genre.name}
                                </span>

                                <div
                                    style={{ backgroundColor: genre.color }}
                                    className="w-5 h-5 rounded-full"
                                />
                            </button>
                        ))}

                    </div>
                </div>

            </div>
        </PopUp>
    )
}