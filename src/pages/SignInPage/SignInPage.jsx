import { Link } from 'react-router-dom';
import {
  Wrapper,
  Content,
  SignUpBox,
  Title,
  Subtitle,
  QuestionTrumb,
  Question,
  Image,
  ForgotPasswordText,
  NavLinkStyled,
} from './SignIn.styled';
import SignInForm from '../../components/SignInForm/SignInForm';

import image from '../../assets/backgroundImages/welcomepage.png';

const SignIn = () => {
  return (
    <Wrapper>
      <Image src={image} alt="Activity tracker" />
      <Content>
        <SignUpBox>
          <Title>Sign in</Title>
          <Subtitle>You need to login to use the service</Subtitle>
        </SignUpBox>
        <SignInForm />
        <Link to="/forgot-password">
          <ForgotPasswordText>Forgot your password?</ForgotPasswordText>
        </Link>
        <QuestionTrumb>
          <Question>If you do not have an account yet</Question>
          <NavLinkStyled to="/signup">Sign up</NavLinkStyled>
        </QuestionTrumb>
      </Content>
    </Wrapper>
  );
};

export default SignIn;
