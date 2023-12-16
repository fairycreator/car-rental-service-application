import { styled, createGlobalStyle } from 'styled-components';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export const CustomSelect = styled(Select)`
  font-family: 'Poppins500';
  font-weight: 500;
  font-size: 86px;
  background-color: orange;
`;

export const CustomMenuItem = styled(MenuItem)`
  color: white;
  background-color: green;
`;

export const CustomOutlinedInput = styled(OutlinedInput)`
  background-color: var(--primary-color-black-one);
`;

export const CustomInputLabel = styled(InputLabel)`
  background-color: brown;
  color: white;
`;

export const CustomFormControl = styled(FormControl)`
  background-color: var(--primary-color-black-one);
`;

export const CalendarGlobalStyles = createGlobalStyle`
  .css-6hp17o-MuiList-root-MuiMenu-list {
    background-color: var(--primary-color-black-two);
    color: var(--primary-color-grey);
  }

  .notranslate{
    color: red;
  }
`;

