import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

export const PageList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const NavigateItem = styled.li`
  margin: 0 1rem;
`;

export const NavigateLink = styled(NavLink)`
  text-decoration: none;
  color: #007bff;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  transition: color 0.3s ease-in-out;

  &.active {
    color: #0056b3;
    border-bottom: 2px solid #0056b3;
  }

  &:hover {
    color: #0056b3;
  }
`;
