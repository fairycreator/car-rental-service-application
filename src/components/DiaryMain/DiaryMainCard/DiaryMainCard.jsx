import { useDispatch, useSelector } from 'react-redux';
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
import { selectOpen } from '../../../redux/dailyFoodStatistics/foodSelectors';
import { Record } from '../../ReacordMealPopUp/Record';
import { openHandler } from '../../../redux/dailyFoodStatistics/foodSlice';
import { useState } from 'react';

export const DiaryMainCard = ({
  meal,
  title,
  totalCarbs,
  totalProtein,
  totalFat,
  typefood,
}) => {
  const dispatch = useDispatch();
  const deleteMealHandler = (title) => {
    dispatch(deleteFood({ userFood: {}, typeFood: title }));
  };
  let isOpen = useSelector(selectOpen);
  // console.log('e: ', );
  const onOpenHandler = (e) => {
    const element = document.getElementById(typefood);
    // element.dataset.type = typefood;
    dispatch(openHandler(true));
  };

  let type = title.toLowerCase();

  return (
    <ContentBlock>
      {isOpen ? <Record secondType={typefood} /> : null}
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
          <AddMealWrap
            id={typefood}
            data-site={typefood}
            onClick={onOpenHandler}
          >
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
