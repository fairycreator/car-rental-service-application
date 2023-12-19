import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import MenuItem from '@mui/material/MenuItem';
import sprite from 'assets/images/sprite.svg';
import { IconSetting, IconLogout, Link, IconDown, AvatarName, Container } from './UserInfoNav.styled';

const ButtonMenu = styled(Button)({
    display: 'flex',
    gap: '4px',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: '100%',
    padding: '0px 0px',
    lineHeight: 1.5,
    backgroundColor: 'none',
    borderColor: 'none',
});

const StyledMenu = styled(Menu)({
    '& .MuiPaper-root': {
        borderRadius: 12,
        marginTop: '16px',
        backgroundColor: '#0F0F0F',
        boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
    },
    '& .MuiMenuItem-root': {
        padding: '0px',
        gap: '8px',
        minHeight: 'auto',
    },
    '& .MuiList-root': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '158px',
        height: '112px',
        gap: '24px',
        padding: '24px',
    },
});

export const UserInfoNav = () => {
    
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Container >
            <ButtonMenu
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <AvatarName>Username</AvatarName>
                <Avatar
                    alt="User Name"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 24, height: 24 }}
                />
                {open ? <IconDown>
                    <use href={`${sprite}#icon-arrow-up`}></use>
                </IconDown> : <IconDown>
                    <use href={`${sprite}#icon-arrow-down`}></use>
                </IconDown>}
                
            </ButtonMenu>
                
            <StyledMenu
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                
                id="fade-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>
                    <IconSetting>
                        <use href={`${sprite}#icon-setting-2`}></use>
                    </IconSetting>
                    <Link to='/settings'>Setting</Link></MenuItem>
                <MenuItem onClick={handleClose}>
                    <IconLogout>
                        <use href={`${sprite}#icon-logout`}></use>
                    </IconLogout>
                    <Link>Log out</Link></MenuItem>
            </StyledMenu>
        </Container>
    );
};



