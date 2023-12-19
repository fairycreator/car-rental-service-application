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
  const left = (dailyGoal - filledValue).toFixed(1);
  const percentage = Math.round((filledValue * 100) / dailyGoal);

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
