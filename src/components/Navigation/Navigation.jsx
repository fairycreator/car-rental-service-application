import sprite from 'assets/images/sprite.svg';
import { BoxNav, Icon, Link } from "./Navigation.styled";

export const Navigation = () => {
    return (
        <BoxNav>
            <Link to='/signin'>Sign in</Link>
            <span>/</span>
            <Link to='/signup'>Sign up</Link>
            <Icon>
                <use href={`${sprite}#icon-profile-circle`}></use>
          </Icon>
        </BoxNav>
    )
};