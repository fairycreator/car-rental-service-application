import Calendar from './Calendar/Calendar';

import { Month } from './Month/Month';

import sprite from '../../assets/images/sprite.svg';
import {
  Text,
  CalendarWrapper,
  ChartWrapper,
  DashboardWrapper,
  IconArrowLeftWrapper,
  LineChartsWrapper,
  MonthWrapper,
  Value,
  ValueWrapper,
  AverageValue,
  PrevBtn,
  LinkBtnItem,
} from './Dashboard.styled';
import { WeightTable } from './WeightTable/WeightTable';
import { LineChartCalories } from './LineChart/LineChartCalories';
import { LineChartWater } from './LineChart/LineChartWater';
import { useLocation } from 'react-router-dom';

export const Dashboard = () => {
  const values = {
    cal: 375,
    ml: 200,
    kg: 60,
  };
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';
  return (
    <DashboardWrapper>
      <MonthWrapper>
        <CalendarWrapper>
          <PrevBtn type="button">
            <LinkBtnItem to={backLink}>
              <IconArrowLeftWrapper>
                <use href={`${sprite}#icon-arrowright`}></use>
              </IconArrowLeftWrapper>
            </LinkBtnItem>
          </PrevBtn>
          <Calendar />
        </CalendarWrapper>
        <Month />
      </MonthWrapper>
      <LineChartsWrapper>
        <ChartWrapper>
          <ValueWrapper>
            <Value> Calories </Value>
            <Text>
              Average value: <AverageValue>{values.cal} cal</AverageValue>
            </Text>
          </ValueWrapper>
          <LineChartCalories />
        </ChartWrapper>
        <ChartWrapper>
          <ValueWrapper>
            <Value> Water </Value>
            <Text>
              Average value: <AverageValue>{values.ml} ml</AverageValue>
            </Text>
          </ValueWrapper>
          <LineChartWater />
        </ChartWrapper>
      </LineChartsWrapper>
      <ChartWrapper>
        <ValueWrapper>
          <Value> Weight </Value>
          <Text>
            Average value: <AverageValue>{values.kg} kg</AverageValue>
          </Text>
        </ValueWrapper>
        <WeightTable />
      </ChartWrapper>
    </DashboardWrapper>
  );
};
