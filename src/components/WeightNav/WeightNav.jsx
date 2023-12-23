import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { theme } from '../../GlobalStyle/';
import { useSelector, useDispatch } from "react-redux";
import { styled } from '@mui/material/styles';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import sprite from 'assets/images/sprite.svg';
import Weight from '../../assets/images/Weight.png';
import { DivEdit, DivImage, DivMenu, DivText, MainText, MenuDay, MenuText, MenuTitle, MenuDate, Text, TextWeight, BoxDate, ButtonSend, InputWeight, FormStyled, ButtonCancel, ButtonClose, IconClose } from './WeightNav.styled';
import { selectUserWeight } from '../../redux/auth/authSelectors';
import { updateWeight } from '../../redux/auth/authOperations';

const ButtonMenu = styled(Button)({
    textTransform: 'none',
    padding: '0px 0px',
    borderColor: 'none',
    textShadow: 'none',
    backgroundColor: 'transparent',
    minWidth: '0px',
    '&:hover': {
        backgroundColor: 'transparent',
        border: 'transparent',
    },
});

const PopoverStyled = styled(Popover)({
    transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
    '& .MuiPaper-root': {
        position: 'relative',
        width: '392px',
        height: '200px',
        borderRadius: 12,
        marginTop: '26px',
        marginLeft: '-126px',
        backgroundColor: '#0F0F0F',
        boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
        [theme.breakpoints.down('tablet')]: {
            height: '100vh',
            marginTop: '44px',
            minWidth: '100%',
            boxShadow: 'none',
            backgroundColor: '#050505',
            marginLeft: '16px',
        },
        [theme.breakpoints.only('desktop')]: {
    marginLeft: '-20px',
  },
    },
    '& .MuiTypography-root': {
        padding: '20px 24px 40px 24px',
        [theme.breakpoints.down('tablet')]: {
            width: '320px',
            padding: '24px 10px',
            margin: '0 auto',
        },
    },
});

const TextFieldStyled = styled(TextField)({
    // width: '166px',
    // height: '36px',
    // borderRadius: 12,
        
    '& .MuiInputBase-input': {
        padding: '0px 0px',
        width: '166px',
        height: '36px',
    },
    '& .MuiOutlinedInput-input': {
        borderColor: '#E3FFA8',
        borderRadius: 12,
    },
});

export const WeightNav = () => {
    const mobileVersion = useMediaQuery({ query: '(max-width:833px)' });

    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const weightUser = useSelector(selectUserWeight);
    
    const today = new Date(Date.now());
    const todayDate = (today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear());

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSend = (event) => {
        event.preventDefault();

        let weight = Number(event.currentTarget.elements.weight.value);
        dispatch(updateWeight({ weight }));

        handleClose();
    }
    
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
         
            <ButtonMenu aria-describedby={id} variant="contained" onClick={handleClick}>
                <DivMenu>
                    <DivImage>
                        <img src={Weight} alt="applause" style={{ width: '28px', height: '28px' }} />
                    </DivImage>

                    <DivText>
                        <MainText>Weight</MainText>
                        <DivEdit>
                            <TextWeight>{weightUser}</TextWeight>
                            <Text>kg</Text>
                            <svg style={{ width: '16px', height: '16px' }}>
                                <use href={`${sprite}#edit-2`}></use>
                            </svg>
                        </DivEdit>
                    </DivText>

                </DivMenu>
            </ButtonMenu>
          
            <PopoverStyled
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >

                <ButtonClose
                    onClick={handleClose}>
                    <IconClose>
                        <use href={`${sprite}#icon-close-circle`}></use>
                    </IconClose>
                </ButtonClose>
                
                <Typography component={'div'} sx={{ p: 2 }}>

                    <MenuTitle>Enter your current weight</MenuTitle>
                    <MenuText>You can record your weight once a day</MenuText>
                    <BoxDate>
                        <MenuDay>Today</MenuDay>
                        <MenuDate>{todayDate}</MenuDate>
                    </BoxDate>

                    <FormStyled onSubmit={handleSend}>
                        <InputWeight type='number' name='weight' placeholder='Enter your weight' />
                        <ButtonSend>Confirm</ButtonSend>
                         
                    </FormStyled>
                    {mobileVersion ? (<ButtonCancel>Cancel</ButtonCancel>) :
                        undefined}

                </Typography>

            </PopoverStyled>
        </div>
    );
};