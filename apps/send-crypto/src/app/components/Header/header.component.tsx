import {
  Logo,
  LogoContainer,
  HeaderContainer,
  TransactionButton,
  SubHeader
} from './header.styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <SubHeader>
        <LogoContainer>
          <Logo />
          <h1 data-testid='Header'>Crypto Swap</h1>
        </LogoContainer>
        <TransactionButton>Swap Crypto</TransactionButton>
      </SubHeader>
    </HeaderContainer>
  )
}
