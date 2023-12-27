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
      <MealDashbord onClick={() => setFoodType(`${typefood}`)}>
        {meal?.length > 0 ? (
          meal.map((item, index) => {
            return (
              <div key={item._id} style={{ position: 'relative' }}>
                <RenderContainer>
                  <Numeration>{index + 1}</Numeration>
                  <RenderContainerItemName>{item.name}</RenderContainerItemName>
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
                <EditWrapper>
                  <svg style={{ width: '16px', height: '16px' }}>
                    <use href={`${sprite}#edit-2`}></use>
                  </svg>
                  <p>Edit</p>
                </EditWrapper>
              </div>
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
