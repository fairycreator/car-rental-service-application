import { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import signUpSchema from '../../schemas/signUpSchema';
import {
  WrapForm,
  LabelWrap,
  IconWrapped,
  SvgIconEye,
  InputStyled,
  NextButton,
  BackButton,
  SignUpLink,
  SignUpPrompt,
  SignUpPromptText,
} from './SignUpForm.styled';
import sprite from '../../assets/images/sprite.svg';
import GoalSelectionStep from '../SignUpSteps/SignUpYourGoal';
import SelectGender from '../SignUpSteps/SignUpGender';
import BodyParametersStep from '../SignUpSteps/SignUpBodyParams';
import ActivityLevelStep from '../SignUpSteps/SignUpActivity';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    goal: '',
    gender: '',
    age: '',
    height: '',
    weight: '',
    activityLevel: '',
  });
  const [passwordShown, setPasswordShown] = useState(false);

  useEffect(() => {
    // Load initial data from local storage or set default values
    const savedData = localStorage.getItem('signUpData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleNextStep = (newData) => {
    const updatedFormData = { ...formData, ...newData };
    setFormData(updatedFormData);
    setStep(step + 1);
    localStorage.setItem('signUpData', JSON.stringify(updatedFormData));
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (values, actions) => {
    try {
      await axios.post('http://.../signup', formData);
      navigate('/main');
      localStorage.removeItem('signUpData');
    } catch (error) {
      console.error('Error during form submission:', error.response || error);
      actions.setFieldError(
        'general',
        'An error occurred while submitting the form.'
      );
      actions.resetForm();
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
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
    <SignUpPrompt>
      <SignUpPromptText>Do you already have an account?</SignUpPromptText>
      <Link to="/signin">
        <SignUpLink>Sign in</SignUpLink>
      </Link>
    </SignUpPrompt>
  </WrapForm>
);

export default SignUpForm;
