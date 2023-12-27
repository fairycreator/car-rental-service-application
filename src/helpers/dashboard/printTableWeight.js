import { months } from './common';
import { getDaysInMonth } from './getDaysInMonth';

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();

export function printTableWeight(arr, month, changedWeight) {
  let days = [];
  let values = [];
  let prevWeight = 0;
  if (arr?.length > 0) {
    prevWeight = arr[0].value;
  }
  const zero = 0;
  const numberOfMonth = months.indexOf(month) + 1;
  const daysInMonth = getDaysInMonth(currentYear, numberOfMonth);
  const arrDayFromBack = arr?.flatMap((item) => new Date(item.date).getDate());
  for (let i = 0; i < daysInMonth; i++) {
    if (arr?.length > 0) {
      if (arrDayFromBack.includes(i + 1)) {
        let item = arr?.find((item) => new Date(item.date).getDate() === i + 1);
        if (currentMonth === numberOfMonth && i + 1 === currentDay) {
          values.push(changedWeight);
        } else {
          values.push(item.value);
          prevWeight = item.value;
        }
      } else {
        if (currentMonth === numberOfMonth && i + 1 === currentDay) {
          values.push(changedWeight);
        } else if (currentMonth === numberOfMonth && i + 1 > currentDay) {
          values.push(zero);
        } else {
          values.push(prevWeight);
        }
      }
      days.push(i + 1);
    } else {
      values.push(zero);
      days.push(i + 1);
    }
  }
  const newArr = { values, days };
  return newArr;
}
