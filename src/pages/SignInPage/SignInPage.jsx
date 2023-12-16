import { Link } from 'react-router-dom';
import Illustration from '../../components/Illustartion/Illustration';
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
} from './SignIn.styled';

// /*Email verification*/
// import axios from 'axios';
// import { toast } from 'react-toastify';
// const toastError = (text) => {
//   toast.error(text, {
//     position: 'top-center',
//     autoClose: 7000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: 'dark',
//   });
// };
// const toastSuccess = (text) => {
//   toast.success(text, {
//     position: 'top-center',
//     autoClose: 7000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: 'dark',
//   });
// };

// const instance = axios.create({
//   baseURL: '',
// });

// const verifyEmail = async (verifyToken) => {
//   try {
//     const { data } = await instance.get(`auth/verify/${verifyToken}`);
//     toastSuccess(`${data.message}! Use your credentials to login`);
//   } catch (error) {
//     toastError(`Error when verifying email: ${error.response.data}`);
//   }
// };

const SignIn = () => {
  // const { verificationToken } = useParams();
  // if (verificationToken) verifyEmail(verificationToken);
  return (
    <SignInContainer>
      <MainContent>
        <Illustration $pathname={location.pathname} />
        <SignUpBox>
          <SignUpTitle>Sign up</SignUpTitle>
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
