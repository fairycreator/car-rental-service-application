import { months } from './common';
import { getDaysInMonth } from './getDaysInMonth';

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();


export function printChartCalories(arr, month) {
  let days = [];
  let values = [];
  let zeroCalories = 0;
  const numberOfMonth = months.indexOf(month) + 1;
  const daysInMonth = getDaysInMonth(currentYear, numberOfMonth);
  const arrDayFromBack = arr?.flatMap((item) => new Date(item.date).getDate());
  for (let i = 0; i < daysInMonth; i++) {
    if (arr?.length > 0) {
      if (arrDayFromBack.includes(i + 1)) {
        let item = arr?.find((item) => new Date(item.date).getDate() === i + 1);
        values.push(item.totalCalories);
      } else {
        if (currentMonth === numberOfMonth && i + 1 > currentDay) {
          values.push(null);
        } else {
          values.push(zeroCalories);
        }
      }
      days.push(i + 1);
    } else {
      days.push(i + 1);
    }
  }
  if (arr?.length === 0 || arr[0]?.totalCalories === 0) {
    values = null;
  }
  const newArr = { values, days };
  return newArr;
}
