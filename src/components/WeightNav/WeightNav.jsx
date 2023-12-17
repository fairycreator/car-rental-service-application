import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import sprite from 'assets/images/sprite.svg';
import Weight from '../../assets/images/Weight.png';
import { DivEdit, DivImage, DivMenu, DivText, MainText, MenuDay, MenuText, MenuTitle, MenuDate, Text, TextWeight, BoxDate, ButtonSend, InputWeight, FormStyled } from './WeightNav.styled';
import { ButtonClose, IconClose } from '../GoalNav/GoalNav.styled';

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
    
    '& .MuiPaper-root': {
        position: 'relative',
        width: '392px',
        height: '200px',
        borderRadius: 12,
        marginTop: '26px',
        marginLeft: '-10px',
        backgroundColor: '#0F0F0F',
        boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
    },
    '& .MuiTypography-root': {
        padding: '20px 24px 40px 24px',
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
    }
});

export const WeightNav = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                            <TextWeight>65</TextWeight>
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
                        <MenuDate>18.12.2023</MenuDate>
                    </BoxDate>

                    <FormStyled>
                        <InputWeight type='number' name='weight' placeholder='Enter your weight' />
                        <ButtonSend>Confirm</ButtonSend>
                    </FormStyled>

                </Typography>

            </PopoverStyled>
        </div>
    );
};