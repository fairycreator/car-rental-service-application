import { useState } from 'react';
import { Field } from 'formik';
import { Link } from 'react-router-dom';
import sprite from '../../assets/images/sprite.svg';
import {
  WrapForm,
  LabelWrap,
  IconWrapped,
  SvgIconEye,
  InputStyled,
  NextButton,
  SignUpLink,
  SignUpPrompt,
  SignUpPromptText,
} from './SignUpForm.styled';

const SignUpForm = ({ nextStep, isSubmitting }) => {
  const [visible, setVisible] = useState(false);

  return (
    <WrapForm>
      <Field as={InputStyled} name="name" type="text" placeholder="Name" />
      <Field as={InputStyled} name="email" type="email" placeholder="E-mail" />
      <LabelWrap>
        <Field
          as={InputStyled}
          id="password"
          name="password"
          type={visible ? 'text' : 'password'}
          placeholder="Password"
        />
        <IconWrapped onClick={() => setVisible(!visible)}>
          <SvgIconEye>
            <use href={`${sprite}#${visible ? 'icon-eye' : 'icon-eye-off'}`} />
          </SvgIconEye>
        </IconWrapped>
      </LabelWrap>
      <NextButton type="submit" onClick={nextStep} disabled={isSubmitting}>
        Next
      </NextButton>
      <SignUpPrompt>
        <SignUpPromptText>Do you already have an account?</SignUpPromptText>
        <Link to="/signin">
          <SignUpLink>Sign in</SignUpLink>
        </Link>
      </SignUpPrompt>
    </WrapForm>
  );
};

export default SignUpForm;
