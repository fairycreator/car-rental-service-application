import { MealImage } from '../../Diary-planner/Planner.styled';
import { AddMore } from '../../ReacordMealPopUp/Reacord.styled';
import {
  ContentBlock,
  FoodBlock,
  MealOptions,
  MealTitle,
  TitleBlock,
  DeleteIcon,
  AddIcon,
  AddMealWrap,
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
              <DeleteIcon>
                <use href={`${iconPath}#trash-delete`}></use>
              </DeleteIcon>
            </MealOptions>
          </>
        ) : (
          <AddMealWrap>
            <AddMore>Record your meal</AddMore>
            <AddIcon>
              <use href={`${iconPath}#icon-add-converted`}></use>
            </AddIcon>
          </AddMealWrap>
        )}
      </FoodBlock>
    </ContentBlock>
  );
};
