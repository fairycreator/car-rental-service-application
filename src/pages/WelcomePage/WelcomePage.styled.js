import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  color: var(--primary-color-white);
  max-width: 320px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 8px;

  @media screen  and (min-width: 834px) {
   max-width: 834px; 
   gap: 80px;
   padding-top: 16px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
    flex-direction: row;
    gap: 104px;
    justify-content:flex-start;
    align-items: flex-start;
   
    padding: 20px 150px;
  }
`;

export const Image = styled.img`
  height: 296px;
  width: 300px;
  background: transparent;

  @media screen and (min-width: 834px) {
    width: 380px;
height: 376px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
height: 588px;
  }
`;

export const MainContent = styled.div`
 display: inline-flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 40px;

@media screen and (min-width: 834px ) {
 align-items: center;
gap: 80px;
}

@media screen and (min-width: 1440px) {
  padding-top: 80px;
  align-items: flex-start;
}
`;

export const TittleButtonWrap = styled.div`
display:flex;
flex-direction: column;
gap:24px;
`
export const TittleWrap = styled.div`
display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (min-width: 834px) {
          align-items: center;
    justify-content: center;
    }
`
export const Title = styled.h2`
  color: var(--primary-color-white);
  font-size: 24px;
  font-family: 'Poppins500';
  font-weight: 500;
  line-height: 1.25;
  
  
  @media screen  and (min-width: 834px) {
    font-size: 30px;
  
  }

 
`;

export const Description = styled.p`
  color: var(--primary-color-grey);
  font-size: 18px;
  font-family: 'Poppins400';
  font-weight: 400;
  line-height:1.3;
  word-wrap: break-word;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height:1.4;
     text-align: center;
    max-width: 444px;

  }

   @media screen and (min-width: 1440px) {
        text-align: start; 
  }
  
`;



export const Buttons = styled.div`
  
  display: flex;
align-items: center;
gap: 16px;
  
@media screen and (min-width: 834px) {
  justify-content: center;
}

@media screen and (min-width: 1440px) {
  justify-content: flex-start;
}

`;

 /*export const StyledActionButton = styled.button`
  display: inline-flex;
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
  align-items: center;
  background-color: var(--primary-color-lite-green);
  flex-direction: column;
  gap: 10px;
  position: relative;

  & .div-wrapper {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    position: relative;
  }

  & .text-wrapper {
    color: var(--primary-color-black-two);
    font-family: var(--button-text-1-font-family);
    font-size: var(--button-text-1-font-size);
    font-style: var(--button-text-1-font-style);
    font-weight: var(--button-text-1-font-weight);
    letter-spacing: var(--button-text-1-letter-spacing);
    line-height: var(--button-text-1-line-height);
    margin-top: -1px;
    position: relative;
    text-align: center;
    width: 122px; }


 

  @media screen and (min-width: 834px) {
    min-width: 192px;
    padding: 16px 60px;
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    padding: 16px 60px;
  }
`;*/

export const WelcomePrimaryBtn = styled.button`
  background-color: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);
padding: 8px 10px;
border-radius: 12px;
border: none;
width: 122px;
text-align: center;
font-weight: 500;
transition: background-color, var(--transition-dur-and-func);

  &:hover,
  &:focus {
    background-color: var(--primary-color-lite-green);
  }

  @media screen and (min-width: 834px) {
   width: 192px; 
  }
`;

export const WelcomeOutlinedBtn = styled.button`
  background-color: transparent;
  color: var(--primary-color-white);
  padding: 8px 10px;
border-radius: 12px;
border: 1px solid transparent ;
width: 122px;
text-align: center;
font-weight: 500;
transition: border-color, var(--transition-dur-and-func);

  &:hover,
  &:focus {
    border-color:var(--primary-color-green-lite);
    
  }
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: wrap;


  @media screen and (min-width: 834px) {
   flex-direction: row;
   align-items: center;
   justify-content: center;
   max-width: 444px;
       padding-left: 20px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
        padding-left:0;
  }
`;
