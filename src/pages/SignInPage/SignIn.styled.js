import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Wrapper
export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 10px;
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 834px) {
    padding: 10px;
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

export const Content = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;

  @media screen and (min-width: 834px) {
    align-items: center;
    gap: 80px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
    align-items: flex-start;
  }
`;

//Title & Subtitile
export const SignUpBox = styled.div`
  text-align: left;
  margin-bottom: 24px;
`;

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

export const Subtitle = styled.h2`
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
  }
`;

// Image
export const Image = styled.img`
  height: 296px;
  width: 300px;
  background: transparent;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px; // Desktop width
    height: 588px; // Desktop height
    margin-right: 104px; // Add right margin if needed to separate from the form
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

//Button
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
    background-color: var(--primary-color-lite-green);
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;

// background-color: var(--primary-color-green-lite);
//   color: var(--primary-color-black-two);
//   padding: 8px 10px;
//   border-radius: 12px;
//   border: none;
//   width: 122px;
//   height: 36px;
//   text-align: center;
//   font-weight: 500;
//   transition: background-color, var(--transition-dur-and-func);

//   &:hover,
//   &:focus {
//     background-color: var(--primary-color-lite-green);
//   }

//   @media screen and (min-width: 834px) {
//     width: 212px;
//   }
// `;

// QuestionTrumb
export const QuestionTrumb = styled.div`
  display: flex;
  flex-direction: column; // Stack text and link vertically
  align-items: center; // Center align items for smaller screens
  margin-top: 54px;
  color: var(--color-primary-grey, #b6b6b6);

  @media screen and (min-width: 834px) {
    flex-direction: row; // Set back to row for larger screens
    justify-content: space-between; // Center horizontally
    margin-top: 220px; // Increase margin-top for desktop view
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 364px;
  }
`;

// Question
export const Question = styled.p`
  color: var(--color-primary-grey, #b6b6b6);
  font-size: 14px;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    margin-bottom: 0;
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

export const WrapForm = styled.div`
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 0;
  }
`;

export const ErrorDivStyled = styled.div`
  font-size: 12px;
  color: var(--secondary-color-pink);
  margin-top: 4px;
`;

export const SvgIconEye = styled.svg`
  fill: var(--primary-color-white);
  margin-left: auto;
`;

export const SvgIconCheckBox = styled.svg`
  fill: var(--primary-color-lite-green);
`;

export const WrapperError = styled.div`
  display: flex;
  align-items: center;
`;

export const LabelWrap = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const IconWrapped = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;

// NavLinkStyled
export const NavLinkStyled = styled(NavLink)`
  color: var(--color-primary-white, #fff);
  font-size: 14px;
  line-height: 1.43;
  text-decoration: none;
  font-weight: 500;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
