import styled from 'styled-components';
import { Field, Form } from 'formik';
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

export const GenderAgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;

  @media screen and (min-width: 834px) {
    align-items: center;
    padding: 10px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20px;
    padding-bottom: 72px;
  }
`;

//Image
export const Image = styled.img`
  height: 296px;
  width: 300px;
  background: transparent;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 570px;
  }
`;

export const GenderAgeContent = styled.div`
  @media (min-width: 834px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1440px) {
    align-items: flex-start;
  }
`;

//Title
export const Title = styled.h1`
  color: var(--primary-color-white);
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
  }
`;

//Subtitle
export const Subtitle = styled.p`
  color: var(--primary-color-grey);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 360px;
    text-align: center;
    font-size: 22px;
    line-height: 1.45;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;

export const RadioWrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  margin-bottom: 24px;
  /* gap: 12px; */
  width: 234px;

  @media screen and (min-width: 834px) {
    /* align-items: center; */
  }

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
  }
`;

export const GenderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    gap: 16px;
    justify-content: center;
    flex-direction: column;
    align-items: start;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const StyledField = styled(Field)`
  background-color: #222;
  border: none;
  border-radius: 4px;
  color: #fff;
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;

  &::placeholder {
    color: #555;
  }
`;

export const NextButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 40px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  background: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    background-color: var(--secondary-color-yellow);
  }
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    background-color: var(--secondary-color-yellow);
  }
`;

export const BackButton = styled.button`
  display: block;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 24px;
  border: none;
  text-decoration: none;
  background: transparent;
  color: var(--primary-color-grey);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

//Radio buttons

export const CustomRadio = styled(Field)`
  margin-right: 8px;
  cursor: pointer;
  appearance: none;
  background-color: transparent;
  border: 1px solid var(--primary-color-grey);
  border-radius: 50%;
  width: 12px;
  height: 12px;
  position: relative;

  &:checked {
    border-color: var(--primary-color-green-lite);
    background-image: url(${checkedIcon});
    background-position: center;
    background-repeat: no-repeat;
  }

  &:focus {
    outline: none;
  }
`;

export const CustomLabel = styled.label`
  color: var(--primary-color-white);
  font-size: 14px;
  line-height: 1.42;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 834px) {
    justify-content: start;
  }

  ${CustomRadio}:checked + & {
    color: var(--primary-color-green-lite);
  }
`;

export const StyledFormLabel = styled.label`
  color: var(--color-primary-white, #fff);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: start;
  margin-bottom: 24px;
`;

//Input

export const InputWrap = styled.div``;

export const StyledInput = styled(Field)`
  position: relative;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  border: 2px solid var(--primary-color-green-lite);
  background: transparent;
  color: var(--primary-color-grey);
  font-size: 14px;
  line-height: 1.43;

  &.inputError {
    border: 2px solid #e74a3b;
  }

  &.inputValid {
    border: 2px solid #3cbc81;
  }

  &::placeholder {
    color: var(--color-primary-grey);
    font-size: 14px;
    line-height: 1.43;
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

//Text
export const Text = styled.p`
  margin-bottom: 12px;
  color: var(--primary-color-white);
  line-height: 1.42;
  text-align: start;
`;

//Error
export const StyledErrorMessage = styled.div`
  color: ${(props) => props.color || colors.error};
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  margin-top: 5px;
  font-size: 12px;
`;
