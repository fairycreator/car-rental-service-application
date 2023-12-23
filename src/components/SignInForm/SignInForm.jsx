// import { Formik, Form } from 'formik';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../../redux/auth/authOperations';
// import { useState } from 'react';
// import signInSchema from '../../schemas/signInSchema';
// import {
//   SignInButton,
//   InputStyled,
//   WrapForm,
//   ErrorDivStyled,
//   SvgIconEye,
//   SvgIconCheckBox,
//   WrapperError,
//   LabelWrap,
//   IconWrapped,
// } from './SignInForm.styled';
// import sprite from '../../assets/images/sprite.svg';
// import validateEmail from '../../schemas/validateEmail';

// const initialValues = {
//   email: '',
//   password: '',
// };

// const SignInForm = () => {
//   const [toggleIcon, setToggleIcon] = useState(`${sprite}#icon-eye-off`);
//   const [type, setType] = useState('password');
//   const dispatch = useDispatch();

//   const handleSubmit = (values, actions) => {
//     dispatch(loginUser(values));
//     actions.resetForm();
//   };

//   const togglePassInput = () => {
//     if (type === 'password') {
//       setType('text');
//       setToggleIcon(`${sprite}#icon-eye`);
//     } else {
//       setType('password');
//       setToggleIcon(`${sprite}#icon-eye-off`);
//     }
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={signInSchema}
//       onSubmit={handleSubmit}
//     >
//       {({ errors, touched }) => {
//         const borderEmailColor = touched.email
//           ? errors.email
//             ? '1px solid #e74a3b'
//             : '1px solid #3cbc81'
//           : '1px solid var(--primary-color-green-lite)';

//         const borderPasswordColor = touched.password
//           ? errors.password
//             ? '1px solid #e74a3b'
//             : '1px solid #3cbc81'
//           : '1px solid var(--primary-color-green-lite)';

//         return (
//           <Form autoComplete="off">
//             <WrapForm>
//               <div>
//                 <LabelWrap>
//                   <InputStyled
//                     border={borderEmailColor}
//                     type="text"
//                     name="email"
//                     validate={validateEmail}
//                     placeholder="Email"
//                   />
//                 </LabelWrap>

//                 {(errors.email && touched.email) ||
//                 (!errors.email && touched.email) ? (
//                   <WrapperError>
//                     <SvgIconCheckBox
//                       fill={!errors.email && touched.email ? '#3cbc81' : null}
//                     >
//                       <use href={`${sprite}#icon-checkbox`} />
//                     </SvgIconCheckBox>
//                     <ErrorDivStyled
//                       color={!errors.email && touched.email ? '#3cbc81' : null}
//                     >
//                       {errors.email ? errors.email : 'Success email'}
//                     </ErrorDivStyled>
//                   </WrapperError>
//                 ) : null}
//               </div>

//               <div>
//                 <LabelWrap>
//                   <InputStyled
//                     border={borderPasswordColor}
//                     type={type}
//                     name="password"
//                     placeholder="Password"
//                   />
//                   <IconWrapped>
//                     <SvgIconEye onClick={togglePassInput}>
//                       <use href={toggleIcon} />
//                     </SvgIconEye>
//                   </IconWrapped>
//                 </LabelWrap>
//                 {(errors.password && touched.password) ||
//                 (!errors.password && touched.password) ? (
//                   <WrapperError>
//                     <SvgIconCheckBox
//                       fill={
//                         !errors.password && touched.password ? '#3cbc81' : null
//                       }
//                     >
//                       <use href={`${sprite}#icon-checkbox`} />
//                     </SvgIconCheckBox>
//                     <ErrorDivStyled
//                       color={
//                         !errors.password && touched.password ? '#3cbc81' : null
//                       }
//                     >
//                       {errors.password ? errors.password : 'Success password'}
//                     </ErrorDivStyled>
//                   </WrapperError>
//                 ) : null}
//               </div>
//             </WrapForm>

//             <SignInButton type="submit">Sign In</SignInButton>
//           </Form>
//         );
//       }}
//     </Formik>
//   );
// };

// export default SignInForm;
