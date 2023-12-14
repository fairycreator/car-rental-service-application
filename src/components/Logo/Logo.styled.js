import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 16px;
  font-family: 'Poppins700';
  color: var(--primary-color-grey);

  @media screen and (min-width: 834px) {
    font-size: 22px;
  }
`;
