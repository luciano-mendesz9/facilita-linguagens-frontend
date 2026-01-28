import InfoBoxesAdmin from "@/src/components/admin/info-boxes";
import HeaderTitleAdmin from "@admins-components/header-title";
import WhiteBoxAdmin from "@admins-components/white-box";
import PopUp from "@members-components/pop-up";

export default function DashboardAdmin() {
    return (
        <div>

            <HeaderTitleAdmin
                title="Título da Página"
                desc="Usa esse componente quando precisar criar uma nova página que tenha um título e descrição ou só o título."
            />

            <InfoBoxesAdmin
                data={
                    [
                        // esse é o componente que adiciona na tela os quadrinhos azuis. Essas são as quatro formas de usá-los
                        { data: 'Valor1', desc: 'Descrição1' },
                        { data: 'Valor2', desc: 'Descrição2', isShow: false, showButtonEye: false },
                        { data: 'Valor3', desc: 'Descrição3', isShow: false, showButtonEye: true },
                        { data: 'Valor4', desc: 'Descrição4', isShow: true, showButtonEye: true },
                    ]
                }
            />

            <br />
                
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