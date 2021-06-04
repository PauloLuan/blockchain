import {
  Logo,
  LogoContainer,
  HeaderContainer,
  TransactionButton
} from './header.styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
        <h1 data-testid='Header'>Crypto Swap</h1>
      </LogoContainer>

      <TransactionButton>New Transaction</TransactionButton>
    </HeaderContainer>
  )
}
