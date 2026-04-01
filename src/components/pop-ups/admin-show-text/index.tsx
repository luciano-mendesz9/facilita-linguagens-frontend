import PopUp from "../../members/pop-up";

export default function ShowTextPopup({ closeAction, textPublicId }: { closeAction: () => void, textPublicId: string }) {
    return (
        <PopUp actionClose={closeAction} header={{
            title: 'Texto',
            desc: 'Genero'
        }}>
            texto
        </PopUp>
    )
}