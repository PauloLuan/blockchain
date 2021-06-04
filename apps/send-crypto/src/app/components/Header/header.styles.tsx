import styled from 'styled-components'
import { FcCurrencyExchange } from 'react-icons/fc'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: blue;
  height: 20rem;
`

export const Logo = styled(FcCurrencyExchange)`
  width: 5rem;
  height: 5rem;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  max-height: 10px;
`

export const TransactionButton = styled.button`
  height: 30px;
`
