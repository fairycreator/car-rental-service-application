import { useState } from 'react';
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
  TitleWrap,
} from './DiaryMain.style';
import { DiaryMainCard } from './DiaryMainCard/DiaryMainCard';

const DiaryMain = () => {
  const breakfast = useSelector(selectBreakfast);
  const lunch = useSelector(selectLunch);
  const dinner = useSelector(selectDinner);
  const snack = useSelector(selectSnack);
  
  let totalFatBreakfast = 0;
  let totalProteinBreakfast = 0;
  let totalCarbsBreakfast = 0;
  let totalFatLunch = 0;
  let totalProteinLunch = 0;
  let totalCarbsLunch = 0;
  let totalProteinDinner = 0;
  let totalCarbsDinner = 0;
  let totalFatDinner = 0;
  let totalFatSnack = 0;
  let totalProteinSnack = 0;
  let totalCarbsSnack = 0;
  
  console.log('breakfast: ', breakfast);

  if (breakfast?.length > 0) {
    totalFatBreakfast = breakfast.reduce(
      (sum, item) => sum + item.nutrition?.fat,
      0
    );
    totalProteinBreakfast = breakfast.reduce(
      (sum, item) => sum + item.nutrition?.protein,
      0
    );
    totalCarbsBreakfast = breakfast.reduce(
      (sum, item) => sum + item.nutrition?.carbogidrate,
      0
    );
  }
  if (lunch?.length > 0) {
    totalFatLunch = lunch.reduce((sum, item) => sum + item.nutrition?.fat, 0);
    totalProteinLunch = lunch.reduce(
      (sum, item) => sum + item.nutrition?.protein,
      0
    );

    totalCarbsLunch = lunch.reduce(
      (sum, item) => sum + item.nutrition?.carbogidrate,
      0
    );
  }

  if (dinner?.length > 0) {
    totalProteinDinner = dinner.reduce(
      (sum, item) => sum + item.nutrition?.protein,
      0
    );
    totalCarbsDinner = dinner.reduce(
      (sum, item) => sum + item.nutrition?.carbogidrate,
      0
    );

    totalFatDinner = dinner.reduce((sum, item) => sum + item.nutrition?.fat, 0);
  }

  if (snack?.length > 0) {
    totalFatSnack = snack.reduce((sum, item) => sum + item.nutrition?.fat, 0);

    totalProteinSnack = snack.reduce(
      (sum, item) => sum + item.nutrition?.protein,
      0
    );

    totalCarbsSnack = snack.reduce(
      (sum, item) => sum + item.nutrition?.carbogidrate,
      0
    );
  }

  return (
    <ContainerDiary>
      <TitleWrap>
        <Title>Diary</Title>
        <StyledLink to="/diary">See more</StyledLink>
      </TitleWrap>
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
