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
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 834px) {
    gap: 60px;
    align-items: flex-start;
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
    margin-top: 80px;
    align-items: flex-start;
    width: 328px;
  }
`;

//Title
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
    align-items: flex-start;
  }
`;

//Subttile
export const Subtitle = styled.h3`
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
    align-items: flex-start;
  }
`;

//Radiobtn warpper
export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 24px;
  gap: 16px;
  flex-shrink: 0;

  @media screen and (min-width: 834px) {
    width: 470px;
    margin: 0 auto;
    > * {
      flex: 1 1 45%;
    }
  }

  @media screen and (min-width: 1440px) {
    align-items: start;
    width: 336px;
  }
`;

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
    margin-right: auto;
    margin-left: auto;
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 0;
    margin-left: 0;
    width: 212px;
  }
`;

export const BackButton = styled.button`
  display: block;
  width: 100%;
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
  background-color: transparent;
  border: 1px solid var(--primary-color-grey);
  border-radius: 100%;
  width: 12px;
  height: 12px;
  position: relative;
  flex-shrink: 0;

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
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  gap: 8px;
  flex-shrink: 0;

  ${CustomRadio}:checked + & {
    color: var(--primary-color-green-lite);
  }
`;

export const StyledFormLabel = styled.label`
  color: var(--primary-color-white);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  margin-bottom: 24px;
`;
