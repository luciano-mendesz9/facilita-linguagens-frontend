import { PLATFORM_NAME } from "@/src/constants";
import { CircleArrowLeftIcon } from "lucide-react";

export default function TopBarDetailText({title, genreName}: {title: string, genreName: string  }) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
                <a href="/admin/attachments" className='bg-orange-300 flex items-center justify-center p-3 rounded-full'>
                    <CircleArrowLeftIcon color="white"/>
                </a>
                <div className="flex flex-col gap">
                    <h1 className='text-2xl text-white font-bold'>{PLATFORM_NAME.toUpperCase()}</h1>
                    <span className="text-white text-[14px] font-light">Área de conteúdo textual</span>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <h1 className='text-[20px] text-white font-semibold'>{title}</h1>
                <span className="text-white text-[14px] font-light">Gênero Textual: <strong className="font-semibold">{genreName}</strong></span>
            </div>
        </div>
    )
}