import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { loginUser } from '../../redux/auth/authOperations';
import signInSchema from '../../schemas/signInSchema';
import sprite from '../../assets/images/sprite.svg';
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
  SvgIconEye,
  ForgotPasswordText,
  // SvgIconCheckBox,
  // WrapperError,
  LabelWrap,
  // IconWrapped,
  NavLinkStyled,
} from './SignIn.styled';

import image from '../../assets/backgroundImages/welcomepage.png';

const initialValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [toggleIcon, setToggleIcon] = useState(`${sprite}#icon-eye-off`);
  const [type, setType] = useState('password');
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(loginUser(values));
    actions.setSubmitting(false);
    actions.resetForm();
  };

  const togglePassInput = () => {
    setType((prevType) => (prevType === 'password' ? 'text' : 'password'));
    setToggleIcon((prevIcon) =>
      prevIcon === `${sprite}#icon-eye-off`
        ? `${sprite}#icon-eye`
        : `${sprite}#icon-eye-off`
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
          <WrapForm>
            <LabelWrap>
              <Input type="email" name="email" placeholder="Email" />
              <ErrorDivStyled>
                {touched.email && errors.email && errors.email}
              </ErrorDivStyled>
            </LabelWrap>
            <LabelWrap>
              <Input type={type} name="password" placeholder="Password" />
              {/* <IconWrapped onClick={togglePassInput}>
                <SvgIconEye>
                  <use xlinkHref={toggleIcon} />
                </SvgIconEye>
              </IconWrapped> */}
              <ErrorDivStyled>
                {touched.password && errors.password && errors.password}
              </ErrorDivStyled>
            </LabelWrap>
            <NextButton type="submit">Sign In</NextButton>
            <Link to="/forgot-password">
              <ForgotPasswordText>Forgot your password?</ForgotPasswordText>
            </Link>
          </WrapForm>
        </Form>
      )}
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
