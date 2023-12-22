import { useDispatch } from 'react-redux';
import { fetchRecFoods } from '../redux/recomendedFoods/recOperations';
import { useEffect } from 'react';
import { Today } from '../components/Today-section/Today';
import { RecommendedList } from '../components/RecommendedFood/RecommendedList/RecommendedList';

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecFoods());
  }, [dispatch]);
  return (
    <>
      <Today />
      <RecommendedList />
    </>
  );
};

export default MainPage;
