import React from 'react'
import { render } from '@testing-library/react'

import { Login } from '.'

describe('Login Page', () => {
  it('should renders login page correctly', () => {
    const { asFragment } = render(<Login />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("should find the login test id and it's mindingo's class", () => {
    const { getByTestId } = render(<Login />)
    const result = getByTestId('login').textContent
    expect(result).toEqual('mindingo')
  })
})
