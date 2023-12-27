import image from '../assets/images/recommendedPage.png';
import {
  RecImage,
  RecPageContentWrapper,
  RecPageWrapper,
  RecPageTitle,
  SeeMoreBtn,
  Btnwrapp,
} from '../components/RecommendedFood/RecommendedList/RecommendedList.styled';
import { RecommendedPageList } from '../components/RecommendedFood/RecommendedList/RecommendedList';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecFoods } from '../redux/recomendedFoods/recOperations';
import { selectRecFoods } from '../redux/recomendedFoods/recSelectors';
import { useMediaQuery } from 'react-responsive';

import { useEffect } from 'react';

const RecommendedFoodPage = () => {
  const dispatch = useDispatch();

  const [numberOfCardsToRender, setNumberOfCardsToRender] = useState(10);
  const isNotDesktop = useMediaQuery({ maxWidth: 1440 });
  useEffect(() => {
    dispatch(fetchRecFoods());
  }, [dispatch]);

  const recommendedFoods = useSelector(selectRecFoods);
  const [page, setPage] = useState(0);

  const count = Math.floor(recommendedFoods.length / 10);

  const handleSeeMoreClick = () => {
    setNumberOfCardsToRender((prevNumberOfCards) => prevNumberOfCards + 10);
    setPage(page + 1);
  };

  return (
    <RecPageContentWrapper>
      <RecPageTitle>Recommended food</RecPageTitle>
      <RecPageWrapper>
        <RecImage src={image} alt="Page image" />
        <RecommendedPageList numberOfCardsToRender={numberOfCardsToRender} />
      </RecPageWrapper>
      {isNotDesktop && (
        <Btnwrapp>
          {page !== count && (
            <SeeMoreBtn onClick={handleSeeMoreClick}>Load more</SeeMoreBtn>
          )}
        </Btnwrapp>
      )}
    </RecPageContentWrapper>
  );
};

export default RecommendedFoodPage;
