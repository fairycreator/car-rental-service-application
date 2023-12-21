import React from 'react';
import { MealImage } from '../Diary-planner/Planner.styled';
import { AddMore } from '../ReacordMealPopUp/Reacord.styled';
import {
  FoodBlock,
  MealOptions,
  MealTitle,
  SeeMore,
  Title,
  TitleBlock,
} from './DiaryMain.style';

const DiaryMain = () => {
  const iconPath = 'src/assets/images/sprite.svg';
  return (
    <>
      <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
        <Title>Diary</Title>
        <SeeMore>See more</SeeMore>
      </div>
      <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
        <>
          <TitleBlock>
            <MealImage src="src/assets/images/Breakfast.png" />
            <MealTitle>BreakFast</MealTitle>
          </TitleBlock>
          <FoodBlock>
            <MealOptions>Carbonohidrates: 60</MealOptions>
            <MealOptions>Protein: 40</MealOptions>
            <MealOptions>
              Fat: 20{' '}
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
          </FoodBlock>
        </>
        <>
          <TitleBlock>
            <MealImage src="src/assets/images/Lunch.png" />
            <MealTitle>Lunch</MealTitle>
          </TitleBlock>
          <FoodBlock>
            <MealOptions>Carbonohidrates: 60</MealOptions>
            <MealOptions>Protein: 40</MealOptions>
            <MealOptions>
              Fat: 20
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
          </FoodBlock>
        </>
        <>
          <TitleBlock>
            <MealImage src="src/assets/images/Dinner.png" />
            <MealTitle>Dinner</MealTitle>
          </TitleBlock>
          <FoodBlock>
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
          </FoodBlock>
        </>
        <>
          <TitleBlock>
            <MealImage src="src/assets/images/Snack.png" />
            <MealTitle>Snack</MealTitle>
          </TitleBlock>
          <FoodBlock>
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
          </FoodBlock>
        </>
      </div>
    </>
  );
};

export default DiaryMain;
