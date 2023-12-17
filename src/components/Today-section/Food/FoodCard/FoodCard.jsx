import { DoughnutChart } from '../DoughnutChart/DoughnutChart';
import { ChartWrapper, Wrapper, InfoWrapper } from './FoodCard.styled';

export const FoodCard = () => {
  return (
    <Wrapper>
      <ChartWrapper>
        <DoughnutChart />
      </ChartWrapper>
      <div>
        <h4>Title</h4>
        <InfoWrapper>
          <p>
            Goal: <span>1221</span>
          </p>
          <p>left:</p>
        </InfoWrapper>
      </div>
    </Wrapper>
  );
};
