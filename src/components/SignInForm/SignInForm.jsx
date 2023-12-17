import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/authOperations';
import { useState } from 'react';
import signInSchema from '../../schemas/signInSchema';
import {
  InputStyled,
  WrapFormStyled,
  ErrorDivStyled,
  SvgIconEyeStyled,
  SvgIconCheckBoxStyled,
  WrapperErrorStyled,
  LabelWrapStyled,
  IconWrappedStyled,
} from '../SignUpForm/SignUpForm.styled';
import { SignInButton } from './SignInForm.styled';
import sprite from '../../assets/images/sprite.svg';
import validateEmail from '../../schemas/validateEmail';

const initialValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [toggleIcon, setToggleIcon] = useState(`${sprite}#icon-eye-off`);
  const [type, setType] = useState('password');
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(loginUser(values));
    actions.resetForm();
  };

  const togglePassInput = () => {
    if (type === 'password') {
      setType('text');
      setToggleIcon(`${sprite}#icon-eye`);
    } else {
      setType('password');
      setToggleIcon(`${sprite}#icon-eye-off`);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => {
        const borderEmailColor = touched.email
          ? errors.email
            ? '1px solid #e74a3b'
            : '1px solid #3cbc81'
          : '1px solid var(--primary-color-green-lite)';

        const borderPasswordColor = touched.password
          ? errors.password
            ? '1px solid #e74a3b'
            : '1px solid #3cbc81'
          : '1px solid var(--primary-color-green-lite)';

        return (
          <Form autoComplete="off">
            <WrapFormStyled>
              <div>
                <LabelWrapStyled>
                  <InputStyled
                    border={borderEmailColor}
                    type="text"
                    name="email"
                    validate={validateEmail}
                    placeholder="Email"
                  />
                </LabelWrapStyled>

                {(errors.email && touched.email) ||
                (!errors.email && touched.email) ? (
                  <WrapperErrorStyled>
                    <SvgIconCheckBoxStyled
                      fill={!errors.email && touched.email ? '#3cbc81' : null}
                    >
                      <use href={`${sprite}#icon-checkbox`} />
                    </SvgIconCheckBoxStyled>
                    <ErrorDivStyled
                      color={!errors.email && touched.email ? '#3cbc81' : null}
                    >
                      {errors.email ? errors.email : 'Success email'}
                    </ErrorDivStyled>
                  </WrapperErrorStyled>
                ) : null}
              </div>

              <div>
                <LabelWrapStyled>
                  <InputStyled
                    border={borderPasswordColor}
                    type={type}
                    name="password"
                    placeholder="Password"
                  />
                  <IconWrappedStyled>
                    <SvgIconEyeStyled onClick={togglePassInput}>
                      <use href={toggleIcon} />
                    </SvgIconEyeStyled>
                  </IconWrappedStyled>
                </LabelWrapStyled>
                {(errors.password && touched.password) ||
                (!errors.password && touched.password) ? (
                  <WrapperErrorStyled>
                    <SvgIconCheckBoxStyled
                      fill={
                        !errors.password && touched.password ? '#3cbc81' : null
                      }
                    >
                      <use href={`${sprite}#icon-checkbox`} />
                    </SvgIconCheckBoxStyled>
                    <ErrorDivStyled
                      color={
                        !errors.password && touched.password ? '#3cbc81' : null
                      }
                    >
                      {errors.password ? errors.password : 'Success password'}
                    </ErrorDivStyled>
                  </WrapperErrorStyled>
                ) : null}
              </div>
            </WrapFormStyled>

            <SignInButton type="submit">Sign In</SignInButton>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
