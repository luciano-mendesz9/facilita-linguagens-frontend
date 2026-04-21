import TitlePageMember from "@/src/components/members/title-page";

export default function TopBarBox(){
    return(
        <header className="mb-4 sm:mb-6 md:mb-10 lg:mb-18">
            <TitlePageMember text="Ranking de Nível 5"/>
            
            <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">
                Veja quem está liderando o ranking da sua patente. Fique por dentro e evolua!
            </p>
        </header>
    );
}