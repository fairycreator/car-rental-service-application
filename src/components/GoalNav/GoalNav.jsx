import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import loseFat from '../../assets/images/loseFat.png';
// import maintain from '../../assets/images/maintain.png';
// import gainMuscle from '../../assets/images/gainMuscle.png';
import { DivImage, DivStyled, LoseFat, MainText, Text } from './GoalNav.styled';
import sprite from 'assets/images/sprite.svg';
import { IconDown } from '../UserInfoNav/UserInfoNav.styled';

const ButtonMenu = styled(Button)({
    display: 'flex',
    gap: '12px',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: '100%',
    padding: '0px 0px',
    lineHeight: 1.5,
    backgroundColor: 'none',
    borderColor: 'none',
});

export const GoalNav = () => {
  const [value, setValue] = useState('Lose fat');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'Lose fat') {
      console.log("Lose fat")
    } else if (value === 'Maintain') {
      console.log("Maintain")
    } else {
      console.log("Gain muscle")
    }
    handleClose();
  };

  return (
    <div>
      <ButtonMenu
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <DivImage>
          <LoseFat src={loseFat} alt="Lose fat" />
        </DivImage>
          
        <DivStyled>
          <MainText>Goal</MainText>
          <div
            style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Text>{value}</Text>

            {open ? <IconDown>
              <use href={`${sprite}#icon-arrow-up`}></use>
            </IconDown> : <IconDown>
              <use href={`${sprite}#icon-arrow-down`}></use>
            </IconDown>}
          </div>
             
        </DivStyled>
      </ButtonMenu>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ m: 3 }} variant="standard">
            <FormLabel id="demo-error-radios">
              Target selection<br />
              The service will adjust your calorie intake to your goal
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel value="Lose fat" control={<Radio />} label="Lose fat" />
              <FormControlLabel value="Maintain" control={<Radio />} label="Maintain" />
              <FormControlLabel value="Gain muscle" control={<Radio />} label="Gain Muscle" />
            </RadioGroup>
            <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
              Confirm
            </Button>
          </FormControl>
        </form>
      </Menu>
    </div> 
  );
};