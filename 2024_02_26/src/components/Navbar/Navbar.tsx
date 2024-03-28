import React from 'react'
import { routes } from '../../helpers/routes'
import { Link } from 'react-router-dom'
import * as S from './Navbar.style'

const Navbar = () => {
  return (
    <S.Nav>
      <S.StyledUl>
        {routes.map((route) => (
          <li key={route.title}>
            <Link to={route.path} >{route.title}</Link>
          </li>
        ))}
      </S.StyledUl>
    </S.Nav>
  )
}

export default Navbar