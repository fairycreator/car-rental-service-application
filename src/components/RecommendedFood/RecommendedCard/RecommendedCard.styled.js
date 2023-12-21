import styled from "styled-components";


export const RecCard = styled.li`
border-radius: 12px;
background: var(--primary-color-black-two);

display: flex;
gap: 20px;

width: 100%;
padding: 20px 80px 20px 24px;
align-items: flex-start;

@media screen and (min-width: 834px) {

   width: calc((100% - 20px) / 2 );
}

@media screen and (min-width: 1440px) {
  
}

`

export const Image = styled.img`
width: 46px;
height: 46px;
`

export const CardTextWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 2px;
`
export const CardTitle = styled.h3`
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 0.75;
margin-bottom: 2px;
`

export const CardCalloriesWrapper = styled.div`
display: flex;
align-items: flex-start;
gap: 6px;
`

export const CardWeight = styled.p`
line-height: 1.4;
`
export const CardCallories = styled.p`
color: var(--primary-color-grey);
font-weight: 500;
line-height: 1.4;
`