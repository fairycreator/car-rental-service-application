import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary-color-black-one);
  color: var(--primary-color-white);
  min-height: 100vh;
  padding: 10px 24px;
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Illustration = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Title = styled.h2`
  color: var(--primary-color-white);
  font-size: 24px;
  font-family: 'Poppins500';
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word;
  margin-top: 24px;
`;

export const Description = styled.p`
  color: var(--primary-color-grey);
  font-size: var(--main-font-size);
  font-family: 'Poppins400';
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
  margin-top: 16px;
`;

export const FeatureList = styled.ul`
  list-style: none; 
  padding: 0; 
  margin: 20px 0; 

  @media screen and (min-width: 768px) {
    margin: 40px 0; /
  }
`;

export const Buttons = styled.div`
  margin-top: 24px;
  margin-bottom: 20px;
  display: flex;
  gap: 16px;
`;

export const StyledActionButton = styled.button`
  display: block;
  min-width: 142px;
  padding: 8px 10px;
  text-align: center;
  font-family: 'Poppins500';
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  color: var(--primary-color-black-two);
  border-radius: 12px;
  cursor: pointer;
  transition: border 0.3s var(--transition-dur-and-func);

  @media screen and (min-width: 768px) {
    min-width: 192px;
    padding: 16px 60px;
    font-size: 20px;
  }
`;

export const WelcomePrimaryBtn = styled(StyledActionButton)`
  background-color: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);

  &:hover,
  &:focus {
    background-color: rgba(182, 204, 135, 1);
  }
`;

export const WelcomeOutlinedBtn = styled(StyledActionButton)`
  background-color: transparent;
  color: var(--primary-color-white);

  &:hover,
  &:focus {
    border: 1px solid var(--primary-color-green-lite);
  }
`;
