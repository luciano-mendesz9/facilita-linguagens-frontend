import WhiteBoxAdmin from "@/src/components/admin/white-box";
import PopUp from "@/src/components/members/pop-up";

export default function DashboardAdmin() {
    return (
        <div>
            Admin Dashboard
            <WhiteBoxAdmin>
                <h1>RECADO: QUANDO TU PRECISAR USAR ESSES QUADROS BRANCOS FLUTUANTE, USA O COMPONENTE {'<WhiteBoxAdmin> conteúdo </WhiteBoxAdmin>'}</h1>
            </WhiteBoxAdmin>

            <PopUp>
                <h1 className="text-2xl font-semibold">Mensagem</h1>
                <span>Apaga esse componente Pop-up no código para sumir com esse quadro.</span>
            </PopUp>
        </div>
    )
}