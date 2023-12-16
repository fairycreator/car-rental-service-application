import { styled, createGlobalStyle } from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const CustomTable = styled(Table)`
  background-color: var(--primary-color-black-two);
`;

export const CustomTableBody = styled(TableBody)`
 
`;

export const CustomTableCell = styled(TableCell)({

});

export const CustomTableContainer = styled(TableContainer)`
  color: var(--primary-color-white);
`;

export const CustomTableRow = styled(TableRow)({
  '& .MuiTableCell-root': {
    color: '#FFFFFF',
  },
});
export const CustomPaper = styled(Paper)`

`;




export const WeightChartGlobalStyles = createGlobalStyle`

`;