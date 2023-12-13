import styled from 'styled-components';

export const ContainerNav = styled.nav`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 16px;
  display: flex;
  gap: 1200px;

  @media screen and (min-width: 834px) {
    padding-left: 27px;
    padding-right: 27px;
    padding-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 34px;
    padding-right: 34px;
    padding-top: 20px;
  }
`;
