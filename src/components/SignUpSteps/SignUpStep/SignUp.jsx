import image from '../../../assets/backgroundImages/welcomepage.png';
import useInput from '../../../hooks/useInput';
import { passwordToggle } from './passwordToggle';
import {
  Wrapper,
  Image,
  Content,
  Title,
  Subtitle,
  Form,
  Label,
  Input,
  Checkbox,
  NextButton,
  QuestionTrumb,
  Question,
  NavLinkStyled,
} from './signUp.styled';

const SignUpForm = ({ onForm, nameValue, emailValue, passwordValue }) => {
  const name = useInput(nameValue, { isEmpty: true, isName: true });
  const email = useInput(emailValue, { isEmpty: true, isEmail: true });
  const password = useInput(passwordValue, { isEmpty: true, isPassword: true });

  return (
    <Wrapper>
      <Image src={image} alt="illustration-sport-and-fitness-tracker" />
      <Content>
        <Title>Sign up</Title>
        <Subtitle>You need to register to use the service</Subtitle>

        <Form onSubmit={onForm}>
          <Label>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={name.value}
              onChange={(e) => name.onChange(e)}
              onBlur={(e) => name.onBlur(e)}
              autoComplete="off"
            />
            {/* {messageErrorName(name, 'Not valid name')} */}
          </Label>
          <Label>
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              value={email.value}
              onChange={(e) => email.onChange(e)}
              onBlur={(e) => email.onBlur(e)}
              autoComplete="off"
            />
            {/* {messageErrorEmail(email, 'Not valid e-mail')} */}
          </Label>
          <Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={password.value}
              id="myInput"
              onChange={(e) => password.onChange(e)}
              onBlur={(e) => password.onBlur(e)}
              autoComplete="off"
            />
            {/* {messageErrorPassword(
              password,
              'Enter a valid Password',
              'Password is secure'
            )} */}
            <Checkbox type="checkbox" onChange={passwordToggle} />
          </Label>
          <NextButton
            type="submit"
            // disabled={
            //   !name.inputValid || !password.inputValid || !email.inputValid
            // }
          >
            Next
          </NextButton>
        </Form>
        <QuestionTrumb>
          <Question> Do you already have an account?</Question>
          <NavLinkStyled to="/signin">Sign in</NavLinkStyled>
        </QuestionTrumb>
      </Content>
    </Wrapper>
  );
};

export default SignUpForm;
