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

export const AddWaterModal = ({ setIsModalOpen }) => {
  const [inputValue, setInputValue] = useState(0);

  return (
    <Backdrop onClick={() => setIsModalOpen(false)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Title>Add water intake</Title>
        <Form>
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
