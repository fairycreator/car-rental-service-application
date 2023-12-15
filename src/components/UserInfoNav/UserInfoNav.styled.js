import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-family: 'Poppins400', sans-serif;
  font-size: var(--main-font-size);
  font-style: normal;
  line-height: var(--main-line-height);
  color: var(--primary-color-white);
`;

export const IconSetting = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-white);
`;

export const IconDown = styled.svg`
  width: 14px;
  height: 14px;
  fill: var(--primary-color-green-lite);
`;

export const AvatarName = styled.p`
  font-family: 'Poppins400', sans-serif;
  font-size: var(--main-font-size);
  font-style: normal;
  line-height: var(--main-line-height);
  margin-right: 2px;
  color: var(--primary-color-white);
`;

export const IconLogout = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-white);
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
