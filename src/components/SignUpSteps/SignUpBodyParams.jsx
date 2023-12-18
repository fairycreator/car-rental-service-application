import { ErrorMessage, Formik, Form, Field } from 'formik';
import { useSignUpContext } from '../../hooks/SignUpContext';
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
const BodyParameters = ({ isSubmitting }) => {
  const { nextStage, prevStage, signUpData, addSignUpData } =
    useSignUpContext();

  const initialValues = {
    goal: signUpData.goal || '',
  };

  const handleSubmit = (values, { resetForm }) => {
    addSignUpData(values);
    nextStage();
    resetForm();
  };
  return (
    <StepContainer>
      <Image src={image} alt="Body parameters" />
      <StepTitle>Body Parameters</StepTitle>
      <StepDescription>
        Enter your parameters for correct performance tracking
      </StepDescription>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
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

          <StepButton type="submit" disabled={isSubmitting} onClick={nextStage}>
            Next
          </StepButton>
          <BackButton type="button" onClick={prevStage}>
            Back
          </BackButton>
        </Form>
      </Formik>
    </StepContainer>
  );
};

export default BodyParameters;
