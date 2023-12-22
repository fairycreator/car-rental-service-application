import { DoughnutChart } from '../DoughnutChart/DoughnutChart';
import { FoodCard } from './FoodCard/FoodCard';
import { theme } from '../../../GlobalStyle';
import { useSelector } from 'react-redux';
import {
  selectUserBMRRate,
  selectUserCarbsRate,
  selectUserProteinRate,
  selectUserFatRate,
} from '../../../redux/auth/authSelectors';

import {
  Wrapper,
  ContentWrapper,
  List,
  Item,
  Title,
  Calories,
  ChartInfo,
  Amount,
  Text,
} from './Food.styled';

export const Food = () => {
  const caloriesChartBgColor = `${theme.palette.litegreen.main}`;
  const carbsColor = `${theme.palette.pink.main}`;
  const proteinColor = `${theme.palette.yellow.main}`;
  const fatColor = `${theme.palette.grey.main}`;

  const caloriesGoal = useSelector(selectUserBMRRate);
  const carbsGoal = useSelector(selectUserCarbsRate);
  const proteinGoal = useSelector(selectUserProteinRate);
  const fatGoal = useSelector(selectUserFatRate);

  // дані з беку

  const caloriesCurrent = 1360;
  const carbsFilled = 136;
  const proteinFilled = 119.5;
  const fatFilled = 38.8;

  return (
    <Wrapper>
      <Title>Food</Title>
      <ContentWrapper>
        <Calories>
          <DoughnutChart
            dailyGoal={caloriesGoal}
            filledValue={caloriesCurrent}
            bgColor={caloriesChartBgColor}
          />
          <ChartInfo>
            <Amount>{caloriesCurrent}</Amount>
            <Text>calories</Text>
          </ChartInfo>
        </Calories>

        <List>
          <Item>
            <FoodCard
              title="Carbonohidrates"
              bgColor={carbsColor}
              dailyGoal={carbsGoal}
              filledValue={carbsFilled}
            />
          </Item>
          <Item>
            <FoodCard
              title="Protein"
              bgColor={proteinColor}
              dailyGoal={proteinGoal}
              filledValue={proteinFilled}
            />
          </Item>
          <Item>
            <FoodCard
              title="Fat"
              bgColor={fatColor}
              dailyGoal={fatGoal}
              filledValue={fatFilled}
            />
          </Item>
        </List>
      </ContentWrapper>
    </Wrapper>
  );
};
