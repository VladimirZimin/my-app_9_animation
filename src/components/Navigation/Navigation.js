import React from "react";
import { StyleNav, StyledLink } from "./Navigation.styled";

const Navigation = () => (
  <>
    <StyleNav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/comments">Comments</StyledLink>
      <StyledLink to="/swiper">Swiper</StyledLink>
    </StyleNav>
  </>
);

export default Navigation;
