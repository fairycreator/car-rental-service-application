import image from '../assets/images/recommendedPage.png'
import { RecImage, RecPageContentWrapper, RecPageWrapper, RecPageTitle, SeeMoreBtn, Btnwrapp } from '../components/RecommendedFood/RecommendedList/RecommendedList.styled';
import { RecommendedPageList } from '../components/RecommendedFood/RecommendedList/RecommendedList';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { fetchRecFoods } from '../redux/recomendedFoods/recOperations';

import { useEffect } from 'react';
const RecommendedFoodPage = () => {
 
  const dispatch = useDispatch();

  const [numberOfCardsToRender, setNumberOfCardsToRender] = useState(10);
  
    useEffect(() => {
    dispatch(fetchRecFoods());
  }, [dispatch]);

    const handleSeeMoreClick = () => {
    
    setNumberOfCardsToRender((prevNumberOfCards) => prevNumberOfCards + 10);
  };
  
    
  return (
    <RecPageContentWrapper>
    <RecPageTitle>Recommented food</RecPageTitle>
    <RecPageWrapper>
    <RecImage src={image} alt="Page image"></RecImage>
        <RecommendedPageList numberOfCardsToRender={numberOfCardsToRender} />
       
      </RecPageWrapper>
      <Btnwrapp>
        <SeeMoreBtn onClick={handleSeeMoreClick}>Load more</SeeMoreBtn>
      </Btnwrapp>
      
    </RecPageContentWrapper>
)

};

 export default RecommendedFoodPage;
