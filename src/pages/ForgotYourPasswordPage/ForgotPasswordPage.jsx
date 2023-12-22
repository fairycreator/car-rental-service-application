import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { forgotPassword } from '../../redux/auth/authOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import image from '../../assets/backgroundImages/welcomepage.png';
import {
  Container,
  MainContent,
  Image,
  Title,
  Description,
  SubmitButton,
  Input,
  SignUpPrompt,
  SignUpPromptText,
} from './ForgotYourPassword.styled';

const EmailSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
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
    <Container>
      <MainContent>
        <Image src={image} alt="Forgot Password" />
        <Title>Forgot your password</Title>
        <Description>
          Enter your email to receive password recovery instructions
        </Description>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={EmailSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                as={Input}
                name="email"
                type="email"
                placeholder="E-mail"
              />
              <ErrorMessage name="email" component="div" />
              <SubmitButton type="submit" disabled={isSubmitting}>
                Send
              </SubmitButton>
            </Form>
          )}
        </Formik>
        <SignUpPrompt>
          <SignUpPromptText>If you do not have an account yet</SignUpPromptText>
          <Link to="/signup">Sign up</Link>
        </SignUpPrompt>
      </MainContent>
    </Container>
  );
};

export default ForgotPasswordPage;
