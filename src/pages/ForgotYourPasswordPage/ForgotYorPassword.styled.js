import styled from 'styled-components';

// Container for the whole page
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background: var(--primary-color-black-one);
  background-size: cover;
  padding: 10px;
`;

// Main content area
export const MainContent = styled.div`
  width: 90%;
  max-width: 400px;
  background: var(--primary-color-black-one);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

// Image at the top
export const Image = styled.img`
  width: 300px;
  height: 296px;
  margin-bottom: 24px;
`;

// Title of the page
export const Title = styled.h1`
  color: var(--primary-color-white);
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 16px;
`;

// Description below the title
export const Description = styled.p`
  color: var(--primary-color-white);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 24px;
`;

// Input fields
export const Input = styled.input`
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background: var(--primary-color-black-two);
  color: var(--primary-color-white);
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 40px;

  &:placeholder-shown {
    color: var(--color-primary-grey);
    font-size: 14px;
    line-height: 1.43;
  }
`;

// Submit button
export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  text-decoration: none;
  background: var(--color-primary-green-lite, #e3ffa8);
  color: var(--color-primary-black-2, #0f0f0f);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 80px;

  &:disabled {
    background-color: var(--primary-color-green-lite);
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: var(--secondary-color-yellow);
  }
`;

// Links for sign up
export const SignUpPrompt = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;

export const SignUpPromptText = styled.div`
  color: var(--primary-color-grey);
  font-family: 'Poppins500';
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 16px;
`;

export const Link = styled.div`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  font-size: 14px;
  line-height: 1.43;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
