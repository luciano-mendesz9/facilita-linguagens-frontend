'use client';

import HeaderTitleAdmin from "@/src/components/admin/header-title";
import WhiteBoxAdmin from "@/src/components/admin/white-box";
import Button from "@/src/components/members/button";
import Line from "@/src/components/members/line";
import StatusBadge from "@/src/components/members/status-badge";
import AdminAddGenrePopup from "@/src/components/pop-ups/admin-add-genres";
import AdminAddTextPopup from "@/src/components/pop-ups/admin-add-texts";
import { useDatabase } from "@/src/contexts/DatabaseContext";
import { formatPrismaDate } from "@/src/functions/date";
import { DataGenreType, DataTextType } from "@/src/types/datas.types";
import { CircleUserIcon, EyeIcon, ListFilterPlusIcon, PencilIcon, TagIcon, Trash2Icon } from "lucide-react";
import { memo, useCallback, useEffect, useMemo, useState } from "react";

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

            <div className="flex flex-1 items-center gap-1 justify-end">
                <button className={"h-10 rounded-lg bg-orange-400 w-10 cursor-pointer hover:bg-orange-500 flex items-center justify-center"}>
                    <CircleUserIcon color="white" />
                </button>
                {!checked && (
                    <>
                        <button className={"h-10 rounded-lg bg-indigo-600 w-10 cursor-pointer hover:bg-indigo-900 flex items-center justify-center"}>
                            <EyeIcon color="white" />
                        </button>
                        <button className={"h-10 rounded-lg bg-green-600 w-10 cursor-pointer hover:bg-green-800 flex items-center justify-center"}>
                            <PencilIcon color="white" />
                        </button>
                    </>
                )}
                <button className={"h-10 rounded-lg bg-red-400 w-10 cursor-pointer hover:bg-red-700 flex items-center justify-center"}>
                    <Trash2Icon color="white" />
                </button>
            </div>
        </div>
    );
});

TextRow.displayName = 'TextRow';

export default function Attachments() {

    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
    const [selectAll, setSelectAll] = useState(false)
    const [addGenrePopuOn, setAddGenrePopuOn] = useState(false);
    const [addTextPopuOn, setAddTextPopuOn] = useState(false);
    const [genreForEditing, setGenreForEditing] = useState<DataGenreType | null>(null);

    const { genres, fetchGenres, texts } = useDatabase();

    const [isLoading] = useState(false);

    useEffect(() => {
        if (selectedIds.size < textsView.length) {
            setSelectAll(false);
        } else if (selectedIds.size === textsView.length && !selectAll) {
            setSelectAll(true);
        }

        if (genres.length === 0) { fetchGenres(); }

    }, [selectedIds]);

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
            const genre = genresMap.get(text.genre.id);

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

    const handleSelectAll = () => {
        const ids: Set<string> = new Set();
        if (!selectAll) {
            textsView.map((txt) => ids.add(txt.publicId));
        }
        setSelectedIds(ids);
    }

    return (
        <div className="overflow-y-auto h-screen">
            <HeaderTitleAdmin
                title="Gerenciador de Anexos"
                desc="Cadastre ou edite textos e gêneros textuais no sistema. Para cadastrar QUESTÕES ao texto, clique no ícone de edição."
            />

            <div className="flex items-center gap-5 mt-5">
                <Button
                    styles="w-65 h-16"
                    bgColor="bg-green-600"
                    title="+ adicionar texto"
                    action={() => setAddTextPopuOn(true)}
                />
                <Button
                    styles="w-65 h-16"
                    bgColor="bg-indigo-600"
                    title="+ adicionar gênero"
                    action={() => setAddGenrePopuOn(true)}
                />
            </div>

            {addGenrePopuOn && <AdminAddGenrePopup
                genres={genres}
                isCreateGenre={!(!!genreForEditing)}
                genreForEditing={genreForEditing}
                closeAction={() => {
                    setAddGenrePopuOn(false);
                    setGenreForEditing(null);
                }}
            />}

            {addTextPopuOn && <AdminAddTextPopup
                closeAction={() => setAddTextPopuOn(false)}
            />}

            <div className="flex items-start mt-10 gap-5">
                <div className="flex-5">
                    <WhiteBoxAdmin>
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="text-[20px] font-semibold">{textsView.length} {textsView.length === 1 ? 'Texto Anexado' : 'Textos Anexados'}</h2>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <input checked={selectAll} onChange={() => {
                                        setSelectAll(selectAll ? false : true);
                                        handleSelectAll();

                                    }} type="checkbox" className="cursor-pointer" name="select-all" id="select-all" />
                                    <label htmlFor="select-all" className="cursor-pointer font-medium hover:text-blue-500">Selecionar Todos</label>
                                    {selectedIds.size > 0 && <span>[ {selectedIds.size} ]</span>}
                                </div>
                                {selectedIds.size > 0 && <button
                                    style={{ cursor: selectedIds.size === 0 ? 'no-drop' : 'pointer' }}
                                    className={`flex items-center gap-3 text-[14px] px-5 ${selectedIds.size === 0 ? 'bg-gray-300 text-gray-500' : 'bg-red-400 text-white'} py-2 rounded-md  font-medium`}
                                >
                                    DELETAR SELEÇÃO
                                    <Trash2Icon size={20} />
                                </button>}
                                <button onClick={() => alert('Os filtros ainda não estão disponíveis para essa tabela.')} className="hover:text-blue-500 cursor-pointer">
                                    <ListFilterPlusIcon />
                                </button>
                            </div>
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
                </div>
            </div>
        </div>
    );
}