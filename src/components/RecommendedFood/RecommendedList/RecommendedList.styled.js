import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const RecPageContentWrapper = styled.div`
padding: 16px 10px;

@media screen and (min-width: 834px){
    padding: 24px 27px;
}

@media screen and (min-width: 1440px){

    padding: 20px 34px;
}
`


export const RecPageWrapper = styled.div`
display:flex;
flex-direction:column;

gap: 24px;
align-items: center;

@media screen and (min-width: 834px){
    
}

@media screen and (min-width: 1440px){
  flex-direction: row;
  gap: 44px;  
}

`
export const RecPageTitle = styled.h2`
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 0.8 ;

@media screen  and (min-width: 834px){
  font-size: 30px;
  line-height: 0.8 ;
}
 

`

export const RecImage = styled.img`
width : 300px;
height: 312px;


@media screen and (min-width: 834px) {
   width : 380px;
height: 396px;
  }

  @media screen and (min-width: 1440px) {
width : 536px;
height: 560px;
  }


`
export const RecForMainWrapper = styled.div`
padding-top: 20px;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
`

export const RecListTitle = styled.h2`
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 0.7 ;



`

export const RecLink = styled(NavLink)`
font-size: 15px;
display: flex ; 
justify-content: center;
align-items: center;
font-size: 16px;
font-weight: 500;
line-height: 0.7;
color: var(--primary-color-grey );
`

export const Image = styled.svg`
width: 16px;
height: 16px;
fill: var(--primary-color-grey);
align-items: center;

`
export const RecLinkWrapper = styled.div`
display: flex ; 
gap: 6px;
align-items: center;
padding: 3px;

`


export const RecList = styled.ul`
display:flex;
flex-direction: column;
align-items: flex-start;
gap: 20px;
flex-wrap: wrap;


 @media screen and (min-width: 834px) {
    flex-direction: row;  
    align-items: center;
  
}
`