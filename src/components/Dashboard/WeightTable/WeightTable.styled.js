import { styled} from 'styled-components';
import TableRow from '@mui/material/TableRow';

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
  },
});