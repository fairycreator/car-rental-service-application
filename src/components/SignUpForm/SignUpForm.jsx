import { useState } from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import signUpSchema from '../../schemas/signUpSchema';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import {
  WrapForm,
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
import {
  setCurrentStep,
  updateFormData,
  submitFormData,
} from '../../redux/signUp/signUpActions';

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
  avatar: '',
};

const SignUpForm = () => {
  const { step, formData } = useSelector((state) => state.signUp);
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

  const handleNextStep = (newData) => {
    dispatch(updateFormData(newData));
    dispatch(setCurrentStep(step + 1));
  };

  const handlePrevStep = () => {
    dispatch(setCurrentStep(step - 1));
  };

  const handleFinalSubmit = () => {
    dispatch(submitFormData(formData));
  };

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
      {/* <ErrorDivStyled color={!errors.email && touched.email ? '#3cbc81' : null}>
        {errors.email ? errors.email : 'Success email'}
      </ErrorDivStyled> */}
      <NextButton type="button" onClick={handleNextStep}>
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
        return <StepOne nextStep={handleNextStep} />;
      case 2:
        return (
          <GoalSelectionStep
            nextStep={handleNextStep}
            prevStep={handlePrevStep}
          />
        );
      case 3:
        return (
          <SelectGender nextStep={handleNextStep} prevStep={handlePrevStep} />
        );
      case 4:
        return (
          <BodyParametersStep
            nextStep={handleNextStep}
            prevStep={handlePrevStep}
          />
        );
      case 5:
        return (
          <ActivityLevelStep
            nextStep={handleFinalSubmit}
            prevStep={handlePrevStep}
          />
        );
      default:
        return <div>Thank you for signing up!</div>;
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
            <BackButton type="button" onClick={handlePrevStep}>
              Back
            </BackButton>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
