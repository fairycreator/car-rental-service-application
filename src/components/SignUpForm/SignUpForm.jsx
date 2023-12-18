// import { Formik, Form, Field } from 'formik';
// import { Link } from 'react-router-dom';
// import signUpSchema from '../../schemas/signUpSchema';
// import {
//   WrapForm,
//   LabelWrap,
//   IconWrapped,
//   SvgIconEye,
//   InputStyled,
//   NextButton,
//   SignUpLink,
//   SignUpPrompt,
//   SignUpPromptText,
// } from './SignUpForm.styled';
// import sprite from '../../assets/images/sprite.svg';
// import { useSignUpContext } from '../../hooks/SignUpContext';

// const SignUpForm = () => {
//   const { nextStage, addSignUpData } = useSignUpContext();

//   return (
//     <Formik
//       initialValues={{
//         name: '',
//         email: '',
//         password: '',
//       }}
//       validationSchema={signUpSchema}
//       onSubmit={(values) => {
//         addSignUpData(values);
//         nextStage();
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form autoComplete="off">
//           <WrapForm>
//             <Field
//               as={InputStyled}
//               name="name"
//               type="text"
//               placeholder="Name"
//             />
//             <Field
//               as={InputStyled}
//               name="email"
//               type="email"
//               placeholder="E-mail"
//             />
//             <LabelWrap>
//               <Field
//                 as={InputStyled}
//                 name="password"
//                 type="password"
//                 placeholder="Password"
//               />
//               <IconWrapped>
//                 <SvgIconEye>
//                   <use href={`${sprite}#icon-eye-off`} />
//                 </SvgIconEye>
//               </IconWrapped>
//             </LabelWrap>
//             <NextButton type="submit" disabled={isSubmitting}>
//               Next
//             </NextButton>
//           </WrapForm>
//           <SignUpPrompt>
//             <SignUpPromptText>Do you already have an account?</SignUpPromptText>
//             <Link to="/signin">
//               <SignUpLink>Sign in</SignUpLink>
//             </Link>
//           </SignUpPrompt>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default SignUpForm;

import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import sprite from '../../assets/images/sprite.svg';
import {
  WrapForm,
  LabelWrap,
  IconWrapped,
  SvgIconEye,
  InputStyled,
  NextButton,
  SignUpLink,
  SignUpPrompt,
  SignUpPromptText,
} from './SignUpForm.styled';
import { useSignUpContext } from '../../hooks/SignUpContext';
import signUpSchema from '../../schemas/signUpSchema';

const SignUpForm = () => {
  const [visible, setVisible] = useState(false);

  // const dispatch = useDispatch();

  const { nextStage, addSignUpData, signUpData } = useSignUpContext();
  const initialValues = {
    name: signUpData.name || '',
    email: signUpData.email || '',
    password: signUpData.password || '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    addSignUpData(values);
    resetForm();
    nextStage();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <WrapForm>
            <Field
              as={InputStyled}
              name="name"
              type="text"
              placeholder="Name"
            />
            <Field
              as={InputStyled}
              name="email"
              type="email"
              placeholder="E-mail"
            />
            <LabelWrap>
              <Field
                as={InputStyled}
                id="password"
                name="password"
                type={visible ? 'text' : 'password'}
                placeholder="Password"
              />
              <IconWrapped onClick={() => setVisible(!visible)}>
                <SvgIconEye>
                  <use
                    href={`${sprite}#${visible ? 'icon-eye' : 'icon-eye-off'}`}
                  />
                </SvgIconEye>
              </IconWrapped>
            </LabelWrap>
            <NextButton type="submit" disabled={isSubmitting}>
              Sign up
            </NextButton>
          </WrapForm>
          <SignUpPrompt>
            <SignUpPromptText>Do you already have an account?</SignUpPromptText>
            <Link to="/signin">
              <SignUpLink>Sign in</SignUpLink>
            </Link>
          </SignUpPrompt>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
