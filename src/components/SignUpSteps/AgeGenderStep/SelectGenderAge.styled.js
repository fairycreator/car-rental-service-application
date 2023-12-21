import styled from 'styled-components';
import { Field } from 'formik';

export const GenderAgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000; /* Assuming a black background as in the image */
  color: #fff;
  height: 100vh;
  padding: 20px;
  font-family: 'Arial', sans-serif; /* Replace with the actual font used in the design */
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: 30px; /* Adjust as needed */
`;

export const GenderAgeContent = styled.div`
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
  margin-bottom: 20px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px; /* Adjust as per your design */

  // Custom radio button styles may be required here
`;

export const StyledField = styled(Field)`
  // Add styles for input fields here, for example:
  background-color: #222; /* Input background */
  border: none;
  border-radius: 4px;
  color: #fff;
  margin-bottom: 10px; /* Space between inputs */
  padding: 10px;
  width: 100%;

  &::placeholder {
    color: #555; /* Placeholder text color */
  }
`;

export const NextButton = styled.button`
  background-color: var(
    --primary-color-green-lite
  ); /* Bright green color for the button */
  color: #000; /* Text color for button */
  border: none;
  border-radius: 12px;
  padding: 10px;
  font-weight: bold;
  width: 100%;
  margin-bottom: 10px; /* Space below the button */
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #fff; /* Text color as in the design */
  margin-top: 10px;
  font-size: 16px;
`;

// You may need to implement custom radio buttons to match the design,
// as the default HTML radio buttons may not match the styling in your design.
