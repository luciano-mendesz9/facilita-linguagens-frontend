import TopBarBox from "@/src/components/old-pages/parts-ranking/top-barBox";
import MelhoresDoRankingBox from "@/src/components/old-pages/parts-ranking/melhores-do-rankingBox";
import UserPositon from "@/src/components/old-pages/parts-ranking/user-positonBox";
import RestanteDoRankingBox from "@/src/components/old-pages/parts-ranking/restante-do-rankingBox";

export default function Ranking(){
    return (
        <div>
            <TopBarBox/>
            <MelhoresDoRankingBox/>
            <UserPositon/>
            <div className="mb-8"></div>
            <RestanteDoRankingBox/>
        </div>
    );
}
