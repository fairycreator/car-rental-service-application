import styled from "styled-components";

export const RecPageContentWrapper = styled.div`
padding: 16px 10px;

@media screen and (min-width: 838px){
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

@media screen and (min-width: 838px){
    
}

@media screen and (min-width: 1440px){
  flex-direction: row;
  gap: 44px;  
}

`

export const RecImage = styled.img`
width : 300px;
height: 312px;


@media screen and (min-width: 838px) {
   width : 380px;
height: 396px;
  }

  @media screen and (min-width: 1440px) {
width : 536px;
height: 560px;
  }


`