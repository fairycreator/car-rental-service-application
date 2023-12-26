import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  selectBreakfast,
  selectDinner,
  selectLunch,
  selectSnack,
} from '../../redux/dailyFoodStatistics/foodSelectors';
import { Record } from '../ReacordMealPopUp/Record';
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
  const totalFood = {
    breakfast,
    lunch,
    dinner,
    snack,
  };
  const allFood = ['breakfast', 'lunch', 'dinner', 'snack'];
  // console.log('totalFood: ', totalFood);

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

  const totalNutriation = {
    breakfast: {
      carbs: totalCarbsBreakfast,
      protein: totalProteinBreakfast,
      fat: totalFatBreakfast,
    },
    lunch: {
      carbs: totalCarbsLunch,
      protein: totalProteinLunch,
      fat: totalFatLunch,
    },
    dinner: {
      carbs: totalCarbsDinner,
      protein: totalProteinDinner,
      fat: totalFatDinner,
    },
    snack: {
      carbs: totalCarbsSnack,
      protein: totalProteinSnack,
      fat: totalFatSnack,
    },
  };

  return (
    <ContainerDiary>
      <TitleWrap>
        <Title>Diary</Title>
        <StyledLink to="/diary">See more</StyledLink>
      </TitleWrap>
      <FoodBlocks>
        {allFood.map((item) => {
          return (
            <DiaryMainCard
             
              key={item}
              meal={totalFood[item]}
              typefood={item}
              title={item}
              totalCarbs={totalNutriation[item].carbs}
              totalProtein={totalNutriation[item].protein}
              totalFat={totalNutriation[item].fat}
            />
          );
        })}

        {/* <DiaryMainCard
          typefood={'lunch'}
          meal={lunch}
          title="Lunch"
          totalCarbs={totalCarbsLunch}
          totalProtein={totalProteinLunch}
          totalFat={totalFatLunch}
        />
        <DiaryMainCard
          typefood={'dinner'}
          meal={dinner}
          title="Dinner"
          totalCarbs={totalCarbsDinner}
          totalProtein={totalProteinDinner}
          totalFat={totalFatDinner}
        />
        <DiaryMainCard
          typefood={'snack'}
          meal={snack}
          title="Snack"
          totalCarbs={totalCarbsSnack}
          totalProtein={totalProteinSnack}
          totalFat={totalFatSnack}
        /> */}
      </FoodBlocks>
    </ContainerDiary>
  );
};

export default DiaryMain;
