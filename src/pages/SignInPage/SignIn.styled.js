import styled, { css } from 'styled-components';

export const SignInContainer = styled.div`
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;
`;

export const MainContent = styled.main`
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SignUpBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;

export const SignUpTitle = styled.h1`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 16px;
  margin: 0;
`;

export const LoginMessage = styled.p`
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 18px;
  margin-bottom: 24px;
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

export const SignUpPrompt = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;

export const SignUpPromptText = styled.div`
  color: var(--primary-color-grey);
  font-family: 'Poppins500';
`;

export const SignUpLink = styled.div`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ForgotPasswordText = styled.div`
  color: var(--primary-color-grey);
  font-family: 'Poppins500';
  cursor: pointer;
  margin-top: 14px;
  margin-bottom: 54px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Image = styled.img`
  height: 296px;
  width: 300px;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: transparent;
`;

export const Message = styled.div`
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  ${(props) =>
    props.type === 'success' &&
    css`
      background-color: #28a745; // Green for success
      border: 1px solid #1e7e34;
    `}

  ${(props) =>
    props.type === 'error' &&
    css`
      background-color: #dc3545; // Red for error
      border: 1px solid #c82333;
    `}
`;
