import styled from 'styled-components';

export const ContainerNav = styled.nav`
  padding: 19px 10px;
  background-color: var(--primary-color-black-two);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 834px) {
    padding: 34px 27px;
  }

  @media screen and (min-width: 1440px) {
    padding: 34px;
  }
`;
