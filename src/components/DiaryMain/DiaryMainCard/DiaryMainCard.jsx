import { useDispatch } from 'react-redux';
import { deleteFood } from '../../../redux/dailyFoodStatistics/foodOperations';
import { MealImage } from '../../Diary-planner/PlannerCard/PlannerCard.styled';
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
  // title.toLowerCase()

  const iconPath = 'src/assets/images/sprite.svg';
  const dispatch = useDispatch();
  const deleteMealHandler = (title) => {
    dispatch(deleteFood(JSON.stringify({ userFood: {}, typeFood: title })));
  };
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
              <DeleteIcon
                onClick={() => deleteMealHandler(title.toLowerCase())}
              >
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
