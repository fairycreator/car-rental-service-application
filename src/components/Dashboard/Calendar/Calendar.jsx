import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { theme } from '../../../GlobalStyle';
import { CalendarGlobalStyles } from './Calendar.styled';
import { months } from '../../../helpers/dashboard/common';


const date = new Date();
const currentMonth = date.getMonth();

let newArrMonth = [];

for (let i = currentMonth; i < months?.length; i++) {
newArrMonth.push(months[i]);
}
for (let i = 0; i < currentMonth; i++) {
  newArrMonth.push(months[i]);
}


console.log('newArrMonth', newArrMonth);

const NewIcon = (props) => (
  <svg {...props} width="16" height="16" fill="red" viewBox="0 0 32 32">
    <path d="M5.067 11.019c-0.403 0.175-0.604 0.484-0.604 0.932 0 0.247 0.028 0.339 0.164 0.533 0.227 0.324 8.995 9.063 9.293 9.261 0.695 0.464 1.221 0.621 2.080 0.621s1.384-0.157 2.080-0.621c0.341-0.228 9.152-9.031 9.317-9.309 0.161-0.272 0.187-0.692 0.056-0.944-0.168-0.326-0.503-0.546-0.888-0.546-0.132 0-0.258 0.026-0.373 0.072l0.007-0.002c-0.14 0.057-1.545 1.425-4.705 4.581-3.096 3.091-4.581 4.537-4.747 4.624-0.203 0.105-0.319 0.125-0.747 0.125s-0.544-0.020-0.747-0.125c-0.165-0.087-1.651-1.533-4.747-4.624-3.16-3.156-4.565-4.524-4.705-4.581-0.107-0.048-0.232-0.077-0.364-0.077-0.134 0-0.261 0.029-0.376 0.082l0.006-0.002z"></path>
  </svg>
);

export default function Calendar({ onChange }) {
  return (
    <>
      <Box
        sx={{
          minWidth: 116,
          [theme.breakpoints.up('tablet')]: {
            minWidth: 140,
          },
          top: '99px',
          left: '80px',
          border: 'none',
          padding: '0px',
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        }}
      >
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              color: '#FFFFFF',
              fontFamily: 'Poppins500',
              fontWeight: '500',
              fontSize: '24px',
              lineHeight: '1.25',
              top: '-20px',
              left: '-16px',
              [theme.breakpoints.up('tablet')]: {
                fontSize: '30px',
              },
              '&.Mui-focused': {
                color: '#FFFFFF',
                fontSize: '24px',
                transform: 'translate(14px, 9px) scale(1)',
              },
            }}
          >
            Months
          </InputLabel>
          <Select
            IconComponent={NewIcon}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={''}
            label="Month"
            onChange={onChange}
            sx={{
              '& .MuiSelect-select': {
                color: '#FFFFFF',
                padding: '0px',
              },
              '& .MuiSelect-icon ': {
                fill: '#e3ffa8',
                right: '0px',
                [theme.breakpoints.up('tablet')]: {
                  top: '8px',
                  right: '2px',
                },
              },
            }}
          >
            {newArrMonth.map((month) => (
              <MenuItem
                key={month}
                value={month}
                sx={{
                  color: '#B6B6B6',
                  fontFamily: 'Poppins400',
                  fontWeight: '400',
                  paddingLeft: '16px',
                  paddingTop: '4px',
                  paddingBottom: '4px',
                  backgroundColor: '#0F0F0F',
                  fontSize: '14px',
                  lineHeight: '1.4',
                  '&:hover': {
                    color: '#E3FFA8',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  },
                }}
              >
                {month}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <CalendarGlobalStyles />
    </>
  );
}
