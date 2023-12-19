import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CalendarGlobalStyles } from './Calendar.styled';

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

export default function Calendar() {
  const [month, setMonth] = useState('');

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          minWidth: 120,
        }}
      >
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label"
            autoFocus="true"
            sx={{
              color: 'white',
              fontFamily: 'Poppins500',
              fontWeight: '500',
              fontSize: '24px',
              lineHeight: '1.25',
              // transform: 'translate(14px, 16px) scale(1)',
              //            '& legend': { display: 'none' },
              '& .MuiFormLabel-root-MuiInputLabel-root': {
                transform: 'translate(14px, 16px) scale(0.1)',
                color: 'red',
              },
              // '&:focus': {
              //   color: '#E3FFA8',
              //   transform: 'translate(14px, 16px) scale(0.1)',
              // },
            }}
          >
            Months
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={month}
            label="Month"
            onChange={handleChange}
            sx={{
              '& .MuiSelect-select': {
                color: 'white',
              },
            }}
          >
            {months.map((month) => (
              <MenuItem
                key={month}
                value={month}
                sx={{
                  color: '#B6B6B6',
                  fontFamily: 'Poppins400',
                  fontWeight: '400',
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
