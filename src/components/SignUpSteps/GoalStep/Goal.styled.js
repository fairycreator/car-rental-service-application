import styled from 'styled-components';

export const GoalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000; // Black background as seen in the image
  color: #fff; // White text color
  height: 100vh; // Full viewport height
  padding: 20px;
  font-family: 'Arial', sans-serif; // Replace with the actual font used in the design
`;

export const Image = styled.img`
  max-width: 100%;
  margin-bottom: 2rem; // Adjust spacing as needed based on the design
`;

export const GoalContent = styled.div`
  width: 100%;
  max-width: 320px; // Adjust the width as per your design requirement
`;

export const GoalTitle = styled.h1`
  font-size: 2rem; // Title font size, adjust as needed
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const GoalSubtitle = styled.p`
  font-size: 1rem; // Subtitle font size, adjust as needed
  text-align: center;
  margin-bottom: 2rem;
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px; // Adjust the spacing as needed
`;

export const RadioLabel = styled.label`
  margin-bottom: 1rem;
  font-size: 1rem; // Adjust the font size as needed
  line-height: 1.5; // Adjust the line height as needed
  display: flex;
  align-items: center;
`;

export const NextButton = styled.button`
  background-color: #0f0; // Bright green button as seen in the design
  color: #000; // Text color for the button
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  font-weight: bold;
  width: 100%;
  margin-bottom: 1rem; // Adjust the margin as needed
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #fff; // White text color as seen in the design
  margin-top: 1rem; // Adjust the margin as needed
  font-size: 1rem;
`;

// Make sure to replace placeholders with actual values as per your design specs.
