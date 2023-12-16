import { useState } from 'react';
import {
  CalendarGlobalStyles,
  CustomMenuItem,
  CustomSelect,
  CustomOutlinedInput,
  CustomFormControl,
  CustomInputLabel,
} from './Calendar.styled';


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
  const [currentMonth, setPersonName] = useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(value);
  };

  return (
    <div>
      <CustomFormControl sx={{ m: 1, hight: 36, width: 140, padding: 0 }}>
        <CustomInputLabel id="month-label">Months</CustomInputLabel>
        <CustomSelect
          labelId="month-label"
          id="month-name"
          value={currentMonth}
          onChange={handleChange}
          input={<CustomOutlinedInput label="Month" />}
        >
          {months.map((month) => (
            <CustomMenuItem
              key={month}
              value={month}

            >
              {month}
            </CustomMenuItem>
          ))}
        </CustomSelect>
      </CustomFormControl>
      <CalendarGlobalStyles />
    </div>
  );
}
