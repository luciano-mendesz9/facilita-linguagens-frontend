'use client';

import WhiteBoxAdmin from "@/src/components/admin/white-box";
import Line from "@/src/components/members/line";
import StatusBadge from "@/src/components/members/status-badge";
import ShowTextPopup from "@/src/components/pop-ups/admin-show-text";
import { useDatabase } from "@/src/contexts/DatabaseContext";
import { CircleUserIcon, EyeIcon, ListFilterPlusIcon, PencilIcon, Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { memo, useCallback, useEffect, useState } from "react";

type TextViewModel = {
    publicId: string;
    title: string;
    createdAt: string;
    genreName: string;
    genreColor: string;
};

type TextRowProps = {
    text: TextViewModel;
    setTextIdShow: (publicId: string) => void;
    checked: boolean;
    onSelect: (checked: boolean, id: string) => void;
};

const TextRow = memo(({ text, checked, onSelect, setTextIdShow }: TextRowProps) => {

    const router = useRouter();

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
                        <button onClick={() => setTextIdShow(text.publicId)} className={"h-10 rounded-lg bg-indigo-600 w-10 cursor-pointer hover:bg-indigo-900 flex items-center justify-center"}>
                            <EyeIcon color="white" />
                        </button>
                        <button onClick={() => window.open(`/admin/attachments/texts/${text.publicId}`, '_blank')} className={"h-10 rounded-lg bg-green-600 w-10 cursor-pointer hover:bg-green-800 flex items-center justify-center"}>
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

export default function TextsDataBox({ textsView }: { textsView: TextViewModel[] }) {

    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
    const [selectAll, setSelectAll] = useState(false);
    const [isLoading] = useState(false);

    const [textIdShow, setTextIdShow] = useState('');

    const { genres, fetchGenres } = useDatabase();

    useEffect(() => {
        if (selectedIds.size < textsView.length) {
            setSelectAll(false);
        } else if (selectedIds.size === textsView.length && !selectAll) {
            setSelectAll(true);
        }

        if (genres.length === 0) { fetchGenres(); }

    }, [selectedIds]);

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

    const handleShowText = (publicId: string) => {
        setTextIdShow(publicId);
        const text = 'Olá mundo';
        return text;
    }

    return (
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

            {textIdShow && (
                <ShowTextPopup textPublicId={textIdShow} closeAction={() => { setTextIdShow('') }} />
            )}

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
                            setTextIdShow={handleShowText}
                            checked={selectedIds.has(text.publicId)}
                            onSelect={handleSelectItem}
                        />
                    ))}
                </div>
            )}
        </WhiteBoxAdmin>
    )
}