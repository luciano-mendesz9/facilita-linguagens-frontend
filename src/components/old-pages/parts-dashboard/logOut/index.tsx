"use client";

import { LogOutIcon, LucideIcon } from "lucide-react";

interface LogoutButtonProps {
    text?: string;
    icon?: LucideIcon;
    iconSize?: number;
    iconColor?: string;
    margin?: string;
    padding?: string;
    width?: string;
    className?: string;
    onClick?: () => void;
}

export default function LogoutButton({ 
    text = "Sair",
    icon: Icon = LogOutIcon,
    iconSize = 18,
    iconColor = "black",
    margin = "",
    padding = "",
    width = "w-full",
    className = "",
    onClick
}: LogoutButtonProps) {
    return (
        <button 
            onClick={onClick}
            className={`${width} ${margin} ${className}`}
        >
            <div className={`border border-gray-400 rounded-3xl flex ${padding} justify-center hover:bg-gray-50 transition-colors`}>
                <Icon size={iconSize} color={iconColor} className="shrink-0"/>
                <span className="text-black font-bold text-sm ml-2 truncate">{text}</span>
            </div>
        </button>
    );
}