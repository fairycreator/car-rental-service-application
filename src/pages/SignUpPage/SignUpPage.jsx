import { Link } from 'react-router-dom';
import Illustration from '../../components/Illustartion/Illustration';
import {
  SignUpContainer,
  SignUpDiv,
  Frame2,
  SignUpTitle,
  SignUpMessage,
  InputWrapper,
  InputField,
  NextButtonWrapper,
  NextButton,
  AccountPromptWrapper,
  AccountPrompt,
  SignInLink,
} from './SignUpPage.styled';

const SignUpPage = () => {
  return (
    <SignUpContainer>
      <SignUpDiv>
        <Illustration $pathname={location.pathname} />
        <Frame2>
          <SignUpTitle>Sign up</SignUpTitle>
          <SignUpMessage>You need to register to use the service</SignUpMessage>
        </Frame2>
        <InputWrapper>
          <InputField type="text" placeholder="Name" />
        </InputWrapper>
        <InputWrapper>
          <InputField type="text" placeholder="E-mail" />
        </InputWrapper>
        <InputWrapper>
          <InputField type="password" placeholder="Password" />
        </InputWrapper>
        <NextButtonWrapper>
          <NextButton>Next</NextButton>
        </NextButtonWrapper>
        <AccountPromptWrapper>
          <AccountPrompt>Do you already have an account?</AccountPrompt>
          <Link to="/signin">
            <SignInLink>Sign in</SignInLink>
          </Link>
        </AccountPromptWrapper>
      </SignUpDiv>
    </SignUpContainer>
  );
};

export default SignUpPage;
