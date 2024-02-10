import React from 'react'
import { routes } from '../../helpers/routes'
import { Link } from 'react-router-dom'
import './Navbar.style.css'

const Navbar = () => {
  return (
    <nav>
      <ul className='nav'>
        {routes.map((route) => (
          <li key={route.title}>
            <Link to={route.path} >{route.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar