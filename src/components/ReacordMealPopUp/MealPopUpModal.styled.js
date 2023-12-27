import { styled } from 'styled-components';

export const AddIcon = styled.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`;

export const ButtonAdd = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  border: none;
  background-color: var(--primary-color-black-one);
  color: var(--primary-color-green-lite);
  font-family: 'Poppins400', sans-serif;
  margin-top: 40px;
  width: 150px;
  height: 20px;

  &:hover,
  &:focus {
    color: var(secondary-color-yellow);
  }
`;
