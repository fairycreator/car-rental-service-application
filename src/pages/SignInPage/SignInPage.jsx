import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { loginUser } from '../../redux/auth/authOperations';
import { signInSchema } from '../../schemas/signInSchema';
import validateEmail from '../../schemas/validateEmail';
import {
  Wrapper,
  Content,
  SignUpBox,
  Title,
  Subtitle,
  QuestionTrumb,
  Question,
  Image,
  NextButton,
  Input,
  WrapForm,
  ErrorDivStyled,
  ForgotPasswordText,
  LabelWrap,
  NavLinkStyled,
  Checkbox,
} from './SignIn.styled';

import image from '../../assets/backgroundImages/welcomepage.png';

const initialValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values, actions) => {
    dispatch(loginUser(values));
    actions.resetForm();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => {
        const borderEmailColor = touched.email
          ? errors.email
            ? '1px solid #e74a3b'
            : '1px solid #3cbc81'
          : '1px solid var(--primary-color-green-lite)';
        const borderPasswordColor = touched.password
          ? errors.password
            ? '1px solid #e74a3b'
            : '1px solid #3cbc81'
          : '1px solid var(--primary-color-green-lite)';

        return (
          <Form autoComplete="off">
            <WrapForm>
              <LabelWrap>
                <Input
                  $border={borderEmailColor}
                  type="text"
                  name="email"
                  validate={validateEmail}
                  placeholder="Email"
                />
              </LabelWrap>
              <ErrorDivStyled>
                {touched.email && errors.email && errors.email}
              </ErrorDivStyled>
              <LabelWrap>
                <Input
                  $border={borderPasswordColor}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                />
                <Checkbox type="checkbox" onChange={togglePasswordVisibility} />
              </LabelWrap>
              <ErrorDivStyled>
                {touched.password && errors.password && errors.password}
              </ErrorDivStyled>
              <NextButton type="submit">Sign In</NextButton>
              <Link to="/forgot-password">
                <ForgotPasswordText>Forgot your password?</ForgotPasswordText>
              </Link>
            </WrapForm>
          </Form>
        );
      }}
    </Formik>
  );
};

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
        <QuestionTrumb>
          <Question>If you do not have an account yet</Question>
          <NavLinkStyled to="/signup">Sign up</NavLinkStyled>
        </QuestionTrumb>
      </Content>
    </Wrapper>
  );
};

export default SignIn;
