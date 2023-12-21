import { useState } from 'react';
import sprite from '../../../assets/images/sprite.svg';
import {
  Wrapper,
  Title,
  ContentWrapper,
  ProgressBar,
  TrashIcon,
  AddIcon,
  SecondTitle,
  Text,
  Amount,
  Button,
  Span,
  Percentage,
} from './Water.styled';

import { AddWaterModal } from '../AddWaterModal/AddWaterModal';
import { WaterChart } from './WaterChart';

export const Water = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // дані з беку
  const waterGoal = 1500;
  const waterFilled = 1050;

  const waterPercentage =
    waterFilled <= waterGoal
      ? Math.round((waterFilled * 100) / waterGoal)
      : 100;

  const left = waterGoal - waterFilled;

  return (
    <Wrapper>
      <Title>Water</Title>
      <ContentWrapper>
        <TrashIcon>
          <use href={`${sprite}#trash-delete`}></use>
        </TrashIcon>
        <ProgressBar>
          <WaterChart waterIntake={waterPercentage} />
          <Percentage>{`${waterPercentage}%`}</Percentage>
        </ProgressBar>
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
