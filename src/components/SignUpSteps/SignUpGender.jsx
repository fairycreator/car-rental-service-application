import { ErrorMessage, Formik, Form, Field } from 'formik';
import { useSignUpContext } from '../../hooks/SignUpContext';
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
import image from '../../assets/backgroundImages/goals.png';

const validationSchema = Yup.object().shape({
  genderSelection: Yup.string().required('Required'),
});

const SelectGender = ({ isSubmitting }) => {
  const { nextStage, prevStage, signUpData, addSignUpData } =
    useSignUpContext();

  const initialValues = {
    gender: signUpData.gender || '',
  };

  const handleSubmit = (values, { resetForm }) => {
    addSignUpData(values);
    nextStage();
    resetForm();
  };
  return (
    <StepContainer>
      <Image src={image} alt="Select gender" />
      <StepTitle>Select Gender, Age</StepTitle>
      <StepDescription>
        Choose a goal so that we can help you effectively
      </StepDescription>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
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

export default SelectGender;
