import styled from 'styled-components';

export const DesktopContainer = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    gap: 80px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 74px;

  @media screen and (min-width: 1440px) {
    gap: 124px;
  }
`;
