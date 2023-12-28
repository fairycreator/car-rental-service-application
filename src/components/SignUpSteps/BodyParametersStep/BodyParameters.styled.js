import styled from 'styled-components';
import { Field } from 'formik';

const colors = {
  text: '#FFFFFF',
  inputBorder: '#45FFBC',
  inputBorderHover: '#21CE99',
  error: '#e74a3b',
  success: '#3cbc81',
  background: 'transparent',
  iconStroke: '#FFFFFF',
};

export const HealthWrapper = styled.div`
  background-color: var(--primary-color-black-one);
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
    padding-top: 20px;
    padding-bottom: 72px;
  }
`;

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

export const HealthContent = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;

  @media screen and (min-width: 834px) {
    align-items: center;
    gap: 80px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 80px;
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  color: var(--primary-color-white);
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
  color: var(--primary-color-grey);
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

export const Formstyled = styled.div`
  @media screen and (min-width: 834px) {
    margin: 0 auto;
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 0;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
  color: var(--primary-color-white);
  font-size: 14px;
  line-height: 1.43;
  font-weight: 500;
`;

export const InputStyled = styled(Field)`
  position: relative;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  border: 2px solid var(--primary-color-green-lite);
  background: var(--primary-color-black-two);
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

  @media screen and (min-width: 1440px) {
    width: 212px;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
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
  margin-bottom: 24px;
  border-radius: 12px;
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
  /* margin-top: 5px; */
  /* margin-left: 9px; */
  font-size: 12px;
  font-family: 'Poppins400';
`;
