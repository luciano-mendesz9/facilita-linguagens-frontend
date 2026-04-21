'use client';

import { useState } from "react";
import {Rocket, Play} from "lucide-react";
import Pesquisa from "@/src/components/old-pages/parts-dashboard/pesquisa/index";
import TitlePageMember from "@/src/components/members/title-page";


export default function StartReadBox({ indexRanking }: { indexRanking: number }) {

    const [rightAnswers, setRightAnswers] = useState(0);
    const [errorAnswers, setErrorAnswers] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(-1);

    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const progress = rightAnswers / 100;
    const strokeOffset = circumference - (circumference * progress);


    return (
        <section className="px-4 md:px-0">
            
            <div className="hidden md:flex flex-col md:flex-row md:items-center justify-between mb-6">
                <span className="md:text-4xl mb-4 md:mb-6 tracking-tight text-center flex justify-center items-center md:text-left"> 
                    <TitlePageMember
                        text="Painel de Controle"
                    />
                </span>
                <div className="w-full md:w-auto"> <Pesquisa/></div>
            </div>

            <div className="rounded-3xl md:rounded-4xl p-6 mb-7 shadow-md bg-linear-to-r from-[#2B7FFF] to-[#4E8AD0]">
                <div className="flex flex-col md:grid md:grid-cols-2 md:gap-0 md:items-center">
                    
                    <div className="w-full md:w-full flex flex-col items-center md:items-start">

                        <div className="w-full flex justify-center md:justify-start mb-4">
                            <span className="bg-blue-300/60 rounded-3xl text-white text-sm flex font-semibold justify-center p-2 w-44">
                                <Rocket size={18} className="md:size-4.5"/>
                                <a href="" target="self" rel="noopener noreferrer" className="ml-2"> META DIÁRIA </a>
                            </span>
                        </div>
                        
                        <div className="text-white font-semibold text-2xl md:text-2xl mb-3 leading-6 md:leading-8 text-center md:text-left w-full">
                            Bom dia <span>Usuário X!!</span> pronto para 
                            <span className="block md:inline"> mais uma leitura hoje?</span>
                        </div>
                        
                        <span className="text-white text-sm md:text-sm text-center md:text-left w-full">
                            Falta <span>321</span> pontos para você conquistar o Nível <span>6</span> - Broche de <span>Ouro II</span>
                        </span>
                    </div>
                
                    <div className="hidden md:flex md:w-auto md:justify-end">
                        <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-2xl flex justify-center items-center hover:bg-gray-50 transition-colors">
                            <Play size={18} className="md:size-4.5"/>
                            <a href="/dashboard/select-reading" target="_self" className="ml-3 text-sm">Iniciar Leitura</a>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex md:hidden mt-6">
                <button className="w-full max-w-xs border md:border-none bg-white text-blue-600 font-semibold py-3 px-8 rounded-2xl flex justify-center items-center hover:bg-gray-50 transition-colors">
                    <Play size={18}/>
                    <a href="/dashboard/select-reading" target="_self" className="ml-3 text-sm">Iniciar Leitura</a>
                </button>
            </div>

            <div className="h-12 md:h-0"></div>
        </section>
    )
}