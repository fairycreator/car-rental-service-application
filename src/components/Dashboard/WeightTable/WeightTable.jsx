import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import { CustomTableRowUp, CustomTableRowDown } from './WeightTable.styled';

function createData(day, weight) {
  return { day, weight };
}
let column = [];

for (let i = 1; i < 31; i++) {
  column.push(createData(68 + i, i));
}

export const WeightTable = () => {
  return (
    <>
      <TableContainer
        sx={{
          backgroundColor: '#0F0F0F',
          borderRadius: '12px',
          paddingLeft: '10px',
          paddingRight: '10px',
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
              {column.map((column) => (
                <TableCell key={column.day} component="th" scope="row">
                  {column.day}
                </TableCell>
              ))}
            </CustomTableRowUp>
            <CustomTableRowDown
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {column.map((column) => (
                <TableCell key={column.day} align="right">
                  {column.weight}
                </TableCell>
              ))}
            </CustomTableRowDown>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
