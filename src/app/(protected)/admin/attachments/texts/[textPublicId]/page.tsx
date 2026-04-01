'use client';
import SidebarDetailText from "@/src/components/admin/sidebar-detail-text";
import TopBarDetailText from "@/src/components/admin/topbar-detail-text";
import WhiteBoxAdmin from "@/src/components/admin/white-box";
import Image from "next/image";
import { useParams } from "next/navigation";

import ProfileImage from '@assets/profile.png';
import Button from "@/src/components/members/button";
import { useEffect, useState } from "react";
import { fetchTextDetails, TextInfoResponseType } from "./requets";
import { formatPrismaDate } from "@/src/functions/date";

function NotFound() {
    return (
        <div className="w-full h-full flex items-center justify-start flex-col gap-4 mt-10">
            <h1 className='text-3xl font-bold text-white'>Texto não encontrado</h1>
            <a href="/admin/attachments" className={` bg-yellow-600 text-white font-semibold  px-5 py-4 rounded-[10px]  'hover:bg-blue-600'  cursor-pointer`}>Voltar aos Anexos</a>
        </div>
    )
}
function Loading() {
    return (
        <div className="w-full h-full flex items-start justify-center gap-4 mt-10">
            <h1 className='text-3xl font-bold text-white'>Buscando Conteúdo...</h1>
        </div>
    )
}

export default function TextDetails() {

    const { textPublicId } = useParams();

    const [isTextLoading, setIsTextLoading] = useState(true);
    const [isQuestionsLoading, setIsQuestionsLoading] = useState(false);

    const [dataText, setDataText] = useState<TextInfoResponseType | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsTextLoading(true);
            const textData = await fetchTextDetails(textPublicId as string);
            setDataText(textData);
            setIsTextLoading(false);
        }

        if (!dataText) {
            fetchData();
        }

    }, []);

    if (isTextLoading) return <Loading />

    if (!isTextLoading && !dataText) {
        return <NotFound />
    }

    return (
        <div className="h-full max-w-500">
            <TopBarDetailText title={dataText?.title as string} genreName={dataText?.genre.name as string} />

            <div className="flex items-start mt-10 gap-6 h-full pb-10">
                <SidebarDetailText />

                <div className="overflow-y-scroll h-full hide-scrollbar w-full">
                    <div className="w-full flex-1 max-w-290 bg-white rounded-2xl shadow-[4px_4px_20px_-3px_rgba(0,0,0,0.25)]">
                        <div style={{ backgroundColor: dataText?.genre.color }} className={`w-full h-6 rounded-t-2xl`}></div>
                        <div className="p-8">
                            <div className="border-b-2 pb-5 border-b-gray-300">
                                <div className="flex flex-col items-center mt-5">
                                    <h1 className="text-2xl font-semibold">{dataText?.title}</h1>
                                    <span><strong>Gênero: </strong>{dataText?.genre.name}</span>
                                </div>
                                <div className="flex items-center justify-between mt-5">
                                    <div className="flex items-center gap-2">
                                        <Image src={ProfileImage} alt="Imagem de Perfil" height={50} width={50} className="rounded-full" />
                                        <div className="flex flex-col">
                                            <span className="text-[16px] font-semibold">{dataText?.creator?.firstName} {dataText?.creator?.lastName}</span>
                                            <span className="text-[12px]">Anexou esse texto em {`${formatPrismaDate(dataText?.createdAt as string, '.').date}`}</span>
                                        </div>
                                    </div>
                                    <Button styles="bg-cyan-700 h-[50px] text-[12px]" title="+ Adicionar Imagens" />
                                </div>
                            </div>
                            <h2 className="text-[18px] font-medium mt-5">Imagens Anexadas</h2>
                            <div>
                                {dataText?.images.length === 0 && (
                                    <div className="w-full h-20 bg-gray-300 rounded-lg mt-3 flex items-center justify-center">
                                        <span className="text-gray-600">Nenhuma imagem anexada</span>
                                    </div>
                                )}
                            </div>
                            <h2 className="text-[18px] font-semibold mt-5 mb-3">Conteúdo Textual</h2>
                            <p className="text-justify">
                                {dataText?.isImageOnly
                                    ? <span>Este anexo contém somente imagens</span>
                                    : dataText?.content?.content
                                }
                            </p>
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>

                <div className="w-150 h-full">
                    <WhiteBoxAdmin>
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="font-semibold text-[18px]">Questões</h2>
                            <span className="font-semibold text-[18px]">2</span>
                        </div>
                        <hr />
                        <br />

                        <div className="flex flex-col gap-2">
                            <button className="p-3 rounded-lg border-2 border-orange-400 bg-[#F2F2F2] hover:bg-[#f5c8c8] text-left">
                                <span className="text-[14px]">
                                    Enunciado da questão
                                </span>
                            </button>
                            <button className="p-3 rounded-lg border-2 border-orange-400 bg-[#F2F2F2] hover:bg-[#f5c8c8] text-left">
                                <span className="text-[14px]">
                                    Enunciado da questão
                                </span>
                            </button>
                        </div>

                        <Button styles="bg-green-600 hover:bg-green-800 w-full mt-3 text-[14px]" title="+ Adicionar Questão" />
                    </WhiteBoxAdmin>
                </div>

            </div>

            <h1>Detalhes do Texto {textPublicId}</h1>

        </div>
    )
}