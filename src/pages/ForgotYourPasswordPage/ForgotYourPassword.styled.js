import { ErrorMessage, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Container for the whole page
export const MainContent = styled.div`
  background: var(--primary-color-black-one);
  padding-bottom: 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 8px;

  @media screen and (min-width: 834px) {
    padding-bottom: 60px;
    align-items: center;
    gap: 60px;
    padding-top: 16px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
    gap: 104px;
    padding-top: 20px;
  }
`;

export const ContentWrapper = styled.div`
  @media screen and (min-width: 834px) {
    width: 444px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 80px;
  }
`;

// Image at the top
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
    margin-bottom: 12px;
  }
`;

// Title of the page
export const Title = styled.h2`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 16px;
  text-align: start;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`;

// Description below the title
export const Description = styled.p`
  color: var(--primary-color-grey);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 21px;
    line-height: 1.45;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`;

export const FormStyled = styled(Form)`
  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;

export const SubWrapper = styled.div`
  @media screen and (min-width: 834px) {
    margin: 0 auto;
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
  }
`;

// Input fields
export const FieldStyled = styled(Field)`
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  border: ${(props) =>
    props.border || `1px solid var(--primary-color-lite-green)`};
  background: var(--primary-color-black-two);
  color: var(--primary-color-white);
  font-size: 14px;
  line-height: 1.43;

  &:placeholder-shown {
    color: var(--color-primary-grey);
    font-size: 14px;
    line-height: 1.43;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &:focus-visible {
    border: 1px solid red;
  }
`;

// Submit button
export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  text-decoration: none;
  border: transparent;
  background: var(--color-primary-green-lite, #e3ffa8);
  color: var(--color-primary-black-2, #0f0f0f);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-top: 40px;
  font-family: 'Poppins500';

  &:disabled {
    background-color: var(--primary-color-green-lite);
    cursor: not-allowed;
  }

  &:hover {
    background-color: var(--secondary-color-yellow);
  }
`;

// Links for sign up
export const SignUpPrompt = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 16px;

  width: 100%;
  margin-top: 56px;

  @media screen and (min-width: 834px) {
    margin-top: 286px;
  }

  @media screen and (min-width: 834px) {
    margin-top: 248px;
  }
`;

export const SignUpPromptText = styled.div`
  color: var(--primary-color-grey);
  font-family: 'Poppins500';
  font-size: 13px;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    font-size: 14px;
  }
`;

export const LinkStyled = styled(Link)`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  font-size: 14px;
  line-height: 1.43;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
    color: var(--secondary-color-yellow);
  }
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  margin-left: 4px;
  color: #e74a3b;
  font-family: 'Poppins400';
  font-size: 12px;
`;
