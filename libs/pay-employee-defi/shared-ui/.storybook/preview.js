import { addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import { ChakraProvider, theme as chakraTheme } from '@chakra-ui/react'

import theme from '../src/styles/theme'

export const parameters = {
  backgrounds: {
    default: 'dark',
    layout: 'fullscreen',
    values: [
      {
        name: 'light',
        value: chakraTheme.colors.gray['50']
      },
      {
        name: 'dark',
        value: chakraTheme.colors.gray['900']
      }
    ]
  }
}

const withChakra = (Story) => (
  <ChakraProvider theme={theme}>
    <Story />
  </ChakraProvider>
)

addDecorator(withKnobs)
addDecorator(withChakra)
