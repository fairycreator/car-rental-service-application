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
import sprite from '../../../assets/images/sprite.svg';
import Breakfast from '../../../assets/images/Breakfast.png';

export const DiaryMainCard = ({
  meal,
  title,
  totalCarbs,
  totalProtein,
  totalFat,
}) => {
  // title.toLowerCase()

  const dispatch = useDispatch();
  const deleteMealHandler = (title) => {
    dispatch(deleteFood({ userFood: {}, typeFood: title }));
  };
  return (
    <ContentBlock>
      <TitleBlock>
        <MealImage src={Breakfast} />
        <MealTitle>{title}</MealTitle>
      </TitleBlock>
      <FoodBlock>
        {meal.length > 0 ? (
          <>
            <MealOptions>Carbonohidrates: {totalCarbs}</MealOptions>
            <MealOptions>Protein: {totalProtein}</MealOptions>
            <MealOptions>
              Fat: {totalFat}
              <DeleteIcon
                onClick={() => deleteMealHandler(title.toLowerCase())}
              >
                <use href={`${sprite}#trash-delete`}></use>
              </DeleteIcon>
            </MealOptions>
          </>
        ) : (
          <AddMealWrap>
            <AddMore>Record your meal</AddMore>
            <AddIcon>
              <use href={`${sprite}#icon-add-converted`}></use>
            </AddIcon>
          </AddMealWrap>
        )}
      </FoodBlock>
    </ContentBlock>
  );
};
