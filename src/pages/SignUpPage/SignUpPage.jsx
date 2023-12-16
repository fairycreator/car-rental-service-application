import { Link } from 'react-router-dom';
import Illustration from '../../components/Illustartion/Illustration';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import {
  SignUpContainer,
  SignUpDiv,
  Frame,
  SignUpTitle,
  SignUpMessage,
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
        <Frame>
          <SignUpTitle>Sign up</SignUpTitle>
          <SignUpMessage>You need to register to use the service</SignUpMessage>
        </Frame>
        <SignUpForm />
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
