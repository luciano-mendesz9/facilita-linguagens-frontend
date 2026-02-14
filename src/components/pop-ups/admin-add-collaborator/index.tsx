'use client';

import { useState } from "react";
import FormsCreateAccount from "./forms-create-account";
import FormsSearchAccount from "./forms-search-account";
import PopUp from "../../members/pop-up";


export default function AdminAddCollaboratorPopup({ closeAction }: { closeAction: () => void }) {

    const [view, setView] = useState<'search' | 'create'>('search');

    return (
        <PopUp actionClose={closeAction} header={{
            title: 'Adicionar Colaborador',
            desc: 'Conceda acesso a um novo membro da equipe.'
        }}>

            {/* Tabs */}
            <div className="bg-gray-200 p-3 w-[60%] m-auto mt-10 flex rounded-[10px] gap-2">
                <button
                    onClick={() => setView('search')}
                    className={`flex-1 ${view === 'search' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'} p-3 rounded-[10px] cursor-pointer`}>
                    Buscar por E-mail
                </button>

                <button
                    onClick={() => {
                        setView('create');
                    }}
                    className={`flex-1 ${view === 'create' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'} p-3 rounded-[10px] cursor-pointer`}>
                    Criar Conta
                </button>
            </div>

            {view === 'search' && <FormsSearchAccount />}
            {view === 'create' && <FormsCreateAccount />}

        </PopUp>
    )
}