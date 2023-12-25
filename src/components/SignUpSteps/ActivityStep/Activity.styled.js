import styled from 'styled-components';
import { Field } from 'formik';
import checkedIcon from '../../../assets/images/icons/checked-icon.svg';

const colors = {
  text: '#FFFFFF',
  inputBorder: '#45FFBC',
  inputBorderHover: '#21CE99',
  error: '#e74a3b',
  success: '#3cbc81',
  background: 'transparent',
  iconStroke: '#FFFFFF',
};

export const ActivityWrapper = styled.div`
  margin: 0 auto;
  padding: 10px;
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 834px) {
    padding: 10px;
    align-items: flex-start;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
    flex-direction: row;
    gap: 104px;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20px;
    padding-bottom: 72px;
  }
`;

//Image
export const ActivityImage = styled.img`
  height: 296px;
  width: 300px;
  background: transparent;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
  }
`;

export const ActivityContent = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;

  @media screen and (min-width: 834px) {
    align-items: center;
    gap: 80px;
    width: 438px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
    align-items: flex-start;
    width: 328px;
  }
`;

//Title
export const Title = styled.h1`
  color: var(--color-primary-white, #fff);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
    margin-top: 60px;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
    align-items: flex-start;
  }
`;

//Subttile
export const Subtitle = styled.p`
  color: var(--color-primary-gray, #b6b6b6);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 444px;
    text-align: center;
    font-size: 22px;
    line-height: 1.45;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
    align-items: flex-start;
  }
`;

//Radiobtn warpper
export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    /* Adjust to tablet screen sizes */
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;

    > * {
      flex: 1 1 45%;
      margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 1440px) {
    /* width: 308px; */
  }
`;

// export const RadioLabel = styled.label`
//   background-color: #222;
//   border-radius: 4px;
//   color: #fff;
//   padding: 10px;
//   margin-bottom: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   @media screen and (min-width: 834px) {
//     margin-bottom: 0;
//     width: calc(50% - 20px);
//     margin: 10px;
//   }
// `;

export const StyledField = styled(Field)`
  accent-color: #0f0;
`;

export const NextButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 20px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  background: var(--color-primary-green-lite, #e3ffa8);
  color: var(--color-primary-black-2, #0f0f0f);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    background-color: var(--secondary-color-yellow);
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;

export const BackButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 20px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  background: transparent;
  color: #b6b6b6;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    background-color: transparent;
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;

//Error
export const StyledErrorMessage = styled.div`
  color: ${(props) => props.color || colors.error};
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  margin-top: -18px;
  margin-left: 9px;
  font-size: 12px;
  font-family: 'Poppins400';
`;

//Radio buttons
export const CustomRadio = styled(Field)`
  padding-left: 8px;
  cursor: pointer;
  appearance: none;
  background-color: #fff;
  border: 1px solid var(--color-primary-gray, #b6b6b6);
  border-radius: 50%;
  width: 12px;
  height: 12px;
  position: relative;

  &:checked {
    border-color: var(--color-primary-green-lite, #e3ffa8);
    background-image: url(${checkedIcon});
    background-position: center;
    background-repeat: no-repeat;
  }

  &:focus {
    outline: none;
  }
`;

export const CustomLabel = styled.label`
  font-family: 'Poppins', sans-serif;
  color: var(--color-primary-white, #fff);
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 16px;
  gap: 8px;

  ${CustomRadio}:checked + & {
    color: var(--color-primary-green-lite, #e3ffa8);
  }
`;

export const StyledFormLabel = styled.label`
  color: var(--color-primary-white, #fff);
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  margin-bottom: 24px;
`;
