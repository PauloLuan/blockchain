import styled from 'styled-components'
import { FcCurrencyExchange } from 'react-icons/fc'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: var(--blue-dark);
  height: 20rem;
`

export const SubHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 980px;
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
  font-size: 1.25rem;
  color: var(--background);
  border: 0;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 3rem;
  background: var(--blue-light);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  transition: filter 0.2s;

  &:hover {
    filter: opacity(0.6);
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    transform: scale(1.1, 1.1);
  }
`
