import { Field, ErrorMessage } from 'formik';
import {
  StepContainer,
  FormControlLabel,
  StepTitle,
  StepDescription,
  Image,
  StepButton,
  BackButton,
} from './Components.styled';
import image from '../../assets/backgroundImages/goals.png';

const BodyParameters = ({
  nextStep,
  prevStep,
  // values,
  // setFieldValue,
  isSubmitting,
}) => {
  return (
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

      <StepButton type="button" onClick={nextStep} disabled={isSubmitting}>
        Next
      </StepButton>
      <BackButton type="button" onClick={prevStep}>
        Back
      </BackButton>
    </StepContainer>
  );
};

export default BodyParameters;
