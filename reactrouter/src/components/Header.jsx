import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <div>
          <Link to='/'>
            Home
          </Link>

          <Link to='/about'>
            About
          </Link>

          <Link to='/contact'>
            Contact
          </Link>

          <NavLink 
          to='/github' 
          className={({ isActive }) => isActive && `bg-amber-50`}>
            Github
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header