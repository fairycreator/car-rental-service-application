import { useDispatch } from 'react-redux';
import { fetchRecFoods } from '../redux/recomendedFoods/recOperations';
import { useEffect } from 'react';
import { Today } from '../components/Today-section/Today';
import { RecommendedList } from '../components/RecommendedFood/RecommendedList/RecommendedList';
import { getDailyWater } from '../redux/dailyStatistics/dailyOperations';
// import Planner from '../components/Diary-planner/Planner';

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecFoods());
    dispatch(getDailyWater());
  }, [dispatch]);
  return (
    <>
      <Today />
      <RecommendedList />
      {/* <Planner/> */}
    </>
  );
};

export default MainPage;
