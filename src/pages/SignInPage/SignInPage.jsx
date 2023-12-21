import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import image from '../../assets/backgroundImages/welcomepage.png';
import SignInForm from '../../components/SignInForm/SignInForm';
import {
  SignInContainer,
  MainContent,
  SignUpBox,
  SignUpTitle,
  LoginMessage,
  SignUpPrompt,
  SignUpPromptText,
  SignUpLink,
  ForgotPasswordText,
  Message,
  Image,
} from './SignIn.styled';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://healthy-life-backend-b6ck.onrender.com/api/',
});

const verifyEmail = async (verifyToken, setSuccessMessage, setErrorMessage) => {
  try {
    const { data } = await instance.get(`auth/verify/${verifyToken}`);
    setSuccessMessage(`${data.message}! Use your credentials to login`);
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? `Error when verifying email: ${error.response.data.message}`
        : 'Error when verifying email: An unknown error occurred.';
    setErrorMessage(errorMessage);
  }
};

const SignIn = () => {
  const { verificationToken } = useParams();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (verificationToken) {
      verifyEmail(verificationToken, setSuccessMessage, setErrorMessage);
    }
  }, [verificationToken]);

  return (
    <SignInContainer>
      <MainContent>
        {successMessage && <Message type="success">{successMessage}</Message>}
        {errorMessage && <Message type="error">{errorMessage}</Message>}
        <Image src={image} alt="Activity trtacker" />
        <SignUpBox>
          <SignUpTitle>Sign in</SignUpTitle>
          <LoginMessage>You need to login to use the service</LoginMessage>
        </SignUpBox>
        <SignInForm />
        <Link to="/forgot-password">
          <ForgotPasswordText>Forgot your password?</ForgotPasswordText>
        </Link>
        <SignUpPrompt>
          <SignUpPromptText>If you do not have an account yet</SignUpPromptText>
          <Link to="/signup">
            <SignUpLink>Sign up</SignUpLink>
          </Link>
        </SignUpPrompt>
      </MainContent>
    </SignInContainer>
  );
};

export default SignIn;
