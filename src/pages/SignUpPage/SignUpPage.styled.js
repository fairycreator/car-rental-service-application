import styled from 'styled-components';

export const SignUpContainer = styled.div`
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const SignUpDiv = styled.div`
  background-color: var(--primary-color-black-one);
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px;
`;

export const SignUpTitle = styled.div`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`;

export const SignUpMessage = styled.p`
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 18px;
  font-weight: 400;
  margin: 0;
`;

export const InputWrapper = styled.div`
  background-color: var(--primary-color-black-two);
  border: 1px solid;
  border-color: var(--primary-color-green-lite);
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 12px;
  padding: 10px 8px;
  margin-bottom: 16px;
  width: 100%;
`;

export const InputField = styled.input`
  color: var(--primary-color-grey);
  background-color: transparent;
  font-family: 'Poppins500';
  color: var(--primary-color-grey);
  font-size: var(--main-font-size);
  width: 100%;
  border: none;

  &::placeholder {
    color: var(--primary-color-grey);
  }

  &:focus {
    outline: none;
    border-color: var(--primary-color-green-lite);
  }
`;

export const NextButtonWrapper = styled.div`
  background-color: var(--primary-color-green-lite);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px 10px;
  border: none;
  width: 100%;
  cursor: pointer;
`;

export const NextButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color-black-two);
  font-family: 'Poppins400';
`;

export const AccountPromptWrapper = styled.div`
  text-align: center;
  padding-top: 16px;
`;

export const AccountPrompt = styled.p`
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  margin: 0;
`;

export const SignInLink = styled.div`
  color: var(--primary-color-white);
  font-family: 'Poppins400';
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
