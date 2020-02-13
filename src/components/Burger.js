import React from "react"
import { StyledBurger } from "./Burger.styled"
import { bool, func } from "prop-types"

const Burger = ({ open, setOpen }) => {
  return (
    <div className='navbar'>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </div>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Burger
