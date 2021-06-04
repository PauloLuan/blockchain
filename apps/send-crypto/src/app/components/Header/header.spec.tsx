import React from 'react'
import { render } from '@testing-library/react'

import { Header } from '.'

describe('Header Page', () => {
  it('should renders Header page correctly', () => {
    const { asFragment } = render(<Header />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("should find the Header test id and it's mindingo's class", () => {
    const { getByTestId } = render(<Header />)
    const result = getByTestId('Header').textContent
    expect(result).toEqual('Header')
  })
})
