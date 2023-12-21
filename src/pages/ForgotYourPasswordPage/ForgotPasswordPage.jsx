import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import validateEmail from '../../schemas/validateEmail';
import image from '../../assets/backgroundImages/welcomepage.png';
import {
  Container,
  MainContent,
  Image,
  Title,
  Description,
  SubmitButton,
  Link,
  Input,
  SignUpPrompt,
  SignUpPromptText,
} from './ForgotYorPassword.styled';

const ForgotPasswordPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(console.log(values.email));
  };

  return (
    <Container>
      <MainContent>
        <Image src={image} alt="Activity trtacker" />
        <Title>Forgot your password</Title>
        <Description>
          We will send you an email with recovery instructions
        </Description>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={validateEmail}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Input name="email" type="email" placeholder="E-mail" />
              <SubmitButton type="submit" disabled={isSubmitting}>
                Sign In
              </SubmitButton>
            </Form>
          )}
        </Formik>
        <SignUpPrompt>
          <SignUpPromptText>If you do not have an account yet</SignUpPromptText>
          <Link to="/signup">
            <Link>Sign up</Link>
          </Link>
        </SignUpPrompt>
      </MainContent>
    </Container>
  );
};

export default ForgotPasswordPage;
