import sprite from 'assets/images/sprite.svg';
import { RecommendedCard } from "../RecommendedCard/RecommendedCard"
import {RecPageTitle ,RecList, RecLink, Image, RecLinkWrapper, RecForMainWrapper } from "./RecommendedList.styled"
export const RecommendedList = () => {
    return (
        <RecForMainWrapper>
            <RecPageTitle>Recommented food</RecPageTitle>
            <RecList>
                <RecommendedCard />
                <RecommendedCard />
               
                
            </RecList>
            <RecLinkWrapper>
                <RecLink to='/recommended-food'>See more
                    <Image> < use href={`${sprite}#icon-arrowright`}></use></Image>
                </RecLink>
            </RecLinkWrapper>

        </RecForMainWrapper>
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