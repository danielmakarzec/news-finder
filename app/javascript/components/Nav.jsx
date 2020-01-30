import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

  return(
    <div>
      <NavLink to="/">Search</NavLink>
      <NavLink to="/favourite">Favourite</NavLink>
    </div>
  )
}

export default Nav
