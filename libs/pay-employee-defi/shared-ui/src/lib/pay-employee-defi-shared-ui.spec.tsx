import { render } from '@testing-library/react'

import PayEmployeeDefiSharedUi from './pay-employee-defi-shared-ui'

describe('PayEmployeeDefiSharedUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PayEmployeeDefiSharedUi />)
    expect(baseElement).toBeTruthy()
  })
})
