import { useState } from 'react';
import { GoalNav } from "../GoalNav/GoalNav"
import { WeightNav } from "../WeightNav/WeightNav";
import { IconMenu, MobileMenu } from './MobileContainer.styled';
import sprite from 'assets/images/sprite.svg';

export const MobileContainer = () => {
    const [openModal, setOpenModal] = useState(false);

    const isOpenModal = () => {
        setOpenModal(!openModal)
    };

    return (
        <>
            <IconMenu onClick={isOpenModal}>
                <use href={`${sprite}#icon-menu`}></use>
            </IconMenu>
            {openModal ? (<MobileMenu >
                <GoalNav />
                <WeightNav />
            </MobileMenu>) : undefined}
        </>
    )
};