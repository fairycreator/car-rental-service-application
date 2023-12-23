import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid Email*')
    .required('Email is required!'),
  password: Yup.string()
    .min(6, 'Enter a valid Password*')
    .required('Password is required!'),
});
