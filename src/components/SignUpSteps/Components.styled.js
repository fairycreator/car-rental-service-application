import styled from 'styled-components';

export const Image = styled.img`
  height: 296px;
  width: 300px;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: transparent;
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 320px;
`;

export const StepButton = styled.button`
  background-color: #76c893;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 30px;
  margin: 10px 0;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5ea67e;
  }
`;

export const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const FormControlLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 5px 0;

  input[type='radio'] {
    margin-right: 10px;
  }
`;

export const StepTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const StepDescription = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

export const BackButton = styled.button`
  background-color: #f2f2f2;
  color: #333;
  border: none;
  border-radius: 20px;
  padding: 10px 30px;
  margin-top: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;
