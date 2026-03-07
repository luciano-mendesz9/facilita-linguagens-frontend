'use client'

import { useEffect, useState } from "react"
import PopUp from "../../members/pop-up"
import Button from "../../members/button"
import toast from "react-hot-toast"
import { useDatabase } from "@/src/contexts/DatabaseContext"

type Props = {
    closeAction: () => void
}

export default function AdminAddTextPopup({ closeAction }: Props) {

    const { fetchGenres, genres } = useDatabase();
    const [selectedGenre, setSelectedGenre] = useState<number | null>(null)

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    const [referenceUrl, setReferenceUrl] = useState('')

    const [imageMode, setImageMode] = useState(false)

    const [images, setImages] = useState<File[]>([])

    useEffect(() => {
        fetchGenres()
    }, [])

    const selectedGenreData = genres.find(g => g.id === selectedGenre)

    function handleAddImage(e: React.ChangeEvent<HTMLInputElement>) {

        const file = e.target.files?.[0]
        if (!file) return

        if (images.length >= 3) {
            toast.error('Você só pode adicionar até 3 imagens.')
            return
        }

        setImages(prev => [...prev, file])
    }

    function removeImage(index: number) {
        setImages(prev => prev.filter((_, i) => i !== index))
    }

    function handleToggle() {

        if (!images.length) {
            toast.error('Adicione pelo menos uma imagem antes de ativar.')
            return
        }

        setImageMode(prev => !prev)
    }

    async function handleSubmit() {

        if (!title) {
            toast.error('Informe o título')
            return
        }

        if (!selectedGenre) {
            toast.error('Selecione um gênero')
            return
        }

        if (!imageMode && !content) {
            toast.error('Adicione conteúdo ao texto')
            return
        }

        if (!images.length) {
            toast.error('Adicione ao menos uma imagem')
            return
        }

        const toastId = toast.loading('Salvando texto...')

        try {

            // aqui você colocaria sua action

            toast.success('Texto cadastrado com sucesso!')
            closeAction()

        } catch {

            toast.error('Erro ao salvar texto')

        } finally {

            toast.dismiss(toastId)

        }

    }

    return (

        <PopUp
            actionClose={closeAction}
            header={{
                title: 'Adicionar Texto',
                desc: 'Obs: campos com * são obrigatórios'
            }}
        >

            <div className="w-190 flex flex-col gap-4 mt-6">

                {/* TOGGLE */}
                <div className="flex justify-end items-center gap-3 -mt-20 mb-10">
                    <span className="text-red-700 text-sm text-right">
                        Atenção: Ative essa opção se só houver <br />imagens na obra de cadastro
                    </span>

                    <button
                        onClick={handleToggle}
                        className={`w-12 h-6 flex items-center rounded-full p-1 transition ${imageMode ? 'bg-green-500 justify-end' : 'bg-gray-400'
                            }`}
                    >
                        <div className="bg-white w-4 h-4 rounded-full" />
                    </button>
                </div>

                {/* TITULO E AUTOR */}
                <div className="flex gap-4">

                    <div className="flex-1">
                        <label className="font-medium text-[15px]">
                            Título *:
                        </label>

                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Ex: A Branca de Neve"
                            className="border border-gray-400 rounded-lg w-full p-2 mt-1"
                        />
                    </div>

                    <div className="flex-1">
                        <label className="font-medium text-[15px]">
                            Autor da Obra
                        </label>

                        <input
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            placeholder="Ex: Machado de Assis"
                            className="border border-gray-400 rounded-lg w-full p-2 mt-1"
                        />
                    </div>

                </div>

                {/* IMAGENS */}
                <div>

                    <label className="font-medium text-[15px]">
                        Imagens
                    </label>

                    <span className="block text-sm text-gray-500">
                        Obs: Faça upload de imagens, caso o texto tenha
                    </span>

                    <div className="flex gap-3 mt-3">

                        {images.map((img, index) => {

                            const preview = URL.createObjectURL(img)

                            return (
                                <div
                                    key={index}
                                    className="relative w-24 h-24 border rounded-md overflow-hidden"
                                >

                                    <img
                                        src={preview}
                                        className="object-cover w-full h-full"
                                    />

                                    <button
                                        onClick={() => removeImage(index)}
                                        className="absolute top-1 right-1 bg-black/60 text-white text-xs px-1 rounded"
                                    >
                                        x
                                    </button>

                                </div>
                            )
                        })}

                        {images.length < 3 && (
                            <label className="w-24 h-24 border rounded-md flex items-center justify-center bg-gray-300 cursor-pointer hover:bg-gray-400">

                                + Imagem

                                <input
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    onChange={handleAddImage}
                                />

                            </label>
                        )}

                    </div>

                </div>

                {/* GENERO */}
                <div className="flex items-center gap-3">

                    <div className="flex flex-col flex-1">

                        <label className="font-medium text-[15px]">
                            Gênero Textual
                        </label>

                        <div className="flex items-center gap-3">
                            <select
                                className="border border-gray-400 rounded-lg p-2 mt-1"
                                value={selectedGenre ?? ''}
                                onChange={(e) => setSelectedGenre(Number(e.target.value))}
                            >

                                <option value="">
                                    Selecione um gênero
                                </option>

                                {genres.map(g => (
                                    <option key={g.id} value={g.id}>
                                        {g.name}
                                    </option>
                                ))}

                            </select>

                            <Button styles="h-10.5 flex justify-center items-center hover:bg-green-700 bg-green-600" title="+ gênero" />
                        </div>

                    </div>

                    {selectedGenreData && (
                        <div
                            className="w-5 h-5 rounded-full mt-6"
                            style={{ backgroundColor: selectedGenreData.color }}
                        />
                    )}

                </div>

                {/* CONTEUDO */}
                {!imageMode && (

                    <div>

                        <label className="font-medium text-[15px]">
                            Conteúdo do texto *
                        </label>

                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Era uma vez..."
                            className="border border-gray-400 rounded-lg w-full p-3 mt-1 h-40"
                        />

                    </div>

                )}

                {/* URL */}
                <div>

                    <label className="font-medium text-[15px]">
                        URL de Referência
                    </label>

                    <input
                        value={referenceUrl}
                        onChange={(e) => setReferenceUrl(e.target.value)}
                        placeholder="https://..."
                        className="border border-gray-400 rounded-lg w-full p-2 mt-1"
                    />

                </div>

                <Button
                    styles="w-full mt-4"
                    bgColor="bg-green-600"
                    action={handleSubmit}
                    title="Salvar Texto"
                />

            </div>

        </PopUp>
    )
}