import sprite from 'assets/images/sprite.svg';
import { RecommendedCard } from "../RecommendedCard/RecommendedCard"
import { RecLink, Image, RecLinkWrapper } from "./RecommendedList.styled"
export const RecommendedList = () => 
{
    return (
        <div>
        <ul>
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
             <RecommendedCard/>
            </ul>
           <RecLinkWrapper>
            <RecLink to='/recommended-food'>See more
              <Image> <use href={`${sprite}#icon-arrowright`}></use></Image> 
            </RecLink>
           </RecLinkWrapper>

        </div>
    )
}