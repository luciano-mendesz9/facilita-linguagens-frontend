import { CircleArrowLeftIcon, PencilIcon, SearchIcon, Trash2Icon, } from "lucide-react";
import WhiteBoxAdmin from "../white-box";

export default function SidebarDetailText() {
    return (
        <div className="w-20 ml-13">
            <WhiteBoxAdmin>
                <div className="flex flex-col items-center gap-3">
                    <button className="bg-[#379E7C] px-4 py-3 rounded-lg hover:opacity-60 ">
                        <PencilIcon color="white" />
                    </button>
                    <button className="bg-blue-500 px-4 py-3 rounded-lg hover:opacity-60 ">
                        <SearchIcon color="white" />
                    </button>
                    <button className="bg-red-800 px-4 py-3 rounded-lg hover:opacity-60 ">
                        <Trash2Icon color="white" />
                    </button>
                    <button className="bg-yellow-500 px-4 py-3 rounded-lg hover:opacity-60 ">
                        <CircleArrowLeftIcon color="white" />
                    </button>
                </div>
            </WhiteBoxAdmin>
        </div>
    )
}