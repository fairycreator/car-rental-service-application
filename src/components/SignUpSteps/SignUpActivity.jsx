import { ErrorMessage, Field } from 'formik';

const ActivityLevelStep = () => {
  return (
    <div>
      <h2>Your Activity</h2>
      <p>To correctly calculate calorie and water intake</p>
      <div role="group" aria-labelledby="activity-level-group">
        <label>
          <Field type="radio" name="activityLevel" value="1.2" />
          1.2 - if you do not have physical activity and sedentary work
        </label>
        <label>
          <Field type="radio" name="activityLevel" value="1.375" />
          1.375 - if you do short runs or light gymnastics 1-3 times a week
        </label>
        <label>
          <Field type="radio" name="activityLevel" value="1.55" />
          1.55 - if you play sports with average loads 3-5 times a week
        </label>
        <label>
          <Field type="radio" name="activityLevel" value="1.725" />
          1.725 - if you train fully 6-7 times a week
        </label>
        <label>
          <Field type="radio" name="activityLevel" value="1.9" />
          1.9 - if your work is related to physical labor, you train 2 times a
          day and include strength exercises in your training program
        </label>
      </div>
      <ErrorMessage name="activityLevel" component="div" />
    </div>
  );
};

export default ActivityLevelStep;
