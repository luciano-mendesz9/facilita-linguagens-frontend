import React from "react";

export default function WhiteBoxAdmin({children}: {children: React.ReactNode}){
    return (
        <div className="w-full bg-white h-auto p-5 rounded-2xl shadow-[4px_4px_20px_-3px_rgba(0,0,0,0.25)]">
            {children}
        </div>
    )
}