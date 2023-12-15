import { Calendar } from './Calendar/Calendar';
import { LineChart } from './LineChart/LineChart';
import { Month } from './Month/Month';
import { WeightChart } from './WeightChart/WeightChart';
import sprite from '../../assets/images/sprite.svg';
import {
  Text,
  CalendarWrapper,
  ChartWrapper,
  DashboardWrapper,
  IconWrapper,
  LineChartsWrapper,
  MonthWrapper,
  Value,
  ValueWrapper,
  AverageValue,
} from './Dashboard.styled';

export const Dashboard = () => {
  const values = {
    cal: 375,
    ml: 200,
    kg: 60,
  };
  // return <div>Dashboard!!!</div>;
  return (
    <DashboardWrapper>
      <MonthWrapper>
        <CalendarWrapper>
          <IconWrapper>
            <use href={`${sprite}#icon-arrowright`}></use>
          </IconWrapper>
          <Calendar />
          <IconWrapper>
            <use href={`${sprite}#icon-arrow-down`}></use>
          </IconWrapper>
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
          <LineChart />
        </ChartWrapper>
        <ChartWrapper>
          <ValueWrapper>
            <Value> Water </Value>
            <Text>
              Average value: <AverageValue>{values.ml} ml</AverageValue>
            </Text>
          </ValueWrapper>
          <LineChart />
        </ChartWrapper>
      </LineChartsWrapper>
      <ChartWrapper>
        <ValueWrapper>
          <Value> Weight </Value>
          <Text>
            Average value: <AverageValue>{values.kg} kg</AverageValue>
          </Text>
        </ValueWrapper>
        <WeightChart />
      </ChartWrapper>
    </DashboardWrapper>
  );
};
