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

export const InputStyled = styled(Field)`
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  width: 100%;
  height: 36px;
  border-radius: 12px;
  border: ${(props) => props.border || `1px solid ${colors.inputBorder}`};
  padding: 14px;
  color: ${colors.text};
  background-color: ${colors.background};
  transition: border var(--transition-dur-and-func);

  &:hover,
  &:focus {
    border: 1px solid ${colors.inputBorderHover};
    outline: none;
  }
`;

export const ErrorDiv = styled.div`
  color: ${(props) => props.color || colors.error};
  margin-top: 4px;
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
`;

export const WrapForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SvgIconEye = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${colors.iconStroke};
  cursor: pointer;
`;

export const SvgIconCheckBox = styled.svg`
  width: 16px;
  height: 16px;
  margin-top: 4px;
  fill: ${(props) => props.fill || colors.error};
`;

export const WrapperError = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LabelWrap = styled.label`
  position: relative;
  display: block;
`;

export const IconWrapped = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 14px;
  display: flex;
  align-items: center;
`;
