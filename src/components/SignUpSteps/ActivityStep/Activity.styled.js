import styled from 'styled-components';
import { Field } from 'formik';

export const ActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000; /* Assuming a black background */
  color: #fff;
  height: 100vh;
  padding: 20px;
  font-family: 'Arial', sans-serif; /* Replace with the actual font used in the design */
`;

export const ActivityImage = styled.img`
  width: 100%;
  margin-bottom: 30px; /* Adjust as needed */
`;

export const ActivityContent = styled.div`
  width: 100%;
  max-width: 320px; /* Adjust width as per your design */
`;

export const Title = styled.h1`
  font-size: 24px; /* Adjust as per your design */
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 16px; /* Adjust as per your design */
  text-align: center;
  margin-bottom: 20px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioLabel = styled.label`
  background-color: #222; /* Adjust as needed */
  border-radius: 4px;
  color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledField = styled(Field)`
  accent-color: #0f0; /* Adjust this to match the color of the radio button in your design */
`;

export const NextButton = styled.button`
  background-color: #0f0; /* Adjust as per the button color in the design */
  color: #000; /* Adjust as per the button text color in the design */
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-weight: bold;
  width: 100%;
  margin-top: 20px; /* Space above the button */
  margin-bottom: 10px; /* Space below the button */
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #fff; /* Adjust as per the button text color in the design */
  margin-top: 10px;
  font-size: 16px;
`;
