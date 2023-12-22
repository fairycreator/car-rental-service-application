import { useState } from 'react';
import {
  Backdrop,
  Modal,
  Form,
  SubmitBtn,
  Title,
  Input,
  CancelBtn,
} from './AddWaterModal.styled';
// import { addWater } from '../../../redux/dailyStatistics/dailyOperations';
// import { useDispatch } from 'react-redux';

export const AddWaterModal = ({ setIsModalOpen }) => {
  const [inputValue, setInputValue] = useState(0);
  // const dispatch = useDispatch();

  // const handleSubmit = (water) => {
  //   dispatch(addWater(water));
  // };

  return (
    <Backdrop onClick={() => setIsModalOpen(false)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Title>Add water intake</Title>
        <Form
        // onSubmit={(e, actions) => {
        //   dispatch(addWater(inputValue));
        //   actions.resetForm();
        //   e.preventDefault();
        // }}
        >
          <label>
            How much water
            <Input
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
