import styled from 'styled-components';
import { Field, Form } from 'formik';

export const PageWrapper = styled.div`
  padding-bottom: 40px;

  @media screen and (min-width: 834px) {
    padding-bottom: 174px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 72px;
  }
`;

export const Title = styled.h2`
  font-family: 'Poppins500';
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;

  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;

    margin-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 160px;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 296px;

  @media screen and (min-width: 834px) {
    width: 376px;
    height: 374px;
  }

  @media screen and (min-width: 1440px) {
    width: 536px;
    height: 528px;
    margin-left: 116px;
  }
`;

export const FormWrapper = styled(Form)`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media screen and (min-width: 834px) {
    max-width: 491px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px 60px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 69px;
  }
`;

export const LabelInput = styled.label`
  font-family: 'Poppins500';
  font-weight: 500;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`;

export const FieldStyled = styled(Field)`
  margin-top: 12px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  color: var(--primary-color-white);
  border: 1px solid var(--primary-color-grey);
  background: var(--primary-color-black-two);
  font-family: 'Poppins400';

  &:hover {
    border-color: var(--primary-color-green-lite);
  }

  &:focus {
    border-color: var(--primary-color-green-lite);
  }
`;

export const GenderWrapper = styled.div`
  font-family: 'Poppins500';
  font-weight: 500;
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`;

export const ActivityWrapper = styled.div`
  font-family: 'Poppins500';
  font-weight: 500;
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 464px;
  }
`;

export const ActivityLabels = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LabelRadioBtn = styled.label`
  font-family: 'Poppins400';
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    width: 12px;
    height: 12px;
    display: inline-block;
    border: 1px solid var(--primary-color-grey);
    border-radius: 50%;
  }
`;

export const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 36px;
  background:
    url(<path-to-image>),
    lightgray 50% / cover no-repeat;
`;
