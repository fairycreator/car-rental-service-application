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
import { useEffect, useState } from 'react';
import { getMonthStatistics } from '../../redux/dashboard/dashboardOperations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCaloriesMonthStatistics,
  selectError,
  selectIsLoading,
  selectWaterMonthStatistics,
  selectWeightMonthStatistics,
} from '../../redux/dashboard/dashboardSelectors';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const date = new Date();
let currentMonth = months[date.getMonth()];
console.log('currentMonth', currentMonth);

export const Dashboard = () => {
  const [month, setMonth] = useState(currentMonth);
  const calories = useSelector(selectCaloriesMonthStatistics);
  const water = useSelector(selectWaterMonthStatistics);
  const weight = useSelector(selectWeightMonthStatistics);

  function gerAvarageValue(arr) {
    const totalScore = arr?.reduce((total, arr) => {
      return total + arr.value;
    }, 0);
    const averageScore = totalScore / arr?.length;
    return Math.round(averageScore);
  }

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const selectMonth = {
  //   month: months.indexOf(month)+1,
  // };
  // console.log('selectMonth', selectMonth);

  useEffect(() => {
    async function getStatistics() {
      try {
        if (!month) return;
        dispatch(getMonthStatistics({ month: String(months.indexOf(month) + 1)}));
      } catch (error) {
        console.log('error', error);
      }
    }
    getStatistics();
  }, [month, dispatch]);

  const handleChange = (e) => {
    const month = e.target.value;
    console.log('select', month);
    // setSearchParams({ queryMonth: `${Date.now()}/${select}` });
    setMonth(month);
    // setSearchParams('');
  };

  // const cutQuery = (month) => month.slice(month.indexOf('/') + 1, month.length);
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';
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
                      {gerAvarageValue(calories)} cal
                    </AverageValue>
                  </Text>
                </ValueWrapper>
                <LineChartCalories />
              </ChartWrapper>
              <ChartWrapper>
                <ValueWrapper>
                  <Value> Water </Value>
                  <Text>
                    Average value:{' '}
                    <AverageValue>{gerAvarageValue(water)} ml</AverageValue>
                  </Text>
                </ValueWrapper>
                <LineChartWater />
              </ChartWrapper>
            </LineChartsWrapper>
            <ChartWrapper>
              <ValueWrapper>
                <Value> Weight </Value>
                <Text>
                  Average value:{' '}
                  <AverageValue>{gerAvarageValue(weight)} kg</AverageValue>
                </Text>
              </ValueWrapper>
              <WeightTable />
            </ChartWrapper>
          </DashboardWrapper>
        )
      )}
      {error && !isLoading && <p>Oops! Something went wrong!</p>}
    </>
  );
};
