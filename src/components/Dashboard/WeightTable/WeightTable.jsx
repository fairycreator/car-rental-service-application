import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import { CustomTableRowUp, CustomTableRowDown } from './WeightTable.styled';
import { useSelector } from 'react-redux';
import { selectWeightMonthStatistics } from '../../../redux/dashboard/dashboardSelectors';
import { theme } from '../../../GlobalStyle';


const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1; 
const currentDay = date.getDate();

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
const daysInMonth = getDaysInMonth(currentYear, currentMonth);
console.log(daysInMonth);


export const WeightTable = () => {
  const weightFromBack = useSelector(selectWeightMonthStatistics);
  let days = [];
  let weight = [];
  let prevWeight = 45;
  const arrDayFromBack = weightFromBack?.flatMap((arr) => Number(arr.day));
  

  for (let i = 0; i < daysInMonth; i++) {
    if (weightFromBack) {
      if (arrDayFromBack.includes(i + 1)) {
        let item = weightFromBack?.find((item) => Number(item.day) === i + 1);
        weight.push(item.value);
        prevWeight = item.value;
      } else {
        weight.push(prevWeight);
      }
      days.push(i + 1);
    } else {
      weight.push(prevWeight);
      days.push(i + 1);
    }
  }
  return (
    <>
      <TableContainer
        sx={{
          backgroundColor: '#0F0F0F',
          borderRadius: '12px',
          paddingLeft: '10px',
          paddingRight: '10px',
          [theme.breakpoints.up('tablet')]: {
            paddingLeft: '20px',
            paddingRight: '20px',
          },
          [theme.breakpoints.up('desktop')]: {
            paddingLeft: '10px',
            paddingRight: '10px',
          },
          '&::-webkit-scrollbar': {
            height: '8px',
          },
          // '&::-webkit-scrollbar-track': {
          //   '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
          // },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgb(255, 255, 255, 0.1)',
            outline: '1px solid rgb(255, 255, 255, 0.1)',
            borderRadius: '12px',
          },
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            <CustomTableRowUp
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {weight?.map((item, index) => (
                <TableCell key={item + index} component="th" scope="row">
                  {item}
                </TableCell>
              ))}
            </CustomTableRowUp>
            <CustomTableRowDown
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {days?.map((item) => (
                <TableCell key={item} align="right">
                  {item}
                </TableCell>
              ))}
            </CustomTableRowDown>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
