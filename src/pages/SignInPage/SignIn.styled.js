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
  max-width: 320px;

  @media screen and (min-width: 834px) {
    padding: 10px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    column-gap: 104px;
    align-items: end;
    padding-left: 116px;
    padding-right: 116px;
  }
`;

export const Content = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
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
  width: 300px;
  height: 296px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin-bottom: 0;
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
  text-decoration: none;
  background: var(--color-primary-green-lite, #e3ffa8);
  color: var(--color-primary-black-2, #0f0f0f);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    width: 380px;
    margin-bottom: 238px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    margin-bottom: 208px;
  }
`;

// QuestionTrumb
export const QuestionTrumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 54px;
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

// Question
export const Question = styled.p`
  color: var(--color-primary-grey, #b6b6b6);
  font-size: 14px;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    margin-bottom: 0;
    padding-left: 42px;
  }
`;

export const ForgotPasswordText = styled.p`
  line-height: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 14px;
`;

export const WrapForm = styled.div`
  width: 100%;
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
  display: block;
  margin-right: 0;
  width: 60px;
  text-decoration: none;
  background: inherit;
  color: var(--color-primary-white, #fff);
  text-align: start;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    width: 192px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;
