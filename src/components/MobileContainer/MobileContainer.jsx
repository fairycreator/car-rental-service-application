import { useState, useEffect } from 'react';
import { GoalNav } from "../GoalNav/GoalNav"
import { WeightNav } from "../WeightNav/WeightNav";
import sprite from 'assets/images/sprite.svg';
import { IconClose, IconMenu, MobileMenu, ButtonClose, DivLogo, Backdrop } from './MobileContainer.styled';

export const MobileContainer = () => {
    const [openModal, setOpenModal] = useState(false);

    const isOpenModal = () => {
        setOpenModal(!openModal);
    };

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.code === 'Escape') {
                setOpenModal(false);
            }
        };

        if (openModal) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        } else document.body.style.overflow = 'unset';

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [openModal, setOpenModal]);

    return (
        <>
            <DivLogo>
                <IconMenu onClick={isOpenModal}>
                    <use href={`${sprite}#icon-menu`}></use>
                </IconMenu>
            </DivLogo>

            {openModal ? (
                <Backdrop onClick={isOpenModal}>
                    <MobileMenu onClick={(e) => e.stopPropagation()}>
                        <ButtonClose
                            onClick={isOpenModal}>
                            <IconClose>
                                <use href={`${sprite}#icon-close-circle`}></use>
                            </IconClose>
                        </ButtonClose>
                        <GoalNav setOpenModal={setOpenModal} />
                        <WeightNav setOpenModal={setOpenModal} />
                    </MobileMenu>
                </Backdrop>
            ) : undefined}
        </>
    );
};