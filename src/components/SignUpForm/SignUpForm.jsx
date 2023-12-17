import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import signUpSchema from '../../schemas/signUpSchema';
import {
  setCurrentStep,
  updateFormData,
  submitFormData,
  loadInitialData,
} from '../../redux/signUp/signUpActions';
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

const SignUpForm = () => {
  const { step, formData } = useSelector((state) => state.signUp);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = React.useState(false);

  useEffect(() => {
    dispatch(loadInitialData());
  }, [dispatch]);

  const handleSubmit = (values) => {
    const finalData = { ...formData, ...values };
    dispatch(submitFormData(finalData));
    navigate('/main');
  };

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleNextStep = (values) => {
    const newFormData = { ...formData, ...values };
    dispatch(updateFormData(newFormData));
    dispatch(setCurrentStep(step + 1));
  };

  const handlePrevStep = () => {
    dispatch(setCurrentStep(step - 1));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <StepOne
            formData={formData}
            nextStep={handleNextStep}
            passwordShown={passwordShown}
            togglePasswordVisibility={togglePasswordVisibility}
          />
        );
      case 2:
        return (
          <GoalSelectionStep
            formData={formData}
            nextStep={handleNextStep}
            prevStep={handlePrevStep}
          />
        );
      case 3:
        return (
          <SelectGender
            formData={formData}
            nextStep={handleNextStep}
            prevStep={handlePrevStep}
          />
        );
      case 4:
        return (
          <BodyParametersStep
            formData={formData}
            nextStep={handleNextStep}
            prevStep={handlePrevStep}
          />
        );
      case 5:
        return (
          <ActivityLevelStep
            formData={formData}
            nextStep={handleSubmit}
            prevStep={handlePrevStep}
          />
        );
      default:
        return <div>Thank you for signing up!</div>;
    }
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={signUpSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form autoComplete="off">
          {renderStep()}
          {step > 1 && step < 5 && (
            <BackButton type="button" onClick={handlePrevStep}>
              Back
            </BackButton>
          )}
        </Form>
      )}
    </Formik>
  );
};

const StepOne = ({
  formData,
  nextStep,
  passwordShown,
  togglePasswordVisibility,
}) => (
  <WrapForm>
    <InputStyled
      name="name"
      type="text"
      placeholder="Name"
      defaultValue={formData.name}
    />
    <InputStyled
      name="email"
      type="email"
      placeholder="E-mail"
      defaultValue={formData.email}
    />
    <LabelWrap>
      <InputStyled
        name="password"
        type={passwordShown ? 'text' : 'password'}
        placeholder="Password"
        defaultValue={formData.password}
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
    <NextButton
      type="button"
      onClick={() =>
        nextStep({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        })
      }
    >
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

export default SignUpForm;
