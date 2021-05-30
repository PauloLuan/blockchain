import React from 'react'
import styled from 'styled-components'
import { Login } from '../components/Login'

const StyledPage = styled.div`
  .page {
  }
`

export function Index () {
  return (
    <StyledPage>
      <Login />
    </StyledPage>
  )
}

export default Index
