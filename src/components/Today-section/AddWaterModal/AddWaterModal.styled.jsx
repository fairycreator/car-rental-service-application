import styled from 'styled-components';

export const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const Modal = styled.div`
  width: 300px;
  height: 266px;
  padding: 16px 12px 24px;
  border-radius: 12px;
  background-color: var(--primary-color-black-two);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SubmitBtn = styled.button`
  margin-top: 32px;
  padding: 8px 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  background-color: var(--primary-color-green-lite);
  border-color: transparent;
  border-radius: 12px;
  color: var(--primary-color-black-two);
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 12px;
  padding: 8px 10px;
  border: 1px solid var(--primary-color-green-lite);
  border-radius: 12px;
  background-color: transparent;
  color: var(--primary-color-white);

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    color: var(--primary-color-grey);
  }
`;

export const CancelBtn = styled.button`
  margin-top: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
  background-color: transparent;
  border: none;
`;
