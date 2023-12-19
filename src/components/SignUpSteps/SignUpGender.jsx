import { Field, ErrorMessage } from 'formik';
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
import image from '../../assets/backgroundImages/goals.png';

const SelectGender = ({ nextStep, prevStep, isSubmitting }) => {
  return (
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
        <Field id="age" name="age" placeholder="Enter your age" type="number" />
      </FormControlLabel>
      <ErrorMessage name="age" component="div" />

      <StepButton type="button" onClick={nextStep} disabled={isSubmitting}>
        Next
      </StepButton>
      <BackButton type="button" onClick={prevStep}>
        Back
      </BackButton>
    </StepContainer>
  );
};

export default SelectGender;
