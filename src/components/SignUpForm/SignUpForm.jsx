// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import signUpSchema from '../../schemas/signUpSchema';
// import {
//   WrapForm,
//   LabelWrap,
//   // IconWrapped,
//   // SvgIconEye,
//   InputStyled,
//   NextButton,
// } from './SignUpForm.styled';

// const SignUpForm = ({ onForm, nameValue, emailValue, passwordValue }) => {
//   return (
//     <WrapForm>
//       <Formik
//         initialValues={{
//           name: nameValue || '',
//           email: emailValue || '',
//           password: passwordValue || '',
//         }}
//         validationSchema={signUpSchema}
//         onSubmit={onForm}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <LabelWrap>
//               Name
//               <Field as={InputStyled} type="text" name="name" />
//               <ErrorMessage name="name" component="div" />
//             </LabelWrap>

//             <LabelWrap>
//               Email
//               <Field as={InputStyled} type="email" name="email" />
//               <ErrorMessage name="email" component="div" />
//             </LabelWrap>

//             <LabelWrap>
//               Password
//               <Field as={InputStyled} type="password" name="password" />
//               <ErrorMessage name="password" component="div" />
//             </LabelWrap>

//             <NextButton type="submit" disabled={isSubmitting}>
//               Next
//             </NextButton>
//           </Form>
//         )}
//       </Formik>
//     </WrapForm>
//   );
// };

// export default SignUpForm;
