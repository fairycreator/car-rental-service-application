import { Formik, Form, ErrorMessage, Field } from 'formik';
import { useSignUpContext } from '../../hooks/SignUpContext';
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

const GoalSelectionStep = ({ isSubmitting }) => {
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
      <Image src={image} alt="Goal selection" />
      <StepTitle>Your Goal</StepTitle>
      <StepDescription>
        Choose a goal so that we can help you effectively
      </StepDescription>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
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

export default GoalSelectionStep;
