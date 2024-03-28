import * as S from './StartingPage.style'

function StartingPage() {
  return (
    <S.MainContainer>
        <S.H1>ROZPOCZNIJ PRZYGOTE Z API</S.H1>
        <S.LinkContainers>
            <S.StyledLink to="/adresses">Adresses</S.StyledLink>
            <S.StyledLink to="/orderdetails">OrderDetails</S.StyledLink>
            <S.StyledLink to="/orders">Orders</S.StyledLink>
            <S.StyledLink to="/products">Products</S.StyledLink>
            <S.StyledLink to="/users">Users</S.StyledLink>
        </S.LinkContainers>
    </S.MainContainer>
  )
}

export default StartingPage