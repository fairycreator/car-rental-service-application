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
import { selectOpen } from '../../../redux/dailyFoodStatistics/foodSelectors';
import { Record } from '../../ReacordMealPopUp/Record';
import { openHandler } from '../../../redux/dailyFoodStatistics/foodSlice';
import { useState } from 'react';
import { MealPopUpModal } from '../../ReacordMealPopUp/MealPopUpModal';

export const DiaryMainCard = ({
  meal,
  title,
  totalCarbs,
  totalProtein,
  totalFat,
  typefood,
  src,
}) => {
  const dispatch = useDispatch();
  const deleteMealHandler = (title) => {
    dispatch(deleteFood({ userFood: {}, typeFood: title }));
  };
  let isOpen = useSelector(selectOpen);
  // console.log('e: ', );
  const onOpenHandler = (e) => {
    const element = document.getElementById(typefood);
    e.stopPropagation();
    // element.dataset.type = typefood;
    dispatch(openHandler(true));
  };

  let type = title.toLowerCase();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <ContentBlock>
      <MealPopUpModal
        closeModal={closeModal}
        stateModal={isModalOpen}
        typefood={typefood}
      />
      <TitleBlock>
        <MealImage src={src} />
        <MealTitle>{title}</MealTitle>
      </TitleBlock>
      <FoodBlock>
        {meal?.length > 0 ? (
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
          <AddMealWrap id={typefood} data-site={typefood} onClick={openModal}>
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
