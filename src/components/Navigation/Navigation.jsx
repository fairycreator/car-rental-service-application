import { BoxNav, Icon, Link } from "./Navigation.styled";

export const Navigation = () => {
    return (
        <BoxNav>
            <Link to='/signin'>Sign in</Link>
            <span>/</span>
            <Link to='/signup'>Sign up</Link>
            <Icon>
                <use href='./src/assets/images/sprite.svg#icon-profile-circle'></use>
          </Icon>
        </BoxNav>
    )
};