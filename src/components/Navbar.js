import React from "react"
import styled from 'styled-components';

const Navbar = () => {
  return (
      <StyledNavbar>
        <StyledHeadline style={{}}>mcgnly labs</StyledHeadline>
      </StyledNavbar>
  )
}

const StyledHeadline = styled.h1`
@media (min-width: ${({ theme }) => theme.mobile}) {
  writing-mode: tb-rl;
  transform: rotate(-180deg);
  margin-left: -1rem ;
}
`;
const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.glassesRed};
  min-height: 100vh;
  width:10px;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  overflow:hidden;
  align-items: stretch;
  z-index:3;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 5rem;
    top: 0;
    left: 0;
  }
`;

export default Navbar
