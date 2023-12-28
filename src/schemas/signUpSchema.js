import * as Yup from 'yup';

const EMAIL_REGX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const signUpSchema = Yup.object().shape({
  // Validation for the name field
  name: Yup.string()
    .trim()
    .strict()
    .min(2, 'Name is too short (minimum 2 characters)')
    .max(50, 'Name is too long (maximum 50 characters)')
    .required('Name is required'),

  // Validation for the email field
  email: Yup.string()
    .trim()
    .strict()
    .matches(
      EMAIL_REGX,
      'Oops! That doesn´t look like a valid email address. Try again?'
    )
    .required('Email is required'),

  // Validation for the password field
  password: Yup.string()
    .trim()
    .strict()
    .min(6, 'Password is too short (minimum 6 characters)')
    .max(50, 'Password is too long (maximum 50 characters)')
    .required('Password is required'),
});

// // Validation for the goal field
// goal: Yup.string().required('Goal is required'),

// // Validation for the gender and age fields
// gender: Yup.string().required('Gender is required'),
// age: Yup.number()
//   .positive('Age must be a positive number')
//   .integer('Age must be an integer')
//   .max(150, 'Age must be less than 150')
//   .required('Age is required'),

// // Validation for the height and weight fields
// height: Yup.number()
//   .positive('Height must be a positive number')
//   .integer('Height must be an integer')
//   .required('Height is required'),
// weight: Yup.number()
//   .positive('Weight must be a positive number')
//   .integer('Weight must be an integer')
//   .required('Weight is required'),

// // Validation for the activity level field
// activity: Yup.number()
//   .min(1, 'Activity level must be at least 1')
//   .required('Activity level is required'),
// });
