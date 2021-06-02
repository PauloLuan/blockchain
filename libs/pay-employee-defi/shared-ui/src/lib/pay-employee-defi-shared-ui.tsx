import React from 'react'

import styled from 'styled-components'

/* eslint-disable-next-line */
export interface PayEmployeeDefiSharedUiProps {}

const StyledPayEmployeeDefiSharedUi = styled.div`
  color: pink;
`

export function PayEmployeeDefiSharedUi (props: PayEmployeeDefiSharedUiProps) {
  return (
    <StyledPayEmployeeDefiSharedUi>
      <h1>This bagaceira is on Shared UI!</h1>
    </StyledPayEmployeeDefiSharedUi>
  )
}

export default PayEmployeeDefiSharedUi
