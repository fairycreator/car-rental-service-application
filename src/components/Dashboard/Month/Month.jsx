import { MonthName } from "./Month.styled";

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
let month = months[date.getMonth()];

export const Month = () => {
  return <MonthName>{month}</MonthName>;
};
