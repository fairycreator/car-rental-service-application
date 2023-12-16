import { Formik, Form } from 'formik';
import signupSchema from '../../schema/signupSchema';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/operations';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  InputStyled,
  ErrorDivStyled,
  WrapFormStyled,
  WrapperErrorStyled,
  SvgIconCheckBoxStyled,
  LabelWrapStyled,
  IconWrappedStyled,
  SvgIconEyeStyled,
} from './SignUpForm.styled';
import { SignInButton } from '../SignInForm/SignInForm.styled';
import sprite from '../../assets/sprite.svg';
import validateEmail from '../../js/validateEmail';
import validateName from '../../js/validateName';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignUpForm = () => {
  const [toggleIcon, setToggleIcon] = useState(`${sprite}#icon-eye-off`);
  const [type, setType] = useState('password');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    dispatch(registerUser(values));
    actions.resetForm();
    navigate('/main');
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
      validationSchema={signupSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
          <WrapFormStyled>
            <div>
              <InputStyled
                border={
                  touched.name
                    ? errors.name
                      ? '1px solid #e74a3b'
                      : '1px solid #3cbc81'
                    : '1px solid #efede8'
                }
                type="text"
                name="name"
                placeholder="Name"
                validate={validateName}
              />
              {(errors.name && touched.name) ||
              (!errors.name && touched.name) ? (
                <WrapperErrorStyled>
                  <SvgIconCheckBoxStyled
                    fill={!errors.name && touched.name ? '#3cbc81' : null}
                  >
                    <use href={`${sprite}#icon-checkbox`} />
                  </SvgIconCheckBoxStyled>
                  <ErrorDivStyled
                    color={!errors.name && touched.name ? '#3cbc81' : null}
                  >
                    {errors.name ? errors.name : 'Success name'}
                  </ErrorDivStyled>
                </WrapperErrorStyled>
              ) : null}
            </div>

            <div>
              <InputStyled
                border={
                  touched.email
                    ? errors.email
                      ? '1px solid #D80027'
                      : '1px solid #3CBF61'
                    : '1px solid #EFEDE84D'
                }
                type="text"
                name="email"
                validate={validateEmail}
                placeholder="Email"
              />
              {(errors.email && touched.email) ||
              (!errors.email && touched.email) ? (
                <WrapperErrorStyled>
                  <SvgIconCheckBoxStyled
                    fill={!errors.email && touched.email ? '#3CBF61' : null}
                  >
                    <use href={`${sprite}#icon-checkbox`} />
                  </SvgIconCheckBoxStyled>
                  <ErrorDivStyled
                    color={!errors.email && touched.email ? '#3CBF61' : null}
                  >
                    {errors.email ? errors.email : 'Success email'}
                  </ErrorDivStyled>
                </WrapperErrorStyled>
              ) : null}
            </div>

            <div>
              <LabelWrapStyled>
                <InputStyled
                  border={
                    touched.password
                      ? errors.password
                        ? '1px solid #D80027'
                        : '1px solid #3CBF61'
                      : '1px solid #EFEDE84D'
                  }
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
                      !errors.password && touched.password ? '#3CBF61' : null
                    }
                  >
                    <use href={`${sprite}#icon-checkbox`} />
                  </SvgIconCheckBoxStyled>
                  <ErrorDivStyled
                    color={
                      !errors.password && touched.password ? '#3CBF61' : null
                    }
                  >
                    {errors.password ? errors.password : 'Success password'}
                  </ErrorDivStyled>
                </WrapperErrorStyled>
              ) : null}
            </div>
          </WrapFormStyled>

          <SignInButton type="submit">Sign Up</SignInButton>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
