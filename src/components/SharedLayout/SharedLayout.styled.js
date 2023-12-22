import styled from 'styled-components';
import { hidden } from '../../GlobalStyle';

export const Container = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 16px;

  @media screen and (min-width: 834px) {
    max-width: 834px;
    margin: 0 auto;
    padding-left: 27px;
    padding-right: 27px;
    padding-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
    padding-left: 34px;
    padding-right: 34px;
    padding-top: 20px;
  }
`;

export const AppTitle = styled.h1`
  ${hidden}
`;
