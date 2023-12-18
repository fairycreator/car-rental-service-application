import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  StepContainer,
  StepButton,
  FormControlLabel,
  StepTitle,
  StepDescription,
  Image,
  BackButton,
} from './Components.styled';
import image from '../../assets/backgroundImages/goals.png';

const validationSchema = Yup.object().shape({
  bodyparameters: Yup.string().required('Required'),
});
const BodyParameters = ({ nextStep, prevStep }) => {
  const saveToLocalStorage = (values) => {
    localStorage.setItem('goalSelection', values.activityLevel);
  };
  return (
    <Formik
      initialValues={{
        bodyparameters: '',
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
            <Image src={image} alt="Body parameters" />
            <StepTitle>Body Parameters</StepTitle>
            <StepDescription>
              Enter your parameters for correct performance tracking
            </StepDescription>

            <FormControlLabel htmlFor="height">
              Height
              <Field
                id="height"
                name="height"
                placeholder="Enter your height"
                type="number"
              />
            </FormControlLabel>
            <ErrorMessage name="height" component="div" />

            <FormControlLabel htmlFor="weight">
              Weight
              <Field
                id="weight"
                name="weight"
                placeholder="Enter your weight"
                type="number"
              />
            </FormControlLabel>
            <ErrorMessage name="weight" component="div" />

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

export default BodyParameters;
