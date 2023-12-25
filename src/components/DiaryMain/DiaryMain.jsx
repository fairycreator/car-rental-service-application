import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBreakfast,
  selectDinner,
  selectLunch,
  selectSnack,
} from '../../redux/dailyFoodStatistics/foodSelectors';
import { MealImage } from '../Diary-planner/Planner.styled';
import { AddMore } from '../ReacordMealPopUp/Reacord.styled';
import {
  ContainerDiary,
  ContentBlock,
  FoodBlock,
  FoodBlocks,
  MealOptions,
  MealTitle,
  SeeMore,
  Title,
  TitleBlock,
} from './DiaryMain.style';

const DiaryMain = () => {
  const dispatch = useDispatch();
  const breakfast = useSelector(selectBreakfast);
  const lunch = useSelector(selectLunch);
  const snack = useSelector(selectSnack);
  const dinner = useSelector(selectDinner);

  // const totalProteinsBreakfast = breakfast.reduce(
  //   (sum, item) => sum + item.nutrition?.protein,
  //   0
  // );
  // const totalFatBreakfast = breakfast.reduce(
  //   (sum, item) => sum + item.nutrition?.fat,
  //   0
  // );
  // const totalCarbsBreakfast = breakfast.reduce(
  //   (sum, item) => sum + item.nutrition?.carbogidrate,
  //   0
  // );

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

  const totalcarbogidrateBreakfast = breakfast.reduce(
    (sum, item) => sum + item.nutrition?.carbogidrate,
    0
  );
  const totalcarbogidrateDinner = dinner.reduce(
    (sum, item) => sum + item.nutrition?.carbogidrate,
    0
  );
  const totalcarbogidrateLunch = lunch.reduce(
    (sum, item) => sum + item.nutrition?.carbogidrate,
    0
  );
  const totalcarbogidrateSnack = snack.reduce(
    (sum, item) => sum + item.nutrition?.carbogidrate,
    0
  );

  const iconPath = 'src/assets/images/sprite.svg';
  return (
    <ContainerDiary>
      <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
        <Title>Diary</Title>
        <SeeMore>See more</SeeMore>
      </div>
      <FoodBlocks>
        <ContentBlock>
          <TitleBlock>
            <MealImage src="src/assets/images/Breakfast.png" />
            <MealTitle>BreakFast</MealTitle>
          </TitleBlock>
          <FoodBlock>
            {breakfast[0].name !== '' ? (
              <>
              
                <MealOptions>
                  Carbonohidrates: {totalcarbogidrateBreakfast}
                </MealOptions>
                <MealOptions>Protein: {totalProteinBreakfast}</MealOptions>
                <MealOptions>
                  Fat: {totalFatBreakfast}{' '}
                  <svg
                    style={{
                      display: 'inline-block',
                      width: '20px',
                      height: ' 20px',
                      fill: 'white',
                    }}
                  >
                    <use href={`${iconPath}#trash-delete`}></use>
                  </svg>
                </MealOptions>
              </>
            ) : (
              <div
                style={{
                  flexDirection: 'row-reverse',
                  display: 'flex',
                  gap: '8px',
                }}
              >
                <AddMore>Record your meal</AddMore>
                <svg
                  style={{
                    display: 'inline-block',
                    width: '20px',
                    height: ' 20px',
                    fill: 'white',
                  }}
                >
                  <use href={`${iconPath}#icon-add-converted`}></use>
                </svg>
              </div>
            )}
          </FoodBlock>
        </ContentBlock>
        <ContentBlock>
          <TitleBlock>
            <MealImage src="src/assets/images/Lunch.png" />
            <MealTitle>Lunch</MealTitle>
          </TitleBlock>
          <FoodBlock>
            {lunch[0].name !== '' ? (
              <>
                <MealOptions>
                  Carbonohidrates: {totalcarbogidrateLunch}
                </MealOptions>
                <MealOptions>Protein: {totalProteinLunch}</MealOptions>
                <MealOptions>
                  Fat: {totalFatLunch}
                  <svg
                    style={{
                      display: 'inline-block',
                      width: '20px',
                      height: ' 20px',
                      fill: 'white',
                    }}
                  >
                    <use href={`${iconPath}#trash-delete`}></use>
                  </svg>
                </MealOptions>
              </>
            ) : (
              <div
                style={{
                  flexDirection: 'row-reverse',
                  display: 'flex',
                  gap: '8px',
                }}
              >
                <AddMore>Record your meal</AddMore>
                <svg
                  style={{
                    display: 'inline-block',
                    width: '20px',
                    height: ' 20px',
                    fill: 'white',
                  }}
                >
                  <use href={`${iconPath}#icon-add-converted`}></use>
                </svg>
              </div>
            )}
          </FoodBlock>
        </ContentBlock>
        <ContentBlock>
          <TitleBlock>
            <MealImage src="src/assets/images/Dinner.png" />
            <MealTitle>Dinner</MealTitle>
          </TitleBlock>
          <FoodBlock>
            {dinner[0].name !== '' ? (
              <>
                <MealOptions>
                  Carbonohidrates: {totalcarbogidrateDinner}
                </MealOptions>
                <MealOptions>Protein: {totalProteinDinner}</MealOptions>
                <MealOptions>
                  Fat: {totalFatDinner}
                  <svg
                    style={{
                      display: 'inline-block',
                      width: '20px',
                      height: ' 20px',
                      fill: 'white',
                    }}
                  >
                    <use href={`${iconPath}#trash-delete`}></use>
                  </svg>
                </MealOptions>
              </>
            ) : (
              <div
                style={{
                  flexDirection: 'row-reverse',
                  display: 'flex',
                  gap: '8px',
                }}
              >
                <AddMore>Record your meal</AddMore>
                <svg
                  style={{
                    display: 'inline-block',
                    width: '20px',
                    height: ' 20px',
                    fill: 'white',
                  }}
                >
                  <use href={`${iconPath}#icon-add-converted`}></use>
                </svg>
              </div>
            )}
          </FoodBlock>
        </ContentBlock>
        <ContentBlock>
          <TitleBlock>
            <MealImage src="src/assets/images/Snack.png" />
            <MealTitle>Snack</MealTitle>
          </TitleBlock>
          <FoodBlock>
            {snack[0].name !== '' ? (
              <>
                <MealOptions>
                  Carbonohidrates: {totalcarbogidrateSnack}
                </MealOptions>
                <MealOptions>Protein: {totalProteinSnack}</MealOptions>
                <MealOptions>
                  Fat: {totalFatSnack}{' '}
                  <svg
                    style={{
                      display: 'inline-block',
                      width: '20px',
                      height: ' 20px',
                      fill: 'white',
                    }}
                  >
                    <use href={`${iconPath}#trash-delete`}></use>
                  </svg>
                </MealOptions>
              </>
            ) : (
              <div
                style={{
                  flexDirection: 'row-reverse',
                  display: 'flex',
                  gap: '8px',
                }}
              >
                <AddMore>Record your meal</AddMore>
                <svg
                  style={{
                    display: 'inline-block',
                    width: '20px',
                    height: ' 20px',
                    fill: 'white',
                  }}
                >
                  <use href={`${iconPath}#icon-add-converted`}></use>
                </svg>
              </div>
            )}
          </FoodBlock>
        </ContentBlock>
      </FoodBlocks>
    </ContainerDiary>
  );
};

export default DiaryMain;
