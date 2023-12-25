import { DoughnutChart } from '../../DoughnutChart/DoughnutChart';
import {
  ChartWrapper,
  Wrapper,
  InfoWrapper,
  Title,
  Amount,
  Percentage,
} from './FoodCard.styled';

export const FoodCard = ({ title, bgColor, dailyGoal, filledValue }) => {
  if (!filledValue) {
    filledValue = 0;
  }
  let percentage = Math.round((filledValue * 100) / dailyGoal);
  let left = (dailyGoal - filledValue).toFixed(0);

  if (filledValue > dailyGoal) {
    left = 0;
  }

  if (percentage > 100) {
    percentage = 100;
  }

  return (
    <Wrapper>
      <ChartWrapper>
        <DoughnutChart
          dailyGoal={dailyGoal}
          filledValue={filledValue}
          bgColor={bgColor}
        />
        <Percentage>
          <p>{`${percentage}%`}</p>
        </Percentage>
      </ChartWrapper>
      <div>
        <Title>{title}</Title>
        <InfoWrapper>
          <p>
            Goal: <Amount>{dailyGoal}</Amount>
          </p>
          <p>
            left: <Amount>{left}</Amount>
          </p>
        </InfoWrapper>
      </div>
    </Wrapper>
  );
};
