import { ErrorMessage, Field } from 'formik';
import image from '../../assets/backgroundImages/goals.png';
import { Image } from './Components.styled.js';

const GoalSelectionStep = ({ handleChange, values }) => {
  return (
    <div>
      <div>
        <Image src={image} alt="Activity tracker" />
      </div>
      <h2>Your goal</h2>
      <p>Choose a goal so that we can help you effectively</p>
      <div role="group" aria-labelledby="goal-group">
        <label>
          <Field
            type="radio"
            name="goal"
            value="Lose Fat"
            checked={values.goal === 'Lose Fat'}
            onChange={handleChange}
          />
          Lose Fat
        </label>
        <label>
          <Field
            type="radio"
            name="goal"
            value="Maintain"
            checked={values.goal === 'Maintain'}
            onChange={handleChange}
          />
          Maintain
        </label>
        <label>
          <Field
            type="radio"
            name="goal"
            value="Gain Muscle"
            checked={values.goal === 'Gain Muscle'}
            onChange={handleChange}
          />
          Gain Muscle
        </label>
      </div>
      <ErrorMessage name="goal" component="div" />
    </div>
  );
};

export default GoalSelectionStep;
