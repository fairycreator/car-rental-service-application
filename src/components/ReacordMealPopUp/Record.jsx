import React from 'react';
import {
  MealContainer,
  MealImage,
  MealTitle,
} from '../Diary-planner/Planner.styled';
import {
  BackDrop,
  Button,
  ButtonBlock,
  ContentBlock,
  InputBlock,
  RecordInputBig,
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
          <RecordInputBig />
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
