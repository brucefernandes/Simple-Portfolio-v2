import React from 'react'
import styled from 'styled-components'

type Props = {}

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

const StyledLink = styled.a`
  display: block;
    padding: 1em;
    text-decoration: none;
    transition: 0.2s linear;
    color: #869BA9;
    font-size: 1.2rem;
`

const Sidebar = (props: Props) => {
  return (
    <StyledSidebar>
        <h3 style={{ fontSize: "1.8rem", color: "#869BA9", marginBottom: "3.2rem", fontWeight: 200}}>
          Bruce Fernandes
        </h3>

        <StyledNav className="menu">
            <a href="#about" >About</a>
            <a href="#skills" >Skills</a>
            <a href="#experience" >Experience</a>
            <a href="#projects" >Projects</a>
            <a href="#contact" >Contact</a>

        </StyledNav>
    </StyledSidebar>
       
  )
}

export default Sidebar