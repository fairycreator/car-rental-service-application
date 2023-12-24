import { useSelector } from 'react-redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import { theme } from '../../../GlobalStyle';
import { CustomTableRowUp, CustomTableRowDown } from './WeightTable.styled';

import { selectWeightMonthStatistics } from '../../../redux/monthStatistics/dashboardSelectors';
import { printTableWeight } from '../../../helpers/dashboard/printTableWeight';


export const WeightTable = ({ month }) => {
  const weightFromBack = useSelector(selectWeightMonthStatistics);
  const newArrOfWeight = printTableWeight(weightFromBack, month);
  let days = newArrOfWeight.days;
  let weight = newArrOfWeight.values;

  return (
    <>
      <TableContainer
        sx={{
          [theme.breakpoints.down('tablet')]: {
            width: '100vw',
          },
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
            height: '2px',
          },
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
                <TableCell key={index} component="th" scope="row">
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
