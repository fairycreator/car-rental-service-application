import { useState } from 'react';
import { useSelector } from "react-redux";
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import { selectUserGender, selectUserGoal } from '../../redux/auth/authSelectors';
import loseFat from '../../assets/images/loseFat.png';
import maintain from '../../assets/images/maintain.png';
import loseFat_girl from '../../assets/images/loseFat_girl.png';
import maintain_girl from '../../assets/images/maintain_girl.png';
import gainMuscle from '../../assets/images/gainMuscle.png';
import {
  DivImage,
  DivStyled,
  LoseFatBig,
  LoseFat,
  MainText,
  MenuTitle,
  MenuText,
  Text,
  IconClose,
  ButtonClose
} from './GoalNav.styled';
import sprite from 'assets/images/sprite.svg';
import { IconDown } from '../UserInfoNav/UserInfoNav.styled';

const ButtonMenu = styled(Button)({
  display: 'flex',
  gap: '12px',
  textTransform: 'none',
  padding: '0px 0px',
  borderColor: 'none',
  textShadow: 'none',
});

const ButtonList = styled(Button)({
  border: 'none',
  textTransform: 'none',
  backgroundColor: '#E3FFA8',
  marginTop: '16px',
  borderRadius: '12px',
  width: '166px',
  height: '36px',
  color: '#0F0F0F',
  fontFamily: 'Poppins500',

  '&:hover': {
    backgroundColor: '#E3FFA8',
    border: 'transparent',
  },
});

const StyledMenu = styled(Menu)({
  '& .MuiPaper-root': {
    borderRadius: 12,
    marginTop: '26px',
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
    height: '352px',
    // gap: '16px',
    padding: '20px 0px 40px 24px',
    position: 'relative'
  },
});

export const GoalNav = () => {
  const isGender = useSelector(selectUserGender);
  const userGoal = useSelector(selectUserGoal);

  let imageGoal;
  if (userGoal === "Lose Fat") {
    isGender==="male" ? imageGoal = loseFat : imageGoal = loseFat_girl
  } else if (userGoal === "Maintain"){
    isGender==="male" ? imageGoal = maintain : imageGoal = maintain_girl
  } else if (userGoal === "Gain Muscle") {
    imageGoal = gainMuscle
  };

  
  const [currentImage, setCurrentImage] = useState(imageGoal)
  const [value, setValue] = useState(userGoal);
  const [currentValue, setCurrentValue] = useState(userGoal);
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

    if (currentValue === 'Lose Fat') {
      setCurrentImage(isGender === "male" ? loseFat : loseFat_girl)

    } else if (currentValue === 'Maintain') {
      setCurrentImage(isGender === "male" ? maintain : maintain_girl)

    } else if (currentValue === 'Gain Muscle') {
      setCurrentImage(gainMuscle)
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
          <LoseFatBig src={currentImage} alt="Lose fat" />
        </DivImage>

        <DivStyled>
          <MainText>Goal</MainText>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Text>{value}</Text>

            {open ? (
              <IconDown>
                <use href={`${sprite}#icon-arrow-up`}></use>
              </IconDown>
            ) : (
              <IconDown>
                <use href={`${sprite}#icon-arrow-down`}></use>
              </IconDown>
            )}
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
        <ButtonClose
          onClick={handleClose}>
          <IconClose>
            <use href={`${sprite}#icon-close-circle`}></use>
          </IconClose>
        </ButtonClose>
      
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ margin: '0px' }}>
            <FormLabel id="demo-error-radios" sx={{ marginRight: '0px' }}>
              <MenuTitle>Target selection</MenuTitle>
              <MenuText>
                The service will adjust your calorie
                <br />
                intake to your goal
              </MenuText>

            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-error-radios"
              // defaultValue={value}
              sx={{
                gap: '16px',
                '& .MuiFormControlLabel-root .MuiFormControlLabel-label': {
                  fontFamily: 'Poppins400',
                  fontSize: '14px',
                  color: 'white.main',
                  marginLeft: '12px',
                },
              }}
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                sx={{
                  margin: '0px',
                  '& :hover.MuiTypography-root': {
                    color: '#B6C3FF',
                    fontFamily: 'Poppins500',
                  },
                  '& :hover.igoMVi': {
                    borderColor: '#B6C3FF',
                  },
                }}
                value="Lose Fat"
                control={
                  <Radio
                    sx={{
                      padding: '0px',
                      width: '40px',
                      height: '40px',
                    }}
                    icon={
                      <DivImage>
                        <LoseFat src={isGender==="male" ? loseFat : loseFat_girl} alt="Lose fat" />
                      </DivImage>
                    }
                    checkedIcon={
                      <DivImage>
                        <LoseFat src={isGender==="male" ? loseFat : loseFat_girl} alt="Lose fat" />
                      </DivImage>
                    }
                  />
                }
                label="Lose fat"
              />

              <FormControlLabel
                sx={{ margin: '0px' }}
                value="Maintain"
                control={
                  <Radio
                    sx={{
                      padding: '0px',
                    }}
                    icon={
                      <DivImage
                        className="test"
                        style={{
                          'input:hover ~ &': {
                            backgroundColor: 'red',
                          },
                        }}
                      >
                        <LoseFat src={isGender==="male" ? maintain : maintain_girl} alt="Maintain" />
                      </DivImage>
                    }
                    checkedIcon={
                      <DivImage>
                        <LoseFat src={maintain} alt="Maintain" />
                      </DivImage>
                    }
                  />
                }
                label="Maintain"
              />

              <FormControlLabel
                sx={{ margin: '0px' }}
                value="Gain Muscle"
                control={
                  <Radio
                    sx={{
                      padding: '0px',
                    }}
                    icon={
                      <DivImage>
                        <LoseFat src={gainMuscle} alt="Gain muscle" />
                      </DivImage>
                    }
                    checkedIcon={
                      <DivImage>
                        <LoseFat src={gainMuscle} alt="Gain muscle" />
                      </DivImage>
                    }
                  />
                }
                label="Gain Muscle"
              />
            </RadioGroup>

            <ButtonList type="submit" variant="outlined">
              Confirm
            </ButtonList>
          </FormControl>
        </form>
      </StyledMenu>
    </div>
  );
};
