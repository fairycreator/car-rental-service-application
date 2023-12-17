import { DoughnutChart } from '../DoughnutChart/DoughnutChart';
import {
  ChartWrapper,
  Wrapper,
  InfoWrapper,
  Title,
  Amount,
} from './FoodCard.styled';

export const FoodCard = () => {
  return (
    <Wrapper>
      <ChartWrapper>
        <DoughnutChart />
      </ChartWrapper>
      <div>
        <Title>Title</Title>
        <InfoWrapper>
          <p>
            Goal: <Amount>1221</Amount>
          </p>
          <p>
            left: <Amount>322</Amount>
          </p>
        </InfoWrapper>
      </div>
    </Wrapper>
  );
};
