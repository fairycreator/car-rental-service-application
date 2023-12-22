import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import image from '../../../assets/backgroundImages/genderAge.png';
import {
  GenderAgeWrapper,
  Image,
  GenderAgeContent,
  Title,
  Subtitle,
  RadioWrapper,
  RadioLabel,
  NextButton,
  BackButton,
} from './SelectGenderAge.styled';

const genderAgeSchema = Yup.object().shape({
  gender: Yup.string().required('Gender is required'),
  age: Yup.number()
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
    .max(150, 'Age must be less than 150')
    .required('Age is required'),
});

function SelectGender({ onForm, onBackPage }) {
  return (
    <GenderAgeWrapper>
      <Image src={image} alt="illustration-gender-and-age" />
      <GenderAgeContent>
        <Title>Select gender, Age</Title>
        <Subtitle>Choose a goal so that we can help you effectively</Subtitle>
        <Formik
          initialValues={{ gender: '', age: '' }}
          validationSchema={genderAgeSchema}
          onSubmit={onForm}
        >
          <Form>
            <RadioWrapper>
              <RadioLabel>
                <Field type="radio" name="gender" value="male" />
                Male
              </RadioLabel>
              <RadioLabel>
                <Field type="radio" name="gender" value="female" />
                Female
              </RadioLabel>
              <ErrorMessage name="gender" component="div" />
            </RadioWrapper>

            <RadioLabel>
              Age
              <Field type="number" name="age" placeholder="Enter your age" />
              <ErrorMessage name="age" component="div" />
            </RadioLabel>

            <NextButton type="submit">Next</NextButton>
            <BackButton type="button" onClick={onBackPage}>
              Back
            </BackButton>
          </Form>
        </Formik>
      </GenderAgeContent>
    </GenderAgeWrapper>
  );
}

export default SelectGender;
