import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Calendar from './Calendar/Calendar';
import sprite from '../../assets/images/sprite.svg';
import { Month } from './Month/Month';
import { LineChartCalories } from './LineChart/LineChartCalories';
import { LineChartWater } from './LineChart/LineChartWater';
import { WeightTable } from './WeightTable/WeightTable';

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
  LineChartsBox,
  Scroll,
} from './Dashboard.styled';

import {
  selectCaloriesMonthStatistics,
  selectError,
  selectIsLoading,
  selectWaterMonthStatistics,
  selectWeightMonthStatistics,
} from '../../redux/monthStatistics/dashboardSelectors';
import { getMonthStatistics } from '../../redux/monthStatistics/dashboardOperations';
import { months } from '../../helpers/dashboard/common';
import { getAvarageValue } from '../../helpers/dashboard/getAvarageValue';
import { getAvarageValueCalories } from '../../helpers/dashboard/getAvarageValueCalories';
import { cutQuery } from '../../helpers/dashboard/cutQuery';

const date = new Date();
let currentMonth = months[date.getMonth()];

export const Dashboard = () => {
  const calories = useSelector(selectCaloriesMonthStatistics);
  const water = useSelector(selectWaterMonthStatistics);
  const weight = useSelector(selectWeightMonthStatistics);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const location = useLocation();
  const backLink = location?.state?.from ?? '/';

  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const queryMonth = searchParams.get('queryMonth');

  const [month, setMonth] = useState(cutQuery(queryMonth) ?? currentMonth);

  useEffect(() => {
    async function getStatistics() {
      try {
        if (!queryMonth) {
          dispatch(getMonthStatistics(months.indexOf(cutQuery(month)) + 1));
        } else {
          dispatch(
            getMonthStatistics(months.indexOf(cutQuery(queryMonth)) + 1)
          );
        }
      } catch (error) {
        console.log('error', error);
      }
    }
    getStatistics();
  }, [month, queryMonth, dispatch]);

  const handleChange = (e) => {
    const select = e.target.value;
    setSearchParams({ queryMonth: `${Date.now()}/${select}` });
    setMonth(select);
  };

  return (
    <>
      {isLoading ? (
        // <Loader />
        <p>Oops! Loading.....</p>
      ) : (
        !error && (
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
                <Calendar month={month} onChange={handleChange} />
              </CalendarWrapper>
              <Month month={month} />
            </MonthWrapper>
            <LineChartsWrapper>
              <ChartWrapper>
                <ValueWrapper>
                  <Value> Calories </Value>
                  <Text>
                    Average value:{' '}
                    <AverageValue>
                      {getAvarageValueCalories(calories)} cal
                    </AverageValue>
                  </Text>
                </ValueWrapper>
                <Scroll
                  style={{
                    overflowX: 'auto',
                  }}
                >
                  <LineChartsBox>
                    <LineChartCalories month={month} />
                  </LineChartsBox>
                </Scroll>
              </ChartWrapper>
              <ChartWrapper>
                <ValueWrapper>
                  <Value> Water </Value>
                  <Text>
                    Average value:{' '}
                    <AverageValue>{getAvarageValue(water)} ml</AverageValue>
                  </Text>
                </ValueWrapper>
                <Scroll style={{ overflowX: 'auto' }}>
                  <LineChartsBox>
                    <LineChartWater month={month} />
                  </LineChartsBox>
                </Scroll>
              </ChartWrapper>
            </LineChartsWrapper>
            <ChartWrapper>
              <ValueWrapper>
                <Value> Weight </Value>
                <Text>
                  Average value:{' '}
                  <AverageValue>{getAvarageValue(weight)} kg</AverageValue>
                </Text>
              </ValueWrapper>
              <Scroll>
                <WeightTable month={month} />
              </Scroll>
            </ChartWrapper>
          </DashboardWrapper>
        )
      )}
      {error && !isLoading && <p>Oops! Something went wrong!</p>}
    </>
  );
};
