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

const GoalSelectionStep = ({ nextStep, prevStep, isSubmitting }) => {
  return (
    <StepContainer>
      <Image src={image} alt="Goal selection" />
      <StepTitle>Your Goal</StepTitle>
      <StepDescription>
        Choose a goal so that we can help you effectively
      </StepDescription>

      <RadioGroupContainer role="group" aria-labelledby="my-radio-group">
        <FormControlLabel>
          <Field type="radio" name="goal" value="Lose Fat" />
          Lose Fat
        </FormControlLabel>
        <FormControlLabel>
          <Field type="radio" name="goal" value="Maintain" />
          Maintain
        </FormControlLabel>
        <FormControlLabel>
          <Field type="radio" name="goal" value="Gain Muscle" />
          Gain Muscle
        </FormControlLabel>
      </RadioGroupContainer>
      <ErrorMessage name="goal" component="div" />

      <StepButton type="submit" onClick={nextStep} disabled={isSubmitting}>
        Next
      </StepButton>
      <BackButton type="button" onClick={prevStep}>
        Back
      </BackButton>
    </StepContainer>
  );
};

export default GoalSelectionStep;
