import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFood } from '../../redux/dailyFoodStatistics/FoodOperations';
import { Record } from '../ReacordMealPopUp/Record';
import { Container, DesktopContainer, Title } from './Planner.styled';
import { PlannerCard } from './PlannerCard/PlannerCard';

import {
  selectBreakfast,
  selectDinner,
  selectLunch,
  selectSnack,
} from '../../redux/dailyFoodStatistics/foodSelectors';

export const Planner = () => {
  const iconPath = 'src/assets/images/sprite.svg';
  const [isOpen, setOpen] = useState(false);
  const [foodType, setFoodType] = useState('');
  const breakfast = useSelector(selectBreakfast);
  const lunch = useSelector(selectLunch);
  const dinner = useSelector(selectDinner);
  const snack = useSelector(selectSnack);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFood());
  }, [dispatch]);
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          marginBottom: '20px',
        }}
      >
        <svg
          style={{
            display: 'inline-block',
            width: '16px',
            height: ' 16px',
            fill: 'white',
            rotate: '180deg',
          }}
        >
          <use href={`${iconPath}#icon-arrowright`}></use>
        </svg>
        <Title>Diary</Title>
      </div>
      {isOpen ? <Record isOpen={setOpen} type={foodType} /> : null}
      <DesktopContainer>
        <PlannerCard
          mealPNG={'Breakfast'}
          title={'Breakfast'}
          typefood={'breakfast'}
          selector={breakfast}
          setOpen={setOpen}
          setFoodType={setFoodType}
        />
        <PlannerCard
          mealPNG={'Lunch'}
          title={'Lunch'}
          typefood={'lunch'}
          selector={lunch}
          setOpen={setOpen}
          setFoodType={setFoodType}
        />
        <PlannerCard
          mealPNG={'Dinner'}
          title={'Dinner'}
          typefood={'dinner'}
          selector={dinner}
          setOpen={setOpen}
          setFoodType={setFoodType}
        />
        <PlannerCard
          mealPNG={'Snack'}
          title={'Snack'}
          typefood={'snack'}
          selector={snack}
          setOpen={setOpen}
          setFoodType={setFoodType}
        />
      </DesktopContainer>
    </Container>
  );
};
