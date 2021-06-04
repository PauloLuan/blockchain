import styled from 'styled-components'
import { FcCurrencyExchange } from 'react-icons/fc'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: var(--blue-dark);
  height: 20rem;
  teste: 123;
`

export const SubHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 580px;
  width: 100%;
  margin: 5rem;
`

export const Logo = styled(FcCurrencyExchange)`
  width: 5rem;
  height: 5rem;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  max-height: 10px;
  color: var(--background);
`

export const TransactionButton = styled.button`
  height: 30px;
  background-color: var(--blue-light);
`
