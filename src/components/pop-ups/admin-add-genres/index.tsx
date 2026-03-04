'use client';

import { useEffect, useMemo, useState } from "react";
import PopUp from "../../members/pop-up";
import { DataGenreType } from "@/src/types/datas.types";
import Button from "../../members/button";
import { createNewGenre } from "@/src/app/(protected)/admin/attachments/actions";
import { useAuth } from "@/src/contexts/AuthContexts";
import { useDatabase } from "@/src/contexts/DatabaseContext";
import toast from "react-hot-toast";
import { formatPrismaDate } from "@/src/functions/date";
import { deleteGenre } from "@/src/functions";

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
    createdAt?: string;
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
    const { user } = useAuth();

    const [isLoading, setIsLoading] = useState(false);
    const { fetchGenres } = useDatabase();

    useEffect(() => {
        if (genreForEditing) {
            setForm({
                id: genreForEditing.id,
                name: genreForEditing.name,
                color: genreForEditing.color,
                creatorName: genreForEditing.creatorName,
                createdAt: genreForEditing.createdAt

            });
        } else {
            setForm(EMPTY_FORM);
        }
    }, [genreForEditing, isCreateGenre]);

    const isEditing = useMemo(() => !!form.id, [form.id]);

    const handleChange = (field: keyof GenreForm, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const handleDeleteGenre = async () => {
        if (!isEditing || !form.id) return;
        const toastId = toast.loading('Deletando "' + form.name + '", aguarde...');

        const res = await deleteGenre({ id: form.id });
        toast.dismiss(toastId);

        if (res?.success) {
            setTimeout(() => {
                closeAction();
                toast.success(res.message);
            }, 200);
        } else {
            toast.error(res?.message as string);
            return;
        }
        fetchGenres();
    }

    const handleCreateGenre = async () => {

        try {

            if (!form.name || !form.color) {
                toast.error('Preencha os campos obrigatórios');
                return;
            }

            if (form.color === '#ffffff' || form.color === '#fff') {
                toast.error('Não utilize cor branca para essa ação.');
                return;
            }

            setIsLoading(true)
            genres.map((g) => {
                if (g.name.toLocaleLowerCase() === form.name.toLocaleLowerCase()) {
                    setIsLoading(false);
                    toast.error('Já existe um gênero chamado ' + form.name + '. Experimente um outro gênero.');

                    throw new Error('ERRO_GENERO_JA_EXISTE')
                }
            })

            const res = await createNewGenre({
                creatorName: user?.lastName ? `${user?.firstName}  ${user?.lastName}` : user?.firstName as string,
                color: form.color,
                name: form.name
            })

            setIsLoading(false);
            if (!res.success) {
                toast.error('OCORREU UM ERRO INESPERADO!\nNão Foi possível criar seu gênero. Verifique se estão corretas os campos Nome e Cor no formulário.', {
                    duration: 5000
                })
                return
            }

            closeAction();
            fetchGenres();
            toast.success('Gênero criado com sucesso! Se não aparecer na lista, atualize a página usando a tecla F5 ou Ctrl + R');
        } catch (error) {
            return;
        }
    }

    const [cacheEdting, setCacheEditing] = useState('');

    const cacheText = form.name;
    return (
        <PopUp
            actionClose={closeAction}
            header={{
                title: isEditing
                    ? `Editar Gênero ${form?.name}`
                    : 'Adicionar Gênero Textual',
                desc: isEditing
                    ? `Criado por ${form?.creatorName} | ${formatPrismaDate(form.createdAt!, '/').date}`
                    : 'campos com * são obrigatórios'
            }}
        >
            <div className="w-190 flex items-start gap-4">

                {/* FORM */}
                <div className="flex-3 mt-10.5">
                    {isEditing && <div>
                        <span>Editando Gênero: <strong>{cacheEdting ? cacheEdting : cacheText}</strong> ⚠️</span>
                        <br />
                    </div>}

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
                        disabled={isLoading}
                        action={!isEditing ? handleCreateGenre : alert}
                        bgColor="bg-green-600"
                        title={isEditing ? "Atualizar gênero" : "Salvar gênero"}
                    />

                    <Button
                        styles="w-full mt-5"
                        disabled={!isEditing}
                        action={handleDeleteGenre}
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
                                onClick={() => {
                                    setForm({
                                        id: genre.id,
                                        name: genre.name,
                                        color: genre.color,
                                        creatorName: genre.creatorName,
                                        createdAt: formatPrismaDate(genre.createdAt, '/').date
                                    });

                                    setCacheEditing(genre.name)
                                }}
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