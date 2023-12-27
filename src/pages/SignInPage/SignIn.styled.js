import styled from 'styled-components';
import { Link } from 'react-router-dom';
import iconeye from '../../assets/images/icons/eye.svg';
import iconeyeoff from '../../assets/images/icons/eye-off.svg';

// Wrapper
export const Wrapper = styled.div`
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 834px) {
    gap: 60px;
  }

  @media screen and (min-width: 1440px) {
    /* max-width: 1440px; */
    /* margin: 0 auto; */
    flex-direction: row;
    gap: 104px;
    justify-content: center;
    align-items: flex-start;
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

//Title & Subtitile
export const SignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  color: var(--primary-color-white);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`;

export const Subtitle = styled.h3`
  color: var(--primary-color-grey);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 834px) {
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

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
  }
`;

// Input
export const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  border: ${(props) => props.$border};
  background: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 20px;

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
  background: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);
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

// Checkbox
export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  appearance: none;
  cursor: pointer;
  right: 14px;
  top: 14px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(100% - 2px);
    width: 16px;
    height: 16px;
    transform: translate(-50%, -50%);
    background-color: var(--primary-color-black-two);
    background-image: url(${iconeye}#eye-off);
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(100% - 2px);
    width: 16px;
    height: 16px;
    transform: translate(-50%, -50%);
    background-color: var(--primary-color-black-two);
    background-image: url(${iconeyeoff}#eye);
    visibility: visible;
  }

  @media screen and (max-width: 834px) {
    top: 50%;
    left: 50%;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: 14px;
  text-align: center;
  line-height: 1.42;

  color: var(--primary-color-grey);

  &:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
    justify-content: center;
    width: 212px;
  }
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
  color: var(--primary-color-grey);
  font-size: 14px;
  line-height: 1.42;
  font-weight: 400;
  flex-shrink: 0;
`;

// NavLinkStyled
export const NavLinkStyled = styled(Link)`
  color: var(--primary-color-white);
  line-height: 1.42;
  font-weight: 500;
  flex-shrink: 0;

  &:hover,
  &:focus {
    text-decoration: underline;
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 192;
`;

export const IconWrapped = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;
