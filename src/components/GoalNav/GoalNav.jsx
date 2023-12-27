import { useMediaQuery } from 'react-responsive';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { theme } from '../../GlobalStyle/';
import { selectUserGender, selectUserGoal } from '../../redux/auth/authSelectors';
import loseFat from '../../assets/images/loseFat.png';
import maintain from '../../assets/images/maintain.png';
import loseFat_girl from '../../assets/images/loseFat_girl.png';
import maintain_girl from '../../assets/images/maintain_girl.png';
import gainMuscle from '../../assets/images/gainMuscle.png';
import sprite from 'assets/images/sprite.svg';
import { updateGoal } from '../../redux/auth/authOperations';
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
  IconDown,
  ButtonClose,
  IconRight,
  ButtonCancel,
  Form
} from './GoalNav.styled';

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
    backgroundColor: '#FFF3B7',
    border: 'transparent',
  },
  [theme.breakpoints.down('tablet')]: {
    width: '300px',
  },
});

const StyledMenu = styled(Menu)({
  '& .MuiPaper-root': {
    borderRadius: 12,
    marginTop: '26px',
    backgroundColor: '#0F0F0F',
    boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
    [theme.breakpoints.down('tablet')]: {
      maxHeight: '100%',
      height: '100vh',
      marginTop: '60px',
      maxWidth: '100vw',
      boxShadow: 'none',
      backgroundColor: '#050505',
      position: 'static',
    },
  },
  '& .MuiList-root': {
    width: '392px',
    height: '352px',
    padding: '20px 0px 40px 24px',
    position: 'relative',
    [theme.breakpoints.down('tablet')]: {
      width: '320px',
      padding: '0px 0px',
      margin: '0 auto',
    },
  },
});

export const GoalNav = ({ setOpenModal }) => {
  const mobileVersion = useMediaQuery({ query: '(max-width:833px)' });
  const dispatch = useDispatch();
  const isGender = useSelector(selectUserGender);
  const userGoal = useSelector(selectUserGoal);

  let imageGoal;
  if (userGoal === "Lose Fat") {
    isGender === "male" ? imageGoal = loseFat : imageGoal = loseFat_girl;
  } else if (userGoal === "Maintain") {
    isGender === "male" ? imageGoal = maintain : imageGoal = maintain_girl;
  } else if (userGoal === "Gain Muscle") {
    imageGoal = gainMuscle;
  };

  const [currentImage, setCurrentImage] = useState(imageGoal);
  const [value, setValue] = useState(userGoal);
  const [currentValue, setCurrentValue] = useState(userGoal);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleCancel = () => {
    setAnchorEl(null);
    setOpenModal(false)
  };

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
      setCurrentImage(isGender === "male" ? loseFat : loseFat_girl);

    } else if (currentValue === 'Maintain') {
      setCurrentImage(isGender === "male" ? maintain : maintain_girl);

    } else if (currentValue === 'Gain Muscle') {
      setCurrentImage(gainMuscle);
    }
    setValue(currentValue);
    dispatch(updateGoal({ goal: currentValue }));
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

            {mobileVersion ? (<IconRight>
              <use href={`${sprite}#icon-arrowright`}></use>
            </IconRight>) :
              (open ? (
                <IconDown>
                  <use href={`${sprite}#icon-arrow-up`}></use>
                </IconDown>
              ) : (
                <IconDown>
                  <use href={`${sprite}#icon-arrow-down`}></use>
                </IconDown>
              ))}
            
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
        marginThreshold={0}
      >
        <ButtonClose
          onClick={handleClose}>
          <IconClose>
            <use href={`${sprite}#icon-close-circle`}></use>
          </IconClose>
        </ButtonClose>
      
        <Form onSubmit={handleSubmit}>
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
              sx={{
                gap: '16px',
                '& .MuiFormControlLabel-root .MuiFormControlLabel-label': {
                  fontFamily: 'Poppins400',
                  fontSize: '14px',
                  color: 'white.main',
                  marginLeft: '12px',
                },
                '& :hover.MuiTypography-root': {
                  color: '#B6C3FF',
                  fontFamily: 'Poppins500',
                }
              }}
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel sx={{ margin: '0px' }}
                value="Lose Fat"
                control={
                  <Radio
                    sx={{ padding: '0px' }}
                    icon={
                      <DivImage>
                        <LoseFat src={isGender === "male" ? loseFat : loseFat_girl} alt="Lose fat" />
                      </DivImage>
                    }
                    checkedIcon={
                      <DivImage>
                        <LoseFat src={isGender === "male" ? loseFat : loseFat_girl} alt="Lose fat" />
                      </DivImage>
                    }
                  />
                }
                label="Lose Fat"
              />

              <FormControlLabel
                sx={{ margin: '0px' }}
                value="Maintain"
                control={
                  <Radio sx={{ padding: '0px' }}
                    icon={
                      <DivImage>
                        <LoseFat src={isGender === "male" ? maintain : maintain_girl} alt="Maintain" />
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
                    sx={{ padding: '0px' }}
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
            {mobileVersion ? (<ButtonCancel onClick={handleCancel} type="button">Cancel</ButtonCancel>) :
              undefined}
          </FormControl>
        </Form>
          
      </StyledMenu>
    </div>
  );
};