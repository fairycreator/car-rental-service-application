import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import loseFat from '../../assets/images/loseFat.png';
import maintain from '../../assets/images/maintain.png';
import gainMuscle from '../../assets/images/gainMuscle.png';
import { DivImage, DivStyled, LoseFat, MainText, MenuTitle, MenuText, Text, BtnText } from './GoalNav.styled';
import sprite from 'assets/images/sprite.svg';
import { IconDown } from '../UserInfoNav/UserInfoNav.styled';

const ButtonMenu = styled(Button)({
    display: 'flex',
    gap: '12px',
    textTransform: 'none',
    padding: '0px 0px',
    borderColor: 'none',
});

const ButtonList = styled(Button)({
  border: 'none',
  textTransform: 'none',
  backgroundColor: '#E3FFA8',
  marginTop: '7px',
  borderRadius: '12px',
  width: '166px',
  height: '36px',
});

const StyledMenu = styled(Menu)({
    '& .MuiPaper-root': {
        borderRadius: 12,
        marginTop: '16px',
    backgroundColor: '#0F0F0F',
        boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
    },
    '& .MuiMenuItem-root': {
        // padding: '0px',
      // gap: '8px',
    },
    '& .MuiList-root': {
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        width: '392px',
        height: 'auto',
        // gap: '16px',
        padding: '20px 0px 40px 24px', 
    },
});

export const GoalNav = () => {
  const [value, setValue] = useState('Lose fat');
  const [currentValue, setCurrentValue] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleRadioChange = (event) => {
    setCurrentValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentValue === 'Lose fat') {
      console.log("Lose fat")
    } else if (currentValue === 'Maintain') {
      console.log("Maintain")
    } else {
      console.log("Gain muscle")
    }
    setValue(currentValue);
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

      <StyledMenu
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
          <FormControl >

            <FormLabel id="demo-error-radios">
            <MenuTitle>Target selection</MenuTitle>
            <MenuText>The service will adjust your calorie<br />intake to your goal</MenuText> 
            </FormLabel>
            <RadioGroup
              // aria-labelledby="demo-error-radios"
              sx={{
                '& .MuiFormControlLabel-root .MuiFormControlLabel-label': {
                  fontFamily: 'Poppins400',
                  fontSize: '14px',
                  color: 'white.main',
                  marginLeft: '3px'
                },
              }}
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >

              <FormControlLabel value="Lose fat" control={<Radio icon={<DivImage >
          <LoseFat src={loseFat} alt="Lose fat" />
              </DivImage>} checkedIcon={<DivImage>
          <LoseFat src={loseFat} alt="Lose fat" />
              </DivImage>} />} label="Lose fat" />
              
              <FormControlLabel value="Maintain" control={<Radio icon={<DivImage>
                <LoseFat src={maintain} alt="Maintain" />
              </DivImage>} checkedIcon={<DivImage>
                <LoseFat src={maintain} alt="Maintain" />
                </DivImage>} />} label="Maintain" />
              
              <FormControlLabel value="Gain muscle" control={<Radio icon={<DivImage>
          <LoseFat src={gainMuscle} alt="Gain muscle" />
        </DivImage>} checkedIcon={<DivImage>
          <LoseFat src={gainMuscle} alt="Gain muscle" />
                </DivImage>} />} label="Gain Muscle" />
              
            </RadioGroup>

            <ButtonList type="submit" variant="outlined">
              <BtnText>Confirm</BtnText>
            </ButtonList>

          </FormControl>
        </form>
      </StyledMenu>
    </div> 
  );
};