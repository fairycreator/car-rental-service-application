import image from '../assets/images/recommendedPage.png'
import { RecImage, RecPageContentWrapper, RecPageWrapper, RecPageTitle } from '../components/RecommendedFood/RecommendedList/RecommendedList.styled';
import { RecommendedPageList } from '../components/RecommendedFood/RecommendedList/RecommendedList';

import { useDispatch } from 'react-redux';
import { fetchRecFoods } from '../redux/recomendedFoods/recOperations';
import { useEffect } from 'react';
const RecommendedFoodPage = () => {

  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchRecFoods()) }, [dispatch]);
   
  
  
  return (
    <RecPageContentWrapper>
    <RecPageTitle>Recommented food</RecPageTitle>
    <RecPageWrapper>
    <RecImage src={image} alt="Page image"></RecImage>
      <RecommendedPageList />
      </RecPageWrapper>
      
    </RecPageContentWrapper>
)

};

export default RecommendedFoodPage;
