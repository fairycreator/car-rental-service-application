import { useState } from 'react';
import { GoalNav } from "../GoalNav/GoalNav"
import { WeightNav } from "../WeightNav/WeightNav";
import { IconClose, IconMenu, MobileMenu, ButtonClose, DivLogo } from './MobileContainer.styled';
import sprite from 'assets/images/sprite.svg';

export const MobileContainer = () => {
    const [openModal, setOpenModal] = useState(false);

    const isOpenModal = () => {
        setOpenModal(!openModal);
    };

    return (
        <>
            <DivLogo>
                <IconMenu onClick={isOpenModal}>
                    <use href={`${sprite}#icon-menu`}></use>
                </IconMenu>
            </DivLogo>

            {openModal ? (<MobileMenu>
                <ButtonClose
                    onClick={isOpenModal}>
                    <IconClose>
                        <use href={`${sprite}#icon-close-circle`}></use>
                    </IconClose>
                </ButtonClose>
                <GoalNav setOpenModal={setOpenModal} />
                <WeightNav setOpenModal={setOpenModal}/>
            </MobileMenu>) : undefined}
        </>
    )
};