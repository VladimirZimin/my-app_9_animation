import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const StyleNav = styled.nav`
  display: flex;
  margin-left: auto;
`;

export const StyledLink = styled(NavLink)`
  padding-left: 12px;
  padding-right: 12px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  color: #fff;

  &.active {
    color: #ffeb3b;
  }

  &:hover {
    color: #ffeb3b;
  }
`;
