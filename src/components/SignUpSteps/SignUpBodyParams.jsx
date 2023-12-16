import { ErrorMessage, Field } from 'formik';

const BodyParametersStep = () => {
  return (
    <div>
      <h2>Body parameters</h2>
      <p>Enter your parameters for correct performance tracking</p>
      <div>
        <label htmlFor="height">Height</label>
        <Field
          id="height"
          name="height"
          placeholder="Enter your height"
          type="number"
        />
        <ErrorMessage name="height" component="div" />
      </div>

      <div>
        <label htmlFor="weight">Weight</label>
        <Field
          id="weight"
          name="weight"
          placeholder="Enter your weight"
          type="number"
        />
        <ErrorMessage name="weight" component="div" />
      </div>
    </div>
  );
};

export default BodyParametersStep;
