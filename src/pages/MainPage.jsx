import { useDispatch } from 'react-redux';
import { fetchRecFoods } from '../redux/recomendedFoods/recOperations';
import { useEffect } from 'react';
import { Today } from '../components/Today-section/Today';
import { RecommendedList } from '../components/RecommendedFood/RecommendedList/RecommendedList';
import { getDailyWater } from '../redux/dailyWaterStatistics/waterOperations';
import DiaryMain from '../components/DiaryMain/DiaryMain';
import { getFood } from '../redux/dailyFoodStatistics/FoodOperations';

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecFoods());
    dispatch(getDailyWater());
    dispatch(getFood())
  }, [dispatch]);
  return (
    <>
      <Today />
      <RecommendedList />
      <DiaryMain />
    </>
  );
};

export default MainPage;
