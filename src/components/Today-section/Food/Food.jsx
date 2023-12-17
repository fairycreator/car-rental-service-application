import { DoughnutChart } from './DoughnutChart/DoughnutChart';

import {
  Wrapper,
  ContentWrapper,
  List,
  Item,
  Title,
  Calories,
} from './Food.styled';
import { FoodCard } from './FoodCard/FoodCard';

export const Food = () => {
  return (
    <Wrapper>
      <Title>Food</Title>
      <ContentWrapper>
        <Calories>
          <DoughnutChart />
        </Calories>

        <List>
          <Item>
            <FoodCard />
          </Item>
          <Item>
            <FoodCard />
          </Item>
          <Item>
            <FoodCard />
          </Item>
        </List>
      </ContentWrapper>
    </Wrapper>
  );
};
