import { Flex, Box, Spacer } from '@chakra-ui/react'

export interface HeaderProps {
  name: string
}

export const Header = ({ name }: HeaderProps) => {
  return (
    <Flex>
      <Box p='4' background='tomato'>
        Left
      </Box>
      <Spacer />
      <Box p='4' backgroundColor={'blue.500'}>
        Azul
      </Box>
    </Flex>
  )
}
