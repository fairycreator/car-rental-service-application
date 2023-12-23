import styled from 'styled-components';
import TableRow from '@mui/material/TableRow';
import { theme } from '../../../GlobalStyle';

export const CustomTableRowUp = styled(TableRow)({
  '& .MuiTableCell-root': {
    fontFamily: 'Poppins400, sans-serif',
    fontSize: '14px',
    lineHeight: '1.4',
    color: '#FFFFFF',
    borderBottom: 'none',
    paddingTop: '24px',
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingBottom: '8px',
    textAlign: 'center',

    [theme.breakpoints.up('tablet')]: {
      fontSize: '10px',
      lineHeight: '1.6',
      paddingLeft: '3px',
      paddingRight: '3px',
      paddingBottom: '6px',
    },

    [theme.breakpoints.up('desktop')]: {
      fontSize: '14px',
      lineHeight: '1.4',
      paddingLeft: '12px',
      paddingRight: '12px',
      paddingBottom: '8px',
    },
  },
});
export const CustomTableRowDown = styled(TableRow)({
  '& .MuiTableCell-root': {
    fontFamily: 'Poppins400, sans-serif',
    fontSize: '10px',
    lineHeight: '1.4',
    color: '#B6B6B6',
    borderBottom: 'none',
    paddingTop: '8px',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingBottom: '36px',
    textAlign: 'center',

    [theme.breakpoints.up('tablet')]: {
      paddingTop: '6px',
      paddingLeft: '5px',
      paddingRight: '5px',
      paddingBottom: '44px',
    },

    [theme.breakpoints.up('desktop')]: {
      paddingTop: '8px',
      paddingLeft: '15px',
      paddingRight: '15px',
      paddingBottom: '36px',
    },
  },
});
