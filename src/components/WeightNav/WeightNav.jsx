import { useMediaQuery } from 'react-responsive';
import { styled } from '@mui/material/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import sprite from 'assets/images/sprite.svg';
import Weight from '../../assets/images/Weight.png';
import { theme } from '../../GlobalStyle/';
import { useSelector, useDispatch } from "react-redux";
import { selectUserWeight } from '../../redux/auth/authSelectors';
import { updateWeight } from '../../redux/auth/authOperations';
import { DivEdit, DivImage, DivMenu, DivText, MainText, MenuDay, MenuText, MenuTitle, MenuDate, Text, TextWeight, BoxDate, ButtonSend, InputWeight, FormStyled, ButtonCancel, ButtonClose, IconClose, ErrorMessageStyled, FormBlock } from './WeightNav.styled';

const WeightSchema = Yup.object().shape({
    weight: Yup.number('Enter correct number')
        .positive('Weight should be positive')
        .integer('Weight should be integer')
        .min(40, 'Must be > 40 kg')
        .max(200, 'Must be < 200 kg')
        .required('Weight should be filled'),
});

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

export const WeightNav = ({ setOpenModal }) => {
    const mobileVersion = useMediaQuery({ query: '(max-width:833px)' });

    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const weightUser = useSelector(selectUserWeight);
    
    const today = new Date(Date.now());
    const todayDate = (today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear());

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

                    <Formik
                        initialValues={{ weight: '' }}
                        validationSchema={WeightSchema}
                        onSubmit={(values, actions) => {
                            dispatch(updateWeight({ weight: values.weight }))
                            actions.resetForm();
                            handleClose()
                        }}
                    >
                        <FormBlock autoComplete='off' >
                            <FormStyled>
                            <InputWeight id="weight" type="number" name="weight" placeholder="Enter your weight"/>
                            <ErrorMessageStyled name="weight" component="div" />
            
                            </FormStyled>
                            <div>
                            <ButtonSend type="submit">Confirm</ButtonSend>
                             </div>
                        </FormBlock>
                        
                    </Formik>

                    {mobileVersion ? (<ButtonCancel onClick={handleCancel} type="button">Cancel</ButtonCancel>) :
                        undefined}

                </Typography>

            </PopoverStyled>
        </div>
    );
};