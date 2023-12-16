import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import signUpSchema from '../../schemas/signUpSchema';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import {
  // Input,
  // ErrorDiv,
  // WrapForm,
  // WrapperError,
  // SvgIconCheckBox,
  // LabelWrap,
  // IconWrapped,
  // SvgIconEye,
  NextButton,
  BackButton,
} from './SignUpForm.styled';
import { SignInButton } from '../SignInForm/SignInForm.styled';
import sprite from '../../assets/images/sprite.svg';
// import validateEmail from '../../schemas/validateEmail';
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
  const [toggleIcon, setToggleIcon] = useState(`${sprite}#icon-eye-off`);
  const [type, setType] = useState('password');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    dispatch(registerUser(values));
    actions.resetForm();
    navigate('/main');
  };

  const togglePassInput = () => {
    if (type === 'password') {
      setType('text');
      setToggleIcon(`${sprite}#icon-eye`);
    } else {
      setType('password');
      setToggleIcon(`${sprite}#icon-eye-off`);
    }
  };

  const nextStep = () => setStep(step + 1);
  const previousStep = () => setStep(step - 1);

  const renderStep = (errors, touched, values, handleChange, handleBlur) => {
    switch (step) {
      case 1:
        return (
          <GoalSelectionStep
            errors={errors}
            touched={touched}
            values={values}
            handleChange={handleChange}
          />
        );
      case 2:
        return (
          <SelectGender
            errors={errors}
            touched={touched}
            values={values}
            handleChange={handleChange}
          />
        );
      case 3:
        return (
          <BodyParametersStep
            errors={errors}
            touched={touched}
            values={values}
            handleChange={handleChange}
          />
        );
      case 4:
        return (
          <ActivityLevelStep
            errors={errors}
            touched={touched}
            values={values}
          />
        );
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

          <div>
            {step > 1 && (
              <BackButton type="button" onClick={previousStep}>
                Back
              </BackButton>
            )}
            {step < 5 ? (
              <NextButton type="button" onClick={nextStep}>
                Next
              </NextButton>
            ) : (
              <SignInButton type="submit">Sign Up</SignInButton>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
