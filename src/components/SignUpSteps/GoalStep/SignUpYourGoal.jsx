import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import image from '../../../assets/backgroundImages/goals.png';
import {
  GoalWrapper,
  Image,
  GoalContent,
  GoalTitle,
  GoalSubtitle,
  RadioWrapper,
  CustomLabel,
  NextButton,
  BackButton,
  CustomRadio,
} from './Goal.styled';

const goalSchema = Yup.object().shape({
  goal: Yup.string().required('Selecting a goal is required'),
});

function GoalSelectionStep({ onForm, onBackPage }) {
  return (
    <GoalWrapper>
      <Image src={image} alt="illustration-summer-hiking" />
      <GoalContent>
        <GoalTitle>Your goal</GoalTitle>
        <GoalSubtitle>
          Choose a goal so that we can help you effectively
        </GoalSubtitle>
        <Formik
          initialValues={{ goal: '' }}
          validationSchema={goalSchema}
          onSubmit={onForm}
        >
          {() => (
            <Form>
              <RadioWrapper>
                <CustomLabel>
                  <CustomRadio type="radio" name="goal" value="Lose Fat" />
                  Lose Fat
                </CustomLabel>
                <CustomLabel>
                  <CustomRadio type="radio" name="goal" value="Maintain" />
                  Maintain
                </CustomLabel>
                <CustomLabel>
                  <CustomRadio type="radio" name="goal" value="Gain Muscle" />
                  Gain Muscle
                </CustomLabel>
              </RadioWrapper>
              <ErrorMessage name="goal" component="div" />
              <NextButton type="submit">Next</NextButton>
              <BackButton type="button" onClick={onBackPage}>
                Back
              </BackButton>
            </Form>
          )}
        </Formik>
      </GoalContent>
    </GoalWrapper>
  );
}

export default GoalSelectionStep;
