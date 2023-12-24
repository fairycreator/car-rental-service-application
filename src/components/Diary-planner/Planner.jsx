// import '../assets/fonts/Poppins-SemiBold.ttf';
import { display } from '@mui/system';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFood } from '../../redux/dailyStatistics/dailyOperations';
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
  RenderContainer,
  RenderContainerItem,
  Title,
  Wrapper,
} from './Planner.styled';

const Planner = () => {
  const selector = useSelector((state) => state.dailyFoodStat.consumedFood);
  console.log('selector: ', selector);
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const iconPath = 'src/assets/images/sprite.svg';
  const [foodType, setFoodType] = useState('');
  useEffect(() => {
    dispatch(getFood());
  }, [isOpen]);

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
            {selector.breakfast[0].name !== '' ? (
              selector.breakfast.map((item, index) => {
                return (
                  <RenderContainer>
                    <Numeration>{index + 1}</Numeration>
                    <RenderContainerItem>
                      {selector.breakfast[index].name}
                    </RenderContainerItem>
                    <RenderContainerItem>
                      Carbs: {selector.breakfast[index].nutrition.carbogidrate}
                    </RenderContainerItem>
                    <RenderContainerItem>
                      Protein: {selector.breakfast[index].nutrition.protein}
                    </RenderContainerItem>
                    <RenderContainerItem>
                      Fat: {selector.breakfast[index].nutrition.fat}
                    </RenderContainerItem>
                  </RenderContainer>
                );
              })
            ) : (
              <div
                style={{
                  width: '170px',
                  flexDirection: 'row-reverse',
                  display: 'flex',
                  gap: '8px',
                  maxHeight: '20px',
                }}
              >
                <AddMore onClick={() => setOpen(true)}>
                  Record your meal
                </AddMore>
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
            {selector.breakfast[0].name ? (
              <div style={{ display: 'flex' }}>
                <Numeration>{selector.breakfast.length + 1}</Numeration>
                <div
                  style={{
                    width: '170px',
                    flexDirection: 'row-reverse',
                    display: 'flex',
                    gap: '8px',
                    maxHeight: '20px',
                  }}
                >
                  <AddMore onClick={() => setOpen(true)}>
                    Record your meal
                  </AddMore>
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
              </div>
            ) : null}
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
            // проблеми з перевіркою{' '}
            {selector.lunch ? (
              selector.lunch.map((item, index) => {
                return (
                  <RenderContainer>
                    <Numeration>{index + 1}</Numeration>
                    <RenderContainerItem>
                      {selector.lunch[index].name}
                    </RenderContainerItem>
                    <RenderContainerItem>
                      Carbs: {selector.lunch[index].nutrition.carbogidrate}
                    </RenderContainerItem>
                    <RenderContainerItem>
                      Protein: {selector.lunch[index].nutrition.protein}
                    </RenderContainerItem>
                    <RenderContainerItem>
                      Fat: {selector.lunch[index].nutrition.fat}
                    </RenderContainerItem>
                  </RenderContainer>
                );
              })
            ) : (
              <div
                style={{
                  width: '170px',
                  flexDirection: 'row-reverse',
                  display: 'flex',
                  gap: '8px',
                  maxHeight: '20px',
                }}
              >
                <AddMore onClick={() => setOpen(true)}>
                  Record your meal
                </AddMore>
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
            {selector.lunch[0].name ? (
              <div style={{ display: 'flex' }}>
                <Numeration>{selector.lunch.length + 1}</Numeration>
                <div
                  style={{
                    width: '170px',
                    flexDirection: 'row-reverse',
                    display: 'flex',
                    gap: '8px',
                    maxHeight: '20px',
                  }}
                >
                  <AddMore onClick={() => setOpen(true)}>
                    Record your meal
                  </AddMore>
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
              </div>
            ) : null}
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
            onClick={() => setFoodType('dinner')}
          >
            {/* {selector?.dinner[0]  ? (
              selector.dinner.map((item, index) => {
                return (
                  <RenderContainer>
                    <Numeration>{index + 1}</Numeration>
                    <RenderContainerItem>
                      {selector.dinner[index].name}
                    </RenderContainerItem>
                    <RenderContainerItem>
                      Carbs: {selector.dinner[index].nutrition.carbogidrate}
                    </RenderContainerItem>
                    <RenderContainerItem>
                      Protein: {selector.dinner[index].nutrition.protein}
                    </RenderContainerItem>
                    <RenderContainerItem>
                      Fat: {selector.dinner[index].nutrition.fat}
                    </RenderContainerItem>
                  </RenderContainer>
                );
              })
            ) : (
              <div
                style={{
                  width: '170px',
                  flexDirection: 'row-reverse',
                  display: 'flex',
                  gap: '8px',
                  maxHeight: '20px',
                }}
              >
                <AddMore onClick={() => setOpen(true)}>
                  Record your meal
                </AddMore>
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
            {selector.dinner[0].name ? (
              <div style={{ display: 'flex' }}>
                <Numeration>{selector.dinner.length + 1}</Numeration>
                <div
                  style={{
                    width: '170px',
                    flexDirection: 'row-reverse',
                    display: 'flex',
                    gap: '8px',
                    maxHeight: '20px',
                  }}
                >
                  <AddMore onClick={() => setOpen(true)}>
                    Record your meal
                  </AddMore>
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
              </div>
            ) : null} */}
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
          >
            {/* {selector.snack[0].name ? (
              selector.snack.map((item, index) => {
                return (
                  <RenderContainer>
                    <Numeration>{index + 1}</Numeration>
                    <RenderContainerItem>
                      {selector.snack[index].name}
                    </RenderContainerItem>
                    <RenderContainerItem>
                   Carbs:   {selector.snack[index].nutrition.carbogidrate}
                    </RenderContainerItem>
                    <RenderContainerItem>
                    Protein:  {selector.snack[index].nutrition.protein}
                    </RenderContainerItem>
                    <RenderContainerItem>
                     Fat: {selector.snack[index].nutrition.fat}
                    </RenderContainerItem>
                  </RenderContainer>
                );
              })
            ) : (
              <div
                style={{
                  width: '170px',
                  flexDirection: 'row-reverse',
                  display: 'flex',
                  gap: '8px',
                  maxHeight: '20px',
                }}
              >
                <AddMore onClick={() => setOpen(true)}>
                  Record your meal
                </AddMore>
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
            )} */}
          </MealDashbord>
        </RecordMealBlock>
      </DesktopContainer>
    </Container>
  );
};

export default Planner;
