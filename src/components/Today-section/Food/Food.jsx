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
import {
  selectTotalCalories,
  selectTotalCarbs,
  selectTotalFat,
  selectTotalProtein,
} from '../../../redux/dailyFoodStatistics/foodSelectors';

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

  const totalCalories = useSelector(selectTotalCalories);
  const totalCarbs = useSelector(selectTotalCarbs);
  const totalProtein = useSelector(selectTotalProtein);
  const totalFat = useSelector(selectTotalFat);

  return (
    <Wrapper>
      <Title>Food</Title>
      <ContentWrapper>
        <Calories>
          <DoughnutChart
            dailyGoal={caloriesGoal}
            filledValue={totalCalories}
            bgColor={caloriesChartBgColor}
          />
          <ChartInfo>
            <Amount>{totalCalories}</Amount>
            <Text>calories</Text>
          </ChartInfo>
        </Calories>

        <List>
          <Item>
            <FoodCard
              title="Carbonohidrates"
              bgColor={carbsColor}
              dailyGoal={carbsGoal}
              filledValue={totalCarbs}
            />
          </Item>
          <Item>
            <FoodCard
              title="Protein"
              bgColor={proteinColor}
              dailyGoal={proteinGoal}
              filledValue={totalProtein}
            />
          </Item>
          <Item>
            <FoodCard
              title="Fat"
              bgColor={fatColor}
              dailyGoal={fatGoal}
              filledValue={totalFat}
            />
          </Item>
        </List>
      </ContentWrapper>
    </Wrapper>
  );
};
