import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../../assets/images/sprite.svg';
import { AddWaterModal } from '../AddWaterModal/AddWaterModal';
import { WaterChart } from './WaterChart';
import {
  selectConsumedWaterId,
  selectConsumedWaterValue,
  selectIsLoading,
} from '../../../redux/dailyStatistics/dailySelectors';
import { deleteWater } from '../../../redux/dailyStatistics/dailyOperations';
import { selectUserWaterRate } from '../../../redux/auth/authSelectors';
import {
  Wrapper,
  Title,
  ContentWrapper,
  ProgressBar,
  AddIcon,
  SecondTitle,
  Text,
  Amount,
  Button,
  Span,
  Percentage,
  ProgressBarWrapper,
  DeleteIcon,
} from './Water.styled';

export const Water = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const _id = useSelector(selectConsumedWaterId);
  const waterGoal = useSelector(selectUserWaterRate);
  const waterFilled = useSelector(selectConsumedWaterValue);

  const waterPercentage =
    waterFilled <= waterGoal
      ? Math.round((waterFilled * 100) / waterGoal)
      : 100;

  let left = waterGoal - waterFilled;

  if (waterFilled > waterGoal) {
    left = 0;
  }

  return (
    <Wrapper>
      <Title>Water</Title>
      <ContentWrapper>
        <DeleteIcon
          width="20px"
          height="20px"
          onClick={() => {
            dispatch(deleteWater(_id));
          }}
        >
          <use href={`${sprite}#trash-delete`}></use>
        </DeleteIcon>
        <ProgressBarWrapper>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <ProgressBar>
              <WaterChart waterIntake={waterPercentage} />
              <Percentage>{`${waterPercentage}%`}</Percentage>
            </ProgressBar>
          )}
        </ProgressBarWrapper>
        <div>
          <SecondTitle>Water consumption</SecondTitle>

          <Text>
            <Amount>{waterFilled}</Amount>ml
          </Text>
          <Text>
            <Span>left:</Span> {`${left} ml`}
          </Text>

          <Button type="button" onClick={() => setIsModalOpen(true)}>
            <AddIcon>
              <use href={`${sprite}#icon-add-converted`}></use>
            </AddIcon>
            Add water intake
          </Button>
        </div>
      </ContentWrapper>
      {isModalOpen && <AddWaterModal setIsModalOpen={setIsModalOpen} />}
    </Wrapper>
  );
};
