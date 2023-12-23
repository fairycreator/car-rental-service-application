import { months } from './common';

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

export function printChart(arr, month) {
  let labels = [];
  let values = [];
  let zeroCalories = 0;
  const numberOfMonth = months.indexOf(month) + 1;
  const daysInMonth = getDaysInMonth(currentYear, numberOfMonth);
  const arrDayFromBack = arr?.flatMap((item) => new Date(item.date).getDate());
  for (let i = 0; i < daysInMonth; i++) {
    if (arr?.length > 0) {
      if (arrDayFromBack.includes(i + 1)) {
        let item = arr?.find((item) => new Date(item.date).getDate() === i + 1);
        values.push(item.value);
      } else {
        if (currentMonth === numberOfMonth && i + 1 > currentDay) {
          values.push(null);
        } else {
          values.push(zeroCalories);
        }
      }
      labels.push(i + 1);
    } else {
      labels.push(i + 1);
    }
  }
  if (arr?.length === 0) {
    values = null;
  }
  const newArr = { values, labels };
  return newArr;
}
