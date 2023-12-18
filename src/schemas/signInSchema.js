import * as Yup from 'yup';

const signInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required!'),
  password: Yup.string().min(6, 'Too Short!').required('Required!'),
});

export default signInSchema;
