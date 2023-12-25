import { MealImage } from '../../Diary-planner/Planner.styled';
import { AddMore } from '../../ReacordMealPopUp/Reacord.styled';
import {
  ContentBlock,
  FoodBlock,
  MealOptions,
  MealTitle,
  TitleBlock,
} from './DiaryMainCard.styled';

export const DiaryMainCard = ({
  meal,
  title,
  totalCarbs,
  totalProtein,
  totalFat,
}) => {
  const iconPath = 'src/assets/images/sprite.svg';
  return (
    <ContentBlock>
      <TitleBlock>
        <MealImage src={`src/assets/images/${title}.png`} />
        <MealTitle>{title}</MealTitle>
      </TitleBlock>
      <FoodBlock>
        {meal[0].name !== '' ? (
          <>
            <MealOptions>Carbonohidrates: {totalCarbs}</MealOptions>
            <MealOptions>Protein: {totalProtein}</MealOptions>
            <MealOptions>
              Fat: {totalFat}
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
          </>
        ) : (
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
        )}
      </FoodBlock>
    </ContentBlock>
  );
};
