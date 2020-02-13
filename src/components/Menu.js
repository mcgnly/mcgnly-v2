import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool, func } from 'prop-types';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="home">&#x1f469;&#x1f3fb;&#x200d;&#x1f4bb;</span>
        Home
      </a>
      <a href="/projects">
        <span role="img" aria-label="cool projects">&#x1f469;&#x1f3fb;&#x200d;&#x1f4bb;</span>
        Cool Projects
      </a>
      <a href="/employee">
        <span role="img" aria-label="hire me as an employee">&#x1f4b8;</span>
        Hire Me As An Employee
      </a>
      <a href="/website">
        <span role="img" aria-label="need a website">&#x1f4b8;</span>
        Need A Website
      </a>
      <a href="/contact">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact Me
      </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;