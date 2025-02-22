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


const Sidebar = (props: Props) => {
  return (
    <StyledSidebar>
        <h3 style={{ fontSize: "1.8rem", color: "#869BA9", marginBottom: "3.2rem", fontWeight: 200}}>
          Bruce Fernandes
        </h3>

        <nav className="menu">
            <a href="#about" className="menu-item ">About</a>
            <a href="#skills" className="menu-item">Skills</a>
            <a href="#experience" className="menu-item">Experience</a>
            <a href="#projects" className="menu-item">Projects</a>
            <a href="#contact" className="menu-item">Contact</a>

        </nav>
    </StyledSidebar>
       
  )
}

export default Sidebar