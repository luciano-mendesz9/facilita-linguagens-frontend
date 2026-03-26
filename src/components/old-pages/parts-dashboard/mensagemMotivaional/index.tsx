import { Lightbulb } from "lucide-react";

interface MensageMotivationalProps {
    message?: string;
    margin?: string;  
    padding?: string; 
    className?: string;
}

export default function MensageMotivational({ 
    message = "Talvez seu primeiro passo não te leve onde você já quer chegar, mas com certeza, ele já te dirá o lugar!",
    margin = "",
    padding = "",
    className = ""
}: MensageMotivationalProps) {
    return (
        <div className={`bg-blue-200 rounded-2xl text-blue-600 ${margin} ${className}`}>
            <div className={`flex p-2 ${padding}`}>
                <Lightbulb size={20} className="shrink-0"/>
                <h1 className="font-bold text-blue-600 w-full pl-2 text-sm truncate">
                    Motivação do dia
                </h1>
            </div>
            <div className="text-gray-600 w-full block px-3 pb-2 leading-tight text-xs font-medium">
                {message}
            </div>
        </div>
    );
}