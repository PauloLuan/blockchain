import { Flex, Stack, Input, Button } from '@chakra-ui/react'

export const Login = () => {
  return (
    <Flex
      data-testid='login'
      v='100vh'
      h='100vh'
      align='center'
      justify='center'
    >
      <Flex as='form'>
        <Stack>
          <Input name='name' type='email'></Input>
          <Input name='password' type='password'></Input>
          <Button
            colorScheme='blue'
            variant='solid'
            _hover={{
              bgColor: 'blue.900'
            }}
          >
            Sign In
          </Button>
        </Stack>
      </Flex>
    </Flex>
  )
}
