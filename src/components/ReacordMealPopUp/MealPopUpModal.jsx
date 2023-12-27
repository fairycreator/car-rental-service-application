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
import {
  addInputHandler,
  deleteInputHandler,
} from '../../redux/dailyFoodStatistics/foodSlice';
import { Formik, Form } from 'formik';

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

  // const [name, setName] = useState('');
  // const [calories, setColories] = useState('');
  // const [carbogidrate, setCarbogidrate] = useState('');
  // const [protein, setProtein] = useState('');
  // const [fat, setFat] = useState('');

  let inputCounter = useSelector(selectInputCounter);

  const arr = {
    typeFood: typefood,
    userFood: [
      // {
      //   name,
      //   calories,
      //   nutrition: { carbogidrate, protein, fat },
      // },
    ],
  };

  const handleAddMore = () => {
    const index = inputCounter.length - 1;
    const counter = inputCounter[index] + 1;
    dispatch(addInputHandler(counter));
  };

  const handleDeleteInput = (e, resetForm) => {
    const index = e.currentTarget.dataset.set;
    if (index === '0') {
      resetForm();
      return;
    }
    dispatch(deleteInputHandler(index));
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
        {inputCounter.map((item, i) => {
          return (
            <Formik
              key={i}
              initialValues={{
                name: '',
                carbogidrate: '',
                protein: '',
                fat: '',
                calories: '',
                productId: '',
              }}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                dispatch(addFood(arr));
                closeModal();
                resetForm();
              }}
            >
              {({ resetForm }) => {
                return (
                  <Form>
                    <ModalInput
                      dataIndex={i}
                      handleDeleteInput={handleDeleteInput}
                      resetForm={resetForm}
                    />
                    <ButtonBlock>
                      <Button type="submit">Confirm</Button>
                      <CancelButton onClick={closeModal} type="button">
                        Cancel
                      </CancelButton>
                    </ButtonBlock>
                  </Form>
                );
              }}
            </Formik>
          );
        })}
        <ButtonAdd onClick={handleAddMore} type="button">
          <AddIcon>
            <use href={`${sprite}#icon-add-converted`}></use>
          </AddIcon>
          Add more
        </ButtonAdd>
      </ContentBlock>
    </Modal>
  );
};
