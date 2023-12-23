// import styled from 'styled-components';
// import { Field } from 'formik';

// export const SignInButtonBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   width: 100%;
// `;

// const colors = {
//   text: '#FFFFFF',
//   inputBorder: '#45FFBC',
//   inputBorderHover: '#21CE99',
//   error: '#e74a3b',
//   success: '#3cbc81',
//   background: 'transparent',
//   iconStroke: '#FFFFFF',
// };

// export const InputStyled = styled(Field)`
//   font-size: var(--main-font-size);
//   line-height: var(--main-line-height);
//   width: 100%;
//   height: 36px;
//   border-radius: 12px;
//   border: ${(props) => props.border || `1px solid ${colors.inputBorder}`};
//   padding: 14px;
//   color: ${colors.text};
//   background-color: ${colors.background};
//   transition: border var(--transition-dur-and-func);

//   &:hover,
//   &:focus {
//     border: 1px solid ${colors.inputBorderHover};
//     outline: none;
//   }
// `;

// export const ErrorDivStyled = styled.div`
//   color: ${(props) => props.color || colors.error};
//   margin-top: 4px;
//   font-size: var(--main-font-size);
//   line-height: var(--main-line-height);
//   letter-spacing: var(--main-letter-spacing);
// `;

// export const WrapForm = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
// `;

// export const SvgIconEye = styled.svg`
//   width: 16px;
//   height: 16px;
//   stroke: ${colors.iconStroke};
//   cursor: pointer;
// `;

// export const SvgIconCheckBox = styled.svg`
//   width: 16px;
//   height: 16px;
//   margin-top: 4px;
//   fill: ${(props) => props.fill || colors.error};
// `;

// export const WrapperError = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
// `;

// export const LabelWrap = styled.label`
//   position: relative;
//   display: block;
// `;

// export const IconWrapped = styled.div`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   right: 14px;
//   display: flex;
//   align-items: center;
// `;

// export const SignUpPrompt = styled.div`
//   display: flex;
//   gap: 20px;
//   justify-content: center;
//   width: 100%;
// `;

// export const SignUpPromptText = styled.div`
//   color: var(--primary-color-grey);
//   font-family: 'Poppins500';
// `;

// export const SignUpLink = styled.div`
//   color: var(--primary-color-white);
//   font-family: 'Poppins500';
//   cursor: pointer;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// export const Input = styled.input`
//   position: relative;
//   width: 100%;
//   padding: 8px 10px;
//   border-radius: 12px;
//   border: 2px solid var(--color-primary-green-lite, #e3ffa8);
//   background: var(--color-primary-black-2, #0f0f0f);
//   color: var(--primary-color-grey, #b6b6b6);
//   font-size: 14px;
//   line-height: 1.43;

//   &.inputError {
//     border: 2px solid #e74a3b;
//   }

//   &.inputValid {
//     border: 2px solid #3cbc81;
//   }

//   &::placeholder {
//     color: var(--color-primary-grey);
//     font-size: 14px;
//     line-height: 1.43;
//   }
// `;

// // Button
// export const SignInButton = styled.button`
//   display: block;
//   width: 100%;
//   padding: 8px 10px;
//   margin-top: 40px;
//   margin-bottom: 47px;
//   border-radius: 12px;
//   text-decoration: none;
//   background: var(--color-primary-green-lite, #e3ffa8);
//   color: var(--color-primary-black-2, #0f0f0f);
//   text-align: center;
//   font-size: 14px;
//   font-weight: 500;
//   line-height: 1.43;

//   @media screen and (min-width: 834px) {
//     width: 380px;
//     margin-bottom: 238px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 212px;
//     margin-bottom: 208px;
//   }
// `;
