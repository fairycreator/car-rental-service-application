import { useSelector } from 'react-redux';

import {
  selectBreakfast,
  selectDinner,
  selectLunch,
  selectSnack,
} from '../../redux/dailyFoodStatistics/foodSelectors';
import {
  ContainerDiary,
  FoodBlocks,
  StyledLink,
  Title,
} from './DiaryMain.style';
import { DiaryMainCard } from './DiaryMainCard/DiaryMainCard';

const DiaryMain = () => {
  const breakfast = useSelector(selectBreakfast);
  const lunch = useSelector(selectLunch);
  const dinner = useSelector(selectDinner);
  const snack = useSelector(selectSnack);

  const totalFatBreakfast = breakfast.reduce(
    (sum, item) => sum + item.nutrition?.fat,
    0
  );
  const totalFatDinner = dinner.reduce(
    (sum, item) => sum + item.nutrition?.fat,
    0
  );
  const totalFatLunch = lunch.reduce(
    (sum, item) => sum + item.nutrition?.fat,
    0
  );
  const totalFatSnack = snack.reduce(
    (sum, item) => sum + item.nutrition?.fat,
    0
  );

  const totalProteinBreakfast = breakfast.reduce(
    (sum, item) => sum + item.nutrition?.protein,
    0
  );
  const totalProteinDinner = dinner.reduce(
    (sum, item) => sum + item.nutrition?.protein,
    0
  );
  const totalProteinLunch = lunch.reduce(
    (sum, item) => sum + item.nutrition?.protein,
    0
  );
  const totalProteinSnack = snack.reduce(
    (sum, item) => sum + item.nutrition?.protein,
    0
  );

  const totalCarbsBreakfast = breakfast.reduce(
    (sum, item) => sum + item.nutrition?.carbogidrate,
    0
  );
  const totalCarbsDinner = dinner.reduce(
    (sum, item) => sum + item.nutrition?.carbogidrate,
    0
  );
  const totalCarbsLunch = lunch.reduce(
    (sum, item) => sum + item.nutrition?.carbogidrate,
    0
  );
  const totalCarbsSnack = snack.reduce(
    (sum, item) => sum + item.nutrition?.carbogidrate,
    0
  );

  return (
    <ContainerDiary>
      <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
        <Title>Diary</Title>
        <StyledLink to="/diary">See more</StyledLink>
      </div>
      <FoodBlocks>
        <DiaryMainCard
          meal={breakfast}
          title="Breakfast"
          totalCarbs={totalCarbsBreakfast}
          totalProtein={totalProteinBreakfast}
          totalFat={totalFatBreakfast}
        />
        <DiaryMainCard
          meal={lunch}
          title="Lunch"
          totalCarbs={totalCarbsLunch}
          totalProtein={totalProteinLunch}
          totalFat={totalFatLunch}
        />
        <DiaryMainCard
          meal={dinner}
          title="Dinner"
          totalCarbs={totalCarbsDinner}
          totalProtein={totalProteinDinner}
          totalFat={totalFatDinner}
        />
        <DiaryMainCard
          meal={snack}
          title="Snack"
          totalCarbs={totalCarbsSnack}
          totalProtein={totalProteinSnack}
          totalFat={totalFatSnack}
        />
      </FoodBlocks>
    </ContainerDiary>
  );
};

export default DiaryMain;
