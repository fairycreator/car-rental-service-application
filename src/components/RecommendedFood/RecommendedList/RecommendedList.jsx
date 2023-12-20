import sprite from 'assets/images/sprite.svg';
import { RecommendedCard } from "../RecommendedCard/RecommendedCard";
import { selectRecFoods } from '../../../redux/recommended/recSelectors';
import { RecList, RecLink, Image, RecLinkWrapper, RecForMainWrapper, RecListTitle } from "./RecommendedList.styled"
import { useSelector } from 'react-redux';
export const RecommendedList = () => {

    const recommendedFoods = useSelector(selectRecFoods);
    return (
        <RecForMainWrapper>
            <RecListTitle>Recommented food</RecListTitle>
            <RecList >
                {recommendedFoods.map(item => {
                    <RecommendedCard item={item } /> 
                })}
                
               
                
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