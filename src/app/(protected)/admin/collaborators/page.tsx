'use client'

import BoxCollaboratorsAdmin from "@/src/components/admin/box-collaborators";
import InfoBoxesAdmin from "@/src/components/admin/info-boxes";
import Button from "@/src/components/members/button";
import PopUp from "@/src/components/members/pop-up";
import { useDatabase } from "@/src/contexts/DatabaseContext";
import HeaderTitleAdmin from "@admins-components/header-title";

export default function CollaboratorsPage() {
    const { collaborators } = useDatabase();
    return (
        <div>
            <div className="flex items-center justify-between">
                <HeaderTitleAdmin
                    title="Listagem de Colaboradores"
                    desc="Gerencie permissões, atribua funções e acompanhe status de convites da equipe administrativa."
                />

                <Button title="+ adicionar colaborador" bgColor="bg-green-600" />

            </div>
            <br />
            <InfoBoxesAdmin
                data={
                    [
                        { data: collaborators.length, desc: 'Total de Colaboradores' },
                        { data: collaborators.filter(c => c.isSuperAdmin).length, desc: 'Super Admins' },
                        { data: collaborators.filter(c => c.status === 'PENDING').length, desc: 'Convites Pendentes' },
                    ]
                }
            />

            <PopUp actionClose={() => alert('clicou')} header={{
                title: 'Teste', desc: 'testados'
            }}>
                oi
            </PopUp>


            <br />
            <br />
            <BoxCollaboratorsAdmin />
            <br /><br /><br /><br /><br />
        </div>
    )
}