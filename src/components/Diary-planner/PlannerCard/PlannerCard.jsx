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
} from '../Planner.styled';

import { AddMore } from '../../ReacordMealPopUp/Reacord.styled';
const iconPath = 'src/assets/images/sprite.svg';

export const PlannerCard = ({
  title,
  meal,
  setOpen,
  setFoodType,
  typefood,
}) => {
  return (
    <RecordMealBlock>
      <Wrapper>
        <MealContainer style={{ alignItems: 'center' }}>
          <MealImage src={`src/assets/images/${title}.png`} />
          <MealTitle>{`${title}`}</MealTitle>
        </MealContainer>
        <MealSubscription>
          <MealSubText>Carbonohidrates:</MealSubText>
          <MealSubText>Protein:</MealSubText>
          <MealSubText>Fat:</MealSubText>
        </MealSubscription>
      </Wrapper>
      <MealDashbord
        style={{ marginTop: '20px' }}
        onClick={() => setFoodType(`${typefood}`)}
      >
        {meal[0].name !== '' ? (
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
        {selector[0].name ? (
          <div style={{ display: 'flex' }}>
            <Numeration>{selector.length + 1}</Numeration>
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
