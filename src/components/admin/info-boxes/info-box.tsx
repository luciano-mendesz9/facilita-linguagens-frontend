'use client';

import { EyeClosedIcon, EyeIcon } from "lucide-react";
import { ReactNode, useState } from "react";

export type InfoBoxProps = {
    data: string | number;
    desc: ReactNode;
    isShow?: boolean;
    showButtonEye?: boolean;
}

export default function InfoBox({ data, desc, isShow, showButtonEye }: InfoBoxProps) {

    const [showValue, setShowValue] = useState(isShow === false ? false : true);

    return (
        <div className="bg-[#00000034] rounded-2xl shadow-[4px_4px_20px_-3px_rgba(0,0,0,0.25)] p-5 w-full h-35 flex flex-col justify-center items-center text-white gap-3">
            {showButtonEye && (
                <button
                    className="bg-[#94C6FE] p-1 rounded-md pl-3 pr-3 -mt-7 cursor-pointer hover:bg-[#73a7e2]"
                    onClick={() => setShowValue(!showValue)}
                >
                    {showValue ? <EyeIcon color="#1974DC" /> : <EyeClosedIcon color="#1974DC" />}
                </button>
            )}

            <span className="text-4xl">
                <strong>
                    {showValue ? data : '---'}
                </strong>
            </span>

            <span className="">{desc}</span>
        </div>
    )
}