import SignUpForm from '../../components/SignUpForm/SignUpForm';
// import image from '../../assets/backgroundImages/welcomepage.png';
import {
  SignUpContainer,
  SignUpDiv,
  Frame,
  SignUpTitle,
  SignUpMessage,
  // Image,
} from '../../pages/SignUpPage/SignUpPage.styled';

const SignUpPage = () => {
  return (
    <SignUpContainer>
      {/* <Image src={image} alt="Activity trtacker" /> */}
      <SignUpDiv>
        <Frame>
          <SignUpTitle>Sign up</SignUpTitle>
          <SignUpMessage>You need to register to use the service</SignUpMessage>
        </Frame>
        <SignUpForm />
      </SignUpDiv>
    </SignUpContainer>
  );
};

export default SignUpPage;
