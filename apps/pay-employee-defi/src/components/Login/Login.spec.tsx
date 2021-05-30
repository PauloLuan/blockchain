import React from 'react'
import { render } from '@testing-library/react'

import { Login } from '.'

describe('Login Page', () => {
  it('should renders login page correctly', () => {
    const { asFragment } = render(<Login />)
    expect(asFragment()).toMatchSnapshot()
  })

  describe('Form', () => {
    it('email, password and submit button fields should exists in the document', () => {
      const { getByTestId } = render(<Login />)
      expect(getByTestId('login-email-field')).toBeInTheDocument()
      expect(getByTestId('login-password-field')).toBeInTheDocument()
      expect(getByTestId('login-submit-button')).toBeInTheDocument()
    })
  })
})
