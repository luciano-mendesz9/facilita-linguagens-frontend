import Image from "next/image";
import profile from "@assets/profile.png";

export default function RestanteDoRankingBox() {
  const cabecalhosRanking = [
    {
      id: 1,
      titulo: "RANK",
      className: "font-semibold text-[#606060] text-center flex-1 relative right-7"
    },
    {
      id: 2,
      titulo: "ESTUDANTE",
      className: "font-semibold text-[#606060] text-center flex-1 relative right-10"
    },
    {
      id: 3,
      titulo: "TÍTULO ATUAL",
      className: "font-semibold text-[#606060] text-center flex-4"
    },
    {
      id: 4,
      titulo: "PONTUAÇÃO (XP)",
      className: "font-semibold text-[#606060] text-center flex-2 relative left-8"
    }
  ];

  const formatarNome = (nome: string) => {
    if (nome.length >= 10) {
      return nome.slice(0, 9) + " " + nome.slice(9);
    }
    return nome;
  };

  const rankingPosicoes = [
    {
      id: 1,
      posicao: "4º",
      nome: "Gabriel Alencar",
      titulo: "Explorador",
      pontuacao: 2100,
      tituloColor: "bg-[#1D87FF2E] text-[#1D87FF] border-[#1D87FF]",
    },
    {
      id: 2,
      posicao: "5º",
      nome: "Maria Fernanda",
      titulo: "Mestre",
      pontuacao: 1993,
      tituloColor: "bg-[#FF701D2B] text-[#FF701D] border-[#FF701D]",
    },
    {
      id: 3,
      posicao: "6º",
      nome: "Carlos Silva",
      titulo: "Explorador",
      pontuacao: 1850,
      tituloColor: "bg-[#1D87FF2E] text-[#1D87FF] border-[#1D87FF]",
    },
    {
      id: 4,
      posicao: "7º",
      nome: "Ana Santos",
      titulo: "Explorador",
      pontuacao: 1750,
      tituloColor: "bg-[#1D87FF2E] text-[#1D87FF] border-[#1D87FF]",
    },
    {
      id: 5,
      posicao: "8º",
      nome: "Pedro Oliveira",
      titulo: "Explorador",
      pontuacao: 1650,
      tituloColor: "bg-[#1D87FF2E] text-[#1D87FF] border-[#1D87FF]",
    },
    {
      id: 6,
      posicao: "9º",
      nome: "João Pereira",
      titulo: "Explorador",
      pontuacao: 1550,
      tituloColor: "bg-[#1D87FF2E] text-[#1D87FF] border-[#1D87FF]",
    },
    {
      id: 7,
      posicao: "10º",
      nome: "Fernanda Costa",
      titulo: "Explorador",
      pontuacao: 1450,
      tituloColor: "bg-[#1D87FF2E] text-[#1D87FF] border-[#1D87FF]",
    },
  ];

  return (
      <div className="relative rounded-2xl sm:rounded-3xl md:rounded-4xl shadow-sm bg-white border border-gray-500 mb-6 sm:mb-10 md:mb-14 lg:mb-18">
        
        <ul className="hidden sm:flex absolute top-0 w-full bg-gray-50 p-3 sm:p-4 md:p-5.5 pb-2 sm:pb-2.5 md:pb-3.5 border-b border-gray-500 rounded-t-2xl sm:rounded-t-3xl md:rounded-t-4xl">
            {cabecalhosRanking.map((cabecalho) => (
            <li key={cabecalho.id} className={cabecalho.className}>
                {cabecalho.titulo}
            </li>
            ))}
        </ul>

        <ul className="flex sm:hidden absolute top-0 w-full bg-gray-50 px-3 py-3 border-b border-gray-500 rounded-t-2xl">
            <li className="font-semibold text-[#606060] text-xs">POS</li>
            <li className="flex-1 text-left font-semibold text-[#606060] text-xs">ESTUDANTE</li>
        </ul>

        <ul className="mt-12 sm:mt-14 md:mt-16 lg:mt-18 pb-2 sm:pb-4">
            {rankingPosicoes.map((item, index) => (
            <li
                key={item.id}
                className={`px-3 py-3 sm:py-2 sm:px-4 ${
                index < rankingPosicoes.length - 1 ? "border-b border-gray-100" : ""
                }`}
            >
                <div className="flex sm:hidden items-center">
                    <span className={`font-bold text-base text-[#868686] ${item.posicao === "10º" ? "-ml-1" : ""}`}> 
                      {item.posicao} 
                    </span>
                    
                    <div className="flex items-center gap-3 flex-1 ml-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200 shrink-0">
                        <Image
                          src={profile}
                          alt={`Avatar de ${item.nome}`}
                          width={40}
                          height={40}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <span className="font-semibold text-gray-900 text-sm truncate">
                        {formatarNome(item.nome)}
                      </span>
                    </div>
                </div>

                <div className="hidden sm:flex w-full gap-4 items-center">
                    <span className="flex-1 text-center font-bold text-lg text-[#868686] relative right-2"> 
                      {item.posicao} 
                    </span>
                    
                    <div className="flex-2 font-medium text-gray-900 flex items-center gap-2 relative right-5 min-w-0">
                      <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200 shrink-0">
                        <Image
                          src={profile}
                          alt={`Avatar de ${item.nome}`}
                          width={44}
                          height={44}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      
                      <span className="font-semibold text-gray-900 truncate max-w-50">
                        {item.nome}
                      </span>
                    </div>
                    
                    <div className="flex flex-4 items-center justify-center relative right-15 shrink-0">
                      <span
                        className={`${item.tituloColor} text-xs font-medium px-9 py-0.5 rounded-full border w-27.5 text-center flex items-center justify-center ${
                          item.titulo === "Mestre" ? "tracking-wider" : ""
                        }`}
                      >
                        {item.titulo}
                      </span>
                    </div>
                    
                    <div className="flex-2 font-medium text-[#868686] flex items-center justify-center">
                      {item.pontuacao.toLocaleString()}
                    </div>
                </div>
            </li>
            ))}
        </ul>
        
    </div>
  );
}