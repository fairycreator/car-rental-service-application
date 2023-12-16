import styled from 'styled-components';

export const SignInButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const SignInButton = styled.div`
  background-color: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);
  font-family: 'Poppins500';
  font-size: var(--main-font-size);
  text-align: center;
  padding: 12px 16px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  width: 100%;
  margin-top: 40px;

  &:hover {
    background-color: #22c55e;
  }
`;
