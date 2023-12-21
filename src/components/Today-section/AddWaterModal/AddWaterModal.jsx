import { useState } from 'react';
import { addWater } from '../../../redux/dailyStatistics/dailyOperations';
import { useDispatch } from 'react-redux';
import {
  Backdrop,
  Modal,
  Form,
  SubmitBtn,
  Title,
  Input,
  CancelBtn,
} from './AddWaterModal.styled';

export const AddWaterModal = ({ setIsModalOpen }) => {
  const [inputValue, setInputValue] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addWater(inputValue));
  };

  return (
    <Backdrop onClick={() => setIsModalOpen(false)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Title>Add water intake</Title>
        <Form onSubmit={handleSubmit}>
          <label>
            How much water
            <Input
              name="waterIntake"
              type="number"
              placeholder="Enter milliliters"
              onChange={(e) => setInputValue(Number(e.target.value))}
              value={inputValue ? inputValue : ''}
            />
          </label>
          <SubmitBtn type="submit">Confirm</SubmitBtn>
          <CancelBtn type="button" onClick={() => setIsModalOpen(false)}>
            Cancel
          </CancelBtn>
        </Form>
      </Modal>
    </Backdrop>
  );
};
