import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import sprite from 'assets/images/sprite.svg';
import Weight from '../../assets/images/Weight.png';
import { DivEdit, DivImage, DivMenu, DivText, MainText, Text, TextWeight } from './WeightNav.styled';

const ButtonMenu = styled(Button)({
//   display: 'flex',
//   gap: '12px',
  textTransform: 'none',
  padding: '0px 0px',
  borderColor: 'none',
    textShadow: 'none',
    backgroundColor: 'transparent',
    minWidth:'0px',
   '&:hover': {
    backgroundColor: 'transparent',
    border: 'transparent',
  },
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
            <DivMenu>
                <DivImage>
                    <img src={Weight} alt="applause" style={{ width: '28px', height: '28px' }} />
                </DivImage>

                <DivText>
                    <MainText>Weight</MainText>
                    <DivEdit>
                        <TextWeight>65</TextWeight>
                        <Text>kg</Text>
                        <ButtonMenu aria-describedby={id} variant="contained" onClick={handleClick}>
                            <svg style={{ width: '16px', height: '16px' }}>
                                <use href={`${sprite}#edit-2`}></use>
                            </svg>
                        </ButtonMenu>
                    </DivEdit>
                </DivText>

            </DivMenu>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }}>

                    <p>Enter your current weight</p>
                    <p>You can record your weight once a day</p>
                    <h3>Today</h3>
                    <p>17.12.2023</p>

                    <Stack direction="row" spacing={2}>
                        <TextField id="outlined-basic" label="Enter your weight" variant="outlined" />
                        <Button variant="contained" type='submit' onClick={handleClose}>
                            Confirm
                        </Button>
                    </Stack>
                    
                </Typography>
            </Popover>
        </div>
    );
};