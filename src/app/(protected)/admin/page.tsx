import ActivityLogsAdmin from "@/src/components/admin/activity-logs";
import InfoBoxesAdmin from "@/src/components/admin/info-boxes";
import Button from "@/src/components/members/button";
import { useDatabase } from "@/src/contexts/DatabaseContext";
import WhiteBoxAdmin from "@admins-components/white-box";

export default function DashboardAdmin() {
    return (
        <div>

            <InfoBoxesAdmin
                data={[
                    { data: '3.324', desc: 'Usuários ativos nos últimos 7 dias' },

                    {
                        data: '294',
                        desc: (
                            <>
                                Textos Anexados.{' '} 
                                <a
                                    href="/admin/texts"
                                    className="font-semibold underline hover:text-blue-300"
                                >
                                    VER TEXTOS
                                </a>
                            </>
                        ),
                    },

                    {
                        data: 'R$ 20.784',
                        desc: (
                            <p className="text-center">
                                Em assinaturas nos últimos 7 dias{' '} <br />
                                <a
                                    href="/admin/historics"
                                    className="font-semibold underline hover:text-blue-300"
                                >
                                    VER HISTÓRICO
                                </a>
                            </p>
                        ),
                        isShow: true,
                        showButtonEye: true,
                    },
                ]}
            />


            <br />

            <WhiteBoxAdmin>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="font-semibold text-blue-500">ASSINATIURA DE INSTITUIÇÕES</span>
                        <span className="text-gray-700 font-medium">Há 0 Instituições cadastradas no sistema</span>
                    </div>
                    <Button title="gerenciar instituições" />
                </div>
            </WhiteBoxAdmin>
            <br />
            <ActivityLogsAdmin />
            <br /><br /><br /><br /><br />
        </div>
    )
}