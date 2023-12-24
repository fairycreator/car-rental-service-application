import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { forgotPassword } from '../../redux/auth/authOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import image from '../../assets/backgroundImages/welcomepage.png';
import {
  MainContent,
  Image,
  Title,
  Description,
  SubmitButton,
  FieldStyled,
  SignUpPrompt,
  SignUpPromptText,
  ContentWrapper,
  FormStyled,
  SubWrapper,
  LinkStyled,
  ErrorMessageStyled,
} from './ForgotYourPassword.styled';

const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .trim('Cannot include leading and trailing spaces')
    .email('Invalid email')
    .required('Required'),
});

const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(forgotPassword({ email: values.email }));
      Notify.success('A password reset link has been sent to your email.');
      navigate('/signin');
    } catch (error) {
      Notify.failure('Failed to send password reset link. Please try again.');
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <MainContent>
      <Image src={image} alt="Forgot Password" />
      <ContentWrapper>
        <Title>Forgot your password</Title>
        <Description>
          We will send you an email with recovery instructions
        </Description>
        <SubWrapper>
          <Formik
            initialValues={{ email: '' }}
            validationSchema={EmailSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => {
              const borderEmailColor = touched.email
                ? errors.email
                  ? '1px solid #e74a3b'
                  : '1px solid #3cbc81'
                : '1px solid var(--primary-color-green-lite)';

              return (
                <FormStyled>
                  <FieldStyled
                    border={borderEmailColor}
                    name="email"
                    type="email"
                    placeholder="E-mail"
                  />
                  <ErrorMessageStyled name="email" component="div" />
                  <SubmitButton type="submit" disabled={isSubmitting}>
                    Send
                  </SubmitButton>
                </FormStyled>
              );
            }}
          </Formik>
          <SignUpPrompt>
            <SignUpPromptText>Do you already have an account?</SignUpPromptText>
            <LinkStyled to="/signin">Sign in</LinkStyled>
          </SignUpPrompt>
        </SubWrapper>
      </ContentWrapper>
    </MainContent>
  );
};

export default ForgotPasswordPage;
