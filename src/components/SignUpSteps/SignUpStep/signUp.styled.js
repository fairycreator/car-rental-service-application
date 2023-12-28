import styled from 'styled-components';
import { Link } from 'react-router-dom';

const colors = {
  text: '#FFFFFF',
  inputBorder: '#45FFBC',
  inputBorderHover: '#21CE99',
  error: '#e74a3b',
  success: '#3cbc81',
  background: 'transparent',
  iconStroke: '#FFFFFF',
};

//SignUpPageComponent
export const SignUpContainer = styled.div`
  margin: 0 auto;
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 834px) {
    padding-top: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 80px;
    align-items: flex-start;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 834px) {
    gap: 60px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
    justify-content: center;
    align-items: flex-start;
  }
`;

// Image
export const Image = styled.img`
  width: 300px;
  height: 296px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
  }
`;

// Title

export const Title = styled.h1`
  color: var(--color-primary-white, #fff);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`;

// Subtitle
export const Subtitle = styled.h2`
  color: var(--color-primary-gray, #b6b6b6);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 430px;
    text-align: center;
    font-size: 22px;
    line-height: 1.45;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`;

// Form
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 0;
  }

  button:disabled {
    background-color: #b6b6b6;
  }
`;

// Input
export const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  border: 2px solid var(--color-primary-green-lite, #e3ffa8);
  background: var(--color-primary-black-2, #0f0f0f);
  color: var(--primary-color-grey, #b6b6b6);
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
`;

// Button
export const NextButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 20px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  background: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    background-color: var(--secondary-color-yellow);
  }

  &:disabled {
    background-color: var(--primary-color-green-lite) !important;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

// Label
export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// QuestionTrumb
export const QuestionTrumb = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 54px;
  margin-bottom: 40px;

  @media screen and (min-width: 834px) {
    gap: 16px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 145px;
    justify-content: flex-start;
  }
`;

// Question
export const Question = styled.p`
  flex-shrink: 0;
  line-height: 1.42;
  color: var(--primary-color-grey);
`;

// Link
export const LinkStyled = styled(Link)`
  color: var(--primary-color-white);
  line-height: 1.42;
  font-weight: 500;
  flex-shrink: 0;

  &:hover,
  &:focus {
    color: var(--primary-color-green-lite);
  }
`;

export const ForgotPasswordText = styled.p`
  line-height: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 14px;

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
  }
`;

//Errror
export const ErrorMsg = styled.div`
  color: ${(props) => props.color || colors.error};
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  margin-top: -10px;
  margin-left: 9px;
  font-size: 12px;
  font-family: 'Poppins400';
`;

//Toggle
export const SvgIconEye = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${colors.iconStroke};
  cursor: pointer;
`;

export const IconWrapped = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 14px;
  display: flex;
  align-items: center;
`;
