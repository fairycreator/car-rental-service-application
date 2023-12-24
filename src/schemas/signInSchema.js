import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .trim('Cannot include leading and trailing spaces')
    .email('Invalid email')
    .required('Required!'),
  password: Yup.string()
    .trim('Cannot include leading and trailing spaces')
    .min(6, 'Too Short!')
    .required('Required!'),
});
