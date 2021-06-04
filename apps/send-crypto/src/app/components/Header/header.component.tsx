import React from 'react'
import { Logo } from './header.styles'

export const Header = () => {
  return (
    <header>
      <h1 data-testid='Header'>header</h1>
      <Logo />
    </header>
  )
}
