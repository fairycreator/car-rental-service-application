import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 12px;

  &.active {
    color: var(--primary-color-green-lite);
  }

  @media screen and (min-width: 834px) {
    font-size: var(--main-font-size);
  }
`;

export const Icon = styled.svg`
  width: 26px;
  height: 26px;
  fill: var(--primary-color-white);

  @media screen and (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`;

export const BoxNav = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
