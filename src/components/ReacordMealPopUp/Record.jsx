import React from 'react';
import {
  MealContainer,
  MealImage,
  MealTitle,
} from '../Diary-planner/Planner.styled';
import {
  AddMore,
  BackDrop,
  Button,
  ButtonBlock,
  ContentBlock,
  InputBlock,
  RecordInputBig,
  RecordInputBigFirst,
  SubInput,
  SubInputBlock,
  Title,
} from './Reacord.styled';

export const Record = () => {
  const iconPath = 'src/assets/images/sprite.svg';
  return (
    <BackDrop>
      <ContentBlock>
        <Title>Record your meal</Title>
        <MealContainer
          style={{
            // justifyContent: 'baseline',
            marginTop: '24px',
          }}
        >
          <MealImage src="src/assets/images/Breakfast.png" />
          <MealTitle>Breakfast</MealTitle>
        </MealContainer>
        <InputBlock>
          <RecordInputBigFirst />
          <RecordInputBig />
          <RecordInputBig />
          <SubInputBlock>
            <SubInput />
            <SubInput />
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
          </SubInputBlock>
        </InputBlock>
        <div
          style={{
            display: 'flex',
            gap: '6px',
            marginTop: '40px',
          }}
        >
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
          <AddMore>Add more</AddMore>
        </div>
        <ButtonBlock>
          <Button>Confirm</Button>
          <button
            style={{
              textAlign: 'center',
              background: 'transparent',
              color: '#B6B6B6',
              border: 'none',
            }}
          >
            Cancel
          </button>
        </ButtonBlock>
      </ContentBlock>
    </BackDrop>
  );
};
