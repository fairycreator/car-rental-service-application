import { useState } from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import signUpSchema from '../../schemas/signUpSchema';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import {
  WrapForm,
  WrapperError,
  LabelWrap,
  IconWrapped,
  SvgIconEye,
  InputStyled,
  NextButton,
  BackButton,
  SignInButton,
  AccountPromptWrapper,
  AccountPrompt,
} from './SignUpForm.styled';
import sprite from '../../assets/images/sprite.svg';
import GoalSelectionStep from '../SignUpSteps/SignUpYourGoal';
import SelectGender from '../SignUpSteps/SignUpGender';
import BodyParametersStep from '../SignUpSteps/SignUpBodyParams';
import ActivityLevelStep from '../SignUpSteps/SignUpActivity';

const initialValues = {
  name: '',
  email: '',
  password: '',
  goal: '',
  gender: '',
  age: '',
  height: '',
  weight: '',
  activityLevel: '',
};

const SignUpForm = () => {
  const [step, setStep] = useState(1);
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    dispatch(registerUser(values));
    actions.resetForm();
    navigate('/main');
  };

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const nextStep = () => setStep(step + 1);
  const previousStep = () => setStep(step - 1);

  const StepOne = () => (
    <WrapForm>
      <InputStyled name="name" type="text" placeholder="Name" />
      <InputStyled name="email" type="email" placeholder="E-mail" />
      <LabelWrap>
        <InputStyled
          name="password"
          type={passwordShown ? 'text' : 'password'}
          placeholder="Password"
        />
        <IconWrapped onClick={togglePasswordVisibility}>
          <SvgIconEye>
            <use
              href={
                passwordShown ? `${sprite}#icon-eye` : `${sprite}#icon-eye-off`
              }
            />
          </SvgIconEye>
        </IconWrapped>
      </LabelWrap>
      <WrapperError>{/* Error message handling here */}</WrapperError>
      <NextButton type="button" onClick={nextStep}>
        Next
      </NextButton>
      <AccountPromptWrapper>
        <AccountPrompt>Do you already have an account?</AccountPrompt>
        <Link to="/signin">
          <SignInButton>Sign in</SignInButton>
        </Link>
      </AccountPromptWrapper>
    </WrapForm>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <GoalSelectionStep />;
      case 3:
        return <SelectGender />;
      case 4:
        return <BodyParametersStep />;
      case 5:
        return <ActivityLevelStep />;
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, values, handleChange, handleBlur }) => (
        <Form autoComplete="off">
          {renderStep(errors, touched, values, handleChange, handleBlur)}
          {step > 1 && (
            <BackButton type="button" onClick={previousStep}>
              Back
            </BackButton>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
