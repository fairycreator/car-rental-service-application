import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import image from '../../../assets/backgroundImages/activity.png';
import {
  ActivityWrapper,
  ActivityImage,
  ActivityContent,
  Title,
  Subtitle,
  RadioWrapper,
  CustomLabel,
  CustomRadio,
  NextButton,
  BackButton,
  StyledErrorMessage,
} from './Activity.styled';

const activitySchema = Yup.object().shape({
  activity: Yup.number().required('Selecting an activity level is required'),
});

function ActivityLevel({ onBackPage, onForm }) {
  return (
    <ActivityWrapper>
      <ActivityImage src={image} alt="Activity illustration" />
      <ActivityContent>
        <Title>Your Activity</Title>
        <Subtitle>To correctly calculate calorie and water intake</Subtitle>
        <Formik
          initialValues={{ activityLevel: '' }}
          validationSchema={activitySchema}
          onSubmit={onForm}
        >
          <Form>
            <RadioWrapper>
              <CustomLabel>
                <CustomRadio type="radio" name="activity" value="1.2" />
                1.2 - if you do not have physical activity and sedentary work
              </CustomLabel>
              <CustomLabel>
                <CustomRadio type="radio" name="activity" value="1.375" />
                1.375 - if you do short runs or light gymnastics 1-3 times a
                week
              </CustomLabel>
              <CustomLabel>
                <CustomRadio type="radio" name="activity" value="1.55" />
                1.55 - if you play sports with average loads 3-5 times a week
              </CustomLabel>
              <CustomLabel>
                <CustomRadio type="radio" name="activity" value="1.725" />
                1.725 - if you train fully 6-7 times a week
              </CustomLabel>
              <CustomLabel>
                <CustomRadio type="radio" name="activity" value="1.9" />
                1.9 - if your work is related to physical labor, you train 2
                times a day and include strength exercises in your training
                program
              </CustomLabel>
            </RadioWrapper>
            <ErrorMessage name="activity" component={StyledErrorMessage} />
            <NextButton type="submit">Sign Up</NextButton>
            <BackButton onClick={onBackPage}>Back</BackButton>
          </Form>
        </Formik>
      </ActivityContent>
    </ActivityWrapper>
  );
}

export default ActivityLevel;
