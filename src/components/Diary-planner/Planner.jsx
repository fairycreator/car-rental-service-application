// import '../assets/fonts/Poppins-SemiBold.ttf';
// import { display } from '@mui/system';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddMore } from '../ReacordMealPopUp/Reacord.styled';
import { getFood } from '../../redux/dailyFoodStatistics/FoodOperations';
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
  const selector = useSelector(
    (state) => state.dailyStatisticsFood.consumedFood
  );
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
            {selector.breakfast[0].name !== "" ? (
              selector.breakfast.map((item, index) => {
                return (
                  <RenderContainer>
                    <Numeration>{index + 1}</Numeration>
                    <RenderContainerItem>{item.name}</RenderContainerItem>
                    <RenderContainerItem>
                      Carbs: {item.nutrition.carbogidrate}
                    </RenderContainerItem>
                    <RenderContainerItem>
                      Protein: {item.nutrition.protein}
                    </RenderContainerItem>
                    <RenderContainerItem>
                      Fat: {item.nutrition.fat}
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
            onClick={() => setFoodType('dinner')}
          >
            {selector.dinner[0].name !== '' ? (
              selector.dinner.map((item, index) => {
                return (
                  <RenderContainer>
                    <Numeration>{index + 1}</Numeration>
                    <RenderContainerItem>{item.name}</RenderContainerItem>
                    <RenderContainerItem>
                      Carbs: {item.nutrition.carbogidrate}
                    </RenderContainerItem>
                    <RenderContainerItem>
                      Protein: {item.nutrition.protein}
                    </RenderContainerItem>
                    <RenderContainerItem>
                      Fat: {item.nutrition.fat}
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
            onClick={() => setFoodType('lunch')}
          >
            {selector.lunch[0].name !== '' ? (
              selector.lunch.map((item, index) => {
                return (
                  <RenderContainer>
                    <Numeration>{index + 1}</Numeration>
                    <RenderContainerItem>{item.name}</RenderContainerItem>
                    <RenderContainerItem>
                      Carbs: {item.nutrition.carbogidrate}
                    </RenderContainerItem>
                    <RenderContainerItem>
                      Protein: {item.nutrition.protein}
                    </RenderContainerItem>
                    <RenderContainerItem>
                      Fat: {item.nutrition.fat}
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
            {selector.snack[0].name !== '' ? (
              selector.snack.map((item, index) => {
                return (
                  <RenderContainer>
                    <Numeration>{index + 1}</Numeration>
                    <RenderContainerItem>{item.name}</RenderContainerItem>
                    <RenderContainerItem>
                      Carbs: {item.nutrition.carbogidrate}
                    </RenderContainerItem>
                    <RenderContainerItem>
                      Protein: {item.nutrition.protein}
                    </RenderContainerItem>
                    <RenderContainerItem>
                      Fat: {item.nutrition.fat}
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
            {selector.snack[0].name ? (
              <div style={{ display: 'flex' }}>
                <Numeration>{selector.snack.length + 1}</Numeration>
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
      </DesktopContainer>
    </Container>
  );
};

export default Planner;
