import NotificationButton from "@/src/components/members/notification-button";
import { CircleQuestionMark } from "lucide-react";
import { Search } from "lucide-react";
import { BellDot } from "lucide-react";

export default function Pesquisa() {
    return (
        <div className="w-full md:w-auto">
            <div className="flex text-blue-400 items-center w-full justify-between">
                <div className="flex items-center w-full">
                    <span className="ml-2 md:ml-0"> 
                        <button title="Para buscar um usuário, você deve fornecer o ID da respectiva conta. Esse ID é encontrado na página de perfil" className="flex items-center justify-center">
                            <CircleQuestionMark size={28} className="md:size-5.75" /> 
                        </button>
                    </span>
                    
                    <span className="border border-gray-300 bg-white rounded-full flex items-center px-3 ml-3 h-12 md:h-11 text-gray-500 w-full max-w-md md:max-w-md lg:max-w-125 xl:max-w-150 2xl:max-w-175 md:w-auto md:px-4">
                        <Search size={20} className="md:size-4.5" />
                        <input 
                            type="search" 
                            className="text-gray-800 ml-2 w-full text-sm md:text-base focus:outline-none" 
                            placeholder="Buscar amizade via ID" 
                        />
                    </span>

                    <div className="relative ml-3 md:ml-2">
                        <NotificationButton />
                    </div>
                </div>
            </div>
        </div>
    );
}