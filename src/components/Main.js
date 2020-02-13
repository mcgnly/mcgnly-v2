import React from "react"
import styled from 'styled-components';

const StyledMain = styled.main`
{
  margin: 0 auto;
  maxWidth: 960;
  padding: 2rem 1rem 1.45rem 5rem;
  background: "#ffffff";
    
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 5rem 0 1.45rem 0;
  }
}
`

const Main = ({ children }) => {
  return (
    <StyledMain>{children}</StyledMain>
  )
}

export default Main;
