// import '../assets/fonts/Poppins-SemiBold.ttf';
import { useState } from 'react';
import { AddMore } from '../ReacordMealPopUp/Reacord.styled';
import { Record } from '../ReacordMealPopUp/Record';
import {
  Container,
  DesktopContainer,
  MealContainer,
  MealDashbord,
  MealImage,
  MealSubscription,
  MealSubText,
  MealTitle,
  Numeration,
  RecordMealBlock,
  Title,
  Wrapper,
} from './Planner.styled';

const Planner = () => {
  const [isOpen, setOpen] = useState(false);
  const iconPath = 'src/assets/images/sprite.svg';
  const [foodType, setFoodType] = useState('');
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
      {isOpen ? <Record isOpen={setOpen} type={foodType} /> : null}
      <DesktopContainer>
        <RecordMealBlock>
          <Wrapper>
            <MealContainer style={{ alignItems: 'center' }}>
              <MealImage src="src/assets/images/Breakfast.png" />
              <MealTitle>Breakfast</MealTitle>
            </MealContainer>
            <MealSubscription>
              <MealSubText>Carbonohidrates: 11.2</MealSubText>
              <div
                style={{
                  display: 'flex',
                  //   marginTop: '12px',
                  gap: '20px',
                }}
              >
                <MealSubText>Protein: 23.1</MealSubText>
                <MealSubText> Fat: 14</MealSubText>
              </div>
            </MealSubscription>
          </Wrapper>
          <MealDashbord
            style={{ marginTop: '20px' }}
            onClick={() => setFoodType('breakfast')}
          >
            <Numeration>1</Numeration>
            <div
              style={{
                width: '170px',
                flexDirection: 'row-reverse',
                display: 'flex',
                gap: '8px',
                maxHeight: '20px',
              }}
            >
              <AddMore onClick={() => setOpen(true)}>Record your meal</AddMore>
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
          </MealDashbord>
        </RecordMealBlock>
        <RecordMealBlock>
          <Wrapper>
            <MealContainer style={{ alignItems: 'center' }}>
              <MealImage src="src/assets/images/Lunch.png" />
              <MealTitle>Dinner</MealTitle>
            </MealContainer>
            <MealSubscription>
              <MealSubText>Carbonohidrates: 11.2</MealSubText>
              <div
                style={{
                  display: 'flex',
                  //   marginTop: '12px',
                  gap: '20px',
                }}
              >
                <MealSubText>Protein: 23.1</MealSubText>
                <MealSubText> Fat: 14</MealSubText>
              </div>
            </MealSubscription>
          </Wrapper>
          <MealDashbord
            style={{ marginTop: '20px' }}
            onClick={() => setFoodType('lunch')}
          >
              <Numeration>1</Numeration>
            <div
              style={{
                width: '170px',
                flexDirection: 'row-reverse',
                display: 'flex',
                gap: '8px',
                maxHeight: '20px',
              }}
            >
              <AddMore onClick={() => setOpen(true)}>Record your meal</AddMore>
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
          </MealDashbord>
        </RecordMealBlock>
        <RecordMealBlock>
          <Wrapper>
            <MealContainer style={{ alignItems: 'center' }}>
              <MealImage src="src/assets/images/Dinner.png" />
              <MealTitle>Lunch</MealTitle>
            </MealContainer>
            <MealSubscription>
              <MealSubText>Carbonohidrates: 11.2</MealSubText>
              <div
                style={{
                  display: 'flex',
                  //   marginTop: '12px',
                  gap: '20px',
                }}
              >
                <MealSubText>Protein: 23.1</MealSubText>
                <MealSubText> Fat: 14</MealSubText>
              </div>
            </MealSubscription>
          </Wrapper>
          <MealDashbord
            style={{ marginTop: '20px' }}
            onClick={() => setFoodType('dinenr')}
          >
              <Numeration>1</Numeration>
            <div
              style={{
                width: '170px',
                flexDirection: 'row-reverse',
                display: 'flex',
                gap: '8px',
                maxHeight: '20px',
              }}
            >
              <AddMore onClick={() => setOpen(true)}>Record your meal</AddMore>
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
          </MealDashbord>
        </RecordMealBlock>
        <RecordMealBlock>
          <Wrapper>
            <MealContainer style={{ alignItems: 'center' }}>
              <MealImage src="src/assets/images/Snack.png" />
              <MealTitle>Sneak</MealTitle>
            </MealContainer>
            <MealSubscription>
              <MealSubText>Carbonohidrates: 11.2</MealSubText>
              <div
                style={{
                  display: 'flex',
                  //   marginTop: '12px',
                  gap: '20px',
                }}
              >
                <MealSubText>Protein: 23.1</MealSubText>
                <MealSubText> Fat: 14</MealSubText>
              </div>
            </MealSubscription>
          </Wrapper>
          <MealDashbord
            style={{ marginTop: '20px' }}
            onClick={() => setFoodType('snack')}
          >  <Numeration>1</Numeration>
          <div
            style={{
              width: '170px',
              flexDirection: 'row-reverse',
              display: 'flex',
              gap: '8px',
              maxHeight: '20px',
            }}
          >
            <AddMore onClick={() => setOpen(true)}>Record your meal</AddMore>
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
          </div></MealDashbord>
        </RecordMealBlock>
      </DesktopContainer>
    </Container>
  );
};

export default Planner;
