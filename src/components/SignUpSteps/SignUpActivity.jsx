import { Field, ErrorMessage } from 'formik';
import {
  StepContainer,
  StepButton,
  RadioGroupContainer,
  FormControlLabel,
  StepTitle,
  StepDescription,
  Image,
  BackButton,
} from './Components.styled';
import image from '../../assets/backgroundImages/goals.png';

const ActivityLevel = ({ isSubmitting, prevStep }) => {
  return (
    <StepContainer>
      <Image src={image} alt="Activity Illustration" />
      <StepTitle>Your Activity</StepTitle>
      <StepDescription>
        To correctly calculate calorie and water intake
      </StepDescription>

      <RadioGroupContainer role="group" aria-labelledby="activity-level-group">
        <FormControlLabel>
          <Field type="radio" name="activityLevel" value="1.2" />
          1.2 - if you do not have physical activity and sedentary work
        </FormControlLabel>
        <FormControlLabel>
          <Field type="radio" name="activityLevel" value="1.375" />
          1.375 - if you do short runs or light gymnastics 1-3 times a week
        </FormControlLabel>
        <FormControlLabel>
          <Field type="radio" name="activityLevel" value="1.55" />
          1.55 - if you play sports with average loads 3-5 times a week
        </FormControlLabel>
        <FormControlLabel>
          <Field type="radio" name="activityLevel" value="1.725" />
          1.725 - if you train fully 6-7 times a week
        </FormControlLabel>
        <FormControlLabel>
          <Field type="radio" name="activityLevel" value="1.9" />
          1.9 - if your work is related to physical labor, you train 2 times a
          day and include strength exercises in your training program
        </FormControlLabel>
      </RadioGroupContainer>
      <ErrorMessage name="activityLevel" component="div" />

      <StepButton type="submit" disabled={isSubmitting}>
        Next
      </StepButton>
      <BackButton type="button" onClick={prevStep}>
        Back
      </BackButton>
    </StepContainer>
  );
};

export default ActivityLevel;
