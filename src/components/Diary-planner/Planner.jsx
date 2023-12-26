import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFood } from '../../redux/dailyFoodStatistics/foodOperations';
import { Record } from '../ReacordMealPopUp/Record';
import { Container, DesktopContainer, Title } from './Planner.styled';
import { PlannerCard } from './PlannerCard/PlannerCard';

import {
  selectBreakfast,
  selectDinner,
  selectLunch,
  selectOpen,
  selectSnack,
} from '../../redux/dailyFoodStatistics/foodSelectors';

export const Planner = () => {
  const iconPath = 'src/assets/images/sprite.svg';
  const [foodType, setFoodType] = useState('');
  const breakfast = useSelector(selectBreakfast);
  const lunch = useSelector(selectLunch);
  const dinner = useSelector(selectDinner);
  const snack = useSelector(selectSnack);
  const dispatch = useDispatch();

  const totalFatBreakfast = breakfast?.reduce(
    (sum, item) => sum + item.nutrition?.fat,
    0
  );
  const totalFatDinner = dinner?.reduce(
    (sum, item) => sum + item.nutrition?.fat,
    0
  );
  const totalFatLunch = lunch?.reduce(
    (sum, item) => sum + item.nutrition?.fat,
    0
  );
  const totalFatSnack = snack?.reduce(
    (sum, item) => sum + item.nutrition?.fat,
    0
  );

  const totalProteinBreakfast = breakfast?.reduce(
    (sum, item) => sum + item.nutrition?.protein,
    0
  );
  const totalProteinDinner = dinner?.reduce(
    (sum, item) => sum + item.nutrition?.protein,
    0
  );
  const totalProteinLunch = lunch?.reduce(
    (sum, item) => sum + item.nutrition?.protein,
    0
  );
  const totalProteinSnack = snack?.reduce(
    (sum, item) => sum + item.nutrition?.protein,
    0
  );

  const totalCarbsBreakfast = breakfast?.reduce(
    (sum, item) => sum + item.nutrition?.carbogidrate,
    0
  );
  const totalCarbsDinner = dinner?.reduce(
    (sum, item) => sum + item.nutrition?.carbogidrate,
    0
  );
  const totalCarbsLunch = lunch?.reduce(
    (sum, item) => sum + item.nutrition?.carbogidrate,
    0
  );
  const totalCarbsSnack = snack?.reduce(
    (sum, item) => sum + item.nutrition?.carbogidrate,
    0
  );

  const isOpen = useSelector(selectOpen);

  useEffect(() => {
    dispatch(getFood());
  }, [dispatch]);
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          marginBottom: '20px',
        }}
      >
        <svg
          style={{
            display: 'inline-block',
            width: '16px',
            height: ' 16px',
            fill: 'white',
            rotate: '180deg',
          }}
        >
          <use href={`${iconPath}#icon-arrowright`}></use>
        </svg>
        <Title>Diary</Title>
      </div>
      {isOpen ? <Record type={foodType} /> : null}
      <DesktopContainer>
        <PlannerCard
          totalCarbs={totalCarbsBreakfast}
          totalProtein={totalProteinBreakfast}
          totalFat={totalFatBreakfast}
          meal={breakfast}
          title={'Breakfast'}
          typefood={'breakfast'}
          setFoodType={setFoodType}
        />
        <PlannerCard
          totalCarbs={totalCarbsLunch}
          totalProtein={totalProteinLunch}
          totalFat={totalFatLunch}
          meal={lunch}
          title={'Lunch'}
          typefood={'lunch'}
          setFoodType={setFoodType}
        />
        <PlannerCard
          totalCarbs={totalCarbsDinner}
          totalProtein={totalProteinDinner}
          totalFat={totalFatDinner}
          meal={dinner}
          title={'Dinner'}
          typefood={'dinner'}
          setFoodType={setFoodType}
        />
        <PlannerCard
          totalCarbs={totalCarbsSnack}
          totalProtein={totalProteinSnack}
          totalFat={totalFatSnack}
          meal={snack}
          title={'Snack'}
          typefood={'snack'}
          setFoodType={setFoodType}
        />
      </DesktopContainer>
    </Container>
  );
};
