'use client';
import { BellDotIcon, XIcon } from "lucide-react";
import { useState } from "react";

export default function NotificationButton() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="bg-white flex items-center justify-center hover:bg-yellow-400"
                style={{
                    height: '46px',
                    width: '46px',
                    borderRadius: '50%',
                    border: '1px solid #d1d5db',
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                }}
            >

                <div
                    className="absolute flex items-center justify-center"
                    style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <BellDotIcon size={20} className="text-gray-600 md:size-6.25" />
                </div>
            </button>
            {open && <div className="max-w-100 w-full h-full right-0 top-0 border-l border-l-gray-400 fixed bg-white p-4 z-10">
                <div className="flex items-center justify-between">
                    <h2 className="mt-4 font-semibold text-[18px] mb-4">Notificações</h2>
                    <button onClick={() => setOpen(false)} className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <XIcon color="white" />
                    </button>
                </div>
                <hr color="gray" />

                <div className="h-full overflow-y-auto hide-scrollbar flex flex-col items-center">
                    <span className="text-gray-500 mt-10 ">Sem notificações</span>
                </div>

            </div>}
        </>
    )
}