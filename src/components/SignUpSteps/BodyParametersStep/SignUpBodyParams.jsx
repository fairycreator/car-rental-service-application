import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import image from '../../../assets/backgroundImages/bodyParameters.png';
import {
  HealthWrapper,
  Image,
  HealthContent,
  Title,
  Subtitle,
  FormLabel,
  InputStyled,
  NextButton,
  BackButton,
  StyledErrorMessage,
  Formstyled,
} from './BodyParameters.styled';

const bodyParametersSchema = Yup.object().shape({
  height: Yup.number()
    .min(50, 'Height must be at least 50cm')
    .max(250, 'Height must be less than 250cm')
    .positive('Height must be a positive number')
    .integer('Height must be an integer')
    .required('Height is required'),
  weight: Yup.number()
    .min(30, 'Weight must be at least 30kg')
    .max(150, 'Weight must be less than 150kg')
    .positive('Weight must be a positive number')
    .integer('Weight must be an integer')
    .required('Weight is required'),
});

function BodyParameters({ onForm, onBackPage }) {
  return (
    <HealthWrapper>
      <Image src={image} alt="Body parameters" />
      <HealthContent>
        <Title>Body parameters</Title>
        <Subtitle>
          Enter your parameters for correct performance tracking
        </Subtitle>
        <Formik
          initialValues={{ height: '', weight: '' }}
          validationSchema={bodyParametersSchema}
          onSubmit={onForm}
        >
          <Form>
            <Formstyled>
              <FormLabel>
                Height
                <Field
                  as={InputStyled}
                  type="number"
                  name="height"
                  placeholder="Enter your height (in cm)"
                />
                <ErrorMessage name="height" component={StyledErrorMessage} />
              </FormLabel>
              <FormLabel style={{ marginTop: '24px' }}>
                Weight
                <Field
                  as={InputStyled}
                  type="number"
                  name="weight"
                  placeholder="Enter your weight (in kg)"
                />
                <ErrorMessage name="weight" component={StyledErrorMessage} />
              </FormLabel>
              <NextButton type="submit">Next</NextButton>
              <BackButton type="button" onClick={onBackPage}>
                Back
              </BackButton>
            </Formstyled>
          </Form>
        </Formik>
      </HealthContent>
    </HealthWrapper>
  );
}

export default BodyParameters;
