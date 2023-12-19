import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import SignUp from '../../components/SignUpSteps/SignUp';
import GoalSelectionStep from '../../components/SignUpSteps/SignUpYourGoal';
import SelectGender from '../../components/SignUpSteps/SignUpGender';
import BodyParameters from '../../components/SignUpSteps/SignUpBodyParams';
import ActivityLevel from '../../components/SignUpSteps/SignUpActivity';

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

const validationSchema = Yup.object().shape({
  initialValues: Yup.string().required('Required'),
});

export const SignUpPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    SignUp,
    GoalSelectionStep,
    SelectGender,
    BodyParameters,
    ActivityLevel,
  ];
  const CurrentStep = steps[currentStep];

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleSubmit = (values, actions) => {
    if (currentStep < steps.length - 1) {
      nextStep();
      actions.setTouched({});
      actions.setSubmitting(false);
    } else {
      // Submit data to the backend
      console.log(values);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema[currentStep]}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <Form>
          <CurrentStep
            {...formikProps}
            nextStep={nextStep}
            prevStep={prevStep}
            isLastStep={currentStep === steps.length - 1}
          />
        </Form>
      )}
    </Formik>
  );
};

export default SignUpPage;
