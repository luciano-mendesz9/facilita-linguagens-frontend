import {ChevronRight, LucideIcon } from "lucide-react";
import StatusBadge from "@/src/components/members/status-badge";

interface RecentsReadingProps {
  icon: LucideIcon;
  tituloDoTexto?: string;
  autorDoTexto?: string;
  generoDoTexto?: string;

  iconColor?: string;
  bgIconColor?: string;
  borderIconColor?: string;
  
  // Tamanho do ícone (ajustável)
  iconSize?: number;
}

export default function LeiturasRecentes({
  icon: Icon,
  tituloDoTexto = "O Sapo e o Boi",
  autorDoTexto = "Fernando Alfredo",
  generoDoTexto = "conto",
  iconColor = "text-blue-600",
  bgIconColor = "bg-blue-100",
  borderIconColor = "border-blue-300",
  iconSize = 30 // Tamanho do ícone ajustável
}: RecentsReadingProps) {


  const tituloCompleto = `${tituloDoTexto} - ${autorDoTexto}`;

  return (

    <a href="#" className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-3 rounded-lg transition-colors  md:overflow-auto overflow-x-auto hide-scrollbar cursor-pointer hover:bg-blue-50 ">
      <div className="flex-1 min-w-0">
        <div className="flex items-start">

          <div className={`shrink-0 border ${borderIconColor} rounded-full ${bgIconColor} mr-3 relative bottom-1 flex items-center justify-center h-14 w-14`}>
            <Icon size={iconSize} className={iconColor} />
          </div>
          <div className="min-w-0">
            <div className="relative">
              <span
                className="font-semibold text-gray-900 truncate hover:text-blue-600 transition-colors cursor-default peer text-md block"
                title={tituloCompleto}
              >
                {tituloDoTexto} - {autorDoTexto}
              </span>

              <div className="absolute z-50 invisible opacity-0 peer-hover:visible peer-hover:opacity-100 transition-all duration-150 bottom-full left-0 mb-2 w-72 px-3 py-2 bg-gray-800 text-gray-100 rounded-lg shadow-xl text-sm leading-relaxed border border-gray-700">
                "{tituloDoTexto}"<br />
                <span className="text-blue-300">Autor: {autorDoTexto}</span>
                <div className="absolute top-full left-4 -mt-1 border-4 border-transparent border-t-gray-800"></div>
              </div>
            </div>
            <span className="text-xs text-gray-600 mt-1 block">
              <strong>Gênero:</strong> {generoDoTexto}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0 relative bottom-2">
        <StatusBadge 
          title="Acertou a questão"
          type="success"
        />
        <a href=""
          target="_self"
          className="text-gray-500 hover:text-gray-700 text-xl p-1">
          <ChevronRight size={22} />
        </a>
      </div>
    </a>
  );
}