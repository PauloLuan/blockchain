import { Flex } from '@chakra-ui/react'

export interface HeaderProps {
  name: string
}

export const Header = ({ name }: HeaderProps) => {
  return (
    <Flex>
      <h1 data-testid='header'>header</h1>
    </Flex>
  )
}
