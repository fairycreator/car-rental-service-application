import sprite from 'assets/images/sprite.svg';
import { RecommendedCard } from "../RecommendedCard/RecommendedCard"
import {RecList, RecLink, Image, RecLinkWrapper } from "./RecommendedList.styled"
export const RecommendedList = () => {
    return (
        <div>
            <RecList>
                <RecommendedCard />
                <RecommendedCard />
                <RecommendedCard />
                <RecommendedCard />
                
            </RecList>
            <RecLinkWrapper>
                <RecLink to='/recommended-food'>See more
                    <Image> <use href={`${sprite}#icon-arrowright`}></use></Image>
                </RecLink>
            </RecLinkWrapper>

        </div>
    )
};

export const RecommendedPageList = () => {
    return (
        <RecList>
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
                <RecommendedCard />
                <RecommendedCard />
                <RecommendedCard /><RecommendedCard />
                <RecommendedCard />
                <RecommendedCard />
                <RecommendedCard />
        </RecList>
    )
};