import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/authOperations';
import { useState } from 'react';
import { signInSchema } from '../../schemas/signInSchema';
import {
  SignInButton,
  InputStyled,
  WrapForm,
  ErrorMsg,
  SvgIconEye,
  WrapperError,
  LabelWrap,
  IconWrapped,
} from './SignInForm.styled';
import iconeye from '../../assets/images/icons/eye.svg';
import iconeyeoff from '../../assets/images/icons/eye-off.svg';

const initialValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(loginUser(values));
    actions.resetForm();
  };

  const togglePassInput = () => {
    setShowPassword(!showPassword);
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
            <WrapForm>
              <LabelWrap>
                <InputStyled
                  border={borderEmailColor}
                  type="text"
                  name="email"
                  validate={signInSchema}
                  placeholder="Email"
                />
              </LabelWrap>

              {(errors.email && touched.email) ||
              (!errors.email && touched.email) ? (
                <WrapperError>
                  <ErrorMsg
                    color={!errors.email && touched.email ? '#3cbc81' : null}
                  >
                    {errors.email ? errors.email : 'Email is valid'}
                  </ErrorMsg>
                </WrapperError>
              ) : null}

              <LabelWrap>
                <InputStyled
                  border={borderPasswordColor}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                />
                <IconWrapped>
                  <SvgIconEye onClick={togglePassInput}>
                    <image href={showPassword ? iconeye : iconeyeoff} />
                  </SvgIconEye>
                </IconWrapped>
              </LabelWrap>
              {(errors.password && touched.password) ||
              (!errors.password && touched.password) ? (
                <WrapperError>
                  <ErrorMsg
                    color={
                      !errors.password && touched.password ? '#3cbc81' : null
                    }
                  >
                    {errors.password ? errors.password : 'Password is secure'}
                  </ErrorMsg>
                </WrapperError>
              ) : null}
            </WrapForm>

            <SignInButton type="submit">Sign In</SignInButton>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
