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
  Wrapper,
} from './PlannerCard.styled';

import { AddMore } from '../../ReacordMealPopUp/Reacord.styled';
const iconPath = 'src/assets/images/sprite.svg';

export const PlannerCard = ({
  title,
  meal,
  setOpen,
  setFoodType,
  typefood,
  totalCarbs,
  totalProtein,
  totalFat,
 
}) => {
  return (
    <RecordMealBlock
     
    >
      <Wrapper>
        <MealContainer style={{ alignItems: 'center' }}>
          <MealImage src={`src/assets/images/${title}.png`} />
          <MealTitle>{`${title}`}</MealTitle>
        </MealContainer>
        <MealSubscription>
          <MealSubText>
            Carbonohidrates: {!totalCarbs ? 0 : totalCarbs}
          </MealSubText>
          <MealSubText>Protein: {!totalProtein ? 0 : totalProtein}</MealSubText>
          <MealSubText>Fat: {!totalFat ? 0 : totalFat}</MealSubText>
        </MealSubscription>
      </Wrapper>
      <MealDashbord
        style={{ marginTop: '20px' }}
        onClick={() => setFoodType(`${typefood}`)}
      >
        {meal.length >0 ? (
          meal.map((item, index) => {
            return (
              <RenderContainer key={item._id}>
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
        )}
        {meal.length > 0 ? (
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
          </div>
        ) : null}
      </MealDashbord>
    </RecordMealBlock>
  );
};
