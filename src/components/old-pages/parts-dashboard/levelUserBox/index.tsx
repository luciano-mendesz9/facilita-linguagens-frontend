import TitlePageMember from "@/src/components/members/title-page";
export default function LevelDoUsuario() {

    return (
        <div>
            <div className="bg-white border border-gray-300 rounded-3xl shadow-md hover:shadow-lg w-full lg:w-96 flex flex-col h-full">
                <span className="p-8 pl-10 pb-6">
                    <h1 className="text-2xl font-semibold">Meu nível</h1>
                </span>
                <div className="px-5 pb-4 flex flex-col items-center grow">
                    <div className="relative w-28 h-28 mx-auto mb-4  ">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="56" cy="56" r="45" stroke="#f3f4f6" strokeWidth="5" fill="transparent" />
                            <circle
                                cx="56"
                                cy="56"
                                r="48"
                                stroke="#3b82f6"
                                strokeWidth="12"
                                fill="transparent"
                                strokeDasharray="301.44"
                                strokeDashoffset="301.44 - (301.44 * 0.947)"
                                strokeLinecap="round"
                            />
                        </svg>

                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-3xl font-bold text-gray-800">5</span>
                            <span className="text-gray-500 text-xs font-semibold tracking-wider mt-1"> NÍVEL </span>
                        </div>
                    </div>

                    <div className="text-center space-y-2 w-full">
                        <div className="text-lg font-bold text-gray-700">
                            5679 / 6000 XP
                        </div>
                        <div className="text-sm text-gray-600">
                            Faltam <span className="font-semibold text-gray-600">321 XP</span> para o nível 6
                        </div>
                    </div>
                </div>

                <span className="bg-linear-to-r from-blue-500 to-blue-600 text-yellow-300 p-4 font-bold text-lg text-center rounded-b-2xl"> BROCHE DE OURO </span>
            </div>
        </div>
    )
}