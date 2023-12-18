import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const RecPageContentWrapper = styled.div`
padding: 16px 10px;

@media screen and (min-width: 768px){
    padding: 24px 27px;
}

@media screen and (min-width: 1200px){

    padding: 20px 34px;
}
`


export const RecPageWrapper = styled.div`
display:flex;
flex-direction:column;

gap: 24px;
align-items: center;

@media screen and (min-width: 768px){
    
}

@media screen and (min-width: 1200px){
  flex-direction: row;
  gap: 44px;  
}

`

export const RecImage = styled.img`
width : 300px;
height: 312px;


@media screen and (min-width: 768px) {
   width : 380px;
height: 396px;
  }

  @media screen and (min-width: 1200px) {
width : 536px;
height: 560px;
  }


`

export const RecLink = styled(NavLink)`
font-size: 15px;
`

export const Image = styled.svg`
width: 16px;
height: 16px;
fill: white;
align-items: center;
`
export const RecLinkWrapper = styled.div`
display: flex ; 
gap: 6px;
align-items: center;
padding: 3px;

`