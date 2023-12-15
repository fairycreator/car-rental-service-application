import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { TextInput } from '../components/TextInput';
import { submitForgotPassword } from '../store/actions/forgotPasswordActions';
import { validationSchema } from '../utils/formValidation';
import {
  Container,
  MainContent,
  Illustration,
  Title,
  Description,
  SubmitButton,
  SignInLink,
} from '../styles/ForgotPasswordStyles';

const ForgotPasswordPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(submitForgotPassword(values.email));
  };

  return (
    <Container>
      <MainContent>
        <Illustration
          src="../assets/images/welcomepage.png"
          alt="Forgot Password Illustration"
        />
        <Title>Forgot your password</Title>
        <Description>
          We will send you an email with recovery instructions
        </Description>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput name="email" type="email" placeholder="E-mail" />
              <SubmitButton type="submit" disabled={isSubmitting}>
                Send Instructions
              </SubmitButton>
            </Form>
          )}
        </Formik>
        <SignInLink to="/signin">Sign In</SignInLink>
        <SignInLink to="/signup">Sign up</SignInLink>
      </MainContent>
    </Container>
  );
};

export default ForgotPasswordPage;
