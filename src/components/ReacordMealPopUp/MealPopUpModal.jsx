import Modal from 'react-modal';
import { useDispatch } from 'react-redux';

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
import sprite from '../../assets/images/sprite.svg';
import { Formik, Form, FieldArray } from 'formik';
import { InputBlock, RecordInputBig } from '../ModalInput/ModalInput.styled';

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

  const initialCard = {
    name: '',
    carbogidrate: '',
    protein: '',
    fat: '',
    calories: '',
  };

  const sendProducts = (values) => {
    let arr = {
      typeFood: typefood,
      userFood: values.products.map((product) => ({
        name: product.name,
        calories: product.calories,
        nutrition: {
          carbogidrate: product.carbogidrate,
          protein: product.protein,
          fat: product.fat,
        },
      })),
    };

    dispatch(addFood(arr));
    closeModal();
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

        <Formik
          initialValues={{ products: [initialCard] }}
          onSubmit={(values) => sendProducts(values)}
        >
          {({ values }) => (
            <Form>
              <FieldArray name="products">
                {({ remove, push }) => (
                  <div>
                    {values.products.map((product, index) => (
                      <InputBlock key={index}>
                        <RecordInputBig
                          // id={`products.${dataIndex}.name`}
                          name={`products.${index}.name`}
                          placeholder="The name of the product or dish"
                          value={values.products[index].name}
                        />
                        <RecordInputBig
                          // id={`products.carbogidrate${dataIndex}`}
                          name={`products.${index}.carbogidrate`}
                          placeholder="Carbonoh."
                          value={values.products[index].carbogidrate}
                          type="number"
                          min={1}
                        />
                        <RecordInputBig
                          // id={`products.protein${dataIndex}`}
                          name={`products.${index}.protein`}
                          placeholder="Protein"
                          value={values.products[index].protein}
                          min={1}
                          type="number"
                        />
                        <RecordInputBig
                          // id={`products.fat${dataIndex}`}
                          name={`products.${index}.fat`}
                          placeholder="Fat"
                          value={values.products[index].fat}
                          min={1}
                          type="number"
                        />
                        <RecordInputBig
                          // id={`products.calories${dataIndex}`}
                          name={`products.${index}.calories`}
                          placeholder="Calories"
                          value={values.products[index].calories}
                          min={1}
                          type="number"
                        />
                        <button
                          data-set={index}
                          type="button"
                          onClick={(e) => {
                            const index = e.currentTarget.dataset.set;
                            if (values.products.length === 1) {
                              closeModal();
                            }
                            remove(index);
                          }}
                        >
                          <svg
                            style={{
                              display: 'inline-block',
                              width: '20px',
                              height: ' 20px',
                              fill: 'white',
                            }}
                          >
                            <use href={`${sprite}#trash-delete`}></use>
                          </svg>
                        </button>
                      </InputBlock>
                    ))}
                    <ButtonAdd type="button" onClick={() => push(initialCard)}>
                      <AddIcon>
                        <use href={`${sprite}#icon-add-converted`}></use>
                      </AddIcon>
                      Add more
                    </ButtonAdd>
                  </div>
                )}
              </FieldArray>
              <ButtonBlock>
                <Button type="submit">Confirm</Button>
                <CancelButton onClick={closeModal} type="button">
                  Cancel
                </CancelButton>
              </ButtonBlock>
            </Form>
          )}
        </Formik>
      </ContentBlock>
    </Modal>
  );
};
