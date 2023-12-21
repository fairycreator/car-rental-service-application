import styled from 'styled-components';
import { Field } from 'formik';

export const HealthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000; // Assuming a black background as in the image
  color: #fff; // White text color
  height: 100vh; // Full viewport height
  padding: 20px;
`;

export const Image = styled.img`
  max-width: 100%;
  margin-bottom: 2rem; // Space below the image
`;

export const HealthContent = styled.div`
  width: 100%;
  max-width: 320px; // Container max width
`;

export const Title = styled.h1`
  font-size: 2rem; // Title font size
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1rem; // Subtitle font size
  text-align: center;
  margin-bottom: 2rem; // Space above the form fields
`;

export const FormLabel = styled.label`
  font-size: 1rem; // Label font size
  margin-bottom: 0.5rem;
`;

export const InputStyled = styled(Field)`
  background-color: #222; // Input background
  border: none;
  border-radius: 4px;
  color: #fff; // Input text color
  margin-bottom: 1rem; // Space between inputs
  padding: 0.5rem;
  width: 100%;

  &::placeholder {
    color: #555; // Placeholder text color
  }
`;

export const NextButton = styled.button`
  background-color: #0f0; // Bright green color for the button
  color: #000; // Text color for button
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  font-weight: bold;
  width: 100%;
  margin-bottom: 1rem; // Space below the button
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #fff; // Text color as in the design
  font-size: 1rem;
  margin-top: 1rem;
`;
