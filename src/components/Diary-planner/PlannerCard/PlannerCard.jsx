import {
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
  RenderContainerItemName,
  Wrapper,
  EditWrapper,
  NutrWrap,
  MealSubTextMain,
  MealSubWrapper,
} from './PlannerCard.styled';

import { AddMore } from '../../ReacordMealPopUp/Reacord.styled';
import { useDispatch } from 'react-redux';
import { openHandler } from '../../../redux/dailyFoodStatistics/foodSlice';
import sprite from '../../../assets/images/sprite.svg';

export const PlannerCard = ({
  title,
  meal,
  setFoodType,
  typefood,
  totalCarbs,
  totalProtein,
  totalFat,
}) => {
  const dispatch = useDispatch();
  const onOpenHandler = () => {
    dispatch(openHandler(true));
  };
  return (
    <RecordMealBlock>
      <Wrapper>
        <MealContainer style={{ alignItems: 'center' }}>
          <MealImage src={`src/assets/images/${title}.png`} />
          <MealTitle>{`${title}`}</MealTitle>
        </MealContainer>
        <MealSubscription>
          <MealSubTextMain>
            Carbonohidrates: {!totalCarbs ? 0 : totalCarbs}
          </MealSubTextMain>
          <MealSubWrapper>
            <MealSubText>
              Protein: {!totalProtein ? 0 : totalProtein}
            </MealSubText>
            <MealSubText>Fat: {!totalFat ? 0 : totalFat}</MealSubText>
          </MealSubWrapper>
        </MealSubscription>
      </Wrapper>
      <MealDashbord
        style={{ marginTop: '20px' }}
        onClick={() => setFoodType(`${typefood}`)}
      >
        <EditWrapper>
          <svg style={{ width: '16px', height: '16px' }}>
            <use href={`${sprite}#edit-2`}></use>
          </svg>
          <p>Edit</p>
        </EditWrapper>
        {meal?.length > 0 ? (
          meal.map((item, index) => {
            return (
              <RenderContainer key={item._id}>
                <Numeration>{index + 1}</Numeration>
                <RenderContainerItemName>{item.name}</RenderContainerItemName>
                <NutrWrap>
                  <RenderContainerItem>
                    Carbs: {item.nutrition.carbogidrate}
                  </RenderContainerItem>
                  <RenderContainerItem>
                    Protein: {item.nutrition.protein}
                  </RenderContainerItem>
                  <RenderContainerItem>
                    Fat: {item.nutrition.fat}
                  </RenderContainerItem>
                </NutrWrap>
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
            <AddMore onClick={onOpenHandler}>Record your meal</AddMore>
            <svg
              style={{
                display: 'inline-block',
                width: '20px',
                height: ' 20px',
                fill: 'white',
              }}
            >
              <use href={`${sprite}#icon-add-converted`}></use>
            </svg>
          </div>
        )}
        {meal?.length > 0 ? (
          <div style={{ display: 'flex' }}>
            <Numeration>{meal.length + 1}</Numeration>
            <div
              style={{
                width: '170px',
                flexDirection: 'row-reverse',
                display: 'flex',
                gap: '8px',
                maxHeight: '20px',
              }}
            >
              <AddMore onClick={onOpenHandler}>Record your meal</AddMore>
              <svg
                style={{
                  display: 'inline-block',
                  width: '20px',
                  height: ' 20px',
                  fill: 'white',
                }}
              >
                <use href={`${sprite}#icon-add-converted`}></use>
              </svg>
            </div>
          </div>
        ) : null}
      </MealDashbord>
    </RecordMealBlock>
  );
};
