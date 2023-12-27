import Modal from 'react-modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  MealContainer,
  MealImage,
  MealTitle,
} from '../Diary-planner/PlannerCard/PlannerCard.styled';
import {
  Button,
  ButtonBlock,
  ContentBlock,
  Title,
  CancelButton,
} from './Reacord.styled';
import { addFood } from '../../redux/dailyFoodStatistics/foodOperations';
import { AddIcon, ButtonAdd } from './MealPopUpModal.styled';
import { ModalInput } from '../ModalInput/ModalInput';
import sprite from '../../assets/images/sprite.svg';
import { selectInputCounter } from '../../redux/dailyFoodStatistics/foodSelectors';
import { addInputHandler } from '../../redux/dailyFoodStatistics/foodSlice';

const customStyles = {
  content: {
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
    width: '100vw',
    height: '100vh',
  },
};

Modal.setAppElement('#root');

export const MealPopUpModal = ({ stateModal, closeModal, typefood }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [calories, setColories] = useState('');
  const [carbogidrate, setCarbogidrate] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');

  let inputCounter = useSelector(selectInputCounter);

  const arr = {
    typeFood: typefood,
    userFood: [
      {
        name,
        calories,
        nutrition: { carbogidrate, protein, fat },
      },
    ],
  };

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(addFood(arr));
    closeModal();
  };

  const handleAddMore = () => {
    const index = inputCounter.length - 1;
    const counter = inputCounter[index] + 1;
    dispatch(addInputHandler(counter));
  };

  return (
    <Modal isOpen={stateModal} onRequestClose={closeModal} style={customStyles}>
      <ContentBlock>
        <Title>Record your meal</Title>
        <MealContainer
          style={{
            // justifyContent: 'baseline',
            marginTop: '24px',
          }}
        >
          <MealImage src="src/assets/images/Breakfast.png" />
          <MealTitle>
            {/* {secondType === undefined ? secondType : type} */}
          </MealTitle>
        </MealContainer>
        <form onSubmit={formHandler}>
          {inputCounter.map((item, index) => {
            return (
              <ModalInput
                key={index}
                dataIndex={index}
                setName={setName}
                setColories={setColories}
                setCarbogidrate={setCarbogidrate}
                setProtein={setProtein}
                setFat={setFat}
                name={name}
                calories={calories}
                carbogidrate={carbogidrate}
                protein={protein}
                fat={fat}
              />
            );
          })}

          <ButtonAdd onClick={handleAddMore} type="button">
            <AddIcon>
              <use href={`${sprite}#icon-add-converted`}></use>
            </AddIcon>
            Add more
          </ButtonAdd>

          <ButtonBlock>
            <Button type="submit">Confirm</Button>
            <CancelButton onClick={closeModal} type="button">
              Cancel
            </CancelButton>
          </ButtonBlock>
        </form>
      </ContentBlock>
    </Modal>
  );
};
