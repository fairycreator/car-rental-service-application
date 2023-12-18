import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
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

const validationSchema = Yup.object().shape({
  goalSelection: Yup.string().required('Required'),
});
const GoalSelectionStep = ({ nextStep, prevStep }) => {
  const saveToLocalStorage = (values) => {
    localStorage.setItem('goalSelection', values.activityLevel);
  };
  return (
    <Formik
      initialValues={{
        goalSelection: '',
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
            <Image src={image} alt="Goal selection" />
            <StepTitle>Your Goal</StepTitle>
            <StepDescription>
              Choose a goal so that we can help you effectively
            </StepDescription>
            <RadioGroupContainer role="group" aria-labelledby="goal-group">
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

export default GoalSelectionStep;
