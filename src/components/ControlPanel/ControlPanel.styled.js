import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media screen and (min-width: 834px) {
    gap: 80px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 74px;

  @media screen and (min-width: 834px) {
    gap: 124px;
  }
`;
