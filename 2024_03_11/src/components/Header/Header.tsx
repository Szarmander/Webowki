import { useState } from 'react'
import * as S from './Header.style'
import { Drawer } from '@mui/material'

interface HeaderProps {
    table: 'Adresses' | 'OrderDetails' | 'Orders' | 'Products' | 'Users'
}

function Header({table}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Header>
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <S.StyledDrawer>
          <S.H1>Wybierz tabele</S.H1>
          <S.StyledLink to="/adresses">Adresses</S.StyledLink>
          <S.StyledLink to="/orderdetails">OrderDetails</S.StyledLink>
          <S.StyledLink to="/orders">Orders</S.StyledLink>
          <S.StyledLink to="/products">Products</S.StyledLink>
          <S.StyledLink to="/users">Users</S.StyledLink>
        </S.StyledDrawer>
      </Drawer>
        <S.StyledIconButton onClick={() => setIsOpen(true)}>
          <S.StyledMenuIcon/>
        </S.StyledIconButton>
        <S.Title>
            <h1>NAJLEPSZY MOZLIWY OBSŁUGIWACZ API</h1>
            <p>Obecnie uzywasz: <S.CurrentlySpan>{table}</S.CurrentlySpan></p>
        </S.Title>
    </S.Header>
  )
}

export default Header