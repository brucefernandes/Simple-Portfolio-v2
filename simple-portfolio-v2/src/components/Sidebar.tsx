import React from 'react';
import styled from 'styled-components';
import { StyledLink } from './styled';

type Props = {};

const StyledSidebar = styled.aside`
        background-color: #081521;

        min-width: 250px;
        box-shadow: inset -5px 0px 10px -5px black;

        padding: 1.7rem 1rem;
        text-transform: uppercase;

`

const StyledNav = styled.nav`
    margin: 0 -1rem;
    overflow: auto;
    font-family: 'Raleway', sans-serif;
    color: #869BA9;
`

const Sidebar = (props: Props) => {
  return (
    <StyledSidebar>
      <h3 style={{ fontSize: "1.8rem", color: "#869BA9", marginBottom: "3.2rem", fontWeight: 200 }}>
        Bruce Fernandes
      </h3>

      <StyledNav className="menu">
        <StyledLink href="#about">About</StyledLink>
        <StyledLink href="#skills">Skills</StyledLink>
        <StyledLink href="#experience">Experience</StyledLink>
        <StyledLink href="#projects">Projects</StyledLink>
        <StyledLink href="#contact">Contact</StyledLink>
      </StyledNav>
    </StyledSidebar>
  );
};

export default Sidebar;