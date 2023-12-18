import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  StepContainer,
  RadioGroupContainer,
  FormControlLabel,
  StepTitle,
  StepDescription,
  Image,
  StepButton,
  BackButton,
} from './Components.styled';

const validationSchema = Yup.object().shape({
  activityLevel: Yup.string().required('Required'),
});

const SelectGender = ({ nextStep, prevStep }) => {
  const image = '../../assets/backgroundImages/activity.png';
  const saveToLocalStorage = (values) => {
    localStorage.setItem('activityLevel', values.activityLevel);
  };
  return (
    <Formik
      initialValues={{
        genderSelection: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        saveToLocalStorage(values);
        nextStep(values);
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <StepContainer>
            <Image src={image} alt="Select gender" />
            <StepTitle>Select Gender, Age</StepTitle>
            <StepDescription>
              Choose a goal so that we can help you effectively
            </StepDescription>
            <RadioGroupContainer role="group" aria-labelledby="gender-group">
              <FormControlLabel>
                <Field type="radio" name="gender" value="Male" />
                Male
              </FormControlLabel>
              <FormControlLabel>
                <Field type="radio" name="gender" value="Female" />
                Female
              </FormControlLabel>
            </RadioGroupContainer>
            <ErrorMessage name="gender" component="div" />

            <FormControlLabel htmlFor="age">
              Your age
              <Field
                id="age"
                name="age"
                placeholder="Enter your age"
                type="number"
              />
            </FormControlLabel>
            <ErrorMessage name="age" component="div" />

            <StepButton
              type="submit"
              disabled={isSubmitting}
              onClick={nextStep}
            >
              Next
            </StepButton>
            <BackButton type="button" onClick={prevStep}>
              Back
            </BackButton>
          </StepContainer>
        </Form>
      )}
    </Formik>
  );
};

export default SelectGender;
