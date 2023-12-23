import { useEffect, useState } from 'react';
import image from '../../../assets/backgroundImages/welcomepage.png';
import useInput from '../../../hooks/useInput';
// import { passwordToggle } from './utils/';
import { signUpSchema } from '../../../schemas/signUpSchema';
import { validateForm } from './utils/validateForm';
import iconeye from '../../../assets/images/icons/eye.svg';
import iconeyeoff from '../../../assets/images/icons/eye-off.svg';
import {
  Wrapper,
  Image,
  Content,
  Title,
  Subtitle,
  Form,
  Label,
  Input,
  SvgIconEye,
  NextButton,
  QuestionTrumb,
  Question,
  NavLinkStyled,
  ErrorMsg,
  IconWrapped,
} from './signUp.styled';

const SignUpForm = ({ onForm, nameValue, emailValue, passwordValue }) => {
  const name = useInput(nameValue, signUpSchema.fields.name);
  const email = useInput(emailValue, signUpSchema.fields.email);
  const password = useInput(passwordValue, signUpSchema.fields.password);

  const [showPassword, setShowPassword] = useState(false);

  const togglePassInput = () => {
    setShowPassword(!showPassword);
  };

  const [isFormValid, setIsFormValid] = useState(false);

  const getBorderColor = (touched, error) => {
    if (error) return '1px solid #e74a3b';
    if (touched) return '1px solid #3cbc81';
    return '1px solid var(--primary-color-green-lite)';
  };

  const { value: nameVal } = name;
  const { value: emailVal } = email;
  const { value: passwordVal } = password;

  useEffect(() => {
    validateForm(nameVal, emailVal, passwordVal, setIsFormValid);
  }, [nameVal, emailVal, passwordVal, setIsFormValid]);

  return (
    <Wrapper>
      <Image src={image} alt="illustration-sport-and-fitness-tracker" />
      <Content>
        <Title>Sign up</Title>
        <Subtitle>You need to register to use the service</Subtitle>

        <Form onSubmit={onForm}>
          <Label>
            <Input
              style={{ border: getBorderColor(name.touched, name.error) }}
              type="text"
              name="name"
              placeholder="Name"
              value={name.value}
              onChange={name.onChange}
              onBlur={name.onBlur}
              autoComplete="off"
            />
          </Label>
          {name.error && <ErrorMsg>{name.error}</ErrorMsg>}
          <Label>
            <Input
              style={{ border: getBorderColor(name.touched, name.error) }}
              type="email"
              name="email"
              placeholder="E-mail"
              value={email.value}
              onChange={email.onChange}
              onBlur={email.onBlur}
              autoComplete="off"
            />
          </Label>
          {email.error && <ErrorMsg>{email.error}</ErrorMsg>}
          <Label>
            <Input
              style={{ border: getBorderColor(name.touched, name.error) }}
              type="password"
              name="password"
              placeholder="Password"
              value={password.value}
              id="myInput"
              onChange={password.onChange}
              onBlur={password.onBlur}
              autoComplete="off"
            />
            <IconWrapped>
              <SvgIconEye onClick={togglePassInput}>
                <image href={showPassword ? iconeyeoff : iconeye} />
              </SvgIconEye>
            </IconWrapped>
          </Label>
          {password.error && <ErrorMsg>{password.error}</ErrorMsg>}
          <NextButton type="submit" disabled={!isFormValid}>
            Next
          </NextButton>
        </Form>
        <QuestionTrumb>
          <Question>Do you already have an account?</Question>
          <NavLinkStyled to="/signin">Sign in</NavLinkStyled>
        </QuestionTrumb>
      </Content>
    </Wrapper>
  );
};

export default SignUpForm;
