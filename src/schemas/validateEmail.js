import * as Yup from 'yup';

const validateEmailSchema = Yup.object().shape({
  email: Yup.string()
    .required('Required')
    .trim('Cannot include leading and trailing spaces')
    .email('Invalid email address')
    .matches(/^[\w-.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i, 'Invalid email address'),
});

export default validateEmailSchema;
